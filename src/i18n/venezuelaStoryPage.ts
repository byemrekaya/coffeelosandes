import type { Locale } from './types';

const LARA_MAP_EMBED = 'https://www.google.com/maps?q=Lara+State,+Venezuela&z=8&output=embed';
const LARA_MAP_OPEN = 'https://www.google.com/maps/search/?api=1&query=Lara+State,+Venezuela';
const MERIDA_MAP_EMBED = 'https://www.google.com/maps?q=M%C3%A9rida,+Venezuela&z=9&output=embed';
const MERIDA_MAP_OPEN = 'https://www.google.com/maps/search/?api=1&query=M%C3%A9rida,+Venezuela';

export type VenezuelaStoryNavItem = { id: string; label: string };

export type VenezuelaStoryRegion = {
  name: string;
  elevation: string;
  body: string;
  tags: string[];
  mapEmbedUrl: string;
  mapOpenUrl: string;
};

export type VenezuelaStorySimpleCard = { title: string; body: string };

export type VenezuelaStoryFlavorCard = { title: string; notes: string[]; body: string };

export type VenezuelaStoryContent = {
  navAriaLabel: string;
  nav: VenezuelaStoryNavItem[];
  hero: {
    badge: string;
    titleBefore: string;
    titleAccent: string;
    subtitle: string;
    lead: string;
  };
  heroImageAlt: string;
  intro: string;
  regions: {
    title: string;
    subtitle: string;
    mapLinkLabel: string;
    items: VenezuelaStoryRegion[];
  };
  conditions: {
    title: string;
    subtitle: string;
    items: VenezuelaStorySimpleCard[];
  };
  processing: {
    title: string;
    subtitle: string;
    items: VenezuelaStorySimpleCard[];
  };
  flavors: {
    title: string;
    subtitle: string;
    items: VenezuelaStoryFlavorCard[];
  };
  roasting: {
    title: string;
    subtitle: string;
    columnTitle: string;
    paragraphs: [string, string];
    bullets: string[];
    quote: string;
  };
};

const tr: VenezuelaStoryContent = {
  navAriaLabel: 'Venezuela hikayesi bölümleri',
  nav: [
    { id: 'vs-bolgeler', label: 'Bölgeler' },
    { id: 'vs-kosullar', label: 'Büyüme koşulları' },
    { id: 'vs-isleme', label: 'İşleme' },
    { id: 'vs-lezzet', label: 'Lezzet profilleri' },
    { id: 'vs-kavurma', label: 'Kavurma felsefesi' },
  ],
  hero: {
    badge: "And Dağları'ndan",
    titleBefore: 'Venezuela ',
    titleAccent: 'Hikayesi',
    subtitle: 'Kökeni, doğası ve karakteri',
    lead:
      "Venezuela, Latin Amerika'nın en özgün ve doğal kahve yetiştirme bölgelerinden biridir. Lara ve Mérida çevresindeki And bölgelerinde, kahveler 1200 ila 2000 metre rakımlarda, istikrarlı iklim koşulları altında yetişir.",
  },
  heroImageAlt: 'Venezuela Andları ve kahve manzarası',
  intro:
    'Yüksek rakım, verimli topraklar ve istikrarlı sıcaklıkların birleşimi, kahve çekirdeklerinin yavaşça olgunlaşmasını sağlar. Bu da çekirdeklerin dengeli bir yapıya, doğal bir tatlılığa ve belirgin bir lezzet profiline sahip olmasına yol açar.',
  regions: {
    title: 'Yetişme bölgelerimiz',
    subtitle: "And Dağları'nın eşsiz mikro iklimleri",
    mapLinkLabel: "Google Maps'te aç",
    items: [
      {
        name: 'Lara bölgesi',
        elevation: '1200–1800 m',
        body:
          'Lara çevresindeki And eteklerinde, geleneksel aile çiftliklerinde yetiştirilen kahveler, çikolata ve fındık notalarıyla karakterizedir.',
        tags: ['Kakao plantasyonları', 'Gölge yetiştirme', 'Elle hasat'],
        mapEmbedUrl: LARA_MAP_EMBED,
        mapOpenUrl: LARA_MAP_OPEN,
      },
      {
        name: 'Mérida bölgesi',
        elevation: '1500–2000 m',
        body:
          "Mérida'nın yüksek rakımlı bölgelerinde yetişen kahveler, karmaşık aromatik profilleri ve düşük asiditesiyle öne çıkar.",
        tags: ['Yüksek rakım', 'Soğuk hava', 'Yavaş olgunlaşma'],
        mapEmbedUrl: MERIDA_MAP_EMBED,
        mapOpenUrl: MERIDA_MAP_OPEN,
      },
    ],
  },
  conditions: {
    title: 'Büyüme koşulları',
    subtitle: 'Doğanın mükemmel uyumu',
    items: [
      {
        title: 'Karma kültür',
        body:
          'Kahve bitkileri kakao, muz ve diğer tropikal bitkilerle birlikte yetiştirilir. Bu çok katmanlı ekosistem, toprak korumasını sağlar ve aromatik gelişimi etkiler.',
      },
      {
        title: 'Gölge yetiştirme',
        body:
          'Gölgede yetiştirme, çekirdeklerin eşit gelişimini destekler ve uyumlu bir lezzet profiline katkıda bulunur.',
      },
      {
        title: 'Elle hasat',
        body:
          'Hasat, yalnızca olgun kahve çekirdekleri işlenecek şekilde seçici olarak elle yapılır. Bu dikkatli seçim, tutarlı kalite için olmazsa olmazdır.',
      },
      {
        title: 'Aile çiftlikleri',
        body:
          'Kahve üretimi ağırlıklı olarak küçük, aile işletmesi çiftliklerde gerçekleşir. Her çiftlik kendi geleneksel yöntemlerini korur.',
      },
    ],
  },
  processing: {
    title: 'İşleme yöntemleri',
    subtitle: 'Geleneksel ve modern tekniklerin harmanı',
    items: [
      {
        title: 'Yıkanmış işlem',
        body:
          'Geleneksel yöntemle, kahve kirazlarının meyve eti soyulduktan sonra fermantasyona bırakılmasıyla temiz ve parlak bir profil elde edilir.',
      },
      {
        title: 'Doğal işlem',
        body:
          'Kirazlar tam meyveyle kurutularak, meyve şekerlerinin çekirdeğe nüfuz etmesi sağlanır. Yoğun meyvemsi notalar ortaya çıkar.',
      },
      {
        title: 'Bal işlem',
        body:
          'Muz kabuğu gibi aromatik materyallerle birlikte fermantasyon, benzersiz ve karmaşık tat profilleri oluşturur.',
      },
      {
        title: 'Kontrollü fermantasyon',
        body:
          'Yavaş ve kontrollü fermantasyon, meyvemsi, karamelize ve karmaşık lezzet notalarının gelişmesine katkıda bulunur.',
      },
    ],
  },
  flavors: {
    title: 'Lezzet profilleri',
    subtitle: 'Bölgeye göre değişen karakterler',
    items: [
      {
        title: 'Klasik profil',
        notes: ['Çikolata', 'Fındık', 'Karamel'],
        body:
          'Kakao plantasyonlarının bulunduğu bölgelerde yetişen kahveler, belirgin çikolata ve kakao notaları sergiler.',
      },
      {
        title: 'Meyvemsi profil',
        notes: ['Muz', 'Tropikal meyveler', 'Bal'],
        body:
          'Doğal işlem yöntemiyle elde edilen kahveler, yoğun meyvemsi ve tatlı notalar sunar.',
      },
      {
        title: 'Karmaşık profil',
        notes: ['Fermente', 'Baharat', 'Çiçeksi'],
        body:
          'Özel işleme yöntemleriyle elde edilen kahveler, hafif fermente ve çok katmanlı aromatik profiller gösterir.',
      },
    ],
  },
  roasting: {
    title: 'Kavurma felsefemiz',
    subtitle: 'Her menşe için özel profiller',
    columnTitle: 'Ustaca kavurma',
    paragraphs: [
      'Küçük partiler halinde, hedef profil odaklı üretim yapıyoruz. Her menşe ve kullanım alanı için benzersiz kavurma profilleri geliştiriyoruz.',
      'Espresso barları, filtre kahve odaklı kafeler, ofis makineleri ve kapsül kahve projeleri için özel termal eğriler oluşturuyoruz.',
    ],
    bullets: [
      'Her parti belgeleniyor',
      'Aroma koruma protokolleri',
      'Profil tekrarlanabilirliği',
      'Kalite kontrol süreçleri',
      'İmza koruma garantisi',
    ],
    quote: 'Aromayı koruyun ve belgeleyin. Her fincan, bir önceki kadar mükemmel olmalı.',
  },
};

const en: VenezuelaStoryContent = {
  navAriaLabel: 'Venezuela story sections',
  nav: [
    { id: 'vs-bolgeler', label: 'Regions' },
    { id: 'vs-kosullar', label: 'Growing conditions' },
    { id: 'vs-isleme', label: 'Processing' },
    { id: 'vs-lezzet', label: 'Flavor profiles' },
    { id: 'vs-kavurma', label: 'Roasting philosophy' },
  ],
  hero: {
    badge: 'From the Andes',
    titleBefore: 'Venezuela ',
    titleAccent: 'story',
    subtitle: 'Origin, nature and character',
    lead:
      'Venezuela is one of Latin America’s most distinctive natural coffee-growing regions. Around Lara and Mérida in the Andes, coffee grows between roughly 1,200 and 2,000 metres, under stable climate conditions.',
  },
  heroImageAlt: 'Andean landscape and coffee in Venezuela',
  intro:
    'High altitude, fertile soils and steady temperatures slow cherry ripening. That helps beans develop balanced structure, natural sweetness and a clear flavour profile.',
  regions: {
    title: 'Where we grow',
    subtitle: 'Unique microclimates of the Andes',
    mapLinkLabel: 'Open in Google Maps',
    items: [
      {
        name: 'Lara',
        elevation: '1,200–1,800 m',
        body:
          'On the Andean foothills near Lara, coffees from traditional family farms often show chocolate and hazelnut notes.',
        tags: ['Cocoa understory', 'Shade-grown', 'Hand picking'],
        mapEmbedUrl: LARA_MAP_EMBED,
        mapOpenUrl: LARA_MAP_OPEN,
      },
      {
        name: 'Mérida',
        elevation: '1,500–2,000 m',
        body:
          'At higher elevations around Mérida, coffees tend toward complex aromatics and lower acidity.',
        tags: ['High altitude', 'Cool air', 'Slow ripening'],
        mapEmbedUrl: MERIDA_MAP_EMBED,
        mapOpenUrl: MERIDA_MAP_OPEN,
      },
    ],
  },
  conditions: {
    title: 'Growing conditions',
    subtitle: 'Nature in balance',
    items: [
      {
        title: 'Polyculture',
        body:
          'Coffee grows alongside cocoa, banana and other crops. The layered ecosystem protects soil and shapes aromatics.',
      },
      {
        title: 'Shade cultivation',
        body:
          'Shade supports even cherry development and contributes to a harmonious cup profile.',
      },
      {
        title: 'Hand picking',
        body:
          'Pickers select only ripe cherries. That selective harvest is essential for consistent quality.',
      },
      {
        title: 'Family farms',
        body:
          'Production is centred on small family operations, each keeping its own traditional practices.',
      },
    ],
  },
  processing: {
    title: 'Processing methods',
    subtitle: 'Tradition and technique together',
    items: [
      {
        title: 'Washed',
        body:
          'After depulping, controlled fermentation yields a clean, bright profile.',
      },
      {
        title: 'Natural',
        body:
          'Drying in the whole fruit lets sugars migrate into the seed, bringing intense fruit-forward notes.',
      },
      {
        title: 'Honey-style experiments',
        body:
          'Fermentation with aromatic material (e.g. banana peel) can create unique, layered flavours.',
      },
      {
        title: 'Controlled fermentation',
        body:
          'Slow, managed fermentation helps develop fruity, caramelised and complex notes.',
      },
    ],
  },
  flavors: {
    title: 'Flavor profiles',
    subtitle: 'Character by region and process',
    items: [
      {
        title: 'Classic',
        notes: ['Chocolate', 'Hazelnut', 'Caramel'],
        body:
          'Lots from cocoa-growing areas often show clear chocolate and cocoa notes.',
      },
      {
        title: 'Fruit-forward',
        notes: ['Banana', 'Tropical fruit', 'Honey'],
        body:
          'Natural-process coffees can offer intense fruit and sweetness.',
      },
      {
        title: 'Complex',
        notes: ['Ferment', 'Spice', 'Floral'],
        body:
          'Special processing can yield lightly fermenty, multi-layered aromatics.',
      },
    ],
  },
  roasting: {
    title: 'Roasting philosophy',
    subtitle: 'Profiles tailored to each origin',
    columnTitle: 'Roasting with intent',
    paragraphs: [
      'We roast in small batches toward a target profile, developing distinct curves for each origin and use case.',
      'We build thermal profiles for espresso bars, filter-focused cafés, office machines and capsule projects.',
    ],
    bullets: [
      'Every batch documented',
      'Aroma-protection protocols',
      'Repeatable profiles',
      'Quality control routines',
      'Signature consistency',
    ],
    quote: 'Protect and document aroma. Every cup should be as good as the last.',
  },
};

const de: VenezuelaStoryContent = {
  navAriaLabel: 'Abschnitte Venezuela-Geschichte',
  nav: [
    { id: 'vs-bolgeler', label: 'Regionen' },
    { id: 'vs-kosullar', label: 'Anbaubedingungen' },
    { id: 'vs-isleme', label: 'Aufbereitung' },
    { id: 'vs-lezzet', label: 'Geschmacksprofile' },
    { id: 'vs-kavurma', label: 'Röstphilosophie' },
  ],
  hero: {
    badge: 'Aus den Anden',
    titleBefore: 'Venezuela – ',
    titleAccent: 'die Geschichte',
    subtitle: 'Herkunft, Natur und Charakter',
    lead:
      'Venezuela zählt zu den besonderen natürlichen Kaffeeanbauregionen Lateinamerikas. Rund um Lara und Mérida in den Anden wächst Kaffee in etwa 1.200 bis 2.000 m Höhe unter stabilen klimatischen Bedingungen.',
  },
  heroImageAlt: 'Andenlandschaft und Kaffee in Venezuela',
  intro:
    'Hohe Lage, fruchtbare Böden und gleichmäßige Temperaturen verlangsamen die Reifung. So entstehen ausgewogene Struktur, natürliche Süße und ein klares Geschmacksprofil.',
  regions: {
    title: 'Unsere Anbauregionen',
    subtitle: 'Einzigartige Mikroklimen der Anden',
    mapLinkLabel: 'In Google Maps öffnen',
    items: [
      {
        name: 'Region Lara',
        elevation: '1.200–1.800 m',
        body:
          'Am Andenfuß bei Lara bringen traditionelle Familienbetriebe Kaffee mit Schokoladen- und Haselnussnoten hervor.',
        tags: ['Kakao-Unterbaum', 'Schattenanbau', 'Handpflückung'],
        mapEmbedUrl: LARA_MAP_EMBED,
        mapOpenUrl: LARA_MAP_OPEN,
      },
      {
        name: 'Region Mérida',
        elevation: '1.500–2.000 m',
        body:
          'In den höheren Lagen um Mérida zeichnen sich die Kaffees durch komplexe Aromatik und geringere Säure aus.',
        tags: ['Große Höhe', 'Kühle Luft', 'Langsame Reifung'],
        mapEmbedUrl: MERIDA_MAP_EMBED,
        mapOpenUrl: MERIDA_MAP_OPEN,
      },
    ],
  },
  conditions: {
    title: 'Anbaubedingungen',
    subtitle: 'Das Gleichgewicht der Natur',
    items: [
      {
        title: 'Mischkultur',
        body:
          'Kaffee wächst mit Kakao, Banane und anderen Kulturen. Das mehrschichtige Ökosystem schützt den Boden und prägt die Aromatik.',
      },
      {
        title: 'Schattenanbau',
        body:
          'Schatten fördert eine gleichmäßige Kirschenreifung und ein harmonisches Tassenprofil.',
      },
      {
        title: 'Handpflückung',
        body:
          'Nur reife Kirschen werden geerntet – entscheidend für gleichbleibende Qualität.',
      },
      {
        title: 'Familienbetriebe',
        body:
          'Der Schwerpunkt liegt auf kleinen Familienbetrieben mit eigenen traditionellen Methoden.',
      },
    ],
  },
  processing: {
    title: 'Aufbereitungsmethoden',
    subtitle: 'Tradition und Technik im Einklang',
    items: [
      {
        title: 'Washed',
        body:
          'Nach dem Entschleimen sorgt kontrollierte Fermentation für ein klares, lebendiges Profil.',
      },
      {
        title: 'Natural',
        body:
          'Trocknung in der ganzen Frucht lässt Fruchtzucker in die Bohne wandern – intensive fruchtige Noten.',
      },
      {
        title: 'Experimentelle Fermentation',
        body:
          'Fermentation mit aromatischen Materialien (z. B. Bananenschale) kann einzigartige, vielschichtige Profile ergeben.',
      },
      {
        title: 'Kontrollierte Fermentation',
        body:
          'Langsame, gesteuerte Fermentation unterstützt fruchtige, karamellisierte und komplexe Noten.',
      },
    ],
  },
  flavors: {
    title: 'Geschmacksprofile',
    subtitle: 'Charakter nach Region und Verfahren',
    items: [
      {
        title: 'Klassisch',
        notes: ['Schokolade', 'Haselnuss', 'Karamell'],
        body:
          'Lots aus Kakaoanbaugebieten zeigen oft deutliche Schokoladen- und Kakaonoten.',
      },
      {
        title: 'Fruchtig',
        notes: ['Banane', 'Tropische Früchte', 'Honig'],
        body:
          'Natural-Kaffees können intensive Frucht und Süße bieten.',
      },
      {
        title: 'Komplex',
        notes: ['Ferment', 'Gewürz', 'Blumig'],
        body:
          'Spezielle Aufbereitung kann leicht fermentige, mehrschichtige Aromen ergeben.',
      },
    ],
  },
  roasting: {
    title: 'Röstphilosophie',
    subtitle: 'Profile passend zu jeder Herkunft',
    columnTitle: 'Rösten mit Zielbild',
    paragraphs: [
      'Wir rösten in kleinen Chargen auf ein Zielprofil hin und entwickeln für jede Herkunft und Anwendung eigene Kurven.',
      'Wir erstellen thermische Profile für Espressobars, Filter-Cafés, Büromaschinen und Kapselprojekte.',
    ],
    bullets: [
      'Jede Charge dokumentiert',
      'Protokolle zum Aromaschutz',
      'Wiederholbare Profile',
      'Qualitätskontrollen',
      'Konstanz der Signatur',
    ],
    quote: 'Aroma schützen und dokumentieren. Jede Tasse soll so gut sein wie die vorherige.',
  },
};

const fr: VenezuelaStoryContent = {
  navAriaLabel: 'Sections histoire du Venezuela',
  nav: [
    { id: 'vs-bolgeler', label: 'Régions' },
    { id: 'vs-kosullar', label: 'Conditions de culture' },
    { id: 'vs-isleme', label: 'Traitement' },
    { id: 'vs-lezzet', label: 'Profils aromatiques' },
    { id: 'vs-kavurma', label: 'Philosophie de torréfaction' },
  ],
  hero: {
    badge: 'Des Andes',
    titleBefore: 'Venezuela : ',
    titleAccent: "l'histoire",
    subtitle: 'Origine, nature et caractère',
    lead:
      'Le Venezuela compte parmi les régions les plus singulières pour un café de terroir en Amérique latine. Autour de Lara et Mérida, dans les Andes, le café pousse entre environ 1 200 et 2 000 m, sous un climat stable.',
  },
  heroImageAlt: 'Paysage andin et café au Venezuela',
  intro:
    'Altitude, sols fertiles et températures régulières ralentissent la maturation des cerises. Les grains gagnent ainsi structure, douceur naturelle et un profil aromatique net.',
  regions: {
    title: 'Nos terroirs',
    subtitle: 'Microclimats uniques des Andes',
    mapLinkLabel: 'Ouvrir dans Google Maps',
    items: [
      {
        name: 'Lara',
        elevation: '1 200–1 800 m',
        body:
          'Sur les contreforts andins près de Lara, les cafés de petites fermes familiales s’expriment souvent en chocolat et noisette.',
        tags: ['Sous-bois cacao', 'Ombragé', 'Cueillette à la main'],
        mapEmbedUrl: LARA_MAP_EMBED,
        mapOpenUrl: LARA_MAP_OPEN,
      },
      {
        name: 'Mérida',
        elevation: '1 500–2 000 m',
        body:
          'Aux altitudes plus élevées autour de Mérida, les profils aromatiques se complexifient et l’acidité tend à baisser.',
        tags: ['Haute altitude', 'Air frais', 'Maturation lente'],
        mapEmbedUrl: MERIDA_MAP_EMBED,
        mapOpenUrl: MERIDA_MAP_OPEN,
      },
    ],
  },
  conditions: {
    title: 'Conditions de culture',
    subtitle: 'L’équilibre du milieu',
    items: [
      {
        title: 'Polyculture',
        body:
          'Le café pousse avec le cacao, la banane et d’autres cultures. Cet écosystème en étages protège les sols et façonne les arômes.',
      },
      {
        title: 'Culture à l’ombre',
        body:
          'L’ombre favorise une maturation homogène des cerises et une tasse plus harmonieuse.',
      },
      {
        title: 'Cueillette sélective',
        body:
          'Seules les cerises mûres sont récoltées à la main — indispensable à une qualité stable.',
      },
      {
        title: 'Fermes familiales',
        body:
          'La production repose surtout sur de petites exploitations qui perpétuent leurs méthodes traditionnelles.',
      },
    ],
  },
  processing: {
    title: 'Méthodes de traitement',
    subtitle: 'Tradition et technique',
    items: [
      {
        title: 'Lavé',
        body:
          'Après dépulpage, une fermentation contrôlée donne une tasse claire et lumineuse.',
      },
      {
        title: 'Naturel',
        body:
          'Le séchage en cerise entière laisse les sucres migrer vers le grain, pour des notes fruitées intenses.',
      },
      {
        title: 'Fermentations expérimentales',
        body:
          'La fermentation avec matière aromatique (ex. peau de banane) peut créer des profils uniques et complexes.',
      },
      {
        title: 'Fermentation maîtrisée',
        body:
          'Une fermentation lente et pilotée développe des notes fruitées, caramélisées et complexes.',
      },
    ],
  },
  flavors: {
    title: 'Profils aromatiques',
    subtitle: 'Selon région et procédé',
    items: [
      {
        title: 'Classique',
        notes: ['Chocolat', 'Noisette', 'Caramel'],
        body:
          'Les lots des zones cacaoyères affichent souvent chocolat et cacao marqués.',
      },
      {
        title: 'Fruité',
        notes: ['Banane', 'Fruits tropicaux', 'Miel'],
        body:
          'Les naturels peuvent offrir une grande intensité fruitée et sucrée.',
      },
      {
        title: 'Complexe',
        notes: ['Fermenté', 'Épices', 'Floral'],
        body:
          'Des traitements spéciaux peuvent donner des arômes fermentés légers et multicouches.',
      },
    ],
  },
  roasting: {
    title: 'Philosophie de torréfaction',
    subtitle: 'Des profils pour chaque origine',
    columnTitle: 'Torréfaction intentionnelle',
    paragraphs: [
      'Nous torréfions par petits lots vers un profil cible, avec des courbes distinctes selon l’origine et l’usage.',
      'Nous construisons des profils thermiques pour bars espresso, cafés filtre, machines de bureau et projets capsules.',
    ],
    bullets: [
      'Chaque lot documenté',
      'Protocoles de préservation des arômes',
      'Profils reproductibles',
      'Contrôles qualité',
      'Cohérence de la signature',
    ],
    quote: 'Préservez et documentez les arômes. Chaque tasse doit être aussi bonne que la précédente.',
  },
};

const es: VenezuelaStoryContent = {
  navAriaLabel: 'Secciones de la historia de Venezuela',
  nav: [
    { id: 'vs-bolgeler', label: 'Regiones' },
    { id: 'vs-kosullar', label: 'Condiciones de cultivo' },
    { id: 'vs-isleme', label: 'Procesamiento' },
    { id: 'vs-lezzet', label: 'Perfiles de sabor' },
    { id: 'vs-kavurma', label: 'Filosofía del tostado' },
  ],
  hero: {
    badge: 'Desde los Andes',
    titleBefore: 'Venezuela: ',
    titleAccent: 'la historia',
    subtitle: 'Origen, naturaleza y carácter',
    lead:
      'Venezuela es una de las regiones más singulares de América Latina para el café de terroir. Alrededor de Lara y Mérida, en los Andes, el café crece entre unos 1.200 y 2.000 m, con clima estable.',
  },
  heroImageAlt: 'Paisaje andino y café en Venezuela',
  intro:
    'La altitud, suelos fértiles y temperaturas estables ralentizan la maduración del grano. Así se favorece estructura equilibrada, dulzor natural y un perfil aromático claro.',
  regions: {
    title: 'Regiones de cultivo',
    subtitle: 'Microclimas únicos en los Andes',
    mapLinkLabel: 'Abrir en Google Maps',
    items: [
      {
        name: 'Lara',
        elevation: '1.200–1.800 m',
        body:
          'En las estribaciones andinas cerca de Lara, los cafés de fincas familiares tradicionales suelen mostrar chocolate y avellana.',
        tags: ['Sotobosque de cacao', 'A la sombra', 'Recolección manual'],
        mapEmbedUrl: LARA_MAP_EMBED,
        mapOpenUrl: LARA_MAP_OPEN,
      },
      {
        name: 'Mérida',
        elevation: '1.500–2.000 m',
        body:
          'En las zonas altas de Mérida destacan perfiles aromáticos complejos y acidez más contenida.',
        tags: ['Gran altitud', 'Aire frío', 'Maduración lenta'],
        mapEmbedUrl: MERIDA_MAP_EMBED,
        mapOpenUrl: MERIDA_MAP_OPEN,
      },
    ],
  },
  conditions: {
    title: 'Condiciones de cultivo',
    subtitle: 'Equilibrio natural',
    items: [
      {
        title: 'Policultivo',
        body:
          'El café crece junto a cacao, plátano y otros cultivos. El ecosistema en capas protege el suelo y moldea la aromática.',
      },
      {
        title: 'Cultivo bajo sombra',
        body:
          'La sombra favorece un desarrollo uniforme de la cereza y una taza más armoniosa.',
      },
      {
        title: 'Recolección selectiva',
        body:
          'Solo se cosechan cerezas maduras a mano: clave para una calidad constante.',
      },
      {
        title: 'Fincas familiares',
        body:
          'La producción se concentra en pequeñas fincas familiares que mantienen métodos tradicionales.',
      },
    ],
  },
  processing: {
    title: 'Métodos de procesamiento',
    subtitle: 'Tradición y técnica',
    items: [
      {
        title: 'Lavado',
        body:
          'Tras despulpar, la fermentación controlada aporta un perfil limpio y brillante.',
      },
      {
        title: 'Natural',
        body:
          'Secar con la fruta entera permite que los azúcares migren al grano, con notas frutales intensas.',
      },
      {
        title: 'Fermentación experimental',
        body:
          'Fermentar con material aromático (p. ej. cáscara de plátano) puede generar perfiles únicos y complejos.',
      },
      {
        title: 'Fermentación controlada',
        body:
          'Una fermentación lenta y guiada ayuda a desarrollar notas afrutadas, caramelizadas y complejas.',
      },
    ],
  },
  flavors: {
    title: 'Perfiles de sabor',
    subtitle: 'Según región y proceso',
    items: [
      {
        title: 'Clásico',
        notes: ['Chocolate', 'Avellana', 'Caramelo'],
        body:
          'Los lotes de zonas cacaoteras suelen mostrar chocolate y cacao marcados.',
      },
      {
        title: 'Afrutado',
        notes: ['Plátano', 'Frutas tropicales', 'Miel'],
        body:
          'Los naturales pueden ofrecer gran intensidad frutal y dulzor.',
      },
      {
        title: 'Complejo',
        notes: ['Fermento', 'Especias', 'Floral'],
        body:
          'Procesos especiales pueden dar aromática fermentada ligera y multicapa.',
      },
    ],
  },
  roasting: {
    title: 'Filosofía del tostado',
    subtitle: 'Perfiles para cada origen',
    columnTitle: 'Tostado con intención',
    paragraphs: [
      'Tostamos en lotes pequeños hacia un perfil objetivo, con curvas distintas por origen y uso.',
      'Diseñamos perfiles térmicos para bares de espresso, cafés de filtro, máquinas de oficina y proyectos de cápsulas.',
    ],
    bullets: [
      'Cada lote documentado',
      'Protocolos de protección del aroma',
      'Perfiles repetibles',
      'Controles de calidad',
      'Constancia de la firma',
    ],
    quote: 'Protege y documenta el aroma. Cada taza debe ser tan buena como la anterior.',
  },
};

export const venezuelaStoryByLocale: Record<Locale, VenezuelaStoryContent> = {
  tr,
  de,
  en,
  fr,
  es,
};
