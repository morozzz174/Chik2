
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
  Factory,
  AlertTriangle
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
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Flame size={500} className="translate-x-1/4 -translate-y-1/4" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Factory size={16} />
              Промышленная автономия
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Малые промышленные: <br />
              <span className="text-[#b22222]">Пеллетная котельная</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Для цехов, складов, производственных помещений и фермерских хозяйств от 600 м². Идеально при наличии отходов деревообработки или доступного биотоплива.
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
              <div className="text-3xl font-black text-[#0b2a4a]">100-500 кВт</div>
              <div className="text-[10px] text-gray-500 mt-1">возможно каскадное исполнение</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">КПД</div>
              <div className="text-3xl font-black text-[#b22222]">85-92%</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Капзатраты</div>
              <div className="text-3xl font-black text-[#0b2a4a]">1.5-5 млн ₽</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Окупаемость</div>
              <div className="text-3xl font-black text-[#0b2a4a]">2-4 года</div>
              <div className="text-[10px] text-gray-500 mt-1">при наличии своих отходов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Equipment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0b2a4a] mb-4">Детализация оборудования</h2>
            <p className="text-gray-500">Промышленные пеллетные котлы (РФ)</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            
            {/* LAVORO */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-lg overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-[#0b2a4a] text-white text-[10px] font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">Основной</div>
              <div className="bg-gray-50 p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-[#0b2a4a] mb-2">LAVORO LF 150 (150 кВт)</h3>
                <p className="text-gray-600 font-medium text-sm">Для объектов до 1500 м²</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase">Цена</span>
                  <span className="text-xl font-black text-[#0b2a4a]">~690-765 тыс. руб.</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Плюсы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Факельная горелка из нержавейки (от 5 мм), авторозжиг и очистка, бункер 1000 л (автономия до 5 суток). Сталь 09Г2С (от 5 мм), удаленное управление, контроллер AVANTerm.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Минусы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Высокая стоимость, большой вес (1600 кг), требования к качеству пеллет (нельзя отходы мебельного производства).</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Info className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Запчасти (Высокая доступность):</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Склад запчастей и техподдержка в РФ. Горелки и контроллеры AVANTerm в наличии.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ZOTA Cascade */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-lg overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-[10px] font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">Каскад</div>
              <div className="bg-gray-50 p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-[#0b2a4a] mb-2">ZOTA Pellet-100A (100 кВт)</h3>
                <p className="text-gray-600 font-medium text-sm">Каскад из 2-5 котлов</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase">Цена за шт.</span>
                  <span className="text-xl font-black text-[#0b2a4a]">~550-600 тыс. руб.</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Плюсы:</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Возможность каскадного подключения, интеллектуальное управление, автоматическая очистка горелки.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Info className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0b2a4a] text-sm block mb-1">Запчасти (100% доступность):</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Завод ZOTA в Красноярске и дилерская сеть по всей РФ.</p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                    <p className="text-xs text-yellow-800 font-medium">
                      <strong>Важно по санкциям:</strong> Из-за запрета на импортные компоненты (Venma, Tech ST-976D), LAVORO перешел на собственные горелки и контроллеры AVANTerm (обслуживаются в РФ).
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Backup Power */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 p-8 rounded-[32px] border border-red-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white text-[#b22222] rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#b22222]">Резервное питание</h4>
                  <p className="text-sm font-bold text-red-400 uppercase">Обязательно для автоматики и шнеков</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">Для объектов 600+ м² с пеллетной котельной рекомендуется:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-red-100">
                  <h5 className="font-bold text-[#0b2a4a] mb-2">Дизельный генератор</h5>
                  <p className="text-sm text-gray-600 mb-2">30-50 кВт с автоматическим вводом резерва (АВР).</p>
                  <div className="text-[#b22222] font-bold">от 400-800 тыс. руб.</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-red-100">
                  <h5 className="font-bold text-[#0b2a4a] mb-2">Промышленный ИБП</h5>
                  <p className="text-sm text-gray-600 mb-2">С LiFePO4 аккумуляторами (10-15 кВт). Для кратковременных отключений (2-4 часа).</p>
                  <div className="text-[#b22222] font-bold">от 500 000 руб.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Equipment Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#0b2a4a] mb-4">Дополнительные позиции</h2>
            <p className="text-gray-500">Промышленное оборудование для объектов от 600 м²</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Boiler GVS */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Промышленный бойлер ГВС</h4>
              <p className="text-xs text-gray-500 mb-3">Для производственных нужд, душевых, столовых.</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">РФ: "Термона" (БКН-1000)</span> — ~200 000 руб.
                </div>
                <div>
                  <span className="font-bold">Импорт: Drazice OKC 1000 NTR</span> — ~350 000 руб.
                </div>
                <div>
                  <span className="font-bold">Кожухотрубный теплообменник</span> — от 500 000 руб.<br/>
                  <span className="text-xs text-gray-500">Альфа Лаваль / Ридан (для больших мощностей).</span>
                </div>
              </div>
            </div>

            {/* Hydro Arrow */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Гидравлический разделитель</h4>
              <p className="text-xs text-gray-500 mb-3">Для мощных котельных.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: Gidromontazh (G-300 и выше)</span>
                <p className="mt-1">Для балансировки потоков в промышленных системах.</p>
              </div>
              <div className="text-[#b22222] font-black">~80-150 тыс. руб.</div>
            </div>

            {/* Circulation Pump */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Промышленный насос</h4>
              <p className="text-xs text-gray-500 mb-3">Для мощных систем.</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-bold">Германия: Wilo (CronoLine, VeroLine)</span> — ~100-300 тыс. руб.
                </div>
                <div>
                  <span className="font-bold">Германия: Grundfos (TPE, NK)</span> — ~120-350 тыс. руб.
                </div>
              </div>
            </div>

            {/* Expansion Tank */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Расширительный бак</h4>
              <p className="text-xs text-gray-500 mb-3">Большой объем (300-1000 л).</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ/Италия: Reflex</span>
                <p className="mt-1">Высокое качество мембран для промышленных систем.</p>
              </div>
              <div className="text-[#b22222] font-black">~50-150 тыс. руб.</div>
            </div>

            {/* SCADA */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Диспетчеризация (SCADA)</h4>
              <p className="text-xs text-gray-500 mb-3">Удаленное управление котельной.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: Xital Industrial + MasterSCADA</span>
                <p className="mt-1">Архив параметров, аварийные сообщения.</p>
              </div>
              <div className="text-[#b22222] font-black">~50-200 тыс. руб.</div>
            </div>

            {/* Heat Recovery */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0b2a4a] mb-2">Теплоутилизатор (экономайзер)</h4>
              <p className="text-xs text-gray-500 mb-3">Для пеллетных котлов.</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: Утилизация тепла уходящих газов</span>
                <p className="mt-1">Подогрев обратной воды или воздуха горения. Повышает КПД на 3-5%.</p>
              </div>
              <div className="text-[#b22222] font-black">от 300 000 руб.</div>
            </div>

            {/* Fire Safety */}
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow lg:col-span-3">
              <h4 className="font-bold text-[#b22222] mb-2">Система пожаротушения</h4>
              <p className="text-xs text-red-500 mb-3 uppercase font-bold">Обязательно по требованиям ПБ</p>
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-bold">РФ: Модули порошкового/водяного тушения</span>
                <p className="mt-1">Датчики пламени, система аварийной остановки шнеков для автоматических пеллетных котельных.</p>
              </div>
              <div className="text-[#0b2a4a] font-black">от 150 000 руб.</div>
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
