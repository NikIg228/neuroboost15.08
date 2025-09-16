#!/usr/bin/env python3
"""
Скрипт для запуска NeuroBoost Chatbot Backend
"""

import uvicorn
import os
import sys

def main():
    # Проверяем наличие data.json
    if not os.path.exists('data.json'):
        print("❌ Ошибка: Файл data.json не найден!")
        print("Убедитесь, что файл data.json находится в папке backend/")
        sys.exit(1)
    
    print("🚀 Запуск NeuroBoost Chatbot Backend...")
    print("📡 API будет доступен по адресу: http://localhost:8000")
    print("📚 Документация API: http://localhost:8000/docs")
    print("💡 Для остановки нажмите Ctrl+C")
    print("-" * 50)
    
    try:
        uvicorn.run(
            "main:app",
            host="0.0.0.0",
            port=8000,
            reload=True,
            log_level="info"
        )
    except KeyboardInterrupt:
        print("\n👋 Сервер остановлен")
    except Exception as e:
        print(f"❌ Ошибка запуска сервера: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
