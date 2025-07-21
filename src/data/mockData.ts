export interface Business {
  id: string;
  name: string;
  category: string;
  address: string;
  phone: string;
  rating: number;
  price: string;
  image: string;
  gallery: string[];
  availableSlots: string[];
  description: string;
  features: string[];
  workingHours: string;
  capacity?: number;
  packages?: Package[];
  hasPromotions: boolean;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  includes: string[];
  duration: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: number;
  store: string;
  image: string;
  location: string;
}

export const businesses: Business[] = [
  {
    id: '1',
    name: 'Güzel Kuaför Salonu',
    category: 'Kuaför',
    address: 'Bağlar, Diyarbakır',
    phone: '0412 123 45 67',
    rating: 4.8,
    price: '₺200-400',
    image: 'https://via.placeholder.com/400x300?text=Kuaför+Salonu',
    gallery: [
      'https://via.placeholder.com/400x300?text=Salon+İç+Mekan',
      'https://via.placeholder.com/400x300?text=Saç+Kesim',
      'https://via.placeholder.com/400x300?text=Makyaj+Bölümü'
    ],
    availableSlots: ['09:00', '11:00', '14:00', '16:00'],
    description: 'Diyarbakır\'ın en köklü kuaför salonlarından biri. Profesyonel ekibimizle düğün hazırlığınızda yanınızdayız.',
    features: ['Gelin Saçı', 'Gelin Makyajı', 'Protez Tırnak', 'Kaş Düzenleme'],
    workingHours: 'Pazartesi-Cumartesi: 09:00-19:00',
    hasPromotions: true,
    packages: [
      {
        id: 'p1',
        name: 'Gelin Paketi',
        price: 350,
        originalPrice: 450,
        description: 'Düğün gününüz için komple paket',
        includes: ['Saç', 'Makyaj', 'Protez Tırnak', 'Kaş'],
        duration: '3 saat'
      }
    ]
  },
  {
    id: '2',
    name: 'Elit Erkek Berberi',
    category: 'Berber',
    address: 'Yenişehir, Diyarbakır',
    phone: '0412 234 56 78',
    rating: 4.6,
    price: '₺80-150',
    image: 'https://via.placeholder.com/400x300?text=Berber+Salonu',
    gallery: [
      'https://via.placeholder.com/400x300?text=Modern+Berber',
      'https://via.placeholder.com/400x300?text=Saç+Kesim+2',
      'https://via.placeholder.com/400x300?text=Sakal+Traş'
    ],
    availableSlots: ['10:00', '12:00', '15:00', '17:00'],
    description: 'Modern tekniklerle klasik berberligi buluşturan salon. Damat traşı konusunda uzmanız.',
    features: ['Saç Kesim', 'Sakal Traş', 'Kaş Düzenleme', 'Cilt Bakımı'],
    workingHours: 'Her gün: 09:00-20:00',
    hasPromotions: false
  },
  {
    id: '3',
    name: 'Prenses Gelinlik',
    category: 'Gelinlikçi',
    address: 'Sur, Diyarbakır',
    phone: '0412 345 67 89',
    rating: 4.9,
    price: '₺2000-8000',
    image: 'https://via.placeholder.com/400x300?text=Gelinlik+Mağazası',
    gallery: [
      'https://via.placeholder.com/400x300?text=Gelinlik+Koleksiyonu',
      'https://via.placeholder.com/400x300?text=Prova+Odası',
      'https://via.placeholder.com/400x300?text=Aksesuar+Bölümü'
    ],
    availableSlots: ['10:00', '13:00', '15:30'],
    description: '20 yıllık tecrübemizle Diyarbakır\'ın en büyük gelinlik koleksiyonu. Özel dikim hizmeti.',
    features: ['Gelinlik Satış', 'Özel Dikim', 'Aksesuar', 'Prova Hizmeti'],
    workingHours: 'Pazartesi-Cumartesi: 10:00-19:00',
    hasPromotions: true,
    packages: [
      {
        id: 'p2',
        name: 'Komple Gelin Paketi',
        price: 3500,
        originalPrice: 4200,
        description: 'Gelinlik + Aksesuar + Ayakkabı',
        includes: ['Gelinlik', 'Duvak', 'Ayakkabı', 'Takı Seti'],
        duration: 'Düğün günü'
      }
    ]
  },
  {
    id: '4',
    name: 'Kasr-ı Düğün Salonu',
    category: 'Düğün Salonu',
    address: 'Kayapınar, Diyarbakır',
    phone: '0412 456 78 90',
    rating: 4.7,
    price: '₺15000-25000',
    image: 'https://via.placeholder.com/400x300?text=Düğün+Salonu',
    gallery: [
      'https://via.placeholder.com/400x300?text=Ana+Salon',
      'https://via.placeholder.com/400x300?text=Sahne+Alanı',
      'https://via.placeholder.com/400x300?text=Gelin+Odası',
      'https://via.placeholder.com/400x300?text=Yemek+Servisi'
    ],
    availableSlots: ['19:00', '20:00'],
    description: 'Diyarbakır\'ın en lüks düğün salonu. 500 kişilik kapasiteyle unutulmaz bir düğün için.',
    features: ['500 Kişilik Kapasite', 'Profesyonel Sahne', 'Valet Park', 'Gelin Odası'],
    workingHours: 'Akşam düğünleri: 19:00-02:00',
    capacity: 500,
    hasPromotions: true,
    packages: [
      {
        id: 'p3',
        name: 'Düğün Paketi',
        price: 18000,
        originalPrice: 22000,
        description: 'Komple düğün organizasyonu',
        includes: ['Salon Kirası', 'Yemek Servisi', 'Müzik Sistemi', 'Dekorasyon'],
        duration: '1 gece'
      }
    ]
  },
  {
    id: '5',
    name: 'Altın Kına Evi',
    category: 'Kına Organizasyon',
    address: 'Bağlar, Diyarbakır',
    phone: '0412 567 89 01',
    rating: 4.5,
    price: '₺3000-6000',
    image: 'https://via.placeholder.com/400x300?text=Kına+Organizasyon',
    gallery: [
      'https://via.placeholder.com/400x300?text=Kına+Gecesi',
      'https://via.placeholder.com/400x300?text=Geleneksel+Süsleme',
      'https://via.placeholder.com/400x300?text=Kına+Tepsisi'
    ],
    availableSlots: ['14:00', '16:00', '19:00'],
    description: 'Geleneksel kına gecesi organizasyonu. Müzik, yemek ve süsleme dahil paketler.',
    features: ['Geleneksel Müzik', 'Kına Tepsisi', 'Süsleme', 'Yemek Servisi'],
    workingHours: 'Hafta sonu: 14:00-23:00',
    capacity: 100,
    hasPromotions: false
  },
  {
    id: '6',
    name: 'Sevgi Nişan Salonu',
    category: 'Nişan Organizasyon',
    address: 'Yenişehir, Diyarbakır',
    phone: '0412 678 90 12',
    rating: 4.4,
    price: '₺2500-5000',
    image: 'https://via.placeholder.com/400x300?text=Nişan+Salonu',
    gallery: [
      'https://via.placeholder.com/400x300?text=Nişan+Masası',
      'https://via.placeholder.com/400x300?text=Çiçek+Süsleme',
      'https://via.placeholder.com/400x300?text=Pasta+Köşesi'
    ],
    availableSlots: ['15:00', '17:00', '19:00'],
    description: 'Romantik nişan törenleri için özel tasarım. Çiçek süsleme ve pasta servisi dahil.',
    features: ['Çiçek Düzenleme', 'Pasta Servisi', 'Müzik', 'Fotoğraf Alanı'],
    workingHours: 'Cumartesi-Pazar: 15:00-22:00',
    capacity: 80,
    hasPromotions: true,
    packages: [
      {
        id: 'p4',
        name: 'Nişan Paketi',
        price: 3200,
        originalPrice: 4000,
        description: 'Komple nişan organizasyonu',
        includes: ['Salon', 'Süsleme', 'Pasta', 'Çiçek', 'Müzik'],
        duration: '4 saat'
      }
    ]
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Bosch Bulaşık Makinesi',
    category: 'Beyaz Eşya',
    price: 12999,
    originalPrice: 15999,
    discount: 19,
    store: 'Teknosa Diyarbakır',
    image: 'https://via.placeholder.com/300x200?text=Bulaşık+Makinesi',
    location: 'Forum Diyarbakır AVM'
  },
  {
    id: '2',
    name: 'Yatak Odası Takımı',
    category: 'Mobilya',
    price: 8500,
    originalPrice: 12000,
    discount: 29,
    store: 'Doğtaş Diyarbakır',
    image: 'https://via.placeholder.com/300x200?text=Yatak+Odası',
    location: 'Bağlar Caddesi'
  },
  {
    id: '3',
    name: 'Mutfak Takımı (180cm)',
    category: 'Mobilya',
    price: 15900,
    originalPrice: 19900,
    discount: 20,
    store: 'İstikbal Diyarbakır',
    image: 'https://via.placeholder.com/300x200?text=Mutfak+Takımı',
    location: 'Yenişehir Mahallesi'
  },
  {
    id: '4',
    name: 'Çeyiz Seti (12 Parça)',
    category: 'Ev Tekstili',
    price: 2499,
    originalPrice: 3500,
    discount: 29,
    store: 'Özdilek Diyarbakır',
    image: 'https://via.placeholder.com/300x200?text=Çeyiz+Seti',
    location: 'Çakmak Caddesi'
  }
];