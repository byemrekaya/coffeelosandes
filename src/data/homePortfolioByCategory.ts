export const HOME_PORTFOLIO_CATEGORY_ORDER = [
  'competition-lot',
  'micro-lot',
  'specialty',
  'specialty-blend',
  'commercial-lot',
  'mixed',
  'roasted-coffee',
] as const;

export type HomePortfolioCategoryId = (typeof HOME_PORTFOLIO_CATEGORY_ORDER)[number];

export const HOME_PORTFOLIO_CUPPING_BAR_PCT: Record<HomePortfolioCategoryId, number | null> = {
  'competition-lot': 92,
  'micro-lot': 72,
  specialty: 52,
  'specialty-blend': 52,
  'commercial-lot': 30,
  mixed: null,
  'roasted-coffee': null,
};

export const PORTFOLIO_CATEGORY_EMOJI: Record<HomePortfolioCategoryId, string> = {
  'competition-lot': '🏆',
  'micro-lot': '🎖️',
  specialty: '⭐',
  'specialty-blend': '⚗️',
  'commercial-lot': '🏭',
  mixed: '🔀',
  'roasted-coffee': '☕',
};

export const PORTFOLIO_CATEGORY_HERO_IMAGE = '/banner.webp';

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
  ],
  specialty: [
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
  'specialty-blend': [
    'castillo-colombia-yaracuy-13',
    'colombia-y-castilla-lara-14',
    'colombia-y-castilla-specialty-blend-lara-52',
    'castillo-naranjal-barinas-22',
    'caturra-amarillo-merida-25',
    'caturra-roja-merida-46',
  ],
  'commercial-lot': [
    'desconocido-lara-24',
    'desconocido-lara-48',
    'desconocido-lara-23',
    'desconocido-portuguesa-38',
  ],
  mixed: [],
  'roasted-coffee': [],
};
