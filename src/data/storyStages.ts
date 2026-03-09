export type StoryStageId =
  | 'origin'
  | 'plantations'
  | 'harvest'
  | 'selection'
  | 'processing'
  | 'drying'
  | 'transport'
  | 'roasting'
  | 'packaging'
  | 'presentation';

export interface StoryStage {
  id: StoryStageId;
  order: number;
  label: string;
  title: string;
  subtitle: string;
  copy: string[];
  visualKey: string;
  accent: 'terracotta' | 'olive' | 'bronze' | 'gold';
}

export const storyStages: StoryStage[] = [
  {
    id: 'origin',
    order: 1,
    label: 'Venezüella',
    title: 'And Dağlarının Sisinden Doğan Bir Kahve Hikâyesi',
    subtitle: 'Kahvenin karakteri, yetiştiği toprakla başlar.',
    copy: [
      'Coffee Los Andes, hikâyesine Venezüella’nın And eteklerinde, okyanus rüzgârı ile dağ serinliğinin buluştuğu mikro iklimlerde başlar.',
      'Burada seçtiğimiz rakımlar, gölgeleme oranları ve toprak yapısı; B2B ortaklarımıza sunduğumuz profilin temelini oluşturur.',
      'Amacımız sadece kahve tedarik etmek değil; markalarınızın üzerinde yükselebileceği, sürdürülebilir ve izlenebilir bir menşei inşa etmektir.',
    ],
    visualKey: 'origin-mountains',
    accent: 'olive',
  },
  {
    id: 'plantations',
    order: 2,
    label: 'Plantasyonlar',
    title: 'Titizlikle Seçilmiş Plantasyon Ortaklıkları',
    subtitle: 'Uzun vadeli ilişkiler, istikrarlı kalite demektir.',
    copy: [
      'Coffee Los Andes, hacim ve süreklilik sağlayabilen, aynı zamanda terroir kimliğini koruyan plantasyonlarla çalışır.',
      'Çiftçilerimizle agronomi, gölgeleme, toprak bakımı ve hasat takvimi üzerine ortak protokoller geliştiririz.',
      'Böylece kahve profilleri yalnızca bugün değil, yıllar boyunca aynı imza karakteriyle B2B müşterilerinize ulaşır.',
    ],
    visualKey: 'plantations-canopy',
    accent: 'terracotta',
  },
  {
    id: 'harvest',
    order: 3,
    label: 'Hasat',
    title: 'Elle Toplanan Olgun Kirazlar',
    subtitle: 'Her kiraz, profil taahhüdümüzün bir parçasıdır.',
    copy: [
      'Hasat döneminde, plantasyon ekipleriyle birlikte sadece istenen olgunluk aralığındaki kirazları toplarız.',
      'Bu seçicilik; homojen fermantasyon, net asidite ve temiz bir fincan için kritik önemdedir.',
      'Süreç boyunca örneklemeler, fotoğraf ve lot notları ile her parti kayıt altına alınır.',
    ],
    visualKey: 'harvest-cherries',
    accent: 'bronze',
  },
  {
    id: 'selection',
    order: 4,
    label: 'Seçim',
    title: 'Çok Katmanlı Seçim ve Ayıklama',
    subtitle: 'Kusurları kaynağında durdururuz.',
    copy: [
      'Mekanik ve manuel ayıklama süreçlerini bir arada kullanarak, defekt oranlarını B2B standartlarının da altına çekeriz.',
      'Yoğunluk, boyut ve görsel kontrol; her lotun daha sonraki işleme adımlarına temiz bir şekilde girmesini sağlar.',
      'Bu yaklaşım, kavrum sonrası fire oranlarını düşürür ve tutarlı profiller sunar.',
    ],
    visualKey: 'selection-sorting',
    accent: 'gold',
  },
  {
    id: 'processing',
    order: 5,
    label: 'İşleme',
    title: 'Yıkama ve İşleme Protokolleri',
    subtitle: 'Her işlem adımı ölçülebilir, tekrarlanabilir ve dokümante edilir.',
    copy: [
      'Lot bazlı yıkama, fermantasyon ve kurutma parametreleri; hedeflediğiniz profil aralıklarına göre planlanır.',
      'Venezüella menşei için ıslak, yarı yıkanmış ve deneysel proses seçenekleri sunarız.',
      'Amaç; cupping formunda net bir imza oluştururken, hacim ve sürekliliği korumaktır.',
    ],
    visualKey: 'processing-washing',
    accent: 'olive',
  },
  {
    id: 'drying',
    order: 6,
    label: 'Kurutma',
    title: 'Kontrollü ve Sabit Kurutma Eğrileri',
    subtitle: 'Nem dengesini uzun vadeli raf ömrü için tasarlarız.',
    copy: [
      'Yataklar, seralar ve yavaş kurutma rampaları ile her lotun nem eğrisini takip ederiz.',
      'Bu sayede B2B ortaklarımız için hem transit sürecinde hem de depolamada stabilite sağlarız.',
      'Kahve, yalnızca hedeflenen nem ve su aktivitesi aralıklarını yakaladığında bir sonraki aşamaya geçer.',
    ],
    visualKey: 'drying-patios',
    accent: 'terracotta',
  },
  {
    id: 'transport',
    order: 7,
    label: 'Tedarik Zinciri',
    title: 'İzlenebilir Lojistik ve Söz Verilmiş Hacimler',
    subtitle: 'Menşeiden kavurma tesisimize kadar her adım kayıt altında.',
    copy: [
      'Lot kimlikleri, konteyner numaraları ve rota bilgileriyle birlikte dijital olarak saklanır.',
      'Transit koşulları, nem ve sıcaklık açısından B2B anlaşmalarınızla uyumlu olacak şekilde tasarlanır.',
      'Teslimat planlarımız, zincirinizdeki üretim takvimine göre düzenlenir.',
    ],
    visualKey: 'transport-logistics',
    accent: 'bronze',
  },
  {
    id: 'roasting',
    order: 8,
    label: 'Kavurma',
    title: 'Profil Odaklı Kavurma Mimarisi',
    subtitle: 'Lezzet kimliği burada inşa edilir.',
    copy: [
      'Kavurma ekibimiz, her menşe ve hedef kullanım için ayrı profil setleri geliştirir.',
      'Kafe, restoran, ofis ve kapsül uygulamaları için farklı ısıl eğriler, gelişim süreleri ve yükseklik ayarları kullanılır.',
      'Her batch; renk, yoğunluk ve cupping notlarıyla kayıt altına alınır ve tekrar siparişlerde referans alınır.',
    ],
    visualKey: 'roasting-drums',
    accent: 'gold',
  },
  {
    id: 'packaging',
    order: 9,
    label: 'Paketleme',
    title: 'Uzun Ömürlü, Markaya Uyumlu Paketleme',
    subtitle: 'Kahvenizin yolculuğu, raf üzerinde tamamlanır.',
    copy: [
      'Valfli, çok katmanlı ve oksijen bariyerli ambalajlar ile tazeliği koruruz.',
      'Kendi markanız veya Coffee Los Andes markası altında, B2B hedeflerinize uygun farklı formatlar sunarız.',
      'Etiket, lot ve kavurma tarihi bilgileri; izlenebilirlik için standart hâle getirilir.',
    ],
    visualKey: 'packaging-line',
    accent: 'olive',
  },
  {
    id: 'presentation',
    order: 10,
    label: 'Sunum',
    title: 'Son Nokta: Bardakta Tutarlı Deneyim',
    subtitle: 'Ortaklarımız için “görünmeyen” ama hissedilen bir altyapı inşa ederiz.',
    copy: [
      'Coffee Los Andes, müşterilerinizin eline ulaşan fincanın arkasındaki görünmez ekiptir.',
      'Menşe seçiminden kavurma mimarisine, lojistikten paketlemeye kadar tüm süreci B2B operasyonlarınız için tasarlarız.',
      'Sonuç: Markanıza yakışan, istikrarlı, rafine bir kahve deneyimi.',
    ],
    visualKey: 'presentation-service',
    accent: 'bronze',
  },
];

