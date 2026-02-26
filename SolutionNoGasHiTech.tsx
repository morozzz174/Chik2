
import React from 'react';
import { 
  ChevronLeft, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  Info,
  Activity,
  Gauge,
  Sun,
  Battery,
  Building2,
  TrendingDown
} from 'lucide-react';

interface SolutionNoGasHiTechProps {
  onBack: () => void;
}

const SolutionNoGasHiTech: React.FC<SolutionNoGasHiTechProps> = ({ onBack }) => {
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
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Без Газа: Hi-Tech</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Sun size={16} />
              Гибридная энергетика
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Пром-Энерго: <br />
              <span className="text-[#b22222]">Электро + Солнце</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Снижение пиковых нагрузок для особо крупных объектов (400-600 м²). Отели, административные здания и гостевые дома.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           <Cpu size={600} className="translate-x-1/4 -translate-y-1/4 text-[#b22222]" />
        </div>
      </header>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Электрокотел</div>
              <div className="text-3xl font-black text-[#0b2a4a]">50-80 кВт</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Солнце (пик)</div>
              <div className="text-3xl font-black text-[#b22222]">30 кВт</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Капзатраты</div>
              <div className="text-3xl font-black text-[#0b2a4a]">600-900 т.р.</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Экономия</div>
              <div className="text-3xl font-black text-[#0b2a4a]">до 40%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#0b2a4a] mb-8">Симбиоз технологий</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Для больших объектов без газа электрокотел требует огромных мощностей. Солнечные панели летом полностью покрывают расходы на горячую воду и кондиционирование, а гибридный инвертор управляет потоками энергии в реальном времени.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-[#0b2a4a] mb-2 flex items-center gap-2">
                    <Battery className="text-[#b22222]" />
                    Гибридный инвертор "Солнечный ветер"
                  </h4>
                  <p className="text-sm text-gray-600">Российская разработка на 30 кВт. Умеет подкачивать энергию от солнца в общую сеть объекта.</p>
                </div>
                <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                  <h4 className="font-bold text-[#0b2a4a] mb-2 flex items-center gap-2">
                    <Sun className="text-[#b22222]" />
                    Панели "Хевел"
                  </h4>
                  <p className="text-sm text-gray-600">Высокоэффективные российские панели. Работают даже в пасмурную погоду за счет гетероструктурной технологии.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-[#0b2a4a] text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-8">Почему это выгодно?</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-[#b22222] shrink-0" />
                    <p className="text-sm text-gray-300"><strong>Летняя экономия:</strong> ГВС и охлаждение отеля обходятся практически бесплатно.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-[#b22222] shrink-0" />
                    <p className="text-sm text-gray-300"><strong>Пиковые нагрузки:</strong> Солнце помогает электрокотлу в дневные часы, снижая нагрузку на сеть.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-[#b22222] shrink-0" />
                    <p className="text-sm text-gray-300"><strong>Автономия:</strong> При авариях на ЛЭП критические системы продолжают работать от солнца и АКБ.</p>
                  </li>
                </ul>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#b22222]/10 rounded-full blur-3xl"></div>
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

export default SolutionNoGasHiTech;
