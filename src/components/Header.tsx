import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Brain, MessageCircle } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

const Header: React.FC = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const navItems = [
    { path: '/catalog', label: 'Каталог' },
    { path: '/reviews', label: 'Отзывы' },
    { path: '/about', label: 'О нас' },
    { path: '/contact', label: 'Контакты' }
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  const handleConsultation = () => {
    if (!user) {
      window.location.href = '/login';
      return;
    }
    setIsConsultationModalOpen(true);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg group-hover:scale-105 transition-transform duration-200">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NeuroBoost
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 relative group ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleConsultation}
                  className="flex items-center px-3 py-2 text-sm font-medium text-green-600 hover:text-green-800 transition-colors border border-green-600 rounded-lg hover:bg-green-50"
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Консультация
                </button>
                <Link
                  to="/lk"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Личный кабинет
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => window.location.href = '/login'}
                  className="flex items-center px-3 py-2 text-sm font-medium text-green-600 hover:text-green-800 transition-colors border border-green-600 rounded-lg hover:bg-green-50"
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Консультация
                </button>
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Войти
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Регистрация
                </Link>
              </div>
            )}
            
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </header>

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </>
  );
};

export default Header;