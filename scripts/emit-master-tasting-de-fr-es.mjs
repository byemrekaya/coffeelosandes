/**
 * en-masterTasting.ts yapısından de/fr/es locale dosyalarını üretir.
 * Çalıştır: node scripts/emit-master-tasting-de-fr-es.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const enPath = join(root, 'src/i18n/localePartials/en-masterTasting.ts');

function parseEnSlugs(src) {
  const out = [];
  const slugRe = /'([a-z0-9-]+)':\s*\{/g;
  let m;
  while ((m = slugRe.exec(src)) !== null) {
    const slug = m[1];
    const start = m.index + m[0].length;
    let depth = 1;
    let i = start;
    while (i < src.length && depth > 0) {
      if (src[i] === '{') depth++;
      else if (src[i] === '}') depth--;
      i++;
    }
    const block = src.slice(start, i - 1);
    const get = (k) => {
      const r = new RegExp(`${k}:\\s*'([^']*(?:\\\\'[^']*)*)'`);
      const mm = block.match(r);
      return mm ? mm[1].replace(/\\'/g, "'") : '';
    };
    out.push({
      slug,
      dominantNotes: get('dominantNotes'),
      supportingNotes: get('supportingNotes'),
      bodyFinish: get('bodyFinish'),
      character: get('character'),
    });
  }
  return out;
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

/** İngilizce imza → DE/FR/ES (aynı şablonu paylaşan slug’lar aynı çeviriyi alır) */
const T = {
  de: new Map(),
  fr: new Map(),
  es: new Map(),
};

function addMaps(enSig, de, fr, es) {
  T.de.set(enSig, de);
  T.fr.set(enSig, fr);
  T.es.set(enSig, es);
}

// --- Şablon çevirileri (İngilizce kaynakla eşleşen imzalar) ---
addMaps(
  'Milk chocolate (+), caramel, dried apricot, almond||Apple, light orange, hazelnut, honey||Medium body, creamy texture, cocoa finish, balanced acidity||Classic, balanced and round, sweet-bitter harmony',
  {
    dn: 'Milchschokolade (+), Karamell, getrocknete Aprikose, Mandel',
    sn: 'Apfel, leichte Orange, Haselnuss, Honig',
    bf: 'Mittlerer Körper, cremige Textur, Kakaofinish, ausgewogene Säure',
    ch: 'Klassisch, ausgewogen und rund, süß-bittere Harmonie',
  },
  {
    dn: 'Chocolat au lait (+), caramel, abricot sec, amande',
    sn: 'Pomme, orange légère, noisette, miel',
    bf: 'Corps moyen, texture crémeuse, finale cacao, acidité équilibrée',
    ch: 'Classique, équilibré et rond, harmonie sucré-amer',
  },
  {
    dn: 'Chocolate con leche (+), caramelo, albaricoque seco, almendra',
    sn: 'Manzana, naranja ligera, avellana, miel',
    bf: 'Cuerpo medio, textura cremosa, final a cacao, acidez equilibrada',
    ch: 'Clásico, equilibrado y redondo, armonía dulce-amarga',
  },
);

addMaps(
  'Milk chocolate (+), caramel, hazelnut, dried grape||Apple, cinnamon, almond, light orange||Medium body, creamy texture, cocoa finish, soft acidity||Classic, balanced and round, sweet-bitter harmony',
  {
    dn: 'Milchschokolade (+), Karamell, Haselnuss, Trockenbeere',
    sn: 'Apfel, Zimt, Mandel, leichte Orange',
    bf: 'Mittlerer Körper, cremige Textur, Kakaofinish, weiche Säure',
    ch: 'Klassisch, ausgewogen und rund, süß-bittere Harmonie',
  },
  {
    dn: 'Chocolat au lait (+), caramel, noisette, raisin sec',
    sn: 'Pomme, cannelle, amande, orange légère',
    bf: 'Corps moyen, texture crémeuse, finale cacao, acidité douce',
    ch: 'Classique, équilibré et rond, harmonie sucré-amer',
  },
  {
    dn: 'Chocolate con leche (+), caramelo, avellana, uva pasa',
    sn: 'Manzana, canela, almendra, naranja ligera',
    bf: 'Cuerpo medio, textura cremosa, final a cacao, acidez suave',
    ch: 'Clásico, equilibrado y redondo, armonía dulce-amarga',
  },
);

addMaps(
  'Raisin (+), milk chocolate, roasted almond, caramel||Apple, vanilla, muscovado sugar, light citrus||Medium-full body, cocoa nib, light cinnamon spice, long clean finish||Balanced, round and sweet, stable and consistent',
  {
    dn: 'Rosine (+), Milchschokolade, geröstete Mandel, Karamell',
    sn: 'Apfel, Vanille, Muscovado-Zucker, leichte Zitrusnoten',
    bf: 'Mittel bis voller Körper, Kakaonibs, leichte Zimt-Würze, langes sauberes Finish',
    ch: 'Ausgewogen, rund und süß, stabil und konsistent',
  },
  {
    dn: 'Raisin sec (+), chocolat au lait, amande torréfiée, caramel',
    sn: 'Pomme, vanille, sucre muscovado, agrumes légers',
    bf: 'Corps moyen à plein, éclats de cacao, épice cannelle légère, finale longue et nette',
    ch: 'Équilibré, rond et sucré, stable et constant',
  },
  {
    dn: 'Pasa (+), chocolate con leche, almendra tostada, caramelo',
    sn: 'Manzana, vainilla, azúcar muscovado, cítricos ligeros',
    bf: 'Cuerpo medio-pleno, pepitas de cacao, especia de canela ligera, final largo y limpio',
    ch: 'Equilibrado, redondo y dulce, estable y constante',
  },
);

addMaps(
  'Dark chocolate, caramel, forest berries, hazelnut||Fruity acidity, vanilla, molasses, orange peel||Medium-full body, creamy texture, cocoa finish, balanced acidity||Balanced, sweet and round, stable',
  {
    dn: 'Zartbitterschokolade, Karamell, Waldbeeren, Haselnuss',
    sn: 'Fruchtige Säure, Vanille, Melasse, Orangenschale',
    bf: 'Mittel bis voller Körper, cremige Textur, Kakaofinish, ausgewogene Säure',
    ch: 'Ausgewogen, süß und rund, stabil',
  },
  {
    dn: 'Chocolat noir, caramel, fruits rouges des bois, noisette',
    sn: 'Acidité fruitée, vanille, mélasse, zeste d’orange',
    bf: 'Corps moyen à plein, texture crémeuse, finale cacao, acidité équilibrée',
    ch: 'Équilibré, sucré et rond, stable',
  },
  {
    dn: 'Chocolate negro, caramelo, frutos del bosque, avellana',
    sn: 'Acidez afrutada, vainilla, melaza, cáscara de naranja',
    bf: 'Cuerpo medio-pleno, textura cremosa, final a cacao, acidez equilibrada',
    ch: 'Equilibrado, dulce y redondo, estable',
  },
);

addMaps(
  'Dark chocolate, caramel, hazelnut, sour cherry||Honey, vanilla, green apple, light spice||Medium-full body, creamy texture, cocoa finish, balanced acidity||Balanced, sweet and round, stable',
  {
    dn: 'Zartbitterschokolade, Karamell, Haselnuss, Sauerkirsche',
    sn: 'Honig, Vanille, grüner Apfel, leichte Würze',
    bf: 'Mittel bis voller Körper, cremige Textur, Kakaofinish, ausgewogene Säure',
    ch: 'Ausgewogen, süß und rund, stabil',
  },
  {
    dn: 'Chocolat noir, caramel, noisette, griotte',
    sn: 'Miel, vanille, pomme verte, épice légère',
    bf: 'Corps moyen à plein, texture crémeuse, finale cacao, acidité équilibrée',
    ch: 'Équilibré, sucré et rond, stable',
  },
  {
    dn: 'Chocolate negro, caramelo, avellana, guinda',
    sn: 'Miel, vainilla, manzana verde, especia ligera',
    bf: 'Cuerpo medio-pleno, textura cremosa, final a cacao, acidez equilibrada',
    ch: 'Equilibrado, dulce y redondo, estable',
  },
);

addMaps(
  'Dark chocolate, caramel, hazelnut, sour cherry||Fruity acidity, vanilla, molasses, light spice||Medium-full body, creamy texture, cocoa finish, balanced acidity||Balanced, sweet and round, stable',
  {
    dn: 'Zartbitterschokolade, Karamell, Haselnuss, Sauerkirsche',
    sn: 'Fruchtige Säure, Vanille, Melasse, leichte Würze',
    bf: 'Mittel bis voller Körper, cremige Textur, Kakaofinish, ausgewogene Säure',
    ch: 'Ausgewogen, süß und rund, stabil',
  },
  {
    dn: 'Chocolat noir, caramel, noisette, griotte',
    sn: 'Acidité fruitée, vanille, mélasse, épice légère',
    bf: 'Corps moyen à plein, texture crémeuse, finale cacao, acidité équilibrée',
    ch: 'Équilibré, sucré et rond, stable',
  },
  {
    dn: 'Chocolate negro, caramelo, avellana, guinda',
    sn: 'Acidez afrutada, vainilla, melaza, especia ligera',
    bf: 'Cuerpo medio-pleno, textura cremosa, final a cacao, acidez equilibrada',
    ch: 'Equilibrado, dulce y redondo, estable',
  },
);

addMaps(
  'Dark chocolate, caramel, Andean berries, hazelnut||Fruity acidity, vanilla, molasses, light spice||Medium-full body, creamy texture, cocoa finish, balanced acidity||Balanced, sweet and round, stable',
  {
    dn: 'Zartbitterschokolade, Karamell, Andenbeeren, Haselnuss',
    sn: 'Fruchtige Säure, Vanille, Melasse, leichte Würze',
    bf: 'Mittel bis voller Körper, cremige Textur, Kakaofinish, ausgewogene Säure',
    ch: 'Ausgewogen, süß und rund, stabil',
  },
  {
    dn: 'Chocolat noir, caramel, baies andines, noisette',
    sn: 'Acidité fruitée, vanille, mélasse, épice légère',
    bf: 'Corps moyen à plein, texture crémeuse, finale cacao, acidité équilibrée',
    ch: 'Équilibré, sucré et rond, stable',
  },
  {
    dn: 'Chocolate negro, caramelo, frutos andinos, avellana',
    sn: 'Acidez afrutada, vainilla, melaza, especia ligera',
    bf: 'Cuerpo medio-pleno, textura cremosa, final a cacao, acidez equilibrada',
    ch: 'Equilibrado, dulce y redondo, estable',
  },
);

addMaps(
  'Dark chocolate, caramel, hazelnut, orange||Fruity acidity, vanilla, molasses, light orange||Medium-full body, creamy texture, cocoa finish, balanced acidity||Balanced, complex, stable',
  {
    dn: 'Zartbitterschokolade, Karamell, Haselnuss, Orange',
    sn: 'Fruchtige Säure, Vanille, Melasse, leichte Orange',
    bf: 'Mittel bis voller Körper, cremige Textur, Kakaofinish, ausgewogene Säure',
    ch: 'Ausgewogen, komplex, stabil',
  },
  {
    dn: 'Chocolat noir, caramel, noisette, orange',
    sn: 'Acidité fruitée, vanille, mélasse, orange légère',
    bf: 'Corps moyen à plein, texture crémeuse, finale cacao, acidité équilibrée',
    ch: 'Équilibré, complexe, stable',
  },
  {
    dn: 'Chocolate negro, caramelo, avellana, naranja',
    sn: 'Acidez afrutada, vainilla, melaza, naranja ligera',
    bf: 'Cuerpo medio-pleno, textura cremosa, final a cacao, acidez equilibrada',
    ch: 'Equilibrado, complejo, estable',
  },
);

addMaps(
  'Dark chocolate, caramel, hazelnut, sour cherry||Fruity acidity, vanilla, molasses, light orange||Medium-full body, creamy texture, cocoa finish, balanced acidity||Balanced, sweet and round, stable',
  {
    dn: 'Zartbitterschokolade, Karamell, Haselnuss, Sauerkirsche',
    sn: 'Fruchtige Säure, Vanille, Melasse, leichte Orange',
    bf: 'Mittel bis voller Körper, cremige Textur, Kakaofinish, ausgewogene Säure',
    ch: 'Ausgewogen, süß und rund, stabil',
  },
  {
    dn: 'Chocolat noir, caramel, noisette, griotte',
    sn: 'Acidité fruitée, vanille, mélasse, orange légère',
    bf: 'Corps moyen à plein, texture crémeuse, finale cacao, acidité équilibrée',
    ch: 'Équilibré, sucré et rond, stable',
  },
  {
    dn: 'Chocolate negro, caramelo, avellana, guinda',
    sn: 'Acidez afrutada, vainilla, melaza, naranja ligera',
    bf: 'Cuerpo medio-pleno, textura cremosa, final a cacao, acidez equilibrada',
    ch: 'Equilibrado, dulce y redondo, estable',
  },
);

addMaps(
  'Caramel (+), chocolate, hazelnut, dried fig||Apple, grape, vanilla, light orange||Medium body, smooth texture, balanced finish, soft acidity||Classic, balanced and round, sweet-bitter harmony',
  {
    dn: 'Karamell (+), Schokolade, Haselnuss, getrocknete Feige',
    sn: 'Apfel, Traube, Vanille, leichte Orange',
    bf: 'Mittlerer Körper, samtige Textur, ausgewogenes Finish, weiche Säure',
    ch: 'Klassisch, ausgewogen und rund, süß-bittere Harmonie',
  },
  {
    dn: 'Caramel (+), chocolat, noisette, figue sèche',
    sn: 'Pomme, raisin, vanille, orange légère',
    bf: 'Corps moyen, texture souple, finale équilibrée, acidité douce',
    ch: 'Classique, équilibré et rond, harmonie sucré-amer',
  },
  {
    dn: 'Caramelo (+), chocolate, avellana, higo seco',
    sn: 'Manzana, uva, vainilla, naranja ligera',
    bf: 'Cuerpo medio, textura suave, final equilibrado, acidez suave',
    ch: 'Clásico, equilibrado y redondo, armonía dulce-amarga',
  },
);

addMaps(
  'Caramel (+), milk chocolate, hazelnut, dried grape||Apple, light floral notes, almond, muscovado sugar||Medium body, creamy texture, cocoa finish, balanced acidity||Balanced, round and sweet, clean',
  {
    dn: 'Karamell (+), Milchschokolade, Haselnuss, Trockenbeere',
    sn: 'Apfel, leichte florale Noten, Mandel, Muscovado-Zucker',
    bf: 'Mittlerer Körper, cremige Textur, Kakaofinish, ausgewogene Säure',
    ch: 'Ausgewogen, rund und süß, klar',
  },
  {
    dn: 'Caramel (+), chocolat au lait, noisette, raisin sec',
    sn: 'Pomme, notes florales légères, amande, sucre muscovado',
    bf: 'Corps moyen, texture crémeuse, finale cacao, acidité équilibrée',
    ch: 'Équilibré, rond et sucré, net',
  },
  {
    dn: 'Caramelo (+), chocolate con leche, avellana, uva pasa',
    sn: 'Manzana, notas florales ligeras, almendra, azúcar muscovado',
    bf: 'Cuerpo medio, textura cremosa, final a cacao, acidez equilibrada',
    ch: 'Equilibrado, redondo y dulce, limpio',
  },
);

addMaps(
  'Chocolate, caramel, hazelnut, orange||Fruity acidity, vanilla, almond, honey||Medium body, smooth texture, sweet finish, lively acidity||Balanced, complex, stable',
  {
    dn: 'Schokolade, Karamell, Haselnuss, Orange',
    sn: 'Fruchtige Säure, Vanille, Mandel, Honig',
    bf: 'Mittlerer Körper, samtige Textur, süßes Finish, lebendige Säure',
    ch: 'Ausgewogen, komplex, stabil',
  },
  {
    dn: 'Chocolat, caramel, noisette, orange',
    sn: 'Acidité fruitée, vanille, amande, miel',
    bf: 'Corps moyen, texture souple, finale sucrée, acidité vive',
    ch: 'Équilibré, complexe, stable',
  },
  {
    dn: 'Chocolate, caramelo, avellana, naranja',
    sn: 'Acidez afrutada, vainilla, almendra, miel',
    bf: 'Cuerpo medio, textura suave, final dulce, acidez viva',
    ch: 'Equilibrado, complejo, estable',
  },
);

addMaps(
  'Chocolate (+), hazelnut, caramel, dried grape||Apple, vanilla, honey, light floral||Medium body, smooth texture, balanced finish, soft acidity||Classic, balanced and round, sweet-bitter harmony',
  {
    dn: 'Schokolade (+), Haselnuss, Karamell, Trockenbeere',
    sn: 'Apfel, Vanille, Honig, leichte florale Noten',
    bf: 'Mittlerer Körper, samtige Textur, ausgewogenes Finish, weiche Säure',
    ch: 'Klassisch, ausgewogen und rund, süß-bittere Harmonie',
  },
  {
    dn: 'Chocolat (+), noisette, caramel, raisin sec',
    sn: 'Pomme, vanille, miel, floral léger',
    bf: 'Corps moyen, texture souple, finale équilibrée, acidité douce',
    ch: 'Classique, équilibré et rond, harmonie sucré-amer',
  },
  {
    dn: 'Chocolate (+), avellana, caramelo, uva pasa',
    sn: 'Manzana, vainilla, miel, floral ligero',
    bf: 'Cuerpo medio, textura suave, final equilibrado, acidez suave',
    ch: 'Clásico, equilibrado y redondo, armonía dulce-amarga',
  },
);

addMaps(
  'Caramel (+), milk chocolate, almond, dried grape||Apple, vanilla, muscovado sugar, light orange||Medium body, creamy texture, cocoa finish, balanced acidity||Balanced, round and sweet, stable',
  {
    dn: 'Karamell (+), Milchschokolade, Mandel, Trockenbeere',
    sn: 'Apfel, Vanille, Muscovado-Zucker, leichte Orange',
    bf: 'Mittlerer Körper, cremige Textur, Kakaofinish, ausgewogene Säure',
    ch: 'Ausgewogen, rund und süß, stabil',
  },
  {
    dn: 'Caramel (+), chocolat au lait, amande, raisin sec',
    sn: 'Pomme, vanille, sucre muscovado, orange légère',
    bf: 'Corps moyen, texture crémeuse, finale cacao, acidité équilibrée',
    ch: 'Équilibré, rond et sucré, stable',
  },
  {
    dn: 'Caramelo (+), chocolate con leche, almendra, uva pasa',
    sn: 'Manzana, vainilla, azúcar muscovado, naranja ligera',
    bf: 'Cuerpo medio, textura cremosa, final a cacao, acidez equilibrada',
    ch: 'Equilibrado, redondo y dulce, estable',
  },
);

addMaps(
  'Chocolate, caramel, hazelnut, sour cherry||Fruity acidity, vanilla, almond, honey||Medium body, smooth texture, sweet finish, balanced acidity||Balanced, complex, stable',
  {
    dn: 'Schokolade, Karamell, Haselnuss, Sauerkirsche',
    sn: 'Fruchtige Säure, Vanille, Mandel, Honig',
    bf: 'Mittlerer Körper, samtige Textur, süßes Finish, ausgewogene Säure',
    ch: 'Ausgewogen, komplex, stabil',
  },
  {
    dn: 'Chocolat, caramel, noisette, griotte',
    sn: 'Acidité fruitée, vanille, amande, miel',
    bf: 'Corps moyen, texture souple, finale sucrée, acidité équilibrée',
    ch: 'Équilibré, complexe, stable',
  },
  {
    dn: 'Chocolate, caramelo, avellana, guinda',
    sn: 'Acidez afrutada, vainilla, almendra, miel',
    bf: 'Cuerpo medio, textura suave, final dulce, acidez equilibrada',
    ch: 'Equilibrado, complejo, estable',
  },
);

addMaps(
  'Chocolate, caramel, hazelnut, orange||Fruity acidity, vanilla, almond, honey||Medium body, smooth texture, sweet finish, lively acidity||Balanced, fresh and lively, stable',
  {
    dn: 'Schokolade, Karamell, Haselnuss, Orange',
    sn: 'Fruchtige Säure, Vanille, Mandel, Honig',
    bf: 'Mittlerer Körper, samtige Textur, süßes Finish, lebendige Säure',
    ch: 'Ausgewogen, frisch und lebendig, stabil',
  },
  {
    dn: 'Chocolat, caramel, noisette, orange',
    sn: 'Acidité fruitée, vanille, amande, miel',
    bf: 'Corps moyen, texture souple, finale sucrée, acidité vive',
    ch: 'Équilibré, frais et vif, stable',
  },
  {
    dn: 'Chocolate, caramelo, avellana, naranja',
    sn: 'Acidez afrutada, vainilla, almendra, miel',
    bf: 'Cuerpo medio, textura suave, final dulce, acidez viva',
    ch: 'Equilibrado, fresco y vivo, estable',
  },
);

addMaps(
  'Honey, caramel, green apple, floral aromas||Fruity acidity, vanilla, almond, light spice||Medium body, smooth texture, sweet finish, lively acidity||Balanced, fresh and lively, stable',
  {
    dn: 'Honig, Karamell, grüner Apfel, florale Aromen',
    sn: 'Fruchtige Säure, Vanille, Mandel, leichte Würze',
    bf: 'Mittlerer Körper, samtige Textur, süßes Finish, lebendige Säure',
    ch: 'Ausgewogen, frisch und lebendig, stabil',
  },
  {
    dn: 'Miel, caramel, pomme verte, arômes floraux',
    sn: 'Acidité fruitée, vanille, amande, épice légère',
    bf: 'Corps moyen, texture souple, finale sucrée, acidité vive',
    ch: 'Équilibré, frais et vif, stable',
  },
  {
    dn: 'Miel, caramelo, manzana verde, aromas florales',
    sn: 'Acidez afrutada, vainilla, almendra, especia ligera',
    bf: 'Cuerpo medio, textura suave, final dulce, acidez viva',
    ch: 'Equilibrado, fresco y vivo, estable',
  },
);

addMaps(
  'Caramel (+), chocolate, hazelnut, dried fig||Apple, grape, vanilla, light orange||Medium-full body, creamy texture, long finish, balanced acidity||Classic, balanced and round, sweet-bitter harmony',
  {
    dn: 'Karamell (+), Schokolade, Haselnuss, getrocknete Feige',
    sn: 'Apfel, Traube, Vanille, leichte Orange',
    bf: 'Mittel bis voller Körper, cremige Textur, langes Finish, ausgewogene Säure',
    ch: 'Klassisch, ausgewogen und rund, süß-bittere Harmonie',
  },
  {
    dn: 'Caramel (+), chocolat, noisette, figue sèche',
    sn: 'Pomme, raisin, vanille, orange légère',
    bf: 'Corps moyen à plein, texture crémeuse, finale longue, acidité équilibrée',
    ch: 'Classique, équilibré et rond, harmonie sucré-amer',
  },
  {
    dn: 'Caramelo (+), chocolate, avellana, higo seco',
    sn: 'Manzana, uva, vainilla, naranja ligera',
    bf: 'Cuerpo medio-pleno, textura cremosa, final largo, acidez equilibrada',
    ch: 'Clásico, equilibrado y redondo, armonía dulce-amarga',
  },
);

addMaps(
  'Caramel, chocolate, honey, sour cherry||Fruity acidity, vanilla, hazelnut, orange||Medium-full body, creamy texture, sweet finish, balanced acidity||Balanced, complex, stable',
  {
    dn: 'Karamell, Schokolade, Honig, Sauerkirsche',
    sn: 'Fruchtige Säure, Vanille, Haselnuss, Orange',
    bf: 'Mittel bis voller Körper, cremige Textur, süßes Finish, ausgewogene Säure',
    ch: 'Ausgewogen, komplex, stabil',
  },
  {
    dn: 'Caramel, chocolat, miel, griotte',
    sn: 'Acidité fruitée, vanille, noisette, orange',
    bf: 'Corps moyen à plein, texture crémeuse, finale sucrée, acidité équilibrée',
    ch: 'Équilibré, complexe, stable',
  },
  {
    dn: 'Caramelo, chocolate, miel, guinda',
    sn: 'Acidez afrutada, vainilla, avellana, naranja',
    bf: 'Cuerpo medio-pleno, textura cremosa, final dulce, acidez equilibrada',
    ch: 'Equilibrado, complejo, estable',
  },
);

addMaps(
  'Chocolate, caramel, hazelnut, dried fruit||Honey, vanilla, apple, light spice||Medium body, creamy texture, sweet finish, balanced acidity||Balanced, sweet and round, stable',
  {
    dn: 'Schokolade, Karamell, Haselnuss, Trockenfrucht',
    sn: 'Honig, Vanille, Apfel, leichte Würze',
    bf: 'Mittlerer Körper, cremige Textur, süßes Finish, ausgewogene Säure',
    ch: 'Ausgewogen, süß und rund, stabil',
  },
  {
    dn: 'Chocolat, caramel, noisette, fruits secs',
    sn: 'Miel, vanille, pomme, épice légère',
    bf: 'Corps moyen, texture crémeuse, finale sucrée, acidité équilibrée',
    ch: 'Équilibré, sucré et rond, stable',
  },
  {
    dn: 'Chocolate, caramelo, avellana, fruta seca',
    sn: 'Miel, vainilla, manzana, especia ligera',
    bf: 'Cuerpo medio, textura cremosa, final dulce, acidez equilibrada',
    ch: 'Equilibrado, dulce y redondo, estable',
  },
);

addMaps(
  'Chocolate, caramel, hazelnut, generic coffee character||Light fruity, vanilla, almond, honey||Light-medium body, flat texture, short finish, low acidity||Simple, flat, everyday drinking',
  {
    dn: 'Schokolade, Karamell, Haselnuss, typischer Kaffeekarakter',
    sn: 'Leicht fruchtig, Vanille, Mandel, Honig',
    bf: 'Leicht bis mittlerer Körper, flache Textur, kurzes Finish, niedrige Säure',
    ch: 'Einfach, flach, Alltagskaffee',
  },
  {
    dn: 'Chocolat, caramel, noisette, caractère café générique',
    sn: 'Fruité léger, vanille, amande, miel',
    bf: 'Corps léger à moyen, texture plate, finale courte, acidité basse',
    ch: 'Simple, plat, café du quotidien',
  },
  {
    dn: 'Chocolate, caramelo, avellana, carácter genérico de café',
    sn: 'Afrutado ligero, vainilla, almendra, miel',
    bf: 'Cuerpo ligero-medio, textura plana, final corto, acidez baja',
    ch: 'Sencillo, plano, consumo cotidiano',
  },
);

addMaps(
  'Chocolate, caramel, hazelnut, dried grape||Apple, vanilla, honey, light floral||Medium body, smooth texture, balanced finish, soft acidity||Classic, balanced and round, sweet-bitter harmony',
  {
    dn: 'Schokolade, Karamell, Haselnuss, Trockenbeere',
    sn: 'Apfel, Vanille, Honig, leichte florale Noten',
    bf: 'Mittlerer Körper, samtige Textur, ausgewogenes Finish, weiche Säure',
    ch: 'Klassisch, ausgewogen und rund, süß-bittere Harmonie',
  },
  {
    dn: 'Chocolat, caramel, noisette, raisin sec',
    sn: 'Pomme, vanille, miel, floral léger',
    bf: 'Corps moyen, texture souple, finale équilibrée, acidité douce',
    ch: 'Classique, équilibré et rond, harmonie sucré-amer',
  },
  {
    dn: 'Chocolate, caramelo, avellana, uva pasa',
    sn: 'Manzana, vainilla, miel, floral ligero',
    bf: 'Cuerpo medio, textura suave, final equilibrado, acidez suave',
    ch: 'Clásico, equilibrado y redondo, armonía dulce-amarga',
  },
);

addMaps(
  'Fruit tea (+), white flowers, honey, yellow peach||Lemon blossom, muscat grape, light vanilla, lily||Light-medium body, silky texture, floral long finish, bright acidity||Delicate, floral and fruity, elegant',
  {
    dn: 'Früchtetee (+), weiße Blüten, Honig, gelber Pfirsich',
    sn: 'Zitronenblüte, Muskat-Traube, leichte Vanille, Lilie',
    bf: 'Leicht bis mittlerer Körper, seidige Textur, langes florales Finish, helle Säure',
    ch: 'Delikat, blumig und fruchtig, elegant',
  },
  {
    dn: 'Thé aux fruits (+), fleurs blanches, miel, pêche jaune',
    sn: 'Fleur de citronnier, raisin muscat, vanille légère, lys',
    bf: 'Corps léger à moyen, texture soyeuse, finale florale longue, acidité brillante',
    ch: 'Délicat, floral et fruité, élégant',
  },
  {
    dn: 'Té de frutas (+), flores blancas, miel, melocotón amarillo',
    sn: 'Flor de limonero, uva moscatel, vainilla ligera, lirio',
    bf: 'Cuerpo ligero-medio, textura sedosa, final floral largo, acidez brillante',
    ch: 'Delicado, floral y afrutado, elegante',
  },
);

addMaps(
  'White peach (+), jasmine, bergamot, honey||Lemon zest, green tea, tropical fruit, vanilla||Silky body, bright acidity, floral long finish, clean||Exotic, floral and refined, complex',
  {
    dn: 'Weißer Pfirsich (+), Jasmin, Bergamotte, Honig',
    sn: 'Zitronenschale, grüner Tee, tropische Frucht, Vanille',
    bf: 'Seidiger Körper, helle Säure, langes florales Finish, sauber',
    ch: 'Exotisch, blumig und raffiniert, komplex',
  },
  {
    dn: 'Pêche blanche (+), jasmin, bergamote, miel',
    sn: 'Zeste de citron, thé vert, fruit tropical, vanille',
    bf: 'Corps soyeux, acidité brillante, finale florale longue, nette',
    ch: 'Exotique, floral et raffiné, complexe',
  },
  {
    dn: 'Melocotón blanco (+), jazmín, bergamota, miel',
    sn: 'Ralladura de limón, té verde, fruta tropical, vainilla',
    bf: 'Cuerpo sedoso, acidez brillante, final floral largo, limpio',
    ch: 'Exótico, floral y refinado, complejo',
  },
);

addMaps(
  'Dark chocolate (+), roasted hazelnut, caramel, cocoa||Orange peel, apple, almond, dried fig||Medium body, creamy texture, almond finish, medium acidity||Classic, soft and balanced, sweet-bitter harmony',
  {
    dn: 'Zartbitterschokolade (+), geröstete Haselnuss, Karamell, Kakao',
    sn: 'Orangenschale, Apfel, Mandel, getrocknete Feige',
    bf: 'Mittlerer Körper, cremige Textur, Mandelfinish, mittlere Säure',
    ch: 'Klassisch, weich und ausgewogen, süß-bittere Harmonie',
  },
  {
    dn: 'Chocolat noir (+), noisette torréfiée, caramel, cacao',
    sn: 'Zeste d’orange, pomme, amande, figue sèche',
    bf: 'Corps moyen, texture crémeuse, finale amande, acidité moyenne',
    ch: 'Classique, doux et équilibré, harmonie sucré-amer',
  },
  {
    dn: 'Chocolate negro (+), avellana tostada, caramelo, cacao',
    sn: 'Cáscara de naranja, manzana, almendra, higo seco',
    bf: 'Cuerpo medio, textura cremosa, final a almendra, acidez media',
    ch: 'Clásico, suave y equilibrado, armonía dulce-amarga',
  },
);

addMaps(
  'Caramel (+), milk chocolate, almond, dried apricot||Apple, vanilla, light orange, muscovado sugar||Medium body, creamy texture, cocoa finish, balanced acidity||Balanced, round and sweet, stable',
  {
    dn: 'Karamell (+), Milchschokolade, Mandel, getrocknete Aprikose',
    sn: 'Apfel, Vanille, leichte Orange, Muscovado-Zucker',
    bf: 'Mittlerer Körper, cremige Textur, Kakaofinish, ausgewogene Säure',
    ch: 'Ausgewogen, rund und süß, stabil',
  },
  {
    dn: 'Caramel (+), chocolat au lait, amande, abricot sec',
    sn: 'Pomme, vanille, orange légère, sucre muscovado',
    bf: 'Corps moyen, texture crémeuse, finale cacao, acidité équilibrée',
    ch: 'Équilibré, rond et sucré, stable',
  },
  {
    dn: 'Caramelo (+), chocolate con leche, almendra, albaricoque seco',
    sn: 'Manzana, vainilla, naranja ligera, azúcar muscovado',
    bf: 'Cuerpo medio, textura cremosa, final a cacao, acidez equilibrada',
    ch: 'Equilibrado, redondo y dulce, estable',
  },
);

addMaps(
  'Caramel (+), milk chocolate, almond, dried apricot||Apple, grape, vanilla, light orange||Medium body, creamy texture, cocoa finish, balanced acidity||Classic, balanced and round, sweet-bitter harmony',
  {
    dn: 'Karamell (+), Milchschokolade, Mandel, getrocknete Aprikose',
    sn: 'Apfel, Traube, Vanille, leichte Orange',
    bf: 'Mittlerer Körper, cremige Textur, Kakaofinish, ausgewogene Säure',
    ch: 'Klassisch, ausgewogen und rund, süß-bittere Harmonie',
  },
  {
    dn: 'Caramel (+), chocolat au lait, amande, abricot sec',
    sn: 'Pomme, raisin, vanille, orange légère',
    bf: 'Corps moyen, texture crémeuse, finale cacao, acidité équilibrée',
    ch: 'Classique, équilibré et rond, harmonie sucré-amer',
  },
  {
    dn: 'Caramelo (+), chocolate con leche, almendra, albaricoque seco',
    sn: 'Manzana, uva, vainilla, naranja ligera',
    bf: 'Cuerpo medio, textura cremosa, final a cacao, acidez equilibrada',
    ch: 'Clásico, equilibrado y redondo, armonía dulce-amarga',
  },
);

addMaps(
  'Caramel (+), milk chocolate, almond, dried fig||Apple, grape, vanilla, light orange||Medium body, creamy texture, cocoa finish, balanced acidity||Classic, balanced and round, sweet-bitter harmony',
  {
    dn: 'Karamell (+), Milchschokolade, Mandel, getrocknete Feige',
    sn: 'Apfel, Traube, Vanille, leichte Orange',
    bf: 'Mittlerer Körper, cremige Textur, Kakaofinish, ausgewogene Säure',
    ch: 'Klassisch, ausgewogen und rund, süß-bittere Harmonie',
  },
  {
    dn: 'Caramel (+), chocolat au lait, amande, figue sèche',
    sn: 'Pomme, raisin, vanille, orange légère',
    bf: 'Corps moyen, texture crémeuse, finale cacao, acidité équilibrée',
    ch: 'Classique, équilibré et rond, harmonie sucré-amer',
  },
  {
    dn: 'Caramelo (+), chocolate con leche, almendra, higo seco',
    sn: 'Manzana, uva, vainilla, naranja ligera',
    bf: 'Cuerpo medio, textura cremosa, final a cacao, acidez equilibrada',
    ch: 'Clásico, equilibrado y redondo, armonía dulce-amarga',
  },
);

addMaps(
  'Caramel (+), milk chocolate, almond, dried fig||Apple, grape, vanilla, light orange||Medium-full body, creamy texture, long finish, balanced acidity||Classic, balanced and round, sweet-bitter harmony',
  {
    dn: 'Karamell (+), Milchschokolade, Mandel, getrocknete Feige',
    sn: 'Apfel, Traube, Vanille, leichte Orange',
    bf: 'Mittel bis voller Körper, cremige Textur, langes Finish, ausgewogene Säure',
    ch: 'Klassisch, ausgewogen und rund, süß-bittere Harmonie',
  },
  {
    dn: 'Caramel (+), chocolat au lait, amande, figue sèche',
    sn: 'Pomme, raisin, vanille, orange légère',
    bf: 'Corps moyen à plein, texture crémeuse, finale longue, acidité équilibrée',
    ch: 'Classique, équilibré et rond, harmonie sucré-amer',
  },
  {
    dn: 'Caramelo (+), chocolate con leche, almendra, higo seco',
    sn: 'Manzana, uva, vainilla, naranja ligera',
    bf: 'Cuerpo medio-pleno, textura cremosa, final largo, acidez equilibrada',
    ch: 'Clásico, equilibrado y redondo, armonía dulce-amarga',
  },
);

addMaps(
  'Tropical fruit, floral aromas, honey, banana||Intense sweetness, vanilla, caramel, light chocolate||Medium-full body, satiny texture, long finish, balanced acidity||Complex, sweet and floral, stable',
  {
    dn: 'Tropische Frucht, florale Aromen, Honig, Banane',
    sn: 'Intensive Süße, Vanille, Karamell, leichte Schokolade',
    bf: 'Mittel bis voller Körper, satinierte Textur, langes Finish, ausgewogene Säure',
    ch: 'Komplex, süß und blumig, stabil',
  },
  {
    dn: 'Fruit tropical, arômes floraux, miel, banane',
    sn: 'Douceur intense, vanille, caramel, chocolat léger',
    bf: 'Corps moyen à plein, texture satinée, finale longue, acidité équilibrée',
    ch: 'Complexe, sucré et floral, stable',
  },
  {
    dn: 'Fruta tropical, aromas florales, miel, plátano',
    sn: 'Dulzor intenso, vainilla, caramelo, chocolate ligero',
    bf: 'Cuerpo medio-pleno, textura aterciopelada, final largo, acidez equilibrada',
    ch: 'Complejo, dulce y floral, estable',
  },
);

addMaps(
  'Caramel (+), milk chocolate, almond, dried grape||Apple, light floral notes, vanilla, muscovado sugar||Medium body, creamy texture, clean finish, balanced acidity||Classic, balanced and round, clean and pure',
  {
    dn: 'Karamell (+), Milchschokolade, Mandel, Trockenbeere',
    sn: 'Apfel, leichte florale Noten, Vanille, Muscovado-Zucker',
    bf: 'Mittlerer Körper, cremige Textur, sauberes Finish, ausgewogene Säure',
    ch: 'Klassisch, ausgewogen und rund, klar und rein',
  },
  {
    dn: 'Caramel (+), chocolat au lait, amande, raisin sec',
    sn: 'Pomme, notes florales légères, vanille, sucre muscovado',
    bf: 'Corps moyen, texture crémeuse, finale nette, acidité équilibrée',
    ch: 'Classique, équilibré et rond, net et pur',
  },
  {
    dn: 'Caramelo (+), chocolate con leche, almendra, uva pasa',
    sn: 'Manzana, notas florales ligeras, vainilla, azúcar muscovado',
    bf: 'Cuerpo medio, textura cremosa, final limpio, acidez equilibrada',
    ch: 'Clásico, equilibrado y redondo, limpio y puro',
  },
);

addMaps(
  'Chocolate (+), caramel, almond, dried grape||Apple, vanilla, honey, light floral||Medium body, smooth texture, balanced finish, soft acidity||Classic, balanced and round, sweet-bitter harmony',
  {
    dn: 'Schokolade (+), Karamell, Mandel, Trockenbeere',
    sn: 'Apfel, Vanille, Honig, leichte florale Noten',
    bf: 'Mittlerer Körper, samtige Textur, ausgewogenes Finish, weiche Säure',
    ch: 'Klassisch, ausgewogen und rund, süß-bittere Harmonie',
  },
  {
    dn: 'Chocolat (+), caramel, amande, raisin sec',
    sn: 'Pomme, vanille, miel, floral léger',
    bf: 'Corps moyen, texture souple, finale équilibrée, acidité douce',
    ch: 'Classique, équilibré et rond, harmonie sucré-amer',
  },
  {
    dn: 'Chocolate (+), caramelo, almendra, uva pasa',
    sn: 'Manzana, vainilla, miel, floral ligero',
    bf: 'Cuerpo medio, textura suave, final equilibrado, acidez suave',
    ch: 'Clásico, equilibrado y redondo, armonía dulce-amarga',
  },
);

addMaps(
  'Caramel, chocolate, hazelnut, apple||Fruity acidity, vanilla, almond, honey||Medium body, smooth texture, sweet finish, balanced acidity||Balanced, soft and round, stable',
  {
    dn: 'Karamell, Schokolade, Haselnuss, Apfel',
    sn: 'Fruchtige Säure, Vanille, Mandel, Honig',
    bf: 'Mittlerer Körper, samtige Textur, süßes Finish, ausgewogene Säure',
    ch: 'Ausgewogen, weich und rund, stabil',
  },
  {
    dn: 'Caramel, chocolat, noisette, pomme',
    sn: 'Acidité fruitée, vanille, amande, miel',
    bf: 'Corps moyen, texture souple, finale sucrée, acidité équilibrée',
    ch: 'Équilibré, doux et rond, stable',
  },
  {
    dn: 'Caramelo, chocolate, avellana, manzana',
    sn: 'Acidez afrutada, vainilla, almendra, miel',
    bf: 'Cuerpo medio, textura suave, final dulce, acidez equilibrada',
    ch: 'Equilibrado, suave y redondo, estable',
  },
);

addMaps(
  'Caramel (+), chocolate, almond, dried fig||Apple, grape, vanilla, light orange||Medium body, smooth texture, balanced finish, soft acidity||Classic, balanced and round, sweet-bitter harmony',
  {
    dn: 'Karamell (+), Schokolade, Mandel, getrocknete Feige',
    sn: 'Apfel, Traube, Vanille, leichte Orange',
    bf: 'Mittlerer Körper, samtige Textur, ausgewogenes Finish, weiche Säure',
    ch: 'Klassisch, ausgewogen und rund, süß-bittere Harmonie',
  },
  {
    dn: 'Caramel (+), chocolat, amande, figue sèche',
    sn: 'Pomme, raisin, vanille, orange légère',
    bf: 'Corps moyen, texture souple, finale équilibrée, acidité douce',
    ch: 'Classique, équilibré et rond, harmonie sucré-amer',
  },
  {
    dn: 'Caramelo (+), chocolate, almendra, higo seco',
    sn: 'Manzana, uva, vainilla, naranja ligera',
    bf: 'Cuerpo medio, textura suave, final equilibrado, acidez suave',
    ch: 'Clásico, equilibrado y redondo, armonía dulce-amarga',
  },
);

function sig(row) {
  return [row.dominantNotes, row.supportingNotes, row.bodyFinish, row.character].join('||');
}

function emitFile(lang, map, rows, comment) {
  const lines = [
    `import type { Dict } from './types';`,
    ``,
    `/** ${comment} */`,
    `export const ${lang}MasterTastingBySlug: Dict = {`,
  ];
  for (const row of rows) {
    const tr = map.get(sig(row));
    if (!tr) {
      throw new Error(`Missing ${lang} template for signature: ${sig(row).slice(0, 80)}… slug=${row.slug}`);
    }
    lines.push(`  '${esc(row.slug)}': {`);
    lines.push(`    dominantNotes: '${esc(tr.dn)}',`);
    lines.push(`    supportingNotes: '${esc(tr.sn)}',`);
    lines.push(`    bodyFinish: '${esc(tr.bf)}',`);
    lines.push(`    character: '${esc(tr.ch)}',`);
    lines.push(`  },`);
  }
  lines.push(`};`);
  lines.push(``);
  return lines.join('\n');
}

function main() {
  const enSrc = readFileSync(enPath, 'utf8');
  const rows = parseEnSlugs(enSrc);
  const deMap = T.de;
  const frMap = T.fr;
  const esMap = T.es;

  const outDe = join(root, 'src/i18n/localePartials/de-masterTasting.ts');
  const outFr = join(root, 'src/i18n/localePartials/fr-masterTasting.ts');
  const outEs = join(root, 'src/i18n/localePartials/es-masterTasting.ts');

  writeFileSync(
    outDe,
    emitFile(
      'de',
      deMap,
      rows,
      'Venezuela Coffee Master — Deutsch. Generiert: scripts/emit-master-tasting-de-fr-es.mjs',
    ),
    'utf8',
  );
  writeFileSync(
    outFr,
    emitFile(
      'fr',
      frMap,
      rows,
      'Venezuela Coffee Master — Français. Généré : scripts/emit-master-tasting-de-fr-es.mjs',
    ),
    'utf8',
  );
  writeFileSync(
    outEs,
    emitFile(
      'es',
      esMap,
      rows,
      'Venezuela Coffee Master — Español. Generado: scripts/emit-master-tasting-de-fr-es.mjs',
    ),
    'utf8',
  );

  console.log('OK', rows.length, 'slugs → de, fr, es');
}

main();
