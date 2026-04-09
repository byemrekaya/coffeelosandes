export const HOME_PORTFOLIO_CATEGORY_ORDER = [
  'competition-lot',
  'micro-lot',
  'specialty',
  'specialty-blend',
  'commercial-lot',
  'roasted-coffee',
] as const;

export type HomePortfolioCategoryId = (typeof HOME_PORTFOLIO_CATEGORY_ORDER)[number];

export const HOME_PORTFOLIO_CUPPING_BAR_PCT: Record<HomePortfolioCategoryId, number | null> = {
  'competition-lot': 92,
  'micro-lot': 87,
  specialty: 82,
  'specialty-blend': 86,
  'commercial-lot': 75,
  'roasted-coffee': null,
};

export const PORTFOLIO_CATEGORY_EMOJI: Record<HomePortfolioCategoryId, string> = {
  'competition-lot': '🏆',
  'micro-lot': '🎖️',
  specialty: '⭐',
  'specialty-blend': '⚗️',
  'commercial-lot': '🏭',
  'roasted-coffee': '☕',
};

export const PORTFOLIO_CATEGORY_HERO_IMAGE = '/banner.webp';

/** Portföy kategori sayfasındaki master kartlarda gösterilen cupping bandı (liste anasayfa bandıyla aynı). */
export const PORTFOLIO_CARD_CUPPING_BADGE: Record<HomePortfolioCategoryId, string | null> = {
  'competition-lot': null,
  'micro-lot': '84–89',
  specialty: '80–83',
  'specialty-blend': '84–89',
  'commercial-lot': '70–79',
  'roasted-coffee': null,
};

export const homePortfolioSlugsByCategory: Record<HomePortfolioCategoryId, string[]> = {
  'competition-lot': [],
  'micro-lot': [
    'monteclaro-merida-4',
    'geisha-trujillo-6',
    'geisha-carabobo-8',
    'araguaney-merida-12',
    'araguaney-merida-20',
    'monteclaro-tachira-28',
    'monteclaro-merida-30',
    'monteclaro-miranda-35',
    'monteclaro-tachira-36',
    'monteclaro-merida-41',
    'monteclaro-merida-42',
    'monteclaro-trujillo-44',
    'monteclaro-merida-49',
    'caturra-trujillo-2',
    'colombia-27-trujillo-5',
    'castillo-trujillo-7',
    'castillo-carabobo-9',
    'caturra-yaracuy-10',
    'tabi-trujillo-11',
    'castillo-miranda-15',
    'caturra-lara-16',
    'colombia-27-lara-17',
    'villanueva-tachira-18',
    'caturra-lara-19',
    'cenicafe-trujillo-27',
    'castillo-merida-29',
    'costa-rica-portuguesa-32',
    'castillo-trujillo-33',
    'castillo-merida-34',
    'colombia-27-trujillo-37',
    'castillo-yaracuy-43',
    'colombia-yaracuy-45',
    'colombia-27-lara-47',
    'villanueva-trujillo-50',
    'villanueva-merida-51',
  ],
  specialty: ['desconocido-lara-23', 'desconocido-lara-24', 'desconocido-portuguesa-38', 'desconocido-lara-48'],
  'specialty-blend': [
    'castillo-colombia-yaracuy-13',
    'colombia-y-castilla-lara-14',
    'colombia-y-castilla-specialty-blend-lara-52',
    'castillo-naranjal-barinas-22',
    'caturra-amarillo-merida-25',
    'caturra-roja-merida-46',
  ],
  'commercial-lot': [],
  'roasted-coffee': [],
};

/** Master ürün slug’ının hangi portföy kategorisinde listelendiği (yoksa null). */
export function getPortfolioCategoryIdForMasterSlug(slug: string): HomePortfolioCategoryId | null {
  for (const categoryId of HOME_PORTFOLIO_CATEGORY_ORDER) {
    if (homePortfolioSlugsByCategory[categoryId].includes(slug)) {
      return categoryId;
    }
  }
  return null;
}

/** Kart / detay için portföy bandı rozeti; kategori yoksa veya rozet tanımsızsa null. */
export function getPortfolioCuppingBadgeForMasterSlug(slug: string): string | null {
  const categoryId = getPortfolioCategoryIdForMasterSlug(slug);
  if (categoryId == null) return null;
  return PORTFOLIO_CARD_CUPPING_BADGE[categoryId];
}
