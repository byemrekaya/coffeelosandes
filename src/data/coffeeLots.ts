import type { TastingStructuredRow } from './tastingStructured';
import { tastingStructuredBySlug } from './tastingStructured';

export type CoffeeSegment =
  | 'competition-lots'
  | 'premium-microlot'
  | 'specialty-series'
  | 'barista-blend'
  | 'commercial'
  | 'retail';

export interface CoffeeLot {
  slug: string;
  name: string;
  rank: number;
  score: number;
  scoreDisplay?: string;
  segment: CoffeeSegment;
  producer: string;
  farm: string;
  variety: string;
  process: string;
  fermentation?: string;
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
  farmCategory?: string;
  farmMapQuery?: string;
  tastingStructured?: TastingStructuredRow[];
}

const DEFAULT_ALT = '≥ 1.630 m';
const DEFAULT_MOIST = '9,3–12,5 %';
const DEFAULT_SCREEN = 'Malla 16–18';
const DEFAULT_BAG = '60 kg';

export function lotScoreLine(lot: Pick<CoffeeLot, 'score' | 'scoreDisplay'>): string {
  return lot.scoreDisplay ?? lot.score.toFixed(2);
}

const LOT_IMAGE_FILES: Record<string, string> = {
  'geisha-91-54': 'geisha-coffee-beans.webp',
  'geisha-el-recreo-91-03': 'geisha-specialty-coffee.webp',
  'tabi-90-38': 'tabi-coffee-beans.webp',
  'otra-89-83': 'otra-coffee-beans.webp',
  'villanueva-89-05': 'villanueva-coffee-beans.webp',
  'castillo-naranjal-88-83': 'castillo-coffee-beans.webp',
  'monteclaro-88-75': 'monteclaro-coffee-beans.webp',
  'inia-01-88-73': 'inia-coffee-beans.webp',
  'bourbon-88-52': 'bourbon-coffee-beans.webp',
};

const LOT_IMAGE_ALTS: Record<string, string> = {
  'geisha-91-54': 'Premium Geisha coffee beans from Venezuela',
  'geisha-el-recreo-91-03': 'Geisha specialty coffee beans from Venezuela',
  'tabi-90-38': 'Tabi coffee beans for specialty roasting',
  'otra-89-83': 'Otra coffee beans from Venezuelan highlands',
  'villanueva-89-05': 'Villanueva coffee beans for wholesale supply',
  'castillo-naranjal-88-83': 'Castillo specialty coffee beans wholesale',
  'monteclaro-88-75': 'Monteclaro coffee beans from Venezuela',
  'inia-01-88-73': 'Inia coffee beans for professional roasting',
  'bourbon-88-52': 'Bourbon coffee beans from Venezuela',
};

export function getLotImageSrc(slug: string): string {
  const file = LOT_IMAGE_FILES[slug];
  if (!file) return '/coffee-beans-closeup.webp';
  return encodeURI(`/${file}`);
}

export function getLotImageAlt(slug: string, lotName: string): string {
  return LOT_IMAGE_ALTS[slug] ?? `${lotName} coffee beans from Venezuela`;
}

const coffeeLotsRaw: Array<Omit<CoffeeLot, 'tastingStructured'>> = [
  {
    slug: 'geisha-91-54',
    name: 'Geisha',
    rank: 1,
    score: 91.54,
    segment: 'competition-lots',
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
    collectionLabel: 'Competition Lot',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
    farmCategory: 'Selektierte Hochlandfarmen',
    farmMapQuery: 'Estancia Aires de Campo, Mérida, Venezuela',
  },
  {
    slug: 'geisha-el-recreo-91-03',
    name: 'Geisha',
    rank: 2,
    score: 91.03,
    segment: 'competition-lots',
    producer: 'Hacienda El Recreo',
    farm: 'Hacienda El Recreo',
    variety: 'Geisha',
    process: 'Natural',
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
    collectionLabel: 'Competition Lot',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
    farmCategory: 'Selektierte Hochlandfarmen',
    farmMapQuery: 'Hacienda El Recreo, Mérida, Venezuela',
  },
  {
    slug: 'tabi-90-38',
    name: 'Tabi',
    rank: 3,
    score: 90.38,
    segment: 'competition-lots',
    producer: 'Roney Antonio Durán Mejía',
    farm: 'The Roros Coffee',
    variety: 'Tabi',
    process: 'Washed / Natural',
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
    collectionLabel: 'Competition Lot',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
    farmCategory: 'Selektierte Parzellen',
    farmMapQuery: 'The Roros Coffee, Trujillo, Venezuela',
  },
  {
    slug: 'otra-89-83',
    name: 'Experimental Lot',
    rank: 4,
    score: 89.83,
    segment: 'premium-microlot',
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
    farmCategory: 'Selektierte Mikroparzellen',
    farmMapQuery: 'Finca Don Jesús, Lara, Venezuela',
  },
  {
    slug: 'villanueva-89-05',
    name: 'Villanueva',
    rank: 5,
    score: 89.05,
    segment: 'premium-microlot',
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
    farmCategory: 'Lokale Kleinproduzenten',
    farmMapQuery: 'Finca Santa María, Trujillo, Venezuela',
  },
  {
    slug: 'castillo-naranjal-88-83',
    name: 'Castillo',
    rank: 6,
    score: 88.83,
    segment: 'premium-microlot',
    producer: 'Javier Fernández / Ascesio Cruz',
    farm: 'Finca Bella Vista',
    variety: 'Castillo',
    process: 'Natural / Honey',
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
    farmCategory: 'Regionale Farmen',
    farmMapQuery: 'Finca Bella Vista, Barinas, Venezuela',
  },
  {
    slug: 'monteclaro-88-75',
    name: 'Monteclaro',
    rank: 7,
    score: 88.75,
    segment: 'premium-microlot',
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
    farmCategory: 'Regionale Farmen',
    farmMapQuery: 'Táchira, Venezuela coffee highlands',
  },
  {
    slug: 'inia-01-88-73',
    name: 'INIA 01',
    rank: 8,
    score: 88.73,
    segment: 'premium-microlot',
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
    farmCategory: 'Regionale Farmen',
    farmMapQuery: 'Yaracuy, Venezuela coffee farms',
  },
  {
    slug: 'bourbon-88-52',
    name: 'Bourbon',
    rank: 9,
    score: 88.52,
    segment: 'premium-microlot',
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
    farmCategory: 'Regionale Farmen',
    farmMapQuery: 'Lara, Venezuela coffee highlands',
  },
  {
    slug: 'castillo-las-mesas-84-50',
    name: 'Castillo',
    rank: 10,
    score: 84.5,
    segment: 'specialty-series',
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
    collectionLabel: 'Specialty Coffee',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
    farmCategory: 'Selektierte Hochlandfarmen',
    farmMapQuery: 'Finca Las Mesas, Mérida, Venezuela',
  },
  {
    slug: 'catuai-los-cedros-84',
    name: 'Catuaí',
    rank: 11,
    score: 84.0,
    segment: 'specialty-series',
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
    collectionLabel: 'Specialty Coffee',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
    farmCategory: 'Selektierte Hochlandfarmen',
    farmMapQuery: 'Finca Los Cedros, Mérida, Venezuela',
  },
  {
    slug: 'caturra-la-cuchilla-83-75',
    name: 'Caturra',
    rank: 12,
    score: 83.75,
    segment: 'specialty-series',
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
    collectionLabel: 'Specialty Coffee',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
    farmCategory: 'Regionale Farmen',
    farmMapQuery: 'Finca La Cuchilla, Táchira, Venezuela',
  },
  {
    slug: 'dunamix-blend-83-50',
    name: 'Barista Blend',
    rank: 13,
    score: 82.5,
    segment: 'barista-blend',
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
    collectionLabel: 'Blend Series',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
  {
    slug: 'mixed-series-82-50',
    name: 'Arabica Mixed',
    rank: 14,
    score: 80,
    scoreDisplay: '78–82',
    segment: 'commercial',
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
    collectionLabel: 'Commercial Series',
    altitudeMeters: DEFAULT_ALT,
    moisturePct: DEFAULT_MOIST,
    screenSize: DEFAULT_SCREEN,
    bagSizeKg: DEFAULT_BAG,
  },
];

export const coffeeLots: CoffeeLot[] = coffeeLotsRaw.map((lot) => ({
  ...lot,
  tastingStructured: tastingStructuredBySlug[lot.slug],
}));

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
