import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Brain, MessageCircle } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleLinkClick = (path: string) => {
    // Прокручиваем к верху страницы
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Переходим по ссылке
    navigate(path);
  };

  return (
    <>
      <motion.header 
        className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.button 
            onClick={() => handleLinkClick('/')} 
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg"
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.5 }
              }}
            >
              <Brain className="h-6 w-6 text-white" />
            </motion.div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NeuroBoost
              </span>
            </div>
          </motion.button>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 relative group ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 ${
                    location.pathname === item.path ? 'w-full' : 'w-0'
                  }`}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
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
                <button
                  onClick={() => handleLinkClick('/lk')}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Личный кабинет
                </button>
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
                <button
                  onClick={() => handleLinkClick('/login')}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Войти
                </button>
                <button
                  onClick={() => handleLinkClick('/register')}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Регистрация
                </button>
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
      </motion.header>

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </>
  );
};

export default Header;