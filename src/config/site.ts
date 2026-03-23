/**
 * Central site metadata — update for production (domain, analytics, etc.).
 */
export const site = {
  name: 'Coffee Los Andes',
  /** Default when a page omits title/description */
  defaultTitle: 'Coffee Los Andes – Venezuelan Origin, B2B Coffee Craft',
  defaultDescription:
    'A premium brand experience for wholesale buyers, cafés, and corporate partners — Venezuelan specialty coffee from origin to cup.',
  contactEmail: 'b2b@coffeelosandes.com',
  /** Used in astro.config `site` — replace with real URL before deploy */
  canonicalOrigin: 'https://coffeelosandes.example.com',
} as const;

export const mailtoB2B = `mailto:${site.contactEmail}`;
