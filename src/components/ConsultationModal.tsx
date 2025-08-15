import React from 'react';
import { X, MessageCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleTelegramRedirect = () => {
    window.open('https://t.me/neurboosthelpbot', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            <div className="bg-blue-100 rounded-full p-3 mr-3">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Консультация</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-600 mb-4">
            Мы перенаправим вас в Telegram для связи с консультантом
          </p>
          <p className="text-sm text-gray-500">
            Наш эксперт ответит на все ваши вопросы и поможет выбрать подходящее решение
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
          >
            Отмена
          </button>
          <button
            onClick={handleTelegramRedirect}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Перейти
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;