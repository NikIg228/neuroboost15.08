import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Award, Headphones, Globe, TrendingUp, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';
import AnimatedText from '../components/AnimatedText';
import ParallaxSection from '../components/ParallaxSection';
import NeuralBackground from '../components/NeuralBackground';
import ParticleBackground from '../components/ParticleBackground';
import CasesSection from '../components/CasesSection';
import PartnersSection from '../components/PartnersSection';

// ScrollTrigger is registered globally

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Users, value: 100, suffix: '+', label: 'реализованных проектов' },
    { icon: Clock, value: 5, suffix: ' дней', label: 'скорость внедрения' },
    { icon: Award, value: 95, suffix: '%', label: 'довольных клиентов' },
    { icon: Headphones, value: 24, suffix: '/7', label: 'техподдержка' }
  ];

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Stats section animation
    if (statsRef.current) {
      gsap.fromTo(statsRef.current.children, 
        { opacity: 0, y: 30, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8, 
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    { icon: Globe, title: 'Глобальный охват', description: 'Работаем по всему СНГ и за его пределами' },
    { icon: TrendingUp, title: 'Результативность', description: 'Гарантируем измеримые результаты внедрения' },
    { icon: Shield, title: 'Надежность', description: 'Полная конфиденциальность ваших данных' },
    { icon: Zap, title: 'Скорость', description: 'Быстрое внедрение и запуск решений' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <NeuralBackground />
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 pointer-events-none" style={{ zIndex: 1 }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center relative" style={{ zIndex: 10 }}>
            <div ref={heroRef} className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                <AnimatedText 
                  text="Работаем по всему СНГ и за его пределами"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  delay={0.5}
                  stagger={0.1}
                />
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                Мы помогаем бизнесам внедрять ИИ-решения для автоматизации процессов, 
                увеличения продаж и повышения эффективности работы. Более 20 стран доверяют нам.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-20">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full sm:w-auto"
                >
                <Link
                  to="/catalog"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg cursor-pointer text-sm sm:text-base w-full sm:w-auto"
                  style={{ pointerEvents: 'auto' }}
                >
                  Посмотреть каталог
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full sm:w-auto"
                >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer text-sm sm:text-base w-full sm:w-auto"
                  style={{ pointerEvents: 'auto' }}
                >
                  Получить консультацию
                </Link>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 200} className="text-center">
                <motion.div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </motion.div>
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2"
                  duration={2}
                />
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Мы объединяем передовые технологии ИИ с глубоким пониманием бизнес-процессов
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 150} direction="up">
                <motion.div 
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-md text-center h-full"
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
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
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">О нас</h2>
              <h3 className="text-lg sm:text-xl text-blue-600 font-semibold mb-3 sm:mb-4">
                Мы помогаем бизнесам внедрять ИИ
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
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
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">100+</div>
                    <div className="text-xs sm:text-sm text-gray-600">реализованных проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">от 5 дней</div>
                    <div className="text-xs sm:text-sm text-gray-600">скорость внедрения</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">20+</div>
                    <div className="text-xs sm:text-sm text-gray-600">стран с нами</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-600">поддержка</div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 text-center">
                  <p className="text-sm sm:text-base text-gray-700 font-semibold">
                    Команда из инженеров и маркетологов
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Готовы начать цифровую трансформацию?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Получите бесплатную консультацию и узнайте, как ИИ может изменить ваш бизнес
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
            >
              Получить консультацию
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;