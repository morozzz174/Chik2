
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
  TrendingDown,
  ThumbsUp,
  ThumbsDown,
  Wrench,
  Battery,
  Home
} from 'lucide-react';

interface SolutionNoGasOptimalProps {
  onBack: () => void;
}

const SolutionNoGasOptimal: React.FC<SolutionNoGasOptimalProps> = ({ onBack }) => {
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
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">СЕГМЕНТ 2: Оптимальный</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Home size={16} />
              Средние дома (100-200 м²)
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Оптимальный: <br />
              <span className="text-[#b22222]">Воздушный тепловой насос</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Лучший баланс цены и экономичности для постоянного проживания. Инверторные системы (Япония/РФ сборка).
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
              <div className="text-[10px] text-gray-500 mt-1">COP 3.5-4.0</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Капзатраты</div>
              <div className="text-3xl font-black text-[#b22222]">450-900 т.р.</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Расходы (зима)</div>
              <div className="text-3xl font-black text-[#0b2a4a]">4-5 т.р./мес</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Окупаемость</div>
              <div className="text-3xl font-black text-[#0b2a4a]">4-7 лет</div>
              <div className="text-[10px] text-gray-500 mt-1">vs электрокотел</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Equipment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0b2a4a] mb-4">Детализация оборудования</h2>
            <p className="text-gray-500">Сравнение премиальных и доступных тепловых насосов</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* RF-Italy */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-lg overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-[10px] font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">Баланс</div>
              <div className="bg-gray-50 p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-[#0b2a4a] mb-2">РФ-Италия</h3>
                <p className="text-gray-600 font-medium text-sm">Royal Thermo (16 кВт)</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase">Цена</span>
                  <span className="text-xl font-black text-[#0b2a4a]">~550-650 тыс. руб.</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <ThumbsUp className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Плюсы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Итальяно-российское производство с адаптацией к скачкам напряжения и низким температурам. Современный дизайн, инверторное управление.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <ThumbsDown className="text-red-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Минусы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Меньший мировой опыт, чем у японских гигантов (но для РФ это часто плюс из-за адаптации).</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Wrench className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Запчасти (Высокая доступность):</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Производство локализовано в РФ, склады и сервисная сеть холдинга "Русклимат".</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Import */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-lg overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-[#b22222] text-white text-[10px] font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">Премиум</div>
              <div className="bg-[#0b2a4a] p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Импорт</h3>
                <p className="text-gray-300 font-medium text-sm">Mitsubishi Electric Zubadan PUHZ-SHW140 YHA (14 кВт)</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase">Цена</span>
                  <span className="text-xl font-black text-[#b22222]">~890 000 руб.</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <ThumbsUp className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Плюсы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Сохраняет 100% мощности до -15°C, работает до -28°C. Технология Flash Injection — лучшая для холодного климата. Эталон надежности.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <ThumbsDown className="text-red-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Минусы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Высокая цена, сложный ремонт, запчасти только со складов официальных дилеров (ожидание).</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Wrench className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Запчасти (Средняя доступность):</span>
                      <p className="text-sm text-gray-600 leading-relaxed">В крупных городах есть, в регионах — под заказ.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Import Medium */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-lg overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-[10px] font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">Доступно</div>
              <div className="bg-gray-50 p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-[#0b2a4a] mb-2">Импорт (Китай)</h3>
                <p className="text-gray-600 font-medium text-sm">Midea (Arctic) / Hisense (Hi-Therma)</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase">Цена</span>
                  <span className="text-xl font-black text-[#0b2a4a]">~350-450 тыс. руб.</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <ThumbsUp className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Плюсы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Надежность, доказанная в климате Северной Европы, лучшая производительность инвертора.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <ThumbsDown className="text-red-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Минусы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Дороже ремонт, запчасти только со складов крупных дистрибьюторов (например, "Русклимат").</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Wrench className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Запчасти (Средняя доступность):</span>
                      <p className="text-sm text-gray-600 leading-relaxed">В крупных городах есть, в регионах — под заказ.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                  <h4 className="text-xl font-bold text-[#0b2a4a]">Буферная емкость</h4>
                  <p className="text-xs font-bold text-gray-500 uppercase">Дополнительно</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                <strong>РФ: S-Tank (ЕМ-100) — ~25 000 руб.</strong><br/>
                Необходима для увеличения объема системы и снижения количества циклов включения теплового насоса.
              </p>
            </div>

            {/* UPS */}
            <div className="bg-red-50 p-8 rounded-[32px] border border-red-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white text-[#b22222] rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#b22222]">Резервное питание</h4>
                  <p className="text-xs font-bold text-red-400 uppercase">Критически важно</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Для блока управления, компрессора и насосов требуется ИБП (онлайн-типа) мощностью 2000-3000 ВА с функцией чистой синусоиды и внешними аккумуляторами большой емкости. <strong>Без него автоматика выйдет из строя при скачках или отключении электричества.</strong>
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
            <p className="text-gray-500">Опциональное оборудование для повышения комфорта и надежности</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Boiler GVS */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Бойлер косвенного нагрева (ГВС)</h4>
              <p className="text-xs text-gray-500 mb-3">Для обеспечения горячей водой семью из 3-5 человек.</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">РФ: "Термона" (БКН-150)</span> — ~32 000 руб.<br/>
                  <span className="text-xs text-gray-500">Доступность запчастей высокая.</span>
                </div>
                <div>
                  <span className="font-bold">Импорт: Drazice OKC 160 NTR</span> — ~45 000 руб.<br/>
                  <span className="text-xs text-gray-500">Выше качество теплоизоляции и эмали.</span>
                </div>
              </div>
            </div>

            {/* Safety Group */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Группа безопасности</h4>
              <p className="text-xs text-gray-500 mb-3">Для теплового насоса/котла.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ/Китай: AquaControl</span>
                <p className="mt-1">Включает манометр, автоматический воздухоотводчик, предохранительный клапан.</p>
              </div>
              <div className="text-[#b22222] font-black">~4 500 руб.</div>
            </div>

            {/* Circulation Pump */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Циркуляционный насос</h4>
              <p className="text-xs text-gray-500 mb-3">Если не встроен в котел.</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">Германия: Wilo (Yonos PICO)</span> — ~15 000 руб.<br/>
                  <span className="text-xs text-gray-500">Эталон надежности.</span>
                </div>
                <div>
                  <span className="font-bold">РФ/Китай: UNIPUMP (UPC)</span> — ~8 000 руб.<br/>
                  <span className="text-xs text-gray-500">Бюджетный аналог.</span>
                </div>
              </div>
            </div>

            {/* Expansion Tank */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Расширительный бак</h4>
              <p className="text-xs text-gray-500 mb-3">Для закрытой системы отопления.</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">РФ: "Джилекс" (24 л)</span> — ~2 500 руб.<br/>
                  <span className="text-xs text-gray-500">Доступен повсеместно.</span>
                </div>
                <div>
                  <span className="font-bold">Италия: Reflex (25 л)</span> — ~4 500 руб.<br/>
                  <span className="text-xs text-gray-500">Выше качество мембраны.</span>
                </div>
              </div>
            </div>

            {/* Warm Floor */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Теплый пол (водяной)</h4>
              <p className="text-xs text-gray-500 mb-3">С гребенкой.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: Комплект "Теплолюкс"</span>
                <p className="mt-1">Гребенка + трубы на 5-6 контуров. Запчасти доступны.</p>
              </div>
              <div className="text-[#b22222] font-black">~30 000 руб.</div>
            </div>

            {/* Mixing Unit */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Смесительный узел</h4>
              <p className="text-xs text-gray-500 mb-3">Для теплого пола.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: Valtec (VT.COMBI)</span>
                <p className="mt-1">Насосно-смесительная группа для поддержания низкой температуры.</p>
              </div>
              <div className="text-[#b22222] font-black">~12 000 руб.</div>
            </div>

            {/* Remote Control */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Дистанционное управление</h4>
              <p className="text-xs text-gray-500 mb-3">Для теплового насоса.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: Xital Smart</span>
                <p className="mt-1">Управление через смартфон, графики температуры.</p>
              </div>
              <div className="text-[#b22222] font-black">~7 500 руб.</div>
            </div>

            {/* Automation */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Автоматика (незамерзание)</h4>
              <p className="text-xs text-gray-500 mb-3">Для поддержания температуры.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: Терморегулятор "Меандр"</span>
                <p className="mt-1">Для управления греющим кабелем на трубах от насоса.</p>
              </div>
              <div className="text-[#b22222] font-black">~3 000 руб.</div>
            </div>

            {/* Solar Collectors */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Солнечные коллекторы</h4>
              <p className="text-xs text-gray-500 mb-3">В помощь тепловому насосу.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ/Китай: "Альтернатива-С"</span>
                <p className="mt-1">Вакуумный коллектор (20 трубок). Подогрев воды в буферной емкости.</p>
              </div>
              <div className="text-[#b22222] font-black">~50 000 руб.</div>
            </div>

            {/* Voltage Stabilizer */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Стабилизатор напряжения</h4>
              <p className="text-xs text-gray-500 mb-3">Для всего оборудования.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: "Штиль" R 6000 (6 кВт)</span>
                <p className="mt-1">Инверторный стабилизатор, защита от скачков напряжения.</p>
              </div>
              <div className="text-[#b22222] font-black">~25 000 руб.</div>
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

export default SolutionNoGasOptimal;
