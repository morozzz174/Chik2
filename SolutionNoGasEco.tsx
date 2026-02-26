
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
  Wallet,
  Battery,
  Wrench,
  ThumbsUp,
  ThumbsDown
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
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">СЕГМЕНТ 1: Эконом</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-[#0b2a4a] text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Wallet size={16} />
              Малые объекты (50-100 м²)
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Эконом: <br />
              <span className="text-[#b22222]">Электрический котел + ИК-панели</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Лучшее соотношение цены и простоты для редкого проживания. Идеально подходит для дач, таунхаусов и компактных домов.
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
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Тепловая мощность</div>
              <div className="text-3xl font-black text-[#0b2a4a]">6-9 кВт</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Капзатраты</div>
              <div className="text-3xl font-black text-[#b22222]">90-130 т.р.</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Расходы (зима)</div>
              <div className="text-3xl font-black text-[#0b2a4a]">5-7 т.р./мес</div>
              <div className="text-[10px] text-gray-500 mt-1">при постоянном проживании</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Срок монтажа</div>
              <div className="text-3xl font-black text-[#0b2a4a]">1-2 дня</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Equipment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0b2a4a] mb-4">Детализация оборудования</h2>
            <p className="text-gray-500">Подробный разбор компонентов системы и их особенностей</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Main Boiler */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-lg overflow-hidden flex flex-col">
              <div className="bg-[#0b2a4a] p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#b22222] rounded-xl flex items-center justify-center shrink-0">
                    <Settings size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Основной котел (РФ)</h3>
                </div>
                <p className="text-gray-300 font-medium">ZOTA 4,5 Solo (4,5 кВт) + ZOTA 3 Solo (3 кВт)</p>
                <p className="text-sm text-gray-400 mt-2">Каскадное включение для гибкости.</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase">Цена комплекта</span>
                  <span className="text-xl font-black text-[#b22222]">~66 800 руб.</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <ThumbsUp className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Плюсы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Адаптирован к скачкам напряжения (реле, а не электроника), компактный (вес 19,5 кг), ТЭНы из нержавейки, легкодоступны для замены в любом магазине.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <ThumbsDown className="text-red-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Минусы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Механическое управление (нет погодозависимой автоматики), шум щелчков реле.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Wrench className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Запчасти (100% доступность):</span>
                      <p className="text-sm text-gray-600 leading-relaxed">ТЭНы, насосы (Grundfos/Wilo внутри, но ставится любой аналог) и платы есть у дилеров ZOTA по всей РФ.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IR Panels & Alternatives */}
            <div className="flex flex-col gap-8">
              
              {/* IR Panels */}
              <div className="bg-gray-50 rounded-[32px] p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center shrink-0 text-[#b22222]">
                    <Flame size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0b2a4a]">ИК-панели (РФ)</h4>
                    <p className="text-xs font-bold text-gray-500 uppercase">Никатэн-300</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">3 шт. по 1,0-1,5 кВт для точечного догрева редко посещаемых комнат.</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-xs font-bold text-gray-400 uppercase">Цена за комплект</span>
                  <span className="text-lg font-black text-[#0b2a4a]">40-50 тыс. руб.</span>
                </div>
              </div>

              {/* Premium Alternative */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#0b2a4a] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">Альтернатива</div>
                <div className="flex items-center gap-4 mb-4">
                  <h4 className="text-lg font-bold text-[#0b2a4a]">Импортный аналог (Premium)</h4>
                </div>
                <p className="text-sm font-bold text-[#b22222] mb-2">Navien EQB 6HW NEW (6 кВт, Корея)</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Выше качество сборки и тише работа, но чувствительнее к качеству электропитания.</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase">Цена</span>
                  <span className="text-lg font-black text-[#0b2a4a]">~57 000 руб.</span>
                </div>
              </div>

              {/* Backup Power */}
              <div className="bg-red-50 rounded-[32px] p-8 border border-red-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center shrink-0 text-[#b22222]">
                    <Battery size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-[#b22222]">Резервное питание</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Системе <strong>не обязателен</strong>, так как без электричества котел не работает. Для сохранения тепла на 5-8 часов достаточно источника бесперебойного питания (ИБП) 500-1000 ВА <strong>только для циркуляционного насоса</strong>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Additional Equipment Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#0b2a4a] mb-4">Дополнительные позиции</h2>
            <p className="text-gray-500">Опциональное оборудование для повышения комфорта</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Boiler GVS */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Бойлер косвенного нагрева (ГВС)</h4>
              <p className="text-xs text-gray-500 mb-3">Если нужно горячее водоснабжение от котла.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: Бойлер "Термона" (БКН-80)</span>
                <p className="mt-1">Доступность запчастей высокая (аноды, прокладки есть у всех).</p>
              </div>
              <div className="text-[#b22222] font-black">~25 000 руб.</div>
            </div>

            {/* Convectors */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Электроконвекторы</h4>
              <p className="text-xs text-gray-500 mb-3">Альтернатива водяной системе (замена ИК-панелям).</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">Франция: Noirot (Spot)</span> — ~9 000 руб./шт.<br/>
                  <span className="text-xs text-gray-500">Эталон надежности, 30 лет гарантии.</span>
                </div>
                <div>
                  <span className="font-bold">РФ: Термия ЭВНА</span> — ~5 000 руб./шт.<br/>
                  <span className="text-xs text-gray-500">Дешево, просто, запчасти в любом городе.</span>
                </div>
              </div>
            </div>

            {/* Warm Floor */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Теплый пол (электрический)</h4>
              <p className="text-xs text-gray-500 mb-3">Для комфорта в санузлах.</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">Корея: Teplolux</span> — ~4 500 руб./м².<br/>
                  <span className="text-xs text-gray-500">Плюс: надежные муфты. Минус: дорогой ремонт при перегреве.</span>
                </div>
                <div>
                  <span className="font-bold">РФ: Теплолюкс</span><br/>
                  <span className="text-xs text-gray-500">Дешевле на 15%, запчасти всегда на месте.</span>
                </div>
              </div>
            </div>

            {/* Automation */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Комплект автоматики</h4>
              <p className="text-xs text-gray-500 mb-3">Для электрокотла.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: Xital GSM</span>
                <p className="mt-1">Позволяет управлять температурой в доме удаленно через смартфон (плюс для дачи).</p>
              </div>
              <div className="text-[#b22222] font-black">~8 000 руб.</div>
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

export default SolutionNoGasEco;
