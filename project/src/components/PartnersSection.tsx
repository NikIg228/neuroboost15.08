import React from 'react';
import AnimatedSection from './AnimatedSection';

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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Нам <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">доверяют</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ведущие компании выбирают наши ИИ-решения
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const textElement = document.createElement('div');
                    textElement.className = 'text-gray-600 font-semibold text-lg';
                    textElement.textContent = partner.name;
                    target.parentNode?.appendChild(textElement);
                  }}
                />
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              Присоединяйтесь к <span className="font-semibold text-blue-600">100+</span> компаниям, 
              которые уже используют наши ИИ-решения
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PartnersSection;