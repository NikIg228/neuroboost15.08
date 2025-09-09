import React from 'react';
import { CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  result: string;
  clientLogo: string;
  icon: React.ComponentType<any>;
  metrics: string;
}

const CasesSection: React.FC = () => {
  const cases: CaseStudy[] = [
    {
      id: '1',
      title: 'Автоматизация интернет-магазина "SharkStore"',
      description: 'Внедрили ChatGPT-консультанта и автоматизацию обработки заявок для крупного интернет-магазина электроники.',
      result: 'Увеличение конверсии на 45% и сокращение времени обработки заявок в 8 раз',
      clientLogo: 'TS',
      icon: TrendingUp,
      metrics: '+45%'
    },
    {
      id: '2',
      title: 'ИИ-рекрутер для компании "QazTech Ventures"',
      description: 'Разработали систему автоматического отбора кандидатов с анализом резюме и предсказанием успешности.',
      result: 'Ускорение процесса найма в 5 раз, точность отбора 92%',
      clientLogo: 'DC',
      icon: Users,
      metrics: '5x'
    },
    {
      id: '3',
      title: 'Прогнозирование продаж для сети "abr+"',
      description: 'Внедрили ИИ-аналитику для прогнозирования спроса и оптимизации закупок в сети ресторанов.',
      result: 'Сокращение излишков товара на 60%, рост прибыли на 35%',
      clientLogo: 'FC',
      icon: DollarSign,
      metrics: '+35%'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">кейсы</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Реальные результаты наших клиентов после внедрения ИИ-решений
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <AnimatedSection key={caseStudy.id} delay={index * 200}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col">
                {/* Header with logo and icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {caseStudy.clientLogo}
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-semibold text-green-600">Успешно</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {caseStudy.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow">
                  {caseStudy.description}
                </p>

                {/* Result */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <caseStudy.icon className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-blue-600">Результат:</span>
                  </div>
                  <p className="text-gray-800 font-medium">
                    {caseStudy.result}
                  </p>
                </div>

                {/* Metrics highlight */}
                <div className="text-center">
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full text-lg">
                    📈 {caseStudy.metrics}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={600}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Хотите получить такие же результаты для своего бизнеса?
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Обсудить ваш проект
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CasesSection;