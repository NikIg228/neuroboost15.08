from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import os
import re
from typing import Dict, List, Any
import openai
from dotenv import load_dotenv

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

# Модель для запроса
class ChatRequest(BaseModel):
    message: str

# Модель для ответа
class ChatResponse(BaseModel):
    reply: str

# Загружаем данные из JSON файла
def load_data():
    try:
        with open('data.json', 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return {"services": [], "faq": [], "company_info": {}}

# Функция для поиска релевантной информации в локальных данных
def find_relevant_info(message: str, data: Dict[str, Any]) -> str:
    message_lower = message.lower().strip()
    
    # Поиск по FAQ - более точное совпадение
    for faq in data.get("faq", []):
        faq_words = set(faq["question"].lower().split())
        message_words = set(message_lower.split())
        # Если есть пересечение ключевых слов (минимум 2 слова)
        if len(faq_words.intersection(message_words)) >= 2:
            return f"Вот ответ на ваш вопрос:\n\n**{faq['question']}**\n\n{faq['answer']}"
    
    # Поиск по услугам - более точное совпадение
    relevant_services = []
    for service in data.get("services", []):
        service_words = set(service["title"].lower().split())
        message_words = set(message_lower.split())
        
        # Проверяем пересечение с названием услуги (минимум 2 слова)
        if len(service_words.intersection(message_words)) >= 2:
            relevant_services.append(service)
        # Проверяем описание только если есть конкретные ключевые слова
        elif any(keyword in message_lower for keyword in ["описание", "что такое", "расскажи про"]):
            if any(keyword in service["description"].lower() for keyword in message_lower.split()):
                relevant_services.append(service)
    
    if relevant_services:
        response = "Вот подходящие услуги для вас:\n\n"
        for service in relevant_services[:3]:
            response += f"**{service['title']}** - {service['price']}\n"
            response += f"{service['description']}\n\n"
            if service.get('benefits'):
                response += "Основные преимущества:\n"
                for benefit in service['benefits'][:3]:
                    response += f"• {benefit}\n"
                response += "\n"
        return response
    
    # Поиск по общей информации о компании
    company_info = data.get("company_info", {})
    company_keywords = ["компания", "о нас", "neuroboost", "опыт", "клиенты"]
    if any(keyword in message_lower for keyword in company_keywords):
        response = f"**{company_info.get('name', 'NeuroBoost')}**\n\n"
        response += f"{company_info.get('description', '')}\n\n"
        response += f"**Специализация:** {company_info.get('specialization', '')}\n"
        response += f"**Опыт:** {company_info.get('experience', '')}\n"
        response += f"**Клиенты:** {company_info.get('clients', '')}\n"
        response += f"**Локация:** {company_info.get('location', '')}\n\n"
        response += "Мы помогаем бизнесу автоматизировать процессы с помощью искусственного интеллекта. Хотите узнать больше о наших услугах?"
        return response
    
    return ""

# Функция для определения, относится ли вопрос к сайту/услугам
def is_website_related(message: str, data: Dict[str, Any]) -> bool:
    message_lower = message.lower().strip()
    
    # Исключаем общие вопросы и слова
    general_questions = [
        "как дела", "как поживаешь", "что нового", "привет", "здравствуй",
        "спасибо", "пока", "до свидания", "хорошо", "плохо", "нормально",
        "время", "дата", "погода", "анекдот", "шутка", "расскажи",
        "как ты", "как", "что", "где", "когда", "почему", "зачем", "кто",
        "привет", "здравствуй", "спасибо", "пока", "до свидания"
    ]
    
    # Если это общий вопрос - не ищем в локальной базе
    if any(general in message_lower for general in general_questions):
        return False
    
    # Ключевые слова, связанные с сайтом и услугами
    website_keywords = [
        "услуга", "услуги", "каталог", "цена", "стоимость", "заказать", "купить",
        "neuroboost", "нейробуст", "ии", "искусственный интеллект", "автоматизация",
        "чат-бот", "gpt", "аудит", "аналитика", "прогноз", "контент", "маркетинг",
        "crm", "бухгалтерия", "рекрутинг", "документы", "голос", "звонки",
        "трансформация", "внедрение", "интеграция", "консультация", "поддержка"
    ]
    
    # Проверяем наличие ключевых слов
    if any(keyword in message_lower for keyword in website_keywords):
        return True
    
    return False

# Функция для вызова OpenRouter API
async def call_openrouter_api(message: str) -> str:
    try:
        # Настройка OpenRouter API из переменных окружения
        api_key = os.getenv("OPENROUTER_API_KEY")
        api_base = os.getenv("OPENROUTER_API_BASE", "https://openrouter.ai/api/v1")
        model = os.getenv("OPENAI_MODEL", "openai/gpt-5")
        
        if not api_key:
            return "Ошибка: API ключ не настроен. Создайте файл .env в папке backend и добавьте OPENROUTER_API_KEY=ваш_ключ"
        
        openai.api_key = api_key
        openai.api_base = api_base
        
        # Вызов GPT-5 через OpenRouter
        response = await openai.ChatCompletion.acreate(
            model=model,
            messages=[
                {"role": "system", "content": "Ты умный помощник NeuroBoost, специализирующийся на ИИ-решениях для бизнеса. Отвечай на русском языке, будь дружелюбным и профессиональным. Если вопрос не связан с ИИ или бизнесом, отвечай кратко и вежливо."},
                {"role": "user", "content": message}
            ],
            max_tokens=500,
            temperature=0.7
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Извините, произошла ошибка при обращении к ИИ: {str(e)}"

@app.get("/")
async def root():
    return {"message": "NeuroBoost Chatbot API is running!"}

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        # Загружаем локальные данные
        data = load_data()
        
        # Проверяем, относится ли вопрос к сайту/услугам
        if is_website_related(request.message, data):
            # Ищем релевантную информацию в локальных данных
            relevant_info = find_relevant_info(request.message, data)
            
            if relevant_info:
                # Если нашли релевантную информацию, возвращаем её
                return ChatResponse(reply=relevant_info)
            else:
                # Если не нашли точного совпадения, но вопрос связан с сайтом
                return ChatResponse(
                    reply="Это интересный вопрос о наших услугах! К сожалению, я не нашел точного ответа в базе знаний. Рекомендую связаться с нашими специалистами для получения подробной консультации. Вы можете заказать консультацию прямо на сайте или посмотреть наш каталог услуг."
                )
        else:
            # Если вопрос не связан с сайтом, обращаемся к OpenRouter API
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
