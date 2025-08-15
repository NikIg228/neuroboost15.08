import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Users, Target, Award, Globe, TrendingUp, Shield, Clock, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Результативность',
      description: 'Каждое решение направлено на достижение конкретных бизнес-целей'
    },
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Гарантируем безопасность данных и стабильную работу систем'
    },
    {
      icon: Lightbulb,
      title: 'Инновации',
      description: 'Используем самые передовые технологии ИИ и машинного обучения'
    },
    {
      icon: Users,
      title: 'Партнерство',
      description: 'Мы не просто исполнители, а долгосрочные партнеры в развитии'
    }
  ];

  const team = [
    {
      name: 'Алексей Петров',
      position: 'CEO & AI Architect',
      experience: '8+ лет в ИИ',
      description: 'Эксперт по машинному обучению и нейросетям'
    },
    {
      name: 'Мария Козлова',
      position: 'CTO',
      experience: '6+ лет в разработке',
      description: 'Специалист по внедрению корпоративных ИИ-решений'
    },
    {
      name: 'Дмитрий Соколов',
      position: 'Lead Data Scientist',
      experience: '7+ лет в Data Science',
      description: 'Эксперт по анализу данных и прогнозированию'
    },
    {
      name: 'Анна Волкова',
      position: 'Head of Business Development',
      experience: '5+ лет в консалтинге',
      description: 'Специалист по бизнес-процессам и автоматизации'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О компании <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NeuroBoost</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Мы — команда экспертов по искусственному интеллекту, которая помогает бизнесам 
              использовать возможности ИИ для решения реальных задач и достижения конкретных результатов.
            </p>
          </div>
        </AnimatedSection>

        {/* Mission Section */}
        <AnimatedSection delay={200}>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия</h2>
                <p className="text-gray-600 mb-6">
                  Сделать искусственный интеллект доступным и полезным для каждого бизнеса. 
                  Мы верим, что ИИ должен решать реальные проблемы и приносить измеримую пользу.
                </p>
                <p className="text-gray-600">
                  Наша цель — не просто внедрить технологии, а создать устойчивое конкурентное 
                  преимущество для наших клиентов через умную автоматизацию и оптимизацию процессов.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Globe className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900">20+</div>
                    <div className="text-gray-600">стран</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-gray-600">проектов</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900">200%</div>
                    <div className="text-gray-600">рост эффективности</div>
                  </div>
                  <div className="text-center">
                    <Clock className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900">от 5</div>
                    <div className="text-gray-600">дней внедрения</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection delay={300}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Наши ценности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Team Section */}
        <AnimatedSection delay={400}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Наша команда
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Approach Section */}
        <AnimatedSection delay={500}>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Наш подход
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Анализ и аудит</h3>
                <p className="text-gray-600">
                  Глубокое изучение ваших бизнес-процессов и выявление точек роста
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Разработка решения</h3>
                <p className="text-gray-600">
                  Создание индивидуального ИИ-решения под ваши специфические задачи
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Внедрение и поддержка</h3>
                <p className="text-gray-600">
                  Быстрое внедрение с обучением команды и долгосрочной поддержкой
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={600}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Готовы работать с лучшими?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Присоединяйтесь к сотням компаний, которые уже используют силу ИИ для развития своего бизнеса
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              Начать сотрудничество
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;