
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
    image: '/images/solutions/econom-gaz.jpg',
    gallery: ['/images/solutions/standart-gaz.jpg', '/images/solutions/premium-gaz.jpg']
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
    image: '/images/solutions/standart-gaz.jpg',
    gallery: ['/images/solutions/econom-gaz.jpg', '/images/solutions/premium-gaz.jpg']
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
    image: '/images/solutions/premium-gaz.jpg',
    gallery: ['/images/solutions/hitech-gaz.jpg', '/images/solutions/commerce-gaz.jpg']
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
    image: '/images/solutions/hitech-gaz.jpg',
    gallery: ['/images/solutions/premium-gaz.jpg', '/images/solutions/commerce-gaz.jpg']
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
    image: '/images/solutions/commerce-gaz.jpg',
    gallery: ['/images/solutions/premium-gaz.jpg', '/images/solutions/hitech-gaz.jpg']
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
    image: '/images/solutions/ng-eco.jpg',
    gallery: ['/images/solutions/ng-std.jpg', '/images/solutions/ng-prm.jpg']
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
    image: '/images/solutions/ng-std.jpg',
    gallery: ['/images/solutions/ng-eco.jpg', '/images/solutions/ng-prm.jpg']
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
    image: '/images/solutions/ng-prm.jpg',
    gallery: ['/images/solutions/ng-std.jpg', '/images/solutions/ng-htech.jpg']
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
    image: '/images/solutions/ng-htech.jpg',
    gallery: ['/images/solutions/ng-prm.jpg', '/images/solutions/ng-ind.jpg']
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
    image: '/images/solutions/ng-ind.jpg',
    gallery: ['/images/solutions/ng-htech.jpg', '/images/solutions/ng-prm.jpg']
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
    galleryId: 'boilers',
    images: [
      '/images/boilers/1.jpg',
      '/images/boilers/3.jpg',
      '/images/boilers/4.jpg',
      '/images/boilers/5.jpg',
      '/images/boilers/6.jpg',
      '/images/boilers/7.jpg',
      '/images/boilers/8.jpg',
      '/images/boilers/9.jpg',
      '/images/boilers/10.jpg',
      '/images/boilers/11.jpg'
    ]
  },
  {
    id: 'piping',
    title: 'Котельное оборудование (Обвязка)',
    params: [
      { label: 'Насосы', value: 'Grundfos, Wilo' },
      { label: 'Баки', value: 'Расширительные закрытого типа' },
      { label: 'Безопасность', value: 'Сбросные клапаны, воздухоотводчики' }
    ],
    galleryId: 'piping',
    images: [
      '/images/piping/1.jpg',
      '/images/piping/2.jpg',
      '/images/piping/3.jpg',
      '/images/piping/4.jpg',
      '/images/piping/5.jpg',
      '/images/piping/6.jpg',
      '/images/piping/7.jpg',
      '/images/piping/8.jpg',
      '/images/piping/9.jpg',
      '/images/piping/10.jpg'
    ]
  },
  {
    id: 'chimneys',
    title: 'Дымоходные системы',
    params: [
      { label: 'Коаксиальные', value: 'Труба в трубе для турбо-котлов' },
      { label: 'Сэндвич', value: 'Нержавеющая сталь для напольных систем' },
      { label: 'Диаметры', value: '100, 150, 200 мм' }
    ],
    galleryId: 'chimneys',
    images: [
      '/images/chimneys/1.jpg',
      '/images/chimneys/2.jpg',
      '/images/chimneys/3.jpg',
      '/images/chimneys/4.jpg',
      '/images/chimneys/5.jpg',
      '/images/chimneys/6.jpg',
      '/images/chimneys/7.jpg',
      '/images/chimneys/8.jpg',
      '/images/chimneys/9.jpg',
      '/images/chimneys/10.jpg'
    ]
  },
  {
    id: 'ups',
    title: 'Системы резервного питания (ИБП)',
    params: [
      { label: 'Бюджет', value: 'Off-line решения для насосов' },
      { label: 'Автономия', value: 'Внешние AGM АКБ на 4-8 часов' },
      { label: 'Монтаж', value: 'Стойки, настенные блоки' }
    ],
    galleryId: 'ups',
    images: [
      '/images/ups/1.jpg',
      '/images/ups/2.jpg',
      '/images/ups/3.jpg',
      '/images/ups/4.jpg',
      '/images/ups/5.jpg',
      '/images/ups/6.jpg',
      '/images/ups/7.jpg',
      '/images/ups/8.jpg',
      '/images/ups/9.jpg',
      '/images/ups/10.jpg'
    ]
  },
  {
    id: 'inverters',
    title: 'Гибридные инверторы и LiFePo4',
    params: [
      { label: 'Инверторы', value: 'Чистая синусоида, 3-15 кВт' },
      { label: 'АКБ', value: 'LiFePo4 (6000+ циклов, подогрев)' },
      { label: 'Скорость', value: 'АВР за 0.02 сек' }
    ],
    galleryId: 'inverters',
    images: [
      '/images/inverters/1.jpg',
      '/images/inverters/2.jpg',
      '/images/inverters/3.jpg',
      '/images/inverters/4.jpg',
      '/images/inverters/5.jpg',
      '/images/inverters/6.jpg',
      '/images/inverters/7.jpg',
      '/images/inverters/8.jpg',
      '/images/inverters/9.jpg',
      '/images/inverters/10.jpg'
    ]
  },
  {
    id: 'elec_heat',
    title: 'Электрическое отопление (Резерв)',
    params: [
      { label: 'Котлы', value: 'Настенные 3-12 кВт' },
      { label: 'Назначение', value: 'Резервирование газа' },
      { label: 'Автоматика', value: 'Терморегуляторы с Wi-Fi' }
    ],
    galleryId: 'elec',
    images: [
      '/images/elec_heat/1.jpg',
      '/images/elec_heat/2.jpg',
      '/images/elec_heat/3.jpg',
      '/images/elec_heat/4.jpg',
      '/images/elec_heat/5.jpg',
      '/images/elec_heat/6.jpg',
      '/images/elec_heat/7.jpg',
      '/images/elec_heat/8.jpg',
      '/images/elec_heat/9.jpg',
      '/images/elec_heat/10.jpg'
    ]
  },
  {
    id: 'cogen',
    title: 'Когенерация: Микро-ТЭЦ',
    params: [
      { label: 'Эл. КПД', value: '~30%' },
      { label: 'Терм. КПД', value: '~60%' },
      { label: 'Бренды', value: 'Honda, EC Power, РФ' }
    ],
    galleryId: 'cogen',
    images: [
      '/images/cogen/1.jpg',
      '/images/cogen/2.jpg',
      '/images/cogen/3.jpg',
      '/images/cogen/4.jpg',
      '/images/cogen/5.jpg',
      '/images/cogen/6.jpg',
      '/images/cogen/7.jpg',
      '/images/cogen/8.jpg',
      '/images/cogen/9.jpg',
      '/images/cogen/10.jpg'
    ]
  },
  {
    id: 'fuelcells',
    title: 'Инновации: Топливные элементы',
    params: [
      { label: 'Технология', value: 'SOFC (без горения)' },
      { label: 'КПД', value: 'До 60% по электричеству' },
      { label: 'Шум', value: '0 дБ (нет движущихся частей)' }
    ],
    galleryId: 'innovation',
    images: [
      '/images/fuelcells/1.jpg',
      '/images/fuelcells/2.jpg',
      '/images/fuelcells/3.jpg',
      '/images/fuelcells/4.jpg',
      '/images/fuelcells/5.jpg',
      '/images/fuelcells/6.jpg',
      '/images/fuelcells/7.jpg',
      '/images/fuelcells/8.jpg',
      '/images/fuelcells/9.jpg',
      '/images/fuelcells/10.jpg'
    ]
  },
  {
    id: 'design',
    title: 'Проектирование и монтаж',
    params: [
      { label: 'Выезд', value: 'Инженер в Челябинске и области' },
      { label: 'Проект', value: 'По ПП №798' },
      { label: 'ПНР', value: 'Пусконаладка с гарантией' }
    ],
    galleryId: 'design',
    images: [
      '/images/design/1.jpg',
      '/images/design/2.jpg',
      '/images/design/3.jpg',
      '/images/design/4.jpg',
      '/images/design/5.jpg',
      '/images/design/6.jpg',
      '/images/design/7.jpg',
      '/images/design/8.jpg',
      '/images/design/9.jpg',
      '/images/design/10.jpg'
    ]
  },
  {
    id: 'service',
    title: 'Сервисное обслуживание',
    params: [
      { label: 'Регламент', value: 'Ежегодное ТО (чистка, проверка)' },
      { label: 'Аварийка', value: 'Выезд при отказе 24/7' },
      { label: 'Диагностика', value: 'Газоанализаторы Testo' }
    ],
    galleryId: 'service',
    images: [
      '/images/service/1.jpg',
      '/images/service/2.jpg',
      '/images/service/3.jpg',
      '/images/service/4.jpg',
      '/images/service/5.jpg',
      '/images/service/6.jpg',
      '/images/service/7.jpg',
      '/images/service/8.jpg',
      '/images/service/9.jpg',
      '/images/service/10.jpg'
    ]
  }
];
