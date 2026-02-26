
import React from 'react';
import { 
  ChevronLeft, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  UserCheck, 
  Gavel, 
  ArrowRight,
  Info,
  Flame,
  Home,
  DoorOpen,
  Wind
} from 'lucide-react';

interface GasRequirementsProps {
  onBack: () => void;
  onOpenLaw: (id: string) => void;
}

const GasRequirements: React.FC<GasRequirementsProps> = ({ onBack, onOpenLaw }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#0b2a4a] font-bold hover:text-[#b22222] transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Вернуться на главную</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-[#0b2a4a] text-white px-2 py-1 rounded font-bold text-sm">ЧИК</div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Газовый регламент 2026</span>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222]/10 text-[#b22222] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Info size={14} />
              Актуально на 2026 год
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#0b2a4a] mb-6 leading-tight">
              Требования к помещению и монтажу <br />
              <span className="text-[#b22222]">газового оборудования</span>
            </h1>
            <p className="text-lg text-gray-600 border-l-4 border-[#b22222] pl-6 max-w-2xl">
              Свод правил для ИЖС в Челябинской области. Соответствие СП 402.1325800.2018 и Постановлению Правительства РФ №798.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-1">
              <a href="#room" className="block p-3 text-sm font-bold text-[#0b2a4a] hover:bg-gray-50 rounded transition-colors border-l-2 border-transparent hover:border-[#b22222]">1. Требования к помещению</a>
              <a href="#permits" className="block p-3 text-sm font-bold text-[#0b2a4a] hover:bg-gray-50 rounded transition-colors border-l-2 border-transparent hover:border-[#b22222]">2. Допуски монтажника</a>
              <a href="#laws" className="block p-3 text-sm font-bold text-[#0b2a4a] hover:bg-gray-50 rounded transition-colors border-l-2 border-transparent hover:border-[#b22222]">3. Законодательная база</a>
              <a href="#steps" className="block p-3 text-sm font-bold text-[#0b2a4a] hover:bg-gray-50 rounded transition-colors border-l-2 border-transparent hover:border-[#b22222]">4. Алгоритм подключения</a>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-20">
            
            {/* Section 1: Room Requirements */}
            <section id="room" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#0b2a4a] text-white rounded-lg flex items-center justify-center">
                  <Home size={24} />
                </div>
                <h2 className="text-3xl font-bold text-[#0b2a4a]">1. Требования к помещению</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Option A: Kitchen */}
                <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-[#0b2a4a] mb-6 flex items-center gap-2">
                    <span className="text-[#b22222]">А.</span> Кухня (до 50 кВт)
                  </h3>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span><strong>Объем:</strong> не менее 21 м³ (36 м³ для кухни-столовой)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span><strong>Потолки:</strong> высота от 2,5 метров</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span><strong>Окно:</strong> 0,03 м² остекления на 1 м³ объема</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span><strong>Дверь:</strong> ширина от 0,8 м, зазор снизу 0,02 м²</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span><strong>Вентиляция:</strong> естественный вытяжной канал</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-red-50 rounded-lg flex gap-3 text-xs text-red-800">
                    <AlertTriangle size={16} className="shrink-0" />
                    <span>Запрещено устанавливать в жилых комнатах, санузлах и ванных.</span>
                  </div>
                </div>

                {/* Option B: Boiler Room */}
                <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-[#0b2a4a] mb-6 flex items-center gap-2">
                    <span className="text-[#b22222]">Б.</span> Отдельная котельная
                  </h3>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span><strong>Объем:</strong> не менее 15 м³ (рекомендуется от 8 м² площади)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span><strong>Расположение:</strong> 1 этаж, цоколь или подвал</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span><strong>Дверь:</strong> открывание наружу, порожек 10 см</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span><strong>Стены:</strong> негорючие (кирпич, бетон), REI 45</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span><strong>Путь:</strong> до выхода на улицу не более 12 метров</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: Permits */}
            <section id="permits" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#0b2a4a] text-white rounded-lg flex items-center justify-center">
                  <UserCheck size={24} />
                </div>
                <h2 className="text-3xl font-bold text-[#0b2a4a]">2. Допуски и удостоверения монтажника</h2>
              </div>

              <div className="bg-[#0b2a4a] text-white rounded-2xl p-10 relative overflow-hidden">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="text-[#b22222] font-black text-4xl opacity-50">01</div>
                    <h4 className="font-bold text-lg">Профессия</h4>
                    <p className="text-sm text-gray-300">Диплом слесаря по эксплуатации и ремонту газового оборудования или монтажника СТС.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[#b22222] font-black text-4xl opacity-50">02</div>
                    <h4 className="font-bold text-lg">Электробезопасность</h4>
                    <p className="text-sm text-gray-300">Группа не ниже III (до 1000 В). Обязательно с 01.06.2026 для всех энергозависимых котлов.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[#b22222] font-black text-4xl opacity-50">03</div>
                    <h4 className="font-bold text-lg">Ростехнадзор</h4>
                    <p className="text-sm text-gray-300">Аттестация по областям А1 (основы) и Б7.1 (эксплуатация сетей газораспределения).</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              </div>
            </section>

            {/* Section 3: Laws */}
            <section id="laws" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#0b2a4a] text-white rounded-lg flex items-center justify-center">
                  <Gavel size={24} />
                </div>
                <h2 className="text-3xl font-bold text-[#0b2a4a]">3. Законодательная база</h2>
              </div>

              <div className="space-y-4">
                {[
                  { id: "384", title: "ФЗ № 384", desc: "Технический регламент о безопасности зданий и сооружений." },
                  { id: "410", title: "ПП РФ № 410", desc: "Главный документ по содержанию и монтажу ВДГО/ВКГО." },
                  { id: "798", title: "ПП РФ № 798", desc: "Актуальные правила пользования газом (ред. 2025-2026)." },
                  { id: "624", title: "Приказ № 624", desc: "Монтаж может выполнять только член СРО в области газоснабжения." }
                ].map((law, i) => (
                  <button 
                    key={i} 
                    onClick={() => onOpenLaw(law.id)}
                    className="w-full flex items-center justify-between p-6 border border-gray-100 rounded-xl hover:bg-gray-50 hover:border-[#b22222] transition-all group text-left"
                  >
                    <div>
                      <h4 className="font-bold text-[#0b2a4a] group-hover:text-[#b22222] transition-colors">{law.title}</h4>
                      <p className="text-sm text-gray-500">{law.desc}</p>
                    </div>
                    <FileText className="text-gray-300 group-hover:text-[#b22222] transition-colors" />
                  </button>
                ))}
              </div>
            </section>

            {/* Section 4: Steps */}
            <section id="steps" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#0b2a4a] text-white rounded-lg flex items-center justify-center">
                  <ArrowRight size={24} />
                </div>
                <h2 className="text-3xl font-bold text-[#0b2a4a]">4. Алгоритм газификации (Челябинск)</h2>
              </div>

              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                {[
                  { step: "Шаг 1", title: "Технические условия (ТУ)", desc: "Подача заявки через connektgas.ru или Госуслуги. ГРО выдает параметры давления и объема." },
                  { step: "Шаг 2", title: "Проектирование", desc: "Заказ проекта у организации с СРО. Требуется паспорт котла и точные характеристики." },
                  { step: "Шаг 3", title: "Монтажные работы (СМР)", desc: "Прокладка труб, установка счетчика и датчиков. Обвязка котла водой и отоплением." },
                  { step: "Шаг 4", title: "Ввод в эксплуатацию", desc: "Приезд инспектора ГРО, проверка герметичности, составление акта готовности сетей." },
                  { step: "Шаг 5", title: "Договор на ТО", desc: "Обязательное заключение договора на обслуживание. Без него газ могут отключить." }
                ].map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white group-[.is-active]:bg-[#b22222] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <CheckCircle2 size={20} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-[#b22222]">{item.step}</div>
                      </div>
                      <div className="text-[#0b2a4a] font-bold mb-2">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Changes Footer */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0b2a4a] mb-8 flex items-center gap-3">
                <Flame className="text-[#b22222]" />
                Нюансы Челябинской области 2026
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400">Социальная газификация</h4>
                  <p className="text-sm text-gray-600">Бесплатное подведение трубы до границ участка, если в поселке уже есть газ.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400">Цифровизация</h4>
                  <p className="text-sm text-gray-600">Все заявки подаются через <strong>connektgas.ru</strong> — официальный портал ГРО.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400">Проверки</h4>
                  <p className="text-sm text-gray-600">Ростехнадзор имеет право на внеплановые проверки самовольных изменений систем.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0b2a4a] text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-60 mb-4">Информация подготовлена Челябинской Инженерной Компанией (ЧИК)</p>
          <button 
            onClick={onBack}
            className="bg-[#b22222] px-8 py-3 rounded font-bold hover:bg-red-800 transition-colors"
          >
            Вернуться на главную
          </button>
        </div>
      </footer>
    </div>
  );
};

export default GasRequirements;
