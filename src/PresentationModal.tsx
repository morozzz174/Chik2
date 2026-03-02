import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, ChevronLeft, ChevronRight, Zap, ShieldCheck, 
  Settings, FileText, Home, Building2, Flame, 
  Cpu, PenTool, PhoneCall, Award
} from 'lucide-react';

interface Slide {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  bg: string;
}

const PresentationModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "ЧИК - Челябинская Инженерная Компания",
      subtitle: "Профессиональные инжиниринговые решения под ключ",
      icon: <Award size={64} className="text-[#b22222]" />,
      bg: "bg-[#0b2a4a]",
      content: (
        <div className="space-y-6 text-center">
          <p className="text-2xl opacity-90">Лидер в области автономного отопления и энергоснабжения в Челябинской области.</p>
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#b22222]">15+</div>
              <div className="text-sm opacity-70 uppercase tracking-widest">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#b22222]">500+</div>
              <div className="text-sm opacity-70 uppercase tracking-widest">Объектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#b22222]">100%</div>
              <div className="text-sm opacity-70 uppercase tracking-widest">Гарантия</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Наша экспертиза",
      subtitle: "Научный подход к инженерным системам",
      icon: <Settings size={64} className="text-[#b22222]" />,
      bg: "bg-white text-[#0b2a4a]",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#b22222]" />
              <span className="font-bold">Соответствие ПП РФ №798</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#b22222]" />
              <span className="font-bold">Проектирование по ГОСТ</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#b22222]" />
              <span className="font-bold">Собственная сервисная служба</span>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl italic border-l-4 border-[#b22222]">
            "Мы не просто монтируем оборудование, мы создаем надежную систему жизнеобеспечения вашего дома."
          </div>
        </div>
      )
    },
    {
      title: "Решения для ИЖС (Газ)",
      subtitle: "Максимальная эффективность при наличии магистрали",
      icon: <Home size={64} className="text-[#b22222]" />,
      bg: "bg-[#0b2a4a]",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold text-[#b22222] mb-2">Эконом</h4>
              <p className="text-sm opacity-80">Дома до 100 м². Надежные котлы Navien/Лемакс.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold text-[#b22222] mb-2">Стандарт</h4>
              <p className="text-sm opacity-80">100-180 м². Конденсационные технологии Baxi.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold text-[#b22222] mb-2">Премиум</h4>
              <p className="text-sm opacity-80">200-300 м². Полная автономия и резервирование.</p>
            </div>
          </div>
          <p className="text-center italic opacity-70">КПД систем до 98% за счет использования конденсационных котлов.</p>
        </div>
      )
    },
    {
      title: "Объекты без Газа",
      subtitle: "Альтернативная энергетика и экономия",
      icon: <Zap size={64} className="text-[#b22222]" />,
      bg: "bg-white text-[#0b2a4a]",
      content: (
        <div className="space-y-6">
          <div className="flex gap-6 items-center bg-gray-50 p-6 rounded-xl">
            <div className="bg-[#0b2a4a] text-white p-4 rounded-full">
              <Cpu size={32} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Тепловые насосы</h4>
              <p className="text-sm text-gray-600">Экономия в 3-4 раза выше электрокотла. Работа до -28°C.</p>
            </div>
          </div>
          <div className="flex gap-6 items-center bg-gray-50 p-6 rounded-xl">
            <div className="bg-[#b22222] text-white p-4 rounded-full">
              <Flame size={32} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Пеллетные системы</h4>
              <p className="text-sm text-gray-600">Полная независимость от электросетей и газовых магистралей.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Промышленные решения",
      subtitle: "Энергоснабжение бизнеса и производств",
      icon: <Building2 size={64} className="text-[#b22222]" />,
      bg: "bg-[#0b2a4a]",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#b22222]">Микро-ТЭЦ</h4>
            <p className="opacity-80">Генерация собственного электричества и тепла. Окупаемость 3-5 лет.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#b22222]">Каскадные котельные</h4>
            <p className="opacity-80">Мощности от 100 кВт до 1 МВт. Резервирование и высокая надежность.</p>
          </div>
        </div>
      )
    },
    {
      title: "Техническое оснащение",
      subtitle: "Только проверенные мировые бренды",
      icon: <PenTool size={64} className="text-[#b22222]" />,
      bg: "bg-white text-[#0b2a4a]",
      content: (
        <div className="space-y-8">
          <div className="flex justify-around items-center opacity-50 grayscale">
            <span className="text-2xl font-black">BAXI</span>
            <span className="text-2xl font-black">VAILLANT</span>
            <span className="text-2xl font-black">GRUNDFOS</span>
            <span className="text-2xl font-black">ZOTA</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 border border-gray-100 rounded-lg">
              <p className="font-bold text-[#b22222]">Обвязка:</p>
              <p>Медь, нержавеющая сталь, насосы Grundfos/Wilo.</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg">
              <p className="font-bold text-[#b22222]">Дымоходы:</p>
              <p>Коаксиальные и сэндвич-системы из нержавейки.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Инновации и Резерв",
      subtitle: "Будущее энергетики уже сегодня",
      icon: <Cpu size={64} className="text-[#b22222]" />,
      bg: "bg-[#0b2a4a]",
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h4 className="font-bold text-[#b22222] mb-2">LiFePo4 Аккумуляторы</h4>
            <p className="text-sm opacity-80">6000+ циклов заряда. Резервное питание дома на 24-48 часов без генератора.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h4 className="font-bold text-[#b22222] mb-2">Топливные элементы (SOFC)</h4>
            <p className="text-sm opacity-80">Бесшумная генерация энергии без процесса горения. КПД до 60%.</p>
          </div>
        </div>
      )
    },
    {
      title: "Безопасность и Закон",
      subtitle: "Работаем строго в правовом поле",
      icon: <FileText size={64} className="text-[#b22222]" />,
      bg: "bg-white text-[#0b2a4a]",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold text-[#0b2a4a]">ПП РФ №798</p>
              <p className="text-xs text-gray-500">Регламент пусконаладки и эксплуатации газового оборудования.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold text-[#0b2a4a]">ПП РФ №410</p>
              <p className="text-xs text-gray-500">Меры по обеспечению безопасности при использовании газа.</p>
            </div>
          </div>
          <p className="text-center text-[#b22222] font-bold">Мы берем на себя всю ответственность за легитимность вашей системы.</p>
        </div>
      )
    },
    {
      title: "Сервис 24/7",
      subtitle: "Мы всегда рядом, когда это нужно",
      icon: <ShieldCheck size={64} className="text-[#b22222]" />,
      bg: "bg-[#0b2a4a]",
      content: (
        <div className="space-y-8 text-center">
          <p className="text-xl opacity-90">Собственный склад запчастей и аварийные бригады в Челябинске.</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white/10 rounded-lg">
              <p className="text-2xl font-bold">2 ч</p>
              <p className="text-[10px] uppercase opacity-60">Время выезда</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg">
              <p className="text-2xl font-bold">365 д</p>
              <p className="text-[10px] uppercase opacity-60">В году</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-[10px] uppercase opacity-60">Наличие деталей</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Начните ваш проект",
      subtitle: "Свяжитесь с нами для бесплатной консультации",
      icon: <PhoneCall size={64} className="text-[#b22222]" />,
      bg: "bg-white text-[#0b2a4a]",
      content: (
        <div className="space-y-8 text-center">
          <div className="text-3xl font-bold text-[#0b2a4a]">+7 (351) 248-48-15</div>
          <p className="text-gray-600">г. Челябинск, ул. Энтузиастов, 12, офис 401</p>
          <button 
            onClick={onClose}
            className="bg-[#b22222] text-white px-8 py-4 rounded-full font-bold hover:bg-[#8b1a1a] transition-all shadow-xl"
          >
            Вернуться на сайт
          </button>
        </div>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] bg-black flex items-center justify-center overflow-hidden">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white z-50 p-2 hover:bg-white/10 rounded-full transition-all"
      >
        <X size={32} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`w-full h-full flex flex-col items-center justify-center p-8 md:p-24 ${slides[currentSlide].bg}`}
        >
          <div className="max-w-4xl w-full flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="mb-12"
            >
              {slides[currentSlide].icon}
            </motion.div>
            
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-black text-center mb-4 uppercase tracking-tighter"
            >
              {slides[currentSlide].title}
            </motion.h2>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl opacity-70 text-center mb-16 font-medium"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-full"
            >
              {slides[currentSlide].content}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-12 text-white/50">
        <button onClick={prevSlide} className="hover:text-white transition-all p-2">
          <ChevronLeft size={48} />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'bg-[#b22222] w-8' : 'bg-white/20'}`}
            />
          ))}
        </div>

        <button onClick={nextSlide} className="hover:text-white transition-all p-2">
          <ChevronRight size={48} />
        </button>
      </div>

      <div className="absolute bottom-6 right-6 text-white/20 text-xs font-mono">
        SLIDE {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default PresentationModal;
