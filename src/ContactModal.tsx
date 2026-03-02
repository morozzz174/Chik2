import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, title = "Заказать расчет" }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/chik174@yandex.ru", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3000);
      } else {
        throw new Error('Ошибка при отправке. Пожалуйста, попробуйте позже.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Не удалось установить соединение. Проверьте интернет или попробуйте позже.');
    }
  };

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
          {status === 'success' ? (
            <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-2xl font-bold text-[#0b2a4a] mb-2">Заявка отправлена!</h3>
              <p className="text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-[#0b2a4a] mb-6">{title}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value={`Новая заявка: ${title}`} />
                <input type="hidden" name="_captcha" value="false" />
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">ФИО</label>
                  <input 
                    type="text" 
                    name="Имя"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b22222] focus:ring-2 focus:ring-[#b22222]/20 outline-none transition-all disabled:opacity-50"
                    placeholder="Иванов Иван Иванович"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Телефон</label>
                  <input 
                    type="tel" 
                    name="Телефон"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b22222] focus:ring-2 focus:ring-[#b22222]/20 outline-none transition-all disabled:opacity-50"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Обращение</label>
                  <textarea 
                    name="Сообщение"
                    required
                    rows={4}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b22222] focus:ring-2 focus:ring-[#b22222]/20 outline-none transition-all resize-none disabled:opacity-50"
                    placeholder="Опишите вашу задачу..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#b22222] text-white font-bold py-4 rounded-lg hover:bg-red-800 transition-colors mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Отправка...
                    </>
                  ) : 'Отправить заявку'}
                </button>
                <p className="text-xs text-gray-400 text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
