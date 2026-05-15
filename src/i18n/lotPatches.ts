export const lotLocalePatches: Record<
  string,
  Partial<
    Record<
      string,
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
    ru: {
      collectionLabel: 'Конкурсный лот',
      story: 'Лот с наивысшим рейтингом в коллекции: натуральная Geisha с фермы Estancia Aires de Campo с многослойной ароматикой и шампанской элегантностью.',
      commercialSummary: 'Флагманская ультра-премиальная Geisha для обжарщиков, ищущих оценку 90+, экзотическую структуру чашки и прозрачную прослеживаемость фермы.',
      cupProfileSummary: 'Открывается цветочными и экзотическими пряностями, углубляется в амаретто и ноты игристого вина, завершается сладким персиком и утончённым какао.',
      buyerUseCases: ['Ограниченные флагманские релизы и меню конкурсного уровня', 'Высококлассные фильтр и эспрессо программы', 'Коллекции с топовой венесуэльской Geisha'],
    },
    ar: {
      collectionLabel: 'صنف المسابقة',
      story: 'أعلى صنف تقييماً في المجموعة: Geisha طبيعية من مزرعة Estancia Aires de Campo بعطرية متعددة الطبقات وأناقة تشبه الشمبانيا.',
      commercialSummary: 'Geisha فائقة الفخامة للمحمصين الباحثين عن تمييز 90+، وبنية كوب غريبة، وإمكانية تتبع شفافة للمزرعة.',
      cupProfileSummary: 'تفتح بالأزهار والبهارات الغريبة، وتعمق في الأمارتو وملاحظات النبيذ الفوار، وتنهي بخوخ حلو وكاكاو راقٍ.',
      buyerUseCases: ['إصدارات رائدة محدودة وقوائم المسابقات', 'برامج فلتر وإسبريسو عالية الجودة', 'مجموعات Geisha الفنزويلية الأعلى تقييماً'],
    },
    de: {
      collectionLabel: 'Competition Lot',
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
    ru: {
      collectionLabel: 'Конкурсный лот',
      story: 'Лот Tabi по мойке, отмеченный гурманской сладостью — венесуэльские ноты комфорта в specialty чашке.',
      commercialSummary: 'Высокооценённый мытый кофе с доступным десертным характером для обжарщиков, сочетающих доступность и престиж.',
      cupProfileSummary: 'Сладкое какао и карамелизованный кокос на мягком теле — профиль «гурманский десерт», остающийся чистым и воспроизводимым.',
      buyerUseCases: ['Эспрессо и молочные напитки с надёжной сладостью', 'Оптовые линейки, сочетающие доступность с кредитом 90+', 'Batch brew и фильтр с чёткостью и телом'],
    },
    ar: {
      collectionLabel: 'صنف المسابقة',
      story: 'صنف Tabi مغسول يُحتفى به لحلاوته الذواقة — نكهات الراحة الفنزويلية في كوب متخصص.',
      commercialSummary: 'قهوة مغسولة عالية التقييم بطابع حلوى يسهل الوصول إليه، للمحمصين الموازنين بين إمكانية الوصول والمكانة.',
      cupProfileSummary: 'كاكاو حلو وجوز هند مكرمل فوق جسم ناعم — ملف "حلوى ذواقة" يبقى نظيفاً وقابلاً للتكرار.',
      buyerUseCases: ['الإسبريسو ومشروبات الحليب التي تحتاج حلاوة موثوقة', 'خطوط الجملة الموازنة بين إمكانية الوصول وموثوقية 90+', 'Batch brew وفلتر بوضوح وجسم'],
    },
    de: {
      collectionLabel: 'Competition Lot',
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
    ru: {
      collectionLabel: 'Премиальный микро-лот',
      story: 'Экспериментальный ультра-премиальный лот, сочетающий чайную элегантность с цветочным подъёмом и сладкой цитрусовой сложностью.',
      commercialSummary: 'Для обжарщиков, которым нужен разговорный экспериментальный лот с балансом и многослойной ароматикой.',
      cupProfileSummary: 'Чайная структура с цитрусом и цветочными нотами — сложный, элегантный, намеренно не универсальный на каппинговом столе.',
      buyerUseCases: ['Авантюрные сезонные меню', 'Фильтр-ориентированные кафе и оптовые клиенты с каппинг-фокусом', 'Экспериментальный процессинг с балансом'],
    },
    ar: {
      collectionLabel: 'ميكرو-لوت فاخر',
      story: 'صنف تجريبي فائق الفخامة يجمع الأناقة الشبيهة بالشاي مع الارتفاع الزهري وتعقيد الحمضيات الحلو.',
      commercialSummary: 'للمحمصين الراغبين في صنف تجريبي يفتح حواراً مع توازن وعطرية متعددة الطبقات.',
      cupProfileSummary: 'بنية شبيهة بالشاي مع الحمضيات والأزهار — معقد، أنيق، غير عام بشكل متعمد على طاولة التذوق.',
      buyerUseCases: ['قوائم موسمية مغامِرة', 'مقاهي تركز على الفلتر وعملاء الجملة ذوو التوجه نحو التذوق', 'معالجة تجريبية بتوازن'],
    },
    de: {
      collectionLabel: 'Premium Micro Lot',
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
    ru: {
      collectionLabel: 'Премиальный микро-лот',
      story: 'Микро-лот honey-процессинга, балансирующий зрелую сладость косточковых фруктов с карамельной глубиной и благородными пряными нотами.',
      commercialSummary: 'Ультра-премиальный honey-профиль для сезонных релизов и обжарщиков, ищущих сладость с многослойными фруктами и пряностями.',
      cupProfileSummary: 'Honey вводит косточковые фрукты и коричневый сахар в диалог с какао и кедром — щедрый, универсальный для разных методов заваривания.',
      buyerUseCases: ['Honey-презентации и сезонные single origins', 'Эспрессо или фильтр с акцентом на тело и фрукты', 'Ротирующиеся featured лоты в премиальных кафе'],
    },
    ar: {
      collectionLabel: 'ميكرو-لوت فاخر',
      story: 'ميكرو-لوت معالج بالعسل يوازن بين حلاوة فاكهة النواة الناضجة والعمق المكرمل ونبرات البهارات النبيلة.',
      commercialSummary: 'ملف عسل فائق الفخامة للإصدارات الموسمية والمحمصين الباحثين عن الحلاوة مع فاكهة وبهارات متعددة الطبقات.',
      cupProfileSummary: 'العسل يضع فاكهة النواة والسكر البني في حوار مع الكاكاو والأرز — سخي ومتنوع عبر طرق التحضير.',
      buyerUseCases: ['عروض العسل والأصناف الفردية الموسمية', 'قوائم إسبريسو أو فلتر تبرز الجسم والفاكهة', 'الأصناف المميزة المتناوبة في المقاهي الفاخرة'],
    },
    de: {
      collectionLabel: 'Premium Micro Lot',
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
    ru: {
      collectionLabel: 'Премиальный микро-лот',
      story: 'Экспериментальный Castillo с шоколадной чашкой, ореховой сладостью и кремовой структурой — в ультра-премиальном диапазоне 84+.',
      commercialSummary: 'Для покупателей, которым нужна глубина и шоколадная сложность в топ-рейтинговом Castillo.',
      cupProfileSummary: 'Шоколадный и кремовый, с вишней и фундуком, поддерживающими полную удовлетворяющую структуру.',
      buyerUseCases: ['Насыщенный эспрессо single и компоненты', 'Меню с приоритетом тела и шоколадного характера', 'Мост между классическим комфортом и specialty деталью'],
    },
    ar: {
      collectionLabel: 'ميكرو-لوت فاخر',
      story: 'Castillo تجريبي بكوب يقوده الشوكولاتة، وحلاوة مكسرة، وبنية كريمية — لا يزال في نطاق الفئة الفائقة 84+.',
      commercialSummary: 'للمشترين الراغبين في العمق والتعقيد الذي تقوده الشوكولاتة ضمن تعبير Castillo ذو التقييم الأعلى.',
      cupProfileSummary: 'يقوده الشوكولاتة وكريمي، مع الكرز والبندق يدعمان بنية ممتلئة ومُرضية.',
      buyerUseCases: ['إسبريسو مفرد ومكونات أغنى', 'قوائم تعطي الأولوية للجسم والطابع المدفوع بالكاكاو', 'الجسر بين الراحة الكلاسيكية وتفصيل الـ specialty'],
    },
    de: {
      collectionLabel: 'Premium Micro Lot',
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
    ru: {
      collectionLabel: 'Премиальный микро-лот',
      story: 'Мытый Monteclaro от Марии Герреро — чистая структура с бергамотом, коричневым сахаром и деликатной травяной нюансировкой.',
      commercialSummary: 'Престижный ультра-премиальный мытый лот для покупателей, ценящих баланс, чёткость и доступную сложность.',
      cupProfileSummary: 'Чистая washed-архитектура: цитрус и красные фрукты поднимают чашку; шоколад и карамель держат центр.',
      buyerUseCases: ['Взыскательные оптовые программы, нуждающиеся в балансе', 'Премиальный фильтр и эспрессо с широкой привлекательностью', 'Покупатели, желающие отличия без экстремальной поляризации'],
    },
    ar: {
      collectionLabel: 'ميكرو-لوت فاخر',
      story: 'Monteclaro مغسول من María Guerrero — بنية نظيفة مع البيرغاموت والسكر البني والفارق العشبي الرقيق.',
      commercialSummary: 'صنف مغسول فائق الفخامة للمشترين الذين يقدّرون التوازن والوضوح والتعقيد يسهل الوصول إليه.',
      cupProfileSummary: 'بنية washed نظيفة: الحمضيات والفاكهة الحمراء ترفع الكوب؛ الشوكولاتة والكراميل يمسكان المركز.',
      buyerUseCases: ['برامج الجملة المتمردة التي تحتاج توازناً', 'فلتر وإسبريسو فاخر بجاذبية واسعة', 'المشترون الراغبون في التميز دون تطرف'],
    },
    de: {
      collectionLabel: 'Premium Micro Lot',
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
    ru: {
      collectionLabel: 'Премиальный микро-лот',
      story: 'Мытый ультра-премиальный лот со сладкой ягодной выразительностью, пряной деталью и мягким доступным телом.',
      commercialSummary: 'Универсальный характерный single origin для фруктово-пряного сторителлинга без потери баланса.',
      cupProfileSummary: 'Ягодный с травяно-пряным измерением — сладкий, характерный, мягкий по телу.',
      buyerUseCases: ['Ротации single origin с фруктово-пряными историями', 'Фильтр и лёгкий эспрессо, где баланс обязателен', 'Оптовые меню с универсальным отличием'],
    },
    ar: {
      collectionLabel: 'ميكرو-لوت فاخر',
      story: 'صنف مغسول فائق الفخامة بتعبير توتي حلو وتفصيل بهاري وجسم ناعم يسهل الوصول إليه.',
      commercialSummary: 'أصل فردي متنوع ذو طابع مميز لرواية قصص الفاكهة والبهارات دون فقدان التوازن.',
      cupProfileSummary: 'يتقدم التوت مع بُعد عشبي-بهاري — حلو، مميز، ناعم في الجسم.',
      buyerUseCases: ['تناوبات الأصل الفردي مع روايات الفاكهة والبهارات', 'فلتر وإسبريسو خفيف حيث التوازن أساسي', 'قوائم الجملة التي تحتاج تمييزاً متنوعاً'],
    },
    de: {
      collectionLabel: 'Premium Micro Lot',
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
    ru: {
      collectionLabel: 'Премиальный микро-лот',
      story: 'Натуральный Bourbon с выразительными фруктами, более тёмными шоколадными нотами и утончёнными цветочными нотами.',
      commercialSummary: 'Ультра-премиальный натуральный Bourbon для фруктово-ориентированных программ, требующих изысканности.',
      cupProfileSummary: 'Натуральная интенсивность с полировкой: лесные фрукты и вишня поднимают чашку; какао заземляет её; цветы завершают чисто.',
      buyerUseCases: ['Natural-ориентированные и ограниченные релизы', 'Обжарщики, демонстрирующие фрукты с утончённым финишем', 'Дифференциация через изысканный натуральный профиль'],
    },
    ar: {
      collectionLabel: 'ميكرو-لوت فاخر',
      story: 'Bourbon طبيعي بتعبير فاكهي قوي، ونغمات شوكولاتة أغمق، وأزهار راقية.',
      commercialSummary: 'Bourbon طبيعي فائق الفخامة لبرامج تتقدم الفاكهة فيها مع متطلبة للرقي.',
      cupProfileSummary: 'كثافة طبيعية مع لمسة إتقان: ثمار الغابة والكرز يرفعان الكوب؛ الكاكاو يرسّخه؛ الأزهار تنهي بنقاء.',
      buyerUseCases: ['الإصدارات التي تتقدم الطبيعي والمحدودة', 'المحمصون الذين يعرضون الفاكهة مع نهاية راقية', 'التمييز من خلال ملف طبيعي متطور'],
    },
    de: {
      collectionLabel: 'Premium Micro Lot',
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
  'geisha-90-30': {
    ru: {
      collectionLabel: 'Конкурсный лот',
      story: 'Вторая высокооценённая натуральная Geisha от Estancia Aires de Campo с оценкой 90.30 — создана для премиальных меню и конкурентного сторителлинга.',
      commercialSummary: 'Geisha конкурсного уровня для обжарщиков, желающих лот 90+ с сильным нарративом фермы и чистым элегантным профилем чашки.',
      cupProfileSummary: 'Цветочный подъём со сладкими косточковыми фруктами и какао; чистая структура и утончённый финиш для showcase заваривания.',
      buyerUseCases: ['Премиальный фильтр и дегустационные рейсы', 'Ограниченные релизы для оптовых клиентов', 'Конкурсно-вдохновлённые меню с кредитом 90+'],
    },
    ar: {
      collectionLabel: 'صنف المسابقة',
      story: 'Geisha طبيعية ثانية عالية التقييم من Estancia Aires de Campo، حصلت على 90.30 نقطة — مبنية للقوائم الفاخرة والسرد التنافسي.',
      commercialSummary: 'Geisha على مستوى المسابقة للمحمصين الراغبين في صنف 90+ بسرد مزرعة قوي وملف كوب نظيف وأنيق.',
      cupProfileSummary: 'ارتفاع زهري مع فاكهة نواة حلوة وكاكاو؛ بنية نظيفة ونهاية راقية مصممة للتحضير في العروض.',
      buyerUseCases: ['فلتر فاخر ورحلات التذوق', 'إصدارات محدودة لعملاء الجملة', 'قوائم مستوحاة من المسابقات تحتاج موثوقية 90+'],
    },
  },
  'geisha-el-recreo-91-03': {
    ru: {
      collectionLabel: 'Конкурсный лот',
      story: 'Экспериментальная Geisha от Hacienda El Recreo: лесные ягоды, ежевика и киви с элегантностью жасмина; сливочное тело, тёмный шоколад в балансе.',
      commercialSummary: 'Ультра-премиальный для покупателей, ищущих экспериментальный процессинг с десертной сладостью и утончёнными цветочными нотами.',
      cupProfileSummary: 'Ягоды и киви встречают жасмин; шёлковое тело, тёмный шоколад — идеально для 91+ витрин.',
      buyerUseCases: ['Экспериментальная Geisha на фильтре и выборочном эспрессо', 'Сезонные меню с фруктово-сиропной сладостью', 'Оптовые клиенты с фокусом на 91+'],
    },
    ar: {
      collectionLabel: 'صنف المسابقة',
      story: 'Geisha تجريبية من Hacienda El Recreo: توت الغابة، وتوت العليق، والكيوي مع أناقة الياسمين؛ جسم زبداني، شوكولاتة مرة في توازن.',
      commercialSummary: 'فائق الفخامة للمشترين الراغبين في المعالجة التجريبية بحلاوة شبيهة بالحلوى وأزهار راقية.',
      cupProfileSummary: 'التوت والكيوي يلتقيان بالياسمين؛ جسم حريري، شوكولاتة داكنة — مثالي لعروض 91+.',
      buyerUseCases: ['Geisha تجريبية على الفلتر والإسبريسو المختار', 'قوائم موسمية تبرز حلاوة شراب الفاكهة', 'عملاء الجملة ذوو التركيز على 91+'],
    },
    de: {
      collectionLabel: 'Competition Lot',
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
    ru: {
      collectionLabel: 'Specialty Coffee',
      story: 'Special Series Castillo от Finca Las Mesas — сладкий, шёлковый, со сложностью сухофруктов и орехов.',
      commercialSummary: 'Идеально для обжарщиков, которым нужен сильный Special Series Castillo с десертной сладостью и телом.',
      cupProfileSummary: 'Мёд и шоколад встречают инжир и макадамию в шёлковой, долгой сладкой структуре.',
      buyerUseCases: ['Эспрессо и молочные меню', 'Оптовые линейки в диапазоне 82–84,5 SCA', 'Обжарочные программы с узнаваемым характером Castillo'],
    },
    ar: {
      collectionLabel: 'قهوة Specialty',
      story: 'Castillo من Special Series من Finca Las Mesas — حلو وحريري مع تعقيد الفاكهة المجففة والمكسرات.',
      commercialSummary: 'مثالي للمحمصين الذين يحتاجون Castillo قوياً من Special Series بحلاوة حلوى وجسم.',
      cupProfileSummary: 'العسل والشوكولاتة يلتقيان بالتين والماكاداميا في بنية حريرية حلوة طويلة الأمد.',
      buyerUseCases: ['قوائم الإسبريسو والحليب', 'خطوط الجملة في نطاق 82–84.5 SCA', 'برامج المحمصة التي تحتاج طابع Castillo المميز'],
    },
    de: {
      collectionLabel: 'Specialty Coffee',
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
    ru: {
      collectionLabel: 'Specialty Coffee',
      story: 'Мытый Catuaí с ванильной сладостью, шёлковым ощущением во рту и живой цитрусовой кислотностью.',
      commercialSummary: 'Special Series Catuaí для сбалансированного эспрессо и фильтра с широкой привлекательностью.',
      cupProfileSummary: 'Ванильная сладость с шёлковым телом и чёткой цитрусовой нотой — доступный и specialty-достоверный.',
      buyerUseCases: ['Ежедневный эспрессо и batch brew', 'Кафе с надёжной чёткостью и сладостью', 'Оптовые покупатели в диапазоне Special Series'],
    },
    ar: {
      collectionLabel: 'قهوة Specialty',
      story: 'Catuaí مغسول بحلاوة الفانيليا وملمس حريري وحموضة حمضية حيوية.',
      commercialSummary: 'Catuaí من Special Series لبرنامج إسبريسو وفلتر متوازن بجاذبية شعبية.',
      cupProfileSummary: 'حلاوة يقودها الفانيليا بجسم حريري ورفعة حمضية حادة — يسهل الوصول إليه ومقنع كـ specialty.',
      buyerUseCases: ['إسبريسو يومي وbatch brew', 'المقاهي التي تحتاج وضوحاً وحلاوة موثوقة', 'مشترو الجملة في نطاق Special Series'],
    },
    de: {
      collectionLabel: 'Specialty Coffee',
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
    ru: {
      collectionLabel: 'Specialty Coffee',
      story: 'Лот Caturra с профилем клёна и шоколада — надёжное предложение Special Series.',
      commercialSummary: 'Отлично для обжарщиков, ищущих баланс клёна и шоколада и повседневное specialty позиционирование.',
      cupProfileSummary: 'Клён и какао несут округлую, уютную чашку с чистым выходом — универсальный для разных методов заваривания.',
      buyerUseCases: ['House эспрессо и фильтр бленды', 'Сезонная ротация с чётким вкусовым посланием', 'B2B покупатели, нуждающиеся в стабильном характере Caturra'],
    },
    ar: {
      collectionLabel: 'قهوة Specialty',
      story: 'صنف Caturra بملف القيقب والشوكولاتة — عرض Special Series موثوق.',
      commercialSummary: 'رائع للمحمصين الباحثين عن توازن القيقب والشوكولاتة وتموضع specialty يومي.',
      cupProfileSummary: 'القيقب والكاكاو يحملان كوباً مدوراً ومريحاً مع خروج نظيف — متنوع عبر طرق التحضير.',
      buyerUseCases: ['إسبريسو البيت وأمزجة الفلتر', 'تناوب موسمي برسالة نكهة واضحة', 'مشترو B2B الذين يحتاجون طابع Caturra ثابتاً'],
    },
    de: {
      collectionLabel: 'Specialty Coffee',
      story:
        'Caturra von Finca La Cuchilla: Ahornsirup und Schokolade mit sauberem Finish.',
      commercialSummary:
        'Zuverlässiges Special-Series-Lot für House-Espresso mit Maple-Kakao-Balance.',
      cupProfileSummary:
        'Ahorn und Kakao tragen eine runde Tasse; Abgang klar.',
      buyerUseCases: ['House-Espresso', 'Saisonrotation', 'klarer Caturra-Charakter'],
    },
  },
  'dunamix-blend-83-50': {
    ru: {
      collectionLabel: 'Blend Series',
      story: 'Бленд в стиле базы для обжарочной, разработанный для стабильного эспрессо-сервиса с основами панела-какао и тёплыми пряностями.',
      commercialSummary: 'Краеугольный камень Blend & Mixed Series для обжарочных, нуждающихся в стабильном шоколадно-карамельном теле и тёплых пряностях.',
      cupProfileSummary: 'Основа коричневого сахара и какао с карамелизованной глубиной; корица и гвоздика добавляют деликатную пряную рамку для молочных напитков.',
      buyerUseCases: ['Высокообъёмный эспрессо и house бленды', 'Кафе, нуждающиеся в надёжном "базовом" кофе', 'Программы с приоритетом молочной гармонии и баланса'],
    },
    ar: {
      collectionLabel: 'سلسلة المزيج',
      story: 'مزيج بأسلوب قاعدة المحمصة مصمم لخدمة إسبريسو ثابتة مع أسس البانيلا والكاكاو والبهارات الدافئة.',
      commercialSummary: 'حجر الزاوية لـ Blend & Mixed Series للمحمصات التي تحتاج جسماً ثابتاً من الشوكولاتة والكراميل ودفء البهارات.',
      cupProfileSummary: 'قاعدة سكر بني وكاكاو بعمق مكرمل؛ القرفة والقرنفل يضيفان إطار بهاري لطيف للمشروبات الحليبية.',
      buyerUseCases: ['الإسبريسو عالي الحجم وأمزجة البيت', 'المقاهي التي تحتاج قهوة "قاعدة" موثوقة', 'البرامج التي تعطي الأولوية للانسجام مع الحليب والتوازن'],
    },
    de: {
      collectionLabel: 'Blend Series',
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
    ru: {
      collectionLabel: 'Commercial Series',
      story: 'Коммерческая линейка Mixed Series для высокообъёмных каналов — баланс какао и фундука для ежедневного обслуживания.',
      commercialSummary: 'Экономичный, но контролируемый по качеству вариант для обжарочных и сетей, нуждающихся в объёме и стабильном профиле.',
      cupProfileSummary: 'Молочный шоколад и фундук в мягком, сбалансированном теле — построен для масштаба без отказа от QC.',
      buyerUseCases: ['Объёмная обжарка и поставки сетей', 'House бленды и объёмный эспрессо', 'Ценочувствительные программы с базовой прослеживаемостью'],
    },
    ar: {
      collectionLabel: 'السلسلة التجارية',
      story: 'خط Mixed Series التجاري للقنوات عالية الحجم — توازن الكاكاو والبندق للخدمة اليومية.',
      commercialSummary: 'خيار اقتصادي مع ضبط الجودة للمحمصات والسلاسل التي تحتاج حجماً وملفاً ثابتاً.',
      cupProfileSummary: 'شوكولاتة الحليب والبندق ببنية ناعمة متوازنة — مبني للنطاق دون التخلي عن ضبط الجودة.',
      buyerUseCases: ['تحميص الحجم وتوريد السلاسل', 'أمزجة البيت وإسبريسو الجملة', 'البرامج الحساسة للسعر التي تتطلب أساسيات إمكانية التتبع'],
    },
    de: {
      collectionLabel: 'Commercial Series',
      story:
        'Wirtschaftliche Mixed-Commodity-Linie für hohe Volumina; Kakao und Haselnuss. Verarbeitung: Natural oder Washed (flexibel).',
      commercialSummary:
        'Ausgewogenes Profil für skalierende Betriebe im Einstiegs-Score-Band.',
      cupProfileSummary:
        'Milchschokolade und Haselnuss mit weichem, ausgewogenen Körper.',
      buyerUseCases: ['Ketten und Volumen', 'Rohbasis für Blends', 'preissensibles QC-Programm'],
    },
  },
  'espresso-crema': {
    ru: {
      collectionLabel: 'Blend Selection',
      story: 'Los Andes Espresso Crema — это премиальный эспрессо-бленд из тщательно отобранных зёрен арабики. Насыщенная крема, сбалансированная кислотность и долгое послевкусие обеспечивают исключительный эспрессо-опыт.',
      commercialSummary: 'Обжаренная розничная упаковка (500 г молотый) для полок, офисов и B2B-программ, которым нужна готовая к продаже венесуэльская specialty с чёткой историей происхождения.',
      cupProfileSummary: 'Сбалансированные фрукты, какао и карамель; среднее тело и низко-средняя кислотность — доступный для ежедневного обслуживания.',
      buyerUseCases: ['Розничные полки, деликатесы и офисные кофейные программы', 'Оптовые покупатели, добавляющие венесуэльскую упакованную линейку', 'Дегустация без закупки зелёного кофе'],
    },
    ar: {
      collectionLabel: 'Blend Selection',
      story: 'Los Andes Espresso Crema هو مزيج إسبريسو فاخر مصنوع من حبوب أرابيكا مختارة بعناية. كريما غنية وحموضة متوازنة ونهاية طويلة تقدم تجربة إسبريسو استثنائية.',
      commercialSummary: 'عبوة تجزئة محمصة (500 غ مطحون) للأرفف والمكاتب وبرامج B2B التي تحتاج specialty فنزويلية جاهزة للبيع بقصة منشأ واضحة.',
      cupProfileSummary: 'فاكهة وكاكاو وكراميل متوازنة؛ جسم متوسط وحموضة متوسطة-منخفضة — يسهل الوصول إليه للخدمة اليومية.',
      buyerUseCases: ['أرفف التجزئة والمحلات والبرامج الكافية في المكاتب', 'مشترو الجملة الذين يضيفون خط فنزويلا المعبأ', 'التذوق دون شراء البن الأخضر'],
    },
    tr: {
      collectionLabel: 'Blend Selection',
      story:
        'Los Andes Espresso Crema, dikkatle seçilmiş Arabica çekirdeklerinin harmanlanmasıyla oluşturulmuş premium bir espresso karışımıdır. Yoğun kreması, dengeli asitliği ve uzun bitişiyle mükemmel bir espresso deneyimi sunar.',
      commercialSummary:
        '500 g öğütülmüş perakende paket — mağaza, ofis ve toptan hatlar için Venezuela menşe hikâyesiyle hazır satış.',
      cupProfileSummary:
        'Meyvemsi gövde, kakao ve karamel dengesi; orta gövde, orta-düşük asidite.',
      buyerUseCases: [
        'Perakende raflar ve ofis kahve programları',
        'Paketli Venezuela hattı ekleyen toptan alımlar',
        'Yeşil çekirdek almadan origin deneyimi sunan işletmeler',
      ],
    },
    de: {
      collectionLabel: 'Blend Selection',
      story:
        'Los Andes Espresso Crema ist ein Premium-Espresso aus sorgfältig ausgewählten Arabica-Bohnen. Kräftige Crema, ausgewogene Säure und ein langer Abgang sorgen für ein hervorragendes Espresso-Erlebnis.',
      commercialSummary:
        '500 g gemahlenes Retail-Pack — für Regal, Büro und B2B mit klarer Herkunftsgeschichte.',
      cupProfileSummary:
        'Frucht, Kakao und Karamell im Gleichgewicht; mittlerer Körper, mittel-niedrige Säure.',
      buyerUseCases: [
        'Einzelhandel, Delis und Office-Kaffeeprogramme',
        'Großhandel mit verpackter Venezuela-Linie',
        'Verkostung ohne Rohkaffee-Einkauf',
      ],
    },
    fr: {
      collectionLabel: 'Blend Selection',
      story:
        'Los Andes Espresso Crema est un espresso premium composé d’Arabica soigneusement sélectionnés. Crema généreuse, acidité équilibrée et longue finale pour une expérience espresso remarquable.',
      commercialSummary:
        'Format retail moulu 500 g — rayons, bureaux et B2B avec récit d’origine vénézuélien.',
      cupProfileSummary:
        'Fruits, cacao et caramel équilibrés ; corps moyen, acidité moyenne-faible.',
      buyerUseCases: [
        'Rayons retail et programmes café bureau',
        'Grossistes ajoutant une ligne emballée Venezuela',
        'Dégustation sans achat de vert',
      ],
    },
    es: {
      collectionLabel: 'Blend Selection',
      story:
        'Los Andes Espresso Crema es un espresso premium elaborado con granos arábica cuidadosamente seleccionados. Crema intensa, acidez equilibrada y retrogusto largo para una experiencia espresso excepcional.',
      commercialSummary:
        'Pack retail molido 500 g — estanterías, oficinas y B2B con historia de origen venezolano.',
      cupProfileSummary:
        'Fruta, cacao y caramelo equilibrados; cuerpo medio, acidez media-baja.',
      buyerUseCases: [
        'Retail, delicatessen y programas de café en oficina',
        'Mayoristas que añaden línea empaquetada Venezuela',
        'Cata sin compra de verde',
      ],
    },
  },
};
