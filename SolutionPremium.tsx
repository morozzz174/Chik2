
import React from 'react';
import { 
  ChevronLeft, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Flame, 
  Battery, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  Info,
  Layers,
  Activity,
  Gauge,
  XCircle
} from 'lucide-react';

interface SolutionPremiumProps {
  onBack: () => void;
}

const SolutionPremium: React.FC<SolutionPremiumProps> = ({ onBack }) => {
  const boilers = [
    { name: 'Прохоров (РФ)', material: 'Чугун', energy: 'Да', price: '90-120 т.р.', features: 'Высокая ремонтопригодность, адаптация к перепадам газа.', tag: 'Надежность' },
    { name: 'Лемакс Classic-40', material: 'Сталь 2мм', energy: 'Да', price: '70-87 т.р.', features: 'Итальянская автоматика SIT, горелка POLIDORO.', tag: 'Популярный' },
    { name: 'Лемакс Omega E-40', material: 'Сталь', energy: 'Нет', price: '85-95 т.р.', features: 'Увеличенная площадь теплообмена, Wi-Fi, Modbus.', tag: 'Технологичный' },
    { name: 'Protherm Медведь TLO', material: 'Чугун', energy: 'Да', price: '85-100 т.р.', features: 'Оптимальное цена/качество, широкая сеть сервиса.', tag: 'Европа' },
    { name: 'Ferroli Pegasus D40', material: 'Чугун', energy: 'Нет', price: '110-130 т.р.', features: 'Погодозависимая автоматика, каскадное подключение.', tag: 'Премиум' },
    { name: 'Buderus Logano G124', material: 'Чугун', energy: 'Да', price: '150-180 т.р.', features: 'Эталонное немецкое качество, низкий уровень шума.', tag: 'Эталон' },
  ];

  const backupSystems = [
    {
      id: 1,
      name: 'Hypontech (Plug & Play)',
      capacity: '12 кВт·ч',
      power: '8-10 кВт',
      pros: 'Полностью готовое решение, гарантия 10 лет, удаленный мониторинг.',
      price: 'от 550 000 ₽',
      forWhom: 'Для любителей простых и надежных решений'
    },
    {
      id: 2,
      name: 'Ingotta Monoblock',
      capacity: '15 кВт·ч',
      power: '10 кВт',
      pros: 'Огромная емкость в одном корпусе, поддержка параллельной работы.',
      price: '480-550 т.р.',
      forWhom: 'Максимальная емкость в компактном корпусе'
    },
    {
      id: 3,
      name: 'Fronius + BYD',
      capacity: '10.24 кВт·ч',
      power: '10 кВт',
      pros: 'Абсолютная надежность, интеграция с умным домом, австрийское качество.',
      price: 'от 800 000 ₽',
      forWhom: 'Для ценителей бескомпромиссного качества'
    },
    {
      id: 4,
      name: 'SILA PRO (Hybrid)',
      capacity: '10-15 кВт·ч',
      power: '10 кВт',
      pros: 'Функция «подкачки» энергии, мощные MPPT контроллеры, доступная цена.',
      price: 'от 510 000 ₽',
      forWhom: 'Максимум функционала за разумные деньги',
      highlight: true
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
            <div className="bg-[#b22222] text-white px-2 py-1 rounded font-bold text-sm">ЧИК</div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Решение №3: Полная автономия</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-[#0b2a4a] text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <ShieldCheck size={16} />
              Премиум сегмент
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Решение №3 <br />
              <span className="text-[#b22222]">«Полная автономия»</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Для усадеб 200–300 м². Максимальная надежность, гибкость управления и полная независимость от внешних сетей даже в экстремальные морозы.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Layers size={500} className="translate-x-1/4 -translate-y-1/4" />
        </div>
      </header>

      {/* Section 1: Boilers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <h2 className="text-4xl font-bold text-[#0b2a4a] mb-8">1. Напольный котел (40 кВт)</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Для больших домов чугунный теплообменник — это стандарт долговечности (30–50 лет). Мы отобрали 10 моделей, адаптированных к российским условиям эксплуатации.
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-[#0b2a4a] mb-2 flex items-center gap-2">
                      <Flame size={18} className="text-[#b22222]" />
                      Почему 40 кВт?
                    </h4>
                    <p className="text-sm text-gray-500">Запас мощности необходим для компенсации пиковых нагрузок в сильные морозы и быстрого нагрева ГВС.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#0b2a4a] text-white">
                    <tr>
                      <th className="p-5">Модель</th>
                      <th className="p-5">Теплообменник</th>
                      <th className="p-5">Энергонезав.</th>
                      <th className="p-5">Цена (ориент.)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {boilers.map((boiler, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                        <td className="p-5">
                          <div className="font-bold text-[#0b2a4a]">{boiler.name}</div>
                          <div className="text-[10px] font-bold text-[#b22222] uppercase mt-1">{boiler.tag}</div>
                        </td>
                        <td className="p-5 text-gray-600">{boiler.material}</td>
                        <td className="p-5 text-gray-600">{boiler.energy}</td>
                        <td className="p-5 font-bold text-[#0b2a4a]">{boiler.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-[#0b2a4a] mb-2">Для максимальной автономии</h4>
                  <p className="text-xs text-gray-600">Выбирайте энергонезависимые модели с чугуном: <strong>Прохоров</strong> или <strong>Protherm Медведь</strong>.</p>
                </div>
                <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-[#b22222] mb-2">Для умного дома</h4>
                  <p className="text-xs text-gray-600">Обратите внимание на <strong>Лемакс CLEVER</strong> или <strong>Omega E</strong> с поддержкой Modbus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Hybrid System */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0b2a4a] mb-4">2. Гибридная система: Газ + Электро</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Интеллектуальная связка двух котлов для абсолютной безопасности.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0b2a4a] mb-4">Режим 1: Обычный</h3>
              <p className="text-sm text-gray-500 leading-relaxed">На улице до -15°C. Работает только газовый котел — это максимально экономично.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0b2a4a] mb-4">Режим 2: Пиковый</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Ниже -20°C. Контроллер включает электрокотел в помощь основному. Работают параллельно.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0b2a4a] mb-4">Режим 3: Авария</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Проблемы с газом. Автоматика переводит всю нагрузку на электрокотел от резервной системы.</p>
            </div>
          </div>

          <div className="bg-[#0b2a4a] text-white p-10 rounded-[40px] flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">Как мы это подключаем:</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#b22222] shrink-0" />
                  <span><strong>Гидравлика:</strong> Параллельное подключение с обратными клапанами для исключения теплопотерь через нерабочий котел.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#b22222] shrink-0" />
                  <span><strong>Управление:</strong> Погодозависимый контроллер управляет обоими котлами, выставляя приоритет газа.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#b22222] shrink-0" />
                  <span><strong>Бустер:</strong> Электрокотел используется как «доводчик» температуры в самые холодные ночи.</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Settings className="text-[#b22222]" />
                <h4 className="font-bold">Техническая реализация</h4>
              </div>
              <p className="text-sm text-gray-400 italic leading-relaxed">
                "Связка газового и электрического котла — это сердце интеллектуального отопления. Она позволяет не только экономить, но и спасает дом от разморозки при любых нештатных ситуациях."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Backup Power */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0b2a4a] mb-4">3. Резерв 10 кВт + LiFePO₄</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Питание всего коттеджа: освещение, насосы, холодильники и электрокотел.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {backupSystems.map((sys) => (
              <div key={sys.id} className={`p-8 rounded-3xl border transition-all duration-500 ${sys.highlight ? 'bg-[#0b2a4a] text-white border-[#b22222] shadow-2xl scale-105' : 'bg-white border-gray-100 shadow-sm hover:shadow-md'}`}>
                <h3 className="text-lg font-bold mb-2">{sys.name}</h3>
                <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest mb-6 opacity-60">
                  <span>{sys.capacity}</span>
                  <span>{sys.power}</span>
                </div>
                <p className={`text-xs mb-8 leading-relaxed ${sys.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{sys.pros}</p>
                <div className="mt-auto">
                  <div className="text-2xl font-black text-[#b22222] mb-1">{sys.price}</div>
                  <p className={`text-[10px] italic ${sys.highlight ? 'text-gray-400' : 'text-gray-400'}`}>{sys.forWhom}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-900 text-white p-10 rounded-[40px]">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Info className="text-[#b22222]" />
                Важные нюансы премиум-систем
              </h3>
              <div className="space-y-6 text-sm">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">1</div>
                  <p><span className="font-bold text-gray-300">Заземление:</span> Сопротивление контура не более 4 Ом для защиты сложной электроники.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">2</div>
                  <p><span className="font-bold text-gray-300">Вентиляция:</span> Обязательный отвод тепла из помещения с инвертором и АКБ.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">3</div>
                  <p><span className="font-bold text-gray-300">Сечение кабелей:</span> Медь не менее 35–50 мм² для систем 48В при мощности 10 кВт.</p>
                </div>
              </div>
            </div>
            <div className="bg-red-50 p-10 rounded-[40px] border border-red-100">
              <h3 className="text-2xl font-bold text-red-900 mb-8 flex items-center gap-3">
                <AlertTriangle />
                Типичные ошибки
              </h3>
              <ul className="space-y-4 text-sm text-red-800">
                <li className="flex gap-3">
                  <XCircleIcon className="shrink-0 mt-1" size={16} />
                  <span><strong>Неправильный расчет труб:</strong> Ведет к шуму и неравномерному прогреву дома.</span>
                </li>
                <li className="flex gap-3">
                  <XCircleIcon className="shrink-0 mt-1" size={16} />
                  <span><strong>Отсутствие обратных клапанов:</strong> Тепло уходит через выключенный котел.</span>
                </li>
                <li className="flex gap-3">
                  <XCircleIcon className="shrink-0 mt-1" size={16} />
                  <span><strong>Порядок включения:</strong> Игнорирование последовательности АКБ → Инвертор убивает BMS.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-[50px] p-12 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-black text-[#0b2a4a] mb-12">Итоговая рекомендация для дома 200–300 м²</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-[#b22222] uppercase tracking-widest text-xs mb-4">Выбор котла</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Для абсолютной автономии — <strong>Прохоров (чугун)</strong>. <br />
                      Для комфорта и управления — <strong>Лемакс Omega E-40</strong>. <br />
                      Для экономии места — настенный <strong>Fondital Antea Plus</strong>.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#b22222] uppercase tracking-widest text-xs mb-4">Резервное питание</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Оптимальный выбор — <strong>SILA PRO 10000MH</strong>. Функция подкачки продлит жизнь АКБ и позволит легко добавить солнечные панели в будущем.
                    </p>
                  </div>
                </div>
                <div className="bg-[#0b2a4a] p-10 rounded-3xl text-white">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Gauge className="text-[#b22222]" />
                    Готовность 2026
                  </h4>
                  <p className="text-sm text-gray-400 mb-8">Все предложенные решения соответствуют актуальным нормам безопасности и готовы к эксплуатации в суровом климате Урала.</p>
                  <button className="w-full bg-[#b22222] py-4 rounded-sm font-bold hover:bg-red-800 transition-all flex items-center justify-center gap-2">
                    Запросить премиум-расчет
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#b22222] rounded-full blur-[150px] opacity-10"></div>
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

const XCircleIcon = ({ className, size }: { className?: string, size?: number }) => (
  <XCircle className={className} size={size} />
);

export default SolutionPremium;
