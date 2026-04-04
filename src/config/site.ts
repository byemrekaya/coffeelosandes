export const site = {
  name: 'Coffee Los Andes',
  /** Ticari unvan (hero vb.) */
  legalEntityName: 'Losandes Europe GmbH',
  defaultTitle: 'Coffee Los Andes – Premium Kaffee aus Venezuela für B2B',
  defaultDescription:
    'B2B-Kaffeeversorgung mit direkt angebundenen Ursprungslots aus Venezuela: transparent, planbar und auf professionelle Abnehmer ausgerichtet.',
  contactEmail: 'info@coffeelosandes.com',
  canonicalOrigin: 'https://coffeelosandes.com',
  /** Open Graph / paylaşım görseli (`public/` altında) */
  ogImage: '/coffee-farm-about.webp',
} as const;

export const mailtoB2B = `mailto:${site.contactEmail}`;
