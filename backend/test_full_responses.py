#!/usr/bin/env python3
"""
Тест полных ответов от ChatGPT
"""

import requests

def test_full_responses():
    questions = [
        "Сколько будет 2+2?",
        "Расскажи про ядерную физику",
        "Что такое Python?",
        "Как работает интернет?",
        "Расскажи про космос"
    ]
    
    print("🧪 Тестирование полных ответов от ChatGPT")
    print("=" * 60)
    
    for i, question in enumerate(questions, 1):
        print(f"\n{i}️⃣ Вопрос: {question}")
        try:
            response = requests.post(
                "http://localhost:8000/chat",
                json={"message": question},
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                reply = data['reply']
                
                # Проверяем, есть ли рекомендации услуг
                has_recommendations = "neuroboost.kz" in reply or "каталог" in reply.lower()
                
                if has_recommendations:
                    print("✅ Рекомендации услуг добавлены")
                else:
                    print("❌ Рекомендации услуг НЕ добавлены")
                
                print(f"📝 Ответ: {reply[:200]}...")
                
            else:
                print(f"❌ Ошибка: {response.status_code}")
                
        except Exception as e:
            print(f"❌ Ошибка: {e}")
    
    print("\n" + "=" * 60)
    print("🎉 Тестирование завершено!")

if __name__ == "__main__":
    test_full_responses()
