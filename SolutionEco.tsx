
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
  TrendingDown,
  Timer
} from 'lucide-react';

interface SolutionEcoProps {
  onBack: () => void;
}

const SolutionEco: React.FC<SolutionEcoProps> = ({ onBack }) => {
  const boilers = [
    {
      model: 'Navien DELUXE 13K',
      type: 'Двухконтурный',
      price: '60 389',
      efficiency: '91.7%',
      heatExchanger: 'Нерж. сталь',
      pros: 'Вынослив к плохому качеству воды и перепадам газа. Встроенный стабилизатор. Легко чистить.',
      cons: 'Шумноват (турбина), специфичный звук работы.',
      tag: 'Надежность'
    },
    {
      model: 'Protherm Ягуар 11 JTV',
      type: 'Двухконтурный',
      price: '52 866',
      efficiency: '88.2%',
      heatExchanger: 'Медь',
      pros: 'Самая низкая цена в рейтинге. Простая линейка, легкий ремонт. Словацкая сборка.',
      cons: 'Низкий КПД, «капризен» к качеству воды (медный теплообменник ГВС быстро зарастает).',
      tag: 'Эконом'
    },
    {
      model: 'BAXI ECO Nova 14 F',
      type: 'Двухконтурный',
      price: '63 350',
      efficiency: '93.0%',
      heatExchanger: 'Медь',
      pros: 'Высокий КПД, тихая работа. Адаптирован к российским условиям (давление газа).',
      cons: 'Медный теплообменник (требует хорошей химии теплоносителя).',
      tag: 'Эффективность'
    },
    {
      model: 'Ariston CARES X 15 FF',
      type: 'Двухконтурный',
      price: '61 380',
      efficiency: '92.9%',
      heatExchanger: 'Медь',
      pros: 'Стильный дизайн, большая площадь ГВС для дома 100 м². Эргономичный.',
      cons: 'Чувствителен к скачкам напряжения (требует качественного ИБП).',
      tag: 'Дизайн'
    },
    {
      model: 'Bosch Gaz 6000 W',
      type: 'Двухконтурный',
      price: '66 451',
      efficiency: '90.0%',
      heatExchanger: 'Медь',
      pros: 'Эталонная немецкая надежность и безопасность. Качественная автоматика.',
      cons: 'Цена выше среднего. Сложнее найти запчасти в регионе.',
      tag: 'Премиум'
    },
    {
      model: 'Buderus Logamax U072',
      type: 'Двухконтурный',
      price: '71 081',
      efficiency: '92.0%',
      heatExchanger: 'Медь',
      pros: 'Превосходная теплоизоляция, низкий расход газа. Надежная автоматика.',
      cons: 'Высокая стоимость. Дорогой оригинальный сервис.',
      tag: 'Имидж'
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
            <div className="bg-[#b22222] text-white px-2 py-1 rounded font-bold text-sm">ЧИК</div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Решение №1: Доступный старт</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-[#0b2a4a] text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#b22222] text-white text-xs font-bold px-3 py-1 rounded uppercase mb-6">
              Под ключ для ИЖС
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Решение №1 <br />
              <span className="text-[#b22222]">«Доступный старт»</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-[#b22222] pl-6 mb-8">
              Максимально надежное и бесперебойное отопление для домов до 100 м². 
              Объединяем 10 лучших котлов с профессиональной защитой питания.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
           <Flame size={400} className="translate-x-1/2 -translate-y-1/4" />
        </div>
      </header>

      {/* Why UPS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0b2a4a] mb-8">Почему важно добавить резервное питание?</h2>
              <p className="text-gray-600 mb-8">
                Все современные котлы — <strong>энергозависимые</strong>. В Челябинской области перепады и отключения сети — не редкость. 
                Мы комплектуем каждый котел <strong>On-Line ИБП</strong> (двойного преобразования) с внешними АКБ.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-[#b22222]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b2a4a]">Защита платы управления</h4>
                    <p className="text-sm text-gray-500">Нивелирует любые скачки напряжения, предотвращая выгорание электроники.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Zap className="text-[#b22222]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b2a4a]">Бесперебойная циркуляция</h4>
                    <p className="text-sm text-gray-500">Система не замерзнет даже при длительном отключении электричества.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Settings className="text-[#b22222]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b2a4a]">Сохранение настроек</h4>
                    <p className="text-sm text-gray-500">Автоматика продолжит работу в заданном режиме без сбоев.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#0b2a4a] p-10 rounded-3xl text-white relative overflow-hidden">
              <Battery size={120} className="absolute -bottom-10 -right-10 opacity-10" />
              <h3 className="text-2xl font-bold mb-6">Наше преимущество</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#b22222] shrink-0" />
                  <span><strong>Единая гарантия:</strong> Мы отвечаем за связку «Котел + ИБП». Никаких споров между производителями.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#b22222] shrink-0" />
                  <span><strong>Шеф-монтаж:</strong> Выезд инженера для первичной настройки и обучения вашей бригады.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#b22222] shrink-0" />
                  <span><strong>Склад запчастей:</strong> Собственные запасы по брендам Navien, BAXI, Bosch в Челябинске.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0b2a4a] mb-4">Сравнительный анализ оборудования</h2>
            <p className="text-gray-500">Мощность 11–15 кВт. Отбор по цене, надежности и простоте сервиса.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0b2a4a] text-white">
                  <th className="p-4 rounded-tl-xl">Модель</th>
                  <th className="p-4">Цена (руб)</th>
                  <th className="p-4">КПД / Теплообменник</th>
                  <th className="p-4">Плюсы для РФ</th>
                  <th className="p-4 rounded-tr-xl">Минусы и нюансы</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {boilers.map((boiler, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-[#0b2a4a]">{boiler.model}</div>
                      <div className="text-[10px] text-gray-400 uppercase font-bold">{boiler.tag}</div>
                    </td>
                    <td className="p-4 font-bold text-[#b22222]">{boiler.price}</td>
                    <td className="p-4">
                      <div>{boiler.efficiency}</div>
                      <div className="text-xs text-gray-500">{boiler.heatExchanger}</div>
                    </td>
                    <td className="p-4 text-xs text-gray-600 leading-relaxed">{boiler.pros}</td>
                    <td className="p-4 text-xs text-gray-500 leading-relaxed italic">{boiler.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Risks & Recommendations */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                <AlertTriangle className="text-[#b22222]" />
                Риски и «подводные камни»
              </h2>
              <div className="space-y-8">
                <div className="border-l-2 border-[#b22222] pl-6">
                  <h4 className="font-bold mb-2">Нестабильное напряжение</h4>
                  <p className="text-sm text-gray-400">Без ИБП котел может сгореть в первый же год. Это самая частая причина отказа в гарантии.</p>
                </div>
                <div className="border-l-2 border-[#b22222] pl-6">
                  <h4 className="font-bold mb-2">Качество газа в области</h4>
                  <p className="text-sm text-gray-400">Итальянские горелки (Baxi, Ariston) требуют более частой чистки при нестабильном давлении.</p>
                </div>
                <div className="border-l-2 border-[#b22222] pl-6">
                  <h4 className="font-bold mb-2">Жесткая вода</h4>
                  <p className="text-sm text-gray-400">Для Челябинска <strong>нержавейка (Navien)</strong> предпочтительнее меди. Медь быстро зарастает без фильтрации.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-8">Итоговые рекомендации</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Макс. экономия</div>
                    <div className="font-bold">Protherm Ягуар 11 JTV</div>
                  </div>
                  <TrendingDown className="text-green-500" />
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Надежность и всеядность</div>
                    <div className="font-bold">Navien DELUXE 13K</div>
                  </div>
                  <ShieldCheck className="text-blue-500" />
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Тишина и эффективность</div>
                    <div className="font-bold">BAXI ECO Nova 14F</div>
                  </div>
                  <Timer className="text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0b2a4a] mb-4">Ценовое предложение «Под ключ»</h2>
            <p className="text-gray-500">Ориентировочная стоимость оборудования и работ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all group">
              <div className="text-sm font-bold text-gray-400 uppercase mb-4">Базовая</div>
              <h3 className="text-2xl font-bold text-[#0b2a4a] mb-6">Бюджет</h3>
              <ul className="text-sm text-gray-600 space-y-3 mb-8">
                <li>• Котел: Protherm / Navien ATMO</li>
                <li>• ИБП + АКБ (4-6ч работы)</li>
                <li>• Фильтры, обвязка, монтаж</li>
              </ul>
              <div className="text-3xl font-black text-[#b22222] mb-2">от 85 000 ₽</div>
              <div className="text-xs text-gray-400">Полный комплект с установкой</div>
            </div>

            {/* Tier 2 */}
            <div className="bg-[#0b2a4a] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden transform scale-105">
              <div className="absolute top-4 right-4 bg-[#b22222] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Хит продаж</div>
              <div className="text-sm font-bold text-gray-400 uppercase mb-4">Оптимальная</div>
              <h3 className="text-2xl font-bold mb-6">Стандарт</h3>
              <ul className="text-sm text-gray-300 space-y-3 mb-8">
                <li>• Котел: Navien DELUXE / BAXI Nova</li>
                <li>• ИБП + АКБ (8-10ч работы)</li>
                <li>• Качественный монтаж + ПНР</li>
              </ul>
              <div className="text-3xl font-black text-[#b22222] mb-2">от 105 000 ₽</div>
              <div className="text-xs text-gray-400">Рекомендуемый выбор</div>
            </div>

            {/* Tier 3 */}
            <div className="border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all">
              <div className="text-sm font-bold text-gray-400 uppercase mb-4">Премиальная</div>
              <h3 className="text-2xl font-bold text-[#0b2a4a] mb-6">Надежность</h3>
              <ul className="text-sm text-gray-600 space-y-3 mb-8">
                <li>• Котел: Bosch / Buderus</li>
                <li>• ИБП On-Line + АКБ (гелевые)</li>
                <li>• Полная фильтрация и сервис</li>
              </ul>
              <div className="text-3xl font-black text-[#b22222] mb-2">от 130 000 ₽</div>
              <div className="text-xs text-gray-400">Максимальный ресурс</div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-8">Готовы обсудить детали и подготовить индивидуальный расчет под любой объект.</p>
            <button className="bg-[#b22222] text-white px-12 py-4 rounded-sm font-bold text-lg hover:bg-red-800 transition-colors shadow-xl">
              Запросить расчет
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
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

export default SolutionEco;
