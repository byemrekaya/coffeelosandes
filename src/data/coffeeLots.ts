/**
 * Premium B2B specialty coffee lots — wholesale presentation dataset.
 */

export interface CoffeeLot {
  slug: string;
  name: string;
  rank: number;
  score: number;
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
  /** Short editorial line on sensory + commercial language */
  cupProfileSummary: string;
  /** Bullet points for wholesale buyers */
  buyerUseCases: string[];
  collectionLabel?: string;
}

export const coffeeLots: CoffeeLot[] = [
  {
    slug: 'geisha-91-54',
    name: 'Geisha',
    rank: 1,
    score: 91.54,
    producer: 'Eloína de los Ángeles Useche',
    farm: 'Estancia Aires de Campo',
    variety: 'Geisha',
    process: 'Natural',
    region: 'Mérida',
    country: 'Venezuela',
    flavorTags: ['Floral', 'Exotic', 'Peach', 'Champagne-like acidity', 'Cocoa', 'Caramel'],
    longTastingNotes:
      'Thailand basil, almond, amaretto, winey, cocoa, cacao nibs, caramel, confectionery, champagne, chocolate, plum, fruit cocktail, cognac, sweet, peach, minty green spices, exotic, floral',
    story:
      'This is the highest scoring coffee in the 2025 winning lots collection. Produced in Mérida at Estancia Aires de Campo by Eloína de los Ángeles Useche, this Geisha stands out with its layered aromatic complexity, floral elegance, and expressive natural processing profile.',
    commercialSummary:
      'Ideal as a premium single origin release for specialty roasters looking for floral complexity, high cup score, and a distinctive exotic profile.',
    cupProfileSummary:
      'The cup reads as intensely layered: florals lift first, followed by stone fruit and champagne-like acidity, then cocoa and caramel that anchor the finish. A lot that speaks clearly to buyers who prize distinction over volume.',
    buyerUseCases: [
      'Flagship single-origin and limited seasonal releases',
      'High-end filter and espresso programmes seeking floral complexity',
      'Roasters positioning a top-scoring Venezuelan Geisha on the menu',
    ],
    collectionLabel: '2025 Winning Lots',
  },
  {
    slug: 'tabi-90-38',
    name: 'Tabi',
    rank: 3,
    score: 90.38,
    producer: 'Roney Antonio Durán Mejía',
    farm: 'The Roros Coffee',
    variety: 'Tabi',
    process: 'Washed',
    region: 'Trujillo',
    country: 'Venezuela',
    flavorTags: ['Caramel', 'Cocoa', 'White chocolate', 'Sweet', 'Creamy'],
    longTastingNotes:
      'Sweet cocoa, cachapa, sugar cane, caramel, coffee caramel, white chocolate, chocolate, cocoa, caramelized coconut, cosette, soft body, sweet, dulce de leche',
    story:
      'A sweet and clean washed Tabi lot from Trujillo with a creamy and comforting cup profile. This coffee is commercially attractive thanks to its accessible but premium sensory profile.',
    commercialSummary:
      'Excellent for roasters seeking a sweet, approachable, high-quality washed coffee with chocolate and caramel depth.',
    cupProfileSummary:
      'Comfort-led and clean: cocoa and white chocolate carry through a creamy body, with caramelised sweetness that stays approachable without sacrificing specialty credibility.',
    buyerUseCases: [
      'Daily espresso and milk-based menus needing reliable sweetness',
      'Wholesale programmes that balance accessibility with high cup quality',
      'Filter and batch brew lines where clarity and body matter',
    ],
    collectionLabel: '2025 Winning Lots',
  },
  {
    slug: 'otra-89-83',
    name: 'Experimental Lot',
    rank: 5,
    score: 89.83,
    producer: 'Jenny T. Escalona Rodríguez and Alberto Gil',
    farm: 'Don Jesús',
    variety: 'Otra',
    process: 'Experimental',
    region: 'Lara',
    country: 'Venezuela',
    flavorTags: ['Bergamot', 'Black tea', 'Citrus', 'Caramel', 'Floral'],
    longTastingNotes:
      'Almond, bergamot, black tea, sugar cane, caramel, citrus, complex, elegant, sweet, dulce de leche, peach, spiced, floral, jasmine flower',
    story:
      'An experimental lot with a refined aromatic structure that combines tea-like elegance, floral lift, and sweet citrus complexity.',
    commercialSummary:
      'A distinctive option for roasters who want a more adventurous lot with elegant acidity and layered aromatics.',
    cupProfileSummary:
      'Tea-like structure meets citrus and florals: elegant, complex, and deliberately non-generic — suited to buyers who want a conversation-starting lot on the cupping table.',
    buyerUseCases: [
      'Specialty roasters building adventurous or seasonal menus',
      'Filter-forward cafés and cupping-focused wholesale clients',
      'Programmes that highlight experimental processing with balance',
    ],
    collectionLabel: '2025 Winning Lots',
  },
  {
    slug: 'villanueva-89-05',
    name: 'Villanueva',
    rank: 6,
    score: 89.05,
    producer: 'Andrés Román García',
    farm: 'Santa María',
    variety: 'Villanueva',
    process: 'Honey',
    region: 'Trujillo',
    country: 'Venezuela',
    flavorTags: ['Apricot', 'Caramel', 'Brown sugar', 'Peach', 'Cacao nibs'],
    longTastingNotes:
      'Apricot, toasted almond, sherbet, arequipe, brown sugar, brown spices, cacao nibs, caramel, cedar, citrus, sweet, peach, spices, floral, mandarin blossom, stone fruits, buttery cookie',
    story:
      'A honey processed coffee balancing ripe stone fruit sweetness with caramelized depth and layered spice.',
    commercialSummary:
      'A strong choice for seasonal offerings and roasters looking for sweetness, body, and layered fruit character.',
    cupProfileSummary:
      'Honey processing brings ripe stone fruit and brown sugar into dialogue with cacao and spice — a cup that feels generous on the palate and versatile across brew methods.',
    buyerUseCases: [
      'Seasonal single-origin and honey-profile showcases',
      'Roasters seeking sweetness, body, and layered fruit for espresso or filter',
      'Premium café menus with rotating featured lots',
    ],
    collectionLabel: '2025 Winning Lots',
  },
  {
    slug: 'castillo-naranjal-88-83',
    name: 'Castillo / Naranjal',
    rank: 7,
    score: 88.83,
    producer: 'Javier Fernández / Ascesio Cruz',
    farm: 'Finca Bella Vista',
    variety: 'Castillo / Naranjal',
    process: 'Experimental',
    region: 'Barinas',
    country: 'Venezuela',
    flavorTags: ['Dark chocolate', 'Cherry', 'Caramel', 'Hazelnut', 'Creamy'],
    longTastingNotes:
      'Fruity, almond, hazelnut, bakers chocolate, brown spice, cocoa, cacao nibs, sugar cane, caramel, cherry, caramelized coconut, creamy body, sweet, dulce de leche',
    story:
      'An experimental profile with a richer and more chocolate-driven cup, supported by nutty sweetness and creamy body.',
    commercialSummary:
      'Suitable for roasters seeking a richer profile that still carries specialty complexity.',
    cupProfileSummary:
      'Chocolate-led and creamy, with cherry and hazelnut supporting a full, satisfying structure — built for buyers who want depth without blunt heaviness.',
    buyerUseCases: [
      'Espresso blends and single origins with a richer cup signature',
      'Wholesale clients prioritising body and chocolate-driven menus',
      'Programmes bridging classic comfort and specialty detail',
    ],
    collectionLabel: '2025 Winning Lots',
  },
  {
    slug: 'monteclaro-88-75',
    name: 'Monteclaro',
    rank: 8,
    score: 88.75,
    producer: 'María Guerrero de Hernández',
    farm: 'La Clavellina',
    variety: 'Monteclaro',
    process: 'Washed',
    region: 'Táchira',
    country: 'Venezuela',
    flavorTags: ['Red fruits', 'Caramel', 'Milk chocolate', 'Citrus', 'Herbal nuance'],
    longTastingNotes:
      'Fruity, toasted almond, bergamot, brown spice, brown sugar, cocoa, cacao nibs, sugar cane, red fruits, caramel, caramelized, chocolate, milk chocolate, citric, sweet, peach, subtle herbal notes',
    story:
      'A washed coffee with a clean structure, fruit brightness, and a classic chocolate-caramel foundation.',
    commercialSummary:
      'Great for buyers who want balance, clarity, and approachable complexity in a washed profile.',
    cupProfileSummary:
      'Clean washed architecture: red fruit and citrus brighten the cup, while milk chocolate and caramel hold the centre — a dependable specialty profile for discerning wholesale programmes.',
    buyerUseCases: [
      'Roasters and distributors needing balance and clarity across volumes',
      'Premium café filter and espresso offerings with broad appeal',
      'Buyers who want approachable complexity without polarising extremes',
    ],
    collectionLabel: '2025 Winning Lots',
  },
  {
    slug: 'inia-01-88-73',
    name: 'Inia 01',
    rank: 9,
    score: 88.73,
    producer: 'Israel Schwarz',
    farm: 'San Antonio',
    variety: 'Inia 01',
    process: 'Washed',
    region: 'Yaracuy',
    country: 'Venezuela',
    flavorTags: ['Wild berries', 'Caramel', 'Spice', 'Cherry', 'Sweet'],
    longTastingNotes:
      'Fruity, wild berries, brown sugar, caramel, cardamom, caraway, fresh cherry, cherries, soft body, sweet, dulce de leche, peach, spiced, tarragon, exotic, herbal, floral, strawberry-like fruit',
    story:
      'A washed lot with sweet berry expression, spice detail, and a soft approachable body.',
    commercialSummary:
      'A versatile and characterful single origin for roasters wanting fruit and spice without losing balance.',
    cupProfileSummary:
      'Berry-forward with an herbal-spice dimension: sweet, characterful, and soft in body — ideal when you need distinction without aggression.',
    buyerUseCases: [
      'Single-origin rotations with fruit and spice storytelling',
      'Filter programmes and light espresso where balance is non-negotiable',
      'Wholesale buyers building versatile, character-led menus',
    ],
    collectionLabel: '2025 Winning Lots',
  },
  {
    slug: 'bourbon-88-52',
    name: 'Bourbon',
    rank: 10,
    score: 88.52,
    producer: 'Ana Karina Rodríguez',
    farm: 'Las Marías',
    variety: 'Bourbon',
    process: 'Natural',
    region: 'Lara',
    country: 'Venezuela',
    flavorTags: ['Forest fruits', 'Fermented cherry', 'Caramel', 'Cocoa nibs', 'Floral'],
    longTastingNotes:
      'Fruity, cane sugar, forest fruits, dark chocolate, cacao nibs, caramel, fermented cherries, complex, sweet, elegant, fermented, floral',
    story:
      'A natural Bourbon with expressive fruit intensity, darker chocolate tones, and a refined floral finish.',
    commercialSummary:
      'Well suited for roasters looking for a fruit-forward natural lot with a sophisticated profile.',
    cupProfileSummary:
      'Natural intensity meets polish: forest fruit and fermented cherry lift the cup, while cocoa nibs and dark chocolate ground it — finishing with floral elegance rather than raw funk.',
    buyerUseCases: [
      'Natural-forward menus and limited releases',
      'Roasters showcasing fruit intensity with a refined finish',
      'Specialty programmes where a sophisticated natural profile differentiates the offer',
    ],
    collectionLabel: '2025 Winning Lots',
  },
];

export function getCoffeeLotBySlug(slug: string): CoffeeLot | undefined {
  return coffeeLots.find((l) => l.slug === slug);
}

/** Related lots: exclude current, prefer highest-scoring others, stable order */
export function getRelatedLots(currentSlug: string, limit = 3): CoffeeLot[] {
  return [...coffeeLots]
    .filter((l) => l.slug !== currentSlug)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

/** Banner sonrası slide’da gösterilecek öne çıkan lot (Rank 1 / koleksiyon lideri) */
export function getFeaturedLotForHome(): CoffeeLot {
  const byRank = coffeeLots.find((l) => l.rank === 1);
  if (byRank) return byRank;
  return [...coffeeLots].sort((a, b) => b.score - a.score)[0];
}
