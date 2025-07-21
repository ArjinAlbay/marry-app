// Business/Service Provider Types
export interface Business {
  id: string;
  name: string;
  category: BusinessCategory;
  address: string;
  district: DiyarbakirDistrict;
  phone: string;
  rating: number;
  reviewCount: number;
  priceRange: string; // e.g., "₺200-400"
  image: string;
  availableSlots: TimeSlot[];
  services: Service[];
  workingHours: WorkingHours;
  isVerified: boolean;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number; // in minutes
  description?: string;
}

export interface TimeSlot {
  time: string; // "09:00"
  isAvailable: boolean;
  date?: string; // "2025-07-22"
}

export interface WorkingHours {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}

export interface DaySchedule {
  isOpen: boolean;
  openTime?: string; // "09:00"
  closeTime?: string; // "18:00"
}

// Product/Campaign Types
export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice: number;
  discount: number; // percentage
  store: string;
  storeId: string;
  image: string;
  images?: string[]; // multiple images
  location: string;
  district: DiyarbakirDistrict;
  description?: string;
  brand?: string;
  model?: string;
  warranty?: number; // months
  specifications?: ProductSpec[];
  isInStock: boolean;
  campaignEndDate?: string;
}

export interface ProductSpec {
  key: string;
  value: string;
}

// Appointment Types
export interface Appointment {
  id: string;
  businessId: string;
  serviceId: string;
  customerName: string;
  customerPhone: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  notes?: string;
  totalPrice: number;
}

// Enums
export enum BusinessCategory {
  KUAFOR = 'Kuaför',
  BERBER = 'Berber',
  GELINLIKCI = 'Gelinlikçi',
  DUGUN_SALONU = 'Düğün Salonu',
  FOTOGRAFCI = 'Fotoğrafçı',
  MAKYOZ = 'Makyöz',
  KINA_ORGANIZASYON = 'Kına Organizasyon',
  MUZIK_GRUP = 'Müzik Grubu',
  CICEKCI = 'Çiçekçi'
}

export enum ProductCategory {
  BEYAZ_ESYA = 'Beyaz Eşya',
  MOBILYA = 'Mobilya',
  EV_TEKSTILI = 'Ev Tekstili',
  MUTFAK = 'Mutfak Eşyaları',
  BANYO = 'Banyo Eşyaları',
  AYDINLATMA = 'Aydınlatma',
  DEKORASYON = 'Dekorasyon',
  NAKLIYE = 'Nakliye Hizmetleri',
  DUGUN_AKSESUARLARI = 'Düğün Aksesuarları'
}

export enum DiyarbakirDistrict {
  BAGLAR = 'Bağlar',
  YENISEHIR = 'Yenişehir',
  SUR = 'Sur',
  KAYAPINAR = 'Kayapınar'
}

export enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

// User/Customer Types
export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  weddingDate?: string;
  partner?: string;
  preferences: UserPreferences;
  appointments: Appointment[];
  favoriteBusinesses: string[];
  watchedProducts: string[];
}

export interface UserPreferences {
  budget: BudgetRange;
  style: WeddingStyle[];
  location: DiyarbakirDistrict[];
  notifications: NotificationSettings;
}

export interface BudgetRange {
  min: number;
  max: number;
  category: ProductCategory;
}

export enum WeddingStyle {
  GELENEKSEL = 'Geleneksel',
  MODERN = 'Modern',
  VINTAGE = 'Vintage',
  MINIMALIST = 'Minimalist'
}

export interface NotificationSettings {
  appointments: boolean;
  campaigns: boolean;
  priceDrops: boolean;
  newBusinesses: boolean;
}

// Search/Filter Types
export interface SearchFilters {
  query?: string;
  category?: BusinessCategory | ProductCategory;
  district?: DiyarbakirDistrict;
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  isAvailable?: boolean;
  sortBy?: SortOption;
}

export enum SortOption {
  RATING_DESC = 'rating_desc',
  PRICE_ASC = 'price_asc',
  PRICE_DESC = 'price_desc',
  DISTANCE = 'distance',
  NEWEST = 'newest'
}