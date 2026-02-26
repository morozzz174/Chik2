
import React from 'react';
import { 
  ChevronLeft, 
  ShieldCheck, 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  Info,
  Activity,
  Gauge,
  Building2,
  Truck,
  TrendingUp,
  Factory
} from 'lucide-react';

interface SolutionNoGasCommercialProps {
  onBack: () => void;
}

const SolutionNoGasCommercial: React.FC<SolutionNoGasCommercialProps> = ({ onBack }) => {
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
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Без Газа: Коммерция</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-[#0b2a4a] text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Factory size={16} />
              Промышленная автономия
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Автономный: <br />
              <span className="text-[#b22222]">Пеллетный котел</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Идеально для производств, цехов и складов от 600 м². Полная независимость от газовых и электрических сетей.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Flame size={500} className="translate-x-1/4 -translate-y-1/4" />
        </div>
      </header>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Мощность</div>
              <div className="text-3xl font-black text-[#0b2a4a]">100-500 кВт</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">КПД</div>
              <div className="text-3xl font-black text-[#b22222]">85-90%</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Капзатраты</div>
              <div className="text-3xl font-black text-[#0b2a4a]">1.5-4 млн ₽</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Окупаемость</div>
              <div className="text-3xl font-black text-[#0b2a4a]">2-4 года</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#0b2a4a] mb-8">Оборудование</h2>
              <div className="space-y-8">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <h4 className="text-xl font-bold text-[#0b2a4a] mb-4">LAVORO LF 150 (150 кВт)</h4>
                  <p className="text-sm text-gray-600 mb-6">Промышленный котел с бункером на 1000 л. Автономия до 5 суток. Факельная горелка из нержавейки, автоматический розжиг.</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-xs font-bold text-gray-400 uppercase">Цена</span>
                    <span className="text-xl font-black text-[#0b2a4a]">~690 900 ₽</span>
                  </div>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <h4 className="text-xl font-bold text-[#0b2a4a] mb-4">Каскад ZOTA Pellet-100A</h4>
                  <p className="text-sm text-gray-600 mb-6">Сборка из 2-4 котлов для гибкого управления мощностью. Идеально для объектов с переменной тепловой нагрузкой.</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-xs font-bold text-gray-400 uppercase">Цена за ед.</span>
                    <span className="text-xl font-black text-[#0b2a4a]">~500 000 ₽</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-[#0b2a4a] text-white p-12 rounded-[40px] shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Truck className="text-[#b22222]" />
                  Логистика и топливо
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Решение идеально для производств с собственными отходами деревообработки или доступом к недорогим пеллетам/щепе.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <CheckCircle2 className="text-[#b22222] shrink-0" />
                    <div>
                      <h5 className="font-bold mb-1">Автономность</h5>
                      <p className="text-xs text-gray-400">Загрузка пеллет требуется раз в 3-5 дней в зависимости от объема бункера.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <CheckCircle2 className="text-[#b22222] shrink-0" />
                    <div>
                      <h5 className="font-bold mb-1">Экономия</h5>
                      <p className="text-xs text-gray-400">Стоимость 1 кВт тепла на пеллетах в 2-3 раза ниже, чем на электричестве.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 p-6 bg-red-900/30 rounded-2xl border border-[#b22222]/30">
                  <p className="text-sm italic text-gray-300">
                    "Для цеха 1500 м² автоматика позволяет работать без постоянного присутствия оператора, что снижает ФОТ."
                  </p>
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

export default SolutionNoGasCommercial;
