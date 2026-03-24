import type { Locale } from './types';

/**
 * Ürün kartları ve kahve kahramanı için tadım etiketleri — kaynak veri İngilizce anahtar olarak kalır.
 * Eşleşmeyen etiketler olduğu gibi döner.
 */
const LABELS: Record<string, Record<Locale, string>> = {
  Floral: { tr: 'Çiçeksi', de: 'Floral' },
  Exotic: { tr: 'Egzotik', de: 'Exotisch' },
  Champagne: { tr: 'Şampanya', de: 'Champagner' },
  Cocoa: { tr: 'Kakao', de: 'Kakao' },
  Peach: { tr: 'Şeftali', de: 'Pfirsich' },
  Jasmine: { tr: 'Yasemin', de: 'Jasmin' },
  Berries: { tr: 'Orman meyvesi', de: 'Beeren' },
  Kiwi: { tr: 'Kivi', de: 'Kiwi' },
  Butter: { tr: 'Tereyağımsı', de: 'Buttrig' },
  Chocolate: { tr: 'Çikolata', de: 'Schokolade' },
  'Dulce de leche': { tr: 'Süt reçeli (dulce de leche)', de: 'Dulce de leche' },
  Coconut: { tr: 'Hindistan cevizi', de: 'Kokosnuss' },
  Sweet: { tr: 'Tatlı', de: 'Süß' },
  Bergamot: { tr: 'Bergamot', de: 'Bergamotte' },
  'Black tea': { tr: 'Siyah çay', de: 'Schwarzer Tee' },
  Citrus: { tr: 'Narenciye', de: 'Zitrus' },
  'Brown sugar': { tr: 'Esmer şeker', de: 'Rohrzucker' },
  'Stone fruit': { tr: 'Taş meyve', de: 'Steinobst' },
  Cedar: { tr: 'Sedir', de: 'Zeder' },
  Spice: { tr: 'Baharat', de: 'Gewürz' },
  'Dark chocolate': { tr: 'Bitter çikolata', de: 'Dunkle Schokolade' },
  Cherry: { tr: 'Kiraz', de: 'Kirsche' },
  Hazelnut: { tr: 'Fındık', de: 'Haselnuss' },
  Creamy: { tr: 'Kremsi', de: 'Cremig' },
  'Red fruit': { tr: 'Kırmızı meyve', de: 'Rote Frucht' },
  Herbal: { tr: 'Otsu / bitki', de: 'Kräuter' },
  'Wild berries': { tr: 'Yabani böğürtlen', de: 'Waldbeeren' },
  'Forest fruits': { tr: 'Orman meyveleri', de: 'Waldfrüchte' },
  Caramel: { tr: 'Karamel', de: 'Karamell' },
  Honey: { tr: 'Bal', de: 'Honig' },
  Fig: { tr: 'İncir', de: 'Feige' },
  Macadamia: { tr: 'Macadamia', de: 'Macadamia' },
  Vanilla: { tr: 'Vanilya', de: 'Vanille' },
  Silky: { tr: 'İpeksi', de: 'Seidig' },
  Citric: { tr: 'Sitrik', de: 'Zitrisch' },
  Maple: { tr: 'Akçaağaç', de: 'Ahorn' },
  Balanced: { tr: 'Dengeli', de: 'Ausgewogen' },
  'White chocolate': { tr: 'Beyaz çikolata', de: 'Weiße Schokolade' },
  Orange: { tr: 'Portakal', de: 'Orange' },
  Almond: { tr: 'Badem', de: 'Mandel' },
  Cinnamon: { tr: 'Tarçın', de: 'Zimt' },
  Panela: { tr: 'Panela', de: 'Panela' },
};

export function translateFlavorTag(tag: string, locale: Locale): string {
  const row = LABELS[tag];
  if (!row) return tag;
  return row[locale] ?? tag;
}

export function translateFlavorTags(tags: string[], locale: Locale): string[] {
  return tags.map((tag) => translateFlavorTag(tag, locale));
}
