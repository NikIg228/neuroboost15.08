import React from 'react';

const PartnersSection: React.FC = () => {
  const partners = [
    { name: 'QazTech Ventures', logo: 'https://qaztech.vc/assets/img/logo.png' },
    { name: 'AIX (МФЦА)', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/AIX_Kazakhstan_logo.svg' },
    { name: 'Samruk-Kazyna', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Samruk-Kazyna_logo.svg' },
    { name: 'Kcell', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Kcell_logo.svg' },
    { name: 'Oracle', logo: 'https://img.icons8.com/color/96/oracle-logo.png' },
    { name: 'Salesforce', logo: 'https://img.icons8.com/color/96/salesforce.png' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4 sm:mb-6">
            Нам <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">доверяют</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ведущие компании выбирают наши ИИ-решения
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-8 sm:h-10 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const textElement = document.createElement('div');
                  textElement.className = 'text-gray-600 font-semibold text-sm sm:text-base text-center group-hover:text-gray-800 transition-colors duration-300';
                  textElement.textContent = partner.name;
                  target.parentNode?.appendChild(textElement);
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/50 shadow-xl">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4">
              Присоединяйтесь к <span className="font-bold text-blue-600 text-xl sm:text-2xl">100+</span> компаниям, 
              которые уже используют наши ИИ-решения
            </p>
            <div className="flex justify-center space-x-8 text-sm sm:text-base text-gray-500">
              <div className="text-center">
                <div className="font-bold text-blue-600">20+</div>
                <div>стран</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-purple-600">95%</div>
                <div>довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-green-600">24/7</div>
                <div>поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;