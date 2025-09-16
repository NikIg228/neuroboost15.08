# ⚡ Быстрая настройка безопасности

## 🔧 Что нужно сделать:

### 1. **Создайте файл .env в папке backend:**
```bash
cd backend
```

Создайте файл `.env` со следующим содержимым:
```env
OPENROUTER_API_KEY=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
OPENROUTER_API_BASE=https://openrouter.ai/api/v1
OPENAI_MODEL=openai/gpt-5
HOST=0.0.0.0
PORT=8000
```

### 2. **Установите зависимости:**
```bash
pip install -r requirements.txt
```

### 3. **Запустите backend:**
```bash
python start.py
```

## ✅ Готово!

- API ключ теперь в переменных окружения
- Файл .env не попадет в Git
- Безопасность настроена

---
*Инструкция: $(date)*
