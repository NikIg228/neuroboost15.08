# 🔐 Настройка безопасности

## ✅ Что сделано:

### 1. **Обновлен .gitignore**
- Добавлены все файлы с секретными ключами
- Исключены файлы конфигурации
- Защищены переменные окружения

### 2. **API ключ вынесен в переменные окружения**
- Создан файл `backend/env.example` с примером конфигурации
- Обновлен `backend/main.py` для использования переменных окружения
- Добавлена зависимость `python-dotenv`

## 🚀 Как настроить:

### 1. **Создайте файл .env в папке backend:**
```bash
cd backend
cp env.example .env
```

### 2. **Отредактируйте .env файл:**
```env
# OpenRouter API Configuration
OPENROUTER_API_KEY=ваш_реальный_api_ключ_здесь
OPENROUTER_API_BASE=https://openrouter.ai/api/v1

# OpenAI Model Configuration
OPENAI_MODEL=openai/gpt-5

# Server Configuration
HOST=0.0.0.0
PORT=8000
```

### 3. **Установите зависимости:**
```bash
cd backend
pip install -r requirements.txt
```

### 4. **Запустите backend:**
```bash
python start.py
```

## 🔒 Безопасность:

### **Файлы в .gitignore:**
- `.env` - переменные окружения
- `backend/.env` - backend переменные
- `**/api_keys.txt` - файлы с API ключами
- `**/secrets.txt` - файлы с секретами
- `**/config.json` - файлы конфигурации
- `*.db` - файлы баз данных

### **Что НЕ попадет в Git:**
- API ключи
- Пароли
- Секретные токены
- Файлы конфигурации с секретами
- Базы данных

## ⚠️ Важно:

1. **НИКОГДА не коммитьте файл .env**
2. **Используйте env.example как шаблон**
3. **Регулярно обновляйте API ключи**
4. **Проверяйте .gitignore перед коммитом**

---
*Настроено: $(date)*
