import type { Locale } from './types';

export const lotLocalePatches: Record<
  string,
  Partial<
    Record<
      Locale,
      {
        story?: string;
        commercialSummary?: string;
        cupProfileSummary?: string;
        buyerUseCases?: string[];
        collectionLabel?: string;
      }
    >
  >
> = {
  'geisha-91-54': {
    tr: {
      collectionLabel: '2025 Ödüllü Lotlar',
      story:
        '2025 kazanan lotlar koleksiyonundaki en yüksek puanlı kahve. Mérida, Estancia Aires de Campo’da Eloína de los Ángeles Useche tarafından üretilen bu Geisha; katmanlı aromatik karmaşıklığı, çiçeksi zarafeti ve ifade doğal işleme profiliyle öne çıkar.',
      commercialSummary:
        'Çiçeksi karmaşıklık, yüksek cup skoru ve ayırt edici egzotik profil arayan specialty kavurmacılar için premium tek menşe çıkışı olarak ideal.',
      cupProfileSummary:
        'Fincanda yoğun katmanlı okuma: önce çiçekler yükselir, ardından taş meyve ve şampanya benzeri asidite, kakao ve karamel finishi sabitler. Hacimden çok ayırt edicilik arayan alıcılar için net bir lot.',
      buyerUseCases: [
        'Amiral gemisi tek menşe ve sınırlı sezon çıkışları',
        'Çiçeksi karmaşıklık arayan üst segment filtre ve espresso programları',
        'Menüde üst puanlı Venezüella Geisha konumlandıran kavurmacılar',
      ],
    },
    de: {
      collectionLabel: '2025 Winning Lots',
      story:
        'Die höchstbewertete Mischung der Winning-Lots-Kollektion 2025. Diese Geisha aus Mérida (Estancia Aires de Campo) von Eloína de los Ángeles Useche besticht durch aromatische Tiefe, florale Eleganz und ein ausdrucksvolles Natural-Profil.',
      commercialSummary:
        'Ideal als Premium-Single-Origin für Specialty-Röster, die florale Komplexität, hohen Cup-Score und ein markantes exotisches Profil suchen.',
      cupProfileSummary:
        'Intensiv geschichtet: Florale Noten zuerst, dann Steinobst und champagnerartige Säure, Kakao und Karamel im Finish — für Einkäufer, denen Auszeichnung wichtiger ist als reines Volumen.',
      buyerUseCases: [
        'Flagship-Single-Origin und limitierte Saisonreleases',
        'High-End-Filter- und Espresso-Programme mit floralem Fokus',
        'Röster, die eine top-bewertete venezolanische Geisha auf der Karte führen',
      ],
    },
  },
  'tabi-90-38': {
    tr: {
      collectionLabel: '2025 Ödüllü Lotlar',
      story:
        'Trujillo’dan yıkanmış, tatlı ve temiz bir Tabi lotu; kremsi, rahatlatıcı bir fincan profiliyle ticari olarak çekici, erişilebilir ama premium bir duyusal çizgi sunar.',
      commercialSummary:
        'Çikolata ve karamel derinliği olan, tatlı ve yaklaşılabilir yüksek kaliteli yıkanmış kahve arayan kavurmacılar için mükemmel.',
      cupProfileSummary:
        'Konfor odaklı ve temiz: kakao ve beyaz çikolata kremsi gövdeyi taşır; karamelize tatlılık specialty inandırıcılığını koruyarak erişilebilir kalır.',
      buyerUseCases: [
        'Güvenilir tatlılık gerektiren günlük espresso ve süt bazlı menüler',
        'Erişilebilirlik ile yüksek cup kalitesini dengeleyen toptan programlar',
        'Netlik ve gövdenin önemli olduğu filtre ve batch brew hatları',
      ],
    },
    de: {
      collectionLabel: '2025 Winning Lots',
      story:
        'Ein süßes, sauberes gewaschenes Tabi aus Trujillo mit cremigem, tröstendem Cup — kommerziell attraktiv durch ein zugängliches, aber premium Sensory-Profil.',
      commercialSummary:
        'Hervorragend für Röster, die einen süßen, zugänglichen gewaschenen Hochwertigkeitskaffee mit Schokoladen- und Karamelltiefe suchen.',
      cupProfileSummary:
        'Komfortorientiert und klar: Kakao und weiße Schokolade tragen eine cremige Textur; karamellisierte Süße bleibt zugänglich ohne Specialty-Glaubwürdigkeit zu verlieren.',
      buyerUseCases: [
        'Daily Espresso und Milchgetränke mit zuverlässiger Süße',
        'Großhandelsprogramme, die Zugänglichkeit mit hoher Cup-Qualität verbinden',
        'Filter- und Batch-Brew-Linien, bei denen Klarheit und Körper zählen',
      ],
    },
  },
  'otra-89-83': {
    tr: {
      collectionLabel: '2025 Ödüllü Lotlar',
      story:
        'Çay benzeri zarafet, çiçeksi yükseliş ve tatlı narenciye karmaşıklığını birleştiren rafine aromatik yapıya sahip deneysel bir lot.',
      commercialSummary:
        'Daha maceracı, zarif asidite ve katmanlı aromatikler isteyen kavurmacılar için ayırt edici bir seçenek.',
      cupProfileSummary:
        'Çay yapısı narenciye ve çiçeklerle buluşuyor: zarif, karmaşık ve bilinçli şekilde jenerik değil — cupping masasında konuşturan bir lot arayan alıcılar için.',
      buyerUseCases: [
        'Maceracı veya sezonluk menüler kuran specialty kavurmacılar',
        'Filtre odaklı kafeler ve cupping ağırlıklı toptan müşteriler',
        'Deneysel işlemeyi dengeyle sunan programlar',
      ],
    },
    de: {
      collectionLabel: '2025 Winning Lots',
      story:
        'Ein experimentelles Lot mit verfeinerter Struktur: Tee-Eleganz, florale Lift und süße Zitrus-Komplexität.',
      commercialSummary:
        'Eine markante Option für Röster, die ein abenteuerlicheres Lot mit eleganter Säure und aromatischer Tiefe wollen.',
      cupProfileSummary:
        'Teeartige Struktur trifft Zitrus und Florales — elegant, komplex und bewusst nicht generisch; für Einkäufer, die am Cupping-Tisch Gesprächsstoff brauchen.',
      buyerUseCases: [
        'Specialty-Röster mit abenteuerlichen oder saisonalen Menüs',
        'Filter-fokussierte Cafés und cupping-orientierte Großhandelskunden',
        'Programme, die experimentelle Verarbeitung mit Balance zeigen',
      ],
    },
  },
  'villanueva-89-05': {
    tr: {
      collectionLabel: '2025 Ödüllü Lotlar',
      story:
        'Olgun taş meyve tatlılığını karamelize derinlik ve baharat katmanlarıyla dengeleyen honey işlemeli bir kahve.',
      commercialSummary:
        'Tatlılık, gövde ve katmanlı meyve karakteri arayan kavurmacılar için sezonluk tekliflerde güçlü bir tercih.',
      cupProfileSummary:
        'Honey işleme olgun taş meyve ve esmer şekeri kakao ve bahisle konuşturur — cömert ve farklı demleme yöntemlerine uyumlu bir fincan.',
      buyerUseCases: [
        'Sezonluk tek menşe ve honey profil vitrinleri',
        'Espresso veya filtre için tatlılık, gövde ve meyve katmanı arayan kavurmacılar',
        'Dönüşümlü öne çıkan lotlu premium kafe menüleri',
      ],
    },
    de: {
      collectionLabel: '2025 Winning Lots',
      story:
        'Ein Honey-Prozess-Kaffee, der reife Steinobst-Süße mit karamellisierter Tiefe und Schichten von Gewürzen balanciert.',
      commercialSummary:
        'Eine starke Wahl für saisonale Angebote und Röster, die Süße, Körper und fruchtige Tiefe suchen.',
      cupProfileSummary:
        'Honey bringt Steinobst und braunen Zucker in Dialog mit Kakao und Gewürz — großzügig am Gaumen und vielseitig über Brühmethoden.',
      buyerUseCases: [
        'Saisonale Single-Origins und Honey-Profile',
        'Röster, die Süße, Körper und fruchtige Schichtung für Espresso oder Filter suchen',
        'Premium-Café-Menüs mit rotierenden Featured Lots',
      ],
    },
  },
  'castillo-naranjal-88-83': {
    tr: {
      collectionLabel: '2025 Ödüllü Lotlar',
      story:
        'Daha zengin, çikolata odaklı bir fincanı fındık tatlılığı ve kremsi gövde ile destekleyen deneysel bir profil.',
      commercialSummary:
        'Hâlâ specialty karmaşıklığı taşıyan, daha tok bir profil arayan kavurmacılara uygun.',
      cupProfileSummary:
        'Çikolata öncülü ve kremsi: kiraz ve fındık tok, doyurucu bir yapıyı destekler — ağırlık isteyen ama kaba ağırlık istemeyen alıcılar için.',
      buyerUseCases: [
        'Daha tok imza arayan espresso ve tek menşe harmanları',
        'Gövde ve çikolata odaklı menüleri önceliklendiren toptan müşteriler',
        'Klasik konfor ile specialty detayı köprüleyen programlar',
      ],
    },
    de: {
      collectionLabel: '2025 Winning Lots',
      story:
        'Ein experimentelles Profil mit reicheren, schokoladigeren Tönen, unterstützt von nussiger Süße und cremigem Körper.',
      commercialSummary:
        'Geeignet für Röster, die ein volleres Profil mit bleibender Specialty-Komplexität suchen.',
      cupProfileSummary:
        'Schokoladenführend und cremig: Kirsche und Haselnuss stützen eine volle, befriedigende Struktur — für Tiefe ohne plumpe Schwere.',
      buyerUseCases: [
        'Espresso-Blends und Single Origins mit reicherer Cup-Signatur',
        'Großhandelskunden mit Fokus auf Körper und schokoladengetriebene Menüs',
        'Programme zwischen klassischem Komfort und Specialty-Detail',
      ],
    },
  },
  'monteclaro-88-75': {
    tr: {
      collectionLabel: '2025 Ödüllü Lotlar',
      story:
        'Temiz yapı, meyve parlaklığı ve klasik çikolata-karamel temeli olan yıkanmış bir kahve.',
      commercialSummary:
        'Denge, netlik ve yaklaşılabilir karmaşıklık arayan alıcılar için yıkanmış profilde güçlü bir seçenek.',
      cupProfileSummary:
        'Temiz yıkanmış mimari: kırmızı meyve ve narenciye fincanı aydınlatır; sütlü çikolata ve karamel merkezi tutar — seçici toptan programlar için güvenilir bir specialty profil.',
      buyerUseCases: [
        'Hacim genelinde denge ve netlik arayan kavurmacılar ve distribütörler',
        'Geniş çekiciliğe sahip premium filtre ve espresso teklifleri',
        'Uç noktalara kutuplaşmadan yaklaşılabilir karmaşıklık isteyen alıcılar',
      ],
    },
    de: {
      collectionLabel: '2025 Winning Lots',
      story:
        'Ein gewaschener Kaffee mit klarer Struktur, fruchtiger Frische und klassischer Schokoladen-Karamel-Basis.',
      commercialSummary:
        'Ideal für Einkäufer, die Balance, Klarheit und zugängliche Komplexität in einem gewaschenen Profil wollen.',
      cupProfileSummary:
        'Saubere washed-Architektur: rote Frucht und Zitrus erhellen die Tasse, Milchschokolade und Karamel halten die Mitte — ein verlässliches Specialty-Profil für anspruchsvolle Programme.',
      buyerUseCases: [
        'Röster und Distributoren, die Balance und Klarität über Volumina hinweg brauchen',
        'Premium-Filter- und Espresso-Angebote mit breiter Appeal',
        'Einkäufer, die zugängliche Komplexität ohne extreme Polarisation wollen',
      ],
    },
  },
  'inia-01-88-73': {
    tr: {
      collectionLabel: '2025 Ödüllü Lotlar',
      story:
        'Tatlı böğürtlen ifadesi, baharat detayı ve yumuşak, yaklaşılabilir gövde sunan yıkanmış bir lot.',
      commercialSummary:
        'Meyve ve baharatı denge kaybetmeden isteyen kavurmacılar için çok yönlü, karakterli bir tek menşe.',
      cupProfileSummary:
        'Böğürtlen öncülü, ot-baharat boyutu: tatlı, karakterli ve yumuşak gövdeli — agresif olmadan ayırt edicilik gerektiğinde ideal.',
      buyerUseCases: [
        'Meyve ve baharat hikâyesi olan tek menşe rotasyonları',
        'Dengenin kritik olduğu filtre ve hafif espresso programları',
        'Çok yönlü, karakter odaklı menüler kuran toptan alıcılar',
      ],
    },
    de: {
      collectionLabel: '2025 Winning Lots',
      story:
        'Ein gewaschenes Lot mit süßer Beerenexpression, Gewürzdetail und weichem, zugänglichem Körper.',
      commercialSummary:
        'Ein vielseitiges, charakterstarkes Single Origin für Röster, die Frucht und Gewürz ohne Verlust der Balance wollen.',
      cupProfileSummary:
        'Beerenführend mit einer herbal-würzigen Dimension: süß, charaktervoll, weicher Körper — ideal, wenn Unterscheidung ohne Aggression nötig ist.',
      buyerUseCases: [
        'Single-Origin-Rotationen mit Frucht- und Gewürz-Storytelling',
        'Filterprogramme und leichtes Espresso, wo Balance Pflicht ist',
        'Großhandelskäufer mit vielseitigen, charaktergeleiteten Menüs',
      ],
    },
  },
  'bourbon-88-52': {
    tr: {
      collectionLabel: '2025 Ödüllü Lotlar',
      story:
        'Yoğun meyve intensitesi, daha koyu çikolata tonları ve rafine çiçeksi bir finish sunan doğal işlem Bourbon.',
      commercialSummary:
        'Sofistike bir profile sahip, meyve odaklı doğal lot arayan kavurmacılar için uygun.',
      cupProfileSummary:
        'Doğal yoğunluk ile incelik: orman meyvesi ve fermente kiraz fincanı yükseltir; kakao ve bitter çikolata yere oturtur — ham funk yerine çiçeksi bir zarafetle biter.',
      buyerUseCases: [
        'Doğal odaklı menüler ve sınırlı çıkışlar',
        'Meyve yoğunluğunu rafine bir finish ile göstermek isteyen kavurmacılar',
        'Sofistike doğal profille farklılaşan specialty programlar',
      ],
    },
    de: {
      collectionLabel: '2025 Winning Lots',
      story:
        'Ein Natural Bourbon mit ausdrucksstarker Fruchtintensität, dunkleren Schokolatetönen und verfeinertem floralen Finish.',
      commercialSummary:
        'Gut geeignet für Röster, die ein fruchtbetontes Natural-Lot mit anspruchsvollem Profil suchen.',
      cupProfileSummary:
        'Natural-Intensität mit Feinschliff: Waldfrucht und fermentierte Kirsche heben die Tasse, Kakaonibs und dunkle Schokolade grunden sie — mit floralem Finish statt rohem Funk.',
      buyerUseCases: [
        'Natural-forward-Menüs und limitierte Releases',
        'Röster, die Fruchtintensität mit verfeinertem Abschluss zeigen',
        'Specialty-Programme, die sich durch ein anspruchsvolles Natural-Profil differenzieren',
      ],
    },
  },
  'geisha-el-recreo-91-03': {
    tr: {
      collectionLabel: 'Premium Micro Lot',
      story:
        'Hacienda El Recreo’dan deneysel işlem görmüş Geisha; orman meyveleri, böğürtlen ve kivi ile yasemin zarafeti; tereyağımsı gövde ve bitter çikolata ile dengelenir.',
      commercialSummary:
        'Deneysel Geisha arayan, tatlı meyve şerbeti ve rafine çiçeksi yükseliş isteyen ultra premium alıcılar için.',
      cupProfileSummary:
        'Böğürtlen ve kivi parlaklığı yaseminle buluşur; ipeksi gövde bitter çikolataya oturur — 91+ koleksiyon vitrinleri için.',
      buyerUseCases: [
        'Deneysel Geisha vitrinleri ve seçici filtre/espresso',
        'Tatlı meyve şerbeti profili arayan sezon menüleri',
        '91+ skorlu toptan programlar',
      ],
    },
    de: {
      collectionLabel: 'Premium Micro Lot',
      story:
        'Experimentelle Geisha von Hacienda El Recreo: Waldbeeren, Brombeere und Kiwi mit Jasmin-Eleganz; butteriger Körper, bittere Schokolade im Gleichgewicht.',
      commercialSummary:
        'Ultra-Premium für Käufer, die experimentelles Processing mit dessertartiger Süße und feinen Florals suchen.',
      cupProfileSummary:
        'Beeren und Kiwi treffen Jasmin; seidiger Körper, bittere Schokolade — ideal für 91+-Showcases.',
      buyerUseCases: [
        'Experimentelle Geisha auf Filter und ausgewähltem Espresso',
        'Saisonale Menüs mit Fruchtsirup-Süße',
        'Großhandel mit 91+ Fokus',
      ],
    },
  },
  'castillo-las-mesas-84-50': {
    tr: {
      collectionLabel: 'Özel Varyete Serisi',
      story:
        'Finca Las Mesas’tan Castillo; mandalina, bal ve çikolata birlikteliği, incir, kuru üzüm ve macadamia ile ipeksi doku.',
      commercialSummary:
        'Özel Varyete bandında güçlü Castillo profili arayan kavurmacılar için tatlı ve gövdeli seçenek.',
      cupProfileSummary:
        'Bal ve çikolata üzerine kurulu incir ve macadamia dokusu; espresso ve sütlü içeceklerle uyumlu.',
      buyerUseCases: ['Espresso ve süt bazlı menüler', '82–84,5 SCA bandı toptan', 'Castillo karakteri net programlar'],
    },
    de: {
      collectionLabel: 'Special Series',
      story:
        'Castillo von Finca Las Mesas: Mandarine, Honig und Schokolade; Feige, Rosine und Macadamia mit seidiger Textur.',
      commercialSummary:
        'Special Series Castillo für Röster mit Fokus auf süße, satte Profile im 82–84,5-Band.',
      cupProfileSummary:
        'Honig-Schokolade-Basis mit Trockenfrucht und Nuss — ideal für Espresso und Milchgetränke.',
      buyerUseCases: ['Espresso und Milch', 'Großhandel 82–84,5 SCA', 'klarer Castillo-Charakter'],
    },
  },
  'catuai-los-cedros-84': {
    tr: {
      collectionLabel: 'Özel Varyete Serisi',
      story:
        'Finca Los Cedros’tan yıkanmış Catuaí; vanilya, ipeksi gövde ve ferahlatıcı sitrik asidite.',
      commercialSummary:
        'Dengeli espresso ve filtre için kalabalık pleaser profili arayan alıcılar için.',
      cupProfileSummary:
        'Vanilya tatlılığı ipeksi gövdeyle birleşir; sitrik asidite fincanı canlı tutar.',
      buyerUseCases: ['Günlük espresso ve batch brew', 'Netlik ve tatlılık dengesi', 'Special Series bandı'],
    },
    de: {
      collectionLabel: 'Special Series',
      story:
        'Gewaschener Catuaí von Finca Los Cedros: Vanille, seidiger Körper, erfrischende Zitronensäure.',
      commercialSummary:
        'Für ausgewogenes Espresso- und Filterprogramm mit Publikumstauglichkeit.',
      cupProfileSummary:
        'Vanille-Süße mit seidigem Körper und klarer Zitronensäure.',
      buyerUseCases: ['Daily Espresso', 'Klarheit und Süße', 'Special Series'],
    },
  },
  'caturra-la-cuchilla-83-75': {
    tr: {
      collectionLabel: 'Özel Varyete Serisi',
      story:
        'Finca La Cuchilla’dan Caturra; akçaağaç şurubu ve çikolata dengesi, temiz finish.',
      commercialSummary:
        'Maple-çikolata dengesi isteyen house programme için güvenilir Special Series lotu.',
      cupProfileSummary:
        'Akçaağaç ve kakao yuvarlak bir gövde kurar; bitiş temiz ve yönlendirilebilir.',
      buyerUseCases: ['House espresso ve filtre', 'Sezon rotasyonu', 'Caturra mesajı'],
    },
    de: {
      collectionLabel: 'Special Series',
      story:
        'Caturra von Finca La Cuchilla: Ahornsirup und Schokolade mit sauberem Finish.',
      commercialSummary:
        'Zuverlässiges Special-Series-Lot für House-Espresso mit Maple-Kakao-Balance.',
      cupProfileSummary:
        'Ahorn und Kakao tragen eine runde Tasse; Abgang klar.',
      buyerUseCases: ['House-Espresso', 'Saisonrotation', 'klarer Caturra-Charakter'],
    },
  },
  'colombia-27-la-ondonada-83-25': {
    tr: {
      collectionLabel: 'Özel Varyete Serisi',
      story:
        'Finca La Ondonada’dan Colombia 27; beyaz çikolata ve portakal notaları, kremsi his.',
      commercialSummary:
        'Konfeksiyon ve narenciye uyumu arayan sütlü içecek odaklı menüler için.',
      cupProfileSummary:
        'Beyaz çikolata tatlılığı portakal dokunuşuyla dengelenir; yumuşak gövde.',
      buyerUseCases: ['Sütlü espresso', 'Filtre hatları', '83+ erişilebilir profil'],
    },
    de: {
      collectionLabel: 'Special Series',
      story:
        'Colombia 27 von Finca La Ondonada: weiße Schokolade und Orange mit cremigem Mundgefühl.',
      commercialSummary:
        'Für Milch-Espresso und konfektionsartige Profile im Special-Series-Band.',
      cupProfileSummary:
        'Weiße Schokolade trifft Orange; weiche Textur.',
      buyerUseCases: ['Milch-Espresso', 'Filter', 'zugängliches 83+ Profil'],
    },
  },
  'bourbon-santa-marta-83': {
    tr: {
      collectionLabel: 'Özel Varyete Serisi',
      story:
        'Finca Santa Marta’dan yıkanmış Bourbon (Las Marías’taki 88,52 doğal lotundan ayrı bir SKU). Kavrulmuş badem, şeftali, tarçın ve yoğun sitrik asidite.',
      commercialSummary:
        'Klasik yıkanmış Bourbon profili arayanlar için Special Series seçeneği.',
      cupProfileSummary:
        'Badem ve şeftali öncülüğünde tarçın ve canlı asidite — “premium klasik” fincan.',
      buyerUseCases: ['Parlak yıkanmış espresso', 'Taş meyve ve baharat anlatımı', 'İki Bourbon lotunu ayıran menüler'],
    },
    de: {
      collectionLabel: 'Special Series',
      story:
        'Gewaschener Bourbon von Finca Santa Marta — separates SKU neben dem 88,52-Natural aus Las Marías. Geröstete Mandel, Pfirsich, Zimt und intensive Zitronensäure.',
      commercialSummary:
        'Special Series für klassisches gewaschenes Bourbon-Profil.',
      cupProfileSummary:
        'Mandel und Pfirsich mit Zimt und lebendiger Säure — „klassisch premium“.',
      buyerUseCases: ['Helles gewaschenes Espresso', 'Steinobst-Story', 'Menüs mit zwei Bourbon-Lots'],
    },
  },
  'dunamix-blend-83-50': {
    tr: {
      collectionLabel: 'Roastery Base',
      story:
        'Dunamix özel harmanı; panela, kakao ve karamel üzerine tarçın ve karanfil gibi kahverengi baharatlar, espresso bazlı içecekler için yumuşak gövde.',
      commercialSummary:
        'Kavurma evleri için istikrarlı “temel” harman; sütlü içeceklerle uyumlu.',
      cupProfileSummary:
        'Esmer şeker ve kakao temeli, hafif baharat ve dengeli gövde.',
      buyerUseCases: ['Yüksek hacim espresso', 'House blend', 'Sütlü menü uyumu'],
    },
    de: {
      collectionLabel: 'Roastery Base',
      story:
        'Dunamix Special Blend: Panela, Kakao, Karamell, Zimt und Nelke — weicher Körper für Espresso-Getränke.',
      commercialSummary:
        'Stabile Basis für Röstereien mit Fokus auf Milchkompatibilität.',
      cupProfileSummary:
        'Rohrzucker und Kakao mit warmen Gewürzen und rundem Körper.',
      buyerUseCases: ['Volumen-Espresso', 'House Blend', 'Milchmenüs'],
    },
  },
  'mixed-series-82-50': {
    tr: {
      collectionLabel: 'Mixed Series',
      story:
        'Yüksek hacim noktaları için ekonomik ve kalite kontrollü commodity mixed serisi; kakao ve fındık dengesi. İşlem: Natural veya Washed (esnek).',
      commercialSummary:
        'Ölçeklenen operasyonlar için dengeli profil ve erişilebilir fiyat bandı.',
      cupProfileSummary:
        'Sütlü çikolata ve fındık gövdeli, yumuşak denge.',
      buyerUseCases: ['Zincir ve hacim', 'House blend hammaddesi', 'Fiyat duyarlı QC’li programlar'],
    },
    de: {
      collectionLabel: 'Mixed Series',
      story:
        'Wirtschaftliche Mixed-Commodity-Linie für hohe Volumina; Kakao und Haselnuss. Verarbeitung: Natural oder Washed (flexibel).',
      commercialSummary:
        'Ausgewogenes Profil für skalierende Betriebe im Einstiegs-Score-Band.',
      cupProfileSummary:
        'Milchschokolade und Haselnuss mit weichem, ausgewogenen Körper.',
      buyerUseCases: ['Ketten und Volumen', 'Rohbasis für Blends', 'preissensibles QC-Programm'],
    },
  },
};
