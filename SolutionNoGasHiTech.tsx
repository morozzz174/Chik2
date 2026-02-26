
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
  TrendingDown,
  AlertTriangle,
  Waves
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
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           <Cpu size={600} className="translate-x-1/4 -translate-y-1/4 text-[#b22222]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Sun size={16} />
              Гибридная энергетика
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Особо крупные: <br />
              <span className="text-[#b22222]">Электро + Солнце</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Снижение пиковых нагрузок и экономия летом для объектов 400-600 м² (гостевые дома, небольшие отели, административные здания).
            </p>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Мощность</div>
              <div className="text-3xl font-black text-[#0b2a4a]">50-80 кВт</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Капзатраты</div>
              <div className="text-3xl font-black text-[#b22222]">700-1500 т.р.</div>
              <div className="text-[10px] text-gray-500 mt-1">зависит от СЭС</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Особенность</div>
              <div className="text-xl font-black text-[#0b2a4a] leading-tight mt-2">Летняя экономия и ГВС</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Требование</div>
              <div className="text-xl font-black text-[#0b2a4a] leading-tight mt-2">Сеть 50-80 кВт</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Equipment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0b2a4a] mb-4">Детализация оборудования</h2>
            <p className="text-gray-500">Промышленные электрокотлы и солнечные электростанции</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            
            {/* Boiler */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-lg overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-[#0b2a4a] text-white text-[10px] font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">Основа</div>
              <div className="bg-gray-50 p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-[#0b2a4a] mb-2">Промышленный электрокотел</h3>
                <p className="text-gray-600 font-medium text-sm">Эван Professional 60 (60 кВт) / ZOTA Prom 45 (45 кВт)</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase">Цена</span>
                  <span className="text-xl font-black text-[#0b2a4a]">~280-380 тыс. руб.</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Плюсы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Ступенчатая регулировка мощности, ТЭНы из нержавейки, адаптация к российским сетям, компактный настенный монтаж.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Минусы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Требует мощного ввода (3 фазы, 90-100 А), высокие расходы зимой (30-50 тыс. руб./мес).</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Info className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Запчасти (100% доступность):</span>
                      <p className="text-sm text-gray-600 leading-relaxed">У официальных дилеров Эван и ZOTA по всей РФ.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solar Panels */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-lg overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-[#b22222] text-white text-[10px] font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">Экономия</div>
              <div className="bg-orange-50 p-8 border-b border-orange-100">
                <h3 className="text-2xl font-bold text-[#b22222] mb-2">Солнечные панели (РФ)</h3>
                <p className="text-gray-700 font-medium text-sm">Хевел (гетероструктурные модули HVL) 30 кВт (пик)</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase">Цена комплекта</span>
                  <span className="text-xl font-black text-[#b22222]">~0.9-1.1 млн руб.</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Плюсы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">КПД до 23%, работают от -60 до +85°C. Летом полностью покрывают расходы на ГВС и кондиционирование.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Минусы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Высокие первоначальные затраты, окупаемость 7-10 лет.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Info className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Запчасти (Высокая доступность):</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Завод Хевел в Новочебоксарске, гарантия до 25 лет.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Inverters */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0b2a4a] mb-6 text-center">Гибридные инверторы (для СЭС)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-[#0b2a4a] mb-2">РФ/Китай: "Солнечный ветер"</h4>
                <p className="text-sm text-gray-600 mb-3">30 кВт. Российская сборка на базе китайских компонентов.</p>
                <div className="text-[#b22222] font-bold">~350-400 тыс. руб.</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-[#0b2a4a] mb-2">Импорт: SolaX X3-ULTRA</h4>
                <p className="text-sm text-gray-600 mb-3">30 кВт. Параллельное подключение до 10 шт. Высокая эффективность.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-[#0b2a4a] mb-2">Импорт: Deye SUN-30K</h4>
                <p className="text-sm text-gray-600 mb-3">30 кВт. Гибридный трехфазный, КПД 98.5%, поддержка ВВ батарей.</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">Запчасти: Средняя доступность (крупные дистрибьюторы, склады в Москве).</p>
          </div>

        </div>
      </section>

      {/* Critical Components */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Buffer Tank */}
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Waves size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0b2a4a]">Теплоаккумулятор</h4>
                  <p className="text-xs font-bold text-gray-500 uppercase">Дополнительно</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>РФ: S-Tank (ЕМ-2000) — ~150 000 руб.</strong><br/>
                Позволяет накапливать тепло ночью (по дешевому тарифу) и использовать днем.
              </p>
            </div>

            {/* Backup Power */}
            <div className="bg-red-50 p-8 rounded-[32px] border border-red-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white text-[#b22222] rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#b22222]">Резервное питание</h4>
                  <p className="text-xs font-bold text-red-400 uppercase">Обязательно</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Для объекта 400-600 м² с электрокотлом требуется мощный резерв. Оптимально: <strong>дизельный генератор 60-80 кВт</strong> (от ~600 000 до 1.2 млн руб.) с АВР. Для кратковременных отключений — промышленный ИБП с LiFePO4 (от ~500 000 руб.).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Equipment Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#0b2a4a] mb-4">Дополнительные позиции</h2>
            <p className="text-gray-500">Промышленное оборудование для объектов 400-600 м²</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Boiler GVS */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Промышленный бойлер ГВС</h4>
              <p className="text-xs text-gray-500 mb-3">Для гостиницы или админ. здания.</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">РФ: "Термона" (БКН-500)</span> — ~95 000 руб.
                </div>
                <div>
                  <span className="font-bold">Импорт: Drazice OKC 500 NTR</span> — ~150 000 руб.
                </div>
                <div>
                  <span className="font-bold">Премиум: ACV (800 л)</span> — от 300 000 руб.
                </div>
              </div>
            </div>

            {/* Solar Collectors */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Система гелиоколлекторов</h4>
              <p className="text-xs text-gray-500 mb-3">Для ГВС летом.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ/Китай: "Альтернатива-С"</span>
                <p className="mt-1">40 трубок x 2. Подогрев воды летом, снижение нагрузки на основное оборудование.</p>
              </div>
              <div className="text-[#b22222] font-black">~140 000 руб.</div>
            </div>

            {/* Hydro Arrow */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Гидравлический разделитель</h4>
              <p className="text-xs text-gray-500 mb-3">Для балансировки потоков.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: Gidromontazh (G-200)</span>
                <p className="mt-1">Гидрострелка на 200 мм для сложных систем отопления.</p>
              </div>
              <div className="text-[#b22222] font-black">~45 000 руб.</div>
            </div>

            {/* Circulation Pump */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Промышленный насос</h4>
              <p className="text-xs text-gray-500 mb-3">Для мощных систем.</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">Германия: Wilo (CronoLine)</span> — ~80-150 тыс. руб.
                </div>
                <div>
                  <span className="font-bold">Германия: Grundfos (TPE)</span> — ~90-180 тыс. руб.
                </div>
              </div>
            </div>

            {/* Expansion Tank */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Расширительный бак</h4>
              <p className="text-xs text-gray-500 mb-3">Большой объем (200-300 л).</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">РФ: "Джилекс"</span> — ~15-25 тыс. руб.
                </div>
                <div>
                  <span className="font-bold">Италия: Reflex</span> — ~30-50 тыс. руб.
                </div>
              </div>
            </div>

            {/* Voltage Stabilizer */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Промышленный стабилизатор</h4>
              <p className="text-xs text-gray-500 mb-3">Для трехфазных сетей.</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">РФ: "Штиль" R 30000 (30 кВт)</span> — ~130 000 руб.
                </div>
                <div>
                  <span className="font-bold">РФ: "Лидер" (30-60 кВт)</span> — ~150-250 тыс. руб.
                </div>
              </div>
            </div>

            {/* BMS */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Автоматика здания (BMS)</h4>
              <p className="text-xs text-gray-500 mb-3">Интеграция отопления.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: Xital Industrial</span>
                <p className="mt-1">Система диспетчеризации и удаленного управления для коммерческих объектов.</p>
              </div>
              <div className="text-[#b22222] font-black">~25 000 руб.</div>
            </div>

            {/* Heat Exchanger */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Теплообменник пластинчатый</h4>
              <p className="text-xs text-gray-500 mb-3">Для разделения контуров.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ/Италия: Ридан (НН 51)</span>
                <p className="mt-1">Позволяет разделить внешний контур и внутреннюю систему отопления.</p>
              </div>
              <div className="text-[#b22222] font-black">~70 000 руб.</div>
            </div>

            {/* Solid Fuel Boiler */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Твердотопливный котел</h4>
              <p className="text-xs text-gray-500 mb-3">В качестве резерва.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: ZOTA Prom 40 (40 кВт)</span>
                <p className="mt-1">Работает параллельно с основным котлом при его выходе из строя.</p>
              </div>
              <div className="text-[#b22222] font-black">~250 000 руб.</div>
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
