export type CoffeeSegment = 'ultra-premium' | 'special-series' | 'blend-mixed';

export interface CoffeeLot {
  slug: string;
  name: string;
  rank: number;
  score: number;
  segment: CoffeeSegment;
  producer: string;
  farm: string;
  variety: string;
  process: string;
  region: string;
  country: string;
  flavorTags: string[];
  longTastingNotes: string;
  story: string;
  commercialSummary: string;
  cupProfileSummary: string;
  buyerUseCases: string[];
  collectionLabel?: string;
  altitudeMeters?: string;
  moisturePct?: string;
  screenSize?: string;
  bagSizeKg?: string;
}

const DEFAULT_ALT = '≥ 1.630 m';
const DEFAULT_MOIST = '9,3–12,5 %';
const DEFAULT_SCREEN = 'Malla 16–18';
const DEFAULT_BAG = '60 kg';

export const coffeeLots: CoffeeLot[] = [
  {
    slug: 'geisha-91-54',
    name: 'Geisha',
    rank: 1,
    score: 91.54,
    segment: 'ultra-premium',
    producer: 'Eloína de los Ángeles Useche',
    farm: 'Estancia Aires de Campo',
    variety: 'Geisha',
    process: 'Natural',
    region: 'Mérida',
    country: 'Venezuela',
    flavorTags: ['Floral', 'Exotic', 'Champagne', 'Cocoa', 'Peach'],
    longTastingNotes:
      'Thailand basil, amaretto, cognac, champagne, sweet peach, minty green spices, cocoa, caramel, exotic florals',
    story:
      'The highest scoring lot in the collection: a natural Geisha from Estancia Aires de Campo with layered aromatics and champagne-like elegance.',
    commercialSummary:
      'Flagship ultra-premium Geisha for roasters seeking 90+ distinction, exotic cup structure, and transparent farm traceability.',
    cupProfileSummary:
      'Opens with florals and exotic spice, deepens into amaretto and sparkling wine notes, finishing with sweet peach and refined cocoa.',
    buyerUseCases: [
      'Limited flagship releases and competition-calibre menus',
      'High-end filter and espresso programmes',
      'Collections showcasing top Venezuelan Geisha',
    ],
    collectionLabel: 'Premium Micro Lot',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'geisha-el-recreo-91-03',
    name: 'Geisha',
    rank: 2,
    score: 91.03,
    segment: 'ultra-premium',
    producer: 'Hacienda El Recreo',
    farm: 'Hacienda El Recreo',
    variety: 'Geisha',
    process: 'Experimental',
    region: 'Mérida',
    country: 'Venezuela',
    flavorTags: ['Jasmine', 'Berries', 'Kiwi', 'Butter', 'Chocolate'],
    longTastingNotes:
      'Forest berries, blackberry, kiwi, jasmine and white flowers, buttery body, balanced with bitter chocolate',
    story:
      'An experimental Geisha from Hacienda El Recreo with a sweet, fruit-forward cup and elegant floral lift.',
    commercialSummary:
      'Ultra-premium Geisha for buyers who want experimental processing with dessert-like sweetness and refined florals.',
    cupProfileSummary:
      'Berry and kiwi brightness meets jasmine elegance; a silky, buttery body anchors the cup before a clean chocolate finish.',
    buyerUseCases: [
      'Showcase experimental Geisha on filter and selective espresso',
      'Seasonal menus highlighting fruit-syrup sweetness',
      'Premium wholesale clients seeking 91+ scores',
    ],
    collectionLabel: 'Premium Micro Lot',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'tabi-90-38',
    name: 'Tabi',
    rank: 3,
    score: 90.38,
    segment: 'ultra-premium',
    producer: 'Roney Antonio Durán Mejía',
    farm: 'The Roros Coffee',
    variety: 'Tabi',
    process: 'Washed',
    region: 'Trujillo',
    country: 'Venezuela',
    flavorTags: ['Dulce de leche', 'Cocoa', 'Coconut', 'Sweet'],
    longTastingNotes:
      'Cachapa and dulce de leche, sweet cocoa, caramelized coconut, soft creamy body, dessert-like sweetness',
    story:
      'A washed Tabi lot celebrated for gourmet sweetness — Venezuelan comfort notes translated into a specialty cup.',
    commercialSummary:
      'High-scoring washed coffee with approachable dessert character for roasters balancing accessibility and prestige.',
    cupProfileSummary:
      'Sweet cocoa and caramelized coconut over a soft body — a “gourmet dessert” profile that stays clean and repeatable.',
    buyerUseCases: [
      'Espresso and milk drinks needing reliable sweetness',
      'Wholesale lines balancing approachability with 90+ credibility',
      'Batch brew and filter with clarity and body',
    ],
    collectionLabel: 'Premium Micro Lot',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'otra-89-83',
    name: 'Experimental Lot',
    rank: 4,
    score: 89.83,
    segment: 'ultra-premium',
    producer: 'Jenny T. Escalona Rodríguez and Alberto Gil',
    farm: 'Don Jesús',
    variety: 'Otra',
    process: 'Experimental',
    region: 'Lara',
    country: 'Venezuela',
    flavorTags: ['Bergamot', 'Black tea', 'Citrus', 'Floral'],
    longTastingNotes:
      'Bergamot, black tea, citrus, caramel, jasmine, peach, elegant sweet structure',
    story:
      'An experimental ultra-premium lot combining tea-like elegance with floral lift and sweet citrus complexity.',
    commercialSummary:
      'For roasters who want a conversation-starting experimental lot with balance and layered aromatics.',
    cupProfileSummary:
      'Tea-like structure with citrus and florals — complex, elegant, and deliberately non-generic on the cupping table.',
    buyerUseCases: [
      'Adventurous seasonal menus',
      'Filter-forward cafés and cupping-led wholesale',
      'Experimental processing with balance',
    ],
    collectionLabel: 'Premium Micro Lot',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'villanueva-89-05',
    name: 'Villanueva',
    rank: 5,
    score: 89.05,
    segment: 'ultra-premium',
    producer: 'Andrés Román García',
    farm: 'Santa María',
    variety: 'Villanueva',
    process: 'Honey',
    region: 'Trujillo',
    country: 'Venezuela',
    flavorTags: ['Brown sugar', 'Stone fruit', 'Cedar', 'Spice'],
    longTastingNotes:
      'Buttery cookie, brown sugar, apricot, mandarin blossom, cedar, brown spices, cacao nibs, citrus',
    story:
      'Honey-processed micro lot balancing ripe stone fruit with caramelised depth and noble spice tones.',
    commercialSummary:
      'Ultra-premium honey profile for seasonal releases and roasters seeking sweetness with layered fruit and spice.',
    cupProfileSummary:
      'Honey brings stone fruit and brown sugar into dialogue with cacao and cedar — generous, versatile across brew methods.',
    buyerUseCases: [
      'Honey showcases and seasonal single origins',
      'Espresso or filter menus highlighting body and fruit',
      'Rotating featured lots in premium cafés',
    ],
    collectionLabel: 'Premium Micro Lot',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'castillo-naranjal-88-83',
    name: 'Castillo / Naranjal',
    rank: 6,
    score: 88.83,
    segment: 'ultra-premium',
    producer: 'Javier Fernández / Ascesio Cruz',
    farm: 'Finca Bella Vista',
    variety: 'Castillo / Naranjal',
    process: 'Experimental',
    region: 'Barinas',
    country: 'Venezuela',
    flavorTags: ['Dark chocolate', 'Cherry', 'Hazelnut', 'Creamy'],
    longTastingNotes:
      'Cherry, hazelnut, baker’s chocolate, brown spice, cocoa, caramelized coconut, creamy body',
    story:
      'Experimental Castillo with a chocolate-driven cup, nutty sweetness, and creamy structure — still in the 84+ ultra-premium band.',
    commercialSummary:
      'For buyers wanting depth and chocolate-led complexity within a top-scoring Castillo expression.',
    cupProfileSummary:
      'Chocolate-led and creamy, with cherry and hazelnut supporting a full, satisfying structure.',
    buyerUseCases: [
      'Richer espresso singles and components',
      'Menus prioritising body and cocoa-driven character',
      'Bridging classic comfort and specialty detail',
    ],
    collectionLabel: 'Premium Micro Lot',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'monteclaro-88-75',
    name: 'Monteclaro',
    rank: 7,
    score: 88.75,
    segment: 'ultra-premium',
    producer: 'María Guerrero de Hernández',
    farm: 'La Clavellina',
    variety: 'Monteclaro',
    process: 'Washed',
    region: 'Táchira',
    country: 'Venezuela',
    flavorTags: ['Bergamot', 'Brown sugar', 'Red fruit', 'Herbal'],
    longTastingNotes:
      'Bergamot, brown sugar, red fruits, milk chocolate, subtle herbal notes, clean citric brightness',
    story:
      'Washed Monteclaro from María Guerrero — clean structure with bergamot, brown sugar, and delicate herbal nuance.',
    commercialSummary:
      'Prestige ultra-premium washed lot for buyers who value balance, clarity, and approachable complexity.',
    cupProfileSummary:
      'Clean washed architecture: citrus and red fruit lift the cup; chocolate and caramel hold the centre.',
    buyerUseCases: [
      'Discerning wholesale programmes needing balance',
      'Premium filter and espresso with broad appeal',
      'Buyers who want distinction without polarising extremes',
    ],
    collectionLabel: 'Premium Micro Lot',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'inia-01-88-73',
    name: 'Inia 01',
    rank: 8,
    score: 88.73,
    segment: 'ultra-premium',
    producer: 'Israel Schwarz',
    farm: 'San Antonio',
    variety: 'Inia 01',
    process: 'Washed',
    region: 'Yaracuy',
    country: 'Venezuela',
    flavorTags: ['Wild berries', 'Spice', 'Cherry', 'Sweet'],
    longTastingNotes:
      'Wild berries, brown sugar, caramel, cardamom, cherry, soft body, sweet dulce de leche',
    story:
      'Washed ultra-premium lot with sweet berry expression, spice detail, and a soft approachable body.',
    commercialSummary:
      'Versatile characterful single origin for fruit-and-spice storytelling without losing balance.',
    cupProfileSummary:
      'Berry-forward with an herbal-spice dimension — sweet, characterful, soft in body.',
    buyerUseCases: [
      'Single-origin rotations with fruit and spice narratives',
      'Filter and light espresso where balance is key',
      'Wholesale menus needing versatile distinction',
    ],
    collectionLabel: 'Premium Micro Lot',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'bourbon-88-52',
    name: 'Bourbon',
    rank: 9,
    score: 88.52,
    segment: 'ultra-premium',
    producer: 'Ana Karina Rodríguez',
    farm: 'Las Marías',
    variety: 'Bourbon',
    process: 'Natural',
    region: 'Lara',
    country: 'Venezuela',
    flavorTags: ['Forest fruits', 'Cocoa', 'Floral', 'Caramel'],
    longTastingNotes:
      'Forest fruits, fermented cherry, dark chocolate, cacao nibs, caramel, elegant floral finish',
    story:
      'Natural Bourbon (separate lot from Santa Marta) with expressive fruit, darker chocolate tones, and refined florals.',
    commercialSummary:
      'Ultra-premium natural Bourbon for fruit-forward programmes that still demand sophistication.',
    cupProfileSummary:
      'Natural intensity with polish: forest fruit and cherry lift the cup; cocoa grounds it; florals finish cleanly.',
    buyerUseCases: [
      'Natural-forward and limited releases',
      'Roasters showcasing fruit with a refined finish',
      'Differentiation through sophisticated natural profile',
    ],
    collectionLabel: 'Premium Micro Lot',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'castillo-las-mesas-84-50',
    name: 'Castillo',
    rank: 10,
    score: 84.5,
    segment: 'special-series',
    producer: 'Finca Las Mesas',
    farm: 'Finca Las Mesas',
    variety: 'Castillo',
    process: 'Experimental',
    region: 'Mérida',
    country: 'Venezuela',
    flavorTags: ['Honey', 'Chocolate', 'Fig', 'Macadamia'],
    longTastingNotes:
      'Mandarina, honey, chocolate, fig, raisin, macadamia, silky sweetness',
    story:
      'Special Series Castillo from Finca Las Mesas — sweet, silky, with dried fruit and nut complexity.',
    commercialSummary:
      'Ideal for roasters needing a strong Special Series Castillo with dessert-like sweetness and body.',
    cupProfileSummary:
      'Honey and chocolate meet fig and macadamia in a silky, lingering sweet structure.',
    buyerUseCases: [
      'Espresso and milk-based menus',
      'Wholesale lines in the 82–84.5 SCA band',
      'Roastery programmes needing identifiable Castillo character',
    ],
    collectionLabel: 'Special Series',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'catuai-los-cedros-84',
    name: 'Catuaí',
    rank: 11,
    score: 84.0,
    segment: 'special-series',
    producer: 'Finca Los Cedros',
    farm: 'Finca Los Cedros',
    variety: 'Catuaí',
    process: 'Washed',
    region: 'Mérida',
    country: 'Venezuela',
    flavorTags: ['Vanilla', 'Silky', 'Citric'],
    longTastingNotes:
      'Vanilla, silky body, refreshing citric acidity, clean sweet structure',
    story:
      'Washed Catuaí with vanilla sweetness, silky mouthfeel, and lively citric acidity.',
    commercialSummary:
      'Special Series Catuaí for balanced espresso and filter with crowd-pleasing clarity.',
    cupProfileSummary:
      'Vanilla-led sweetness with a silky body and crisp citric lift — approachable yet specialty-credible.',
    buyerUseCases: [
      'Daily espresso and batch brew',
      'Cafés needing reliable clarity and sweetness',
      'Wholesale buyers in the Special Series band',
    ],
    collectionLabel: 'Special Series',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'caturra-la-cuchilla-83-75',
    name: 'Caturra',
    rank: 12,
    score: 83.75,
    segment: 'special-series',
    producer: 'Finca La Cuchilla',
    farm: 'Finca La Cuchilla',
    variety: 'Caturra',
    process: 'Washed',
    region: 'Táchira',
    country: 'Venezuela',
    flavorTags: ['Maple', 'Chocolate', 'Balanced'],
    longTastingNotes:
      'Maple syrup, chocolate, balanced sweetness, clean finish',
    story:
      'Caturra lot with maple and chocolate profile — a dependable Special Series offering.',
    commercialSummary:
      'Great for roasters seeking maple-chocolate balance and everyday specialty positioning.',
    cupProfileSummary:
      'Maple and cocoa carry a rounded, comforting cup with a clean exit — versatile across brew methods.',
    buyerUseCases: [
      'House espresso and filter blends',
      'Seasonal rotation with clear flavour messaging',
      'B2B buyers needing consistent Caturra character',
    ],
    collectionLabel: 'Special Series',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'colombia-27-la-ondonada-83-25',
    name: 'Colombia 27',
    rank: 13,
    score: 83.25,
    segment: 'special-series',
    producer: 'Finca La Ondonada',
    farm: 'Finca La Ondonada',
    variety: 'Colombia 27',
    process: 'Washed',
    region: 'Táchira',
    country: 'Venezuela',
    flavorTags: ['White chocolate', 'Orange', 'Sweet'],
    longTastingNotes:
      'White chocolate, orange, sweet citrus, creamy mouthfeel',
    story:
      'Colombia 27 from La Ondonada — white chocolate and orange in a sweet, approachable cup.',
    commercialSummary:
      'Special Series lot for menus that want citrus and confection notes without harsh acidity.',
    cupProfileSummary:
      'White chocolate sweetness meets orange zest in a soft, creamy structure.',
    buyerUseCases: [
      'Milk-based espresso programmes',
      'Filter lines with confection-led storytelling',
      'Wholesale buyers seeking approachable 83+ profiles',
    ],
    collectionLabel: 'Special Series',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'bourbon-santa-marta-83',
    name: 'Bourbon',
    rank: 14,
    score: 83.0,
    segment: 'special-series',
    producer: 'Finca Santa Marta',
    farm: 'Finca Santa Marta',
    variety: 'Bourbon',
    process: 'Washed',
    region: 'Mérida',
    country: 'Venezuela',
    flavorTags: ['Almond', 'Peach', 'Cinnamon', 'Citric'],
    longTastingNotes:
      'Roasted almond, peach, cinnamon, intense citric acidity, classic premium coffee experience',
    story:
      'Separate washed Bourbon lot from Finca Santa Marta (distinct from the 88.52 natural Las Marías lot).',
    commercialSummary:
      'Special Series Bourbon for classic washed profile buyers — stone fruit, spice, and bright citric structure.',
    cupProfileSummary:
      'Almond and peach lead; cinnamon and citric acidity deliver a structured, classic premium cup.',
    buyerUseCases: [
      'Espresso bars wanting a clean, bright washed Bourbon',
      'Filter programmes with stone-fruit and spice messaging',
      'Buyers who need the 83-point Santa Marta lot explicitly',
    ],
    collectionLabel: 'Special Series',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'dunamix-blend-83-50',
    name: 'Dunamix Special Blend',
    rank: 15,
    score: 83.5,
    segment: 'blend-mixed',
    producer: 'Multinacional Dunamix, C.A.',
    farm: 'Blend — Venezuela',
    variety: 'Blend',
    process: 'Natural / Washed',
    region: 'Venezuela',
    country: 'Venezuela',
    flavorTags: ['Panela', 'Cocoa', 'Caramel', 'Spice'],
    longTastingNotes:
      'Panela, cocoa, caramel, cinnamon, clove, brown spices, soft body — ideal for espresso-based drinks',
    story:
      'Roastery-base style blend designed for consistent espresso service with panela-cocoa foundations and warm spice.',
    commercialSummary:
      'Blend & Mixed Series cornerstone for roasteries needing stable chocolate-caramel body and spice warmth.',
    cupProfileSummary:
      'Brown-sugar and cocoa base with caramelised depth; cinnamon and clove add a gentle spice frame for milk drinks.',
    buyerUseCases: [
      'High-volume espresso and house blends',
      'Cafés needing a dependable “base” coffee',
      'Programmes prioritising milk harmony and balance',
    ],
    collectionLabel: 'Roastery Base',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'mixed-series-82-50',
    name: 'Mixed Series',
    rank: 16,
    score: 82.5,
    segment: 'blend-mixed',
    producer: 'Multinacional Dunamix, C.A.',
    farm: 'Mixed origins — Venezuela',
    variety: 'Mixed',
    process: 'Natural / Washed',
    region: 'Venezuela',
    country: 'Venezuela',
    flavorTags: ['Cocoa', 'Hazelnut', 'Balanced'],
    longTastingNotes:
      'Cocoa and hazelnut profile, balanced body, economical commodity-grade option within quality controls',
    story:
      'Mixed Series commodity line for high-volume channels — cocoa and hazelnut balance for everyday service.',
    commercialSummary:
      'Economical yet quality-controlled option for roasteries and chains needing volume and consistent profile.',
    cupProfileSummary:
      'Milk-chocolate and hazelnut structure with a soft, balanced body — built for scale without abandoning QC.',
    buyerUseCases: [
      'Volume roasting and chain supply',
      'House blends and bulk espresso',
      'Price-sensitive programmes that still require traceability basics',
    ],
    collectionLabel: 'Mixed Series',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
];

export function getCoffeeLotBySlug(slug: string): CoffeeLot | undefined {
  return coffeeLots.find((l) => l.slug === slug);
}

export function getRelatedLots(currentSlug: string, limit = 3): CoffeeLot[] {
  return [...coffeeLots]
    .filter((l) => l.slug !== currentSlug)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function getFeaturedLotForHome(): CoffeeLot {
  const byRank = coffeeLots.find((l) => l.rank === 1);
  if (byRank) return byRank;
  return [...coffeeLots].sort((a, b) => b.score - a.score)[0];
}

export function getLotsBySegment(segment: CoffeeSegment): CoffeeLot[] {
  return coffeeLots.filter((l) => l.segment === segment).sort((a, b) => b.score - a.score);
}
