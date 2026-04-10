export const site = {
  name: 'Coffee Los Andes',
  legalEntityName: 'Losandes Europe GmbH i.G.',
  companyOwner: 'Cigdem Kördikanlioglu',
  officeAddressLine: 'Stallschreiberstr. 8-11, 10969 Berlin',
  legalSeat: 'Berlin, AG Charlottenburg',
  commercialRegisterHrb: '',
  vatId: '',
  eoriNumber: '',
  defaultTitle: 'Coffee Los Andes – Geschmack aus den Höhen der Anden · B2B',
  defaultDescription:
    'B2B-Kaffeeversorgung mit direkt angebundenen Ursprungslots aus Venezuela: transparent, planbar und auf professionelle Abnehmer ausgerichtet.',
  contactEmail: 'info@losandeseurope.de',
  canonicalOrigin: 'https://coffeelosandes.com',
  ogImage: '/coffee-farm-about.webp',
} as const;

export const mailtoB2B = `mailto:${site.contactEmail}`;
