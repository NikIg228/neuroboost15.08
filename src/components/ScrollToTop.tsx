import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { usePremiumScroll } from '../hooks/usePremiumScroll';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = usePremiumScroll();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    scrollToTop();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 backdrop-blur-sm border border-white/20"
          aria-label="Scroll to top"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            y: -5,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
            backgroundColor: "rgba(59, 130, 246, 0.9)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative"
          >
            <ChevronUp className="h-6 w-6" />
            {/* Блестящий эффект */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
              animate={{ x: [-100, 100] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatDelay: 3
              }}
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;