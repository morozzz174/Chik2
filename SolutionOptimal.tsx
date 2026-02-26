
import React from 'react';
import { 
  ChevronLeft, 
  Zap, 
  ShieldCheck, 
  Settings, 
  AlertTriangle, 
  CheckCircle2, 
  Info,
  Flame,
  Battery,
  Sun,
  ArrowRight,
  Cpu,
  Gauge
} from 'lucide-react';

interface SolutionOptimalProps {
  onBack: () => void;
}

const SolutionOptimal: React.FC<SolutionOptimalProps> = ({ onBack }) => {
  const boilers = [
    {
      brand: 'BAXI ECO Four 24 F',
      origin: 'Италия',
      type: 'Конвекционный',
      features: 'Проверенная надежность, самодиагностика, насос Grundfos. Требует ИБП.',
      price: '38 000 – 42 000',
      tag: 'Надежность'
    },
    {
      brand: 'BAXI Luna 3 240 Fi',
      origin: 'Италия',
      type: 'Конденсационный',
      features: 'КПД до 98%, широкий диапазон модуляции, идеален для теплых полов.',
      price: '58 000 – 65 000',
      tag: 'Эффективность'
    },
    {
      brand: 'Kotitonttu TOIVO T24',
      origin: 'Финляндия',
      type: 'Парапетный',
      features: 'Высокая надежность, адаптация к суровому климату и перепадам газа.',
      price: '70 000 – 85 000',
      tag: 'Северный'
    },
    {
      brand: 'Rinnai BR-SE24',
      origin: 'Япония',
      type: 'Конденсационный',
      features: 'Прецизионная модуляция, компактность, защита от замерзания.',
      price: '80 000 – 95 000',
      tag: 'Премиум'
    },
    {
      brand: 'Thermex Hydra HM24',
      origin: 'РФ / Италия',
      type: 'Конденсационный',
      features: 'Хороший набор функций, адаптирован к РФ, цена ниже конкурентов.',
      price: '45 000 – 55 000',
      tag: 'Оптимально'
    },
    {
      brand: 'Лемакс S24',
      origin: 'Таганрог',
      type: 'Конвекционный',
      features: 'Чугунная горелка, рассчитан на перепады газа, ремонтопригоден.',
      price: '30 000 – 35 000',
      tag: 'Сделано в РФ'
    }
  ];

  const backupSystems = [
    {
      name: 'Вариант 1: «Технологичный»',
      model: 'МАП HYBRID 12В 3кВт',
      features: ['Функция «подкачки» энергии', 'Поддержка любых типов АКБ', 'Встроенный микрокомпьютер'],
      price: 'от 134 000 ₽',
      forWhom: 'Для гибкой настройки и работы с пиковыми нагрузками'
    },
    {
      name: 'Вариант 2: «Солнечная готовность»',
      model: 'EPSolar / EPEVER 3кВт',
      features: ['Встроенный MPPT-контроллер', 'Мгновенное переключение (10 мс)', 'Тонкая настройка напряжений'],
      price: 'от 154 000 ₽',
      forWhom: 'Для тех, кто планирует солнечные панели в будущем',
      highlight: true
    },
    {
      name: 'Вариант 3: «Премиум-класс»',
      model: 'Fronius Primo GEN24',
      features: ['КПД до 97.4%, защита IP66', 'Функция PV Point (без АКБ)', 'Облачный мониторинг'],
      price: 'от 400 000 ₽',
      forWhom: 'Для ценителей бескомпромиссного качества'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#0b2a4a] font-bold hover:text-[#b22222] transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Назад к решениям</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-[#0b2a4a] text-white px-2 py-1 rounded font-bold text-sm">ЧИК</div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Решение №2: Оптимальный дом</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-gray-50 py-20 relative overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222]/10 text-[#b22222] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle2 size={14} />
              Эффективность и Автономность
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#0b2a4a] mb-6 leading-tight">
              Решение №2 <br />
              <span className="text-[#b22222]">«Оптимальный дом»</span>
            </h1>
            <p className="text-xl text-gray-600 border-l-4 border-[#b22222] pl-6 mb-8 max-w-2xl">
              Для домов 100–180 м² с теплыми полами, ГВС и потребностью в полной энергонезависимости. 
              Конденсационные технологии и LiFePO₄ аккумуляторы.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
           <Cpu size={400} className="translate-x-1/4" />
        </div>
      </header>

      {/* Gas Boiler Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-[#0b2a4a] mb-6">1. Газовый котел (24 кВт)</h2>
                <p className="text-gray-600 mb-6">
                  Главная особенность — использование <strong>конденсационных котлов</strong>. Они используют энергию пара дымовых газов, давая КПД до 98% и экономию газа до 20%.
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-[#0b2a4a] mb-2 flex items-center gap-2">
                    <Info size={18} className="text-blue-500" />
                    Вердикт инженера
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Для теплых полов — только конденсационный.</li>
                    <li>• Для простоты сервиса — конвекционный.</li>
                    <li>• Для суровых условий — Kotitonttu или Лемакс.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {boilers.map((boiler, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-[#0b2a4a]">{boiler.brand}</h4>
                        <p className="text-xs text-gray-400">{boiler.origin} • {boiler.type}</p>
                      </div>
                      <span className="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded uppercase text-gray-500">{boiler.tag}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{boiler.features}</p>
                    <div className="text-lg font-black text-[#b22222]">{boiler.price} ₽</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backup Power Section */}
      <section className="py-20 bg-[#0b2a4a] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">2. Система резервного питания</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Гибридный инвертор + LiFePO₄ — сердце вашей автономности.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {backupSystems.map((sys, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border ${sys.highlight ? 'bg-white/10 border-[#b22222] scale-105 shadow-2xl' : 'border-white/10 bg-white/5'} transition-all`}>
                <h3 className="text-xl font-bold mb-2">{sys.name}</h3>
                <p className="text-[#b22222] font-bold text-sm mb-6">{sys.model}</p>
                <ul className="space-y-3 mb-8 text-sm text-gray-300">
                  {sys.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-[#b22222] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 uppercase font-bold">Ориентир цены</div>
                  <div className="text-2xl font-black">{sys.price}</div>
                </div>
                <p className="text-xs text-gray-400 italic">{sys.forWhom}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Преимущества гибридных систем:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl flex gap-3">
                  <Sun className="text-[#b22222]" />
                  <span className="text-sm">Готовность к солнечным панелям</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl flex gap-3">
                  <Gauge className="text-[#b22222]" />
                  <span className="text-sm">Управление приоритетами</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl flex gap-3">
                  <Battery className="text-[#b22222]" />
                  <span className="text-sm">Срок службы АКБ до 15 лет</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl flex gap-3">
                  <Zap className="text-[#b22222]" />
                  <span className="text-sm">Чистая синусоида</span>
                </div>
              </div>
            </div>
            <div className="bg-[#b22222] p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle />
                Важно знать!
              </h4>
              <p className="text-sm mb-4">
                <strong>НЕ ИСПОЛЬЗУЙТЕ LiFePO₄ с обычными ИБП.</strong> У них разные алгоритмы заряда. Только гибридные инверторы обеспечат долгий срок службы литиевых батарей.
              </p>
              <div className="text-xs opacity-80">
                * BMS (Battery Management System) обязательна для защиты от перезаряда и перегрева.
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b22222] rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Technical Nuances */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0b2a4a] mb-12 text-center">Технические нюансы монтажа</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold text-[#0b2a4a] mb-4 flex items-center gap-2">
                <Settings className="text-[#b22222]" />
                Сечение проводов
              </h4>
              <p className="text-sm text-gray-600">Для инвертора 3 кВт сечение кабеля от АКБ должно быть <strong>не менее 50 мм² (медь)</strong>. Это критично для пожарной безопасности.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold text-[#0b2a4a] mb-4 flex items-center gap-2">
                <Cpu className="text-[#b22222]" />
                Мониторинг
              </h4>
              <p className="text-sm text-gray-600">Современные системы поддерживают <strong>Wi-Fi/Bluetooth</strong>. Вы видите уровень заряда и потребление прямо со смартфона.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold text-[#0b2a4a] mb-4 flex items-center gap-2">
                <ShieldCheck className="text-[#b22222]" />
                Заземление
              </h4>
              <p className="text-sm text-gray-600">Многие котлы чувствительны к фазе. Исправное заземление необходимо для корректной работы автоматики.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-[40px] p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8">Итоговая рекомендация ЧИК</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-gray-400 mb-6">Для дома 100–180 м² оптимальным выбором будет:</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#b22222] rounded-full"></div>
                      <span className="font-bold">Инвертор EPSolar (Вариант 2)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#b22222] rounded-full"></div>
                      <span className="font-bold">2x LiFePO₄ батареи по 100 Ач</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <ArrowRight className="text-[#b22222] shrink-0" />
                    <span className="text-sm">8–10 часов полной автономии</span>
                  </div>
                  <div className="flex gap-3">
                    <ArrowRight className="text-[#b22222] shrink-0" />
                    <span className="text-sm">Готовность к солнцу без замены узлов</span>
                  </div>
                  <div className="flex gap-3">
                    <ArrowRight className="text-[#b22222] shrink-0" />
                    <span className="text-sm">Защита дорогостоящего котла</span>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-sm text-gray-400 italic">Данные актуальны на начало 2026 года.</div>
                <button className="bg-[#b22222] text-white px-8 py-4 rounded-sm font-bold hover:bg-red-800 transition-colors shadow-xl">
                  Заказать расчет проекта
                </button>
              </div>
            </div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#b22222] rounded-full blur-[100px] opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#0b2a4a] font-bold mb-4">ЧИК — Челябинская Инженерная Компания</p>
          <button 
            onClick={onBack}
            className="text-gray-400 hover:text-[#b22222] transition-colors text-sm font-bold"
          >
            Вернуться на главную
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SolutionOptimal;
