export const site = {
  name: 'Coffee Los Andes',
  legalEntityName: 'Proteam Handels GmbH',
  officeAddressLine: 'Stallschreiberstr. 8-11, 10969 Berlin',
  legalSeat: 'Berlin, AG Charlottenburg',
  commercialRegisterHrb: 'HRB 211052',
  vatId: 'DE327328537',
  eoriNumber: 'DE826480858564019',
  defaultTitle: 'Coffee Los Andes – Geschmack aus den Höhen der Anden · B2B',
  defaultDescription:
    'B2B-Kaffeeversorgung mit direkt angebundenen Ursprungslots aus Venezuela: transparent, planbar und auf professionelle Abnehmer ausgerichtet.',
  contactEmail: 'info@losandeseurope.de',
  canonicalOrigin: 'https://coffeelosandes.com',
  ogImage: '/coffee-farm-about.webp',
} as const;

export const mailtoB2B = `mailto:${site.contactEmail}`;
