import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getTransformClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (isVisible) {
      return `${baseClasses} transform translate-x-0 translate-y-0 opacity-100`;
    }

    switch (direction) {
      case 'up':
        return `${baseClasses} transform translate-y-8 opacity-0`;
      case 'down':
        return `${baseClasses} transform -translate-y-8 opacity-0`;
      case 'left':
        return `${baseClasses} transform translate-x-8 opacity-0`;
      case 'right':
        return `${baseClasses} transform -translate-x-8 opacity-0`;
      default:
        return `${baseClasses} transform translate-y-8 opacity-0`;
    }
  };

  return (
    <div ref={ref} className={`${getTransformClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;