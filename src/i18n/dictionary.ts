import type { Locale } from './types';

type Dict = Record<string, unknown>;

export const dictionary: Record<Locale, Dict> = {
  tr: {
    htmlLang: 'tr',
    nav: {
      home: 'Anasayfa',
      about: 'Hakkımızda',
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
      title: 'Coffee Los Andes – Andenlerden Premium Kahve | Venezuela',
      description:
        'Venezuela And Dağları’nın yüksek rakımlı tarlalarından premium kahve. Toptan ve B2B ortakları için izlenebilir specialty kahve.',
      slogan: 'Andenlerden Premium Kahve',
      heroSubtitle: 'İzlenebilir · Specialty · Sürdürülebilir',
      heroLead:
        'Venezuela’nın yüksek rakımlı bölgelerinden, seçilmiş çiftliklerden gelen specialty kahveler.',
      badgeAltitude: 'Yüksek İrtifa Lezzeti · ≥ 1.630 m',
      heroStrip1: 'B2B · Toptan',
      heroStrip2: 'Venezuela menşe',
      heroStrip3: 'Berlin · Operasyon',
      flowTitle: 'Çiftlikten kavurma tesisinize',
      flowStep1Title: 'Menşede hasat',
      flowStep1Body: 'And Dağları’nın yüksek rakımlı bölgelerinde, yerel üretici ortaklarımız tarafından toplanır ve ayıklanır.',
      flowStep2Title: 'Doğrudan sevkiyat',
      flowStep2Body: 'İzlenebilir şekilde, Avrupa hattına doğrudan gönderim.',
      flowStep3Title: 'Avrupa depolama',
      flowStep3Body: 'Gümrük süreçleri tamamlanır, depolama ve kalite takibi yapılır.',
      flowStep4Title: 'Kavurma tesisinize',
      flowStep4Body: '69 kg çuvallarla özenli ve planlı teslimat.',
      lotDetail: 'Lot detayı',
      coffeesSectionTitle: 'Kahvelerimiz',
      coffeesSectionIntro:
        'Altı vitrin: Competition lot, premium mikro lot, Specialty kahve, harman serisi, ticari seri ve kavrulmuş paket ürün.',
      coffeesCtaAll: 'Tüm kahveleri gör',
      retailTeaserTitle: 'Perakende kahve (paket)',
      retailTeaserBody:
        'Kavrulmuş, öğütülmüş paket ürünler — Café 1600 serisi; tam çekirdek seçenekleri ileride eklenebilir.',
      originEyebrow: 'Menşe · Venezuela',
      originTitle: 'Andes, Sanare ve seçilmiş çiftlikler',
      originBullets: [
        'Andes bölgesi',
        'Sanare / Lara',
        '1.600–2.000 m rakım',
        'Küçük üreticiler',
        'Doğal işleme yöntemleri',
      ],
      originFarmsTitle: 'Çiftlikler ve üreticiler',
      originFarms: ['Altos de Veracruz', 'Diğer partner çiftlikler'],
      qualitySectionTitle: 'Kalite ve Belgeler',
      qualitySectionIntro:
        'SGS laboratuvar analizleri, Q Arabica Grader değerlendirmeleri ve INSAI sertifikalarıyla güvence; detaylar için kalite sayfamıza göz atın.',
      wholesaleSectionTitle: 'Neden biz',
      wholesaleSectionIntro:
        'Doğrudan kaynak, izlenebilirlik ve uzun vadeli tedarik ile specialty kaliteyi rekabetçi koşullarda sunuyoruz.',
      wholesaleEyebrow: 'B2B değer önerisi',
      wholesaleBullets: [
        'Doğrudan tedarik',
        'İzlenebilirlik',
        'Stabil arz',
        'Specialty kalite',
        'Rekabetçi fiyatlandırma',
      ],
      /** Ana sayfa B2B CTA bandı (kahve kirazı arka plan) */
      b2bCtaEyebrow: 'B2B · Coffee Los Andes',
      b2bCtaTitle: 'Venezuela menşeli lotlar için teklif alın',
      b2bCtaBody:
        'Berlin’deki ekibimiz, Andenler’den seçilmiş yeşil çekirdek ve kavrulmuş ürünlerde hacim, numune ve lojistik konuşmak için hazır. Dunamix ile doğrudan çiftlik hattı; net menşe, lot takibi ve uzun vadeli tedarik.',
      b2bCtaButton: 'Teklif Al',
    },
    homeStory: {
      eyebrow: 'Hikâyemiz',
      /** Ana sayfa iki sütunlu hikâye bandı — üst başlık (caps) */
      tagline: 'Çekirdekten fincana',
      title: 'Yolculuğumuz 1990 yılında başladı',
      body:
        'İlhamımızı, dünyanın en kaliteli kahve çekirdeklerinin yetiştiği Venezuela And Dağları’nın bereketli topraklarından alıyoruz. Amacımız sadece kahve satmak değil; doğanın ve emeğin buluştuğu o saf deneyimi yaşatmak. Her fincanda dağ esintisi kadar taze, keşif kadar özgür bir tat sunuyoruz.',
      paragraphs: [
        'İlhamımızı, dünyanın en kaliteli kahve çekirdeklerinin yetiştiği Venezuela And Dağları’nın bereketli topraklarından alıyoruz.',
        'Amacımız sadece kahve satmak değil; doğanın ve emeğin buluştuğu o saf deneyimi yaşatmak.',
        'Her fincanda dağ esintisi kadar taze, keşif kadar özgür bir tat sunuyoruz.',
      ],
      knowMore: 'Daha fazlasını öğrenin',
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
      title: 'Yeşil ve kavrulmuş kahve · Coffee Los Andes',
      description:
        'Competition lot, premium mikro lot, Specialty Coffee, Blend Series, Commercial Series ve kavrulmuş paket ürünler.',
      eyebrow: 'Portföy',
      heading: 'Yeşil ve kavrulmuş kahve',
      desc: 'Roh kahve serileri ve paketlenmiş ürünler; skor, menşe ve teknik fiş ile profesyonel alıcılar için.',
      segmentCompetitionTitle: 'Competition lot',
      segmentCompetitionDesc:
        'Yüksek cup skoru ve koleksiyon odaklı üst segment — Geisha ve Tabi ile sınırlı Competition lotları.',
      segmentMicroTitle: 'Premium mikro lot',
      segmentMicroDesc:
        'Venezuela Andenleri’nden seçilmiş mikro parseller; deneysel ve klasik işlemeler, 88–90 skor bandı.',
      microBulletFarm: 'Çiftlik adı',
      microBulletLot: 'Lot adı',
      microBulletProcess: 'İşleme',
      microBulletScore: 'Skor',
      segmentSpecialtyTitle: 'Specialty Coffee',
      segmentSpecialtyDesc: 'Castillo, Caturra ve Catuaí — sürekli tedarik edilebilen premium Arabica.',
      segmentBaristaTitle: 'Blend Series',
      segmentBaristaDesc: 'Espresso performansı için dengeli harman — Barista Blend.',
      segmentCommercialTitle: 'Commercial Series',
      segmentCommercialDesc: 'Büyük hacim için fiyat optimize Arabica Mixed; cup skoru bandı 78–82.',
      segmentRetailTitle: 'Perakende kahve',
      segmentRetailDesc: 'Kavrulmuş paket ürünler — öğütülmüş ve ileride tam çekirdek.',
      segmentRoastedTitle: 'Kavrulmuş kahve (paket)',
      segmentRoastedDesc: 'Mağaza ve son kullanıcı için paketlenmiş ürünler.',
      retailProductTitle: 'Café 1600 – Catimor',
      retailProductStory:
        'Sanare, Venezuela yüksek rakım specialty kahvesi; Altos de Veracruz’ta üretilmiştir. Natural ve Honey işleme ile dengeli fincan; meyvemsi, kakao ve karamel notaları.',
      retailSpecLines: [
        'Çeşit: Catimor',
        'Rakım: 1600 m',
        'İşleme: Natural / Honey',
        'Cup skoru: 82–84',
        'Kavurma: Orta',
        'Asidite: Orta düşük',
        'Format: Öğütülmüş',
        'Ağırlık: 500 g',
      ],
      segmentLabelCompetition: 'Competition lot',
      segmentLabelMicro: 'Premium mikro lot',
      segmentLabelSpecialty: 'Specialty Coffee',
      segmentLabelBarista: 'Blend Series',
      segmentLabelCommercial: 'Commercial Series',
      segmentLabelRetail: 'Kavrulmuş kahve',
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
      formSent: 'Mesajınız alındı; en kısa sürede size dönüş yapacağız.',
      formError:
        'Gönderilemedi. Lütfen bir süre sonra tekrar deneyin veya doğrudan e-posta ile ulaşın. Sunucuda SMTP ayarlarının tanımlı olduğundan emin olun.',
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
        'Los Andes: yaklaşık 20 yıllık Güney Amerika ticari ilişkileri, Avrupa’daki GmbH yapısı ve Venezuela menşeli kahve kalitesi.',
      heroEyebrow: 'Hakkımızda',
      heroTitle: 'LOS ANDES – Köken, deneyim ve güven',
      heroDesc:
        'Uzun soluklu üretici ortaklıkları, kaynakta kalite kontrolü ve Almanya ile Avrupa’ya yapılandırılmış tedarik.',
      losAndesTitle: 'LOS ANDES – Köken, deneyim ve güven',
      losAndesLead: [
        'Yaklaşık 20 yıldır Güney Amerika’da doğrudan ticari ilişkiler yürütüyor; derin bölgesel bilgi ve sağlam deneyime sahibiz — özellikle kahve sektöründe.',
        'Bu süre içinde sadece üretim bölgelerini yakından tanımadık; üreticiler, çiftçiler ve yerel işletmelerle uzun vadeli, güvene dayalı ortaklıklar kurduk. Özellikle Venezuela’daki güçlü saha varlığımız, ürünlerimizin kalitesi ve güvenilirliğinin temelini oluşturur.',
        'Bu deneyimi uluslararası pazarlara başarıyla taşıdık.',
        'Uzun yıllar boyunca Türkiye, Orta Doğu ve Körfez ülkelerinde faaliyet gösterdik — Birleşik Arap Emirlikleri, Katar, Kuveyt, Bahreyn, Suudi Arabistan ve Türk cumhuriyetleri dahil.',
        'Bugün bu bilgi birikimini bilinçli bir şekilde Avrupa’ya taşıyoruz.',
        'LOS ANDES EUROPE GmbH çatısı altında Almanya ve Avrupa pazarına özenle seçilmiş yeşil çekirdek kahveler ile kavrulmuş Los Andes ürünlerini sunuyoruz.',
      ],
      losAndesSections: [
        {
          title: 'Kalite – Kaynakta doğrudan kontrol',
          parts: [
            {
              type: 'p',
              text:
                'Venezuela’daki yerel ekibimiz, üretim sürecinin tamamını sahada takip eder.',
            },
            {
              type: 'p',
              text:
                'Çiftçiler ve üreticilerle yakın iş birliğimiz ve bölgelerin derinlemesine bilgisi sayesinde; kahve kirazlarının seçiminden nihai işlemeye kadar her aşamanın kontrollü ve kalite odaklı ilerlemesini sağlıyoruz.',
            },
            {
              type: 'p',
              text:
                'Özellikle mikro lotlar ve seçilmiş premium lotlarda şunlara özel önem veriyoruz:',
            },
            {
              type: 'ul',
              items: [
                'Parsel bazlı seleksiyon',
                'Kontrollü fermentasyon',
                'Özenli kurutma süreçleri',
                'Hassas ayıklama ve kalite kontrolü',
              ],
            },
            {
              type: 'p',
              text:
                'Bu yaklaşım yalnızca yüksek ürün kalitesini değil, tutarlılık ve güvenilirliği de garanti eder.',
            },
          ],
        },
        {
          title: 'Çiftlikten Avrupa’ya – güvenilir yönetim',
          parts: [
            {
              type: 'p',
              text:
                'Tedarik zincirimiz baştan sona yapılandırılmış ve şeffaf biçimde organize edilir.',
            },
            {
              type: 'p',
              text:
                'Menşeden işlemeye ve lojistiğe kadar her adım planlanır ve izlenir.',
            },
            {
              type: 'p',
              text:
                'Böylece Avrupa’daki müşterilerimize istikrarlı, izlenebilir ve sorunsuz bir tedarik sağlarız.',
            },
          ],
        },
        {
          title: 'Ürün portföyümüz',
          parts: [
            {
              type: 'p',
              text:
                'LOS ANDES, farklı pazar ihtiyaçları için ayrıştırılmış bir ürün yelpazesi sunar:',
            },
            {
              type: 'ul',
              items: [
                'Competition ve premium lotlar (90+ puan)',
                'Seçilmiş mikro lotlar (85–89 puan)',
                'Sürekli temin edilebilen specialty kahveler',
                'Gastronomi ve kavurma evleri için Barista harmanları',
                'Hacim odaklı uygulamalar için ekonomik çözümler',
                'Kavrulmuş ve paketlenmiş kahve ürünleri',
              ],
            },
          ],
        },
        {
          title: 'Anlayışımız',
          parts: [
            {
              type: 'p',
              text:
                'LOS ANDES, Güney Amerika’daki bölgesel gücü ve uzun yıllara dayanan deneyimi, net yapılandırılmış bir Avrupa pazar varlığı ile birleştirir.',
            },
            {
              type: 'p',
              text:
                'Amacımız; yüksek kaliteli, izlenebilir ve sürdürülebilir üretilen kahveyi güvenilir ve ortaklık temelinde müşterilerimize ulaştırmaktır.',
            },
          ],
        },
      ],
      venezuelaTitle: 'Venezuela – Menşe, doğa ve karakter',
      venezuelaParagraphs: [
        'Venezuela, Latin Amerika’nın en köklü ve doğal kahve yetiştirme bölgelerinden biridir.',
        'Lara ve Mérida çevresindeki And bölgelerinde kahveler, 1.200 ile 2.000 metre arası yüksekliklerde ve istikrarlı iklim koşullarında yetişir.',
        'Yükseklik, verimli toprak ve dengeli sıcaklıkların birleşimi, kahve kirazlarının yavaş olgunlaşmasına olanak tanır. Böylece çekirdekler dengeli bir yapı, doğal tatlılık ve net bir lezzet profili geliştirir.',
        'Kahve üretimi çoğunlukla küçük, aile işletmelerinde yapılır. Kahve bitkileri sıklıkla kakao, muz ve diğer tropik bitkilerle birlikte karma kültürde yetiştirilir. Bu çok katmanlı ekosistem sadece toprak koruma ve istikrar sağlamakla kalmaz; kahvelerin aromatik gelişimini de etkiler.',
        'Özellikle kakao ağaçlarının bulunduğu bölgelerde kahvelerde çikolata ve kakao tonları sıklıkla belirgindir. Gölgeli yetiştirme, çekirdeklerin dengeli gelişimini destekler ve uyumlu bir tat profiline katkı sağlar.',
        'Hasat seçici olarak elle yapılır; yalnızca olgun kahve kirazları işlenir. Bu özenli seçim, tutarlı kalite için kritik bir faktördür.',
        'İşleme de kahvenin karakterinde belirleyici rol oynar. Venezuela’da klasik yöntemlere ek olarak, aromatiği güçlendirmek ve daha ayrıştırılmış profiller üretmek için giderek daha çok Natural ve Honey işleme kullanılmaktadır.',
        'Fermentasyon kontrollü ve yavaş yürütüldüğünde; meyvemsi, karamelize ve karmaşık lezzet notlarının gelişmesine önemli ölçüde katkı sağlar. And bölgesinin iklim koşulları, istikrarlı ve dengeli bir fermentasyona olanak tanır.',
        'Bölge, çeşit ve işlemeye göre kahveler; klasik çikolata–fındık tonlarından daha karmaşık, meyve öncülü ve hafif fermentasyonlu karakterlere kadar farklı profiller sunar.',
        'Bugün Venezuela kahvesi; özgünlük, denge ve genelde yumuşak bir asidite yapısı için öne çıkar. Aynı zamanda kalite, karakter ve erişilebilirlik arasında ikna edici bir denge sunar.',
      ],
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
      linkPrivacy: 'Gizlilik',
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
      tastingSheetEyebrow: 'Fincan profili',
      tastingSheetTitle: 'Tadım etiketleri',
      techOrigin: 'Menşe',
      techProducer: 'Üretici',
      techFarm: 'Çiftlik',
      badgeSgsTitle: 'SGS analiz raporu',
      badgeQGraderTitle: 'Q Arabica Grader onayı',
      techVariety: 'Çeşit',
      techFermentation: 'Fermantasyon',
      techFermentationControlled: 'Kontrollü fermantasyon',
      techFermentationExperimental: 'Deneysel fermantasyon',
      techFermentationDefault: 'Standart fermantasyon',
      techFlavorProfile: 'Lezzet profili',
      techFlavorNotes: 'Ana lezzet notları',
      techBadgeSection: 'Menşe ve lot detayları',
      techProcess: 'İşleme',
      techRegion: 'Bölge / Eyalet',
      techCountry: 'Ülke',
      techScore: 'Cupping skoru',
      techRank: 'Sıra',
      techAltitude: 'Rakım',
      techMoisture: 'Nem (tipik aralık)',
      techScreen: 'Elek (Malla)',
      techBag: 'Lojistik',
      heroSpecialty: 'Specialty Lot',
      heroCupScore: 'Kupa skoru',
      heroRank: 'Sıra',
      heroRequest: 'Toptan teklif iste',
      heroDetails: 'Lot detayları',
      heroSheetsNote: 'Lot sayfaları, nitelikli toptan talep üzerine paylaşılır.',
      heroImageZoomHint: 'Büyütmek için tıklayın',
      lightboxClose: 'Kapat',
      lightboxAria: 'Lot görseli — tam ekran önizleme',
      mapEyebrow: 'Çiftlik konumu',
      mapTitle: 'Üretim bölgesi haritası',
      mapOpenExternal: 'Google Maps\'te aç',
      mapFarm: 'Çiftlik',
      mapRegion: 'Bölge',
      mapCategory: 'Çiftlik kategorisi',
      mapLoading: 'Harita yükleniyor',
      mapDisclaimer: 'Koordinatlar, ürünün tedarik edildiği bölgeyi yaklaşık olarak göstermektedir.',
    },
    meta: {
      lotSuffix: 'Toptan | Coffee Los Andes',
    },
    error404: {
      title: 'Sayfa bulunamadı · Coffee Los Andes',
      description: 'Aradığınız sayfa taşınmış, silinmiş veya adres hatalı olabilir.',
      heading: 'Sayfa bulunamadı',
      body: 'Bağlantıyı kontrol edin veya anasayfaya dönün.',
      backHome: 'Anasayfaya git',
    },
    privacy: {
      title: 'Gizlilik · Coffee Los Andes',
      description:
        'Coffee Los Andes web sitesinde kişisel verilerin işlenmesi ve çerezler hakkında bilgilendirme.',
      heroEyebrow: 'Yasal bilgilendirme',
      heroTitle: 'Gizlilik ve kişisel veriler',
      p1:
        'Bu sayfa, web sitemiz yayına alınırken yasal metinlerin (KVKK / GDPR kapsamı) tamamlanması için yer tutucudur. Yayın öncesi hukuk danışmanınızla metni netleştirmenizi öneririz.',
      p2:
        'İletişim formu veya e-posta yoluyla paylaştığınız bilgiler yalnızca talebinize yanıt vermek ve B2B iletişim sürecini yürütmek için kullanılmalıdır.',
      p3:
        'Güncel gizlilik politikası metni ve veri sorumlusu iletişim bilgileri burada yayınlanacaktır.',
    },
  },
  de: {
    htmlLang: 'de',
    nav: {
      home: 'Startseite',
      about: 'Über uns',
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
      title: 'Coffee Los Andes – Premium Kaffee aus den Anden | Venezuela',
      description:
        'Premium-Kaffee aus den Hochlagen der venezolanischen Anden. Großhandel und B2B mit nachvollziehbaren Specialty-Lots.',
      slogan: 'Premium Kaffee aus den Anden',
      heroSubtitle: 'Rückverfolgbar · Specialty · Nachhaltig',
      heroLead:
        'Specialty-Kaffee aus den Hochlagen Venezuelas — von ausgewählten Farmen.',
      badgeAltitude: 'Hochlagen-Charakter · ≥ 1.630 m',
      heroStrip1: 'B2B · Großhandel',
      heroStrip2: 'Venezuela Ursprung',
      heroStrip3: 'Berlin · HQ',
      flowTitle: 'From Farm to your Roastery',
      flowStep1Title: 'Harvest at origin',
      flowStep1Body: 'Picked and sorted by our local partner farmers in the highlands of Venezuela.',
      flowStep2Title: 'Direct shipment',
      flowStep2Body: 'Traceable, straight to Europe.',
      flowStep3Title: 'Storage in Europe',
      flowStep3Body: 'Customs cleared, warehoused and quality monitored.',
      flowStep4Title: 'To your roastery',
      flowStep4Body: 'Delivered in 69 kg bags, handled with care.',
      lotDetail: 'Lot-Details',
      coffeesSectionTitle: 'Unsere Kaffees',
      coffeesSectionIntro:
        'Sechs Bereiche: Competition Lot, Premium Micro Lot, Specialty Coffee, Blend Series, Commercial Series und geröstete Packungen.',
      coffeesCtaAll: 'Alle Kaffees ansehen',
      retailTeaserTitle: 'Retail-Kaffee (Packungen)',
      retailTeaserBody:
        'Gerösteter, gemahlener Kaffee — Café 1600 Linie; ganze Bohnen können später ergänzt werden.',
      originEyebrow: 'Herkunft · Venezuela',
      originTitle: 'Anden, Sanare und ausgewählte Farmen',
      originBullets: [
        'Region Anden',
        'Sanare / Lara',
        '1.600–2.000 m Höhe',
        'Kleinproduzenten',
        'Natürliche Verarbeitungsmethoden',
      ],
      originFarmsTitle: 'Farmen & Produzenten',
      originFarms: ['Altos de Veracruz', 'Weitere Partnerfarmen'],
      qualitySectionTitle: 'Qualität & Zertifikate',
      qualitySectionIntro:
        'SGS-Laboranalysen, Q-Arabica-Grader-Bewertungen und INSAI-Zertifikate — Details auf der Qualitätsseite.',
      wholesaleSectionTitle: 'Warum wir',
      wholesaleSectionIntro:
        'Direkte Beschaffung, Rückverfolgbarkeit und stabile Lieferung — Specialty-Qualität zu wettbewerbsfähigen Konditionen.',
      wholesaleEyebrow: 'B2B Nutzen',
      wholesaleBullets: [
        'Direkte Beschaffung',
        'Rückverfolgbarkeit',
        'Stabile Lieferung',
        'Specialty-Qualität',
        'Wettbewerbsfähige Preise',
      ],
      b2bCtaEyebrow: 'B2B · Coffee Los Andes',
      b2bCtaTitle: 'Angebot für venezolanische Lots',
      b2bCtaBody:
        'Unser Team in Berlin berät Sie zu Volumen, Proben und Logistik für Rohkaffee und Röstware aus den Anden — mit direkter Farmverbindung über Dunamix, nachvollziehbarer Herkunft und planbarer Lieferung.',
      b2bCtaButton: 'Angebot',
    },
    homeStory: {
      eyebrow: 'Unsere Geschichte',
      tagline: 'Von der Bohne zur Tasse',
      title: 'Unsere Reise begann 1990',
      body:
        'Inspiriert von den fruchtbaren Böden der venezolanischen Anden, wo einige der weltweit besten Kaffees entstehen. Wir verkaufen nicht nur Kaffee — wir vermitteln das reine Erlebnis, in dem Natur und Handwerk zusammentreffen. In jeder Tasse: frisch wie Bergluft, frei wie Entdeckung.',
      paragraphs: [
        'Inspiriert von den fruchtbaren Böden der venezolanischen Anden, wo einige der weltweit besten Kaffees entstehen.',
        'Wir verkaufen nicht nur Kaffee — wir vermitteln das reine Erlebnis, in dem Natur und Handwerk zusammentreffen.',
        'In jeder Tasse: frisch wie Bergluft, frei wie Entdeckung.',
      ],
      knowMore: 'Mehr erfahren',
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
      title: 'Grüner & gerösteter Kaffee · Coffee Los Andes',
      description:
        'Competition Lots, Premium Micro Lots, Specialty Series, Barista Blend, Commercial und Packungen.',
      eyebrow: 'Portfolio',
      heading: 'Grüner & gerösteter Kaffee',
      desc: 'Rohkaffee-Serien und Packungen für professionelle Abnehmer — mit Score, Herkunft und technischem Datenblatt.',
      segmentCompetitionTitle: 'Competition Lot',
      segmentCompetitionDesc:
        'Höchste Cup-Scores — Geisha und Tabi aus Venezuela–Anden, limitierte Competition Lots.',
      segmentMicroTitle: 'Premium Micro Lot',
      segmentMicroDesc:
        'Ausgewählte Mikroparzellen; experimentelle und klassische Aufbereitung, Score-Band ca. 88–90.',
      microBulletFarm: 'Farmname',
      microBulletLot: 'Lotname',
      microBulletProcess: 'Verarbeitung',
      microBulletScore: 'Score',
      segmentSpecialtyTitle: 'Specialty Coffee',
      segmentSpecialtyDesc: 'Castillo, Caturra und Catuaí — dauerhaft verfügbare Premium-Arabica.',
      segmentBaristaTitle: 'Blend Series',
      segmentBaristaDesc: 'Abgestimmter Blend für konstante Espresso-Performance — Barista Blend.',
      segmentCommercialTitle: 'Commercial Series',
      segmentCommercialDesc: 'Preisoptimiertes Arabica Mixed für Großvolumen; Cupping-Band 78–82.',
      segmentRetailTitle: 'Retail-Kaffee',
      segmentRetailDesc: 'Geröstete Packungen — gemahlen und künftig ganz Bohne.',
      segmentRoastedTitle: 'Gerösteter Kaffee (Packungen)',
      segmentRoastedDesc: 'Produkte für Handel und Endverbraucher.',
      retailProductTitle: 'Café 1600 – Catimor',
      retailProductStory:
        'Hochland-Specialty aus Sanare, Venezuela, produziert bei Altos de Veracruz. Natural und Honey verarbeitet — ausgewogene Tasse mit fruchtigen, Kakao- und Karamellnoten.',
      retailSpecLines: [
        'Sorte: Catimor',
        'Höhe: 1600 m',
        'Verarbeitung: Natural / Honey',
        'Cupping-Score: 82–84',
        'Röstung: Medium',
        'Säure: Mittel-niedrig',
        'Format: Gemahlen',
        'Gewicht: 500 g',
      ],
      segmentLabelCompetition: 'Competition Lot',
      segmentLabelMicro: 'Premium Micro Lot',
      segmentLabelSpecialty: 'Specialty Coffee',
      segmentLabelBarista: 'Blend Series',
      segmentLabelCommercial: 'Commercial Series',
      segmentLabelRetail: 'Gerösteter Kaffee',
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
      formSent: 'Ihre Nachricht ist eingegangen — wir melden uns schnellstmöglich.',
      formError:
        'Senden fehlgeschlagen. Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt per E-Mail. Prüfen Sie die SMTP-Konfiguration auf dem Server.',
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
        'LOS ANDES: fast 20 Jahre Handelsbeziehungen in Südamerika, GmbH-Struktur in Europa und Qualität am Ursprung in Venezuela.',
      heroEyebrow: 'Über uns',
      heroTitle: 'LOS ANDES – Ursprung, Erfahrung und Vertrauen',
      heroDesc:
        'Langfristige Partnerschaften mit Produzenten, Qualitätskontrolle an der Quelle und strukturierte Belieferung für Deutschland und Europa.',
      losAndesTitle: 'LOS ANDES – Ursprung, Erfahrung und Vertrauen',
      losAndesLead: [
        'Seit nahezu 20 Jahren pflegen wir direkte Handelsbeziehungen in Südamerika und verfügen über fundierte Erfahrung sowie tiefgehendes regionales Know-how – insbesondere im Kaffeesektor.',
        'In dieser Zeit haben wir nicht nur die Anbauregionen intensiv kennengelernt, sondern auch langfristige und vertrauensvolle Partnerschaften mit Produzenten, Farmern und lokalen Betrieben aufgebaut. Unsere starke Präsenz vor Ort, insbesondere in Venezuela, bildet die Grundlage für die Qualität und Zuverlässigkeit unserer Produkte.',
        'Diese Erfahrung haben wir erfolgreich in internationale Märkte übertragen.',
        'Über viele Jahre hinweg waren wir in der Türkei, im Nahen Osten sowie in den Golfstaaten aktiv – darunter die Vereinigten Arabischen Emirate, Katar, Kuwait, Bahrain, Saudi-Arabien sowie in den türkischen Republiken.',
        'Heute bringen wir dieses Know-how gezielt nach Europa.',
        'Unter dem Dach der LOS ANDES EUROPE GmbH beliefern wir den deutschen und europäischen Markt mit sorgfältig ausgewählten grünen Kaffeebohnen sowie gerösteten Los Andes Kaffee Produkten.',
      ],
      losAndesSections: [
        {
          title: 'Qualität – Direkt an der Quelle kontrolliert',
          parts: [
            {
              type: 'p',
              text:
                'Unser lokales Team in Venezuela begleitet den gesamten Produktionsprozess direkt vor Ort.',
            },
            {
              type: 'p',
              text:
                'Durch unsere enge Zusammenarbeit mit Farmern und Produzenten sowie unsere tiefgehende Kenntnis der Regionen stellen wir sicher, dass jede Phase – von der Auswahl der Kaffeekirschen bis zur finalen Aufbereitung – kontrolliert und qualitätsorientiert erfolgt.',
            },
            {
              type: 'p',
              text:
                'Insbesondere bei Micro Lots und selektierten Premium-Lots legen wir besonderen Wert auf:',
            },
            {
              type: 'ul',
              items: [
                'Parzellenbasierte Selektion',
                'Kontrollierte Fermentation',
                'Sorgfältige Trocknungsprozesse',
                'Präzise Sortierung und Qualitätskontrolle',
              ],
            },
            {
              type: 'p',
              text:
                'Dieser Ansatz gewährleistet nicht nur eine hohe Produktqualität, sondern auch Konsistenz und Verlässlichkeit.',
            },
          ],
        },
        {
          title: 'Von der Farm bis nach Europa – zuverlässig gesteuert',
          parts: [
            {
              type: 'p',
              text:
                'Unsere Lieferkette ist vollständig strukturiert und transparent organisiert.',
            },
            {
              type: 'p',
              text:
                'Vom Ursprung über die Verarbeitung bis hin zur Logistik wird jeder Schritt geplant und überwacht.',
            },
            {
              type: 'p',
              text:
                'So stellen wir sicher, dass unsere Kunden in Europa eine stabile, nachvollziehbare und reibungslose Versorgung erhalten.',
            },
          ],
        },
        {
          title: 'Unser Produktportfolio',
          parts: [
            {
              type: 'p',
              text:
                'LOS ANDES bietet ein differenziertes Sortiment für verschiedene Marktanforderungen:',
            },
            {
              type: 'ul',
              items: [
                'Competition & Premium Lots (90+ Punkte)',
                'Selektierte Micro Lots (85–89 Punkte)',
                'Kontinuierlich verfügbare Specialty Coffees',
                'Barista Blends für Gastronomie und Röstereien',
                'Wirtschaftliche Lösungen für volumenbasierte Anwendungen',
                'Geröstete und verpackte Kaffeeprodukte',
              ],
            },
          ],
        },
        {
          title: 'Unser Anspruch',
          parts: [
            {
              type: 'p',
              text:
                'LOS ANDES verbindet regionale Stärke und langjährige Erfahrung in Südamerika mit einer klar strukturierten europäischen Marktpräsenz.',
            },
            {
              type: 'p',
              text:
                'Unser Anspruch ist es, hochwertigen, rückverfolgbaren und nachhaltig produzierten Kaffee zuverlässig und partnerschaftlich an unsere Kunden zu liefern.',
            },
          ],
        },
      ],
      venezuelaTitle: 'Venezuela – Ursprung, Natur und Charakter',
      venezuelaParagraphs: [
        'Venezuela zählt zu den ursprünglichsten und natürlichsten Kaffeeanbauregionen Lateinamerikas.',
        'In den Andenregionen rund um Lara und Mérida wachsen Kaffees in Höhenlagen zwischen 1.200 und 2.000 Metern unter stabilen klimatischen Bedingungen.',
        'Die Kombination aus Höhenlage, fruchtbaren Böden und gleichmäßigen Temperaturen ermöglicht eine langsame Reifung der Kaffeekirschen. Dadurch entwickeln die Bohnen eine ausgewogene Struktur, natürliche Süße und ein klares Geschmacksprofil.',
        'Die Kaffeeproduktion erfolgt überwiegend in kleinen, familiengeführten Betrieben. Häufig werden die Kaffeepflanzen in Mischkulturen angebaut – gemeinsam mit Kakao, Bananen und anderen tropischen Pflanzen. Dieses mehrschichtige Ökosystem sorgt nicht nur für Bodenschutz und Stabilität, sondern beeinflusst auch die aromatische Entwicklung der Kaffees.',
        'Insbesondere in Regionen mit Kakaobestand zeigen die Kaffees oft ausgeprägte Noten von Schokolade und Kakao. Die schattige Kultivierung unterstützt zudem eine gleichmäßige Entwicklung der Bohnen und trägt zu einem harmonischen Geschmacksprofil bei.',
        'Die Ernte erfolgt selektiv per Hand, wobei ausschließlich reife Kaffeekirschen verarbeitet werden. Diese sorgfältige Auswahl ist ein wesentlicher Faktor für konstante Qualität.',
        'Auch die Aufbereitung spielt eine entscheidende Rolle für den Charakter des Kaffees. In Venezuela werden neben klassischen Methoden zunehmend Natural- und Honey-Prozesse eingesetzt, um die Aromatik zu intensivieren und differenziertere Profile zu erzeugen.',
        'Die Fermentation, wenn sie kontrolliert und langsam durchgeführt wird, trägt wesentlich zur Entwicklung fruchtiger, karamellisierter und komplexer Geschmacksnoten bei. Besonders die klimatischen Bedingungen der Andenregion ermöglichen eine stabile und ausgewogene Fermentation.',
        'Je nach Region, Varietät und Aufbereitung entstehen Kaffees mit unterschiedlichen Profilen – von klassischen schokoladig-nussigen Noten bis hin zu komplexeren, fruchtbetonten und leicht fermentierten Charakteren.',
        'Heute steht venezolanischer Kaffee für Authentizität, Balance und eine angenehme, meist niedrige Säurestruktur. Gleichzeitig bietet er ein überzeugendes Verhältnis zwischen Qualität, Charakter und Verfügbarkeit.',
      ],
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
      linkPrivacy: 'Datenschutz',
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
      tastingSheetEyebrow: 'Cup-Profil',
      tastingSheetTitle: 'Verkostungsmerkmale',
      techOrigin: 'Herkunft',
      techProducer: 'Produzent',
      techFarm: 'Farm',
      badgeSgsTitle: 'SGS-Analysebericht',
      badgeQGraderTitle: 'Q Arabica Grader bestätigt',
      techVariety: 'Sorte',
      techFermentation: 'Fermentation',
      techFermentationControlled: 'Kontrollierte Fermentation',
      techFermentationExperimental: 'Experimentelle Fermentation',
      techFermentationDefault: 'Standardfermentation',
      techFlavorProfile: 'Geschmacksprofil',
      techFlavorNotes: 'Hauptgeschmacksnoten',
      techBadgeSection: 'Herkunft & Lot-Details',
      techProcess: 'Verarbeitung',
      techRegion: 'Region / Bundesland',
      techCountry: 'Land',
      techScore: 'Cupping Score',
      techRank: 'Rang',
      techAltitude: 'Höhe',
      techMoisture: 'Feuchte (typ. Bereich)',
      techScreen: 'Sieb (Malla)',
      techBag: 'Logistik',
      heroSpecialty: 'Specialty-Lot',
      heroCupScore: 'Cup-Score',
      heroRank: 'Rang',
      heroRequest: 'Großhandelsangebot anfragen',
      heroDetails: 'Lot-Details',
      heroSheetsNote: 'Lot-Infos werden bei qualifizierter Großhandelsanfrage bereitgestellt.',
      heroImageZoomHint: 'Zum Vergrößern klicken',
      lightboxClose: 'Schließen',
      lightboxAria: 'Lot-Bild — Vollbildvorschau',
      mapEyebrow: 'Farmstandort',
      mapTitle: 'Karte der Anbauregion',
      mapOpenExternal: 'In Google Maps öffnen',
      mapFarm: 'Farm',
      mapRegion: 'Region',
      mapCategory: 'Farmkategorie',
      mapLoading: 'Karte wird geladen',
      mapDisclaimer: 'Die Koordinaten zeigen die Anbauregion des Lots näherungsweise an.',
    },
    meta: {
      lotSuffix: 'Großhandel | Coffee Los Andes',
    },
    error404: {
      title: 'Seite nicht gefunden · Coffee Los Andes',
      description: 'Die Seite wurde verschoben, gelöscht oder die URL ist falsch.',
      heading: 'Seite nicht gefunden',
      body: 'Bitte prüfen Sie den Link oder kehren Sie zur Startseite zurück.',
      backHome: 'Zur Startseite',
    },
    privacy: {
      title: 'Datenschutz · Coffee Los Andes',
      description:
        'Hinweise zur Verarbeitung personenbezogener Daten und zu Cookies auf der Website von Coffee Los Andes.',
      heroEyebrow: 'Rechtliches',
      heroTitle: 'Datenschutz & personenbezogene Daten',
      p1:
        'Diese Seite ist ein Platzhalter, bis die vollständigen juristischen Texte (z. B. DSGVO) mit Ihrer Rechtsberatung finalisiert sind.',
      p2:
        'Daten, die Sie per Formular oder E-Mail mitteilen, sollten ausschließlich zur Bearbeitung Ihrer Anfrage und für die B2B-Kommunikation verwendet werden.',
      p3:
        'Die endgültige Datenschutzerklärung und Angaben zur verantwortlichen Stelle werden hier veröffentlicht.',
    },
  },
};