export interface Product {
  id: string;
  name: string;
  brands: string[];
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  image?: string;
  products: Product[];
}

export const FALLBACK_PRODUCT_IMAGE =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><rect width="800" height="800" fill="%23e5e7eb"/><rect x="70" y="70" width="660" height="660" fill="none" stroke="%239ca3af" stroke-width="22"/><circle cx="300" cy="310" r="85" fill="%23d1d5db"/><path d="M140 640L300 470L410 560L520 430L660 640Z" fill="%23cbd5e1"/><text x="400" y="715" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="%236b7280">FOREZ</text></svg>';

export function getProductImage(product: Product, category: Category): string {
  return product.image || category.image || FALLBACK_PRODUCT_IMAGE;
}

export const PRODUCT_CATEGORIES: Category[] = [
  {
    id: 'bearings',
    name: 'Bearings',
    image: 'https://blog.lily-bearing.com/hubfs/Types%20of%20Bearings.jpg',
    products: [
      {
        id: 'ball-bearings',
        name: 'Ball Bearings',
        brands: ['AETNA', 'AMI', 'ABC', 'BROWNING', 'BARDEN', 'SKF', 'FAG', 'TIMKEN', 'KOYO', 'NACHI', 'NSK', 'NTN'],
        image: 'https://cdn11.bigcommerce.com/s-03842/images/stencil/1193x795/uploaded_images/ball-bearing-blog.jpg?t=1729516043',
      },
      {
        id: 'roller-bearings',
        name: 'Roller Bearings',
        brands: ['SKF', 'FAG', 'TIMKEN', 'IKO', 'INA', 'KOYO', 'MCGILL', 'MRC', 'NACHI'],
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKN8EPjv5yrmKcithR2QBjH38eUMBZD4ZBckyKc5Fw9PjIiXNbYQG_CkyLBjr-pdV80zO70jNOSLmrBlKcEL8Rp32kTWBt7w',
      },
      {
        id: 'thrust-bearings',
        name: 'Thrust Bearings',
        brands: ['SKF', 'FAG', 'TIMKEN', 'NICE', 'SCHATZ'],
        image: '/images/products/thrust-bearings.svg',
      },
      {
        id: 'mounted-units',
        name: 'Mounted Units',
        brands: ['DODGE', 'SEALMASTER', 'SKF', 'LINK-BELT', 'REX', 'BROWNING'],
        image: '/images/products/mounted-units.svg',
      },
      {
        id: 'sleeve-bearings',
        name: 'Sleeve Bearings',
        brands: ['OILITE', 'CAST BRONZE', 'IGUS', 'BOSTON GEAR'],
        image: 'https://www.bearingsplus.com/content/dam/dpc/bearingsplus/products/fluid-film-bearings/journal-bearings/eff-sleeve-bearing-040.jpg.thumb.1280.1280.png.rendition.src.1619206688042.jpg',
      },
    ]
  },
  {
    id: 'belts',
    name: 'Belts & Accessories',
    image: 'https://www.bdhbelts.com/wp-content/uploads/2023/06/industrial-belt-suppliers-in-pa.jpg',
    products: [
      { id: 'v-belts', name: 'V-Belts', brands: ['BANDO', 'BROWNING', 'DAYCO', 'GATES', 'TB WOODS'], image: 'https://gates.scene7.com/is/image/gates/v-belt-variable-speed?$Image_Responsive_Preset$' },
      { id: 'timing-belts', name: 'Timing Belts', brands: ['BANDO', 'BROWNING', 'DAYCO', 'GATES', 'BRECOFLEX'], image: 'https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/blgrNr1iua0LZTt9lhshLhzlSg3YMBiW75Z5xA3G.jpg' },
      { id: 'conveyor-belts', name: 'Conveyor Belts', brands: ['INTRALOX', 'DUNLOP', 'FORBO-SIEGLING', 'FENNER'], image: 'https://img.waimaoniu.net/4373/4373-202412111309334172.jpg?x-oss-process=image/resize,m_lfit,h_800' },
    ]
  },
  {
    id: 'chain',
    name: 'Chain & Sprockets',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQPcF7zGlsnEYVsCI9TfjMcUi279qndVn3A&s',
    products: [
      { id: 'roller-chain', name: 'Roller Chain', brands: ['DIAMOND', 'HITACHI MAXCO', 'HKK', 'LINK-BELT', 'MORSE', 'RENOLD', 'REX', 'UNION', 'UST', 'WHITNEY'], image: 'https://m.media-amazon.com/images/I/71J8-7mqUQL._AC_UF1000,1000_QL80_.jpg' },
      { id: 'sprockets', name: 'Sprockets', brands: ['BROWNING', 'MARTIN', 'MORSE', 'REX'], image: 'https://sprocketspecialists.com/wp-content/uploads/2019/03/RearSprocketCategory-1.jpg' },
    ]
  },
  {
    id: 'clutches',
    name: 'Clutches & Brakes',
    image: 'https://ogura-clutch.com/files/images/thumb/industrial-group.jpg',
    products: [
      {
        id: 'clutches',
        name: 'Clutches',
        brands: ['DYNACORP', 'ELECTROID', 'FORMSPRAG', 'HORTON', 'MORSE', 'WARNER', 'ZURN'],
        image: 'https://www.indclutch.com/-/media/Project/Altramotion/shared/images/Product-Management/Industrial-Clutch/Product-Collages/ICDryCBCollage.jpg?h=188&iar=0&w=298&rev=37d42e3803a246fbb5b74c834cf39e8d&hash=39D4F252E8CF2DDCE33A7CEF73E6B9B2',
      },
      {
        id: 'brakes',
        name: 'Brakes',
        brands: ['STEARNS', 'WARNER', 'ELECTROID'],
        image: '/images/products/brake.svg',
      },
    ]
  },
  {
    id: 'conveyor-components',
    name: 'Conveyor Components',
    image: 'https://nibora.com/wp-content/uploads/2016/03/KONVEYRNI-KOMPONENTI.jpg',
    products: [
      {
        id: 'pulleys',
        name: 'Pulleys',
        brands: ['AMERICAN PULLEY', 'PRECISION', 'VAN GORP', 'MARTIN'],
        image: 'https://images.thdstatic.com/productImages/ab2456ba-b62c-4f0e-bb91-e02bd2e60d42/svn/everbilt-pulleys-43364-64_1000.jpg',
      },
      {
        id: 'lacing',
        name: 'Lacing',
        brands: ['ALLIGATOR LACING', 'CLIPPER LACING', 'FLEXIBLE STEEL LACING'],
        image: 'https://images.thdstatic.com/productImages/ab2456ba-b62c-4f0e-bb91-e02bd2e60d42/svn/everbilt-pulleys-43364-64_1000.jpg',
      },
    ]
  },
  {
    id: 'couplings',
    name: 'Couplings',
    image: 'https://www.zero-max.com/includes/work/image_cache/jpg/90ccddba8a71dde46edbbcc2d552aa77.thumb.jpg',
    products: [
      { id: 'couplings', name: 'Couplings', brands: ['FALK', 'LOVEJOY', 'TB WOODS', 'KOP-FLEX', 'DODGE', 'MARTIN', 'TIMKEN', 'ZURN'], image: 'https://www.jakobantriebstechnik.de/wp-content/uploads/2025/09/elastomerkupplung-ekm-uebersichtsseite.webp' },
    ]
  },
  {
    id: 'motors',
    name: 'Motors',
    image: '/images/categories/motors.svg',
    products: [
      { id: 'ac-motors', name: 'AC Motors', brands: ['BALDOR', 'GENERAL ELECTRIC', 'LEESON', 'RELIANCE', 'US ELECTRIC', 'SIEMENS', 'ALLEN BRADLEY'], image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRof92DB4lekXvVkXl31kUlU2mH5Ekiq3USkEPrnxmi_qPlQXgqOOJibh6c8A3I5Cz-E9e6JVmcmLuOrcq1Au1xfbyi9vbIh7pQEFtKeTI4aT8SkqzpyE7k' },
    ]
  },
  {
    id: 'pneumatics',
    name: 'Pneumatics',
    image: '/images/categories/pneumatics.svg',
    products: [
      { id: 'cylinders', name: 'Cylinders', brands: ['BIMBA', 'AMERICAN CYLINDER', 'STARCYL'], image: '/images/products/cylinders.svg' },
      { id: 'valves', name: 'Valves', brands: ['NORGREN', 'MFD PNEUMATIC VALVES'], image: '/images/products/valves.svg' },
    ]
  }
];
