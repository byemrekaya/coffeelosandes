export const site = {
  name: 'Coffee Los Andes',
  /** Ticari unvan (hero vb.) */
  legalEntityName: 'Losandes Europe GmbH',
  defaultTitle: 'Coffee Los Andes – Venezuelan Origin, B2B Coffee Craft',
  defaultDescription:
    'A premium brand experience for wholesale buyers, cafés, and corporate partners — Venezuelan specialty coffee from origin to cup.',
  contactEmail: 'info@coffeelosandes.com',
  canonicalOrigin: 'https://coffeelosandes.com',
  /** Open Graph / paylaşım görseli (`public/` altında) */
  ogImage: '/bannervideo.mp4',
} as const;

export const mailtoB2B = `mailto:${site.contactEmail}`;
