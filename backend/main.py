from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import asyncio
import aiohttp

# Загружаем переменные окружения
load_dotenv()

app = FastAPI(title="NeuroBoost Chatbot API", version="1.0.0")

# CORS middleware для работы с фронтендом
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "http://localhost:5174"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

# Вызов LLM (OpenRouter/OpenAI совместимый API)
async def call_openrouter_api(message: str) -> str:
    try:
        # Настройка OpenRouter API из переменных окружения
        api_key = os.getenv("OPENROUTER_API_KEY")
        api_base = os.getenv("OPENROUTER_API_BASE", "https://openrouter.ai/api/v1")
        model = os.getenv("OPENAI_MODEL", "openai/gpt-4o-mini")
        
        if not api_key:
            return "Ошибка: API ключ не настроен. Создайте файл .env в папке backend и добавьте OPENROUTER_API_KEY=ваш_ключ"
        
        # Используем aiohttp для более быстрых запросов
        async with aiohttp.ClientSession(timeout=aiohttp.ClientTimeout(total=60)) as session:
            headers = {
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
                "HTTP-Referer": "https://neuroboost.kz",
                "X-Title": "NeuroBoost Chatbot"
            }
            
            payload = {
                "model": model,
                "messages": [
                    {"role": "system", "content": "Ты — NeuroBoost ChatBot. Отвечай на русском языке. Давай полезные и точные ответы."},
                    {"role": "user", "content": message}
                ],
                "max_tokens": 1500,
                "temperature": 0.6,
                "stream": False
            }
            
            # Повторы при временных ошибках (429/5xx)
            retry_statuses = {429, 500, 502, 503, 504}
            for attempt in range(3):
                async with session.post(f"{api_base}/chat/completions", 
                                      headers=headers, 
                                      json=payload) as response:
                    if response.status == 200:
                        data = await response.json()
                        return data["choices"][0]["message"]["content"]
                    elif response.status in retry_statuses and attempt < 2:
                        await asyncio.sleep(1.5 * (attempt + 1))
                        continue
                    else:
                        error_text = await response.text()
                        return f"Ошибка API ({response.status}): {error_text}"
                    
    except asyncio.TimeoutError:
        return "Извините, запрос занял слишком много времени (более 30 секунд). Попробуйте еще раз или задайте более простой вопрос."
    except aiohttp.ClientError as e:
        return f"Ошибка соединения: {str(e)}"
    except Exception as e:
        return f"Извините, произошла ошибка: {str(e)}"

@app.get("/")
async def root():
    return {"message": "NeuroBoost Chatbot API is running!"}

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        reply = await call_openrouter_api(request.message)
        return ChatResponse(reply=reply)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка обработки запроса: {str(e)}")

@app.get("/health")
async def health_check():
    return {"status": "healthy", "message": "API is working correctly"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
