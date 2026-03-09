export type RoastLevel = 'light' | 'medium' | 'medium-dark' | 'dark';

export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  origin: string;
  elevation: string;
  roast: RoastLevel;
  process: string;
  tastingNotes: string[];
  idealFor: string[];
  packaging: string;
  b2bFit: string;
  imageKey: string;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    slug: 'andes-reserva-espresso',
    name: 'Andes Reserva Espresso',
    shortDescription: 'Yoğun gövdeli, kakao ve karamel notalarıyla imza espresso harmanı.',
    origin: 'Venezüella, And etekleri seçili lotlar',
    elevation: '1.400 – 1.800 m',
    roast: 'medium-dark',
    process: 'Yıkanmış, lot bazlı kurutma',
    tastingNotes: ['bitter kakao', 'koyu karamel', 'kızarmış fındık', 'hafif kırmızı meyve dokunuşu'],
    idealFor: ['espresso barlar', 'otel kahvaltı servisleri', 'ofis espresso makineleri', 'kapsül projeleri'],
    packaging: '1 kg valfli profesyonel paket / 250 g raf formatı seçenekleri',
    b2bFit:
      'Yüksek hacimli espresso servisleri için tutarlı akış, stabil krema ve süt bazlı içeceklerde yoğun karakter sunar.',
    imageKey: 'product-andes-reserva',
    isFeatured: true,
  },
  {
    slug: 'alto-valle-filter',
    name: 'Alto Valle Filter',
    shortDescription: 'Temiz, parlak ve dengeli bir filtre profili.',
    origin: 'Venezüella, yüksek rakım seçili plantasyonlar',
    elevation: '1.600 – 1.950 m',
    roast: 'medium',
    process: 'Yıkanmış, kontrollü kurutma eğrileri',
    tastingNotes: ['narenciye kabuğu', 'sütlü çikolata', 'badem', 'çiçeksi üst nota'],
    idealFor: ['üçüncü dalga kafeler', 'özel filtre menüleri', 'ofis pour-over istasyonları'],
    packaging: '1 kg profesyonel paket / 500 g filtre odaklı format',
    b2bFit:
      'Hafif-orta yoğunluklu profiller isteyen, menüsünde filtre kahveye ciddi yer veren işletmeler için tasarlanmıştır.',
    imageKey: 'product-alto-valle',
    isFeatured: true,
  },
  {
    slug: 'casa-office-blend',
    name: 'Casa Office Blend',
    shortDescription: 'Ofis ve yüksek hacimli tüketim için dengeli, affedici profil.',
    origin: 'Venezüella merkezli harman, destekleyici Latin Amerika lotları',
    elevation: '1.200 – 1.600 m',
    roast: 'medium-dark',
    process: 'Yıkanmış ve yarı yıkanmış lot bileşimi',
    tastingNotes: ['sütlü çikolata', 'kavrulmuş fındık', 'hafif karamel', 'yumuşak bitiş'],
    idealFor: ['kurumsal ofisler', 'self-servis alanlar', 'yüksek hacimli restoran operasyonları'],
    packaging: '1 kg endüstriyel paket / 3 kg box çözümleri',
    b2bFit:
      'Bakım ve ekipman çeşitliliğine rağmen tutarlı sonuç vermek üzere tasarlanmış, geniş kitlelere hitap eden bir profil.',
    imageKey: 'product-casa-office',
    isFeatured: false,
  },
  {
    slug: 'nocturno-single-origin',
    name: 'Nocturno Single Origin',
    shortDescription: 'Gece servisi ve imza kokteyller için kompleks, koyu karakter.',
    origin: 'Venezüella, seçili single-origin lotlar',
    elevation: '1.500 – 1.900 m',
    roast: 'dark',
    process: 'Yıkanmış, yavaş kurutma',
    tastingNotes: ['bitter çikolata', 'pekmez', 'dumanlı alt tonlar', 'hafif baharat'],
    idealFor: ['kokteyl barlar', 'gece menüleri', 'tatlı eşleşmeleri', 'espresso martini reçeteleri'],
    packaging: '1 kg profesyonel paket',
    b2bFit:
      'Bar ve restoranlarda gece servisinde kahveyi sahnenin parçası hâline getirmek isteyen markalar için tasarlanmıştır.',
    imageKey: 'product-nocturno',
    isFeatured: true,
  },
];

