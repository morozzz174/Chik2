
import React from 'react';
import { 
  ChevronLeft, 
  Flame, 
  Zap, 
  Battery, 
  PlusCircle, 
  Truck, 
  Info,
  CheckCircle2,
  Calculator
} from 'lucide-react';

interface PriceListProps {
  onBack: () => void;
}

const PriceList: React.FC<PriceListProps> = ({ onBack }) => {
  const sections = [
    {
      id: 'gas',
      title: 'Газовое оборудование',
      icon: <Flame className="text-[#b22222]" />,
      items: [
        { name: 'Замена газовой колонки (с пуском и настройкой)', price: '3 000 – 4 000' },
        { name: 'Замена настенного котла без перепайки ПП труб', price: '6 000 – 7 000' },
        { name: 'Замена настенного котла с перепайкой ПП труб', price: '7 000 – 8 000' },
        { name: 'Первичная установка настенного котла (с бурением)', price: '10 000 – 11 000' },
        { name: 'Замена напольного котла без сварки', price: '7 000 – 8 000' },
        { name: 'Замена напольного котла со сваркой (с материалом)', price: '10 000 – 12 000' },
        { name: 'Замена напольного котла с перепайкой ПП труб', price: '7 000 – 8 000' },
        { name: 'Первичный пуск котла (настройка клапана)', price: '2 500' },
        { name: 'Договор сервисного обслуживания (в год)', price: '3 000' },
      ]
    },
    {
      id: 'electric',
      title: 'Электрические котлы',
      icon: <Zap className="text-yellow-500" />,
      items: [
        { name: 'Установка электрокотла до 10 кВт', price: '8 000 – 10 000' },
        { name: 'Установка электрокотла 10–20 кВт', price: '10 000 – 12 000' },
        { name: 'Установка электрокотла 20–30 кВт', price: '12 000 – 15 000' },
        { name: 'Монтаж в комплекте с баком, насосом, группой без-ти', price: '+ 3 000' },
        { name: 'Подключение котла к существующей системе', price: '4 000 – 6 000' },
      ]
    },
    {
      id: 'ups',
      title: 'Системы ИБП и резерва',
      icon: <Battery className="text-emerald-500" />,
      items: [
        { name: 'Монтаж ИБП для котла (до 1 кВт) с подключением', price: '3 000 – 4 000' },
        { name: 'Монтаж ИБП для котла (1–3 кВт) с подключением', price: '4 000 – 5 000' },
        { name: 'Подключение внешних АКБ (за шт.)', price: '1 500 – 2 000' },
        { name: 'Монтаж АВР для дома / котла', price: '5 000 – 7 000' },
        { name: 'Прокладка кабеля питания (до 10 м)', price: 'от 1 500' },
        { name: 'Настройка параметров ИБП и проверка автономии', price: '1 500' },
      ]
    },
    {
      id: 'additional',
      title: 'Дополнительные работы',
      icon: <PlusCircle className="text-blue-500" />,
      items: [
        { name: 'Монтаж бойлера косвенного нагрева', price: '5 000 – 6 000' },
        { name: 'Монтаж радиатора отопления (впайка, краны)', price: '2 500 – 3 500' },
        { name: 'Монтаж теплого пола с подложкой (за м²)', price: '500 – 600' },
        { name: 'Монтаж гидрострелки (настройка температур)', price: '4 000 – 5 000' },
        { name: 'Монтаж насоса системы отопления на байпасе', price: '2 500 – 3 500' },
        { name: 'Монтаж расширительного бака (до 50 л)', price: '2 000 – 3 000' },
        { name: 'Монтаж фильтра грубой очистки / магнитного', price: '1 000 – 1 500' },
        { name: 'Опрессовка системы отопления (дом/этаж)', price: 'от 3 000' },
        { name: 'Промывка теплообменника котла / системы', price: 'от 4 000' },
      ]
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
            <span>Вернуться назад</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-[#0b2a4a] text-white px-2 py-1 rounded font-bold text-sm">ЧИК</div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Прайс-лист 2025</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#0b2a4a]/5 text-[#0b2a4a] px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Calculator size={18} />
            Честные цены на монтаж в Челябинске
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0b2a4a] mb-6">
            Стоимость наших <span className="text-[#b22222]">услуг</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Все цены указаны за работу. Стоимость материалов рассчитывается индивидуально после выезда инженера на объект.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gray-50 p-6 border-b border-gray-100 flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-[#0b2a4a]">{section.title}</h2>
              </div>
              <div className="p-0">
                <table className="w-full text-sm">
                  <tbody>
                    {section.items.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-gray-700">{item.name}</td>
                        <td className="p-4 text-right font-bold text-[#0b2a4a] whitespace-nowrap">
                          {item.price} <span className="text-[10px] font-normal text-gray-400">₽</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Cost */}
        <div className="mt-16 bg-[#0b2a4a] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/10 rounded-2xl">
                <Truck size={40} className="text-[#b22222]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Выезд за пределы Челябинска</h3>
                <p className="text-gray-400">При расстоянии более 1 км от черты города</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-4xl font-black text-[#b22222]">10 <span className="text-xl">руб./км</span></div>
              <p className="text-sm opacity-60">в обе стороны</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        </div>

        {/* Notes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h4 className="text-lg font-bold text-[#0b2a4a] mb-6 flex items-center gap-2">
              <Info size={20} className="text-[#b22222]" />
              Важные примечания
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                <span>Цены носят ознакомительный характер и уточняются после осмотра.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                <span>Газовые работы только при наличии проекта и допусков.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                <span>Гарантия на все выполненные работы — 1 год.</span>
              </li>
            </ul>
          </div>
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h4 className="text-lg font-bold text-red-900 mb-6 flex items-center gap-2">
              <PlusCircle size={20} />
              Выгодные предложения
            </h4>
            <p className="text-sm text-red-800 mb-6">
              Мы предоставляем дополнительные скидки при комплексном заказе оборудования и монтажа:
            </p>
            <div className="bg-white/50 p-4 rounded-xl border border-red-200 text-sm font-bold text-red-900">
              Монтаж котла + ИБП + Радиаторы = Спеццена
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#0b2a4a] font-bold mb-4">ЧИК — Надёжность и тепло в вашем доме!</p>
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

export default PriceList;
