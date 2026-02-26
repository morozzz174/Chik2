
import React from 'react';
import { 
  ChevronLeft, 
  DraftingCompass, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  FileText, 
  Calculator, 
  ArrowRight,
  Info,
  Building2,
  MapPin,
  ExternalLink
} from 'lucide-react';

interface DesignServiceProps {
  onBack: () => void;
}

const DesignService: React.FC<DesignServiceProps> = ({ onBack }) => {
  const stages = [
    { title: "Анализ объекта", desc: "Выезд специалиста, замеры, оценка материалов стен и теплоизоляции.", why: "Собрать точные данные для корректных расчетов." },
    { title: "Расчет теплопотерь", desc: "Теплотехнический расчет для каждой комнаты с учетом климата.", why: "Определить необходимую мощность оборудования." },
    { title: "Выбор оборудования", desc: "Подбор типа котла, схемы (радиаторы, теплый пол) и гидравлики.", why: "Система не будет работать на износ." },
    { title: "Разработка схемы", desc: "Детальная схема разводки труб, мест установки приборов.", why: "Сбалансированность и равномерный прогрев." },
    { title: "Документация", desc: "Чертежи, спецификация материалов, пояснительная записка и смета.", why: "Четкий план для монтажников." },
  ];

  const partners = [
    { 
      name: 'ООО "Integra" (ГК Интегра)', 
      sphere: "Проектирование конструкций и инженерных систем для загородных домов.",
      why: "Гибкий подход, высокое качество и доведение проекта до полного завершения."
    },
    { 
      name: '"Точка Тепла"', 
      sphere: "Комплексное проектирование и монтаж систем отопления, ГВС и электрики.",
      why: "Лидеры рынка с рейтингом 5.0. Продуманные решения (отопление без радиаторов).",
      link: "TochkaTepla.ru"
    },
    { 
      name: 'ООО "ЧелТЗ"', 
      sphere: "Промышленные и бытовые трубопроводные системы, отопление и канализация.",
      why: "Стабильная компания, глубокое знание специфики материалов."
    },
    { 
      name: 'ООО "ИНТЕРПРОЕКТ"', 
      sphere: "Проектирование инженерных систем и услуги в области энергоаудита.",
      why: "Профессионалы в создании энергоэффективных домов, снижающих расходы."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-[#0b2a4a] font-bold hover:text-[#b22222] transition-colors">
            <ChevronLeft size={20} />
            <span>Назад</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-[#0b2a4a] text-white px-2 py-1 rounded font-bold text-sm">ЧИК</div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Проектирование</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-[#0b2a4a] text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <DraftingCompass size={16} />
              Фундамент комфорта
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Проектирование <br />
              <span className="text-[#b22222]">систем отопления</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-8 mb-12 max-w-3xl leading-relaxed">
              Первый и самый важный шаг к созданию уютной атмосферы. От проекта зависят ваши счета за энергию и срок службы оборудования.
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm max-w-2xl">
               <p className="text-sm text-gray-400 italic">
                 "Наша компания не выполняет проектирование самостоятельно, но мы сотрудничаем с лучшими проектными бюро Челябинска, чтобы гарантировать вам надежный результат."
               </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
           <DraftingCompass size={600} className="translate-x-1/4 -translate-y-1/4" />
        </div>
      </header>

      {/* Stages */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0b2a4a] mb-4">Что входит в проект?</h2>
            <p className="text-gray-500">Строгий инженерный процесс из 5 обязательных этапов</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {stages.map((stage, idx) => (
              <div key={idx} className="relative p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="text-[#b22222] font-black text-5xl opacity-10 mb-6 group-hover:opacity-20 transition-opacity">0{idx + 1}</div>
                <h4 className="text-lg font-bold text-[#0b2a4a] mb-4">{stage.title}</h4>
                <p className="text-xs text-gray-500 mb-6 leading-relaxed">{stage.desc}</p>
                <div className="pt-4 border-t border-gray-200">
                   <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">Зачем это нужно:</div>
                   <p className="text-[11px] text-[#b22222] font-medium">{stage.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculation Method */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 md:p-16 bg-[#0b2a4a] text-white">
              <h3 className="text-3xl font-bold mb-8">Как мы считаем мощность?</h3>
              <p className="text-gray-400 mb-12">Главная ошибка — подбирать котел и трубы «на глаз». Профессиональный проект базируется на точных цифрах.</p>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#b22222] rounded-lg flex items-center justify-center shrink-0">
                    <Calculator size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Точный расчет</h5>
                    <p className="text-xs text-gray-400">Формула Q = S × ΔT ÷ R. Учитывает сопротивление стен и разницу температур.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-[#b22222]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Запас надежности</h5>
                    <p className="text-xs text-gray-400">Закладываем 10-15% запаса на экстремальные морозы Челябинской области.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-12 md:p-16">
              <h4 className="text-xl font-bold text-[#0b2a4a] mb-6">Нормативная база</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Проекты разрабатываются в строгом соответствии с <strong>СП 60.13330.2020</strong> (СНиП 41-01-2003). 
                Мы используем актуальные редакции 2024 года, учитывающие современные требования к микроклимату и пожарной безопасности.
              </p>
              <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                <div className="flex items-center gap-3 text-[#b22222] font-bold mb-2">
                  <Info size={18} />
                  <span>Важно</span>
                </div>
                <p className="text-xs text-gray-700">
                  Ошибки в проекте невозможно исправить ремонтом. Неравномерный прогрев и конденсат — результат экономии на расчетах.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0b2a4a] mb-4">Наши партнеры</h2>
            <p className="text-gray-500">Проверенные проектные бюро Челябинска</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, idx) => (
              <div key={idx} className="p-10 border border-gray-100 rounded-[32px] hover:border-[#b22222] transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-xl font-bold text-[#0b2a4a] group-hover:text-[#b22222] transition-colors">{partner.name}</h4>
                  {partner.link && (
                    <a href={`https://${partner.link}`} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#b22222]">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Building2 size={16} className="text-gray-400 shrink-0 mt-1" />
                    <p className="text-sm text-gray-600">{partner.sphere}</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-1" />
                    <p className="text-sm text-gray-500 italic">{partner.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-gray-500 mb-8">Мы поможем подобрать оптимальную команду проектировщиков под ваш бюджет и задачи.</p>
            <button className="bg-[#b22222] text-white px-12 py-5 rounded-sm font-bold text-lg hover:bg-red-800 transition-all shadow-xl inline-flex items-center gap-3">
              Получить консультацию
              <ArrowRight size={20} />
            </button>
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

export default DesignService;
