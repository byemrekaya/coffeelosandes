export interface BrandValue {
  id: string;
  title: string;
  body: string;
}

export interface B2BPoint {
  id: string;
  title: string;
  detail: string;
}

export const brandValues: BrandValue[] = [
  {
    id: 'origin',
    title: 'Menşei Şeffaflığı',
    body: 'Coffee Los Andes, Venezüella menşeini pazarlama dili değil; ölçülebilir, izlenebilir bir tedarik modeli olarak kurgular.',
  },
  {
    id: 'consistency',
    title: 'İstikrarlı Profiller',
    body: 'Hedef profil aralıkları, lot ve kavrum bazında dokümante edilir; sipariş tekrarlarında aynı imza karakteri korunur.',
  },
  {
    id: 'craft',
    title: 'Kavruma Mimarisi',
    body: 'Her menşe ve kullanım senaryosu için ayrı kavurma eğrileri geliştirir, bu eğrileri B2B ortaklarımızla paylaşırız.',
  },
];

export const b2bPoints: B2BPoint[] = [
  {
    id: 'sourcing',
    title: 'Uçtan Uca Sourcing',
    detail:
      'Plantasyondan paketlemeye kadar her adımı; hacim, tutarlılık ve menşe kimliği perspektifiyle tasarlarız.',
  },
  {
    id: 'quality',
    title: 'Kalite Sistemleri',
    detail:
      'Lot bazlı cupping, defekt yönetimi ve nem takibi ile zincirinizde beklenmedik kalite dalgalanmalarını önleriz.',
  },
  {
    id: 'logistics',
    title: 'Lojistik ve Planlama',
    detail:
      'Teslimat takvimlerini operasyonel gerçekliklerinize göre planlar, hacim ve stok yönetimini birlikte kurgularız.',
  },
  {
    id: 'partnership',
    title: 'Uzun Vadeli Ortaklık',
    detail:
      'Coffee Los Andes, yalnızca kahve tedarikçisi değil; menü, marka ve operasyon kararlılığınızın stratejik ortağıdır.',
  },
];

