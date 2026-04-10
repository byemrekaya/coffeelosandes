import { venezuelaCoffeeMasterWithSlug } from './venezuelaCoffeeMaster';

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
  specialty: 85,
  'specialty-blend': 86,
  'commercial-lot': 81,
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

export const PORTFOLIO_CATEGORY_HERO_IMAGE = '/losandes-gardens.webp';

export const PORTFOLIO_CARD_CUPPING_BADGE: Record<HomePortfolioCategoryId, string | null> = {
  'competition-lot': null,
  'micro-lot': '84–89',
  specialty: '84–86',
  'specialty-blend': '84–89',
  'commercial-lot': '80–82',
  'roasted-coffee': null,
};

/**
 * Statik slug listeleri (competition / roasted boş; specialty-blend kürasyonlu).
 * micro-lot, specialty ve commercial-lot slugs {@link getPortfolioSlugsForCategory} ile üretilir.
 */
export const homePortfolioSlugsByCategory: Record<HomePortfolioCategoryId, string[]> = {
  'competition-lot': [],
  'micro-lot': [],
  specialty: [],
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

export function getPortfolioSlugsForCategory(categoryId: HomePortfolioCategoryId): string[] {
  const blendSlugs = homePortfolioSlugsByCategory['specialty-blend'];
  if (categoryId === 'micro-lot') {
    return venezuelaCoffeeMasterWithSlug.filter((i) => i.segment === 'MICRO LOT').map((i) => i.slug);
  }
  if (categoryId === 'specialty') {
    return venezuelaCoffeeMasterWithSlug
      .filter((i) => i.segment === 'SPECIALTY' && !blendSlugs.includes(i.slug))
      .map((i) => i.slug);
  }
  if (categoryId === 'commercial-lot') {
    return venezuelaCoffeeMasterWithSlug.filter((i) => i.segment === 'COMMERCIAL').map((i) => i.slug);
  }
  return homePortfolioSlugsByCategory[categoryId];
}

export function getPortfolioCategoryIdForMasterSlug(slug: string): HomePortfolioCategoryId | null {
  if (homePortfolioSlugsByCategory['specialty-blend'].includes(slug)) {
    return 'specialty-blend';
  }
  for (const categoryId of HOME_PORTFOLIO_CATEGORY_ORDER) {
    if (categoryId === 'specialty-blend') continue;
    const staticSlugs = homePortfolioSlugsByCategory[categoryId];
    if (staticSlugs.length > 0 && staticSlugs.includes(slug)) {
      return categoryId;
    }
  }
  const item = venezuelaCoffeeMasterWithSlug.find((i) => i.slug === slug);
  if (!item) return null;
  if (item.segment === 'COMMERCIAL') return 'commercial-lot';
  if (item.segment === 'SPECIALTY') return 'specialty';
  if (item.segment === 'MICRO LOT') return 'micro-lot';
  return null;
}

export function getPortfolioCuppingBadgeForMasterSlug(slug: string): string | null {
  const categoryId = getPortfolioCategoryIdForMasterSlug(slug);
  if (categoryId == null) return null;
  return PORTFOLIO_CARD_CUPPING_BADGE[categoryId];
}
