
import { TurnkeySolution, TrustItem, ExpertiseSection } from './types';

export const COLORS = {
  primary: '#0b2a4a', // Dark Blue
  accent: '#b22222',  // Brick Red
};

export const TURNKEY_SOLUTIONS: TurnkeySolution[] = [
  {
    id: 'eco',
    title: '"Доступный старт"',
    category: 'Эконом',
    objectType: 'Дом до 100 м²',
    power: '12 кВт (тепло) / 1,5 кВт (резерв)',
    components: [
      'Газовый котел: Navien или Лемакс — 12 кВт',
      'ИБП (чистая синусоида) + 100Ач AGM',
      'Коаксиальный дымоход (нержавейка)'
    ],
    justification: 'Для домов до 100 м² газовое отопление экономически эффективнее электрического при наличии магистрали.',
    image: 'https://i.postimg.cc/FY9p1h38/econom-gaz.jpg'
  },
  {
    id: 'std',
    title: '"Оптимальный дом"',
    category: 'Стандарт',
    objectType: 'Дом 100-180 м²',
    power: '20 кВт (тепло) / 3 кВт (резерв)',
    components: [
      'Конденсационный котел Baxi/Vaillant 24 кВт',
      'Насосная группа и расширительный бак',
      'Инвертор 3 кВт + 2x LiFePo4 100Ач'
    ],
    justification: 'Конденсационные котлы достигают КПД до 98%, напрямую снижая затраты на топливо.',
    image: 'https://i.postimg.cc/fVwCkMm1/standart-gaz.jpg'
  },
  {
    id: 'prm',
    title: '"Полная автономия"',
    category: 'Премиум',
    objectType: 'Коттедж 200-300 м²',
    power: '35 кВт (тепло) / 10 кВт (резерв)',
    components: [
      'Напольный котел Прохоров/Buderus 40 кВт',
      'Гибрид: Газ + резервный электрокотел 9 кВт',
      'Инвертор 10 кВт + станция LiFePo4 15 кВт*ч'
    ],
    justification: 'Независимость от сетей критична в пик зимы при возможных авариях на ЛЭП.',
    image: 'https://i.postimg.cc/21zG3Cht/premium-gaz.jpg'
  },
  {
    id: 'htech',
    title: '"Когенерация"',
    category: 'Hi-Tech',
    objectType: 'Усадьба от 300 м²',
    power: '25 кВт (тепло) + 5 кВт (электро)',
    components: [
      'Микро-ТЭЦ (газопоршневая) 5 кВт э/э',
      'Пиковый газовый котел для догрева',
      'Утилизация тепла двигателя'
    ],
    justification: 'КПД до 95%. Генерация "бесплатного" электричества окупает систему за 3-5 лет.',
    image: 'https://i.postimg.cc/XrVLXndz/hitech-gaz.jpg'
  },
  {
    id: 'ind',
    title: '"Пром. объект"',
    category: 'Коммерция',
    objectType: 'Офис / Цех / Отель',
    power: 'от 100 кВт (тепло / электро)',
    components: [
      'Газопоршневая мини-ТЭЦ от 50 кВт э/э',
      'Каскад напольных котлов большой мощности',
      'Резервное топливное хозяйство (ПП №798)'
    ],
    justification: 'Своя генерация дешевле подключения к ЛЭП для удаленных объектов.',
    image: 'https://i.postimg.cc/CRF7dwk7/commerce-gaz.jpg'
  }
];

export const NO_GAS_SOLUTIONS: TurnkeySolution[] = [
  {
    id: 'ng-eco',
    title: 'Эконом: Электро + ИК',
    category: 'Эконом',
    objectType: 'Дачи, гостевые дома (50-100 м²)',
    power: '6-9 кВт / Капзатраты: 80-120 т.р.',
    components: [
      'Электрокотел ZOTA Solo (каскад)',
      'ИК-панели Никатэн-300 (точечный догрев)',
      'Монтаж за 1-2 дня, без дымохода'
    ],
    justification: 'Самое быстрое и дешевое решение. ZOTA надежно работает при перепадах напряжения в поселках.',
    image: 'https://i.postimg.cc/pyqWSy7W/econom.jpg'
  },
  {
    id: 'ng-opt',
    title: 'Оптимальный: Тепловой насос',
    category: 'Стандарт',
    objectType: 'Коттеджи среднего класса (100-200 м²)',
    power: '14-16 кВт / COP 3.5-4.0',
    components: [
      'Mitsubishi Zubadan / РусКлимат RC',
      'Инверторный компрессор (до -28°C)',
      'Экономия в 3-4 раза выше электрокотла'
    ],
    justification: 'Лучший баланс цены и экономичности. Окупаемость 4-5 лет за счет низкого энергопотребления.',
    image: 'https://i.postimg.cc/PPJXnTsr/standart-nogaz.jpg'
  },
  {
    id: 'ng-prm',
    title: 'Премиум: Геотермальный ТН',
    category: 'Премиум',
    objectType: 'Элитные усадьбы (200-400 м²)',
    power: '15-25 кВт / COP 4.5-5.0',
    components: [
      'НПО Термоком / Stiebel Eltron',
      'Грунтовые зонды (скважины 80-100 м)',
      'Стабильное тепло в любые морозы'
    ],
    justification: 'Максимальная эффективность круглый год. Земля на глубине всегда +5-7°C. Срок службы 30+ лет.',
    image: 'https://i.postimg.cc/8jcpgN8x/premium-bezgaza.jpg'
  },
  {
    id: 'ng-ind',
    title: 'Пром-Энерго: Электро + Солнце',
    category: 'Hi-Tech',
    objectType: 'Отели, адм. здания (400-600 м²)',
    power: '50-80 кВт + 30 кВт (солнце)',
    components: [
      'Эван Professional 60 кВт (пром)',
      'Солнечные панели Хевел (30 кВт пик)',
      'Гибридный инвертор "Солнечный ветер"'
    ],
    justification: 'Снижение пиковых нагрузок. Солнечные панели летом полностью покрывают ГВС и кондиционирование.',
    image: 'https://i.postimg.cc/8jcpgNQg/hitech-bezgaza.jpg'
  },
  {
    id: 'ng-pellet',
    title: 'Автономный: Пеллетный котел',
    category: 'Коммерция',
    objectType: 'Цеха, склады, фермы (600+ м²)',
    power: '100-500 кВт / КПД 85%',
    components: [
      'Котел LAVORO LF 150 (150 кВт)',
      'Бункер 1000 л (автономия до 5 сут)',
      'Факельная горелка, авторозжиг'
    ],
    justification: 'Идеально для производств с отходами деревообработки. Окупаемость 2-4 года при наличии отходов.',
    image: 'https://i.postimg.cc/Cz5hpSTM/prom-nogaz.jpg'
  }
];

export const TRUST_ITEMS: TrustItem[] = [
  {
    id: '1',
    title: 'Энергоэффективность',
    quote: 'Современные автономные газовые котлы обладают высоким КПД до 95–98%.',
    source: 'Исследования эффективности теплогенераторов, 2024'
  },
  {
    id: '2',
    title: 'Экономика',
    quote: 'Выбор между газом и электричеством должен быть обоснован годовыми затратами.',
    source: 'Зарубин М.О. (СПбПУ, 2025)'
  },
  {
    id: '3',
    title: 'Безопасность',
    quote: 'Работа строго по ПП РФ от 30.05.2025 N 798 — регламент пусконаладки обязателен.',
    source: 'Постановление Правительства РФ №798'
  },
  {
    id: '4',
    title: 'Надежность',
    quote: 'Автономные котельные обеспечивают независимость от централизованных аварийных сетей.',
    source: 'Аналитика систем жизнеобеспечения ИЖС'
  }
];

export const EXPERTISE_SECTIONS: ExpertiseSection[] = [
  {
    id: 'boilers',
    title: 'Газовые котлы: настенные и напольные',
    params: [
      { label: 'Baxi (Италия)', value: '12-42 кВт, модуляция пламени' },
      { label: 'Vaillant (Германия)', value: 'ecoTEC, КПД до 98%' },
      { label: 'Navien (Корея)', value: 'Адаптированы под давление в Челябинске' }
    ],
    brands: ['Baxi', 'Vaillant', 'Navien', 'Лемакс'],
    galleryId: 'boilers'
  },
  {
    id: 'piping',
    title: 'Котельное оборудование (Обвязка)',
    params: [
      { label: 'Насосы', value: 'Grundfos, Wilo' },
      { label: 'Баки', value: 'Расширительные закрытого типа' },
      { label: 'Безопасность', value: 'Сбросные клапаны, воздухоотводчики' }
    ],
    galleryId: 'piping'
  },
  {
    id: 'chimneys',
    title: 'Дымоходные системы',
    params: [
      { label: 'Коаксиальные', value: 'Труба в трубе для турбо-котлов' },
      { label: 'Сэндвич', value: 'Нержавеющая сталь для напольных систем' },
      { label: 'Диаметры', value: '100, 150, 200 мм' }
    ],
    galleryId: 'chimneys'
  },
  {
    id: 'ups',
    title: 'Системы резервного питания (ИБП)',
    params: [
      { label: 'Бюджет', value: 'Off-line решения для насосов' },
      { label: 'Автономия', value: 'Внешние AGM АКБ на 4-8 часов' },
      { label: 'Монтаж', value: 'Стойки, настенные блоки' }
    ],
    galleryId: 'ups'
  },
  {
    id: 'inverters',
    title: 'Гибридные инверторы и LiFePo4',
    params: [
      { label: 'Инверторы', value: 'Чистая синусоида, 3-15 кВт' },
      { label: 'АКБ', value: 'LiFePo4 (6000+ циклов, подогрев)' },
      { label: 'Скорость', value: 'АВР за 0.02 сек' }
    ],
    galleryId: 'inverters'
  },
  {
    id: 'elec_heat',
    title: 'Электрическое отопление (Резерв)',
    params: [
      { label: 'Котлы', value: 'Настенные 3-12 кВт' },
      { label: 'Назначение', value: 'Резервирование газа' },
      { label: 'Автоматика', value: 'Терморегуляторы с Wi-Fi' }
    ],
    galleryId: 'elec'
  },
  {
    id: 'cogen',
    title: 'Когенерация: Микро-ТЭЦ',
    params: [
      { label: 'Эл. КПД', value: '~30%' },
      { label: 'Терм. КПД', value: '~60%' },
      { label: 'Бренды', value: 'Honda, EC Power, РФ' }
    ],
    galleryId: 'cogen'
  },
  {
    id: 'fuelcells',
    title: 'Инновации: Топливные элементы',
    params: [
      { label: 'Технология', value: 'SOFC (без горения)' },
      { label: 'КПД', value: 'До 60% по электричеству' },
      { label: 'Шум', value: '0 дБ (нет движущихся частей)' }
    ],
    galleryId: 'innovation'
  },
  {
    id: 'design',
    title: 'Проектирование и монтаж',
    params: [
      { label: 'Выезд', value: 'Инженер в Челябинске и области' },
      { label: 'Проект', value: 'По ПП №798' },
      { label: 'ПНР', value: 'Пусконаладка с гарантией' }
    ],
    galleryId: 'design'
  },
  {
    id: 'service',
    title: 'Сервисное обслуживание',
    params: [
      { label: 'Регламент', value: 'Ежегодное ТО (чистка, проверка)' },
      { label: 'Аварийка', value: 'Выезд при отказе 24/7' },
      { label: 'Диагностика', value: 'Газоанализаторы Testo' }
    ],
    galleryId: 'service'
  }
];
