#!/usr/bin/env python3
"""
Скрипт для тестирования API чат-бота
"""

import requests
import json
import time

def test_api():
    base_url = "http://localhost:8000"
    
    print("🧪 Тестирование NeuroBoost Chatbot API")
    print("=" * 50)
    
    # Тест 1: Проверка здоровья API
    print("1️⃣ Проверка здоровья API...")
    try:
        response = requests.get(f"{base_url}/health")
        if response.status_code == 200:
            print("✅ API работает корректно")
        else:
            print(f"❌ Ошибка: {response.status_code}")
            return
    except requests.exceptions.ConnectionError:
        print("❌ Ошибка: Не удается подключиться к API")
        print("Убедитесь, что backend запущен: python start.py")
        return
    
    # Тест 2: Вопрос о услугах (локальный ответ)
    print("\n2️⃣ Тест локального ответа...")
    test_questions = [
        "Какие у вас услуги?",
        "Сколько стоит ChatGPT-консультант?",
        "Что такое ИИ-аудит?",
        "Расскажи про генератор контента"
    ]
    
    for question in test_questions:
        print(f"\n❓ Вопрос: {question}")
        try:
            response = requests.post(
                f"{base_url}/chat",
                json={"message": question},
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                print(f"✅ Ответ: {data['reply'][:100]}...")
            else:
                print(f"❌ Ошибка: {response.status_code}")
        except Exception as e:
            print(f"❌ Ошибка: {e}")
    
    # Тест 3: Общий вопрос (требует OpenRouter API)
    print("\n3️⃣ Тест общего вопроса...")
    general_question = "Как дела? Расскажи анекдот"
    print(f"❓ Вопрос: {general_question}")
    
    try:
        response = requests.post(
            f"{base_url}/chat",
            json={"message": general_question},
            headers={"Content-Type": "application/json"}
        )
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Ответ: {data['reply']}")
        else:
            print(f"❌ Ошибка: {response.status_code}")
    except Exception as e:
        print(f"❌ Ошибка: {e}")
    
    print("\n" + "=" * 50)
    print("🎉 Тестирование завершено!")
    print("\n💡 Для полной функциональности:")
    print("1. Добавьте OpenRouter API ключ в main.py")
    print("2. Раскомментируйте код вызова API")
    print("3. Перезапустите backend")

if __name__ == "__main__":
    test_api()
