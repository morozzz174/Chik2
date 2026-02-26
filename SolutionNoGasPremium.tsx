
import React from 'react';
import { 
  ChevronLeft, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Info,
  Activity,
  Gauge,
  Waves,
  AlertTriangle,
  Mountain,
  ThermometerSnowflake,
  Timer
} from 'lucide-react';

interface SolutionNoGasPremiumProps {
  onBack: () => void;
}

const SolutionNoGasPremium: React.FC<SolutionNoGasPremiumProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-[#0b2a4a] font-bold hover:text-[#b22222] transition-colors">
            <ChevronLeft size={20} />
            <span>Назад к решениям</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-[#b22222] text-white px-2 py-1 rounded font-bold text-sm">ЧИК</div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Без Газа: Премиум</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-[#0b2a4a] text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Mountain size={16} />
              Геотермальная энергия
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Премиум: <br />
              <span className="text-[#b22222]">Грунтовый ТН</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Максимальная эффективность круглый год для элитных усадеб 200-400 м². Земля на глубине всегда +5-7°C, что гарантирует стабильное тепло.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Waves size={500} className="translate-x-1/4 -translate-y-1/4" />
        </div>
      </header>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Мощность</div>
              <div className="text-3xl font-black text-[#0b2a4a]">15-25 кВт</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Эффективность</div>
              <div className="text-3xl font-black text-[#b22222]">COP 4.5-5.0</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Расходы (мес)</div>
              <div className="text-3xl font-black text-[#0b2a4a]">4-6 т.р.</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Срок службы</div>
              <div className="text-3xl font-black text-[#0b2a4a]">30+ лет</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#0b2a4a] mb-8">Технологическая база</h2>
              <div className="space-y-6">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <h4 className="text-xl font-bold text-[#0b2a4a] mb-4">НПО "Термоком" GT 20</h4>
                  <p className="text-sm text-gray-600 mb-4">Российская разработка для вертикальных зондов. Чугунный теплообменник, высокая ремонтопригодность.</p>
                  <div className="text-[#b22222] font-bold text-sm">~950 000 ₽ (без бурения)</div>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <h4 className="text-xl font-bold text-[#0b2a4a] mb-4">Stiebel Eltron WPF 20</h4>
                  <p className="text-sm text-gray-600 mb-4">Немецкое качество, эталонная надежность и бесшумность. Премиум-сегмент мирового уровня.</p>
                  <div className="text-[#b22222] font-bold text-sm">~1.4 млн ₽</div>
                </div>
                <div className="p-8 bg-red-50 rounded-3xl border border-red-100">
                  <h4 className="text-xl font-bold text-[#b22222] mb-4 flex items-center gap-2">
                    <Timer size={20} />
                    Бурение скважин
                  </h4>
                  <p className="text-sm text-gray-700">3-4 скважины по 80-100 метров. Это фундамент вашей энергонезависимости на десятилетия.</p>
                  <div className="text-[#0b2a4a] font-bold text-sm mt-2">500-800 тыс. ₽</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sticky top-24">
              <div className="bg-[#0b2a4a] text-white p-12 rounded-[40px] shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <ThermometerSnowflake className="text-[#b22222]" />
                  Почему это предел мечтаний?
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Геотермальный насос не зависит от температуры воздуха. Даже в -40°C на улице, он берет стабильное тепло из недр земли.
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#b22222] shrink-0" />
                    <span><strong>Стабильность:</strong> Одинаковые счета за отопление в ноябре и в январе.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#b22222] shrink-0" />
                    <span><strong>ГВС:</strong> Бесплатная горячая вода летом как побочный продукт работы системы.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#b22222] shrink-0" />
                    <span><span><strong>Статус:</strong> Самая совершенная и экологичная технология отопления в 2026 году.</span></span>
                  </li>
                </ul>
                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                   <div className="text-3xl font-black text-[#b22222] mb-2">от 1.2 млн ₽</div>
                   <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Инвестиции в будущее</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#0b2a4a] font-bold mb-4">ЧИК — Челябинская Инженерная Компания</p>
          <button onClick={onBack} className="text-gray-400 hover:text-[#b22222] transition-colors text-sm font-bold">
            Вернуться на главную
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SolutionNoGasPremium;
