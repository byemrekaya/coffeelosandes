import type { Locale } from './types';
import type { HomePortfolioCategoryId } from '../data/homePortfolioByCategory';
import type { PortfolioCategoryDetail } from './portfolioCategoryDetail';
import { portfolioDetailByLocale } from './portfolioCategoryDetail';

export type HomeExtendedShape = {
  storyEyebrow: string;
  storySectionTitle: string;
  storyLead: string;
  storyParagraphs: [string, string];
  storyHighlights: [string, string, string];
  storyNote: { title: string; body: string };
  storyImageAlt: string;
  storyAboutCtaLabel: string;
  storyWhoWeAreCtaLabel: string;
  stats: { value: string; label: string }[];
  regionsTitle: string;
  regionsSubtitle: string;
  regions: [RegionCard, RegionCard, RegionCard];
  qualityProcessTitle: string;
  qualityProcessSubtitle: string;
  processSteps: [ProcessStep, ProcessStep, ProcessStep, ProcessStep];
  portfolioSectionTitle: string;
  portfolioSectionSubtitle: string;
  portfolioQualityFallbackNote: string;
  portfolioExploreCta: string;
  portfolioQualityTierName: Record<HomePortfolioCategoryId, string>;
  portfolioTopSegmentRibbon: string;
  portfolioMixedRibbon: string;
  portfolioCategories: Record<
    HomePortfolioCategoryId,
    { title: string; desc: string; scoreLine: string | null; qualityBandCaption: string | null }
  >;
  portfolioDetail: Record<HomePortfolioCategoryId, PortfolioCategoryDetail>;
  portfolioEmpty: string;
  missionTitle: string;
  missionBody: string;
  missionPillars: [string, string, string, string];
};

type RegionCard = { title: string; body: string; bullets: [string, string, string, string] };
type ProcessStep = { title: string; desc: string };

const tr: HomeExtendedShape = {
  storyEyebrow: '20+ yıldır',
  storySectionTitle: 'Hikayemiz',
  storyLead: 'Gelenek, köken ve kalite — kaynaktan Avrupa’ya.',
  storyParagraphs: [
    'Los Andes Europe GmbH, kahve üretiminin kalbinde başlayan bir yolculuğu Avrupa’ya taşıyan aile temelli bir yapıdır. Üreticiyle birebir temas, şeffaf tedarik ve sürdürülebilir ilişki yaklaşımımızın merkezindedir.',
    'Bugün; Venezuela’da kaynaklama, bölgede ticari operasyonlar ve Avrupa genelinde lojistik yapımızla profesyonel alıcılar için planlanabilir, tutarlı ve izlenebilir kahve tedariki sunuyoruz.',
  ],
  storyHighlights: [
    'Tedarik zincirinin tamamında doğrudan saha deneyimi',
    'Güney Amerika’da güçlü kökler ve üretici ilişkileri',
    'Avrupa’da güvenilir ticaret ve lojistik altyapısı',
  ],
  storyNote: {
    title: 'Marka notu',
    body: 'Kahve bizim için sadece bir ürün değil; nesilden nesile aktarılan bir miras, bir tutku ve bir yaşam biçimi.',
  },
  storyImageAlt: 'Kahve tarlası ve hasat',
  storyAboutCtaLabel: 'Venezuela köken hikayesini okuyun',
  storyWhoWeAreCtaLabel: 'Biz kimiz',
  stats: [
    { value: '20+', label: 'Yıllık deneyim' },
    { value: '3', label: 'Ana bölge' },
    { value: '50+', label: 'Üretici ortak' },
    { value: 'Avrupa', label: 'Lojistik ağı' },
  ],
  regionsTitle: 'Bölgelerimiz',
  regionsSubtitle: 'Küresel varlığımız, yerel uzmanlığımız',
  regions: [
    {
      title: 'Venezuela — üretim ve kaynaklama',
      body: 'Venezuela’nın eşsiz coğrafi yapısı ve iklim koşulları, dünyanın en kaliteli kahvelerinin yetişmesine olanak tanır. Los Andes olarak, bu bölgedeki üretici ailelerle doğrudan iş birliği içinde çalışıyoruz.',
      bullets: ['Doğrudan ticaret ilişkileri', 'Sürdürülebilir üretim uygulamaları', 'Yerel topluluk desteği', 'Mikro lot takibi'],
    },
    {
      title: 'Avrupa — lojistik ve müşteri hizmetleri',
      body: 'Avrupa’daki merkez ofisimiz ve dağıtım ağımız, tüm kıtaya kesintisiz hizmet sunmamızı sağlıyor.',
      bullets: ['Merkezi lojistik yönetimi', 'Avrupa çapında dağıtım', 'Profesyonel müşteri desteği', 'Kalite güvencesi'],
    },
    {
      title: 'Türkiye, Orta Doğu ve Körfez — ticari operasyonlar',
      body: 'Bu stratejik bölgedeki ofislerimiz aracılığıyla bölgeye özel çözümler sunuyor ve müşterilerimizin ihtiyaçlarına hızlı yanıt veriyoruz.',
      bullets: ['Bölgesel piyasa uzmanlığı', 'Özelleştirilmiş çözümler', 'Hızlı lojistik destek', 'Yerel müşteri hizmetleri'],
    },
  ],
  qualityProcessTitle: 'Kalite kontrol sürecimiz',
  qualityProcessSubtitle: 'Her adımda mükemmellik',
  processSteps: [
    {
      title: 'Parsel seçimi',
      desc: 'Hasat öncesinde deneyimli ekibimiz tarlaları ziyaret ederek en kaliteli parselleri belirler. Her bölgenin mikro iklimini, toprak yapısını ve üretim tarihçesini değerlendiririz.',
    },
    {
      title: 'Fermantasyon',
      desc: 'Fermantasyon süreci kahvenin karakterini belirleyen kritik bir aşamadır. Her lotun fermantasyonunu yakından takip ederek optimum tat profillerinin oluşmasını sağlarız.',
    },
    {
      title: 'Kurutma',
      desc: 'Geleneksel yöntemlerle kontrollü kurutma süreci, çekirdeklerin ideal nem oranına ulaşmasını ve istenmeyen tatların oluşmasını önler.',
    },
    {
      title: 'Ayıklama',
      desc: 'Son aşamada her çekirdek titizlikle elle ayıklanır. Yalnızca yüksek standarttaki çekirdekler seçilerek fincana ulaşan kahvenin kalitesi güvence altına alınır.',
    },
  ],
  portfolioSectionTitle: 'Ürün portföyümüz',
  portfolioSectionSubtitle: 'Her ihtiyaca uygun çözümler',
  portfolioQualityFallbackNote:
    'Bu segmentte anasayfada sabit cupping aralığı gösterilmez; ürünler proje veya kategori içeriğine göre şekillenir.',
  portfolioExploreCta: 'Keşfet →',
  portfolioQualityTierName: {
    'competition-lot': 'Premium',
    'micro-lot': 'Premium',
    specialty: 'Yüksek kalite',
    'specialty-blend': 'Yüksek kalite',
    'commercial-lot': 'Standart ticari',
    mixed: 'Esnek profil',
    'roasted-coffee': 'Hazır ürün',
  },
  portfolioTopSegmentRibbon: 'Üst segment',
  portfolioMixedRibbon: 'Çoklu profil',
  portfolioCategories: {
    'competition-lot': {
      title: 'Competition Lot',
      desc: 'Yüksek cup skoru ve koleksiyon odaklı üst segment lotlar.',
      scoreLine: '90+',
      qualityBandCaption:
        'Çubuk 80–100 cupping ölçeğinde üst bölgeyi gösterir. Bu segment için tipik skor bandı 90 ve üzeridir.',
    },
    'micro-lot': {
      title: 'Micro Lot',
      desc: 'Seçilmiş mikro parsellerden, sınırlı üretim kahveler.',
      scoreLine: '85–90 arası',
      qualityBandCaption:
        'Çubuk 80–100 ölçeğinde orta–üst bandı işaret eder. Tipik cupping aralığı 85–90’dır.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Özenle seçilmiş, yüksek kalite Arabica serileri.',
      scoreLine: '82–85 arası',
      qualityBandCaption:
        'Çubuk 80–100 ölçeğinde orta banda yakındır. Tipik skor aralığı 82–85’tir.',
    },
    'specialty-blend': {
      title: 'Specialty Blend',
      desc: 'Dengeli profiller için uzman harmanlar.',
      scoreLine: '82–85',
      qualityBandCaption:
        'Çubuk 80–100 ölçeğinde specialty harmanlar için orta bandı yansıtır. Tipik aralık 82–85’tir.',
    },
    'commercial-lot': {
      title: 'Commercial Lot',
      desc: 'Yüksek hacim ve tutarlı kalite için ticari hat.',
      scoreLine: 'Ürünler 80–82',
      qualityBandCaption:
        'Çubuk 80–100 ölçeğinde alt–orta bandı gösterir. Ticari hat ürünleri için tipik cupping bandı 80–82’dir.',
    },
    mixed: {
      title: 'Mixed',
      desc: 'Özel projeler ve esnek tedarik için harmanlı çözümler.',
      scoreLine: null,
      qualityBandCaption: null,
    },
    'roasted-coffee': {
      title: 'Roasted Coffee',
      desc: 'Profesyonel kavurma profilleriyle hazır ürünler.',
      scoreLine: null,
      qualityBandCaption: null,
    },
  },
  portfolioDetail: portfolioDetailByLocale.tr,
  portfolioEmpty: 'Bu kategori için ürün eşlemesi henüz yapılmadı. Liste yakında güncellenecek.',
  missionTitle: 'Misyonumuz',
  missionBody:
    'Los Andes Europe olarak misyonumuz, Güney Amerika’nın kahve mirasını şeffaf tedarik ve ölçülebilir kalite ile profesyonel alıcılara taşımaktır. Üretici ortaklarımızla uzun vadeli ilişkiler kurar; her adımda güven, sürdürülebilirlik ve saygı ilkelerini önceleriz.',
  missionPillars: ['Tutku', 'Kalite', 'Güven', 'Sürdürülebilirlik'],
};

const de: HomeExtendedShape = {
  storyEyebrow: 'Seit über 20 Jahren',
  storySectionTitle: 'Unsere Geschichte',
  storyLead: 'Tradition, Herkunft und Qualität – vom Ursprung bis nach Europa.',
  storyParagraphs: [
    'Los Andes Europe GmbH verbindet Ursprung und Markt: nah am Erzeuger, transparent in der Beschaffung und konsequent in der Qualität. Unsere Wurzeln liegen in Südamerika – unsere Lieferfähigkeit in Europa.',
    'Heute liefern wir planbare, konsistente Lots für professionelle Einkäufer – mit Beschaffung in Venezuela, regionalen Handelsoperationen und europaweiter Logistik.',
  ],
  storyHighlights: [
    'Direkte Erfahrung entlang der gesamten Lieferkette',
    'Starke Wurzeln in Südamerika',
    'Verlässliche Handels- und Logistikstruktur in Europa',
  ],
  storyNote: {
    title: 'Founder Note',
    body: 'Kaffee ist für uns nicht nur ein Produkt, sondern ein Erbe, eine Leidenschaft und eine Lebensweise.',
  },
  storyImageAlt: 'Kaffeeplantage und Ernte',
  storyAboutCtaLabel: 'Die venezolanische Herkunftsgeschichte lesen',
  storyWhoWeAreCtaLabel: 'Wer wir sind',
  stats: [
    { value: '20+', label: 'Jahre Erfahrung' },
    { value: '3', label: 'Kernregionen' },
    { value: '50+', label: 'Erzeugerpartner' },
    { value: 'EU', label: 'Logistiknetz' },
  ],
  regionsTitle: 'Unsere Regionen',
  regionsSubtitle: 'Globale Präsenz, lokale Expertise',
  regions: [
    {
      title: 'Venezuela — Produktion & Beschaffung',
      body: 'Die einzigartige Geografie und das Klima Venezuelas ermöglichen hochwertigen Kaffee. Wir arbeiten direkt mit Erzeugerfamilien in der Region zusammen.',
      bullets: ['Direkte Handelsbeziehungen', 'Nachhaltige Praxis', 'Unterstützung lokaler Gemeinden', 'Mikrolot-Tracking'],
    },
    {
      title: 'Europa — Logistik & Service',
      body: 'Hauptsitz und Verteilnetz in Europa ermöglichen zuverlässige Lieferung auf dem gesamten Kontinent.',
      bullets: ['Zentrale Logistik', 'Paneuropäische Distribution', 'Professioneller Support', 'Qualitätssicherung'],
    },
    {
      title: 'Türkei, Naher Osten & Golf — Handel',
      body: 'Über unsere Büros in dieser strategischen Region liefern wir maßgeschneiderte Lösungen und schnelle Reaktion auf Kundenbedürfnisse.',
      bullets: ['Regionale Marktexpertise', 'Individuelle Lösungen', 'Schnelle Logistik', 'Lokaler Kundenservice'],
    },
  ],
  qualityProcessTitle: 'Unser Qualitätsprozess',
  qualityProcessSubtitle: 'Exzellenz in jedem Schritt',
  processSteps: [
    {
      title: 'Parzellenauswahl',
      desc: 'Vor der Ernte besuchen unsere Teams die Felder und wählen die besten Parzellen. Mikroklima, Boden und Historie werden bewertet.',
    },
    {
      title: 'Fermentation',
      desc: 'Die Fermentation prägt den Charakter des Kaffees. Wir begleiten jedes Lot, damit sich optimale Geschmacksprofile entwickeln.',
    },
    {
      title: 'Trocknung',
      desc: 'Kontrollierte Trocknung nach bewährten Methoden sichert die richtige Feuchte und vermeidet unerwünschte Aromen.',
    },
    {
      title: 'Sortierung',
      desc: 'In der Endphase werden Bohnen sorgfältig handverlesen. Nur Bohnen höchster Qualität erreichen die weitere Verarbeitung.',
    },
  ],
  portfolioSectionTitle: 'Unser Produktportfolio',
  portfolioSectionSubtitle: 'Lösungen für jeden Bedarf',
  portfolioQualityFallbackNote:
    'Für dieses Segment zeigen wir auf der Startseite keinen festen Cupping-Balken; Inhalte richten sich nach Projekt oder Kategorie.',
  portfolioExploreCta: 'Entdecken →',
  portfolioQualityTierName: {
    'competition-lot': 'Premium',
    'micro-lot': 'Premium',
    specialty: 'Hohe Qualität',
    'specialty-blend': 'Hohe Qualität',
    'commercial-lot': 'Standard Handel',
    mixed: 'Flexibel',
    'roasted-coffee': 'Fertigprodukt',
  },
  portfolioTopSegmentRibbon: 'Oberes Segment',
  portfolioMixedRibbon: 'Multi-Profil',
  portfolioCategories: {
    'competition-lot': {
      title: 'Competition Lot',
      desc: 'Obere Segment-Lots mit hohen Cup-Scores und Sammlercharakter.',
      scoreLine: 'Cupping 90+',
      qualityBandCaption:
        'Der Balken liegt auf der 80–100er Cupping-Skala im oberen Bereich. Typische Werte für dieses Segment: 90+.',
    },
    'micro-lot': {
      title: 'Micro Lot',
      desc: 'Kaffees aus ausgewählten Mikroparzellen in limitierten Mengen.',
      scoreLine: 'Cupping 85–90',
      qualityBandCaption:
        'Der Balken markiert den oberen Mittelbereich der 80–100er Skala. Typische Cupping-Bandbreite: 85–90.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Sorgfältig ausgewählte Premium-Arabica-Serien.',
      scoreLine: 'Cupping 82–85',
      qualityBandCaption:
        'Der Balken zeigt die mittlere Lage auf der 80–100er Skala. Typisch für dieses Segment: 82–85.',
    },
    'specialty-blend': {
      title: 'Specialty Blend',
      desc: 'Experten-Blends für ausgewogene Profile.',
      scoreLine: 'Cupping 82–85',
      qualityBandCaption:
        'Der Balken entspricht dem mittleren Band der 80–100er Skala für Specialty-Blends. Typisch: 82–85.',
    },
    'commercial-lot': {
      title: 'Commercial Lot',
      desc: 'Handelslinie für Volumen und konsistente Qualität.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'Der Balken liegt im unteren Mittelbereich der 80–100er Skala. Handelslots liegen typischerweise bei 80–82.',
    },
    mixed: {
      title: 'Mixed',
      desc: 'Flexible und gemischte Lösungen für Projekte und Sonderbedarf.',
      scoreLine: null,
      qualityBandCaption: null,
    },
    'roasted-coffee': {
      title: 'Roasted Coffee',
      desc: 'Fertige Produkte mit professionellen Röstprofilen.',
      scoreLine: null,
      qualityBandCaption: null,
    },
  },
  portfolioDetail: portfolioDetailByLocale.de,
  portfolioEmpty: 'Für diese Kategorie sind noch keine Produkte zugeordnet. Die Liste wird bald ergänzt.',
  missionTitle: 'Unsere Mission',
  missionBody:
    'Unsere Mission ist es, das südamerikanische Kaffeeerbe mit transparenter Beschaffung und messbarer Qualität zu professionellen Abnehmern zu bringen. Wir pflegen langfristige Partnerschaften mit Erzeugern und setzen auf Vertrauen, Nachhaltigkeit und Respekt in jedem Schritt.',
  missionPillars: ['Leidenschaft', 'Qualität', 'Vertrauen', 'Nachhaltigkeit'],
};

const en: HomeExtendedShape = {
  storyEyebrow: 'Over 20 years',
  storySectionTitle: 'Our story',
  storyLead: 'Tradition, origin and quality — from source to Europe.',
  storyParagraphs: [
    'Los Andes Europe GmbH connects origin and market through direct producer relationships, transparent sourcing and uncompromising quality. Our roots are in South America — our delivery capability is in Europe.',
    'Today we supply planable, consistent lots for professionals with sourcing in Venezuela, regional commercial operations and Europe-wide logistics.',
  ],
  storyHighlights: [
    'Direct experience across the entire supply chain',
    'Strong roots in South America',
    'Reliable trade and logistics structure in Europe',
  ],
  storyNote: {
    title: 'Founder note',
    body: 'For us, coffee is not just a product — it is a heritage, a passion and a way of life.',
  },
  storyImageAlt: 'Coffee farm and harvest',
  storyAboutCtaLabel: 'Read the full Venezuela origin story',
  storyWhoWeAreCtaLabel: 'Who we are',
  stats: [
    { value: '20+', label: 'Years of experience' },
    { value: '3', label: 'Core regions' },
    { value: '50+', label: 'Producer partners' },
    { value: 'EU', label: 'Logistics network' },
  ],
  regionsTitle: 'Our regions',
  regionsSubtitle: 'Global presence, local expertise',
  regions: [
    {
      title: 'Venezuela — production & sourcing',
      body: 'Venezuela’s geography and climate allow exceptional coffee. We work directly with producer families in the region.',
      bullets: ['Direct trade relationships', 'Sustainable practices', 'Community support', 'Micro-lot traceability'],
    },
    {
      title: 'Europe — logistics & service',
      body: 'Our European hub and distribution network keep supply reliable across the continent.',
      bullets: ['Central logistics', 'Pan-European distribution', 'Professional support', 'Quality assurance'],
    },
    {
      title: 'Turkey, Middle East & Gulf — commercial',
      body: 'Through our offices in this strategic region we deliver tailored solutions and fast responses to customer needs.',
      bullets: ['Regional market expertise', 'Customised solutions', 'Fast logistics support', 'Local customer service'],
    },
  ],
  qualityProcessTitle: 'Our quality process',
  qualityProcessSubtitle: 'Excellence at every step',
  processSteps: [
    {
      title: 'Parcel selection',
      desc: 'Before harvest, our team visits farms to select the best parcels, assessing microclimate, soil and history.',
    },
    {
      title: 'Fermentation',
      desc: 'Fermentation shapes the coffee’s character. We monitor each lot to develop optimal flavour profiles.',
    },
    {
      title: 'Drying',
      desc: 'Controlled drying using traditional methods helps reach ideal moisture and avoid off-flavours.',
    },
    {
      title: 'Sorting',
      desc: 'In the final stage, beans are carefully hand-sorted so only the highest standard reaches your cup.',
    },
  ],
  portfolioSectionTitle: 'Our product portfolio',
  portfolioSectionSubtitle: 'Solutions for every need',
  portfolioQualityFallbackNote:
    'This segment has no fixed cupping band on the home card; offerings depend on the project or category.',
  portfolioExploreCta: 'Explore →',
  portfolioQualityTierName: {
    'competition-lot': 'Premium',
    'micro-lot': 'Premium',
    specialty: 'High',
    'specialty-blend': 'High',
    'commercial-lot': 'Standard',
    mixed: 'Flexible',
    'roasted-coffee': 'Shelf-ready',
  },
  portfolioTopSegmentRibbon: 'Top tier',
  portfolioMixedRibbon: 'Multi-Profile',
  portfolioCategories: {
    'competition-lot': {
      title: 'Competition lot',
      desc: 'Top-tier lots with high cup scores and collector appeal.',
      scoreLine: 'Cupping 90+ lots',
      qualityBandCaption:
        'On the 80–100 cupping scale, the bar sits in the upper range. Typical scores for this segment are 90+.',
    },
    'micro-lot': {
      title: 'Micro lot',
      desc: 'Limited coffees from selected micro-parcels.',
      scoreLine: 'Cupping 85–90',
      qualityBandCaption:
        'The bar reflects the upper-mid band on the 80–100 scale. Typical cupping range: 85–90.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Curated premium Arabica lines.',
      scoreLine: 'Cupping 82–85',
      qualityBandCaption:
        'The bar sits around the middle of the 80–100 scale. Typical scores for this segment: 82–85.',
    },
    'specialty-blend': {
      title: 'Specialty blend',
      desc: 'Expert blends for balanced profiles.',
      scoreLine: 'Cupping 82–85',
      qualityBandCaption:
        'The bar shows the mid band on the 80–100 scale for specialty blends. Typical range: 82–85.',
    },
    'commercial-lot': {
      title: 'Commercial lot',
      desc: 'Commercial line for volume and consistent quality.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'The bar sits in the lower-mid band on the 80–100 scale. Commercial lots typically cup at 80–82.',
    },
    mixed: {
      title: 'Mixed',
      desc: 'Flexible blended solutions for projects and special requirements.',
      scoreLine: null,
      qualityBandCaption: null,
    },
    'roasted-coffee': {
      title: 'Roasted coffee',
      desc: 'Ready products with professional roast profiles.',
      scoreLine: null,
      qualityBandCaption: null,
    },
  },
  portfolioDetail: portfolioDetailByLocale.en,
  portfolioEmpty: 'No products are mapped to this category yet. The list will be updated soon.',
  missionTitle: 'Our mission',
  missionBody:
    'Our mission is to bring South America’s coffee heritage to professional buyers through transparent sourcing and measurable quality. We build long-term partnerships with producers and uphold trust, sustainability and respect at every step.',
  missionPillars: ['Passion', 'Quality', 'Trust', 'Sustainability'],
};

const fr: HomeExtendedShape = {
  storyEyebrow: 'Plus de 20 ans',
  storySectionTitle: 'Notre histoire',
  storyLead: 'Tradition, origine et qualité — de la source à l’Europe.',
  storyParagraphs: [
    'Los Andes Europe GmbH relie l’origine et le marché : relations directes avec les producteurs, sourcing transparent et exigence de qualité. Nos racines sont en Amérique du Sud — notre capacité de livraison est en Europe.',
    'Aujourd’hui, nous fournissons des lots réguliers et planifiables aux professionnels grâce à l’approvisionnement au Venezuela, des opérations commerciales régionales et une logistique paneuropéenne.',
  ],
  storyHighlights: [
    'Expérience directe sur toute la chaîne d’approvisionnement',
    'Racines solides en Amérique du Sud',
    'Structure commerciale et logistique fiable en Europe',
  ],
  storyNote: {
    title: 'Note de la marque',
    body: 'Pour nous, le café n’est pas qu’un produit : c’est un héritage, une passion et un art de vivre.',
  },
  storyImageAlt: 'Plantation et récolte du café',
  storyAboutCtaLabel: 'Lire l’histoire complète du terroir vénézuélien',
  storyWhoWeAreCtaLabel: 'Qui sommes-nous',
  stats: [
    { value: '20+', label: 'Ans d’expérience' },
    { value: '50+', label: 'Partenaires producteurs' },
    { value: '3', label: 'Régions clés' },
    { value: 'UE', label: 'Réseau logistique' },
  ],
  regionsTitle: 'Nos régions',
  regionsSubtitle: 'Présence mondiale, expertise locale',
  regions: [
    {
      title: 'Venezuela — production & approvisionnement',
      body: 'La géographie et le climat du Venezuela permettent un café d’exception. Nous travaillons directement avec des familles productrices.',
      bullets: ['Relations commerciales directes', 'Pratiques durables', 'Soutien aux communautés', 'Traçabilité micro-lot'],
    },
    {
      title: 'Europe — logistique & service',
      body: 'Notre hub européen et notre réseau assurent une distribution fiable sur tout le continent.',
      bullets: ['Logistique centrale', 'Distribution paneuropéenne', 'Support professionnel', 'Assurance qualité'],
    },
    {
      title: 'Turquie, Moyen-Orient & Golfe — commerce',
      body: 'Nos bureaux dans cette zone stratégique offrent des solutions sur mesure et une réactivité élevée.',
      bullets: ['Expertise régionale', 'Solutions personnalisées', 'Logistique rapide', 'Service client local'],
    },
  ],
  qualityProcessTitle: 'Notre processus qualité',
  qualityProcessSubtitle: 'L’excellence à chaque étape',
  processSteps: [
    {
      title: 'Sélection des parcelles',
      desc: 'Avant la récolte, nos équipes visitent les parcelles et évaluent microclimat, sol et historique.',
    },
    {
      title: 'Fermentation',
      desc: 'La fermentation façonne le caractère du café. Nous suivons chaque lot pour des profils optimaux.',
    },
    {
      title: 'Séchage',
      desc: 'Un séchage contrôlé par méthodes traditionnelles fixe l’humidité idéale et limite les défauts.',
    },
    {
      title: 'Tri',
      desc: 'Les grains sont triés à la main pour ne retenir que la meilleure qualité.',
    },
  ],
  portfolioSectionTitle: 'Notre portefeuille produits',
  portfolioSectionSubtitle: 'Des solutions pour chaque besoin',
  portfolioQualityFallbackNote:
    'Pas de bande cupping fixe sur l’accueil pour ce segment ; le contenu dépend du projet ou de la catégorie.',
  portfolioExploreCta: 'Découvrir →',
  portfolioQualityTierName: {
    'competition-lot': 'Premium',
    'micro-lot': 'Premium',
    specialty: 'Haute qualité',
    'specialty-blend': 'Haute qualité',
    'commercial-lot': 'Standard',
    mixed: 'Flexible',
    'roasted-coffee': 'Produit fini',
  },
  portfolioTopSegmentRibbon: 'Segment haut',
  portfolioMixedRibbon: 'Multi-profils',
  portfolioCategories: {
    'competition-lot': {
      title: 'Competition lot',
      desc: 'Lots haut de gamme aux scores cup élevés.',
      scoreLine: 'Cupping 90+',
      qualityBandCaption:
        'Sur l’échelle cupping 80–100, la barre se situe en haut. Plage typique pour ce segment : 90+.',
    },
    'micro-lot': {
      title: 'Micro lot',
      desc: 'Cafés limités issus de micro-parcelles sélectionnées.',
      scoreLine: 'Cupping 85–90',
      qualityBandCaption:
        'La barre reflète la zone haute-médiane de l’échelle 80–100. Fourchette cupping typique : 85–90.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Séries Arabica premium sélectionnées.',
      scoreLine: 'Cupping 82–85',
      qualityBandCaption:
        'La barre se place vers le milieu de l’échelle 80–100. Scores typiques : 82–85.',
    },
    'specialty-blend': {
      title: 'Specialty blend',
      desc: 'Assemblages experts pour des profils équilibrés.',
      scoreLine: 'Cupping 82–85',
      qualityBandCaption:
        'La barre correspond au segment médian 80–100 pour les blends specialty. Plage typique : 82–85.',
    },
    'commercial-lot': {
      title: 'Commercial lot',
      desc: 'Ligne commerciale pour volume et constance.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'La barre se situe dans la zone basse-médiane de l’échelle 80–100. Les lots commerciaux cuppent souvent entre 80 et 82.',
    },
    mixed: {
      title: 'Mixed',
      desc: 'Solutions mixtes flexibles pour projets spécifiques.',
      scoreLine: null,
      qualityBandCaption: null,
    },
    'roasted-coffee': {
      title: 'Roasted coffee',
      desc: 'Produits finis avec profils de torréfaction professionnels.',
      scoreLine: null,
      qualityBandCaption: null,
    },
  },
  portfolioDetail: portfolioDetailByLocale.fr,
  portfolioEmpty: 'Aucun produit n’est encore associé à cette catégorie. La liste sera mise à jour prochainement.',
  missionTitle: 'Notre mission',
  missionBody:
    'Notre mission est de porter l’héritage caféier sud-américain vers les acheteurs professionnels grâce à un approvisionnement transparent et une qualité mesurable. Nous construisons des partenariats durables avec les producteurs et plaçons confiance, durabilité et respect au centre.',
  missionPillars: ['Passion', 'Qualité', 'Confiance', 'Durabilité'],
};

const es: HomeExtendedShape = {
  storyEyebrow: 'Más de 20 años',
  storySectionTitle: 'Nuestra historia',
  storyLead: 'Tradición, origen y calidad — del origen a Europa.',
  storyParagraphs: [
    'Los Andes Europe GmbH conecta origen y mercado mediante relaciones directas con productores, abastecimiento transparente y exigencia de calidad. Nuestras raíces están en Sudamérica — nuestra capacidad operativa está en Europa.',
    'Hoy entregamos lotes consistentes y planificables para profesionales con abastecimiento en Venezuela, operaciones comerciales regionales y logística en toda Europa.',
  ],
  storyHighlights: [
    'Experiencia directa a lo largo de toda la cadena',
    'Fuertes raíces en Sudamérica',
    'Estructura comercial y logística fiable en Europa',
  ],
  storyNote: {
    title: 'Nota de marca',
    body: 'Para nosotros el café no es solo un producto: es un legado, una pasión y una forma de vida.',
  },
  storyImageAlt: 'Finca y cosecha de café',
  storyAboutCtaLabel: 'Leer la historia completa del origen en Venezuela',
  storyWhoWeAreCtaLabel: 'Quiénes somos',
  stats: [
    { value: '20+', label: 'Años de experiencia' },
    { value: '50+', label: 'Socios productores' },
    { value: '3', label: 'Regiones clave' },
    { value: 'UE', label: 'Red logística' },
  ],
  regionsTitle: 'Nuestras regiones',
  regionsSubtitle: 'Presencia global, experiencia local',
  regions: [
    {
      title: 'Venezuela — producción y abastecimiento',
      body: 'La geografía y el clima de Venezuela permiten cafés excepcionales. Trabajamos directamente con familias productoras.',
      bullets: ['Relaciones comerciales directas', 'Prácticas sostenibles', 'Apoyo comunitario', 'Trazabilidad de microlotes'],
    },
    {
      title: 'Europa — logística y servicio',
      body: 'Nuestro hub y red de distribución en Europa aseguran suministro fiable en todo el continente.',
      bullets: ['Logística central', 'Distribución paneuropea', 'Soporte profesional', 'Garantía de calidad'],
    },
    {
      title: 'Turquía, Oriente Medio y Golfo — comercial',
      body: 'Nuestras oficinas en esta región estratégica ofrecen soluciones a medida y respuesta rápida.',
      bullets: ['Experiencia de mercado regional', 'Soluciones personalizadas', 'Logística ágil', 'Atención local'],
    },
  ],
  qualityProcessTitle: 'Nuestro proceso de calidad',
  qualityProcessSubtitle: 'Excelencia en cada paso',
  processSteps: [
    {
      title: 'Selección de parcelas',
      desc: 'Antes de la cosecha validamos parcelas y potencial de lote directamente en origen.',
    },
    {
      title: 'Fermentación',
      desc: 'Gestionamos tiempos y condiciones por lote para lograr perfiles consistentes.',
    },
    {
      title: 'Secado',
      desc: 'Secado controlado para estabilizar humedad y reducir defectos.',
    },
    {
      title: 'Clasificación',
      desc: 'Selección de defectos y clasificación final antes de la exportación.',
    },
  ],
  portfolioSectionTitle: 'Nuestro portafolio de productos',
  portfolioSectionSubtitle: 'Soluciones para cada necesidad',
  portfolioQualityFallbackNote:
    'Este segmento no muestra una banda cupping fija en inicio; el contenido depende del proyecto o la categoría.',
  portfolioExploreCta: 'Explorar →',
  portfolioQualityTierName: {
    'competition-lot': 'Premium',
    'micro-lot': 'Premium',
    specialty: 'Alta calidad',
    'specialty-blend': 'Alta calidad',
    'commercial-lot': 'Estándar',
    mixed: 'Flexible',
    'roasted-coffee': 'Producto listo',
  },
  portfolioTopSegmentRibbon: 'Segmento superior',
  portfolioMixedRibbon: 'Multi-perfil',
  portfolioCategories: {
    'competition-lot': {
      title: 'Competition lot',
      desc: 'Lotes de gama alta con altos puntajes de cata.',
      scoreLine: 'Cupping 90+',
      qualityBandCaption:
        'En la escala cupping 80–100, la barra queda arriba. Rango típico de este segmento: 90+.',
    },
    'micro-lot': {
      title: 'Micro lot',
      desc: 'Cafés limitados de microlotes seleccionados.',
      scoreLine: 'Cupping 85–90',
      qualityBandCaption:
        'La barra refleja la zona alta-media de la escala 80–100. Rango cupping típico: 85–90.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Líneas Arabica premium seleccionadas.',
      scoreLine: 'Cupping 82–85',
      qualityBandCaption:
        'La barra se sitúa hacia el centro de la escala 80–100. Puntuaciones típicas: 82–85.',
    },
    'specialty-blend': {
      title: 'Specialty blend',
      desc: 'Mezclas expertas para perfiles equilibrados.',
      scoreLine: 'Cupping 82–85',
      qualityBandCaption:
        'La barra corresponde al segmento medio de la escala 80–100 para blends specialty. Rango típico: 82–85.',
    },
    'commercial-lot': {
      title: 'Commercial lot',
      desc: 'Línea comercial para volumen y constancia.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'La barra queda en la zona baja-media de la escala 80–100. Los lotes comerciales suelen cuppear entre 80 y 82.',
    },
    mixed: {
      title: 'Mixed',
      desc: 'Soluciones mixtas flexibles para proyectos especiales.',
      scoreLine: null,
      qualityBandCaption: null,
    },
    'roasted-coffee': {
      title: 'Roasted coffee',
      desc: 'Productos listos con perfiles de tueste profesionales.',
      scoreLine: null,
      qualityBandCaption: null,
    },
  },
  portfolioDetail: portfolioDetailByLocale.es,
  portfolioEmpty: 'Aún no hay productos asignados a esta categoría. La lista se actualizará pronto.',
  missionTitle: 'Nuestra misión',
  missionBody:
    'Nuestra misión es llevar el legado cafetero sudamericano a compradores profesionales con abastecimiento transparente y calidad medible. Construimos alianzas a largo plazo con productores y priorizamos confianza, sostenibilidad y respeto en cada paso.',
  missionPillars: ['Pasión', 'Calidad', 'Confianza', 'Sostenibilidad'],
};

export const homeExtendedByLocale: Record<Locale, HomeExtendedShape> = {
  tr,
  de,
  en,
  fr,
  es,
};
