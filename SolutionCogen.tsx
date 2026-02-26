
import React from 'react';
import { 
  ChevronLeft, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  Info,
  Activity,
  Gauge,
  Waves,
  AlertTriangle,
  Factory,
  Home
} from 'lucide-react';

interface SolutionCogenProps {
  onBack: () => void;
}

const SolutionCogen: React.FC<SolutionCogenProps> = ({ onBack }) => {
  const technologies = [
    {
      name: 'ЭВОГРЕСС (EVOGRESS)',
      origin: 'Россия (Сколково)',
      type: 'Стирлинг',
      power: '15 кВт (эл) / 30 кВт (т)',
      pros: 'Ультратихий, ресурс 80-100 тыс. часов, без вибраций.',
      cons: 'Высокая цена, под заказ.',
      forWhom: 'Для тех, кто ищет тишину и инновации.'
    },
    {
      name: 'Solo Stirling 161',
      origin: 'Германия',
      type: 'Стирлинг',
      power: '2–9.5 кВт (эл) / 8–26 кВт (т)',
      pros: 'Эталон тишины, модуляция мощности, КПД до 96%.',
      cons: 'Сложности с запчастями и сервисом.',
      forWhom: 'Ценители премиального евро-качества.'
    },
    {
      name: 'TEDOM Micro',
      origin: 'Чехия',
      type: 'Газопоршневая',
      power: '10–50 кВт (эл)',
      pros: 'Самый популярный бренд в РФ, развитый сервис.',
      cons: 'Шумная (нужно отдельное здание), частое ТО.',
      forWhom: 'Усадьбы с отдельной котельной, отели.'
    },
    {
      name: 'КАМТЭС-100 (КАМАЗ)',
      origin: 'Россия',
      type: 'Газопоршневая',
      power: '100 кВт (эл) / 128 кВт (т)',
      pros: 'Легендарная надежность, низкая себестоимость энергии.',
      cons: 'Огромная мощность, промышленный шум.',
      forWhom: 'Фермы, производства, поселки (5-10 домов).'
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
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Решение №4: Когенерация</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Cpu size={16} />
              Hi-Tech Энергетика
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Решение №4 <br />
              <span className="text-[#b22222]">«Когенерация»</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl">
              Сжигаем газ — получаем тепло и «бесплатное» электричество. Суммарный КПД до 95%. В 2-3 раза эффективнее раздельной генерации.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           <Activity size={600} className="translate-x-1/4 -translate-y-1/4 text-[#b22222]" />
        </div>
      </header>

      {/* Concept Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0b2a4a] mb-8">Принцип Мини-ТЭЦ</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Микро-ТЭЦ работает наиболее эффективно в базовом режиме (24/7). Она покрывает основную потребность в тепле, а вырабатываемое электричество используется для нужд дома или производства.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b2a4a]">Электричество</h4>
                    <p className="text-sm text-gray-500">Вырабатывается как побочный продукт нагрева теплоносителя.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-red-50 text-[#b22222] rounded-xl flex items-center justify-center shrink-0">
                    <Flame size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b2a4a]">Тепло</h4>
                    <p className="text-sm text-gray-500">Утилизируется от двигателя и идет на отопление и ГВС.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-12 rounded-[40px] border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0b2a4a] mb-6">Парадокс мощности</h3>
              <p className="text-sm text-gray-600 mb-6 italic">
                "Для дома 300-400 м² нужно ~30-40 кВт тепла. Электрическая мощность при этом составит ~10-15 кВт (соотношение 3:1)."
              </p>
              <div className="bg-[#0b2a4a] text-white p-6 rounded-2xl">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Info size={18} className="text-[#b22222]" />
                  Решение ЧИК:
                </h4>
                <p className="text-sm text-gray-300">
                  Обязательно используем <strong>теплоаккумулятор</strong> и продумываем сброс излишков энергии (например, на подогрев бассейна или в сеть по «зеленому тарифу»).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0b2a4a] mb-16 text-center">Сравнительный анализ технологий</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#0b2a4a]">{tech.name}</h3>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">{tech.origin} • {tech.type}</p>
                  </div>
                  <div className="bg-[#b22222]/10 text-[#b22222] px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                    {tech.power}
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                    <p className="text-sm text-gray-600"><strong>Плюсы:</strong> {tech.pros}</p>
                  </div>
                  <div className="flex gap-3">
                    <AlertTriangle className="text-orange-400 shrink-0" size={18} />
                    <p className="text-sm text-gray-600"><strong>Нюансы:</strong> {tech.cons}</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-50">
                  <p className="text-xs font-bold text-[#0b2a4a] uppercase mb-2">Для кого:</p>
                  <p className="text-sm text-gray-500">{tech.forWhom}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peak Boiler Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-[#0b2a4a] rounded-[50px] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Пиковый газовый котел (Догрев)</h2>
              <p className="text-gray-300 mb-12 text-lg">
                Поскольку микро-ТЭЦ наиболее эффективна в базовом режиме, для покрытия пиковых нагрузок (морозы, ГВС) необходим дополнительный котел. Он включается автоматически.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                  <h4 className="font-bold text-[#b22222] mb-4 flex items-center gap-2">
                    <Home size={20} />
                    Для Стирлинга (EVOGRESS/SOLO)
                  </h4>
                  <p className="text-sm text-gray-400">
                    Идеально подойдет настенный <strong>конденсационный котел</strong> (Buderus Logamax, Viessmann) 24-30 кВт. Максимальная эффективность в межсезонье.
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                  <h4 className="font-bold text-[#b22222] mb-4 flex items-center gap-2">
                    <Factory size={20} />
                    Для TEDOM Micro
                  </h4>
                  <p className="text-sm text-gray-400">
                    Потребуется мощный напольный котел 30-50 кВт (<strong>Protherm Медведь</strong>, <strong>Лемакс Премиум</strong>), так как тепловой мощности ТЭЦ может не хватить в пике.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#b22222] rounded-full blur-[150px] opacity-10"></div>
          </div>
        </div>
      </section>

      {/* Stirling vs Piston */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0b2a4a] mb-16 text-center">Стирлинг vs Газопоршневой</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-[#b22222]">
                <h4 className="text-xl font-bold text-[#0b2a4a] mb-4">Стирлинг — это «Феррари»</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Дорого, ультратихо, долговечно (20+ лет). Сложно и дорого в ремонте, но это предел мечтаний для частного «умного дома».
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-[#0b2a4a]">
                <h4 className="text-xl font-bold text-[#0b2a4a] mb-4">Газопоршневой — «Рабочая лошадка»</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Дешевле в пересчете на кВт, но шумно. Требует ТО так же часто, как автомобиль (замена масла, свечей каждые 1-2 года).
                </p>
              </div>
            </div>
            <div className="bg-[#0b2a4a] text-white p-10 rounded-[40px]">
              <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                <ShieldCheck className="text-[#b22222]" />
                Юридический нюанс (РФ)
              </h4>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Если вы планируете продавать излишки электричества в общую сеть, вам придется стать субъектом розничного рынка электроэнергии.
              </p>
              <ul className="space-y-3 text-xs text-gray-400">
                <li>• Регистрация ЮЛ или ИП</li>
                <li>• Автоматика защиты от «островного эффекта»</li>
                <li>• Договор с энергосбытом</li>
              </ul>
              <div className="mt-8 p-4 bg-red-900/50 rounded-xl border border-red-800 text-[10px] uppercase font-bold tracking-widest">
                Внимание: Самовольный вброс энергии в сеть смертельно опасен для ремонтников!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-[#0b2a4a] mb-8">Итоговая рекомендация</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h4 className="font-bold text-[#0b2a4a] mb-4 flex items-center gap-2">
                  <Home className="text-[#b22222]" />
                  Для частного дома
                </h4>
                <p className="text-sm text-gray-600">
                  Если строите для себя и хотите тишины на 20 лет — выбирайте <strong>ЭВОГРЕСС</strong>. Это дорого, но максимально комфортно.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h4 className="font-bold text-[#0b2a4a] mb-4 flex items-center gap-2">
                  <Factory className="text-[#b22222]" />
                  Для бизнеса
                </h4>
                <p className="text-sm text-gray-600">
                  Для фермы или отеля оптимальна чешская техника <strong>TEDOM</strong>. Лучшее соотношение цены, качества и доступности сервиса в РФ.
                </p>
              </div>
            </div>
            <button className="bg-[#b22222] text-white px-12 py-5 rounded-sm font-bold text-lg hover:bg-red-800 transition-all shadow-2xl flex items-center gap-3 mx-auto">
              Заказать расчет энергоцентра
              <ArrowRight size={20} />
            </button>
            <p className="mt-8 text-xs text-gray-400 italic">Данные актуальны на начало 2026 года. Требуется квалифицированное проектирование.</p>
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

export default SolutionCogen;
