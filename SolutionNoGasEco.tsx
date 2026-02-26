
import React from 'react';
import { 
  ChevronLeft, 
  Zap, 
  ShieldCheck, 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  Info,
  Activity,
  Gauge,
  Home,
  AlertTriangle,
  Clock,
  Wallet
} from 'lucide-react';

interface SolutionNoGasEcoProps {
  onBack: () => void;
}

const SolutionNoGasEco: React.FC<SolutionNoGasEcoProps> = ({ onBack }) => {
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
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Без Газа: Эконом</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-[#0b2a4a] text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Wallet size={16} />
              Доступный старт
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Эконом: <br />
              <span className="text-[#b22222]">Электро + ИК</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Лучшее соотношение цены и простоты для малых объектов (50-100 м²). Дачи, гостевые дома и компактные таунхаусы.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Zap size={500} className="translate-x-1/4 -translate-y-1/4" />
        </div>
      </header>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Мощность</div>
              <div className="text-3xl font-black text-[#0b2a4a]">6-9 кВт</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Капзатраты</div>
              <div className="text-3xl font-black text-[#b22222]">от 80 т.р.</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Расходы (мес)</div>
              <div className="text-3xl font-black text-[#0b2a4a]">5-7 т.р.</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Монтаж</div>
              <div className="text-3xl font-black text-[#0b2a4a]">1-2 дня</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#0b2a4a] mb-8">Комплектация системы</h2>
              <div className="space-y-8">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <h4 className="text-xl font-bold text-[#0b2a4a] mb-4 flex items-center gap-3">
                    <Settings className="text-[#b22222]" />
                    Электрокотел ZOTA Solo
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Каскадное включение: ZOTA 4.5 Solo + ZOTA 3 Solo. Российское производство, полная адаптация к скачкам напряжения в поселках.
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-xs font-bold text-gray-400 uppercase">Цена за комплект</span>
                    <span className="text-xl font-black text-[#0b2a4a]">~67 500 ₽</span>
                  </div>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <h4 className="text-xl font-bold text-[#0b2a4a] mb-4 flex items-center gap-3">
                    <Zap className="text-[#b22222]" />
                    ИК-панели Никатэн-300
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    3 шт. по 1.5 кВт для точечного догрева. Идеально для быстрого прогрева зон присутствия без необходимости топить весь дом.
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-xs font-bold text-gray-400 uppercase">Цена за комплект</span>
                    <span className="text-xl font-black text-[#0b2a4a]">45 000 ₽</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-[#0b2a4a] text-white p-12 rounded-[40px] shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Info className="text-[#b22222]" />
                  Почему это решение?
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-[#b22222] shrink-0" />
                    <p className="text-sm text-gray-300"><strong>Скорость:</strong> Самый быстрый ввод в эксплуатацию. Не требует разрешений и дымохода.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-[#b22222] shrink-0" />
                    <p className="text-sm text-gray-300"><strong>Надежность:</strong> Котлы ZOTA работают там, где импортная электроника выходит из строя.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-[#b22222] shrink-0" />
                    <p className="text-sm text-gray-300"><strong>Гибкость:</strong> ИК-панели позволяют экономить, поддерживая тепло только там, где это нужно.</p>
                  </li>
                </ul>
                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 italic text-xs text-gray-400">
                  "Идеально для дач: приехали на выходные — быстро прогрели дом ИК-панелями, а котел поддерживает комфортный фон."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-[#0b2a4a] mb-8">Готовы начать?</h2>
            <p className="text-gray-500 mb-12">Получите детальную смету на систему «Электро + ИК» для вашего объекта уже сегодня.</p>
            <button className="bg-[#b22222] text-white px-12 py-5 rounded-sm font-bold text-lg hover:bg-red-800 transition-all shadow-xl flex items-center gap-3 mx-auto">
              Запросить смету
              <ArrowRight size={20} />
            </button>
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

export default SolutionNoGasEco;
