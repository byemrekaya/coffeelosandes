export const site = {
  name: 'Coffee Los Andes',
  legalEntityName: 'LOS ANDES EUROPE GmbH',
  companyOwner: 'Çiğdem Kördikanlıoğlu',
  officeAddressLine: 'Neuenburger Str. 19, 10969 Berlin-Bezirk Friedrichshain-Kreuzberg',
  legalSeat: 'Berlin, AG Charlottenburg',
  commercialRegisterHrb: 'HRB 288278 B',
  vatId: 'DE 463145028',
  eoriNumber: 'DE765125978298777',
  taxNumber: '37/425/50529',
  contactPhone: '+49 178 9312217',
  contactPerson: 'Fırat Kördikanlıoğlu',
  defaultTitle: 'Coffee Los Andes – Geschmack aus den Höhen der Anden · B2B',
  defaultDescription:
    'B2B-Kaffeeversorgung mit direkt angebundenen Ursprungslots aus Venezuela: transparent, planbar und auf professionelle Abnehmer ausgerichtet.',
  contactEmail: 'info@losandeseurope.de',
  canonicalOrigin: 'https://coffeelosandes.com',
  ogImage: '/coffee-farm-about.webp',
} as const;

export const mailtoB2B = `mailto:${site.contactEmail}`;
