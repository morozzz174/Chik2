
import React from 'react';
import { 
  ChevronLeft, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  Info,
  Activity,
  Gauge,
  Factory,
  Building2,
  AlertTriangle,
  Truck,
  FileText,
  Wrench
} from 'lucide-react';

interface SolutionIndustrialProps {
  onBack: () => void;
}

const SolutionIndustrial: React.FC<SolutionIndustrialProps> = ({ onBack }) => {
  const equipment = [
    {
      name: 'Сигнал КОВ-100 СТн',
      origin: 'Россия',
      type: 'Напольный газовый',
      power: '100 кВт',
      pros: 'Энергонезависимость, простота, низкая цена (от 134 500 ₽).',
      cons: 'Нет насоса и бака, открытая камера, большой вес (230 кг).',
      forWhom: 'Бюджетные объекты, где важна простота.'
    },
    {
      name: 'ZOTA Master 100',
      origin: 'Россия',
      type: 'Напольный чугунный',
      power: '100 кВт',
      pros: 'Чугунный теплообменник, срок службы 25+ лет, энергонезависим.',
      cons: 'Высокая цена, большой вес, чувствителен к качеству воды.',
      forWhom: 'Объекты с приоритетом на долговечность.'
    },
    {
      name: 'Thermex Hyperion PS100',
      origin: 'Россия',
      type: 'Настенный конденсационный',
      power: '127.3 кВт',
      pros: 'КПД до 108%, компактность (105 кг), каскад до 16 котлов (>2 МВт).',
      cons: 'Энергозависим, высокая цена, нужен отвод конденсата.',
      forWhom: 'Отели и производства с дефицитом места.'
    },
    {
      name: 'PowerLink GXE50NG',
      origin: 'Великобритания / РФ',
      type: 'Мини-ТЭЦ (ГПУ)',
      power: '50 кВт (эл) + 90 кВт (т)',
      pros: 'Своя электроэнергия, общий КПД до 90%, тригенерация.',
      cons: 'Высокая цена (от 3.8 млн ₽), ТО каждые 500 часов.',
      forWhom: 'Объекты с круглогодичным потреблением энергии.'
    }
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
            <div className="bg-[#0b2a4a] text-white px-2 py-1 rounded font-bold text-sm">ЧИК</div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Решение №5: Пром. объект</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Factory size={16} />
              Промышленный масштаб
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Решение №5 <br />
              <span className="text-[#b22222]">«Пром. объект / Отель»</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Комплексные инженерные системы мощностью от 100 кВт до нескольких мегаватт. Каскадные котельные, когенерация и резервное топливное хозяйство.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Building2 size={600} className="translate-x-1/4 -translate-y-1/4" />
        </div>
      </header>

      {/* Equipment Options */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0b2a4a] mb-4">Генерирующее оборудование</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">От классических напольных котлов до высокотехнологичных каскадов.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {equipment.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0b2a4a] group-hover:text-[#b22222] transition-colors">{item.name}</h3>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mt-1">{item.origin} • {item.type}</p>
                  </div>
                  <div className="bg-[#0b2a4a] text-white px-4 py-2 rounded-xl font-black">
                    {item.power}
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                    <p className="text-sm text-gray-600"><strong>Плюсы:</strong> {item.pros}</p>
                  </div>
                  <div className="flex gap-3">
                    <AlertTriangle className="text-orange-400 shrink-0" size={20} />
                    <p className="text-sm text-gray-600"><strong>Нюансы:</strong> {item.cons}</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-xs font-bold text-[#0b2a4a] uppercase mb-2 flex items-center gap-2">
                    <Building2 size={14} className="text-[#b22222]" />
                    Для кого:
                  </p>
                  <p className="text-sm text-gray-500">{item.forWhom}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backup Fuel Section */}
      <section className="py-24 bg-[#0b2a4a] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8">Резервное топливное хозяйство</h2>
              <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                Для объектов категории 2 (отели, производства) наличие резервного топлива — это требование надежности и непрерывности техпроцесса.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <Truck className="text-[#b22222]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Вариант 1: СУГ (Газгольдер)</h4>
                    <p className="text-sm text-gray-400">Резервуар от 2000 до 10000 л с испарительной установкой. Наиболее простое решение для газовых котельных.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <Settings className="text-[#b22222]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Вариант 2: Дизельное топливо</h4>
                    <p className="text-sm text-gray-400">Требует замены или перенастройки горелочного устройства. Идеально для длительной автономной работы.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-[#b22222] p-12 rounded-[40px] relative overflow-hidden shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Zap />
                АВР по топливу
              </h3>
              <p className="text-lg mb-8 leading-relaxed">
                Ключевой элемент системы — автоматическое переключение. При падении давления в магистрали контроллер за секунды переводит котельную на резерв без участия персонала.
              </p>
              <div className="text-sm font-bold opacity-80 uppercase tracking-widest">
                Безопасность 24/7
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Stages */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0b2a4a] mb-16 text-center">Этапы реализации проекта</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="text-8xl font-black text-gray-200 absolute -top-10 -left-4 z-0">01</div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-[#0b2a4a] mb-4 flex items-center gap-2">
                  <FileText className="text-[#b22222]" />
                  Проектирование
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Разработка ТЗ под пиковые и базовые нагрузки. Согласование в Газраспределении и Ростехнадзоре.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="text-8xl font-black text-gray-200 absolute -top-10 -left-4 z-0">02</div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-[#0b2a4a] mb-4 flex items-center gap-2">
                  <Wrench className="text-[#b22222]" />
                  Монтаж
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Установка на фундамент или несущие рамы. Обустройство систем дымоудаления и отвода конденсата.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="text-8xl font-black text-gray-200 absolute -top-10 -left-4 z-0">03</div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-[#0b2a4a] mb-4 flex items-center gap-2">
                  <Activity className="text-[#b22222]" />
                  Пусконаладка
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Настройка каскадной автоматики и контроллеров. Программирование режимов параллельной работы с сетью.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[50px] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-12">Итоговая рекомендация ЧИК</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h4 className="font-bold text-[#b22222] mb-2">Бюджетный вариант</h4>
                    <p className="text-sm text-gray-400">Каскад из двух котлов <strong>Сигнал КОВ-100</strong>. Надежно и полностью энергонезависимо.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h4 className="font-bold text-[#b22222] mb-2">Технологичный вариант</h4>
                    <p className="text-sm text-gray-400">Каскад <strong>Thermex Hyperion</strong>. Максимальная экономия газа и компактность.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h4 className="font-bold text-[#b22222] mb-2">На десятилетия</h4>
                    <p className="text-sm text-gray-400">Чугунный <strong>ZOTA Master 100</strong>. Максимальный ресурс теплообменника.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h4 className="font-bold text-[#b22222] mb-2">Максимальная окупаемость</h4>
                    <p className="text-sm text-gray-400">Когенерация <strong>PowerLink</strong> при наличии круглогодичной нагрузки.</p>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 italic">Требуется выезд инженера для проведения гидравлического расчета.</p>
                <button className="bg-[#b22222] text-white px-10 py-4 rounded-sm font-bold hover:bg-red-800 transition-all flex items-center gap-3 shadow-2xl">
                  Заказать выезд инженера
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#b22222] rounded-full blur-[150px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
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

export default SolutionIndustrial;
