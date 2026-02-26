
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
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Waves size={500} className="translate-x-1/4 -translate-y-1/4" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Mountain size={16} />
              Геотермальная энергия
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Оптимальный: <br />
              <span className="text-[#b22222]">Грунтовый ТН</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Максимальная эффективность круглый год, не зависит от уличной температуры. Идеально для крупных домов (200-400 м²).
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
              <div className="text-3xl font-black text-[#0b2a4a]">15-25 кВт</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Капзатраты</div>
              <div className="text-3xl font-black text-[#b22222]">1.4-2.2 млн</div>
              <div className="text-[10px] text-gray-500 mt-1">с бурением</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Расходы (мес)</div>
              <div className="text-3xl font-black text-[#0b2a4a]">4-7 т.р.</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Срок службы</div>
              <div className="text-3xl font-black text-[#0b2a4a]">30+ лет</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Equipment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0b2a4a] mb-4">Детализация оборудования</h2>
            <p className="text-gray-500">Сравнение геотермальных тепловых насосов</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* RF */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-lg overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-[10px] font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">Средний</div>
              <div className="bg-gray-50 p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-[#0b2a4a] mb-2">РФ</h3>
                <p className="text-gray-600 font-medium text-sm">НПО "Термоком" GT 20 (20 кВт)</p>
                <p className="text-xs text-gray-500 mt-1">Для вертикальных зондов</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase">Цена</span>
                  <span className="text-xl font-black text-[#0b2a4a]">~950 000 руб.</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Плюсы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Чугунный теплообменник, адаптация к российским условиям, производство в РФ — высокий уровень сервиса и запчастей.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Минусы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Меньше опыта эксплуатации, чем у европейских брендов.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Info className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Запчасти:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Высокая доступность (напрямую от производителя).</p>
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
                <p className="text-gray-300 font-medium text-sm">Stiebel Eltron WPF 20 (Германия, 20 кВт)</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase">Цена</span>
                  <span className="text-xl font-black text-[#b22222]">~1.4 млн руб.</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Плюсы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Максимальная надежность, премиум-качество, тихая работа, европейская эффективность.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Минусы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Высокая цена, запчасти только со складов официальных дилеров (ожидание).</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Info className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Запчасти:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Средняя доступность (в Москве и СПб есть, в регионах — под заказ).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Import Medium */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-lg overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-[10px] font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">Средний</div>
              <div className="bg-gray-50 p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-[#0b2a4a] mb-2">Импорт</h3>
                <p className="text-gray-600 font-medium text-sm">Vaillant geoTHERM VWS 221 (Германия, 22 кВт)</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase">Цена</span>
                  <span className="text-xl font-black text-[#0b2a4a]">~1.2 млн руб.</span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Надежное немецкое оборудование среднего ценового сегмента (среди импорта). Отличный баланс цены и европейского качества.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Drilling & Buffer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Drilling */}
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-50 text-[#b22222] rounded-xl flex items-center justify-center shrink-0">
                  <Timer size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0b2a4a]">Бурение скважин</h4>
                  <p className="text-xs font-bold text-[#b22222] uppercase">Обязательно</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                <strong>3-4 скважины по 80-100 м (вертикальные зонды)</strong><br/>
                Стоимость: 500-800 тыс. руб. в зависимости от региона и грунта. Это фундамент системы, обеспечивающий стабильный съем тепла.
              </p>
            </div>

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
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>РФ: S-Tank (ЕМ-300) — ~40 000 руб.</strong><br/>
                Необходима для увеличения объема системы и снижения циклов включения насоса, что продлевает срок службы компрессора.
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
            <p className="text-gray-500">Оборудование для объектов 200-400 м²</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Boiler GVS */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Бойлер косвенного нагрева (ГВС)</h4>
              <p className="text-xs text-gray-500 mb-3">Для большой семьи (4-7 человек).</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">РФ: "Термона" (БКН-300)</span> — ~55 000 руб.
                </div>
                <div>
                  <span className="font-bold">Импорт: Drazice OKC 300 NTR</span> — ~75 000 руб.
                </div>
                <div>
                  <span className="font-bold">Премиум: ACV / Viessmann</span> — от 120 000 руб.
                </div>
              </div>
            </div>

            {/* Safety Group */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Группа безопасности</h4>
              <p className="text-xs text-gray-500 mb-3">Для теплового насоса/котла.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ/Италия: Valtec</span>
                <p className="mt-1">Включает манометр, автоматический воздухоотводчик, предохранительный клапан.</p>
              </div>
              <div className="text-[#b22222] font-black">~5 500 руб.</div>
            </div>

            {/* Circulation Pump */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Циркуляционный насос</h4>
              <p className="text-xs text-gray-500 mb-3">Для мощных систем.</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">Германия: Wilo (Stratos)</span> — ~30-50 тыс. руб.
                </div>
                <div>
                  <span className="font-bold">Германия: Grundfos (MAGNA3)</span> — ~35-60 тыс. руб.
                </div>
                <div>
                  <span className="font-bold">РФ/Китай: UNIPUMP (UPC)</span> — ~10-15 тыс. руб.
                </div>
              </div>
            </div>

            {/* Expansion Tank */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Расширительный бак</h4>
              <p className="text-xs text-gray-500 mb-3">Для закрытой системы (большой объем).</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">РФ: "Джилекс" (50-100 л)</span> — ~5-10 тыс. руб.
                </div>
                <div>
                  <span className="font-bold">Италия: Reflex (50-100 л)</span> — ~10-18 тыс. руб.
                </div>
              </div>
            </div>

            {/* Warm Floor */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Теплый пол (водяной)</h4>
              <p className="text-xs text-gray-500 mb-3">Коллекторная группа для больших площадей.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ/Италия: Valtec</span>
                <p className="mt-1">Гребенка на 8-12 контуров. Запчасти доступны.</p>
              </div>
              <div className="text-[#b22222] font-black">~15-25 тыс. руб.</div>
            </div>

            {/* Mixing Unit */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Смесительный узел</h4>
              <p className="text-xs text-gray-500 mb-3">Для больших систем.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ/Италия: Valtec (VT.COMBI)</span>
                <p className="mt-1">С насосом. Для поддержания низкой температуры в теплых полах.</p>
              </div>
              <div className="text-[#b22222] font-black">~25 000 руб.</div>
            </div>

            {/* Remote Control */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Управление и автоматика</h4>
              <p className="text-xs text-gray-500 mb-3">Умный дом.</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">РФ: Xital Smart/GSM</span> — ~7.5-8 тыс. руб.
                </div>
                <div>
                  <span className="font-bold">Европа: SALUS (iT600)</span> — ~15 000 руб.<br/>
                  <span className="text-xs text-gray-500">Продвинутая система.</span>
                </div>
              </div>
            </div>

            {/* Voltage Stabilizer */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Стабилизатор напряжения</h4>
              <p className="text-xs text-gray-500 mb-3">Мощный, для всего оборудования.</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">РФ: "Штиль" R 9000 (9 кВт)</span> — ~35 000 руб.
                </div>
                <div>
                  <span className="font-bold">РФ: "Штиль" R 15000 (15 кВт)</span> — ~55 000 руб.<br/>
                  <span className="text-xs text-gray-500">Для особо мощных систем.</span>
                </div>
              </div>
            </div>

            {/* Solar Collectors */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Солнечные коллекторы</h4>
              <p className="text-xs text-gray-500 mb-3">В помощь ТН или для ГВС летом.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ/Китай: "Альтернатива-С"</span>
                <p className="mt-1">Вакуумный коллектор (30 трубок).</p>
              </div>
              <div className="text-[#b22222] font-black">~70 000 руб.</div>
            </div>

            {/* Diesel Generator */}
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#b22222] mb-2">Дизельный генератор</h4>
              <p className="text-xs text-red-400 mb-3 uppercase font-bold">Полная автономия</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">Китай/РФ: 15-20 кВт (SDMO, Fubag)</span>
                <p className="mt-1">С автоматическим вводом резерва (АВР). Обеспечивает работу всего дома.</p>
              </div>
              <div className="text-[#0b2a4a] font-black">~400-700 тыс. руб.</div>
            </div>

            {/* Solar Power Station */}
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Солнечная электростанция (гибрид)</h4>
              <p className="text-xs text-blue-500 mb-3 uppercase font-bold">Резервное питание</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">Китай/Европа: Инвертор Fronius Symo (20 кВт) + LiFePO4 + панели</span>
                <p className="mt-1">Тишина, экологичность, независимость от топлива. Возможность продавать излишки.</p>
              </div>
              <div className="text-[#0b2a4a] font-black">~$25 000 - $50 000</div>
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
