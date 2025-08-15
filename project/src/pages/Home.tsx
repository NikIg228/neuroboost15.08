import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Award, Headphones, Globe, TrendingUp, Shield, Zap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import NeuralBackground from '../components/NeuralBackground';
import CasesSection from '../components/CasesSection';
import PartnersSection from '../components/PartnersSection';

const Home: React.FC = () => {
  const stats = [
    { icon: Users, value: '100+', label: 'реализованных проектов' },
    { icon: Clock, value: 'от 5 дней', label: 'скорость внедрения' },
    { icon: Award, value: '95%', label: 'довольных клиентов' },
    { icon: Headphones, value: '24/7', label: 'техподдержка' }
  ];

  const features = [
    { icon: Globe, title: 'Глобальный охват', description: 'Работаем по всему СНГ и за его пределами' },
    { icon: TrendingUp, title: 'Результативность', description: 'Гарантируем измеримые результаты внедрения' },
    { icon: Shield, title: 'Надежность', description: 'Полная конфиденциальность ваших данных' },
    { icon: Zap, title: 'Скорость', description: 'Быстрое внедрение и запуск решений' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 pointer-events-none" style={{ zIndex: 1 }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center relative" style={{ zIndex: 10 }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Работаем по всему СНГ
                </span>
                <br />
                и за его пределами
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Мы помогаем бизнесам внедрять ИИ-решения для автоматизации процессов, 
                увеличения продаж и повышения эффективности работы. Более 20 стран доверяют нам.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
                <Link
                  to="/catalog"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 cursor-pointer"
                  style={{ pointerEvents: 'auto' }}
                >
                  Посмотреть каталог
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer"
                  style={{ pointerEvents: 'auto' }}
                >
                  Получить консультацию
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 200} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы объединяем передовые технологии ИИ с глубоким пониманием бизнес-процессов
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 150} direction="up">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <CasesSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">О нас</h2>
              <h3 className="text-xl text-blue-600 font-semibold mb-4">
                Мы помогаем бизнесам внедрять ИИ
              </h3>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Кто мы:</strong> NeuroBoost — команда экспертов по искусственному интеллекту 
                  и автоматизации бизнес-процессов. Мы специализируемся на внедрении ИИ-решений 
                  для компаний любого масштаба.
                </p>
                
                <p>
                  <strong>Чем занимаемся:</strong> Разрабатываем и внедряем индивидуальные ИИ-решения: 
                  от чат-ботов и автоматизации до полной цифровой трансформации бизнеса.
                </p>
                
                <p>
                  <strong>В чем наше отличие:</strong> Мы не просто поставщики технологий — мы партнеры 
                  в вашем развитии. Каждое решение адаптируется под специфику вашего бизнеса.
                </p>
                
                <p>
                  <strong>Для кого:</strong> Наши услуги предназначены для руководителей и владельцев 
                  бизнеса, которые стремятся оптимизировать процессы и повысить эффективность.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                    <div className="text-gray-600">реализованных проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">от 5 дней</div>
                    <div className="text-gray-600">скорость внедрения</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                    <div className="text-gray-600">стран с нами</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-gray-600">поддержка</div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-700 font-semibold">
                    Команда из инженеров и маркетологов
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Готовы начать цифровую трансформацию?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Получите бесплатную консультацию и узнайте, как ИИ может изменить ваш бизнес
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Получить консультацию
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;