
import React from 'react';
import { 
  ChevronLeft, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  Info,
  Activity,
  Gauge,
  Waves,
  AlertTriangle,
  Wind,
  TrendingDown
} from 'lucide-react';

interface SolutionNoGasOptimalProps {
  onBack: () => void;
}

const SolutionNoGasOptimal: React.FC<SolutionNoGasOptimalProps> = ({ onBack }) => {
  const models = [
    { name: 'Mitsubishi Zubadan', origin: 'Япония', power: '14 кВт', features: 'Сохраняет 100% мощности до -15°C, работает до -28°C.', tag: 'Премиум' },
    { name: 'РусКлимат RC Heat Pulsar', origin: 'РФ-Китай', power: '16 кВт', features: 'Инверторный компрессор, адаптирован под условия РФ.', tag: 'Оптимально' },
    { name: 'Энергия ТН-В-14', origin: 'Россия', power: '14 кВт', features: 'Полностью российская разработка, доступный сервис.', tag: 'Сделано в РФ' },
  ];

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
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Без Газа: Стандарт</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Wind size={16} />
              Энергия воздуха
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Оптимальный: <br />
              <span className="text-[#b22222]">Тепловой насос</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Лучший баланс цены и экономичности для коттеджей 100-200 м². Экономия в 3-4 раза выше по сравнению с электрокотлом.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           <TrendingDown size={600} className="translate-x-1/4 -translate-y-1/4 text-[#b22222]" />
        </div>
      </header>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Мощность</div>
              <div className="text-3xl font-black text-[#0b2a4a]">14-16 кВт</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Эффективность</div>
              <div className="text-3xl font-black text-[#b22222]">COP 3.5-4.0</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Расходы (мес)</div>
              <div className="text-3xl font-black text-[#0b2a4a]">4-5 т.р.</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Окупаемость</div>
              <div className="text-3xl font-black text-[#0b2a4a]">4-5 лет</div>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0b2a4a] mb-16 text-center">Рекомендуемое оборудование</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-[#0b2a4a]">{model.name}</h3>
                  <span className="bg-[#b22222]/10 text-[#b22222] px-2 py-1 rounded text-[10px] font-bold uppercase">{model.tag}</span>
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{model.origin} • {model.power}</div>
                <p className="text-sm text-gray-500 mb-8 flex-grow leading-relaxed">{model.features}</p>
                <div className="pt-6 border-t border-gray-50">
                  <button className="text-[#b22222] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Подробнее о модели <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-[#0b2a4a] rounded-[50px] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Экономика решения</h2>
              <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                Если вы планируете жить в доме постоянно, тепловой насос — самый выгодный вариант. 1 кВт электричества дает 3-4 кВт тепла. Для дома 150 м² зимние расходы составят всего 4-5 тыс. руб. в месяц против 15-20 тыс. у электрокотла.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                  <h4 className="font-bold text-[#b22222] mb-4 flex items-center gap-2">
                    <TrendingDown />
                    Снижение затрат
                  </h4>
                  <p className="text-sm text-gray-400">Окупаемость системы по сравнению с прямым электроотоплением составляет 4-5 лет.</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                  <h4 className="font-bold text-[#b22222] mb-4 flex items-center gap-2">
                    <ShieldCheck />
                    Надежность
                  </h4>
                  <p className="text-sm text-gray-400">Технология Flash Injection (Mitsubishi) гарантирует работу даже в суровые уральские морозы.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#b22222] rounded-full blur-[150px] opacity-10"></div>
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

export default SolutionNoGasOptimal;
