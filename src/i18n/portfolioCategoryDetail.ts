import type { HomePortfolioCategoryId } from '../data/homePortfolioByCategory';
import type { Locale } from './types';

export type PortfolioMicroTableRowIcon =
  | 'origin'
  | 'cupping'
  | 'volume'
  | 'trace'
  | 'harvest'
  | 'process'
  | 'price';

export type PortfolioCategorySection = {
  title: string;
  subtitle?: string;
  anchor?: string;
  introHeading?: string;
  paragraphs?: string[];
  bullets?: string[];
  aside?: { line1: string; line2: string; line3: string };
  cards?: { title: string; body: string }[];
  table?: { columns: [string, string, string]; rows: [string, string, string][] };
  microLayout?: 'comparison-table' | 'audience-cards' | 'brewing-cards';
  layout?: 'paired-bullet-cards';
  bulletCards?: { title: string; bullets: string[] }[];
  tableRowIcons?: PortfolioMicroTableRowIcon[];
  audienceCards?: { title: string; body: string }[];
  brewingCards?: { method: string; ratio: string; temp: string; grind: string }[];
  sectionTone?: 'default' | 'cream' | 'muted' | 'dark-moss' | 'brew';
};

export type PortfolioCategoryDetail = {
  badge?: string;
  heroSubtitle?: string;
  heroStats?: { value: string; label: string }[];
  lead: string;
  paragraphs: string[];
  quote?: { text: string; attribution?: string };
  highlights: { title: string; desc: string }[];
  sections?: PortfolioCategorySection[];
};

const tr: Record<HomePortfolioCategoryId, PortfolioCategoryDetail> = {
  'competition-lot': {
    badge: 'EICEV 2025 Kazananları',
    heroSubtitle: 'Yarışma Kazananlarından Seçme Kahveler',
    heroStats: [
      { value: '90+', label: 'Cupping Skoru' },
      { value: '4', label: 'Kazanan Üretici' },
      { value: '90', label: 'Minimum Puan' },
    ],
    lead: 'Yarışma kazananlarından seçme kahveler',
    paragraphs: [
      'Competition Lot, uluslararası kahve yarışmalarında uzman jüri tarafından en yüksek puanları alan, ödüllendirilmiş lotlardan oluşur. Her lot benzersiz bir tat profili ve hikâye taşır.',
      'SCA protokollerine göre yapılan cupping değerlendirmelerinden geçen bu kahveler, standart specialty segmentinin üzerinde bir kalite dilimini temsil eder. Los Andes olarak bu kategoride yalnızca titizlikle seçilmiş lotları sunarız.',
    ],
    highlights: [
      {
        title: 'Q Grader değerlendirmesi',
        desc: 'Uluslararası sertifikalı uzmanlar tarafından objektif kriterlerle skorlanır.',
      },
      {
        title: 'Sınırlı miktar',
        desc: 'Üretici başına yılda yalnızca küçük partiler; her çuval nadir sayılır.',
      },
      {
        title: 'Yarışma standartları',
        desc: 'Aroma, tat, gövde, asidite ve dengede jüri tarafından üst sıralarda yer almış kahveler.',
      },
      {
        title: 'Tam izlenebilirlik',
        desc: 'Çiftlikten fincana kadar belgelenmiş tedarik zinciri.',
      },
      {
        title: 'İnovatif işleme',
        desc: 'Honey, natural ve deneysel yöntemlerle zenginleştirilmiş karakter.',
      },
      {
        title: 'Üretici hikâyesi',
        desc: 'Her lotun arkasında yılların emeği ve adanmışlığı olan üretici aileleri vardır.',
      },
    ],
    sections: [
      {
        anchor: 'nedir',
        title: 'Competition Lot Nedir?',
        subtitle: 'En Yüksek Standartların Kahvesi',
        introHeading: 'Ödüllü Kahvelerin Zirvesi',
        paragraphs: [
          "Competition Lot, uluslararası kahve yarışmalarında Q Grader'lar (kalite sınıflandırıcılar) tarafından değerlendirilen ve en yüksek puanları alan kahvelerden oluşan özel bir kategoridir. Bu kahveler, standart specialty kahveden bile daha üstün kalite standartlarına sahiptir.",
          'Her Competition Lot kahvesi, SCA (Specialty Coffee Association) protokollerine göre yapılan kapsamlı cupping (tadım) değerlendirmelerinden geçer. 100 üzerinden en az 85+ puan alan kahveler bu kategoriye girer; Los Andes olarak yalnızca 88+ puanlı kahveleri Competition Lot olarak sunuyoruz.',
        ],
        bullets: [
          'Q Grader onaylı: Uluslararası sertifikalı uzmanlar tarafından değerlendirilir.',
          'Sınırlı miktar: Her lot yalnızca birkaç yüz kilogram ile sınırlıdır.',
          'Özel işleme: Deneyimsel ve geleneksel yöntemlerin en iyisi.',
          'Tam izlenebilirlik: Çiftlikten fincana kadar her adım belgelenir.',
        ],
        aside: { line1: 'EICEV', line2: '2025', line3: 'Café de Venezuela' },
      },
      {
        anchor: 'fark',
        title: 'Neden Farklıdır?',
        subtitle: "Competition Lot'u özel kılan unsurlar",
        cards: [
          {
            title: 'Yarışma standartları',
            body: 'Competition Lot kahveleri, uluslararası yarışmalarda jüri tarafından aroma, tat, gövde, asidite ve dengelilik gibi kriterlerde en yüksek puanları almıştır.',
          },
          {
            title: 'Bilimsel değerlendirme',
            body: "Her kahve, SCA standartlarına göre eğitimli Q Grader'lar tarafından kör tadım ile değerlendirilir; subjektif değil, objektif kriterler uygulanır.",
          },
          {
            title: 'Nadir ve değerli',
            body: 'Çok sınırlı miktarda üretilir; bir üretici yılda yalnızca birkaç çuval Competition Lot kalitesinde kahve üretebilir.',
          },
          {
            title: 'İnovatif işleme',
            body: 'Çoğu lot, geleneksel yıkamanın ötesinde honey, natural ve deneysel işleme teknikleriyle üretilir.',
          },
          {
            title: 'Özel mikro iklimler',
            body: 'Genellikle uygun rakım, toprak ve iklim koşullarına sahip seçkin parsellerden (micro lot) seçilir.',
          },
          {
            title: 'Üretici hikâyesi',
            body: 'Her Competition Lot kahvesinin arkasında kahvesine adanmış, yılların deneyimine sahip bir üretici ailesi vardır.',
          },
        ],
      },
      {
        anchor: 'kim',
        title: 'Kime Uygundur?',
        subtitle: "Competition Lot'un ideal müşterileri",
        cards: [
          {
            title: 'Barista yarışmacıları',
            body: 'World Barista Championship gibi uluslararası yarışmalara hazırlanan baristalar için jüriyi etkileyecek eşsiz tat profilleri sunar.',
          },
          {
            title: 'Premium kafeler',
            body: 'Müşterilerine en üst düzey kahve deneyimi sunmak isteyen specialty coffee shop’lar için menünün yıldızı olur.',
          },
          {
            title: 'Cupping etkinlikleri',
            body: 'Kahve tadım etkinlikleri, eğitimler ve workshop’lar için katılımcılara referans niteliğinde bir deneyim sunar.',
          },
          {
            title: 'Özel hediyeler',
            body: 'Kahve tutkunu sevdikleriniz için unutulmaz bir hediye; yalnızca kahve değil, bir deneyim ve hikâye sunar.',
          },
          {
            title: 'Kahve koleksiyonerleri',
            body: 'Dünyanın en iyi kahvelerini denemek ve koleksiyonlamak isteyen tutkunlar için vazgeçilmez bir segmenttir.',
          },
          {
            title: 'Kurumsal hediyelik',
            body: 'VIP müşterilere, ortaklara ve ekiplere özel bir jest için prestijli bir seçimdir.',
          },
        ],
      },
    ],
  },
  'micro-lot': {
    badge: 'Özel Seri',
    heroSubtitle:
      "Her fincan bir hikaye anlatır. Venezuela ve Honduras'ın seçkin çiftliklerinden gelen eşsiz kahve deneyimi.",
    lead: 'Tek parsel, tek hasat — sınırlı üretim',
    paragraphs: [
      'Micro Lot, belirli bir çiftliğin belirli bir bölümünden ve belirli bir hasat döneminden toplanan, sınırlı miktarda üretilen çekirdekleri ifade eder. Her lot kendi kimliğine sahiptir ve uçtan uca izlenebilir.',
      'Büyük ölçekli ticari üretimden farklı olarak toprak analizinden hasada, işlemeden kurutmaya her adım titizlikle takip edilir.',
    ],
    quote: {
      text: 'Micro Lot kahve, bir çiftçinin sanat eseridir. Her fincan, o toprağın, o iklimin ve o üreticinin elinin izini taşır.',
      attribution: 'Coffee Los Andes ekibi',
    },
    highlights: [
      {
        title: 'İzlenebilirlik',
        desc: 'Çiftlik, üretici ve koordinat düzeyinde şeffaflık.',
      },
      {
        title: 'Sınırlı üretim',
        desc: 'Parti tükendiğinde aynı lezzeti yeniden bulmak zordur.',
      },
      {
        title: 'Cupping skoru',
        desc: 'Micro lotlarımız yüksek cupping bandında; Grader süreçleriyle doğrulanır.',
      },
      {
        title: 'Özel işleme',
        desc: 'Washed, natural ve honey ile çeşidin karakteri öne çıkarılır.',
      },
      {
        title: 'Tek köken',
        desc: 'Bourbon, Geisha, Typica gibi özgün varyeteler; kendine özgü tadım profili.',
      },
      {
        title: 'Taze kavurma',
        desc: 'Talebe göre kavurma planı; fincana en taze haliyle ulaşma hedefi.',
      },
    ],
    sections: [
      {
        anchor: 'micro-karsilastirma',
        title: 'Micro Lot vs Specialty',
        microLayout: 'comparison-table',
        sectionTone: 'cream',
        tableRowIcons: ['cupping', 'harvest', 'volume', 'process', 'price', 'origin', 'process', 'cupping', 'trace', 'process'],
        table: {
          columns: ['Özellik', 'Micro Lot (84–89)', 'Specialty (84–86)'],
          rows: [
            ['Cupping Skoru', '84 – 89 puan', '80 – 83 puan'],
            ['Kalite Seviyesi', 'Yüksek kalite', 'İyi kalite'],
            ['Üretim Miktarı', 'Çok sınırlı (50–200 kg)', 'Sınırlı (500 kg – 2 ton)'],
            ['Screen Boyutu', 'Tek tip, kontrollü', 'Uniform, seçilmiş'],
            ['Fiyat Segmenti', 'Premium', 'Orta-üst'],
            ['Hedef Müşteri', 'Koleksiyonerler, özel kafeler', 'Kafeler, restoranlar, oteller'],
            ['Kullanım Alanı', 'Filtre kahve, cupping, yarışma', 'Espresso, filtre, blend'],
            ['Tadım Profili', 'Karmaşık, benzersiz notalar', 'Dengeli, klasik profil'],
            ['İzlenebilirlik', 'Tam (çiftlik seviyesi)', 'Bölge seviyesi'],
            ['İşleme Yöntemi', 'Özel / deneysel', 'Standart (Washed / Natural)'],
          ],
        },
      },
      {
        anchor: 'micro-fark-ozet',
        title: 'Özet karşılaştırma',
        microLayout: 'comparison-table',
        sectionTone: 'muted',
        tableRowIcons: ['cupping', 'volume', 'price', 'cupping'],
        table: {
          columns: ['Özellik', 'Micro Lot', 'Specialty'],
          rows: [
            ['Skor Farkı', '4–6 puan daha yüksek', 'Daha düşük skor'],
            ['Nadirlik', 'Daha nadir, sınırlı üretim', 'Daha yaygın'],
            ['Fiyat', '%30–50 daha pahalı', 'Daha ekonomik'],
            ['Tat', 'Daha kompleks, özgün', 'Daha dengeli, standart'],
          ],
        },
      },
      {
        anchor: 'micro-kitle',
        title: 'Kime Uygundur?',
        microLayout: 'audience-cards',
        sectionTone: 'muted',
        paragraphs: ['Micro Lot kahveler, kahveyi sadece bir içecek değil, bir deneyim olarak görenler için tasarlanmıştır:'],
        audienceCards: [
          {
            title: 'Kahve tutkunları',
            body: 'Köken, çeşit ve işleme farklarını deneyimlemek isteyenler.',
          },
          {
            title: 'Ev baristaları',
            body: 'V60, Chemex, AeroPress veya espresso ile evde profesyonel fincan hedefleyenler.',
          },
          {
            title: 'Hediye arayanlar',
            body: 'Özel günlerde nadir ve anlamlı hediye arayanlar.',
          },
          {
            title: 'Sürdürülebilirlik destekçileri',
            body: 'Doğrudan üreticiden alım ve adil ticareti önemseyenler.',
          },
        ],
      },
      {
        anchor: 'micro-demleme',
        title: 'Nasıl Demlenir?',
        microLayout: 'brewing-cards',
        sectionTone: 'brew',
        paragraphs: ['Micro Lot kahvelerin karakterini öne çıkarmak için önerilen demleme reçeteleri:'],
        brewingCards: [
          {
            method: 'V60 / Chemex',
            ratio: '1:16 (15 g kahve, 240 ml su)',
            temp: '92–94 °C',
            grind: 'Orta-ince öğütme',
          },
          {
            method: 'AeroPress',
            ratio: '1:15',
            temp: '85–90 °C',
            grind: 'Ters demleme yöntemi',
          },
          {
            method: 'French Press',
            ratio: '1:12 · 4 dk',
            temp: '94 °C',
            grind: 'Kaba öğütme',
          },
          {
            method: 'Espresso',
            ratio: '1:2 (18 g → 36 g)',
            temp: '93 °C',
            grind: 'İnce öğütme',
          },
        ],
      },
    ],
  },
  specialty: {
    badge: 'Premium Kalite',
    heroSubtitle:
      'Dünya çapında kabul görmüş kalite standartlarına sahip, en üst düzey kahve deneyimi.',
    heroStats: [{ value: '84–86', label: 'Cupping bandı' }],
    lead: 'SCA çerçevesinde premium Arabica',
    paragraphs: [
      'Specialty Coffee, Specialty Coffee Association (SCA) tarafından tanımlanan uluslararası standartlara göre cupping skoru 80 ve üzeri olan kahveleri ifade eder. Çekirdekten fincana her aşamada kusurlar minimumda tutulur; tutarlı, yüksek kaliteli bir fincan hedeflenir.',
      'Los Andes ürün portföyünde bu Specialty sayfasındaki yeşil çekirdekler, katalogdaki “SPECIALTY” segmentindeki tek köken lotları listeler; tipik cupping bandı 84–86’dır. Harman ve özel blend satırları ayrı “Specialty blend” kategorisindedir.',
    ],
    quote: {
      text: 'Specialty Coffee, çiftlikten fincana kadar herkesin adil bir şekilde kazandığı, kalitenin ön planda olduğu bir kahve kültürüdür.',
      attribution: 'Specialty Coffee Association',
    },
    highlights: [
      {
        title: 'Cupping skoru',
        desc: 'Q Grader değerlendirmesiyle lot bazında skorlanır.',
      },
      {
        title: 'Defect kontrolü',
        desc: 'Örneklemelerde kusur limitleri sıkı şekilde uygulanır.',
      },
      {
        title: 'Çeşit saflığı',
        desc: 'Bilinen Arabica varyeteleri; izlenebilir köken.',
      },
      {
        title: 'Nem ve ekran',
        desc: 'Ideal nem ve boyut sınıflandırması ile homojen parti.',
      },
      {
        title: 'Tutarlılık',
        desc: 'Aynı lot içinde tadım ve demleme sonuçları öngörülebilir.',
      },
      {
        title: 'Micro lot ilişkisi',
        desc: 'Tüm micro lotlar specialty’dir; specialty daha geniş ölçekte de olabilir.',
      },
    ],
    sections: [
      {
        title: 'Kalite Standartları',
        paragraphs: ['Bir kahvenin “Specialty” olarak sınıflandırılabilmesi için şu temel kriterleri karşılaması gerekir:'],
        bullets: [
          'Cupping skoru: Q Grader tarafından 80/100 veya üzeri (lot bazında).',
          'Defect kontrolü: 350g örnekte maksimum 5 defect; primary defects sıfır.',
          'Çeşit saflığı: Bilinen Arabica varyeteleri (Bourbon, Typica, Geisha, Caturra vb.).',
          'Nem oranı: %10-12 aralığı hedeflenir.',
          'Ekran boyutu: Standart screen sınıflandırması ile homojen parti.',
          'Tutarlılık: Aynı lot içinde tat profili ve demleme sonuçlarında stabilite.',
        ],
      },
      {
        title: 'Specialty Coffee Bölgelerimiz',
        bullets: [
          'Venezuela: Mérida, Táchira, Lara, Yaracuy, Carabobo, Miranda, Barinas',
          'Honduras: Trujillo, Copán, Marcala, Ocotepeque, Comayagua',
          'Kolombiya: Huila, Antioquia, Nariño, Cauca, Tolima',
        ],
      },
      {
        title: 'İşleme Yöntemleri',
        bullets: [
          'Washed: Temiz, parlak asitlik; çiçeksi ve meyveli notalar.',
          'Natural: Tatlı, yoğun meyve aromaları; şarapmsı notalar.',
          'Honey: Dengeli, karamelize tatlar; yumuşak gövde.',
        ],
      },
      {
        title: 'Specialty vs Commercial',
        table: {
          columns: ['Özellik', 'Specialty Coffee', 'Commercial Coffee'],
          rows: [
            ['Cupping Skoru', '84–86', '80–82'],
            ['Defect Oranı', '0-5 defect / 350g', '6+ defect / 350g'],
            ['Köken Bilgisi', 'Bölge, çiftlik, üretici', 'Genellikle sadece ülke'],
            ['Hasat', 'Elle seçme', 'Makine hasadı'],
            ['Çeşit', 'Saf Arabica varyeteleri', 'Karışım; Robusta içerebilir'],
            ['Fiyat', 'Premium', 'Ekonomik'],
          ],
        },
      },
      {
        title: 'Micro Lot ve Specialty İlişkisi',
        paragraphs: [
          'Önemli not: Tüm Micro Lot kahveler Specialty’dir; ancak tüm Specialty kahveler Micro Lot değildir.',
          'Micro Lot → Sınırlı üretim (10-100kg), tek çiftlik, tek hasat.',
          'Specialty → Daha geniş ölçekte de olabilir ama kalite standardı yüksektir.',
        ],
      },
      {
        title: 'Tadım Profilleri',
        bullets: [
          '80–82: Ticari yeşil çekirdek giriş bandı; Los Andes portföyünde “Commercial lot” sayfasında listelenir.',
          '84–86: Stabil premium specialty tek köken lotları; bu Specialty sayfasında listelenir.',
          '84–89: Micro lot bandı; köken ve işleme karakteri belirgin, kompleks fincan.',
          '90+: Competition ve üst segment; koleksiyon ve yarışma düzeyi.',
        ],
      },
    ],
  },
  'specialty-blend': {
    badge: 'Harmonik Lezzet',
    heroSubtitle:
      'En iyi özellikleri bir araya getiren, dengeli ve tutarlı kahve deneyimi. Her fincan bir sanat eseri.',
    lead: 'Ustalıkla harmanlanmış dengeli profiller',
    paragraphs: [
      'Specialty Blend, iki veya daha fazla köken veya varyetenin bilinçle bir araya getirilmesiyle oluşan, cupping skoru 80+ olan karışımlardır. Amaç, tek başlarına iyi olan çekirdekleri birleştirerek birlikte daha dengeli ve tatmin edici bir profil elde etmektir.',
      'Los Andes’te her blend seçim, cupping testleri, oranlama, kavurma ve harmonizasyon adımlarıyla geliştirilir; espresso ve sütlü içimler için özellikle uygundur.',
    ],
    quote: {
      text: 'Bir blend, birlikte dans eden kahvelerdir. Her biri kendi rolünü oynar ve birlikte bir senfoni oluştururlar.',
      attribution: 'Master roaster',
    },
    highlights: [
      {
        title: 'Denge',
        desc: 'Asidite, gövde ve tatlılık birbirini tamamlar.',
      },
      {
        title: 'Tutarlılık',
        desc: 'Mevsimsel dalgalanmalara karşı yıl boyu stabil profil.',
      },
      {
        title: 'Karmaşıklık',
        desc: 'Tek kökenin ötesinde çok katmanlı tadım.',
      },
      {
        title: 'Espresso uyumu',
        desc: 'Krema, gövde ve tat dengesi için blend yapısı idealdir.',
      },
    ],
    sections: [
      {
        title: 'Blend Oluşturma Süreci',
        paragraphs: ['Los Andes’te her blend titizlikle geliştirilir:'],
        bullets: [
          'Seçim: Uyumlu profillere sahip kahveler belirlenir.',
          'Test: Farklı kombinasyonlar cupping ile denenir.',
          'Oranlama: Optimal yüzde oranları belirlenir (%50/%50, %60/%40 vb.).',
          'Kavurma: Her bileşen kendi ideal profiline göre kavrulur.',
          'Harmonizasyon: Karıştırma ve dinlendirme ile lezzetler bütünleşir.',
        ],
      },
      {
        title: 'Blend vs Commercial Lot',
        table: {
          columns: ['Özellik', 'Blend', 'Commercial Lot'],
          rows: [
            ['Tadım Profili', 'Dengeli, tutarlı', 'Standart, operasyonel profil'],
            ['Mevsimsel Değişim', 'Minimum', 'Çok düşük; parti tutarlılığı öncelikli'],
            ['Espresso Uyumu', 'İdeal', 'Yüksek hacim ve otomasyon için uygun'],
            ['Karmaşıklık', 'Çok katmanlı', 'Daha sade, öngörülebilir'],
            ['Köken Hikayesi', "Master Blender'ın sanatı", 'Bölge / ticari kaynak odaklı'],
            ['En İyi Demleme', 'Espresso, Moka Pot', 'Espresso, toplu demleme, filtre'],
          ],
        },
      },
      {
        title: 'Blend Kime Uygundur?',
        bullets: [
          "Espresso severler: Blend'ler ideal krema ve tat dengesi sunar.",
          'Cafe ve restoranlar: Tutarlı profil müşteri memnuniyeti için kritiktir.',
          'Günlük tüketiciler: Her fincanda aynı kaliteyi isteyenler.',
          "Sütlü kahve sevenler: Blend'lerin dengesi sütle uyumludur.",
        ],
      },
    ],
  },
  'commercial-lot': {
    lead: 'Yüksek hacim ve öngörülebilir kalite',
    paragraphs: [
      'Commercial segment, kafeler, zincirler ve endüstriyel kullanım için ekonomik ve tutarlı kahve ihtiyacını karşılar. Los Andes kataloğunda bu sayfadaki lotlar 80–82 cupping bandındadır (segment: COMMERCIAL).',
      'Önceliğimiz partiler arası minimum varyasyon, kesintisiz tedarik ve operasyonel maliyetleri kontrol altında tutmaktır.',
    ],
    highlights: [
      {
        title: 'Tutarlı profil',
        desc: 'Müşteriniz her fincanda aynı beklenen karakteri alır.',
      },
      {
        title: 'Ölçeklenebilir tedarik',
        desc: 'Yüksek hacimli taleplere uygun planlama.',
      },
      {
        title: 'Operasyon dostu',
        desc: 'Espresso otomasyonu ve yoğun servise uyum.',
      },
      {
        title: 'Maliyet verimliliği',
        desc: 'Günlük tüketim için optimize edilmiş çözüm.',
      },
    ],
  },
  'roasted-coffee': {
    lead: 'Profesyonel kavurma profiliyle hazır ürün',
    paragraphs: [
      'Yeşil çekirdeğe ek olarak, belirlenmiş kavurma eğrileriyle hazırlanmış kahveler sunuyoruz. Espresso, filtre veya özel reçete için tutarlı ekstraksiyon ve müşteri deneyimi hedeflenir.',
      'Kahvehane, ofis ve perakende için paketleme ve profil seçenekleri talebe göre şekillenir; B2B ortaklarımızla uzun vadeli parti planlaması yapılır.',
    ],
    highlights: [
      {
        title: 'Profesyonel roast',
        desc: 'Kavurma ekibi ve kalite süreçleriyle uyumlu profiller.',
      },
      {
        title: 'Tutarlı ekstraksiyon',
        desc: 'Gün boyu aynı fincan deneyimine yaklaşmak için stabilize tat.',
      },
      {
        title: 'B2B esnekliği',
        desc: 'Özel etiket, parti büyüklüğü ve sevkiyat ritmi.',
      },
      {
        title: 'Kullanıma hazır',
        desc: 'Doğrudan satış veya hızlı devreye alma için pratik çözüm.',
      },
    ],
  },
};

const de: Record<HomePortfolioCategoryId, PortfolioCategoryDetail> = {
  'competition-lot': {
    badge: 'EICEV 2025 Gewinner',
    heroSubtitle: 'Ausgewählte Kaffees von Wettbewerbsgewinnern',
    heroStats: [
      { value: '90+', label: 'Cupping-Score' },
      { value: '10', label: 'Ausgezeichnete Produzenten' },
      { value: '88+', label: 'Mindestpunktzahl' },
    ],
    lead: 'Ausgezeichnete Lots von Wettbewerbsgewinnern',
    paragraphs: [
      'Competition Lots stammen von Kaffees, die in internationalen Wettbewerben von Fachjurys mit Spitzenpunkten bewertet wurden. Jedes Lot trägt ein eigenes Sensorikprofil und eine eigene Geschichte.',
      'Nach SCA-Protokollen cupped und gegenüber Standard-Specialty noch strenger ausgewählt — bei Los Andes listen wir nur sorgfältig kuratierte Competition Lots.',
    ],
    highlights: [
      { title: 'Q Grader', desc: 'Objektive Bewertung durch zertifizierte Experten.' },
      { title: 'Kleine Mengen', desc: 'Nur begrenzte Säcke pro Ernte und Produzent.' },
      { title: 'Wettkampf-Niveau', desc: 'Höchste Punktzahlen in Aroma, Körper, Säure und Balance.' },
      { title: 'Rückverfolgbarkeit', desc: 'Dokumentierte Kette vom Betrieb bis zur Tasse.' },
      { title: 'Innovative Verarbeitung', desc: 'Natural, Honey und experimentelle Aufbereitung.' },
      { title: 'Produzentenstory', desc: 'Hinter jedem Lot stehen engagierte Familienbetriebe.' },
    ],
    sections: [
      {
        anchor: 'nedir',
        title: 'Was ist ein Competition Lot?',
        subtitle: 'Kaffee auf höchstem Niveau',
        introHeading: 'Die Spitze prämierter Kaffees',
        paragraphs: [
          'Competition Lots sind eine besondere Kategorie: Kaffees, die in internationalen Wettbewerben von Q Graders bewertet wurden und zu den höchsten Punktzahlen zählen. Sie liegen über dem Standard-Specialty-Segment.',
          'Jeder Competition-Lot-Kaffee durchläuft umfassende Cuppings nach SCA-Protokoll. Ab 85+ Punkten gilt die Kategorie grundsätzlich; bei Los Andes listen wir Competition Lots ab 88+.',
        ],
        bullets: [
          'Q-Grader-bestätigt: Bewertung durch international zertifizierte Experten.',
          'Streng limitiert: oft nur wenige hundert Kilogramm pro Lot.',
          'Besondere Aufbereitung: das Beste aus experimentellen und klassischen Methoden.',
          'Volle Rückverfolgbarkeit: jeder Schritt von der Farm bis zur Tasse dokumentiert.',
        ],
        aside: { line1: 'EICEV', line2: '2025', line3: 'Café de Venezuela' },
      },
      {
        anchor: 'fark',
        title: 'Warum ist es anders?',
        subtitle: 'Was Competition Lots besonders macht',
        cards: [
          {
            title: 'Wettkampf-Standards',
            body: 'Diese Kaffees haben in internationalen Wettbewerben in Aroma, Geschmack, Körper, Säure und Balance Spitzennoten erhalten.',
          },
          {
            title: 'Wissenschaftliche Bewertung',
            body: 'Q Graders bewerten nach SCA-Standards per Blind-Cupping — objektive Kriterien statt reiner Meinung.',
          },
          {
            title: 'Rar und wertvoll',
            body: 'Sehr kleine Mengen; ein Produzent kann pro Jahr nur wenige Säcke in Competition-Lot-Qualität erzeugen.',
          },
          {
            title: 'Innovative Verarbeitung',
            body: 'Oft Honey, Natural und experimentelle Aufbereitung jenseits klassischer Washed-Verfahren.',
          },
          {
            title: 'Besondere Mikroklimen',
            body: 'Typisch aus Parzellen mit idealer Höhe, Boden und Klima — oft Micro Lots.',
          },
          {
            title: 'Geschichte der Produzenten',
            body: 'Hinter jedem Lot stehen Familien mit jahrelanger Hingabe an ihren Kaffee.',
          },
        ],
      },
      {
        anchor: 'kim',
        title: 'Für wen geeignet?',
        subtitle: 'Typische Käufer von Competition Lots',
        cards: [
          {
            title: 'Barista-Wettkämpfer',
            body: 'Für internationale Championships: Profile, die Juroren überzeugen können.',
          },
          {
            title: 'Premium-Cafés',
            body: 'Specialty-Shops, die ein klares Highlight auf der Karte anbieten möchten.',
          },
          {
            title: 'Cupping-Events',
            body: 'Referenz-Erlebnis für Verkostungen, Schulungen und Workshops.',
          },
          {
            title: 'Besondere Geschenke',
            body: 'Für Kaffeeliebhaber: nicht nur ein Produkt, sondern Geschichte und Erlebnis.',
          },
          {
            title: 'Sammler',
            body: 'Wer die besten und seltensten Lots probieren möchte.',
          },
          {
            title: 'Corporate Gifting',
            body: 'Wertschätzendes Geschenk für VIP-Kunden, Partner und Teams.',
          },
        ],
      },
    ],
  },
  'micro-lot': {
    lead: 'Ein Parzelle, eine Ernte — limitiert',
    paragraphs: [
      'Micro Lots stammen von klar abgegrenzten Parzellen und Erntefenstern. Jedes Lot hat eine eigene Identität und ist lückenlos rückverfolgbar.',
      'Im Gegensatz zu großvolumigem Handel werden Boden, Ernte und Aufbereitung Schritt für Schritt begleitet.',
    ],
    quote: {
      text: 'Micro-Lot-Kaffee ist wie ein Kunstwerk des Bauern — jede Tasse trägt Spuren von Boden, Klima und Handwerk.',
      attribution: 'Coffee Los Andes',
    },
    highlights: [
      { title: 'Traceability', desc: 'Farm, Produzent und Herkunft transparent.' },
      { title: 'Limitiert', desc: 'Wenn die Partie weg ist, ist das Profil schwer zu replizieren.' },
      { title: 'Cupping', desc: 'Hohe Bewertungsbänder, durch Grader-Prozesse abgesichert.' },
      { title: 'Aufbereitung', desc: 'Washed, Natural, Honey für klaren Charakter.' },
      { title: 'Single Origin', desc: 'Bourbon, Geisha, Typica u. a. mit eigenem Profil.' },
      { title: 'Frisch geröstet', desc: 'Röstplan nach Bedarf für maximale Frische.' },
    ],
    sections: [
      {
        anchor: 'micro-karsilastirma',
        title: 'Micro Lot vs. Specialty',
        microLayout: 'comparison-table',
        sectionTone: 'cream',
        tableRowIcons: ['cupping', 'harvest', 'volume', 'process', 'price', 'origin', 'process', 'cupping', 'trace', 'process'],
        table: {
          columns: ['Merkmal', 'Micro Lot (84–89)', 'Specialty (84–86)'],
          rows: [
            ['Cupping-Score', '84 – 89 Punkte', '80 – 83 Punkte'],
            ['Qualitätsstufe', 'Hohe Qualität', 'Gute Qualität'],
            ['Produktionsmenge', 'Sehr begrenzt (50–200 kg)', 'Begrenzt (500 kg – 2 t)'],
            ['Screen-Größe', 'Einheitlich, kontrolliert', 'Uniform, selektiert'],
            ['Preissegment', 'Premium', 'Mittel-Oberklasse'],
            ['Zielkunde', 'Sammler, besondere Cafés', 'Cafés, Restaurants, Hotels'],
            ['Einsatzbereich', 'Filterkaffee, Cupping, Wettbewerb', 'Espresso, Filter, Blend'],
            ['Geschmacksprofil', 'Komplex, unverwechselbare Noten', 'Ausgewogen, klassisches Profil'],
            ['Rückverfolgbarkeit', 'Vollständig (auf Farm-Ebene)', 'Regional'],
            ['Verarbeitung', 'Speziell / experimentell', 'Standard (Washed / Natural)'],
          ],
        },
      },
      {
        anchor: 'micro-fark-ozet',
        title: 'Kurzvergleich',
        microLayout: 'comparison-table',
        sectionTone: 'muted',
        tableRowIcons: ['cupping', 'volume', 'price', 'cupping'],
        table: {
          columns: ['Merkmal', 'Micro Lot', 'Specialty'],
          rows: [
            ['Score-Unterschied', '4–6 Punkte höher', 'Niedrigere Punktzahl'],
            ['Seltenheit', 'Seltener, limitierte Produktion', 'Verbreiteter'],
            ['Preis', '30–50 % teurer', 'Wirtschaftlicher'],
            ['Geschmack', 'Komplexer, charaktervoller', 'Ausgewogener, standardisierter'],
          ],
        },
      },
      {
        anchor: 'micro-kitle',
        title: 'Für wen?',
        microLayout: 'audience-cards',
        sectionTone: 'muted',
        paragraphs: [
          'Micro Lots richten sich an alle, die Kaffee nicht nur als Getränk, sondern als Erlebnis sehen:',
        ],
        audienceCards: [
          {
            title: 'Kaffeeliebhaber',
            body: 'Wer Herkunft, Sorte und Aufbereitung bewusst verkosten möchte.',
          },
          {
            title: 'Home-Baristas',
            body: 'V60, Chemex, AeroPress oder Espresso zu Hause auf hohem Niveau.',
          },
          {
            title: 'Geschenksuchende',
            body: 'Besondere Anlässe mit seltenem, bedeutungsvollem Kaffee.',
          },
          {
            title: 'Nachhaltigkeitsfans',
            body: 'Direkter Bezug zu Produzenten und fairen Handelswegen.',
          },
        ],
      },
      {
        anchor: 'micro-demleme',
        title: 'Zubereitung',
        microLayout: 'brewing-cards',
        sectionTone: 'brew',
        paragraphs: [
          'Empfohlene Rezepte, um das Profil von Micro Lots zur Geltung zu bringen:',
        ],
        brewingCards: [
          {
            method: 'V60 / Chemex',
            ratio: '1:16 (15 g Kaffee, 240 ml Wasser)',
            temp: '92–94 °C',
            grind: 'Mittel-fein',
          },
          {
            method: 'AeroPress',
            ratio: '1:15',
            temp: '85–90 °C',
            grind: 'Mittel; inverted Methode',
          },
          {
            method: 'French Press',
            ratio: '1:12 · 4 Min.',
            temp: '94 °C',
            grind: 'Grob',
          },
          {
            method: 'Espresso',
            ratio: '1:2 (18 g → 36 g)',
            temp: '93 °C',
            grind: 'Fein',
          },
        ],
      },
    ],
  },
  specialty: {
    lead: 'Premium Arabica im SCA-Rahmen',
    paragraphs: [
      'Specialty Coffee bezeichnet nach SCA-Definition Kaffees ab Cupping-Score 80+. Vom Rohkaffee bis zur Tasse werden Defekte minimiert und Qualität konsistent gehalten.',
      'Im Los-Andes-Portfolio listet diese Specialty-Seite Einzelursprungs-Lots mit Segment „SPECIALTY“; typisches Cupping-Band 84–86. Bewusste Blends finden Sie unter „Specialty blend“.',
    ],
    quote: {
      text: 'Specialty Coffee ist eine Kultur, in der Qualität zählt und alle in der Kette fair partizipieren.',
      attribution: 'Specialty Coffee Association',
    },
    highlights: [
      { title: 'Cupping', desc: 'Bewertung pro Lot durch Q Graders.' },
      { title: 'Defekte', desc: 'Strenge Grenzen in der Probenprüfung.' },
      { title: 'Sortenreinheit', desc: 'Arabica-Varietäten mit klarer Herkunft.' },
      { title: 'Feuchtigkeit & Sieb', desc: 'Homogene Partien durch Sortierung.' },
      { title: 'Konsistenz', desc: 'Vorhersehbare Tasse innerhalb des Lots.' },
      { title: 'Micro Lot', desc: 'Jeder Micro Lot ist Specialty — Specialty kann größer sein.' },
    ],
  },
  'specialty-blend': {
    lead: 'Meisterlich gemischt für Balance',
    paragraphs: [
      'Specialty Blends kombinieren zwei oder mehr Ursprünge/Varietäten bewusst zu Mischungen ab Cupping 80+. Ziel ist ein harmonischeres Gesamtprofil als die Einzelteile allein.',
      'Bei Los Andes entstehen Blends über Auswahl, Cupping-Tests, Ratio, Röstung und Harmonisierung — ideal für Espresso und Milchgetränke.',
    ],
    quote: {
      text: 'Ein Blend ist wie ein Tanz — jede Komponente hat ihre Rolle und zusammen entsteht die Symphonie.',
      attribution: 'Master Roaster',
    },
    highlights: [
      { title: 'Balance', desc: 'Säure, Körper und Süße ergänzen sich.' },
      { title: 'Konstanz', desc: 'Stabiles Profil über das Jahr.' },
      { title: 'Komplexität', desc: 'Mehrschichtiges Aroma statt Einlinien-Profil.' },
      { title: 'Espresso', desc: 'Crema, Body und Geschmack optimal unterstützt.' },
    ],
  },
  'commercial-lot': {
    lead: 'Hohes Volumen, planbare Qualität',
    paragraphs: [
      'Die Commercial-Linie bedient hohen Bedarf in Cafés, Ketten und Gastronomie mit wirtschaftlichem, gleichbleibendem Profil. Die hier gelisteten Lots entsprechen im Katalog dem Segment COMMERCIAL mit typischem Cupping-Band 80–82.',
      'Fokus: geringe Schwankung zwischen Partien, zuverlässige Lieferung und operative Kostenkontrolle.',
    ],
    highlights: [
      { title: 'Gleiches Profil', desc: 'Gleiche Erwartung in jeder Tasse.' },
      { title: 'Skalierung', desc: 'Planung für große Abnahmemengen.' },
      { title: 'Betrieb', desc: 'Geeignet für Espresso-Automaten und hohen Durchsatz.' },
      { title: 'Effizienz', desc: 'Optimiert für täglichen Großverbrauch.' },
    ],
  },
  'roasted-coffee': {
    lead: 'Premium-Arabica aus den Hochlagen Venezuelas — sorgfältig ausgewählt, schonend geröstet.',
    paragraphs: [
      'LOS ANDES BLEND SELECTION wird aus sorgfältig ausgewählten 100 % Arabica-Bohnen hergestellt, die in den Hochlagen des venezolanischen Bundesstaates Lara wachsen – einer der bedeutendsten Kaffeeanbauregionen des Landes. Die Kaffeepflanzen gedeihen in 1.400 bis über 1.680 Metern Höhe; das besondere Mikroklima, die mineralreichen Böden und die langsame Reifung sorgen für außergewöhnliche Qualität.',
      'LOS ANDES arbeitet direkt mit ausgewählten Kaffeeproduzenten und Farmen in Venezuela zusammen — für höchste Qualität, Rückverfolgbarkeit, faire Partnerschaften und sorgfältige Auswahl jeder Ernte.',
      'Unsere exklusive Blend Selection kombiniert Arabica-Varietäten wie Colombia 27 und Caturra. Natural- und Washed-Aufbereitung vereinen intensive Süße, feine Fruchtigkeit und elegante Klarheit zu einem ausgewogenen Espresso.',
      'Alle Bohnen werden traditionell und schonend im Trommelröstverfahren geröstet — für optimale Aromaentwicklung und reduzierte Bitterstoffe.',
    ],
    highlights: [
      { title: 'Hoher Ursprung', desc: '1.400–1.680 m, Bundesstaat Lara, Venezuela.' },
      { title: 'Direkte Zusammenarbeit', desc: 'Einkauf am Ursprung, volle Rückverfolgbarkeit und faire Partnerschaft.' },
      { title: 'Schonende Röstung', desc: 'Trommelröstverfahren für optimale Aromaentwicklung.' },
      { title: 'Vielseitig einsetzbar', desc: 'Espresso, Cappuccino, Latte — Vollautomat und Siebträger.' },
      { title: 'Komplexes Aromaprofil', desc: 'Dunkle Schokolade, Haselnuss und Karamell — vollmundig mit samtiger Crema.' },
      { title: '100 % Arabica', desc: 'Reine Arabica-Varietäten Colombia 27 und Caturra aus venezolanischen Hochlagen.' },
    ],
    sections: [
      {
        anchor: 'profil-und-zubereitung',
        title: '',
        layout: 'paired-bullet-cards',
        bulletCards: [
          {
            title: 'Geschmacksprofil',
            bullets: [
              'Dunkle Schokolade',
              'Geröstete Haselnuss',
              'Karamell',
              'Vollmundiger Körper',
              'Samtige Crema',
              'Langer, harmonischer Nachgeschmack',
            ],
          },
          {
            title: 'Geeignet für',
            bullets: [
              'Espresso',
              'Caffè Crema',
              'Cappuccino',
              'Latte Macchiato',
              'Vollautomaten',
              'Siebträgermaschinen',
            ],
          },
        ],
      },
      {
        anchor: 'philosophie',
        title: 'Die Philosophie von LOS ANDES',
        paragraphs: [
          'LOS ANDES steht für authentischen venezolanischen Spitzenkaffee. Unser Ziel ist es, die außergewöhnliche Qualität venezolanischer Kaffeefarmen direkt nach Europa zu bringen und unseren Kunden ein nachhaltiges, transparentes und hochwertiges Kaffeeerlebnis zu bieten.',
        ],
      },
    ],
  },
};

const en: Record<HomePortfolioCategoryId, PortfolioCategoryDetail> = {
  'competition-lot': {
    badge: 'EICEV 2025 winners',
    heroSubtitle: 'Selected coffees from competition winners',
    heroStats: [
      { value: '90+', label: 'Cupping score' },
      { value: '10', label: 'Award-winning producers' },
      { value: '88+', label: 'Minimum score' },
    ],
    lead: 'Award-level lots from competition winners',
    paragraphs: [
      'Competition lots are coffees that earned top scores from expert juries in international competitions. Each lot carries a unique flavour story.',
      'Cupped to SCA protocols and curated above standard specialty — at Los Andes we only list competition lots that pass our strict selection.',
    ],
    highlights: [
      { title: 'Q Grader scoring', desc: 'Objective evaluation by certified judges.' },
      { title: 'Limited volume', desc: 'Only small batches per producer and season.' },
      { title: 'Competition bar', desc: 'Top marks across aroma, body, acidity and balance.' },
      { title: 'Full traceability', desc: 'Documented chain from farm to cup.' },
      { title: 'Innovative processing', desc: 'Natural, honey and experimental lots.' },
      { title: 'Producer story', desc: 'Behind every lot are dedicated farming families.' },
    ],
    sections: [
      {
        anchor: 'nedir',
        title: 'What is a Competition Lot?',
        subtitle: 'Coffee at the highest standard',
        introHeading: 'The peak of award-winning coffees',
        paragraphs: [
          'A Competition Lot is a special category: coffees evaluated by Q Graders in international competitions that achieve the highest scores. They sit above everyday specialty coffee in quality expectations.',
          'Every Competition Lot goes through full SCA cupping protocols. While 85+ can define the category broadly, at Los Andes we only offer Competition Lots from 88+ upward.',
        ],
        bullets: [
          'Q Grader–backed: scored by internationally certified experts.',
          'Strictly limited: often only a few hundred kilograms per lot.',
          'Distinct processing: the best of experimental and traditional methods.',
          'Full traceability: every step from farm to cup is documented.',
        ],
        aside: { line1: 'EICEV', line2: '2025', line3: 'Café de Venezuela' },
      },
      {
        anchor: 'fark',
        title: 'Why is it different?',
        subtitle: 'What makes a Competition Lot stand out',
        cards: [
          {
            title: 'Competition standards',
            body: 'These coffees earned top jury marks internationally across aroma, flavour, body, acidity and balance.',
          },
          {
            title: 'Scientific evaluation',
            body: 'Trained Q Graders assess to SCA standards using blind cupping — objective criteria, not opinion alone.',
          },
          {
            title: 'Rare and valuable',
            body: 'Very small volumes; a producer may only yield a few bags at this quality in a year.',
          },
          {
            title: 'Innovative processing',
            body: 'Many lots use honey, natural and experimental techniques beyond classic washed processing.',
          },
          {
            title: 'Distinct microclimates',
            body: 'Often sourced from parcels with ideal altitude, soil and climate — frequently micro lots.',
          },
          {
            title: 'Producer story',
            body: 'Behind every lot is a farming family with years of dedication to their craft.',
          },
        ],
      },
      {
        anchor: 'kim',
        title: 'Who is it for?',
        subtitle: 'Ideal customers for Competition Lots',
        cards: [
          {
            title: 'Competition baristas',
            body: 'For championships such as WBC: profiles built to impress judges.',
          },
          {
            title: 'Premium cafés',
            body: 'Specialty shops that want a clear “hero” coffee on the menu.',
          },
          {
            title: 'Cupping events',
            body: 'Reference-tasting experiences for training, workshops and public cuppings.',
          },
          {
            title: 'Special gifts',
            body: 'For coffee lovers: not just a bag, but a story and experience.',
          },
          {
            title: 'Collectors',
            body: 'For those who seek the rarest and best lots in the world.',
          },
          {
            title: 'Corporate gifting',
            body: 'A prestigious choice for VIP clients, partners and teams.',
          },
        ],
      },
    ],
  },
  'micro-lot': {
    lead: 'Single parcel, single harvest — limited',
    paragraphs: [
      'A micro lot comes from a defined farm section and harvest window. Each lot has its own identity and is traceable end to end.',
      'Unlike bulk commercial coffee, soil, picking and processing are followed step by step.',
    ],
    quote: {
      text: 'Micro-lot coffee is the grower’s artwork — every cup carries soil, climate and craft.',
      attribution: 'Coffee Los Andes',
    },
    highlights: [
      { title: 'Traceability', desc: 'Farm, producer and coordinates where relevant.' },
      { title: 'Limited run', desc: 'When the lot is gone, the profile is hard to repeat.' },
      { title: 'Cupping band', desc: 'High scores validated through grading workflows.' },
      { title: 'Processing', desc: 'Washed, natural and honey to express variety.' },
      { title: 'Single origin', desc: 'Distinct varieties such as Bourbon, Geisha, Typica.' },
      { title: 'Fresh roast', desc: 'Roast planning aligned with your demand.' },
    ],
    sections: [
      {
        anchor: 'micro-karsilastirma',
        title: 'Micro lot vs specialty',
        microLayout: 'comparison-table',
        sectionTone: 'cream',
        tableRowIcons: ['cupping', 'harvest', 'volume', 'process', 'price', 'origin', 'process', 'cupping', 'trace', 'process'],
        table: {
          columns: ['Feature', 'Micro lot (84–89)', 'Specialty (84–86)'],
          rows: [
            ['Cupping score', '84 – 89 points', '80 – 83 points'],
            ['Quality tier', 'High quality', 'Good quality'],
            ['Production volume', 'Very limited (50–200 kg)', 'Limited (500 kg – 2 tonnes)'],
            ['Screen size', 'Single grade, tightly controlled', 'Uniform, selected'],
            ['Price segment', 'Premium', 'Upper mid-range'],
            ['Target customer', 'Collectors, speciality cafés', 'Cafés, restaurants, hotels'],
            ['Usage', 'Filter coffee, cupping, competition', 'Espresso, filter, blends'],
            ['Cup profile', 'Complex, unique notes', 'Balanced, classic profile'],
            ['Traceability', 'Full (farm-level)', 'Regional level'],
            ['Processing', 'Special / experimental', 'Standard (washed / natural)'],
          ],
        },
      },
      {
        anchor: 'micro-fark-ozet',
        title: 'At a glance',
        microLayout: 'comparison-table',
        sectionTone: 'muted',
        tableRowIcons: ['cupping', 'volume', 'price', 'cupping'],
        table: {
          columns: ['Feature', 'Micro lot', 'Specialty'],
          rows: [
            ['Score gap', '4–6 points higher', 'Lower score'],
            ['Rarity', 'Rarer, limited production', 'More common'],
            ['Price', '30–50% more expensive', 'More economical'],
            ['Taste', 'More complex, distinctive', 'More balanced, standard'],
          ],
        },
      },
      {
        anchor: 'micro-kitle',
        title: 'Who is it for?',
        microLayout: 'audience-cards',
        sectionTone: 'muted',
        paragraphs: [
          'Micro lots are crafted for people who see coffee as an experience, not just a drink:',
        ],
        audienceCards: [
          {
            title: 'Coffee enthusiasts',
            body: 'Exploring origin, variety and processing differences.',
          },
          {
            title: 'Home baristas',
            body: 'V60, Chemex, AeroPress or espresso with café-level ambition at home.',
          },
          {
            title: 'Gift givers',
            body: 'Rare, meaningful coffee for special occasions.',
          },
          {
            title: 'Sustainability-minded buyers',
            body: 'Direct trade and fair relationships with producers matter to you.',
          },
        ],
      },
      {
        anchor: 'micro-demleme',
        title: 'How to brew',
        microLayout: 'brewing-cards',
        sectionTone: 'brew',
        paragraphs: [
          'Starting recipes to bring out the character of micro lots:',
        ],
        brewingCards: [
          {
            method: 'V60 / Chemex',
            ratio: '1:16 (15 g coffee, 240 ml water)',
            temp: '92–94 °C',
            grind: 'Medium-fine',
          },
          {
            method: 'AeroPress',
            ratio: '1:15',
            temp: '85–90 °C',
            grind: 'Medium; inverted brew',
          },
          {
            method: 'French press',
            ratio: '1:12 · 4 min',
            temp: '94 °C',
            grind: 'Coarse',
          },
          {
            method: 'Espresso',
            ratio: '1:2 (18 g → 36 g)',
            temp: '93 °C',
            grind: 'Fine',
          },
        ],
      },
    ],
  },
  specialty: {
    lead: 'Premium Arabica within SCA standards',
    paragraphs: [
      'Specialty coffee is defined by the SCA as scoring 80+ on the cupping table. From green bean to cup, defects are kept low and quality consistent.',
      'On this Specialty page we list green lots tagged SPECIALTY in the master catalogue (typical cupping band 84–86). Intentional blends live under Specialty blend.',
    ],
    quote: {
      text: 'Specialty coffee is a culture where quality comes first and everyone in the chain earns fairly.',
      attribution: 'Specialty Coffee Association',
    },
    highlights: [
      { title: 'Cupping score', desc: 'Each lot scored by Q Graders.' },
      { title: 'Defect control', desc: 'Strict limits on sample grading.' },
      { title: 'Variety clarity', desc: 'Known Arabica varieties with traceable origin.' },
      { title: 'Moisture & screen', desc: 'Homogeneous batches through sorting.' },
      { title: 'Consistency', desc: 'Predictable cup within the same lot.' },
      { title: 'Micro lot link', desc: 'Every micro lot is specialty; specialty can scale larger.' },
    ],
  },
  'specialty-blend': {
    lead: 'Master-crafted balanced profiles',
    paragraphs: [
      'Specialty blends combine two or more origins or varieties on purpose, scoring 80+ as a blend. The goal is a more balanced, satisfying cup than the parts alone.',
      'At Los Andes blends are built through selection, cupping trials, ratio work, roasting and harmonisation — especially suited to espresso and milk drinks.',
    ],
    quote: {
      text: 'A blend is a dance — each coffee plays its part and together they form a symphony.',
      attribution: 'Master roaster',
    },
    highlights: [
      { title: 'Balance', desc: 'Acidity, body and sweetness support each other.' },
      { title: 'Consistency', desc: 'Stable profile despite seasonal swings.' },
      { title: 'Complexity', desc: 'Layered flavour beyond a single origin line.' },
      { title: 'Espresso fit', desc: 'Crema, body and taste tuned for the bar.' },
    ],
  },
  'commercial-lot': {
    lead: 'High volume, predictable quality',
    paragraphs: [
      'The commercial segment serves cafés, chains and foodservice with economical, steady coffee. Lots on this page are COMMERCIAL rows in our catalogue, typically cupping 80–82.',
      'We prioritise low batch-to-batch variance, reliable supply and operational cost control.',
    ],
    highlights: [
      { title: 'Steady profile', desc: 'Guests get the expected cup every time.' },
      { title: 'Scalable supply', desc: 'Planning for large recurring volumes.' },
      { title: 'Operations-friendly', desc: 'Works with espresso automation and high throughput.' },
      { title: 'Cost efficiency', desc: 'Optimised for everyday high consumption.' },
    ],
  },
  'roasted-coffee': {
    lead: 'Professionally roasted, ready to serve',
    paragraphs: [
      'Beyond green coffee we offer roasted coffees with defined curves for espresso, filter or bespoke recipes — aiming for repeatable extraction.',
      'Packaging and profile are tailored with B2B partners; long-term lot planning available.',
    ],
    highlights: [
      { title: 'Professional roast', desc: 'Aligned with quality and sensory workflows.' },
      { title: 'Stable extraction', desc: 'Same cup experience across service hours.' },
      { title: 'B2B flexibility', desc: 'Private label, batch size and delivery cadence.' },
      { title: 'Ready to use', desc: 'Quick launch for retail and hospitality.' },
    ],
  },
};

const fr: Record<HomePortfolioCategoryId, PortfolioCategoryDetail> = {
  'competition-lot': {
    badge: 'Lauréats EICEV 2025',
    heroSubtitle: 'Cafés sélectionnés parmi les lauréats de compétition',
    heroStats: [
      { value: '90+', label: 'Score cupping' },
      { value: '10', label: 'Producteurs primés' },
      { value: '88+', label: 'Score minimum' },
    ],
    lead: 'Lots primés issus des compétitions',
    paragraphs: [
      'Les competition lots sont des cafés ayant obtenu les meilleures notes devant un jury international. Chaque lot a une histoire sensorielle unique.',
      'Catés selon les protocoles SCA et sélectionnés au-dessus du segment specialty standard.',
    ],
    highlights: [
      { title: 'Q Grader', desc: 'Notation objective par des experts certifiés.' },
      { title: 'Volumes limités', desc: 'Petites quantités par producteur et saison.' },
      { title: 'Niveau compétition', desc: 'Arôme, corps, acidité et équilibre au sommet.' },
      { title: 'Traçabilité', desc: 'Chaîne documentée de la ferme à la tasse.' },
      { title: 'Traitement', desc: 'Natural, honey et lots expérimentaux.' },
      { title: 'Producteurs', desc: 'Des familles engagées derrière chaque lot.' },
    ],
    sections: [
      {
        anchor: 'nedir',
        title: "Qu'est-ce qu'un Competition Lot ?",
        subtitle: 'Le café au plus haut niveau',
        introHeading: 'Le sommet des cafés primés',
        paragraphs: [
          "Les Competition Lots sont une catégorie à part : cafés évalués par des Q Graders dans des compétitions internationales et classés parmi les meilleures notes. Ils dépassent le specialty « standard ».",
          'Chaque lot subit des cuppings complets selon les protocoles SCA. Au-delà de 85+ pour la catégorie au sens large, Los Andes ne propose des Competition Lots qu’à partir de 88+.',
        ],
        bullets: [
          'Validé Q Grader : évaluation par des experts certifiés internationalement.',
          'Très limité : souvent seulement quelques centaines de kilos par lot.',
          'Traitement soigné : le meilleur des méthodes expérimentales et classiques.',
          'Traçabilité totale : chaque étape de la ferme à la tasse est documentée.',
        ],
        aside: { line1: 'EICEV', line2: '2025', line3: 'Café de Venezuela' },
      },
      {
        anchor: 'fark',
        title: 'Pourquoi est-ce différent ?',
        subtitle: 'Ce qui rend le Competition Lot unique',
        cards: [
          {
            title: 'Standards de compétition',
            body: 'Ces cafés ont obtenu les meilleures notes du jury sur l’arôme, la saveur, le corps, l’acidité et l’équilibre.',
          },
          {
            title: 'Évaluation scientifique',
            body: 'Les Q Graders appliquent les critères SCA en cupping à l’aveugle — des règles objectives, pas seulement une opinion.',
          },
          {
            title: 'Rare et précieux',
            body: 'Des volumes très faibles ; un producteur ne peut produire que quelques sacs à ce niveau par an.',
          },
          {
            title: 'Traitement innovant',
            body: 'Souvent honey, natural et méthodes expérimentales au-delà du lavé classique.',
          },
          {
            title: 'Microclimats singuliers',
            body: 'Issus de parcelles à altitude, sol et climat idéaux — souvent des micro lots.',
          },
          {
            title: 'Histoire du producteur',
            body: 'Derrière chaque lot, une famille engagée depuis des années.',
          },
        ],
      },
      {
        anchor: 'kim',
        title: 'Pour qui ?',
        subtitle: 'Les clients idéaux des Competition Lots',
        cards: [
          {
            title: 'Baristas en compétition',
            body: 'Pour les championnats internationaux : des profils capables de convaincre un jury.',
          },
          {
            title: 'Cafés premium',
            body: 'Pour les coffee shops qui veulent une « étoile » claire sur la carte.',
          },
          {
            title: 'Événements cupping',
            body: 'Une référence pour formations, ateliers et dégustations publiques.',
          },
          {
            title: 'Cadeaux d’exception',
            body: 'Pour les passionnés : plus qu’un sac, une histoire et une expérience.',
          },
          {
            title: 'Collectionneurs',
            body: 'Pour ceux qui cherchent les lots les plus rares et les meilleurs au monde.',
          },
          {
            title: 'Cadeaux corporate',
            body: 'Un choix prestigieux pour clients VIP, partenaires et équipes.',
          },
        ],
      },
    ],
  },
  'micro-lot': {
    lead: 'Une parcelle, une récolte — limité',
    paragraphs: [
      'Un micro lot provient d’une section de ferme et d’une fenêtre de récolte précises. Identité propre et traçabilité bout à bout.',
      'Chaque étape — sol, cueillette, traitement — est suivie avec rigueur.',
    ],
    quote: {
      text: 'Le micro lot est l’œuvre du producteur — chaque tasse porte le terroir et le savoir-faire.',
      attribution: 'Coffee Los Andes',
    },
    highlights: [
      { title: 'Traçabilité', desc: 'Ferme, producteur, coordonnées si pertinent.' },
      { title: 'Série limitée', desc: 'Profil difficile à reproduire une fois épuisé.' },
      { title: 'Cupping', desc: 'Hautes notes validées par nos processus.' },
      { title: 'Traitement', desc: 'Lavé, naturel, honey selon le cépage.' },
      { title: 'Origine unique', desc: 'Bourbon, Geisha, Typica, etc.' },
      { title: 'Torréfaction', desc: 'Plan adapté à votre demande.' },
    ],
    sections: [
      {
        anchor: 'micro-karsilastirma',
        title: 'Micro lot vs specialty',
        microLayout: 'comparison-table',
        sectionTone: 'cream',
        tableRowIcons: ['cupping', 'harvest', 'volume', 'process', 'price', 'origin', 'process', 'cupping', 'trace', 'process'],
        table: {
          columns: ['Critère', 'Micro lot (84–89)', 'Specialty (84–86)'],
          rows: [
            ['Score cupping', '84 – 89 points', '80 – 83 points'],
            ['Niveau qualité', 'Haute qualité', 'Bonne qualité'],
            ['Volume de production', 'Très limité (50–200 kg)', 'Limité (500 kg – 2 t)'],
            ['Calibre (screen)', 'Homogène, contrôlé', 'Uniforme, sélectionné'],
            ['Segment prix', 'Premium', 'Milieu-haut de gamme'],
            ['Client cible', 'Collectionneurs, cafés d’exception', 'Cafés, restaurants, hôtels'],
            ['Usage', 'Café filtre, cupping, compétition', 'Espresso, filtre, blend'],
            ['Profil en tasse', 'Complexe, notes uniques', 'Équilibré, profil classique'],
            ['Traçabilité', 'Complète (niveau ferme)', 'Niveau région'],
            ['Traitement', 'Spécial / expérimental', 'Standard (lavé / naturel)'],
          ],
        },
      },
      {
        anchor: 'micro-fark-ozet',
        title: 'En bref',
        microLayout: 'comparison-table',
        sectionTone: 'muted',
        tableRowIcons: ['cupping', 'volume', 'price', 'cupping'],
        table: {
          columns: ['Critère', 'Micro lot', 'Specialty'],
          rows: [
            ['Écart de score', '4–6 points plus haut', 'Score plus bas'],
            ['Rareté', 'Plus rare, production limitée', 'Plus répandu'],
            ['Prix', '30–50 % plus cher', 'Plus économique'],
            ['Goût', 'Plus complexe, distinctif', 'Plus équilibré, standard'],
          ],
        },
      },
      {
        anchor: 'micro-kitle',
        title: 'Pour qui ?',
        microLayout: 'audience-cards',
        sectionTone: 'muted',
        paragraphs: [
          'Les micro lots s’adressent à celles et ceux qui voient le café comme une expérience, pas seulement une boisson :',
        ],
        audienceCards: [
          {
            title: 'Passionnés',
            body: 'Explorer origine, variété et traitement avec curiosité.',
          },
          {
            title: 'Baristas à domicile',
            body: 'V60, Chemex, AeroPress ou espresso avec ambition « café de spécialité ».',
          },
          {
            title: 'Cadeaux',
            body: 'Un café rare et significatif pour les moments importants.',
          },
          {
            title: 'Engagement durable',
            body: 'Achat direct et relations équitables avec les producteurs.',
          },
        ],
      },
      {
        anchor: 'micro-demleme',
        title: 'Comment préparer',
        microLayout: 'brewing-cards',
        sectionTone: 'brew',
        paragraphs: [
          'Recettes de départ pour révéler le caractère des micro lots :',
        ],
        brewingCards: [
          {
            method: 'V60 / Chemex',
            ratio: '1:16 (15 g café, 240 ml d’eau)',
            temp: '92–94 °C',
            grind: 'Moyen-fin',
          },
          {
            method: 'AeroPress',
            ratio: '1:15',
            temp: '85–90 °C',
            grind: 'Moyen ; méthode inversée',
          },
          {
            method: 'Cafetière à piston',
            ratio: '1:12 · 4 min',
            temp: '94 °C',
            grind: 'Gros',
          },
          {
            method: 'Espresso',
            ratio: '1:2 (18 g → 36 g)',
            temp: '93 °C',
            grind: 'Fin',
          },
        ],
      },
    ],
  },
  specialty: {
    lead: 'Arabica premium selon le cadre SCA',
    paragraphs: [
      'Le specialty coffee désigne les cafés notés 80+ selon la SCA. Des défauts minimisés et une qualité stable de la cerise à la tasse.',
      'Sur cette page Specialty figurent les lots verts segment SPECIALTY du catalogue (bande cupping typique 84–86). Les blends dédiés sont sous Specialty blend.',
    ],
    quote: {
      text: 'Le specialty est une culture où la qualité prime et la chaîne est équitable.',
      attribution: 'Specialty Coffee Association',
    },
    highlights: [
      { title: 'Score cupping', desc: 'Chaque lot noté par des Q Graders.' },
      { title: 'Défauts', desc: 'Seuils stricts sur les échantillons.' },
      { title: 'Variété', desc: 'Arabica connue et origine traçable.' },
      { title: 'Humidité & tamis', desc: 'Lots homogènes.' },
      { title: 'Cohérence', desc: 'Tasse prévisible dans le même lot.' },
      { title: 'Micro lot', desc: 'Tout micro lot est specialty ; specialty peut être plus grand.' },
    ],
  },
  'specialty-blend': {
    lead: 'Assemblages équilibrés et maîtrisés',
    paragraphs: [
      'Les blends specialty mélangent au moins deux origines ou variétés, score 80+ pour le mélange. Objectif : une tasse plus harmonieuse que les composants seuls.',
      'Sélection, tests, ratios, torréfaction et harmonisation — idéal espresso et boissons lactées.',
    ],
    quote: {
      text: 'Un blend est une danse — chaque café joue sa partition et ensemble c’est une symphonie.',
      attribution: 'Maître torréfacteur',
    },
    highlights: [
      { title: 'Équilibre', desc: 'Acidité, corps et douceur complémentaires.' },
      { title: 'Constance', desc: 'Profil stable sur l’année.' },
      { title: 'Complexité', desc: 'Arômes multicouches.' },
      { title: 'Espresso', desc: 'Crème, corps et goût au bar.' },
    ],
  },
  'commercial-lot': {
    lead: 'Grand volume, qualité prévisible',
    paragraphs: [
      'Segment destiné aux cafés, chaînes et restauration : profil économique et régulier. Les lots de cette page sont des lignes COMMERCIAL du catalogue, typiquement 80–82 en cupping.',
      'Priorité : faible variance entre lots, approvisionnement fiable et maîtrise des coûts.',
    ],
    highlights: [
      { title: 'Profil stable', desc: 'Même attente à chaque tasse.' },
      { title: 'Échelle', desc: 'Volumes récurrents planifiables.' },
      { title: 'Exploitation', desc: 'Adapté aux débits élevés et automatisation.' },
      { title: 'Efficacité', desc: 'Optimisé pour la consommation quotidienne.' },
    ],
  },
  'roasted-coffee': {
    lead: 'Torréfié pro, prêt à servir',
    paragraphs: [
      'Au-delà du vert, nous proposons des cafés torréfiés avec courbes définies — espresso, filtre ou recettes sur mesure.',
      'Conditionnement et profil adaptés aux partenaires B2B ; planification de lots sur la durée.',
    ],
    highlights: [
      { title: 'Torréfaction pro', desc: 'Alignée qualité et sensorielle.' },
      { title: 'Extraction', desc: 'Stabilité sur la journée de service.' },
      { title: 'Flex B2B', desc: 'Marque propre, taille de lot, cadence.' },
      { title: 'Prêt à l’emploi', desc: 'Mise en vente ou service rapide.' },
    ],
  },
};

const es: Record<HomePortfolioCategoryId, PortfolioCategoryDetail> = {
  'competition-lot': {
    badge: 'Ganadores EICEV 2025',
    heroSubtitle: 'Cafés seleccionados de ganadores de competición',
    heroStats: [
      { value: '90+', label: 'Puntuación cupping' },
      { value: '10', label: 'Productores premiados' },
      { value: '88+', label: 'Puntuación mínima' },
    ],
    lead: 'Lotes premiados de competiciones',
    paragraphs: [
      'Los competition lots son cafés que obtuvieron las mejores puntuaciones ante jurados internacionales. Cada lote tiene una historia sensorial única.',
      'Cata según protocolos SCA y selección por encima del specialty estándar.',
    ],
    highlights: [
      { title: 'Q Grader', desc: 'Evaluación objetiva por expertos certificados.' },
      { title: 'Volumen limitado', desc: 'Pocas sacas por productor y cosecha.' },
      { title: 'Nivel competición', desc: 'Aroma, cuerpo, acidez y equilibrio punteros.' },
      { title: 'Trazabilidad', desc: 'Cadena documentada de finca a taza.' },
      { title: 'Proceso', desc: 'Natural, honey y lotes experimentales.' },
      { title: 'Productores', desc: 'Familias dedicadas detrás de cada lote.' },
    ],
    sections: [
      {
        anchor: 'nedir',
        title: '¿Qué es un Competition Lot?',
        subtitle: 'Café en el más alto estándar',
        introHeading: 'La cima de los cafés premiados',
        paragraphs: [
          'Un Competition Lot es una categoría especial: cafés evaluados por Q Graders en competiciones internacionales con las puntuaciones más altas. Superan al specialty cotidiano en exigencia de calidad.',
          'Cada lote pasa cuppings completos según protocolos SCA. Aunque 85+ puede abrir la categoría en sentido amplio, en Los Andes solo ofrecemos Competition Lots desde 88+.',
        ],
        bullets: [
          'Respaldado por Q Grader: puntuación por expertos certificados a nivel internacional.',
          'Muy limitado: a menudo solo unos cientos de kilos por lote.',
          'Proceso destacado: lo mejor de métodos experimentales y tradicionales.',
          'Trazabilidad total: cada paso de finca a taza documentado.',
        ],
        aside: { line1: 'EICEV', line2: '2025', line3: 'Café de Venezuela' },
      },
      {
        anchor: 'fark',
        title: '¿Por qué es diferente?',
        subtitle: 'Lo que hace único al Competition Lot',
        cards: [
          {
            title: 'Estándares de competición',
            body: 'Estos cafés obtuvieron las mejores notas del jurado en aroma, sabor, cuerpo, acidez y equilibrio.',
          },
          {
            title: 'Evaluación científica',
            body: 'Q Graders califican según estándares SCA con cata a ciegas: criterios objetivos, no solo opinión.',
          },
          {
            title: 'Raro y valioso',
            body: 'Volúmenes muy pequeños; un productor puede obtener solo unas pocas sacas de esta calidad al año.',
          },
          {
            title: 'Procesamiento innovador',
            body: 'Muchos lotes usan honey, natural y técnicas experimentales más allá del lavado clásico.',
          },
          {
            title: 'Microclimas singulares',
            body: 'Suelen provenir de parcelas con altitud, suelo y clima ideales — a menudo micro lotes.',
          },
          {
            title: 'Historia del productor',
            body: 'Detrás de cada lote hay una familia con años de dedicación.',
          },
        ],
      },
      {
        anchor: 'kim',
        title: '¿Para quién es?',
        subtitle: 'Clientes ideales para Competition Lot',
        cards: [
          {
            title: 'Baristas de competición',
            body: 'Para campeonatos como el WBC: perfiles pensados para impresionar al jurado.',
          },
          {
            title: 'Cafés premium',
            body: 'Para specialty shops que quieren un “estrella” claro en la carta.',
          },
          {
            title: 'Eventos de cupping',
            body: 'Experiencia de referencia para formaciones, talleres y catas públicas.',
          },
          {
            title: 'Regalos especiales',
            body: 'Para amantes del café: no solo una bolsa, sino historia y experiencia.',
          },
          {
            title: 'Coleccionistas',
            body: 'Para quienes buscan los lotes más raros y mejores del mundo.',
          },
          {
            title: 'Regalos corporativos',
            body: 'Una opción prestigiosa para clientes VIP, socios y equipos.',
          },
        ],
      },
    ],
  },
  'micro-lot': {
    lead: 'Una parcela, una cosecha — limitado',
    paragraphs: [
      'Un micro lote proviene de una sección de finca y ventana de cosecha definidas. Identidad propia y trazabilidad de extremo a extremo.',
      'Suelo, recolección y beneficio seguidos con rigor, a diferencia del volumen comercial masivo.',
    ],
    quote: {
      text: 'El micro lote es la obra del productor — cada taza lleva suelo, clima y oficio.',
      attribution: 'Coffee Los Andes',
    },
    highlights: [
      { title: 'Trazabilidad', desc: 'Finca, productor y coordenadas si aplica.' },
      { title: 'Edición limitada', desc: 'Perfil difícil de repetir al agotarse.' },
      { title: 'Cupping', desc: 'Altas puntuaciones validadas en proceso.' },
      { title: 'Beneficio', desc: 'Lavado, natural, honey según variedad.' },
      { title: 'Origen único', desc: 'Bourbon, Geisha, Typica, etc.' },
      { title: 'Tueste', desc: 'Plan alineado a tu demanda.' },
    ],
    sections: [
      {
        anchor: 'micro-karsilastirma',
        title: 'Micro lote vs specialty',
        microLayout: 'comparison-table',
        sectionTone: 'cream',
        tableRowIcons: ['cupping', 'harvest', 'volume', 'process', 'price', 'origin', 'process', 'cupping', 'trace', 'process'],
        table: {
          columns: ['Criterio', 'Micro lote (84–89)', 'Specialty (84–86)'],
          rows: [
            ['Puntuación cupping', '84 – 89 puntos', '80 – 83 puntos'],
            ['Nivel de calidad', 'Alta calidad', 'Buena calidad'],
            ['Volumen de producción', 'Muy limitado (50–200 kg)', 'Limitado (500 kg – 2 t)'],
            ['Tamaño de screen', 'Uniforme, controlado', 'Uniforme, seleccionado'],
            ['Segmento de precio', 'Premium', 'Medio-alto'],
            ['Cliente objetivo', 'Coleccionistas, cafés especiales', 'Cafés, restaurantes, hoteles'],
            ['Uso', 'Café filtro, cupping, competición', 'Espresso, filtro, blend'],
            ['Perfil de taza', 'Complejo, notas únicas', 'Equilibrado, perfil clásico'],
            ['Trazabilidad', 'Total (nivel finca)', 'Nivel regional'],
            ['Proceso', 'Especial / experimental', 'Estándar (lavado / natural)'],
          ],
        },
      },
      {
        anchor: 'micro-fark-ozet',
        title: 'En resumen',
        microLayout: 'comparison-table',
        sectionTone: 'muted',
        tableRowIcons: ['cupping', 'volume', 'price', 'cupping'],
        table: {
          columns: ['Criterio', 'Micro lote', 'Specialty'],
          rows: [
            ['Diferencia de puntuación', '4–6 puntos más alta', 'Puntuación más baja'],
            ['Rareza', 'Más raro, producción limitada', 'Más común'],
            ['Precio', '30–50 % más caro', 'Más económico'],
            ['Sabor', 'Más complejo, distintivo', 'Más equilibrado, estándar'],
          ],
        },
      },
      {
        anchor: 'micro-kitle',
        title: '¿Para quién?',
        microLayout: 'audience-cards',
        sectionTone: 'muted',
        paragraphs: [
          'Los micro lotes están pensados para quienes ven el café como una experiencia, no solo una bebida:',
        ],
        audienceCards: [
          {
            title: 'Entusiastas',
            body: 'Explorar origen, variedad y proceso con curiosidad.',
          },
          {
            title: 'Baristas en casa',
            body: 'V60, Chemex, AeroPress o espresso con ambición de cafetería.',
          },
          {
            title: 'Regalos',
            body: 'Café raro y significativo para ocasiones especiales.',
          },
          {
            title: 'Sostenibilidad',
            body: 'Compra directa y relaciones justas con productores.',
          },
        ],
      },
      {
        anchor: 'micro-demleme',
        title: 'Cómo prepararlo',
        microLayout: 'brewing-cards',
        sectionTone: 'brew',
        paragraphs: [
          'Recetas base para sacar el carácter de los micro lotes:',
        ],
        brewingCards: [
          {
            method: 'V60 / Chemex',
            ratio: '1:16 (15 g café, 240 ml agua)',
            temp: '92–94 °C',
            grind: 'Molienda medio-fina',
          },
          {
            method: 'AeroPress',
            ratio: '1:15',
            temp: '85–90 °C',
            grind: 'Media; método invertido',
          },
          {
            method: 'Prensa francesa',
            ratio: '1:12 · 4 min',
            temp: '94 °C',
            grind: 'Gruesa',
          },
          {
            method: 'Espresso',
            ratio: '1:2 (18 g → 36 g)',
            temp: '93 °C',
            grind: 'Fina',
          },
        ],
      },
    ],
  },
  specialty: {
    lead: 'Arabica premium bajo estándares SCA',
    paragraphs: [
      'El specialty coffee se define con puntuación 80+ según la SCA. Defectos minimizados y calidad estable de la cereza a la taza.',
      'En esta página Specialty se listan los lotes verdes con segmento SPECIALTY del catálogo (banda típica de cata 84–86). Las mezclas intencionadas están en Specialty blend.',
    ],
    quote: {
      text: 'El specialty es una cultura donde la calidad manda y la cadena es justa.',
      attribution: 'Specialty Coffee Association',
    },
    highlights: [
      { title: 'Puntuación', desc: 'Cada lote evaluado por Q Graders.' },
      { title: 'Defectos', desc: 'Límites estrictos en muestras.' },
      { title: 'Variedad', desc: 'Arabica conocida y origen trazable.' },
      { title: 'Humedad y tamiz', desc: 'Lotes homogéneos.' },
      { title: 'Consistencia', desc: 'Taza predecible dentro del lote.' },
      { title: 'Micro lote', desc: 'Todo micro lote es specialty; specialty puede ser mayor.' },
    ],
  },
  'specialty-blend': {
    lead: 'Mezclas equilibradas y trabajadas',
    paragraphs: [
      'Los blends specialty combinan dos o más orígenes o variedades con intención, 80+ como mezcla. Objetivo: una taza más armónica que las partes solas.',
      'Selección, pruebas de cata, ratios, tueste y armonización — ideal para espresso y leche.',
    ],
    quote: {
      text: 'Un blend es un baile — cada café cumple su rol y juntos forman una sinfonía.',
      attribution: 'Maestro tostador',
    },
    highlights: [
      { title: 'Equilibrio', desc: 'Acidez, cuerpo y dulzor complementarios.' },
      { title: 'Constancia', desc: 'Perfil estable durante el año.' },
      { title: 'Complejidad', desc: 'Capas de aroma más allá de un solo origen.' },
      { title: 'Espresso', desc: 'Crema, cuerpo y sabor en barra.' },
    ],
  },
  'commercial-lot': {
    lead: 'Alto volumen, calidad predecible',
    paragraphs: [
      'Segmento para cafeterías, cadenas y restauración: perfil económico y estable. Los lotes de esta página son filas COMMERCIAL del catálogo, típicamente 80–82 en cata.',
      'Prioridad: poca variación entre lotes, suministro fiable y control de coste operativo.',
    ],
    highlights: [
      { title: 'Perfil estable', desc: 'La misma expectativa en cada taza.' },
      { title: 'Escala', desc: 'Volúmenes recurrentes planificables.' },
      { title: 'Operación', desc: 'Apto para alto caudal y automatización.' },
      { title: 'Eficiencia', desc: 'Optimizado para consumo diario alto.' },
    ],
  },
  'roasted-coffee': {
    lead: 'Tostado profesional, listo para servir',
    paragraphs: [
      'Además del verde ofrecemos café tostado con curvas definidas — espresso, filtro o recetas a medida — buscando extracción repetible.',
      'Envase y perfil acordados con socios B2B; planificación de lotes a largo plazo.',
    ],
    highlights: [
      { title: 'Tueste pro', desc: 'Alineado a calidad y sensorial.' },
      { title: 'Extracción', desc: 'Estabilidad a lo largo del servicio.' },
      { title: 'Flex B2B', desc: 'Marca propia, tamaño de lote, cadencia.' },
      { title: 'Listo', desc: 'Arranque rápido en retail y hostelería.' },
    ],
  },
};

const ru: Record<HomePortfolioCategoryId, PortfolioCategoryDetail> = {
  'competition-lot': {
    badge: 'Победители EICEV 2025',
    heroSubtitle: 'Отборный кофе от победителей соревнований',
    heroStats: [
      { value: '90+', label: 'Рейтинг каппинга' },
      { value: '10', label: 'Призовых производителей' },
      { value: '88+', label: 'Минимальная оценка' },
    ],
    lead: 'Призовые лоты от победителей соревнований',
    paragraphs: [
      'Конкурсные лоты — это кофе, получивший высшие оценки от экспертного жюри на международных соревнованиях. Каждый лот несёт уникальную вкусовую историю.',
      'Прошедший каппинг по протоколам SCA и отобранный выше стандартного specialty — в Los Andes мы включаем в список только конкурсные лоты, прошедшие строгий отбор.',
    ],
    highlights: [
      { title: 'Оценка Q Grader', desc: 'Объективная оценка сертифицированными экспертами.' },
      { title: 'Ограниченный объём', desc: 'Только небольшие партии от каждого производителя.' },
      { title: 'Конкурсная планка', desc: 'Высший балл по аромату, телу, кислотности и балансу.' },
      { title: 'Полная прослеживаемость', desc: 'Задокументированная цепочка от фермы до чашки.' },
      { title: 'Инновационный процессинг', desc: 'Natural, honey и экспериментальные лоты.' },
      { title: 'История производителя', desc: 'За каждым лотом стоят преданные своему делу фермерские семьи.' },
    ],
    sections: [
      {
        anchor: 'nedir',
        title: 'Что такое конкурсный лот?',
        subtitle: 'Кофе высочайшего уровня',
        introHeading: 'Пик призового кофе',
        paragraphs: [
          'Конкурсный лот — особая категория: кофе, оценённый Q Graders на международных соревнованиях с высочайшими результатами. Он стоит выше обычного specialty по стандартам качества.',
          'Каждый конкурсный лот проходит полные протоколы каппинга SCA. При том что 85+ широко определяет категорию, в Los Andes мы предлагаем только лоты от 88+ и выше.',
        ],
        bullets: [
          'Подтверждено Q Grader: оценка международно сертифицированными экспертами.',
          'Строго ограничено: нередко лишь несколько сотен килограммов на лот.',
          'Особый процессинг: лучшее из экспериментальных и традиционных методов.',
          'Полная прослеживаемость: каждый шаг от фермы до чашки задокументирован.',
        ],
        aside: { line1: 'EICEV', line2: '2025', line3: 'Café de Venezuela' },
      },
      {
        anchor: 'fark',
        title: 'Чем он отличается?',
        subtitle: 'Что выделяет конкурсный лот',
        cards: [
          { title: 'Конкурсные стандарты', body: 'Эти сорта кофе получили высшие оценки жюри по аромату, вкусу, телу, кислотности и балансу.' },
          { title: 'Научная оценка', body: 'Обученные Q Graders оценивают по стандартам SCA в слепом каппинге — объективные критерии, а не только мнение.' },
          { title: 'Редкий и ценный', body: 'Очень небольшие объёмы; производитель может получить лишь несколько мешков такого качества в год.' },
          { title: 'Инновационный процессинг', body: 'Многие лоты используют honey, natural и экспериментальные технологии помимо классической мойки.' },
          { title: 'Особые микроклиматы', body: 'Часто источником служат участки с идеальной высотой, почвой и климатом — нередко микро-лоты.' },
          { title: 'История производителя', body: 'За каждым лотом стоит фермерская семья с многолетней преданностью своему ремеслу.' },
        ],
      },
      {
        anchor: 'kim',
        title: 'Для кого?',
        subtitle: 'Идеальные покупатели конкурсных лотов',
        cards: [
          { title: 'Соревновательные бариста', body: 'Для чемпионатов WBC: профили, созданные впечатлять судей.' },
          { title: 'Премиальные кафе', body: 'Specialty кафе, желающие иметь чёткий «героический» кофе в меню.' },
          { title: 'Каппинг-мероприятия', body: 'Эталонные дегустации для обучения, мастер-классов и открытых каппингов.' },
          { title: 'Особые подарки', body: 'Для любителей кофе: не просто пакет, а история и опыт.' },
          { title: 'Коллекционеры', body: 'Для тех, кто ищет редчайшие и лучшие лоты в мире.' },
          { title: 'Корпоративные подарки', body: 'Престижный выбор для VIP-клиентов, партнёров и команд.' },
        ],
      },
    ],
  },
  'micro-lot': {
    lead: 'Один участок, один урожай — ограниченный',
    paragraphs: [
      'Микро-лот происходит из определённой секции фермы и конкретного окна сбора урожая. У каждого лота своя идентичность и полная прослеживаемость.',
      'В отличие от массового коммерческого кофе, почва, сбор и процессинг отслеживаются пошагово.',
    ],
    quote: { text: 'Кофе микро-лот — это произведение искусства фермера: в каждой чашке — почва, климат и мастерство.', attribution: 'Coffee Los Andes' },
    highlights: [
      { title: 'Прослеживаемость', desc: 'Ферма, производитель и координаты.' },
      { title: 'Ограниченный тираж', desc: 'Когда лот заканчивается, профиль сложно повторить.' },
      { title: 'Диапазон каппинга', desc: 'Высокие оценки, подтверждённые через грейдинг.' },
      { title: 'Процессинг', desc: 'Washed, natural и honey для выражения сорта.' },
      { title: 'Единственное происхождение', desc: 'Особые сорта — Bourbon, Geisha, Typica.' },
      { title: 'Свежая обжарка', desc: 'Планирование обжарки под ваш спрос.' },
    ],
    sections: [
      {
        anchor: 'micro-karsilastirma',
        title: 'Микро-лот vs specialty',
        microLayout: 'comparison-table',
        sectionTone: 'cream',
        tableRowIcons: ['cupping', 'harvest', 'volume', 'process', 'price', 'origin', 'process', 'cupping', 'trace', 'process'],
        table: {
          columns: ['Параметр', 'Микро-лот (84–89)', 'Specialty (84–86)'],
          rows: [
            ['Рейтинг каппинга', '84–89 баллов', '80–83 балла'],
            ['Уровень качества', 'Высокое качество', 'Хорошее качество'],
            ['Объём производства', 'Очень ограниченный (50–200 кг)', 'Ограниченный (500 кг – 2 т)'],
            ['Размер скрина', 'Единый класс, строгий контроль', 'Однородный, отборный'],
            ['Ценовой сегмент', 'Премиум', 'Верхняя средняя цена'],
            ['Целевой покупатель', 'Коллекционеры, specialty кафе', 'Кафе, рестораны, отели'],
            ['Использование', 'Фильтр, каппинг, соревнования', 'Эспрессо, фильтр, бленды'],
            ['Профиль чашки', 'Сложный, уникальные ноты', 'Сбалансированный, классический профиль'],
            ['Прослеживаемость', 'Полная (уровень фермы)', 'Региональный уровень'],
            ['Процессинг', 'Специальный / экспериментальный', 'Стандартный (washed / natural)'],
          ],
        },
      },
      {
        anchor: 'micro-fark-ozet',
        title: 'Вкратце',
        microLayout: 'comparison-table',
        sectionTone: 'muted',
        tableRowIcons: ['cupping', 'volume', 'price', 'cupping'],
        table: {
          columns: ['Параметр', 'Микро-лот', 'Specialty'],
          rows: [
            ['Разница в оценке', 'На 4–6 баллов выше', 'Более низкая оценка'],
            ['Редкость', 'Редкий, ограниченное производство', 'Более распространённый'],
            ['Цена', 'На 30–50% дороже', 'Более экономичный'],
            ['Вкус', 'Более сложный, выразительный', 'Более сбалансированный, стандартный'],
          ],
        },
      },
      {
        anchor: 'micro-kitle',
        title: 'Для кого?',
        microLayout: 'audience-cards',
        sectionTone: 'muted',
        paragraphs: ['Микро-лоты созданы для людей, воспринимающих кофе как опыт, а не просто напиток:'],
        audienceCards: [
          { title: 'Любители кофе', body: 'Исследование различий происхождения, сорта и процессинга.' },
          { title: 'Домашние бариста', body: 'V60, Chemex, AeroPress или эспрессо с амбициями кафе-уровня дома.' },
          { title: 'Дарители подарков', body: 'Редкий, значимый кофе для особых случаев.' },
          { title: 'Покупатели с осознанным выбором', body: 'Прямая торговля и честные отношения с производителями важны для вас.' },
        ],
      },
      {
        anchor: 'micro-demleme',
        title: 'Как заваривать',
        microLayout: 'brewing-cards',
        sectionTone: 'brew',
        paragraphs: ['Стартовые рецепты для раскрытия характера микро-лотов:'],
        brewingCards: [
          { method: 'V60 / Chemex', ratio: '1:16 (15 г кофе, 240 мл воды)', temp: '92–94 °C', grind: 'Средне-мелкий' },
          { method: 'AeroPress', ratio: '1:15', temp: '85–90 °C', grind: 'Средний; перевёрнутый метод' },
          { method: 'Французский пресс', ratio: '1:12 · 4 мин', temp: '94 °C', grind: 'Крупный' },
          { method: 'Эспрессо', ratio: '1:2 (18 г → 36 г)', temp: '93 °C', grind: 'Мелкий' },
        ],
      },
    ],
  },
  specialty: {
    lead: 'Премиальная арабика по стандартам SCA',
    paragraphs: [
      'SCA определяет specialty кофе как набравший 80+ на каппинг-столе. От зелёного зерна до чашки дефекты минимизированы, а качество стабильно.',
      'На этой странице Specialty мы перечисляем зелёные лоты с тегом SPECIALTY в основном каталоге (типичный диапазон каппинга 84–86). Преднамеренные бленды находятся в разделе Specialty blend.',
    ],
    quote: { text: 'Specialty кофе — это культура, где качество на первом месте, а все участники цепочки получают справедливое вознаграждение.', attribution: 'Specialty Coffee Association' },
    highlights: [
      { title: 'Рейтинг каппинга', desc: 'Каждый лот оценён Q Graders.' },
      { title: 'Контроль дефектов', desc: 'Строгие пределы при грейдинге образцов.' },
      { title: 'Чистота сорта', desc: 'Известные сорта арабики с прослеживаемым происхождением.' },
      { title: 'Влажность и скрин', desc: 'Однородные партии через сортировку.' },
      { title: 'Стабильность', desc: 'Предсказуемая чашка в рамках одного лота.' },
      { title: 'Связь с микро-лотом', desc: 'Каждый микро-лот является specialty; specialty может масштабироваться.' },
    ],
  },
  'specialty-blend': {
    lead: 'Мастерски созданные сбалансированные профили',
    paragraphs: [
      'Specialty бленды целенаправленно комбинируют два или более происхождения или сорта, набирая 80+ как бленд. Цель — более сбалансированная и удовлетворяющая чашка, чем из отдельных компонентов.',
      'В Los Andes бленды создаются через отбор, пробы каппинга, работу с соотношениями, обжарку и гармонизацию — особенно подходят для эспрессо и напитков с молоком.',
    ],
    quote: { text: 'Бленд — это танец: каждый кофе играет свою роль, и вместе они образуют симфонию.', attribution: 'Мастер-обжарщик' },
    highlights: [
      { title: 'Баланс', desc: 'Кислотность, тело и сладость поддерживают друг друга.' },
      { title: 'Стабильность', desc: 'Стабильный профиль несмотря на сезонные колебания.' },
      { title: 'Сложность', desc: 'Многослойный вкус за пределами одного происхождения.' },
      { title: 'Для эспрессо', desc: 'Крема, тело и вкус настроены для бара.' },
    ],
  },
  'commercial-lot': {
    lead: 'Большой объём, предсказуемое качество',
    paragraphs: [
      'Коммерческий сегмент обслуживает кафе, сети и общепит экономичным, стабильным кофе. Лоты на этой странице являются строками COMMERCIAL в нашем каталоге, типичный каппинг 80–82.',
      'Мы ставим во главу угла минимальную разницу между партиями, надёжные поставки и контроль операционных затрат.',
    ],
    highlights: [
      { title: 'Стабильный профиль', desc: 'Гости получают ожидаемую чашку каждый раз.' },
      { title: 'Масштабируемые поставки', desc: 'Планирование больших регулярных объёмов.' },
      { title: 'Удобство для операций', desc: 'Работает с автоматизацией эспрессо и высоким потоком.' },
      { title: 'Экономическая эффективность', desc: 'Оптимизировано для ежедневного интенсивного потребления.' },
    ],
  },
  'roasted-coffee': {
    lead: 'Профессиональная обжарка, готово к подаче',
    paragraphs: [
      'Помимо зелёного кофе мы предлагаем обжаренный кофе с заданными кривыми для эспрессо, фильтра или индивидуальных рецептов — с целью воспроизводимой экстракции.',
      'Упаковка и профиль согласовываются с B2B-партнёрами; доступно долгосрочное планирование лотов.',
    ],
    highlights: [
      { title: 'Профессиональная обжарка', desc: 'Согласована с рабочими процессами качества и сенсорики.' },
      { title: 'Стабильная экстракция', desc: 'Одинаковый опыт чашки в течение всех часов работы.' },
      { title: 'B2B гибкость', desc: 'Частная марка, размер партии и ритм доставки.' },
      { title: 'Готово к использованию', desc: 'Быстрый запуск для розницы и гостеприимства.' },
    ],
  },
};

const ar: Record<HomePortfolioCategoryId, PortfolioCategoryDetail> = {
  'competition-lot': {
    badge: 'الفائزون بـ EICEV 2025',
    heroSubtitle: 'قهوة مختارة من الفائزين بالمسابقات',
    heroStats: [
      { value: '90+', label: 'درجة التذوق' },
      { value: '10', label: 'منتج فائز' },
      { value: '88+', label: 'الحد الأدنى للدرجة' },
    ],
    lead: 'أصناف من مستوى المسابقات من الفائزين',
    paragraphs: [
      'أصناف المسابقات هي قهوة حصلت على أعلى الدرجات من لجان خبراء في مسابقات دولية. كل صنف يحمل قصة نكهة فريدة.',
      'مُقيَّمة وفق بروتوكولات SCA ومختارة فوق مستوى الـ specialty القياسي — في Los Andes ندرج فقط أصناف المسابقات التي تجتاز اختيارنا الصارم.',
    ],
    highlights: [
      { title: 'تقييم Q Grader', desc: 'تقييم موضوعي من قبل خبراء معتمدين.' },
      { title: 'حجم محدود', desc: 'دفعات صغيرة فقط لكل منتج وموسم.' },
      { title: 'معيار المسابقة', desc: 'أعلى الدرجات في العطر والجسم والحموضة والتوازن.' },
      { title: 'إمكانية التتبع الكاملة', desc: 'سلسلة موثقة من المزرعة إلى الكوب.' },
      { title: 'معالجة مبتكرة', desc: 'أصناف natural وhoney وتجريبية.' },
      { title: 'قصة المنتج', desc: 'وراء كل صنف عائلة مزارعة متفانية.' },
    ],
    sections: [
      {
        anchor: 'nedir',
        title: 'ما هو صنف المسابقة؟',
        subtitle: 'القهوة بأعلى المعايير',
        introHeading: 'قمة القهوة الفائزة',
        paragraphs: [
          'صنف المسابقة فئة خاصة: قهوة يقيّمها Q Graders في مسابقات دولية وتحقق أعلى الدرجات. إنها تتخطى قهوة الـ specialty العادية في توقعات الجودة.',
          'يخضع كل صنف مسابقة لبروتوكولات kauppinj الكاملة وفق SCA. بينما يُعرَّف 85+ بشكل عام بالفئة، في Los Andes نقدم فقط أصناف مسابقات من 88+ فما فوق.',
        ],
        bullets: [
          'موثق من Q Grader: مُقيَّم من خبراء معتمدين دولياً.',
          'محدود للغاية: في أحيان كثيرة بضع مئات من الكيلوغرامات فقط للصنف الواحد.',
          'معالجة مميزة: أفضل الأساليب التجريبية والتقليدية.',
          'إمكانية تتبع كاملة: كل خطوة من المزرعة إلى الكوب موثقة.',
        ],
        aside: { line1: 'EICEV', line2: '2025', line3: 'Café de Venezuela' },
      },
      {
        anchor: 'fark',
        title: 'لماذا هو مختلف؟',
        subtitle: 'ما الذي يميز صنف المسابقة',
        cards: [
          { title: 'معايير المسابقة', body: 'حصلت هذه القهوة على أعلى درجات اللجنة دولياً في العطر والنكهة والجسم والحموضة والتوازن.' },
          { title: 'التقييم العلمي', body: 'يُقيِّم Q Graders المدرَّبون وفق معايير SCA في تذوق أعمى — معايير موضوعية لا آراء فحسب.' },
          { title: 'نادر وقيّم', body: 'أحجام صغيرة جداً؛ قد ينتج المزارع بضعة أكياس فقط بهذا المستوى سنوياً.' },
          { title: 'معالجة مبتكرة', body: 'تستخدم كثير من الأصناف تقنيات honey وnatural وتجريبية تتجاوز المعالجة المغسولة الكلاسيكية.' },
          { title: 'مناخات دقيقة مميزة', body: 'غالباً مصدرها قطع ذات ارتفاع وتربة ومناخ مثالي — في أحيان كثيرة ميكرو-لوت.' },
          { title: 'قصة المنتج', body: 'وراء كل صنف عائلة مزارعة أمضت سنوات من التفاني في حرفتها.' },
        ],
      },
      {
        anchor: 'kim',
        title: 'لمن هو؟',
        subtitle: 'العملاء المثاليون لأصناف المسابقات',
        cards: [
          { title: 'بريستا المسابقات', body: 'للبطولات كـ WBC: ملفات مصممة لإقناع المحكمين.' },
          { title: 'المقاهي الفاخرة', body: 'لمتاجر الـ specialty التي تريد قهوة "بطلة" واضحة في القائمة.' },
          { title: 'فعاليات التذوق', body: 'تجارب تذوق مرجعية للتدريب وورش العمل والتذوق العام.' },
          { title: 'هدايا استثنائية', body: 'لعشاق القهوة: ليس مجرد كيس، بل قصة وتجربة.' },
          { title: 'الهواة الجامعون', body: 'لمن يبحث عن أندر وأفضل الأصناف في العالم.' },
          { title: 'هدايا الشركات', body: 'اختيار مرموق لعملاء VIP والشركاء والفرق.' },
        ],
      },
    ],
  },
  'micro-lot': {
    lead: 'قطعة واحدة، حصاد واحد — محدود',
    paragraphs: [
      'يأتي الميكرو-لوت من قسم محدد من المزرعة ونافذة حصاد معينة. لكل صنف هويته الخاصة وإمكانية تتبع كاملة.',
      'على عكس القهوة التجارية بالجملة، يتم متابعة التربة والقطف والمعالجة خطوة بخطوة.',
    ],
    quote: { text: 'قهوة الميكرو-لوت هي الفن الإبداعي للمزارع — كل كوب يحمل التربة والمناخ والحرفية.', attribution: 'Coffee Los Andes' },
    highlights: [
      { title: 'إمكانية التتبع', desc: 'المزرعة والمنتج والإحداثيات عند الاقتضاء.' },
      { title: 'إنتاج محدود', desc: 'عندما ينفد الصنف، يصعب تكرار ملفه.' },
      { title: 'نطاق التذوق', desc: 'درجات عالية مُتحقق منها عبر سير عمل الدرجات.' },
      { title: 'المعالجة', desc: 'مغسول وطبيعي وعسل للتعبير عن الصنف.' },
      { title: 'أصل واحد', desc: 'أصناف مميزة كـ Bourbon وGeisha وTypica.' },
      { title: 'تحميص طازج', desc: 'تخطيط التحميص وفق طلبك.' },
    ],
    sections: [
      {
        anchor: 'micro-karsilastirma',
        title: 'ميكرو-لوت مقابل specialty',
        microLayout: 'comparison-table',
        sectionTone: 'cream',
        tableRowIcons: ['cupping', 'harvest', 'volume', 'process', 'price', 'origin', 'process', 'cupping', 'trace', 'process'],
        table: {
          columns: ['الميزة', 'ميكرو-لوت (84–89)', 'Specialty (84–86)'],
          rows: [
            ['درجة التذوق', '84–89 نقطة', '80–83 نقطة'],
            ['مستوى الجودة', 'جودة عالية', 'جودة جيدة'],
            ['حجم الإنتاج', 'محدود جداً (50–200 كغ)', 'محدود (500 كغ – 2 طن)'],
            ['حجم المنخل', 'درجة واحدة، تحكم صارم', 'منتظم، مختار'],
            ['فئة السعر', 'فاخر', 'منتصف-أعلى'],
            ['العميل المستهدف', 'الهواة، المقاهي المتخصصة', 'المقاهي والمطاعم والفنادق'],
            ['الاستخدام', 'قهوة مصفاة، تذوق، مسابقات', 'إسبريسو، مصفاة، مزيج'],
            ['ملف الكوب', 'معقد، ملاحظات فريدة', 'متوازن، ملف كلاسيكي'],
            ['إمكانية التتبع', 'كاملة (مستوى المزرعة)', 'مستوى إقليمي'],
            ['المعالجة', 'خاص / تجريبي', 'قياسي (مغسول / طبيعي)'],
          ],
        },
      },
      {
        anchor: 'micro-fark-ozet',
        title: 'لمحة سريعة',
        microLayout: 'comparison-table',
        sectionTone: 'muted',
        tableRowIcons: ['cupping', 'volume', 'price', 'cupping'],
        table: {
          columns: ['الميزة', 'ميكرو-لوت', 'Specialty'],
          rows: [
            ['فارق الدرجة', 'أعلى بـ 4–6 نقاط', 'درجة أدنى'],
            ['الندرة', 'أندر، إنتاج محدود', 'أكثر شيوعاً'],
            ['السعر', 'أغلى بنسبة 30–50%', 'أكثر اقتصادية'],
            ['الطعم', 'أكثر تعقيداً وتميزاً', 'أكثر توازناً وقياسية'],
          ],
        },
      },
      {
        anchor: 'micro-kitle',
        title: 'لمن هو؟',
        microLayout: 'audience-cards',
        sectionTone: 'muted',
        paragraphs: ['الميكرو-لوت مصنوع للأشخاص الذين يرون القهوة تجربة لا مجرد مشروب:'],
        audienceCards: [
          { title: 'عشاق القهوة', body: 'استكشاف الفروق في المنشأ والصنف والمعالجة.' },
          { title: 'بريستا المنزل', body: 'V60 أو Chemex أو AeroPress أو إسبريسو بمستوى طموح المقهى في المنزل.' },
          { title: 'مهدو الهدايا', body: 'قهوة نادرة وذات معنى للمناسبات الخاصة.' },
          { title: 'المشترون المهتمون بالاستدامة', body: 'التجارة المباشرة والعلاقات العادلة مع المنتجين تهمك.' },
        ],
      },
      {
        anchor: 'micro-demleme',
        title: 'كيفية التحضير',
        microLayout: 'brewing-cards',
        sectionTone: 'brew',
        paragraphs: ['وصفات بداية لإبراز طابع الميكرو-لوت:'],
        brewingCards: [
          { method: 'V60 / Chemex', ratio: '1:16 (15 غ قهوة، 240 مل ماء)', temp: '92–94 °C', grind: 'متوسط-ناعم' },
          { method: 'AeroPress', ratio: '1:15', temp: '85–90 °C', grind: 'متوسط؛ طريقة مقلوبة' },
          { method: 'French press', ratio: '1:12 · 4 دقائق', temp: '94 °C', grind: 'خشن' },
          { method: 'إسبريسو', ratio: '1:2 (18 غ → 36 غ)', temp: '93 °C', grind: 'ناعم' },
        ],
      },
    ],
  },
  specialty: {
    lead: 'أرابيكا فاخرة ضمن معايير SCA',
    paragraphs: [
      'تعرِّف SCA قهوة الـ specialty بأنها تحصل على 80+ على طاولة التذوق. من الحبة الخضراء إلى الكوب، تُبقى العيوب منخفضة والجودة ثابتة.',
      'في صفحة الـ specialty هذه ندرج الأصناف الخضراء المُصنَّفة SPECIALTY في الكاتالوج الرئيسي (نطاق التذوق النموذجي 84–86). المزيج المتعمد موجود تحت Specialty blend.',
    ],
    quote: { text: 'قهوة الـ specialty ثقافة تأتي فيها الجودة أولاً ويكسب الجميع في السلسلة بعدالة.', attribution: 'Specialty Coffee Association' },
    highlights: [
      { title: 'درجة التذوق', desc: 'كل صنف مُقيَّم من Q Graders.' },
      { title: 'التحكم في العيوب', desc: 'حدود صارمة في درجات العينات.' },
      { title: 'وضوح الصنف', desc: 'أصناف أرابيكا معروفة بمنشأ قابل للتتبع.' },
      { title: 'الرطوبة والمنخل', desc: 'دفعات متجانسة عبر الفرز.' },
      { title: 'الاتساق', desc: 'كوب متوقع ضمن نفس الصنف.' },
      { title: 'الصلة بالميكرو-لوت', desc: 'كل ميكرو-لوت هو specialty؛ الـ specialty يمكن أن يتوسع أكثر.' },
    ],
  },
  'specialty-blend': {
    lead: 'ملفات متوازنة بحرفية عالية',
    paragraphs: [
      'تجمع مزيجات الـ specialty بين منشأين أو صنفين أو أكثر بشكل متعمد، محققةً 80+ كمزيج. الهدف كوب أكثر توازناً وإشباعاً مما تقدمه المكونات منفردة.',
      'في Los Andes تُبنى المزيجات عبر الاختيار وتجارب التذوق والعمل على النسب والتحميص والتناسق — مناسبة بشكل خاص للإسبريسو ومشروبات الحليب.',
    ],
    quote: { text: 'المزيج رقصة — كل قهوة تؤدي دورها وسوياً يشكلون سيمفونية.', attribution: 'محمّص متمرس' },
    highlights: [
      { title: 'التوازن', desc: 'الحموضة والجسم والحلاوة تدعم بعضها.' },
      { title: 'الاتساق', desc: 'ملف ثابت رغم التقلبات الموسمية.' },
      { title: 'التعقيد', desc: 'نكهة متعددة الطبقات تتخطى خط منشأ واحد.' },
      { title: 'مناسب للإسبريسو', desc: 'كريما وجسم وطعم مضبوطة للبار.' },
    ],
  },
  'commercial-lot': {
    lead: 'حجم كبير، جودة متوقعة',
    paragraphs: [
      'يخدم القطاع التجاري المقاهي والسلاسل وخدمات الغذاء بقهوة اقتصادية ثابتة. الأصناف في هذه الصفحة هي صفوف COMMERCIAL في كاتالوجنا، بتذوق نموذجي 80–82.',
      'نولي الأولوية لأدنى تباين بين الدفعات وموثوقية التوريد والتحكم في التكاليف التشغيلية.',
    ],
    highlights: [
      { title: 'ملف ثابت', desc: 'يحصل الضيوف على الكوب المتوقع في كل مرة.' },
      { title: 'توريد قابل للتوسع', desc: 'تخطيط للكميات الكبيرة المتكررة.' },
      { title: 'مناسب للعمليات', desc: 'يعمل مع أتمتة الإسبريسو والإنتاجية العالية.' },
      { title: 'الكفاءة الاقتصادية', desc: 'محسَّن للاستهلاك اليومي العالي.' },
    ],
  },
  'roasted-coffee': {
    lead: 'تحميص احترافي، جاهز للتقديم',
    paragraphs: [
      'بالإضافة إلى القهوة الخضراء نقدم قهوة محمصة بمنحنيات محددة للإسبريسو أو القهوة المصفاة أو الوصفات المخصصة — بهدف استخلاص قابل للتكرار.',
      'يتم تخصيص التعبئة والملف مع شركاء B2B؛ يتوفر تخطيط الأصناف طويل الأمد.',
    ],
    highlights: [
      { title: 'تحميص احترافي', desc: 'متوافق مع سير عمل الجودة والحسية.' },
      { title: 'استخلاص ثابت', desc: 'نفس تجربة الكوب طوال ساعات الخدمة.' },
      { title: 'مرونة B2B', desc: 'العلامة الخاصة وحجم الدفعة وإيقاع التسليم.' },
      { title: 'جاهز للاستخدام', desc: 'إطلاق سريع للبيع بالتجزئة والضيافة.' },
    ],
  },
};

export const portfolioDetailByLocale: Record<Locale, Record<HomePortfolioCategoryId, PortfolioCategoryDetail>> = {
  tr,
  de,
  en,
  fr,
  es,
  nl: en,
  pl: en,
  cs: en,
  it: en,
  ru,
  ar,
};
