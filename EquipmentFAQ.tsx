
import React from 'react';
import { 
  ChevronLeft, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Flame, 
  Layout, 
  Wind, 
  Zap,
  Info,
  Users,
  Home,
  ShieldCheck
} from 'lucide-react';

interface EquipmentFAQProps {
  onBack: () => void;
}

const EquipmentFAQ: React.FC<EquipmentFAQProps> = ({ onBack }) => {
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
            <span>Вернуться на главную</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-[#0b2a4a] text-white px-2 py-1 rounded font-bold text-sm">ЧИК</div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Гид по выбору оборудования</span>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222]/10 text-[#b22222] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <HelpCircle size={14} />
              База знаний ЧИК
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#0b2a4a] mb-6 leading-tight">
              Основные вопросы при <br />
              <span className="text-[#b22222]">выборе оборудования</span>
            </h1>
            <p className="text-lg text-gray-600 border-l-4 border-[#b22222] pl-6 max-w-2xl">
              Помогаем разобраться в классификации газовых котлов и выбрать оптимальное решение для вашего дома в Челябинской области.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          
          {/* 1. Single vs Double Circuit */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-[#0b2a4a] text-white rounded-lg flex items-center justify-center">
                <Flame size={24} />
              </div>
              <h2 className="text-3xl font-bold text-[#0b2a4a]">1. Одноконтурный или Двухконтурный?</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#0b2a4a] mb-6 flex items-center gap-2">
                  <span className="text-[#b22222]">01.</span> Одноконтурный котел
                </h3>
                <p className="text-sm text-gray-500 mb-6 italic">Только отопление + внешний бойлер для ГВС</p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                    <span className="text-sm text-gray-600"><strong>Комфорт:</strong> Позволяет пользоваться горячей водой в нескольких точках одновременно без перепадов.</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                    <span className="text-sm text-gray-600"><strong>Рециркуляция:</strong> Горячая вода идет сразу, не нужно сливать холодную.</span>
                  </div>
                  <div className="flex gap-3">
                    <XCircle className="text-red-400 shrink-0" size={18} />
                    <span className="text-sm text-gray-600"><strong>Минусы:</strong> Занимает больше места, дороже на старте (нужен бойлер и обвязка).</span>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl text-xs font-bold text-[#0b2a4a]">
                  Идеально для: Семей от 3-4 человек, больших домов с несколькими санузлами.
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#0b2a4a] mb-6 flex items-center gap-2">
                  <span className="text-[#b22222]">02.</span> Двухконтурный котел
                </h3>
                <p className="text-sm text-gray-500 mb-6 italic">Отопление + встроенный проточный нагрев воды</p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                    <span className="text-sm text-gray-600"><strong>Компактность:</strong> Все в одном корпусе, не нужно место под бойлер.</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                    <span className="text-sm text-gray-600"><strong>Экономия:</strong> Самое дешевое решение на этапе покупки и монтажа.</span>
                  </div>
                  <div className="flex gap-3">
                    <XCircle className="text-red-400 shrink-0" size={18} />
                    <span className="text-sm text-gray-600"><strong>Минусы:</strong> Ограниченный расход ГВС. При открытии второго крана температура падает.</span>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl text-xs font-bold text-[#0b2a4a]">
                  Идеально для: Небольших домов, дач, квартир, семей из 1-2 человек.
                </div>
              </div>
            </div>
          </section>

          {/* 2. Wall vs Floor */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-[#0b2a4a] text-white rounded-lg flex items-center justify-center">
                <Layout size={24} />
              </div>
              <h2 className="text-3xl font-bold text-[#0b2a4a]">2. Настенный или Напольный?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-6">
                  <h4 className="font-bold text-[#0b2a4a] mb-2">Настенный котел</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Компактная «мини-котельная» в сборе. Внутри уже есть насос, бак и автоматика. Можно ставить на кухне. 
                    Обычно до 35 кВт. Срок службы 10-15 лет.
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-6">
                  <h4 className="font-bold text-[#0b2a4a] mb-2">Напольный котел</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Требует отдельного помещения. Часто идет «голым» — насосы и баки покупаются отдельно. 
                    Чугунные теплообменники служат 25-50 лет. Мощность до 100+ кВт.
                  </p>
                </div>
              </div>
              <div className="bg-[#0b2a4a] text-white p-8 rounded-3xl relative overflow-hidden">
                <h4 className="text-xl font-bold mb-6">Важный нюанс:</h4>
                <p className="text-sm text-gray-300 mb-6">
                  Напольные модели могут быть <strong>энергонезависимыми</strong> (с ручным розжигом), что спасает при полном отсутствии электричества. Настенные почти всегда требуют ИБП.
                </p>
                <div className="flex items-center gap-2 text-[#b22222] font-bold text-sm">
                  <Info size={16} />
                  <span>Для Челябинска рекомендуем ИБП в любом случае.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Combustion Chamber */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-[#0b2a4a] text-white rounded-lg flex items-center justify-center">
                <Wind size={24} />
              </div>
              <h2 className="text-3xl font-bold text-[#0b2a4a]">3. Тип тяги: Открытая или Закрытая?</h2>
            </div>

            <div className="bg-gray-50 rounded-[40px] p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-[#0b2a4a] mb-6 flex items-center gap-2">
                    Атмосферный (Открытая)
                  </h3>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex gap-3 italic">Берет воздух из помещения.</li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                      <span>Тише работает, дешевле в покупке.</span>
                    </li>
                    <li className="flex gap-3">
                      <XCircle className="text-red-400 shrink-0" size={18} />
                      <span>Нужна мощная приточная вентиляция и строго вертикальный дымоход.</span>
                    </li>
                  </ul>
                </div>
                <div className="border-l border-gray-200 pl-0 lg:pl-12">
                  <h3 className="text-xl font-bold text-[#0b2a4a] mb-6 flex items-center gap-2">
                    Турбированный (Закрытая)
                  </h3>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex gap-3 italic">Берет воздух с улицы через коаксиальную трубу.</li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                      <span>Безопаснее, не сжигает кислород в доме, не нужен дорогой дымоход.</span>
                    </li>
                    <li className="flex gap-3">
                      <XCircle className="text-red-400 shrink-0" size={18} />
                      <span>Шум вентилятора, выше цена, полная зависимость от электричества.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 p-6 bg-[#0b2a4a] text-white rounded-2xl text-center font-bold">
                Вердикт: Закрытая камера — более предпочтительный и безопасный вариант для современных домов.
              </div>
            </div>
          </section>

          {/* 4. Efficiency */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-[#0b2a4a] text-white rounded-lg flex items-center justify-center">
                <Zap size={24} />
              </div>
              <h2 className="text-3xl font-bold text-[#0b2a4a]">4. Конвекционный или Конденсационный?</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-[#0b2a4a] text-white">
                    <th className="p-6 rounded-tl-2xl">Характеристика</th>
                    <th className="p-6">Конвекционный (Традиционный)</th>
                    <th className="p-6 rounded-tr-2xl">Конденсационный (Эко)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-x border-b border-gray-100">
                  <tr>
                    <td className="p-6 font-bold text-[#0b2a4a] bg-gray-50">КПД</td>
                    <td className="p-6 text-gray-600">90-93%</td>
                    <td className="p-6 text-[#b22222] font-bold">До 98-109% (условный)</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-[#0b2a4a] bg-gray-50">Экономия газа</td>
                    <td className="p-6 text-gray-600">Базовая</td>
                    <td className="p-6 text-green-600 font-bold">Реальная экономия 15-20%</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-[#0b2a4a] bg-gray-50">Цена</td>
                    <td className="p-6 text-green-600 font-bold">Доступная</td>
                    <td className="p-6 text-gray-600">В 1.5-2 раза выше обычных</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-[#0b2a4a] bg-gray-50">Для Челябинска</td>
                    <td className="p-6 text-gray-600">Самый ходовой и понятный вариант.</td>
                    <td className="p-6 text-gray-600">Имеет смысл только в домах с теплыми полами.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Checklist */}
          <section className="bg-gray-900 text-white rounded-[40px] p-10 md:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <Users className="text-[#b22222]" />
                Чек-лист для выбора (Примените на замере)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { q: "Нужна ли горячая вода?", a: "1-2 чел -> Двухконтурный. 3+ чел -> Одноконтурный + бойлер." },
                  { q: "Куда ставить котел?", a: "Есть котельная -> Напольный. Место на кухне -> Настенный." },
                  { q: "Какой дымоход?", a: "Старый кирпичный -> Атмосферник. Новый дом -> Турбированный." },
                  { q: "Какое отопление?", a: "Радиаторы -> Конвекционный. Теплые полы -> Конденсационный." },
                  { q: "Проблемы со светом?", a: "Частые сбои -> Энергонезависимый или мощный ИБП." },
                  { q: "Материал?", a: "Медь (настенные), Чугун (напольные), Нержавейка (универсально)." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-[#b22222] mb-3 flex items-center gap-2">
                      <ArrowRight size={16} />
                      {item.q}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b22222] rounded-full -mr-32 -mt-32 blur-[120px] opacity-20"></div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#0b2a4a] font-bold mb-4">ЧИК — Челябинская Инженерная Компания</p>
          <button 
            onClick={onBack}
            className="text-gray-400 hover:text-[#b22222] transition-colors text-sm font-bold"
          >
            Вернуться на главную страницу
          </button>
        </div>
      </footer>
    </div>
  );
};

export default EquipmentFAQ;
