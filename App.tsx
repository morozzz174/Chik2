
import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  FileText, 
  Settings, 
  Facebook, 
  Instagram, 
  MessageCircle,
  ClipboardCheck,
  Calculator,
  DraftingCompass,
  HelpCircle
} from 'lucide-react';
import { 
  TURNKEY_SOLUTIONS, 
  NO_GAS_SOLUTIONS,
  TRUST_ITEMS, 
  EXPERTISE_SECTIONS, 
  COLORS 
} from './constants';
import GasRequirements from './GasRequirements';
import PriceList from './PriceList';
import SolutionEco from './SolutionEco';
import SolutionOptimal from './SolutionOptimal';
import SolutionPremium from './SolutionPremium';
import SolutionCogen from './SolutionCogen';
import SolutionIndustrial from './SolutionIndustrial';
import SolutionNoGasEco from './SolutionNoGasEco';
import SolutionNoGasOptimal from './SolutionNoGasOptimal';
import SolutionNoGasPremium from './SolutionNoGasPremium';
import SolutionNoGasHiTech from './SolutionNoGasHiTech';
import SolutionNoGasCommercial from './SolutionNoGasCommercial';
import Law410 from './Law410';
import Law798 from './Law798';
import Law624 from './Law624';
import Law384 from './Law384';
import Certificates from './Certificates';
import DesignService from './DesignService';
import EquipmentFAQ from './EquipmentFAQ';

const Header = () => (
  <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
    <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <div className="flex items-center gap-3">
          <div className="bg-[#0b2a4a] text-white p-2 rounded font-bold text-xl tracking-tighter">ЧИК</div>
          <div className="text-[10px] leading-tight font-roboto uppercase tracking-widest text-gray-500">
            <div>Челябинская Инженерная Компания</div>
            <div>Chelyabinsk Engineering Company</div>
            <div>车里雅宾斯克工程公司</div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <a href="tel:+73512309996" className="flex items-center gap-2 text-[#0b2a4a] font-bold text-lg hover:text-[#b22222] transition-colors">
          <Phone size={20} />
          <span>+7 (351) 230-99-96</span>
        </a>
        <button className="hidden lg:block bg-[#b22222] text-white px-6 py-2 rounded-sm font-semibold hover:bg-red-800 transition-all duration-300">
          Заказать расчет
        </button>
      </div>
    </div>
  </header>
);

const Hero = ({ onOpenGasReq, onOpenPriceList, onOpenCertificates, onOpenDesign }: { onOpenGasReq: () => void, onOpenPriceList: () => void, onOpenCertificates: () => void, onOpenDesign: () => void }) => (
  <section className="relative h-[70vh] flex items-center bg-gray-900 overflow-hidden">
    <img 
      src="https://picsum.photos/seed/engineer/1920/1080" 
      alt="Engineering" 
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    />
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Энергия независимости. <br />
          <span className="text-[#b22222]">Тепло вашего дома.</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 border-l-4 border-[#b22222] pl-4">
          Инженерные системы любой сложности в Челябинске. <br />
          Работаем строго по ГОСТ и ПП РФ №798. Опыт более 15 лет.
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => document.getElementById('turnkey')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="bg-[#b22222] text-white px-8 py-4 rounded-sm font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            Смотреть решения
          </button>
          <button 
            onClick={onOpenCertificates}
            className="bg-white text-[#0b2a4a] px-8 py-4 rounded-sm font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Наши сертификаты
          </button>
          <button 
            onClick={onOpenGasReq}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-[#0b2a4a] transition-all flex items-center gap-2"
          >
            <ClipboardCheck size={24} />
            Требования для ГАЗА
          </button>
          <button 
            onClick={onOpenPriceList}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-[#0b2a4a] transition-all flex items-center gap-2"
          >
            <Calculator size={24} />
            Прайс услуги
          </button>
          <button 
            onClick={() => document.getElementById('no-gas')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="bg-white text-[#0b2a4a] px-8 py-4 rounded-sm font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Смотреть решения без ГАЗА
          </button>
          <button 
            onClick={onOpenDesign}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-[#0b2a4a] transition-all flex items-center gap-2"
          >
            <DraftingCompass size={24} />
            Проектирование
          </button>
        </div>
      </div>
    </div>
  </section>
);

const StickyNav = ({ onOpenGasReq, onOpenDesign }: { onOpenGasReq: () => void, onOpenDesign: () => void }) => (
  <nav className="sticky top-[81px] z-40 bg-[#0b2a4a] text-white py-4 shadow-xl hidden md:block border-b border-white/10">
    <div className="container mx-auto px-4 flex justify-center gap-12">
      <button 
        onClick={() => document.getElementById('turnkey')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
        className="text-xs font-black uppercase tracking-widest hover:text-[#b22222] transition-colors flex items-center gap-2 group"
      >
        <div className="w-1.5 h-1.5 bg-[#b22222] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        Решения ИЖС
      </button>
      <button 
        onClick={() => document.getElementById('no-gas')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
        className="text-xs font-black uppercase tracking-widest hover:text-[#b22222] transition-colors flex items-center gap-2 group"
      >
        <div className="w-1.5 h-1.5 bg-[#b22222] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        Объекты без ГАЗА
      </button>
      <button 
        onClick={() => document.getElementById('trust')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
        className="text-xs font-black uppercase tracking-widest hover:text-[#b22222] transition-colors flex items-center gap-2 group"
      >
        <div className="w-1.5 h-1.5 bg-[#b22222] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        Почему мы
      </button>
      <button 
        onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
        className="text-xs font-black uppercase tracking-widest hover:text-[#b22222] transition-colors flex items-center gap-2 group"
      >
        <div className="w-1.5 h-1.5 bg-[#b22222] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        Компетенции
      </button>
      <button 
        onClick={onOpenGasReq}
        className="text-xs font-black uppercase tracking-widest hover:text-[#b22222] transition-colors flex items-center gap-2 group"
      >
        <div className="w-1.5 h-1.5 bg-[#b22222] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        Газовый регламент
      </button>
      <button 
        onClick={onOpenDesign}
        className="text-xs font-black uppercase tracking-widest hover:text-[#b22222] transition-colors flex items-center gap-2 group"
      >
        <div className="w-1.5 h-1.5 bg-[#b22222] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        Проектирование
      </button>
    </div>
  </nav>
);

const TurnkeySection = ({ onOpenSolution }: { onOpenSolution: (id: string) => void }) => (
  <section id="turnkey" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2a4a] mb-4">5 Решений "Под Ключ" для ИЖС</h2>
        <div className="w-24 h-1.5 bg-[#b22222] mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {TURNKEY_SOLUTIONS.map((solution) => (
          <div 
            key={solution.id}
            className="group relative bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col h-full"
            onClick={() => onOpenSolution(solution.id)}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={solution.image} 
                alt={solution.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#b22222] text-white text-xs font-bold px-2 py-1 rounded uppercase">
                {solution.category}
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-[#0b2a4a] mb-2">{solution.title}</h3>
              <p className="text-sm font-semibold text-gray-500 mb-4">{solution.objectType}</p>
              
              <div className="mb-4 text-xs">
                <p className="font-bold text-[#b22222]">Мощность:</p>
                <p className="text-gray-700">{solution.power}</p>
              </div>

              <ul className="text-xs space-y-2 mb-6 flex-grow">
                {solution.components.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <ChevronRight size={14} className="text-[#b22222] shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-50 text-[10px] italic text-gray-400">
                {solution.justification}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const NoGasSection = ({ onOpenSolution }: { onOpenSolution: (id: string) => void }) => (
  <section id="no-gas" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2a4a] mb-4">5 Решений "Под Ключ" для объектов без Газа</h2>
        <div className="w-24 h-1.5 bg-[#b22222] mx-auto"></div>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Автономные системы отопления для Челябинской области: от малых дач до крупных промышленных цехов.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
        {NO_GAS_SOLUTIONS.map((solution) => (
          <div 
            key={solution.id}
            className="group relative bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col h-full"
            onClick={() => onOpenSolution(solution.id)}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={solution.image} 
                alt={solution.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#b22222] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                {solution.category}
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-[#0b2a4a] mb-2 leading-tight">{solution.title}</h3>
              <p className="text-xs font-semibold text-gray-500 mb-4">{solution.objectType}</p>
              
              <div className="mb-4 text-xs">
                <p className="font-bold text-[#b22222]">Мощность:</p>
                <p className="text-gray-700">{solution.power}</p>
              </div>

              <ul className="text-xs space-y-2 mb-6 flex-grow">
                {solution.components.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <ChevronRight size={14} className="text-[#b22222] shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-50 text-[10px] italic text-gray-400">
                {solution.justification}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 overflow-x-auto">
        <h3 className="text-2xl font-bold text-[#0b2a4a] mb-8 text-center">Сравнительная таблица по сегментам</h3>
        <table className="w-full text-sm text-left">
          <thead className="bg-[#0b2a4a] text-white">
            <tr>
              <th className="p-4 rounded-tl-lg">Сегмент</th>
              <th className="p-4">Лучшее по цене</th>
              <th className="p-4">Лучшее по экономии</th>
              <th className="p-4 rounded-tr-lg">Лучшее по автономии</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50">
              <td className="p-4 font-bold">50-100 м²</td>
              <td className="p-4">Электрокотел ZOTA (35 т.р.)</td>
              <td className="p-4">Теплонасос Энергия (320 т.р.)</td>
              <td className="p-4">Пеллетный ZOTA-15S (210 т.р.)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 font-bold">100-200 м²</td>
              <td className="p-4">Эван NEXT (40 т.р.)</td>
              <td className="p-4">Mitsubishi Zubadan (890 т.р.)</td>
              <td className="p-4">ZOTA Pellet-25A (320 т.р.)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 font-bold">200-400 м²</td>
              <td className="p-4">Эван каскад + буфер</td>
              <td className="p-4">Геотермальный (1.2 млн)</td>
              <td className="p-4">Каскад ZOTA (840 т.р.)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 font-bold">400-600 м²</td>
              <td className="p-4">Электрокотел пром (350 т.р.)</td>
              <td className="p-4">Геотермальное поле (3-5 млн)</td>
              <td className="p-4">Микро-ТЭЦ (2.5-4 млн)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 font-bold">600+ м²</td>
              <td className="p-4">Электродный Галан (250 т.р.)</td>
              <td className="p-4">Промтеплонасос (2-4 млн)</td>
              <td className="p-4">Пеллетная LAVORO (690 т.р.)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#0b2a4a] text-white p-6 rounded-lg">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Settings size={20} className="text-[#b22222]" />
            Электрокотел
          </h4>
          <ul className="text-xs space-y-2 opacity-80">
            <li>• Бюджет до 150 тыс. руб.</li>
            <li>• Дачный режим использования</li>
            <li>• Нет места для топлива</li>
          </ul>
        </div>
        <div className="bg-[#0b2a4a] text-white p-6 rounded-lg">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Zap size={20} className="text-[#b22222]" />
            Тепловой насос
          </h4>
          <ul className="text-xs space-y-2 opacity-80">
            <li>• Постоянное проживание</li>
            <li>• Инвестиции 400-900 тыс.</li>
            <li>• Важен статус и технологии</li>
          </ul>
        </div>
        <div className="bg-[#0b2a4a] text-white p-6 rounded-lg">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <FileText size={20} className="text-[#b22222]" />
            Пеллетный котел
          </h4>
          <ul className="text-xs space-y-2 opacity-80">
            <li>• Полная автономия от сетей</li>
            <li>• Есть место для хранения</li>
            <li>• Доступ к дешевым пеллетам</li>
          </ul>
        </div>
        <div className="bg-[#b22222] text-white p-6 rounded-lg">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <ShieldCheck size={20} />
            Пром. объекты
          </h4>
          <ul className="text-xs space-y-2 opacity-90">
            <li>• Отходы дерева → Пеллеты</li>
            <li>• Вентиляция → Утилизация</li>
            <li>• Простота → Электродные</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const TrustBlock = () => (
  <section id="trust" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2a4a] mb-4">Почему нам доверяют?</h2>
        <p className="text-gray-600">Научный подход и соблюдение законодательства РФ</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {TRUST_ITEMS.map((item) => (
          <div key={item.id} className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#b22222]">
            <div className="mb-6 text-[#0b2a4a]">
              {item.id === '1' && <Zap size={40} />}
              {item.id === '2' && <FileText size={40} />}
              {item.id === '3' && <ShieldCheck size={40} />}
              {item.id === '4' && <Settings size={40} />}
            </div>
            <h4 className="text-lg font-bold text-[#0b2a4a] mb-3">{item.title}</h4>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              "{item.quote}"
            </p>
            <p className="text-[10px] font-bold text-[#b22222] uppercase tracking-wider">
              {item.source}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ExpertiseCatalog = () => (
  <section id="expertise" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2a4a] mb-4 uppercase tracking-tight">10 Направлений экспертизы</h2>
        <div className="w-32 h-1.5 bg-[#b22222] mx-auto"></div>
      </div>

      <div className="space-y-24">
        {EXPERTISE_SECTIONS.map((section, idx) => (
          <div key={section.id} className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className={`${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
              <div className="sticky top-28">
                <span className="text-6xl font-black text-gray-100 block mb-4">0{idx + 1}</span>
                <h3 className="text-2xl font-bold text-[#0b2a4a] mb-6">{section.title}</h3>
                
                <div className="space-y-4 mb-8">
                  {section.params.map((p, i) => (
                    <div key={i} className="border-b border-gray-100 pb-2">
                      <p className="text-xs font-bold text-[#b22222] uppercase">{p.label}</p>
                      <p className="text-sm text-gray-700">{p.value}</p>
                    </div>
                  ))}
                </div>

                {section.brands && (
                  <div className="flex flex-wrap gap-2">
                    {section.brands.map(brand => (
                      <span key={brand} className="bg-gray-100 px-3 py-1 rounded text-[10px] font-bold text-gray-500 uppercase">
                        {brand}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {[...Array(10)].map((_, i) => (
                  <a 
                    key={i}
                    href={`https://picsum.photos/seed/${section.id}-${i}/1200/800`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square bg-gray-200 overflow-hidden relative group"
                  >
                    <img 
                      src={`https://picsum.photos/seed/${section.id}-${i}/400/400`}
                      alt={`Gallery ${i}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ChevronRight className="text-white" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = ({ onOpenDesign }: { onOpenDesign: () => void }) => (
  <footer className="bg-[#0b2a4a] text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white text-[#0b2a4a] p-2 rounded font-bold text-xl">ЧИК</div>
            <div className="text-[10px] font-roboto leading-tight text-gray-300">
              ЧЕЛЯБИНСКАЯ ИНЖЕНЕРНАЯ КОМПАНИЯ
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Ваш надежный партнер в создании климатических систем и автономной энергетики. Более 15 лет на рынке Челябинской области.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#b22222] hover:border-[#b22222] transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#b22222] hover:border-[#b22222] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#b22222] hover:border-[#b22222] transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Разделы</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#turnkey" className="hover:text-white transition-colors">Готовые решения</a></li>
            <li><a href="#expertise" className="hover:text-white transition-colors">Наши компетенции</a></li>
            <li><button onClick={onOpenDesign} className="hover:text-white transition-colors text-left">Проектирование</button></li>
            <li><a href="#" className="hover:text-white transition-colors">Сервис 24/7</a></li>
            <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Контакты</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#b22222] shrink-0" />
              <span>г. Челябинск, ул. Энтузиастов, д. 12, оф. 405</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#b22222] shrink-0" />
              <span>+7 (351) 230-99-96</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#b22222] shrink-0" />
              <span>info@chik74.ru</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Нормативная база</h4>
          <p className="text-xs text-gray-500 mb-4 italic">
            Мы работаем в строгом соответствии с Правилами пользования газом (ПП РФ №798 от 30.05.2025). 
          </p>
          <button className="w-full bg-[#b22222] py-3 rounded text-sm font-bold hover:bg-red-800 transition-colors">
            Получить консультацию
          </button>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
        © 2025 ЧИК - Челябинская Инженерная Компания. Все права защищены. Разработка систем "Под Ключ".
      </div>
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = useState<'home' | 'gas-requirements' | 'price-list' | 'solution-eco' | 'solution-optimal' | 'solution-premium' | 'solution-cogen' | 'solution-industrial' | 'solution-ng-eco' | 'solution-ng-opt' | 'solution-ng-prm' | 'solution-ng-hitech' | 'solution-ng-comm' | 'law-410' | 'law-798' | 'law-624' | 'law-384' | 'certificates' | 'design' | 'equipment-faq'>('home');

  if (view === 'gas-requirements') {
    return <GasRequirements onBack={() => setView('home')} onOpenLaw={(id) => setView(`law-${id}` as any)} />;
  }

  if (view === 'price-list') {
    return <PriceList onBack={() => setView('home')} />;
  }

  if (view === 'solution-eco') {
    return <SolutionEco onBack={() => setView('home')} />;
  }

  if (view === 'solution-optimal') {
    return <SolutionOptimal onBack={() => setView('home')} />;
  }

  if (view === 'solution-premium') {
    return <SolutionPremium onBack={() => setView('home')} />;
  }

  if (view === 'solution-cogen') {
    return <SolutionCogen onBack={() => setView('home')} />;
  }

  if (view === 'solution-industrial') {
    return <SolutionIndustrial onBack={() => setView('home')} />;
  }

  if (view === 'solution-ng-eco') {
    return <SolutionNoGasEco onBack={() => setView('home')} />;
  }

  if (view === 'solution-ng-opt') {
    return <SolutionNoGasOptimal onBack={() => setView('home')} />;
  }

  if (view === 'solution-ng-prm') {
    return <SolutionNoGasPremium onBack={() => setView('home')} />;
  }

  if (view === 'solution-ng-hitech') {
    return <SolutionNoGasHiTech onBack={() => setView('home')} />;
  }

  if (view === 'solution-ng-comm') {
    return <SolutionNoGasCommercial onBack={() => setView('home')} />;
  }

  if (view === 'law-410') {
    return <Law410 onBack={() => setView('gas-requirements')} />;
  }

  if (view === 'law-798') {
    return <Law798 onBack={() => setView('gas-requirements')} />;
  }

  if (view === 'law-624') {
    return <Law624 onBack={() => setView('gas-requirements')} />;
  }

  if (view === 'law-384') {
    return <Law384 onBack={() => setView('gas-requirements')} />;
  }

  if (view === 'certificates') {
    return <Certificates onBack={() => setView('home')} />;
  }

  if (view === 'design') {
    return <DesignService onBack={() => setView('home')} />;
  }

  if (view === 'equipment-faq') {
    return <EquipmentFAQ onBack={() => setView('home')} />;
  }

  const handleOpenSolution = (id: string) => {
    if (id === 'eco') {
      setView('solution-eco');
      window.scrollTo(0, 0);
    } else if (id === 'std') {
      setView('solution-optimal');
      window.scrollTo(0, 0);
    } else if (id === 'prm') {
      setView('solution-premium');
      window.scrollTo(0, 0);
    } else if (id === 'htech') {
      setView('solution-cogen');
      window.scrollTo(0, 0);
    } else if (id === 'ind') {
      setView('solution-industrial');
      window.scrollTo(0, 0);
    } else if (id === 'ng-eco') {
      setView('solution-ng-eco');
      window.scrollTo(0, 0);
    } else if (id === 'ng-opt') {
      setView('solution-ng-opt');
      window.scrollTo(0, 0);
    } else if (id === 'ng-prm') {
      setView('solution-ng-prm');
      window.scrollTo(0, 0);
    } else if (id === 'ng-ind') {
      setView('solution-ng-hitech');
      window.scrollTo(0, 0);
    } else if (id === 'ng-pellet') {
      setView('solution-ng-comm');
      window.scrollTo(0, 0);
    } else {
      window.open('/calculation', '_blank');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero 
          onOpenGasReq={() => setView('gas-requirements')} 
          onOpenPriceList={() => setView('price-list')}
          onOpenCertificates={() => setView('certificates')}
          onOpenDesign={() => { setView('design'); window.scrollTo(0, 0); }}
        />
        <StickyNav 
          onOpenGasReq={() => { setView('gas-requirements'); window.scrollTo(0, 0); }}
          onOpenDesign={() => { setView('design'); window.scrollTo(0, 0); }}
        />
        <TurnkeySection onOpenSolution={handleOpenSolution} />
        <NoGasSection onOpenSolution={handleOpenSolution} />
        <TrustBlock />
        <ExpertiseCatalog />
        
        {/* FAQ Button Section */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <button 
              onClick={() => {
                setView('equipment-faq');
                window.scrollTo(0, 0);
              }}
              className="w-full bg-[#0b2a4a] hover:bg-[#b22222] text-white py-10 rounded-2xl transition-all duration-500 group relative overflow-hidden shadow-xl"
            >
              <div className="relative z-10 flex flex-col items-center gap-4">
                <HelpCircle size={48} className="text-[#b22222] group-hover:text-white transition-colors duration-500" />
                <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                  Основные вопросы при выборе оборудования
                </span>
                <span className="text-sm opacity-60 font-bold uppercase tracking-widest">
                  Гид по классификации котлов и систем отопления
                </span>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
            </button>
          </div>
        </section>
      </main>
      <Footer onOpenDesign={() => { setView('design'); window.scrollTo(0, 0); }} />
    </div>
  );
}
