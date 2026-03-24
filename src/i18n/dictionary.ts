import type { Locale } from './types';

type Dict = Record<string, unknown>;

export const dictionary: Record<Locale, Dict> = {
  tr: {
    htmlLang: 'tr',
    nav: {
      home: 'Anasayfa',
      story: 'Hikâyemiz',
      coffees: 'Kahvelerimiz',
      qualityDocs: 'Kalite ve Belgeler',
      wholesale: 'Toptan çözümler',
      contact: 'İletişim',
      cta: 'Teklif Al',
      aria: 'Ana navigasyon',
    },
    lang: { tr: 'TR', de: 'DE' },
    home: {
      title: 'Coffee Los Andes – Hayalini Yudumla | Venezuela And Dağları',
      description:
        'Venezuela And Dağları’nın yüksek rakımlı tarlalarından premium kahve. Toptan ve B2B ortakları için izlenebilir specialty kahve.',
      slogan: 'Hayalini Yudumla!',
      heroSubtitle: 'Doğanın kalbinden gelen lezzet',
      heroLead:
        '1.600 – 2.100 metre yükseklikte yetişen, mineral bakımından zengin topraklarda yavaş olgunlaşan çekirdeklerin hikâyesi.',
      badgeAltitude: 'Yüksek İrtifa Lezzeti · ≥ 1.630 m',
      lotDetail: 'Lot detayı',
      coffeesSectionTitle: 'Kahvelerimiz',
      coffeesSectionIntro:
        'Üç ana segmentte sunulan specialty kahveler; skor, menşe ve teknik fiş ile profesyonel alıcılar için.',
      coffeesCtaAll: 'Tüm kahveleri gör',
      qualitySectionTitle: 'Kalite ve Belgeler',
      qualitySectionIntro:
        'SGS laboratuvar analizleri, Q Arabica Grader değerlendirmeleri ve INSAI sertifikalarıyla güvence; detaylar için kalite sayfamıza göz atın.',
      wholesaleSectionTitle: 'Toptan çözümler',
      wholesaleSectionIntro:
        'Roastery ve kafe operasyonları için ölçeklenebilir tedarik, standart torba formatı ve net lojistik ile yanınızdayız.',
      wholesaleEyebrow: 'B2B operasyon',
      wholesaleBullets: [
        '60 kg craft torbalarda sunum — depo ve kavurma hattı için pratik format',
        'Venezuela menşeli lotlar için tarladan depoya kadar koordineli lojistik ve belgelendirme',
        'Berlin merkezli operasyon ve Dunamix ile doğrudan çiftlik bağlantısı üzerinden tedarik kapasitesi planlaması',
      ],
    },
    homeStory: {
      eyebrow: 'Hikâyemiz',
      title: 'Yolculuğumuz 1990 yılında başladı',
      body:
        'İlhamımızı, dünyanın en kaliteli kahve çekirdeklerinin yetiştiği Venezuela And Dağları’nın bereketli topraklarından alıyoruz. Amacımız sadece kahve satmak değil; doğanın ve emeğin buluştuğu o saf deneyimi yaşatmak. Her fincanda dağ esintisi kadar taze, keşif kadar özgür bir tat sunuyoruz.',
    },
    qualityPage: {
      title: 'Kalite standartları – Coffee Los Andes',
      description:
        'SGS analizleri, INSAI, Q Arabica Grader ve 4C uyumluluğu ile şeffaf kalite güvencesi.',
      heroEyebrow: 'Profesyonel güvence',
      heroTitle: 'Kalite standartları',
      heroDesc:
        'Profesyonel alıcıların ihtiyaç duyduğu şeffaflığı sunmak için analizleri bağımsız laboratuvarlarla ve sertifikalı süreçlerle destekliyoruz.',
      sgsTitle: 'SGS laboratuvar analizleri',
      sgsBody:
        'Kahvelerimiz, SGS gibi tanınmış laboratuvarlarda fiziksel ve duyusal parametreler açısından analiz edilir; nem, elek ve kusur gibi teknik göstergeler dokümante edilir.',
      insaiTitle: 'INSAI bitki sağlığı',
      insaiBody:
        'Ürünlerimiz INSAI bitki sağlığı sertifikasyon çerçevesinde değerlendirilir; menşe ve sağlık uygunluğu resmi standartlarla hizalanır.',
      qTitle: 'Q Arabica Grader',
      qBody:
        'Tadım ve kalite değerlendirmeleri, Q Arabica Grader yetkisine sahip uzmanlar tarafından yürütülür; skorlar ve lot profilleri profesyonel bir dilde raporlanır.',
      fourCTitle: '4C uyumluluğu',
      fourCBody:
        'Küresel sürdürülebilir kahve standartlarına (4C) uyumlu sertifikasyon kuruluşlarıyla çalışıyor; sürdürülebilirlik ve izlenebilirlik taahhüdümüzün parçasıdır.',
    },
    contactBlock: {
      eyebrow: 'B2B İletişim',
      title: 'Toptan iş birliği talebinizi iletin',
      description:
        'Berlin merkezli ekibimiz; Venezuela menşeli lotlar, lojistik ve numune süreçlerinde yanınızda. Formu doldurun, en kısa sürede dönüş yapalım.',
    },
    cta: {
      eyebrow: 'İş Birliği',
      title: 'B2B ortaklığı için hazır mısınız?',
      body: 'Coffee Los Andes ekibi, hacim ihtiyaçlarınızı, menü hedeflerinizi ve operasyonel gerçekliklerinizi dinlemek için hazır.',
      primary: 'İletişime Geçin',
      secondary: 'Kahve Portföyü',
    },
    brandValues: [
      {
        title: 'El ile hasat',
        body: 'Makineler yerine, yalnızca en olgun kirazların seçildiği seçici hasat ile hasat kalitesini garanti ederiz.',
      },
      {
        title: 'İzlenebilirlik',
        body: 'Tarladan fincana kadar şeffaf üretim ve lot bazlı izlenebilirlik; B2B ortaklarımızla aynı dili konuşuruz.',
      },
      {
        title: 'Usta kavurma',
        body: 'Aromayı korumak için küçük partiler halinde, hedef profile göre özenle kavurma ve dokümantasyon.',
      },
    ],
    products: {
      title: 'Kahve portföyü · Coffee Los Andes',
      description:
        'Ultra Premium (84+ SCA), Özel Varyete Serisi ve Roastery Base harmanları — toptan alıcılar için skor ve teknik fiş.',
      eyebrow: 'Üç ana seri',
      heading: 'Kahve portföyü',
      desc: 'Profesyonel toptancı kimliğiyle üç ana seride kategorize edilmiş specialty kahveler; skor, menşe ve kupa profiliyle sunulur.',
      segmentUltraTitle: 'Ultra Premium · Premium Micro Lot (84+ SCA)',
      segmentUltraDesc:
        'En yüksek kalite standardı; çiftlik ve lot bazlı tam izlenebilirlik. Örnek: Geisha (91,54) — egzotik tadım notları ve koleksiyon değeri.',
      segmentSpecialTitle: 'Özel Varyete Serisi (82,25 – 84,50 SCA)',
      segmentSpecialDesc:
        'Belirli varyetelerin karakteristik profilleri; Castillo, Catuaí, Caturra, Colombia 27 ve Bourbon (Santa Marta) gibi lotlar.',
      segmentBlendTitle: 'Klasik Blend ve Mixed · Roastery Base',
      segmentBlendDesc:
        'Kavurma evleri için sürekli kalite ve dengeli gövde; sütlü çikolata ve fındık profilli harmanlar ile commodity mixed serisi.',
      segmentLabelUltra: 'Ultra Premium',
      segmentLabelSpecial: 'Özel Varyete',
      segmentLabelBlend: 'Blend / Mixed',
    },
    contact: {
      title: 'İletişim – B2B Toptan Talep | Coffee Los Andes',
      description:
        'Coffee Los Andes ile toptan kahve ortaklıkları, dağıtım ve B2B iş birliği için iletişime geçin.',
      heroEyebrow: 'B2B İletişim',
      heroTitle: 'Toptan iş birliği talebinizi iletin',
      heroDesc:
        'Coffee Los Andes ekibi, hacim ihtiyaçlarınızı, menü hedeflerinizi ve operasyonel gerçekliklerinizi dinlemek için hazır. Formu doldurun; en kısa sürede sizinle iletişime geçeceğiz.',
      infoTitle: 'İletişim Bilgileri',
      emailLabel: 'E-posta:',
      regionLabel: 'Merkez:',
      regionValue: 'Berlin, Almanya',
      partnerLabel: 'Global ortak:',
      partnerValue:
        'Venezuela merkezli Multinacional Dunamix, C.A. ile doğrudan çiftlik bağlantısı; menşe ve lot güvencesi.',
      infoFootnote: 'Detaylı lojistik ve sözleşme bilgileri, nitelikli B2B talebiniz üzerine paylaşılır.',
      whoTitle: 'Kimler İletişime Geçmeli?',
      who1: '• Kafe ve restoran zincirleri',
      who2: '• Otel ve hospitality grupları',
      who3: '• Kurumsal ofis kahve çözümleri',
      who4: '• Dağıtım ve wholesale ortakları',
      who5: '• Özel etiket / white-label projeleri',
      mapTitle: 'Bölge Haritası',
      mapPlaceholder: 'Venezüella · And Etekleri · Plantasyon Bölgeleri',
      mapNote: 'Harita placeholder. Gerçek harita entegrasyonu proje gereksinimlerine göre eklenebilir.',
    },
    form: {
      aria: 'Hızlı iletişim formu',
      helper: 'Kısa formu doldurun, ekibimiz en kısa sürede size dönüş yapsın.',
      name: 'Ad Soyad',
      namePh: 'Adınız soyadınız',
      contact: 'Telefon veya E-posta',
      contactPh: '+90 ... veya eposta@alanadiniz.com',
      message: 'Mesajınız (Opsiyonel)',
      messagePh: 'Kısaca neye ihtiyacınız olduğunu yazabilirsiniz.',
      messageHint: 'İsterseniz bu alanı boş bırakabilirsiniz.',
      submit: 'Hızlıca İlet',
    },
    about: {
      title: 'Hakkımızda – Coffee Los Andes',
      description:
        '1990’dan bugüne Venezuela And Dağları menşesi, Berlin merkezli operasyon ve Dunamix ile doğrudan çiftlik bağlantısı.',
      heroEyebrow: 'Marka Hikâyesi',
      heroTitle: 'Venezuela And Dağları’ndan, profesyonel B2B sahnesine.',
      heroDesc:
        'Coffee Los Andes; yüksek rakımda yetişen çekirdekleri, izlenebilir lot yapısı ve usta kavurma disipliniyle toptan ortaklarımıza taşır.',
      whoTitle: 'Kimiz?',
      whoP1:
        'Merkezimiz Berlin, Almanya; kahve kaynağımız ise Venezuela And Dağları’nın bereketli toprakları ve Multinacional Dunamix, C.A. ile doğrudan çiftlik bağlantımızdır. Hasattan işlemeye, lojistikten kalite kontrole kadar süreci B2B değer zinciri olarak yönetiriz.',
      whoP2:
        'Kavurma evleri, kafeler ve distribütörler için tutarlı profiller, lot bazlı şeffaflık ve uzun vadeli iş birliği sunarız. Amacımız yalnızca kahve satmak değil; doğanın ve emeğin buluştuğu deneyimi profesyonel standartlarla yaşatmaktır.',
      panelEyebrow: 'Venezuela · And Dağları',
      panelText:
        '1.600 – 2.100 metre aralığında, mineral bakımından zengin topraklarda yavaş olgunlaşan çekirdekler. Kontrollü hasat, lot bazlı işleme ve koleksiyon değeri taşıyan mikro lotlar.',
      valuesEyebrow: 'Değerlerimiz',
      valuesTitle: 'Neden bize güvenmelisiniz?',
      valuesDesc: 'Coffee Los Andes, B2B ortakları için şeffaflık, tutarlılık ve uzun vadeli iş birliği taahhüt eder.',
      roastTitle: 'Kavurma Felsefesi',
      roastBody:
        'Her menşe ve hedef kullanım için ayrı kavurma profilleri geliştiririz. Espresso barlar, filtre odaklı kafeler, ofis makineleri ve kapsül projeleri için farklı ısıl eğriler, gelişim süreleri ve yükseklik ayarları kullanılır. Her batch; renk, yoğunluk ve cupping notlarıyla kayıt altına alınır. Tekrar siparişlerde aynı imza karakteri korunur.',
    },
    footer: {
      tagline:
        'Venezuela And Dağları menşeli specialty kahve. Tarladan fincana izlenebilir lotlar; Berlin merkezli operasyon ve Dunamix ile doğrudan çiftlik bağlantısı.',
      links: 'Bağlantılar',
      linkFullCatalog: 'Tüm kahve portföyü',
      linkQualityDetail: 'Kalite standartları (detay)',
      linkAbout: 'Kurumsal / Hakkımızda',
      partnerships: 'İş Birlikleri',
      contact: 'İletişim',
      fp1: 'Kafeler & restoranlar',
      fp2: 'Otel & hospitality',
      fp3: 'Kurumsal ofis çözümleri',
      office: 'Berlin · Almanya',
      formHint: 'Detaylı iletişim için B2B formunu kullanın.',
      copyright: 'Tüm hakları saklıdır.',
      line2: 'Venezüella menşeli kahve, küresel B2B ortaklıklar için tasarlandı.',
    },
    coffee: {
      wholesale: 'Toptan',
      ctaTitle: 'Hacim, kavurma hedefleri ve lojistik için {name} ile görüşün',
      ctaBody:
        'Ekibimiz, numune değerlendirmesi, sözleşme yapısı ve tutarlı tedarik planlamasında nitelikli alıcılarla çalışır. Operasyonel bağlamınızı paylaşın — profesyonel ve ticari bir sonraki adımı yanıtlayalım.',
      ctaPrimary: 'Toptan talep başlat',
      relatedEyebrow: 'Koleksiyon',
      relatedTitle: 'İlgili lotlar',
      relatedDesc:
        'Aynı yayına ait diğer skorlu lotları keşfedin — karşılaştırmalı cupping ve program planlaması için ideal.',
      viewLot: 'Lotu gör',
      cardCta: 'İncele',
      buyerEyebrow: 'Alıcı konumlandırması',
      buyerTitle: 'Bu lot nerede öne çıkar',
      buyerSubtitle:
        'Pratik toptan konumlandırma — satın alma kararı veren kavurmacılar, kafeler ve distribütörler için.',
      cupEyebrow: 'Kupa profili',
      cupTitle: 'Duyusal ve ticari okuma',
      cupLexicon: 'Genişletilmiş tadım sözlüğü',
      cupDisclaimer:
        'Tanımlayıcılar, cupping uyumu için referans sözlüğü olarak sunulur — aynı kavurma sonucunun garantisi değildir.',
      flavorTagsLegend:
        'Üstteki aromatik etiketler seçtiğiniz dile göre gösterilir (TR/DE).',
      techEyebrow: 'Teknik detaylar',
      techTitle: 'Menşe ve lot özellikleri',
      techDesc: 'Satın alma, QC ve menü iletişimi için doğrulanmış lot parametreleri.',
      techProducer: 'Üretici',
      techFarm: 'Çiftlik / Hacienda',
      techVariety: 'Çeşit',
      techProcess: 'İşleme',
      techRegion: 'Bölge / Eyalet',
      techCountry: 'Ülke',
      techScore: 'Kupa skoru',
      techRank: 'Sıra',
      techAltitude: 'Rakım',
      techMoisture: 'Nem (tipik aralık)',
      techScreen: 'Elek (Malla)',
      techBag: 'Lojistik',
      overviewEyebrow: 'Lot özeti',
      overviewTitle: 'Bu lot neden önemli',
      overviewFooter:
        'Toptan alıcılar için değer nettir: net ifade edilmiş duyusal kimlik, izlenebilir menşe ve farklı kavurma stilleri ile servis bağlamlarında tutarlı bir fincan — ister amiral gemisi bir çıkış ister güçlü bir specialty hat inşa edin.',
      heroSpecialty: 'Specialty Lot',
      heroCupScore: 'Kupa skoru',
      heroRank: 'Sıra',
      heroRequest: 'Toptan teklif iste',
      heroDetails: 'Lot detayları',
      heroSheetsNote: 'Lot sayfaları, nitelikli toptan talep üzerine paylaşılır.',
    },
    meta: {
      lotSuffix: 'Toptan | Coffee Los Andes',
    },
  },
  de: {
    htmlLang: 'de',
    nav: {
      home: 'Startseite',
      story: 'Unsere Geschichte',
      coffees: 'Unsere Kaffees',
      qualityDocs: 'Qualität & Zertifikate',
      wholesale: 'Großhandelslösungen',
      contact: 'Kontakt',
      cta: 'Angebot',
      aria: 'Hauptnavigation',
    },
    lang: { tr: 'TR', de: 'DE' },
    home: {
      title: 'Coffee Los Andes – Deinen Traum in jedem Schluck | Anden-Venezuela',
      description:
        'Premium-Kaffee aus den Hochlagen der venezolanischen Anden. Großhandel und B2B mit nachvollziehbaren Specialty-Lots.',
      slogan: 'Deinen Traum in jedem Schluck',
      heroSubtitle: 'Geschmack aus dem Herzen der Natur',
      heroLead:
        'Die Geschichte von Körnern, die zwischen 1.600 und 2.100 Metern wachsen und in mineralstoffreichen Böden langsam reifen.',
      badgeAltitude: 'Hochlagen-Charakter · ≥ 1.630 m',
      lotDetail: 'Lot-Details',
      coffeesSectionTitle: 'Unsere Kaffees',
      coffeesSectionIntro:
        'Drei Segmente Specialty-Kaffee — mit Score, Herkunft und technischem Datenblatt für professionelle Abnehmer.',
      coffeesCtaAll: 'Alle Kaffees ansehen',
      qualitySectionTitle: 'Qualität & Zertifikate',
      qualitySectionIntro:
        'SGS-Laboranalysen, Q-Arabica-Grader-Bewertungen und INSAI-Zertifikate — Details auf der Qualitätsseite.',
      wholesaleSectionTitle: 'Großhandelslösungen',
      wholesaleSectionIntro:
        'Skalierbare Lieferung für Röstereien und Cafés: Standard-Sackformat, klare Logistik und Planbarkeit.',
      wholesaleEyebrow: 'B2B-Operation',
      wholesaleBullets: [
        'Präsentation in 60-kg-Craft-Säcken — praktisch für Lager und Röstlinie',
        'Koordinierte Logistik und Dokumentation venezolanischer Lots vom Feld bis ins Lager',
        'Kapazitätsplanung über den Berliner Hauptsitz und direkte Farmanbindung durch Dunamix',
      ],
    },
    homeStory: {
      eyebrow: 'Unsere Geschichte',
      title: 'Unsere Reise begann 1990',
      body:
        'Inspiriert von den fruchtbaren Böden der venezolanischen Anden, wo einige der weltweit besten Kaffees entstehen. Wir verkaufen nicht nur Kaffee — wir vermitteln das reine Erlebnis, in dem Natur und Handwerk zusammentreffen. In jeder Tasse: frisch wie Bergluft, frei wie Entdeckung.',
    },
    qualityPage: {
      title: 'Qualitätsstandards – Coffee Los Andes',
      description:
        'SGS-Analysen, INSAI, Q Arabica Grader und 4C — transparente Qualitätssicherung.',
      heroEyebrow: 'Professionelles Vertrauen',
      heroTitle: 'Qualitätsstandards',
      heroDesc:
        'Für die Transparenz, die professionelle Einkäufer erwarten, stützen wir uns auf unabhängige Labore und zertifizierte Abläufe.',
      sgsTitle: 'SGS-Laboranalysen',
      sgsBody:
        'Kaffees werden in anerkannten Laboren wie SGS auf physikalische und sensorische Parameter geprüft; Feuchtigkeit, Sieb und Defekte werden dokumentiert.',
      insaiTitle: 'INSAI Pflanzengesundheit',
      insaiBody:
        'Über INSAI werden Herkunft und pflanzengesundheitliche Konformität in einem offiziellen Rahmen bewertet.',
      qTitle: 'Q Arabica Grader',
      qBody:
        'Cupping und Qualitätsbewertung werden von zertifizierten Q-Arabica-Gradern durchgeführt; Scores und Lot-Profile werden professionell berichtet.',
      fourCTitle: '4C-Konformität',
      fourCBody:
        'Wir arbeiten mit zertifizierten Organisationen im Einklang mit den globalen 4C-Nachhaltigkeitsstandards für Kaffee — Teil unseres Nachhaltigkeits- und Rückverfolgbarkeitsversprechens.',
    },
    contactBlock: {
      eyebrow: 'B2B-Kontakt',
      title: 'Ihre Großhandelsanfrage',
      description:
        'Unser Team in Berlin begleitet Sie bei venezolanischen Lots, Logistik und Proben — senden Sie das Formular, wir melden uns schnell.',
    },
    cta: {
      eyebrow: 'Partnerschaft',
      title: 'Bereit für eine B2B-Partnerschaft?',
      body: 'Wir hören zu: Volumen, Menüziele und operative Realität.',
      primary: 'Kontakt aufnehmen',
      secondary: 'Kaffeeportfolio',
    },
    brandValues: [
      {
        title: 'Handverlesung',
        body: 'Statt Maschinen eine selektive Ernte: nur die reifsten Kirschen — für reproduzierbare Qualität.',
      },
      {
        title: 'Rückverfolgbarkeit',
        body: 'Vom Feld bis zur Tasse transparente Prozesse und lot-basierte Nachverfolgbarkeit für B2B-Partner.',
      },
      {
        title: 'Meisterliche Röstung',
        body: 'Kleine Chargen, zielprofilorientiert — Aroma schützen und dokumentieren.',
      },
    ],
    products: {
      title: 'Kaffeeportfolio · Coffee Los Andes',
      description:
        'Ultra Premium (84+ SCA), Special Series und Roastery-Base-Blends — Scores und technisches Datenblatt für den Großhandel.',
      eyebrow: 'Drei Hauptlinien',
      heading: 'Kaffeeportfolio',
      desc: 'Drei Serien für professionelle Abnehmer: Score, Herkunft und Cup-Profil auf einen Blick.',
      segmentUltraTitle: 'Ultra Premium · Premium Micro Lot (84+ SCA)',
      segmentUltraDesc:
        'Höchster Qualitätsstandard; vollständige Rückverfolgbarkeit auf Farm- und Lot-Ebene — z. B. Geisha (91,54) mit exotischem Profil.',
      segmentSpecialTitle: 'Special Series (82,25 – 84,50 SCA)',
      segmentSpecialDesc:
        'Charakteristische Varietäten: Castillo, Catuaí, Caturra, Colombia 27 und Bourbon (Santa Marta).',
      segmentBlendTitle: 'Klassische Blends & Mixed · Roastery Base',
      segmentBlendDesc:
        'Stabile Basis für Röstereien; Milchschokolade und Haselnuss sowie wirtschaftliche Mixed-Commodity-Lots.',
      segmentLabelUltra: 'Ultra Premium',
      segmentLabelSpecial: 'Special Series',
      segmentLabelBlend: 'Blend / Mixed',
    },
    contact: {
      title: 'Kontakt – B2B-Großhandelsanfrage | Coffee Los Andes',
      description:
        'Kontaktieren Sie Coffee Los Andes für Großhandelspartnerschaften, Vertrieb und B2B-Zusammenarbeit.',
      heroEyebrow: 'B2B-Kontakt',
      heroTitle: 'Ihre Großhandelsanfrage',
      heroDesc:
        'Wir hören Ihre Volumina, Menüziele und operative Anforderungen. Füllen Sie das Formular aus — wir melden uns schnellstmöglich.',
      infoTitle: 'Kontaktdaten',
      emailLabel: 'E-Mail:',
      regionLabel: 'Hauptsitz:',
      regionValue: 'Berlin, Deutschland',
      partnerLabel: 'Globaler Partner:',
      partnerValue:
        'Direkte Farmverbindung über Multinacional Dunamix, C.A. (Venezuela) — Herkunfts- und Lot-Sicherheit.',
      infoFootnote: 'Detaillierte Logistik- und Vertragsinformationen werden bei qualifizierter B2B-Anfrage geteilt.',
      whoTitle: 'Wer sollte Kontakt aufnehmen?',
      who1: '• Café- und Restaurantketten',
      who2: '• Hotel- und Hospitality-Gruppen',
      who3: '• Corporate-Office-Kaffee',
      who4: '• Vertriebs- und Großhandelspartner',
      who5: '• Private Label / White-Label-Projekte',
      mapTitle: 'Regionalkarte',
      mapPlaceholder: 'Venezuela · Anden · Anbaugebiete',
      mapNote: 'Platzhalter-Karte. Echte Kartenintegration je nach Projekt möglich.',
    },
    form: {
      aria: 'Schnelles Kontaktformular',
      helper: 'Kurzes Formular ausfüllen, unser Team meldet sich schnell bei Ihnen.',
      name: 'Name',
      namePh: 'Ihr Vor- und Nachname',
      contact: 'Telefon oder E-Mail',
      contactPh: '+49 ... oder email@domain.de',
      message: 'Ihre Nachricht (optional)',
      messagePh: 'Sie können kurz schreiben, was Sie benötigen.',
      messageHint: 'Dieses Feld kann leer bleiben.',
      submit: 'Schnell senden',
    },
    about: {
      title: 'Über uns – Coffee Los Andes',
      description:
        'Seit 1990 inspiriert von den Anden; Hauptsitz Berlin, direkte Farmverbindung über Dunamix.',
      heroEyebrow: 'Markengeschichte',
      heroTitle: 'Von den venezolanischen Anden zur professionellen B2B-Bühne.',
      heroDesc:
        'Coffee Los Andes bringt Hochland-Körner mit nachvollziehbarer Lot-Struktur und meisterlicher Röstung zu Großhandelspartnern.',
      whoTitle: 'Wer wir sind',
      whoP1:
        'Unser Hauptsitz liegt in Deutschland, Berlin; die Ursprungsbohne kommt aus den fruchtbaren Böden der venezolanischen Anden — mit direkter Anbindung über Multinacional Dunamix, C.A. Von der Ernte bis zur Qualitätskontrolle denken wir die Kette als B2B-Wertschöpfung.',
      whoP2:
        'Für Röstereien, Cafés und Distributoren liefern wir konsistente Profile, lot-basierte Transparenz und langfristige Partnerschaft. Unser Ziel ist nicht nur Kaffee zu verkaufen, sondern das Erlebnis von Natur und Handwerk mit professionellen Standards zu vermitteln.',
      panelEyebrow: 'Venezuela · Anden',
      panelText:
        'Zwischen 1.600 und 2.100 Metern, mineralstoffreiche Böden, langsame Reife. Kontrollierte Ernte, lotweise Verarbeitung und Mikrolots mit Sammlerwert.',
      valuesEyebrow: 'Unsere Werte',
      valuesTitle: 'Warum uns vertrauen?',
      valuesDesc: 'Coffee Los Andes verpflichtet sich zu Transparenz, Konsistenz und langfristiger B2B-Zusammenarbeit.',
      roastTitle: 'Röstphilosophie',
      roastBody:
        'Für jede Herkunft und jeden Einsatz entwickeln wir eigene Röstprofile. Espresso-Bars, Filter-fokussierte Cafés, Büromaschinen und Kapselprojekte erhalten passende thermische Kurven. Jede Charge wird dokumentiert — bei Nachbestellungen bleibt die Signatur erhalten.',
    },
    footer: {
      tagline:
        'Specialty-Kaffee aus den venezolanischen Anden. Nachvollziehbare Lots vom Feld bis zur Tasse; Hauptsitz Berlin und direkte Farmverbindung über Dunamix.',
      links: 'Links',
      linkFullCatalog: 'Gesamtes Kaffeeportfolio',
      linkQualityDetail: 'Qualitätsstandards (Detail)',
      linkAbout: 'Unternehmen / Über uns',
      partnerships: 'Partnerschaften',
      contact: 'Kontakt',
      fp1: 'Cafés & Restaurants',
      fp2: 'Hotels & Hospitality',
      fp3: 'Corporate Office',
      office: 'Berlin · Deutschland',
      formHint: 'Für Details nutzen Sie bitte das B2B-Formular.',
      copyright: 'Alle Rechte vorbehalten.',
      line2: 'Venezolanischer Kaffee für globale B2B-Partnerschaften.',
    },
    coffee: {
      wholesale: 'Großhandel',
      ctaTitle: 'Volumen, Röstziele und Logistik für {name}',
      ctaBody:
        'Unser Team arbeitet mit qualifizierten Einkäufern an Probenbewertung, Vertragsstruktur und planbarer Lieferung. Teilen Sie Ihren operativen Kontext — wir antworten mit einem professionellen nächsten Schritt.',
      ctaPrimary: 'Großhandelsanfrage starten',
      relatedEyebrow: 'Kollektion',
      relatedTitle: 'Verwandte Lots',
      relatedDesc:
        'Weitere bewertete Lots derselben Ausgabe — ideal für vergleichendes Cupping und Programmplanung.',
      viewLot: 'Lot ansehen',
      cardCta: 'Details',
      buyerEyebrow: 'Positionierung',
      buyerTitle: 'Wo sich dieses Lot am besten bewährt',
      buyerSubtitle:
        'Praktische Großhandelspositionierung für Röster, Cafés und Distributoren.',
      cupEyebrow: 'Cup-Profil',
      cupTitle: 'Sensorik & kommerzielle Lesart',
      cupLexicon: 'Erweitertes Geschmackslexikon',
      cupDisclaimer:
        'Deskriptoren dienen als Referenzlexikon für Cupping-Abstimmung — keine Garantie identischer Röstergebnisse.',
      flavorTagsLegend:
        'Die aromatischen Etiketten oben erscheinen in der gewählten Sprache (TR/DE).',
      techEyebrow: 'Technische Details',
      techTitle: 'Herkunft & Lot-Spezifikation',
      techDesc: 'Verifizierte Lot-Parameter für Einkauf, QC und Menükommunikation.',
      techProducer: 'Produzent',
      techFarm: 'Farm / Hacienda',
      techVariety: 'Sorte',
      techProcess: 'Verarbeitung',
      techRegion: 'Region / Bundesland',
      techCountry: 'Land',
      techScore: 'Cup-Score',
      techRank: 'Rang',
      techAltitude: 'Höhe',
      techMoisture: 'Feuchte (typ. Bereich)',
      techScreen: 'Sieb (Malla)',
      techBag: 'Logistik',
      overviewEyebrow: 'Lot-Überblick',
      overviewTitle: 'Warum dieses Lot zählt',
      overviewFooter:
        'Für Großhandelskäufer ist der Wert klar: eine ausdrucksstarke sensorische Identität, nachvollziehbare Herkunft und ein Cup, der über Röstprofile und Servicekontexte hinweg trägt — ob Flagship-Release oder Specialty-Sortiment.',
      heroSpecialty: 'Specialty-Lot',
      heroCupScore: 'Cup-Score',
      heroRank: 'Rang',
      heroRequest: 'Großhandelsangebot anfragen',
      heroDetails: 'Lot-Details',
      heroSheetsNote: 'Lot-Infos werden bei qualifizierter Großhandelsanfrage bereitgestellt.',
    },
    meta: {
      lotSuffix: 'Großhandel | Coffee Los Andes',
    },
  },
};