import type { Locale } from './types';

const LABELS: Record<string, { de: string }> = {
  Floral: { de: 'Floral' },
  Exotic: { de: 'Exotisch' },
  Champagne: { de: 'Champagner' },
  Cocoa: { de: 'Kakao' },
  Peach: { de: 'Pfirsich' },
  Jasmine: { de: 'Jasmin' },
  Berries: { de: 'Beeren' },
  Kiwi: { de: 'Kiwi' },
  Butter: { de: 'Buttrig' },
  Chocolate: { de: 'Schokolade' },
  'Dulce de leche': { de: 'Dulce de leche' },
  Coconut: { de: 'Kokosnuss' },
  Sweet: { de: 'Süß' },
  Bergamot: { de: 'Bergamotte' },
  'Black tea': { de: 'Schwarzer Tee' },
  Citrus: { de: 'Zitrus' },
  'Brown sugar': { de: 'Rohrzucker' },
  'Stone fruit': { de: 'Steinobst' },
  Cedar: { de: 'Zeder' },
  Spice: { de: 'Gewürz' },
  'Dark chocolate': { de: 'Dunkle Schokolade' },
  Cherry: { de: 'Kirsche' },
  Hazelnut: { de: 'Haselnuss' },
  Creamy: { de: 'Cremig' },
  'Red fruit': { de: 'Rote Frucht' },
  Herbal: { de: 'Kräuter' },
  'Wild berries': { de: 'Waldbeeren' },
  'Forest fruits': { de: 'Waldfrüchte' },
  Caramel: { de: 'Karamell' },
  Honey: { de: 'Honig' },
  Fig: { de: 'Feige' },
  Macadamia: { de: 'Macadamia' },
  Vanilla: { de: 'Vanille' },
  Silky: { de: 'Seidig' },
  Citric: { de: 'Zitrisch' },
  Maple: { de: 'Ahorn' },
  Balanced: { de: 'Ausgewogen' },
  'White chocolate': { de: 'Weiße Schokolade' },
  Orange: { de: 'Orange' },
  Almond: { de: 'Mandel' },
  Cinnamon: { de: 'Zimt' },
  Panela: { de: 'Panela' },
};

export function translateFlavorTag(tag: string, locale: Locale): string {
  const row = LABELS[tag];
  if (!row) return tag;
  return locale === 'de' ? row.de : tag;
}

export function translateFlavorTags(tags: string[], locale: Locale): string[] {
  return tags.map((tag) => translateFlavorTag(tag, locale));
}
