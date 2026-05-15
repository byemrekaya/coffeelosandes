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
    'roasted-coffee': 'Hazır ürün',
  },
  portfolioTopSegmentRibbon: 'Üst segment',
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
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'Çubuk 80–100 ölçeğinde üst-orta bandı işaret eder. Micro lot tipik cupping aralığı 84–89’dur.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Özenle seçilmiş, yüksek kalite Arabica serileri.',
      scoreLine: 'Cupping 84–86',
      qualityBandCaption:
        'Çubuk 80–100 ölçeğinde stabil premium specialty hattını yansıtır. Bu kategorideki lotların tipik cupping aralığı 84–86’dır.',
    },
    'specialty-blend': {
      title: 'Specialty Blend',
      desc: 'Dengeli profiller için uzman harmanlar.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'Harmon lotlarımız genelde micro bandında cupping görür. Çubuk 80–100 ölçeğinde tipik aralık 84–89’dur.',
    },
    'commercial-lot': {
      title: 'Commercial Lot',
      desc: 'Yüksek hacim ve tutarlı kalite için ticari hat.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'Çubuk 80–100 ölçeğinde giriş seviyesi ticari yeşil çekirdek bandını gösterir. Tipik cupping aralığı 80–82’dir.',
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
    'roasted-coffee': 'Fertigprodukt',
  },
  portfolioTopSegmentRibbon: 'Oberes Segment',
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
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'Der Balken markiert das obere Mittelfeld der 80–100er Skala. Typische Cupping-Bandbreite für Micro Lots: 84–89.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Sorgfältig ausgewählte Premium-Arabica-Serien.',
      scoreLine: 'Cupping 84–86',
      qualityBandCaption:
        'Der Balken zeigt die Stabil-Premium-Specialty-Linie auf der 80–100er Skala. Typische Cupping-Bandbreite auf dieser Seite: 84–86.',
    },
    'specialty-blend': {
      title: 'Specialty Blend',
      desc: 'Experten-Blends für ausgewogene Profile.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'Unsere Blends cuppen meist im Micro-Band. Auf der 80–100er Skala typischerweise 84–89.',
    },
    'commercial-lot': {
      title: 'Commercial Lot',
      desc: 'Handelslinie für Volumen und konsistente Qualität.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'Der Balken steht für die Einstiegs-Commercial-Rohkaffee-Linie auf der 80–100er Skala. Typische Bandbreite: 80–82.',
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
    'roasted-coffee': 'Shelf-ready',
  },
  portfolioTopSegmentRibbon: 'Top tier',
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
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'The bar reflects the upper-mid band on the 80–100 scale. Typical micro-lot cupping range: 84–89.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Curated premium Arabica lines.',
      scoreLine: 'Cupping 84–86',
      qualityBandCaption:
        'The bar reflects the stabil-premium specialty tier on the 80–100 scale. Typical cupping band for lots on this page: 84–86.',
    },
    'specialty-blend': {
      title: 'Specialty blend',
      desc: 'Expert blends for balanced profiles.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'Our blends usually cup in the micro band. On the 80–100 scale, typical range: 84–89.',
    },
    'commercial-lot': {
      title: 'Commercial lot',
      desc: 'Commercial line for volume and consistent quality.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'The bar represents the entry commercial green-coffee tier on the 80–100 scale. Typical cupping band: 80–82.',
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

const nl: HomeExtendedShape = {
  storyEyebrow: '20+ jaar',
  storySectionTitle: 'Ons verhaal',
  storyLead: 'Traditie, herkomst en kwaliteit — van bron tot Europa.',
  storyParagraphs: [
    'Los Andes Europe GmbH verbindt herkomst en markt via directe relaties met producenten, transparante sourcing en compromisloze kwaliteit. Onze wortels liggen in Zuid-Amerika — onze levercapaciteit in Europa.',
    'Vandaag leveren we planbare, consistente partijen voor professionals met sourcing in Venezuela, regionale commerciële operaties en logistiek in heel Europa.',
  ],
  storyHighlights: [
    'Directe ervaring in de volledige toeleveringsketen',
    'Sterke wortels in Zuid-Amerika',
    'Betrouwbare handels- en logistieke structuur in Europa',
  ],
  storyNote: {
    title: 'Merknotitie',
    body: 'Voor ons is koffie niet alleen een product — het is erfgoed, passie en een levensstijl.',
  },
  storyImageAlt: 'Koffieplantage en oogst',
  storyAboutCtaLabel: 'Lees het volledige Venezuela-herkomstverhaal',
  storyWhoWeAreCtaLabel: 'Wie zijn wij',
  stats: [
    { value: '20+', label: 'Jaar ervaring' },
    { value: '3', label: 'Kernregio’s' },
    { value: '50+', label: 'Producentpartners' },
    { value: 'EU', label: 'Logistiek netwerk' },
  ],
  regionsTitle: 'Onze regio’s',
  regionsSubtitle: 'Wereldwijde aanwezigheid, lokale expertise',
  regions: [
    {
      title: 'Venezuela — productie & sourcing',
      body: 'Geografie en klimaat in Venezuela maken uitzonderlijke koffie mogelijk. We werken direct met producentengezinnen.',
      bullets: [
        'Directe handelsrelaties',
        'Duurzame praktijken',
        'Gemeenschapssteun',
        'Microlot-traceerbaarheid',
      ],
    },
    {
      title: 'Europa — logistiek & service',
      body: 'Ons Europese hub en distributienetwerk zorgen voor betrouwbare levering op het hele continent.',
      bullets: ['Centrale logistiek', 'Paneuropese distributie', 'Professionele ondersteuning', 'Kwaliteitsborging'],
    },
    {
      title: 'Turkije, Midden-Oosten & Golf — commercieel',
      body: 'Onze kantoren in deze strategische regio bieden maatwerk en snelle respons op klantbehoeften.',
      bullets: [
        'Regionale marktexpertise',
        'Op maat gemaakte oplossingen',
        'Snelle logistiek',
        'Lokale klantenservice',
      ],
    },
  ],
  qualityProcessTitle: 'Ons kwaliteitsproces',
  qualityProcessSubtitle: 'Uitmuntendheid in elke stap',
  processSteps: [
    {
      title: 'Perceelselectie',
      desc: 'Voor de oogst bezoekt ons team boerderijen om de beste percelen te kiezen — microklimaat, bodem en historie worden beoordeeld.',
    },
    {
      title: 'Fermentatie',
      desc: 'Fermentatie geeft de koffie karakter. We monitoren elke partij voor optimale smaakprofielen.',
    },
    {
      title: 'Drogen',
      desc: 'Gecontroleerd drogen met traditionele methoden helpt ideale vochtigheid te bereiken en off-flavours te vermijden.',
    },
    {
      title: 'Sorteren',
      desc: 'In de laatste fase worden bonen zorgvuldig met de hand gesorteerd zodat alleen de hoogste standaard uw kop bereikt.',
    },
  ],
  portfolioSectionTitle: 'Ons productportfolio',
  portfolioSectionSubtitle: 'Oplossingen voor elke behoefte',
  portfolioQualityFallbackNote:
    'Dit segment heeft geen vaste cuppingband op de homekaart; het aanbod hangt af van project of categorie.',
  portfolioExploreCta: 'Ontdek →',
  portfolioQualityTierName: {
    'competition-lot': 'Premium',
    'micro-lot': 'Premium',
    specialty: 'Hoog',
    'specialty-blend': 'Hoog',
    'commercial-lot': 'Standaard',
    'roasted-coffee': 'Winkelklaar',
  },
  portfolioTopSegmentRibbon: 'Topsegment',
  portfolioCategories: {
    'competition-lot': {
      title: 'Competitiepartij',
      desc: 'Toppartijen met hoge cup-scores en collectiewaarde.',
      scoreLine: 'Cupping 90+',
      qualityBandCaption:
        'Op de cuppingschaal 80–100 ligt de lat bovenaan. Typische scores voor dit segment: 90+.',
    },
    'micro-lot': {
      title: 'Microlot',
      desc: 'Beperkte koffies van geselecteerde micropercelen.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'De balk weerspiegelt het boven-middenbereik van de schaal 80–100. Typisch microlot-bereik: 84–89.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Geselecteerde premium Arabica-lijnen.',
      scoreLine: 'Cupping 84–86',
      qualityBandCaption:
        'De balk weerspiegelt het stabiele specialty-segment op de schaal 80–100. Typisch cupping-bereik op deze pagina: 84–86.',
    },
    'specialty-blend': {
      title: 'Specialty-blend',
      desc: 'Expertblends voor evenwichtige profielen.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'Onze blends cuppen meestal in het microlot-bereik. Op de schaal 80–100 typisch bereik: 84–89.',
    },
    'commercial-lot': {
      title: 'Commerciële partij',
      desc: 'Commerciële lijn voor volume en consistente kwaliteit.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'De balk vertegenwoordigt het instap-commerciële groene-koffiesegment op de schaal 80–100. Typisch cupping-bereik: 80–82.',
    },
    'roasted-coffee': {
      title: 'Gebrande koffie',
      desc: 'Kant-en-klare producten met professionele brandprofielen.',
      scoreLine: null,
      qualityBandCaption: null,
    },
  },
  portfolioDetail: portfolioDetailByLocale.nl,
  portfolioEmpty: 'Er zijn nog geen producten aan deze categorie gekoppeld. De lijst wordt binnenkort bijgewerkt.',
  missionTitle: 'Onze missie',
  missionBody:
    'Onze missie is het Zuid-Amerikaanse koffie-erfenis naar professionele kopers te brengen via transparante sourcing en meetbare kwaliteit. We bouwen langetermijnpartnerschappen met producenten en plaatsen vertrouwen, duurzaamheid en respect voorop.',
  missionPillars: ['Passie', 'Kwaliteit', 'Vertrouwen', 'Duurzaamheid'],
};
const pl: HomeExtendedShape = {
  storyEyebrow: 'Ponad 20 lat',
  storySectionTitle: 'Nasza historia',
  storyLead: 'Tradycja, pochodzenie i jakość — od źródła do Europy.',
  storyParagraphs: [
    'Los Andes Europe GmbH łączy pochodzenie z rynkiem dzięki bezpośrednim relacjom z producentami, przejrzystemu pozyskiwaniu i bezkompromisowej jakości. Nasze korzenie są w Ameryce Południowej — nasza zdolność dostawcza jest w Europie.',
    'Dziś dostarczamy przewidywalne, spójne partie dla profesjonalistów z pozyskiwaniem w Wenezueli, regionalnymi operacjami handlowymi i logistyką w całej Europie.',
  ],
  storyHighlights: [
    'Bezpośrednie doświadczenie w całym łańcuchu dostaw',
    'Silne korzenie w Ameryce Południowej',
    'Niezawodna struktura handlowa i logistyczna w Europie',
  ],
  storyNote: {
    title: 'Nota marki',
    body: 'Dla nas kawa to nie tylko produkt — to dziedzictwo, pasja i styl życia.',
  },
  storyImageAlt: 'Plantacja i zbiór kawy',
  storyAboutCtaLabel: 'Przeczytaj pełną historię pochodzenia z Wenezueli',
  storyWhoWeAreCtaLabel: 'Kim jesteśmy',
  stats: [
    { value: '20+', label: 'Lat doświadczenia' },
    { value: '3', label: 'Kluczowe regiony' },
    { value: '50+', label: 'Partnerów producentów' },
    { value: 'UE', label: 'Sieć logistyczna' },
  ],
  regionsTitle: 'Nasze regiony',
  regionsSubtitle: 'Obecność globalna, ekspertyza lokalna',
  regions: [
    {
      title: 'Wenezuela — produkcja i pozyskiwanie',
      body: 'Geografia i klimat Wenezueli sprzyjają wyjątkowej kawie. Pracujemy bezpośrednio z rodzinami producentów.',
      bullets: [
        'Bezpośrednie relacje handlowe',
        'Praktyki zrównoważone',
        'Wsparcie społeczności',
        'Śledzenie mikrolotów',
      ],
    },
    {
      title: 'Europa — logistyka i serwis',
      body: 'Nasze centrum i sieć dystrybucji w Europie zapewniają niezawodne dostawy na całym kontynencie.',
      bullets: ['Centralna logistyka', 'Dystrybucja w całej Europie', 'Wsparcie profesjonalne', 'Gwarancja jakości'],
    },
    {
      title: 'Turcja, Bliski Wschód i Zatoka — handel',
      body: 'Biura w tym strategicznym regionie oferują rozwiązania szyte na miarę i szybką reakcję na potrzeby klientów.',
      bullets: [
        'Ekspertyza rynku regionalnego',
        'Rozwiązania dopasowane',
        'Szybka logistyka',
        'Lokalna obsługa klienta',
      ],
    },
  ],
  qualityProcessTitle: 'Nasz proces jakości',
  qualityProcessSubtitle: 'Doskonałość na każdym etapie',
  processSteps: [
    {
      title: 'Selekcja działek',
      desc: 'Przed zbiorami nasz zespół odwiedza farmy, by wybrać najlepsze działki — ocenia mikroklimat, glebę i historię.',
    },
    {
      title: 'Fermentacja',
      desc: 'Fermentacja kształtuje charakter kawy. Monitorujemy każdą partię pod kątem optymalnych profili smakowych.',
    },
    {
      title: 'Suszenie',
      desc: 'Kontrolowane suszenie tradycyjnymi metodami pomaga osiągnąć idealną wilgotność i uniknąć off-flavorów.',
    },
    {
      title: 'Sortowanie',
      desc: 'Na końcu ziarna są starannie sortowane ręcznie, by do filiżanki trafił tylko najwyższy standard.',
    },
  ],
  portfolioSectionTitle: 'Nasze portfolio produktów',
  portfolioSectionSubtitle: 'Rozwiązania na każdą potrzebę',
  portfolioQualityFallbackNote:
    'Ten segment nie ma stałej bandy cuppingu na karcie strony głównej; oferta zależy od projektu lub kategorii.',
  portfolioExploreCta: 'Odkryj →',
  portfolioQualityTierName: {
    'competition-lot': 'Premium',
    'micro-lot': 'Premium',
    specialty: 'Wysoka',
    'specialty-blend': 'Wysoka',
    'commercial-lot': 'Standard',
    'roasted-coffee': 'Gotowy do półki',
  },
  portfolioTopSegmentRibbon: 'Segment top',
  portfolioCategories: {
    'competition-lot': {
      title: 'Partia konkursowa',
      desc: 'Partie top z wysokim scoringiem cuppingu i walorem kolekcjonerskim.',
      scoreLine: 'Cupping 90+',
      qualityBandCaption:
        'Na skali cuppingu 80–100 poprzeczka jest w górnej części. Typowe wyniki dla tego segmentu: 90+.',
    },
    'micro-lot': {
      title: 'Mikrolot',
      desc: 'Limitowane kawy z wybranych mikrodziałek.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'Pasek odzwierciedla górną część środka skali 80–100. Typowy zakres mikrolotów: 84–89.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Wyselekcjonowane linie premium Arabica.',
      scoreLine: 'Cupping 84–86',
      qualityBandCaption:
        'Pasek odzwierciedla stabilny segment specialty na skali 80–100. Typowy zakres cuppingu partii na tej stronie: 84–86.',
    },
    'specialty-blend': {
      title: 'Mieszanka specialty',
      desc: 'Eksperckie mieszanki pod zrównoważone profile.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'Nasze mieszanki zwykle cuppingują w paśmie mikrolotów. Na skali 80–100 typowy zakres: 84–89.',
    },
    'commercial-lot': {
      title: 'Partia komercyjna',
      desc: 'Linia komercyjna na wolumen i stałą jakość.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'Pasek reprezentuje podstawowy segment zielonej kawy komercyjnej na skali 80–100. Typowy zakres cuppingu: 80–82.',
    },
    'roasted-coffee': {
      title: 'Kawa palona',
      desc: 'Gotowe produkty z profesjonalnym profilem palenia.',
      scoreLine: null,
      qualityBandCaption: null,
    },
  },
  portfolioDetail: portfolioDetailByLocale.pl,
  portfolioEmpty: 'Żadne produkty nie są jeszcze przypisane do tej kategorii. Lista zostanie wkrótce zaktualizowana.',
  missionTitle: 'Nasza misja',
  missionBody:
    'Naszą misją jest przenoszenie dziedzictwa kawowego Ameryki Południowej do kupujących profesjonalnych poprzez przejrzyste pozyskiwanie i mierzalną jakość. Budujemy długoterminowe partnerstwa z producentami i stawiamy zaufanie, zrównoważony rozwój oraz szacunek na pierwszym miejscu.',
  missionPillars: ['Pasja', 'Jakość', 'Zaufanie', 'Zrównoważony rozwój'],
};
const cs: HomeExtendedShape = {
  storyEyebrow: 'Více než 20 let',
  storySectionTitle: 'Náš příběh',
  storyLead: 'Tradice, původ a kvalita — od zdroje do Evropy.',
  storyParagraphs: [
    'Los Andes Europe GmbH spojuje původ a trh díky přímým vztahům s producenty, transparentnímu sourcingu a nekompromisní kvalitě. Naše kořeny jsou v Jižní Americe — naše dodávková kapacita je v Evropě.',
    'Dnes dodáváme předvídatelné, konzistentní šarže pro profesionály se sourcingem ve Venezuele, regionálními obchodními operacemi a logistikou v celé Evropě.',
  ],
  storyHighlights: [
    'Přímá zkušenost v celém řetězci dodávek',
    'Silné kořeny v Jižní Americe',
    'Spolehlivá obchodní a logistická struktura v Evropě',
  ],
  storyNote: {
    title: 'Poznámka značky',
    body: 'Pro nás není káva jen produkt — je to dědictví, vášeň a životní styl.',
  },
  storyImageAlt: 'Kávová plantáž a sklizeň',
  storyAboutCtaLabel: 'Přečtěte si celý příběh původu z Venezuely',
  storyWhoWeAreCtaLabel: 'Kdo jsme',
  stats: [
    { value: '20+', label: 'Let zkušeností' },
    { value: '3', label: 'Klíčové regiony' },
    { value: '50+', label: 'Partnerských producentů' },
    { value: 'EU', label: 'Logistická síť' },
  ],
  regionsTitle: 'Naše regiony',
  regionsSubtitle: 'Globální přítomnost, lokální expertiza',
  regions: [
    {
      title: 'Venezuela — výroba a sourcing',
      body: 'Geografie a klima ve Venezuele umožňují výjimečnou kávu. Pracujeme přímo s rodinami producentů.',
      bullets: [
        'Přímé obchodní vztahy',
        'Udržitelné postupy',
        'Podpora komunit',
        'Sledovatelnost mikrolotů',
      ],
    },
    {
      title: 'Evropa — logistika a servis',
      body: 'Naše evropské centrum a distribuční síť zajišťují spolehlivé dodávky na celém kontinentu.',
      bullets: ['Centrální logistika', 'Distribuce po celé Evropě', 'Profesionální podpora', 'Záruka kvality'],
    },
    {
      title: 'Turecko, Střední východ a Perský záliv — obchod',
      body: 'Naše kanceláře v této strategické oblasti nabízejí řešení na míru a rychlou reakci na potřeby zákazníků.',
      bullets: [
        'Regionální tržní expertíza',
        'Přizpůsobená řešení',
        'Rychlá logistika',
        'Lokální zákaznický servis',
      ],
    },
  ],
  qualityProcessTitle: 'Náš kvalitní proces',
  qualityProcessSubtitle: 'Excelence v každém kroku',
  processSteps: [
    {
      title: 'Výběr parcel',
      desc: 'Před sklizní náš tým navštěvuje farmy a vybírá nejlepší parcely — hodnotí mikroklima, půdu a historii.',
    },
    {
      title: 'Fermentace',
      desc: 'Fermentace utváří charakter kávy. Sledujeme každou šarži pro optimální chuťové profily.',
    },
    {
      title: 'Sušení',
      desc: 'Kontrolované sušení tradičními metodami pomáhá dosáhnout ideální vlhkosti a vyhnout se off-flavorům.',
    },
    {
      title: 'Třídění',
      desc: 'V závěru se zrna pečlivě třídí ručně, aby do šálku šla jen nejvyšší úroveň.',
    },
  ],
  portfolioSectionTitle: 'Naše produktové portfolio',
  portfolioSectionSubtitle: 'Řešení pro každou potřebu',
  portfolioQualityFallbackNote:
    'Tento segment nemá na domovské kartě pevné cuppingové pásmo; nabídka závisí na projektu nebo kategorii.',
  portfolioExploreCta: 'Objevit →',
  portfolioQualityTierName: {
    'competition-lot': 'Premium',
    'micro-lot': 'Premium',
    specialty: 'Vysoká',
    'specialty-blend': 'Vysoká',
    'commercial-lot': 'Standard',
    'roasted-coffee': 'Připraveno do regálu',
  },
  portfolioTopSegmentRibbon: 'Top segment',
  portfolioCategories: {
    'competition-lot': {
      title: 'Soutěžní šarže',
      desc: 'Top šarže s vysokým cup skóre a sběratelskou hodnotou.',
      scoreLine: 'Cupping 90+',
      qualityBandCaption:
        'Na škále cuppingu 80–100 je laťka nahoře. Typické skóre pro tento segment: 90+.',
    },
    'micro-lot': {
      title: 'Mikrolot',
      desc: 'Limitované kávy z vybraných mikroparcel.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'Pruh odráží horní střed škály 80–100. Typické pásmo mikrolotů: 84–89.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Vybrané prémiové linie Arabicy.',
      scoreLine: 'Cupping 84–86',
      qualityBandCaption:
        'Pruh odráží stabilní specialty segment na škále 80–100. Typické cuppingové pásmo šarží na této stránce: 84–86.',
    },
    'specialty-blend': {
      title: 'Specialty blend',
      desc: 'Expertní blendy pro vyvážené profily.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'Naše blendy obvykle cuppingují v pásmu mikrolotů. Na škále 80–100 typické pásmo: 84–89.',
    },
    'commercial-lot': {
      title: 'Komerční šarže',
      desc: 'Komerční linka pro objem a stálou kvalitu.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'Pruh představuje vstupní komerční segment zelené kávy na škále 80–100. Typické cuppingové pásmo: 80–82.',
    },
    'roasted-coffee': {
      title: 'Pražená káva',
      desc: 'Hotové produkty s profesionálními profily pražení.',
      scoreLine: null,
      qualityBandCaption: null,
    },
  },
  portfolioDetail: portfolioDetailByLocale.cs,
  portfolioEmpty: 'K této kategorii zatím nejsou přiřazeny žádné produkty. Seznam bude brzy aktualizován.',
  missionTitle: 'Naše mise',
  missionBody:
    'Naší misí je přinášet kávové dědictví Jižní Ameriky profesionálním kupcům prostřednictvím transparentního sourcingu a měřitelné kvality. Budujeme dlouhodobá partnerství s producenty a klademe důraz na důvěru, udržitelnost a respekt.',
  missionPillars: ['Vášeň', 'Kvalita', 'Důvěra', 'Udržitelnost'],
};
const it: HomeExtendedShape = {
  storyEyebrow: 'Oltre 20 anni',
  storySectionTitle: 'La nostra storia',
  storyLead: 'Tradizione, origine e qualità — dalla fonte all’Europa.',
  storyParagraphs: [
    'Los Andes Europe GmbH collega origine e mercato con relazioni dirette con i produttori, sourcing trasparente e qualità senza compromessi. Le nostre radici sono in Sudamerica — la nostra capacità di consegna è in Europa.',
    'Oggi forniamo partite prevedibili e coerenti per professionisti con sourcing in Venezuela, operazioni commerciali regionali e logistica in tutta Europa.',
  ],
  storyHighlights: [
    'Esperienza diretta su tutta la filiera',
    'Radici solide in Sudamerica',
    'Struttura commerciale e logistica affidabile in Europa',
  ],
  storyNote: {
    title: 'Nota del brand',
    body: 'Per noi il caffè non è solo un prodotto — è eredità, passione e stile di vita.',
  },
  storyImageAlt: 'Piantagione di caffè e raccolta',
  storyAboutCtaLabel: 'Leggi la storia completa dell’origine in Venezuela',
  storyWhoWeAreCtaLabel: 'Chi siamo',
  stats: [
    { value: '20+', label: 'Anni di esperienza' },
    { value: '3', label: 'Regioni chiave' },
    { value: '50+', label: 'Partner produttori' },
    { value: 'UE', label: 'Rete logistica' },
  ],
  regionsTitle: 'Le nostre regioni',
  regionsSubtitle: 'Presenza globale, competenza locale',
  regions: [
    {
      title: 'Venezuela — produzione & sourcing',
      body: 'Geografia e clima del Venezuela consentono un caffè eccezionale. Lavoriamo direttamente con famiglie di produttori.',
      bullets: [
        'Relazioni commerciali dirette',
        'Pratiche sostenibili',
        'Sostegno alle comunità',
        'Tracciabilità dei microlot',
      ],
    },
    {
      title: 'Europa — logistica & servizio',
      body: 'Il nostro hub europeo e la rete di distribuzione garantiscono forniture affidabili su tutto il continente.',
      bullets: ['Logistica centrale', 'Distribuzione paneuropea', 'Supporto professionale', 'Garanzia di qualità'],
    },
    {
      title: 'Turchia, Medio Oriente e Golfo — commerciale',
      body: 'I nostri uffici in questa regione strategica offrono soluzioni su misura e risposta rapida alle esigenze dei clienti.',
      bullets: [
        'Competenza di mercato regionale',
        'Soluzioni personalizzate',
        'Logistica rapida',
        'Assistenza clienti locale',
      ],
    },
  ],
  qualityProcessTitle: 'Il nostro processo di qualità',
  qualityProcessSubtitle: 'Eccellenza in ogni fase',
  processSteps: [
    {
      title: 'Selezione delle parcelle',
      desc: 'Prima del raccolto il nostro team visita le aziende per selezionare le migliori parcelle — valuta microclima, suolo e storia.',
    },
    {
      title: 'Fermentazione',
      desc: 'La fermentazione plasma il carattere del caffè. Monitoriamo ogni lotto per profili aromatici ottimali.',
    },
    {
      title: 'Essiccazione',
      desc: 'Essiccazione controllata con metodi tradizionali per raggiungere l’umidità ideale ed evitare difetti.',
    },
    {
      title: 'Selezione',
      desc: 'Nella fase finale i chicchi sono accuratamente selezionati a mano perché solo il massimo standard arrivi alla tazza.',
    },
  ],
  portfolioSectionTitle: 'Il nostro portfolio prodotti',
  portfolioSectionSubtitle: 'Soluzioni per ogni esigenza',
  portfolioQualityFallbackNote:
    'Questo segmento non ha una fascia cup fissa sulla card home; l’offerta dipende dal progetto o dalla categoria.',
  portfolioExploreCta: 'Scopri →',
  portfolioQualityTierName: {
    'competition-lot': 'Premium',
    'micro-lot': 'Premium',
    specialty: 'Alta',
    'specialty-blend': 'Alta',
    'commercial-lot': 'Standard',
    'roasted-coffee': 'Pronto per lo scaffale',
  },
  portfolioTopSegmentRibbon: 'Segmento top',
  portfolioCategories: {
    'competition-lot': {
      title: 'Lotto da competizione',
      desc: 'Lotti top con punteggi cup elevati e valore da collezione.',
      scoreLine: 'Cupping 90+',
      qualityBandCaption:
        'Sulla scala cup 80–100 la soglia è in alto. Punteggi tipici per questo segmento: 90+.',
    },
    'micro-lot': {
      title: 'Microlot',
      desc: 'Caffè limitati da micro-parcelle selezionate.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'La barra riflette la fascia medio-alta della scala 80–100. Intervallo tipico microlot: 84–89.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Linee Arabica premium selezionate.',
      scoreLine: 'Cupping 84–86',
      qualityBandCaption:
        'La barra riflette il segmento specialty stabile sulla scala 80–100. Intervallo cup tipico dei lotti in questa pagina: 84–86.',
    },
    'specialty-blend': {
      title: 'Blend specialty',
      desc: 'Blend esperti per profili equilibrati.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'I nostri blend di solito cupano nella fascia microlot. Sulla scala 80–100 intervallo tipico: 84–89.',
    },
    'commercial-lot': {
      title: 'Lotto commerciale',
      desc: 'Linea commerciale per volume e qualità costante.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'La barra rappresenta il segmento commerciale verde di ingresso sulla scala 80–100. Fascia cup tipica: 80–82.',
    },
    'roasted-coffee': {
      title: 'Caffè tostato',
      desc: 'Prodotti pronti con profili di tostatura professionali.',
      scoreLine: null,
      qualityBandCaption: null,
    },
  },
  portfolioDetail: portfolioDetailByLocale.it,
  portfolioEmpty: 'Nessun prodotto è ancora associato a questa categoria. L’elenco sarà aggiornato a breve.',
  missionTitle: 'La nostra missione',
  missionBody:
    'La nostra missione è portare l’eredità del caffè sudamericano ai buyer professionali attraverso sourcing trasparente e qualità misurabile. Costruiamo partnership a lungo termine con i produttori e mettiamo al centro fiducia, sostenibilità e rispetto.',
  missionPillars: ['Passione', 'Qualità', 'Fiducia', 'Sostenibilità'],
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
    'roasted-coffee': 'Produit fini',
  },
  portfolioTopSegmentRibbon: 'Segment haut',
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
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'La barre reflète la zone haute-médiane de l’échelle 80–100. Plage typique micro lot : 84–89.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Séries Arabica premium sélectionnées.',
      scoreLine: 'Cupping 84–86',
      qualityBandCaption:
        'La barre reflète la ligne specialty stabil premium sur l’échelle 80–100. Plage cupping typique des lots de cette page : 84–86.',
    },
    'specialty-blend': {
      title: 'Specialty blend',
      desc: 'Assemblages experts pour des profils équilibrés.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'Nos blends cuppent en général dans le bandeau micro. Sur l’échelle 80–100, plage typique : 84–89.',
    },
    'commercial-lot': {
      title: 'Commercial lot',
      desc: 'Ligne commerciale pour volume et constance.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'La barre représente le segment commercial vert de base sur l’échelle 80–100. Bande cupping typique : 80–82.',
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
    'roasted-coffee': 'Producto listo',
  },
  portfolioTopSegmentRibbon: 'Segmento superior',
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
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'La barra refleja la zona alta-media de la escala 80–100. Rango típico de micro lote: 84–89.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Líneas Arabica premium seleccionadas.',
      scoreLine: 'Cupping 84–86',
      qualityBandCaption:
        'La barra refleja la línea specialty stabil premium en la escala 80–100. Banda cupping típica de los lotes de esta página: 84–86.',
    },
    'specialty-blend': {
      title: 'Specialty blend',
      desc: 'Mezclas expertas para perfiles equilibrados.',
      scoreLine: 'Cupping 84–89',
      qualityBandCaption:
        'Nuestras mezclas suelen cuppear en la banda micro. En la escala 80–100, rango típico: 84–89.',
    },
    'commercial-lot': {
      title: 'Commercial lot',
      desc: 'Línea comercial para volumen y constancia.',
      scoreLine: 'Cupping 80–82',
      qualityBandCaption:
        'La barra representa el segmento comercial de café verde de entrada en la escala 80–100. Banda cupping típica: 80–82.',
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

const ru: HomeExtendedShape = {
  storyEyebrow: 'Более 20 лет',
  storySectionTitle: 'Наша история',
  storyLead: 'Традиция, происхождение и качество — от источника до Европы.',
  storyParagraphs: [
    'Los Andes Europe GmbH связывает происхождение и рынок через прямые отношения с производителями, прозрачное снабжение и неизменное качество. Наши корни — в Южной Америке, наши возможности поставок — в Европе.',
    'Сегодня мы поставляем планируемые, стабильные лоты для профессионалов: закупки в Венесуэле, региональные коммерческие операции и общеевропейская логистика.',
  ],
  storyHighlights: [
    'Прямой опыт по всей цепочке поставок',
    'Глубокие корни в Южной Америке',
    'Надёжная торговая и логистическая структура в Европе',
  ],
  storyNote: {
    title: 'Примечание основателя',
    body: 'Для нас кофе — это не просто продукт, это наследие, страсть и образ жизни.',
  },
  storyImageAlt: 'Кофейная ферма и сбор урожая',
  storyAboutCtaLabel: 'Читать полную историю происхождения из Венесуэлы',
  storyWhoWeAreCtaLabel: 'Кто мы',
  stats: [
    { value: '20+', label: 'Лет опыта' },
    { value: '3', label: 'Ключевых региона' },
    { value: '50+', label: 'Партнёров-производителей' },
    { value: 'ЕС', label: 'Логистическая сеть' },
  ],
  regionsTitle: 'Наши регионы',
  regionsSubtitle: 'Глобальное присутствие, местная экспертиза',
  regions: [
    {
      title: 'Венесуэла — производство и закупки',
      body: 'География и климат Венесуэлы позволяют выращивать исключительный кофе. Мы работаем напрямую с семьями производителей в регионе.',
      bullets: ['Прямые торговые отношения', 'Устойчивые практики', 'Поддержка сообщества', 'Прослеживаемость микро-лотов'],
    },
    {
      title: 'Европа — логистика и сервис',
      body: 'Наш европейский хаб и сеть дистрибуции обеспечивают надёжные поставки по всему континенту.',
      bullets: ['Централизованная логистика', 'Общеевропейская дистрибуция', 'Профессиональная поддержка', 'Контроль качества'],
    },
    {
      title: 'Турция, Ближний Восток и Залив — коммерция',
      body: 'Через наши офисы в этом стратегическом регионе мы предлагаем индивидуальные решения и быстрое реагирование на потребности клиентов.',
      bullets: ['Экспертиза регионального рынка', 'Индивидуальные решения', 'Оперативная логистическая поддержка', 'Местный клиентский сервис'],
    },
  ],
  qualityProcessTitle: 'Наш процесс качества',
  qualityProcessSubtitle: 'Совершенство на каждом этапе',
  processSteps: [
    {
      title: 'Выбор участков',
      desc: 'До сбора урожая наша команда посещает фермы для отбора лучших участков, оценивая микроклимат, почву и историю.',
    },
    {
      title: 'Ферментация',
      desc: 'Ферментация формирует характер кофе. Мы контролируем каждый лот для развития оптимального вкусового профиля.',
    },
    {
      title: 'Сушка',
      desc: 'Контролируемая сушка традиционными методами помогает достичь идеальной влажности и избежать посторонних вкусов.',
    },
    {
      title: 'Сортировка',
      desc: 'На финальном этапе зёрна тщательно сортируются вручную, чтобы только самый высокий стандарт попал в вашу чашку.',
    },
  ],
  portfolioSectionTitle: 'Наше портфолио продуктов',
  portfolioSectionSubtitle: 'Решения для каждой потребности',
  portfolioQualityFallbackNote:
    'Этот сегмент не имеет фиксированного диапазона каппинга на карточке главной страницы; предложения зависят от проекта или категории.',
  portfolioExploreCta: 'Исследовать →',
  portfolioQualityTierName: {
    'competition-lot': 'Премиум',
    'micro-lot': 'Премиум',
    specialty: 'Высокий',
    'specialty-blend': 'Высокий',
    'commercial-lot': 'Стандарт',
    'roasted-coffee': 'Готово к продаже',
  },
  portfolioTopSegmentRibbon: 'Топ сегмент',
  portfolioCategories: {
    'competition-lot': {
      title: 'Конкурсный лот',
      desc: 'Лоты высшего уровня с высокими рейтингами чашки.',
      scoreLine: 'Каппинг 90+ лотов',
      qualityBandCaption:
        'На шкале каппинга 80–100 полоса находится в верхнем диапазоне. Типичные оценки для этого сегмента: 90+.',
    },
    'micro-lot': {
      title: 'Микро-лот',
      desc: 'Ограниченный кофе с отобранных микро-участков.',
      scoreLine: 'Каппинг 84–89',
      qualityBandCaption:
        'Полоса отражает верхне-средний диапазон на шкале 80–100. Типичный диапазон каппинга микро-лота: 84–89.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'Отборные премиальные линейки арабики.',
      scoreLine: 'Каппинг 84–86',
      qualityBandCaption:
        'Полоса отражает стабильно-премиальный уровень specialty на шкале 80–100. Типичный диапазон каппинга: 84–86.',
    },
    'specialty-blend': {
      title: 'Specialty blend',
      desc: 'Экспертные бленды для сбалансированных профилей.',
      scoreLine: 'Каппинг 84–89',
      qualityBandCaption:
        'Наши бленды обычно попадают в диапазон микро. На шкале 80–100, типичный диапазон: 84–89.',
    },
    'commercial-lot': {
      title: 'Коммерческий лот',
      desc: 'Коммерческая линейка для объёма и стабильного качества.',
      scoreLine: 'Каппинг 80–82',
      qualityBandCaption:
        'Полоса представляет начальный коммерческий уровень зелёного кофе на шкале 80–100. Типичный диапазон каппинга: 80–82.',
    },
    'roasted-coffee': {
      title: 'Обжаренный кофе',
      desc: 'Готовые продукты с профессиональными профилями обжарки.',
      scoreLine: null,
      qualityBandCaption: null,
    },
  },
  portfolioDetail: portfolioDetailByLocale.ru,
  portfolioEmpty: 'В этой категории ещё нет продуктов. Список будет обновлён в ближайшее время.',
  missionTitle: 'Наша миссия',
  missionBody:
    'Наша миссия — донести кофейное наследие Южной Америки до профессиональных покупателей через прозрачные закупки и измеримое качество. Мы выстраиваем долгосрочные партнёрства с производителями и придерживаемся доверия, устойчивости и уважения на каждом шагу.',
  missionPillars: ['Страсть', 'Качество', 'Доверие', 'Устойчивость'],
};

const ar: HomeExtendedShape = {
  storyEyebrow: 'أكثر من 20 عاماً',
  storySectionTitle: 'قصتنا',
  storyLead: 'التقاليد والمنشأ والجودة — من المصدر إلى أوروبا.',
  storyParagraphs: [
    'تربط شركة Los Andes Europe GmbH المنشأ بالسوق من خلال علاقات مباشرة مع المنتجين، ومصادر شفافة وجودة لا تحتمل التنازل. جذورنا في أمريكا الجنوبية — وقدرتنا على التوصيل في أوروبا.',
    'نوفر اليوم أصنافاً قابلة للتخطيط ومتسقة للمحترفين مع التوريد من فنزويلا والعمليات التجارية الإقليمية واللوجستيات الأوروبية الشاملة.',
  ],
  storyHighlights: [
    'خبرة مباشرة عبر سلسلة التوريد الكاملة',
    'جذور راسخة في أمريكا الجنوبية',
    'هيكل تجاري ولوجستي موثوق في أوروبا',
  ],
  storyNote: {
    title: 'ملاحظة المؤسس',
    body: 'بالنسبة لنا، القهوة ليست مجرد منتج — إنها إرث وشغف وأسلوب حياة.',
  },
  storyImageAlt: 'مزرعة قهوة وموسم الحصاد',
  storyAboutCtaLabel: 'اقرأ قصة منشأ فنزويلا الكاملة',
  storyWhoWeAreCtaLabel: 'من نحن',
  stats: [
    { value: '20+', label: 'سنوات من الخبرة' },
    { value: '3', label: 'مناطق رئيسية' },
    { value: '50+', label: 'شركاء منتجون' },
    { value: 'EU', label: 'شبكة لوجستية' },
  ],
  regionsTitle: 'مناطقنا',
  regionsSubtitle: 'حضور عالمي، خبرة محلية',
  regions: [
    {
      title: 'فنزويلا — الإنتاج والتوريد',
      body: 'تسمح جغرافيا فنزويلا ومناخها بزراعة قهوة استثنائية. نعمل مباشرة مع عائلات المنتجين في المنطقة.',
      bullets: ['علاقات تجارية مباشرة', 'ممارسات مستدامة', 'دعم المجتمع', 'إمكانية تتبع الميكرو-لوت'],
    },
    {
      title: 'أوروبا — اللوجستيات والخدمة',
      body: 'يضمن مركزنا الأوروبي وشبكة التوزيع لدينا توريداً موثوقاً عبر القارة.',
      bullets: ['لوجستيات مركزية', 'توزيع شامل لأوروبا', 'دعم احترافي', 'ضمان الجودة'],
    },
    {
      title: 'تركيا والشرق الأوسط والخليج — تجاري',
      body: 'من خلال مكاتبنا في هذه المنطقة الاستراتيجية نقدم حلولاً مخصصة واستجابة سريعة لاحتياجات العملاء.',
      bullets: ['خبرة السوق الإقليمية', 'حلول مخصصة', 'دعم لوجستي سريع', 'خدمة عملاء محلية'],
    },
  ],
  qualityProcessTitle: 'عملية الجودة لدينا',
  qualityProcessSubtitle: 'التميز في كل خطوة',
  processSteps: [
    {
      title: 'اختيار القطع',
      desc: 'قبل الحصاد، يزور فريقنا المزارع لاختيار أفضل القطع، مع تقييم المناخ المحلي والتربة والتاريخ.',
    },
    {
      title: 'التخمير',
      desc: 'يشكّل التخمير شخصية القهوة. نراقب كل صنف لتطوير ملفات نكهة مثالية.',
    },
    {
      title: 'التجفيف',
      desc: 'يساعد التجفيف المتحكم به بالأساليب التقليدية على الوصول إلى الرطوبة المثالية وتجنب النكهات الغريبة.',
    },
    {
      title: 'الفرز',
      desc: 'في المرحلة الأخيرة، يتم فرز الحبوب يدوياً بعناية حتى يصل فقط أعلى معيار إلى كوبك.',
    },
  ],
  portfolioSectionTitle: 'محفظة منتجاتنا',
  portfolioSectionSubtitle: 'حلول لكل احتياج',
  portfolioQualityFallbackNote:
    'هذا الفئة لا تمتلك نطاق تذوق ثابتاً في بطاقة الصفحة الرئيسية؛ العروض تعتمد على المشروع أو الفئة.',
  portfolioExploreCta: 'استكشف →',
  portfolioQualityTierName: {
    'competition-lot': 'مميز',
    'micro-lot': 'مميز',
    specialty: 'عالٍ',
    'specialty-blend': 'عالٍ',
    'commercial-lot': 'قياسي',
    'roasted-coffee': 'جاهز للبيع',
  },
  portfolioTopSegmentRibbon: 'الفئة الأعلى',
  portfolioCategories: {
    'competition-lot': {
      title: 'صنف المسابقة',
      desc: 'أصناف من أعلى مستوى بدرجات كوب عالية.',
      scoreLine: 'تذوق 90+ صنف',
      qualityBandCaption:
        'على مقياس التذوق 80–100، تقع الشريط في النطاق الأعلى. الدرجات النموذجية لهذا الفئة: 90+.',
    },
    'micro-lot': {
      title: 'ميكرو-لوت',
      desc: 'قهوة محدودة من قطع ميكرو مختارة.',
      scoreLine: 'تذوق 84–89',
      qualityBandCaption:
        'تعكس الشريط النطاق الأعلى-المتوسط على مقياس 80–100. النطاق النموذجي لتذوق الميكرو-لوت: 84–89.',
    },
    specialty: {
      title: 'Specialty',
      desc: 'خطوط أرابيكا فاخرة مختارة.',
      scoreLine: 'تذوق 84–86',
      qualityBandCaption:
        'تعكس الشريط مستوى الـ specialty المميز على مقياس 80–100. النطاق النموذجي: 84–86.',
    },
    'specialty-blend': {
      title: 'Specialty blend',
      desc: 'مزيج خبير لملفات متوازنة.',
      scoreLine: 'تذوق 84–89',
      qualityBandCaption:
        'عادةً ما تقع مزيجاتنا في نطاق الميكرو. على مقياس 80–100، النطاق النموذجي: 84–89.',
    },
    'commercial-lot': {
      title: 'صنف تجاري',
      desc: 'خط تجاري للحجم والجودة المتسقة.',
      scoreLine: 'تذوق 80–82',
      qualityBandCaption:
        'تمثل الشريط مستوى القهوة الخضراء التجارية الأساسي على مقياس 80–100. النطاق النموذجي: 80–82.',
    },
    'roasted-coffee': {
      title: 'قهوة محمصة',
      desc: 'منتجات جاهزة بملفات تحميص احترافية.',
      scoreLine: null,
      qualityBandCaption: null,
    },
  },
  portfolioDetail: portfolioDetailByLocale.ar,
  portfolioEmpty: 'لا توجد منتجات مرتبطة بهذه الفئة بعد. سيتم تحديث القائمة قريباً.',
  missionTitle: 'مهمتنا',
  missionBody:
    'مهمتنا هي إيصال إرث القهوة في أمريكا الجنوبية إلى المشترين المحترفين من خلال مصادر شفافة وجودة قابلة للقياس. نبني شراكات طويلة الأمد مع المنتجين ونلتزم بالثقة والاستدامة والاحترام في كل خطوة.',
  missionPillars: ['شغف', 'جودة', 'ثقة', 'استدامة'],
};

export const homeExtendedByLocale: Record<Locale, HomeExtendedShape> = {
  tr,
  de,
  en,
  fr,
  es,
  nl,
  pl,
  cs,
  it,
  ru,
  ar,
};
