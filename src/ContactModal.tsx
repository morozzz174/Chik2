import React from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, title = "Заказать расчет" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-8">
          <h3 className="text-2xl font-bold text-[#0b2a4a] mb-6">{title}</h3>
          
          <form action="https://formsubmit.co/chik174@yandex.ru" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value={`Новая заявка: ${title}`} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">ФИО</label>
              <input 
                type="text" 
                name="Имя"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b22222] focus:ring-2 focus:ring-[#b22222]/20 outline-none transition-all"
                placeholder="Иванов Иван Иванович"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Телефон</label>
              <input 
                type="tel" 
                name="Телефон"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b22222] focus:ring-2 focus:ring-[#b22222]/20 outline-none transition-all"
                placeholder="+7 (999) 000-00-00"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Обращение (монтаж, закупка оборудования и др.)</label>
              <textarea 
                name="Сообщение"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b22222] focus:ring-2 focus:ring-[#b22222]/20 outline-none transition-all resize-none"
                placeholder="Опишите вашу задачу..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-[#b22222] text-white font-bold py-4 rounded-lg hover:bg-red-800 transition-colors mt-4"
            >
              Отправить заявку
            </button>
            <p className="text-xs text-gray-400 text-center mt-4">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
