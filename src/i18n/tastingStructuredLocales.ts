import type { TastingStructuredRow } from '../data/tastingStructured';
import type { Locale } from './types';

type NonTr = Exclude<Locale, 'tr'>;

/** Tadım tablosu satırları — TR kaynağı dışındaki diller (değer metinleri). */
export const tastingStructuredLocales: Record<NonTr, Record<string, TastingStructuredRow[]>> = {
  en: {
    'geisha-91-54': [
      {
        labelKey: 'dominantNotes',
        value: 'Thai basil (+), champagne, amaretto, cognac',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Winey, fruit cocktail, plum, peach, caramel, confectionery',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cocoa, cocoa nibs, dark chocolate, almond, minty green spices',
      },
      {
        labelKey: 'character',
        value: 'Exotic, floral, highly complex and clean',
      },
    ],
    'geisha-el-recreo-91-03': [
      {
        labelKey: 'dominantNotes',
        value: 'Fruit tea (+), white flowers, honey, yellow peach',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Lemon blossom, muscat grape, light vanilla, lily',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Light-medium body, silky texture, long floral finish, bright acidity',
      },
      {
        labelKey: 'character',
        value: 'Delicate, floral and fruity, elegant',
      },
    ],
    'tabi-90-38': [
      {
        labelKey: 'dominantNotes',
        value: 'Tropical fruits, floral aromas, honey, banana',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Intense sweetness, vanilla, caramel, light chocolate',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Medium-full body, satiny texture, long finish, balanced acidity',
      },
      {
        labelKey: 'character',
        value: 'Complex, sweet and floral, stable',
      },
    ],
    'otra-89-83': [
      {
        labelKey: 'dominantNotes',
        value: 'Bergamot, black tea, peach',
      },
      {
        labelKey: 'sweetness',
        value: 'Cane sugar, caramel, dulce de leche',
      },
      {
        labelKey: 'character',
        value: 'Citrus, jasmine blossom, almond',
      },
      {
        labelKey: 'generalProfile',
        value: 'Complex, elegant, sweet and gently spiced',
      },
    ],
    'villanueva-89-05': [
      {
        labelKey: 'dominantNotes',
        value: 'Caramel, chocolate, hazelnut, apple',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Fruity acidity, vanilla, almond, honey',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Medium body, smooth texture, sweet finish, balanced acidity',
      },
      {
        labelKey: 'character',
        value: 'Balanced, soft and round, stable',
      },
    ],
    'castillo-naranjal-88-83': [
      {
        labelKey: 'dominantNotes',
        value: 'Dark chocolate, caramel, hazelnut, orange',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Fruity acidity, vanilla, molasses, light orange',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Medium–full body, creamy texture, cocoa finish, balanced acidity',
      },
      {
        labelKey: 'character',
        value: 'Balanced, complex, stable',
      },
    ],
    'monteclaro-88-75': [
      {
        labelKey: 'dominantNotes',
        value: 'Caramel (+), milk chocolate, almond, dried fig',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Apple, grape, vanilla, light orange',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Medium body, creamy texture, cocoa finish, balanced acidity',
      },
      {
        labelKey: 'character',
        value: 'Classic, balanced and round, sweet–bitter harmony',
      },
    ],
    'inia-01-88-73': [
      {
        labelKey: 'dominantNotes',
        value: 'Caramel (+), milk chocolate, almond, dried apricot',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Apple, vanilla, light orange, muscovado sugar',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Medium body, creamy texture, cocoa finish, balanced acidity',
      },
      {
        labelKey: 'character',
        value: 'Balanced, round and sweet, stable',
      },
    ],
    'bourbon-88-52': [
      {
        labelKey: 'dominantNotes',
        value: 'Berries, fermented cherries, floral',
      },
      {
        labelKey: 'sweetness',
        value: 'Cane sugar, caramel, dark chocolate',
      },
      {
        labelKey: 'character',
        value: 'Cocoa nibs, elegant and complex structure',
      },
      {
        labelKey: 'note',
        value:
          'This coffee is structurally complex; as the cup cools, intensity shifts and layers unfold.',
      },
    ],
    'castillo-las-mesas-84-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Peach, caramel, fig, raisin',
      },
      {
        labelKey: 'character',
        value: 'Light floral, macadamia, sweet aromatics',
      },
      {
        labelKey: 'experience',
        value: 'Distinct, well-defined body',
      },
    ],
    'caturra-la-cuchilla-83-75': [
      {
        labelKey: 'process',
        value: 'Washed',
      },
      {
        labelKey: 'dominantNotes',
        value: 'Maple syrup, chocolate, caramel',
      },
      {
        labelKey: 'character',
        value: 'Spicy tones, peach',
      },
      {
        labelKey: 'experience',
        value: 'Layered, structured cup',
      },
    ],
    'catuai-los-cedros-84': [
      {
        labelKey: 'dominantNotes',
        value: 'Stone fruits, vanilla, plum',
      },
      {
        labelKey: 'acidityBody',
        value: 'Silky body, refreshing citrus acidity',
      },
      {
        labelKey: 'finish',
        value: 'Long finish with deep lemongrass in the aftertaste',
      },
    ],
    'dunamix-blend-83-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Caramel, chocolate, honey, sour cherry',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Fruit acidity, vanilla, hazelnut, orange',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Medium-full body, creamy texture, sweet finish, balanced acidity',
      },
      {
        labelKey: 'character',
        value: 'Balanced, complex, stable',
      },
    ],
    'mixed-series-82-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Chocolate, caramel, hazelnut, general coffee character',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Light fruity, vanilla, almond, honey',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Light-medium body, flat texture, short finish, low acidity',
      },
      {
        labelKey: 'character',
        value: 'Simple, flat, everyday drinking',
      },
    ],
    'cafe-1600-catimor': [
      {
        labelKey: 'dominantNotes',
        value: 'Honey, caramel, green apple, floral aromas',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Fruit acidity, vanilla, almond, light spice',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Medium body, smooth texture, sweet finish, lively acidity',
      },
      {
        labelKey: 'character',
        value: 'Balanced, fresh and lively, stable',
      },
    ],
  },
  de: {
    'geisha-91-54': [
      {
        labelKey: 'dominantNotes',
        value: 'Thai-Basilikum (+), Champagner, Amaretto, Cognac',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Weinige Noten, Fruchtcocktail, Pflaume, Pfirsich, Karamel, Süßwaren',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Kakao, Kakaonibs, bittere Schokolade, Mandel, minzige grüne Gewürze',
      },
      {
        labelKey: 'character',
        value: 'Exotisch, blumig, sehr komplex und klar',
      },
    ],
    'geisha-el-recreo-91-03': [
      {
        labelKey: 'dominantNotes',
        value: 'Früchtetee (+), weiße Blüten, Honig, gelber Pfirsich',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Zitronenblüte, Muskattraube, leichte Vanille, Lilie',
      },
      {
        labelKey: 'bodyFinish',
        value:
          'Leicht bis mittlerer Körper, seidige Textur, langer floraler Abgang, lebendige Säure',
      },
      {
        labelKey: 'character',
        value: 'Zart, blumig und fruchtig, elegant',
      },
    ],
    'tabi-90-38': [
      {
        labelKey: 'dominantNotes',
        value: 'Tropische Früchte, florale Aromen, Honig, Banane',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Intensive Süße, Vanille, Karamel, leichte Schokolade',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Mittel bis voller Körper, satinierte Textur, langer Abgang, ausgewogene Säure',
      },
      {
        labelKey: 'character',
        value: 'Komplex, süß und blumig, stabil',
      },
    ],
    'otra-89-83': [
      {
        labelKey: 'dominantNotes',
        value: 'Bergamotte, schwarzer Tee, Pfirsich',
      },
      {
        labelKey: 'sweetness',
        value: 'Rohrzucker, Karamel, Dulce de Leche',
      },
      {
        labelKey: 'character',
        value: 'Zitrus, Jasminblüte, Mandel',
      },
      {
        labelKey: 'generalProfile',
        value: 'Komplex, elegant, süß und mild gewürzt',
      },
    ],
    'villanueva-89-05': [
      {
        labelKey: 'dominantNotes',
        value: 'Karamel, Schokolade, Haselnuss, Apfel',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Fruchtige Säure, Vanille, Mandel, Honig',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Mittlerer Körper, geschmeidige Textur, süßer Abgang, ausgewogene Säure',
      },
      {
        labelKey: 'character',
        value: 'Ausgewogen, weich und rund, stabil',
      },
    ],
    'castillo-naranjal-88-83': [
      {
        labelKey: 'dominantNotes',
        value: 'Dunkle Schokolade, Karamel, Haselnuss, Orange',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Fruchtige Säure, Vanille, Melasse, leichte Orange',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Mittlerer bis voller Körper, cremige Textur, Kakao-Abgang, ausgewogene Säure',
      },
      {
        labelKey: 'character',
        value: 'Ausgewogen, komplex, stabil',
      },
    ],
    'monteclaro-88-75': [
      {
        labelKey: 'dominantNotes',
        value: 'Karamel (+), Milchschokolade, Mandel, getrocknete Feige',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Apfel, Traube, Vanille, leichte Orange',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Mittlerer Körper, cremige Textur, Kakao-Abgang, ausgewogene Säure',
      },
      {
        labelKey: 'character',
        value: 'Klassisch, ausgewogen und rund, süß-bitteres Gleichgewicht',
      },
    ],
    'inia-01-88-73': [
      {
        labelKey: 'dominantNotes',
        value: 'Karamel (+), Milchschokolade, Mandel, getrocknete Aprikose',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Apfel, Vanille, leichte Orange, Muscovado-Zucker',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Mittlerer Körper, cremige Textur, Kakao-Abgang, ausgewogene Säure',
      },
      {
        labelKey: 'character',
        value: 'Ausgewogen, rund und süß, stabil',
      },
    ],
    'bourbon-88-52': [
      {
        labelKey: 'dominantNotes',
        value: 'Waldbeeren, fermentierte Kirschen, blumig',
      },
      {
        labelKey: 'sweetness',
        value: 'Rohrzucker, Karamel, bittere Schokolade',
      },
      {
        labelKey: 'character',
        value: 'Kakaonibs, elegante und komplexe Struktur',
      },
      {
        labelKey: 'note',
        value:
          'Strukturell komplex: Mit abkühlender Tasse verändert sich die Intensität und neue Schichten öffnen sich.',
      },
    ],
    'castillo-las-mesas-84-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Pfirsich, Karamel, Feige, Rosine',
      },
      {
        labelKey: 'character',
        value: 'Leicht blumig, Macadamia, süße Aromatik',
      },
      {
        labelKey: 'experience',
        value: 'Deutlich, klar definierter Körper',
      },
    ],
    'caturra-la-cuchilla-83-75': [
      {
        labelKey: 'process',
        value: 'Gewaschen (Washed)',
      },
      {
        labelKey: 'dominantNotes',
        value: 'Ahornsirup, Schokolade, Karamel',
      },
      {
        labelKey: 'character',
        value: 'Würzige Töne, Pfirsich',
      },
      {
        labelKey: 'experience',
        value: 'Geschichtet, strukturierte Tasse',
      },
    ],
    'catuai-los-cedros-84': [
      {
        labelKey: 'dominantNotes',
        value: 'Steinobst, Vanille, Pflaume',
      },
      {
        labelKey: 'acidityBody',
        value: 'Seidiger Körper, erfrischende Zitrus-Säure',
      },
      {
        labelKey: 'finish',
        value: 'Langer Abgang mit tiefer Zitronengras-Note im Nachgeschmack',
      },
    ],
    'dunamix-blend-83-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Karamel, Schokolade, Honig, Sauerkirsche',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Fruchtsäure, Vanille, Haselnuss, Orange',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Mittel bis voller Körper, cremige Textur, süßer Abgang, ausgewogene Säure',
      },
      {
        labelKey: 'character',
        value: 'Ausgewogen, komplex, stabil',
      },
    ],
    'mixed-series-82-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Schokolade, Karamel, Haselnuss, allgemeiner Kaffecharakter',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Leicht fruchtig, Vanille, Mandel, Honig',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Leicht bis mittlerer Körper, flache Textur, kurzer Abgang, niedrige Säure',
      },
      {
        labelKey: 'character',
        value: 'Einfach, flach, Alltagsgenuss',
      },
    ],
    'cafe-1600-catimor': [
      {
        labelKey: 'dominantNotes',
        value: 'Honig, Karamel, grüner Apfel, florale Aromen',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Fruchtsäure, Vanille, Mandel, leichte Würze',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Mittlerer Körper, geschmeidige Textur, süßer Abgang, lebendige Säure',
      },
      {
        labelKey: 'character',
        value: 'Ausgewogen, frisch und lebendig, stabil',
      },
    ],
  },
  fr: {
    'geisha-91-54': [
      {
        labelKey: 'dominantNotes',
        value: 'Basilic thaï (+), champagne, amaretto, cognac',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Vinifié, cocktail de fruits, prune, pêche, caramel, confiseries',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cacao, éclats de cacao, chocolat noir, amande, épices vertes mentholées',
      },
      {
        labelKey: 'character',
        value: 'Exotique, floral, très complexe et limpide',
      },
    ],
    'geisha-el-recreo-91-03': [
      {
        labelKey: 'dominantNotes',
        value: 'Thé aux fruits (+), fleurs blanches, miel, pêche jaune',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Fleur de citronnier, raisin muscat, vanille légère, lys',
      },
      {
        labelKey: 'bodyFinish',
        value:
          'Corps léger à moyen, texture soyeuse, longue finale florale, acidité vive',
      },
      {
        labelKey: 'character',
        value: 'Délicat, floral et fruité, élégant',
      },
    ],
    'tabi-90-38': [
      {
        labelKey: 'dominantNotes',
        value: 'Fruits tropicaux, arômes floraux, miel, banane',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Douceur intense, vanille, caramel, chocolat léger',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Corps moyen à plein, texture satinée, longue finale, acidité équilibrée',
      },
      {
        labelKey: 'character',
        value: 'Complexe, doux et floral, stable',
      },
    ],
    'otra-89-83': [
      {
        labelKey: 'dominantNotes',
        value: 'Bergamote, thé noir, pêche',
      },
      {
        labelKey: 'sweetness',
        value: 'Sucre de canne, caramel, dulce de leche',
      },
      {
        labelKey: 'character',
        value: 'Agrumes, fleur de jasmin, amande',
      },
      {
        labelKey: 'generalProfile',
        value: 'Complexe, élégant, doux et légèrement épicé',
      },
    ],
    'villanueva-89-05': [
      {
        labelKey: 'dominantNotes',
        value: 'Caramel, chocolat, noisette, pomme',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Acidité fruitée, vanille, amande, miel',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Corps moyen, texture lisse, finale douce, acidité équilibrée',
      },
      {
        labelKey: 'character',
        value: 'Équilibré, doux et rond, stable',
      },
    ],
    'castillo-naranjal-88-83': [
      {
        labelKey: 'dominantNotes',
        value: 'Chocolat noir, caramel, noisette, orange',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Acidité fruitée, vanille, mélasse, orange légère',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Corps moyen à plein, texture crémeuse, finale cacao, acidité équilibrée',
      },
      {
        labelKey: 'character',
        value: 'Équilibré, complexe, stable',
      },
    ],
    'monteclaro-88-75': [
      {
        labelKey: 'dominantNotes',
        value: 'Caramel (+), chocolat au lait, amande, figue sèche',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Pomme, raisin, vanille, orange légère',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Corps moyen, texture crémeuse, finale cacao, acidité équilibrée',
      },
      {
        labelKey: 'character',
        value: 'Classique, équilibré et rond, harmonie sucrée-amère',
      },
    ],
    'inia-01-88-73': [
      {
        labelKey: 'dominantNotes',
        value: 'Caramel (+), chocolat au lait, amande, abricot sec',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Pomme, vanille, orange légère, sucre muscovado',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Corps moyen, texture crémeuse, finale cacao, acidité équilibrée',
      },
      {
        labelKey: 'character',
        value: 'Équilibré, rond et doux, stable',
      },
    ],
    'bourbon-88-52': [
      {
        labelKey: 'dominantNotes',
        value: 'Fruits des bois, cerises fermentées, floral',
      },
      {
        labelKey: 'sweetness',
        value: 'Sucre de canne, caramel, chocolat noir',
      },
      {
        labelKey: 'character',
        value: 'Éclats de cacao, structure élégante et complexe',
      },
      {
        labelKey: 'note',
        value:
          'Café à structure complexe : en refroidissant, l’intensité évolue et des couches apparaissent.',
      },
    ],
    'castillo-las-mesas-84-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Pêche, caramel, figue, raisin sec',
      },
      {
        labelKey: 'character',
        value: 'Léger floral, macadamia, aromatiques doux',
      },
      {
        labelKey: 'experience',
        value: 'Corps net et bien défini',
      },
    ],
    'caturra-la-cuchilla-83-75': [
      {
        labelKey: 'process',
        value: 'Lavé (washed)',
      },
      {
        labelKey: 'dominantNotes',
        value: 'Sirop d’érable, chocolat, caramel',
      },
      {
        labelKey: 'character',
        value: 'Tons épicés, pêche',
      },
      {
        labelKey: 'experience',
        value: 'Tasse structurée et multicouche',
      },
    ],
    'catuai-los-cedros-84': [
      {
        labelKey: 'dominantNotes',
        value: 'Fruits à noyau, vanille, prune',
      },
      {
        labelKey: 'acidityBody',
        value: 'Corps soyeux, acidité citrique rafraîchissante',
      },
      {
        labelKey: 'finish',
        value: 'Longue finale avec citronnelle profonde en rétro-olfaction',
      },
    ],
    'dunamix-blend-83-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Caramel, chocolat, miel, griotte',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Acidité fruitée, vanille, noisette, orange',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Corps moyen à plein, texture crémeuse, finale douce, acidité équilibrée',
      },
      {
        labelKey: 'character',
        value: 'Équilibré, complexe, stable',
      },
    ],
    'mixed-series-82-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Chocolat, caramel, noisette, caractère café général',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Légèrement fruité, vanille, amande, miel',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Corps léger à moyen, texture plate, finale courte, acidité faible',
      },
      {
        labelKey: 'character',
        value: 'Simple, plat, consommation quotidienne',
      },
    ],
    'cafe-1600-catimor': [
      {
        labelKey: 'dominantNotes',
        value: 'Miel, caramel, pomme verte, arômes floraux',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Acidité fruitée, vanille, amande, épice légère',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Corps moyen, texture lisse, finale douce, acidité vive',
      },
      {
        labelKey: 'character',
        value: 'Équilibré, frais et vif, stable',
      },
    ],
  },
  es: {
    'geisha-91-54': [
      {
        labelKey: 'dominantNotes',
        value: 'Albahaca tailandesa (+), champán, amaretto, coñac',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Vinoso, cóctel de frutas, ciruela, melocotón, caramelo, golosinas',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cacao, nib de cacao, chocolate negro, almendra, especias verdes mentoladas',
      },
      {
        labelKey: 'character',
        value: 'Exótico, floral, muy complejo y limpio',
      },
    ],
    'geisha-el-recreo-91-03': [
      {
        labelKey: 'dominantNotes',
        value: 'Té de frutas (+), flores blancas, miel, melocotón amarillo',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Flor de limonero, uva moscatel, vainilla ligera, lirio',
      },
      {
        labelKey: 'bodyFinish',
        value:
          'Cuerpo ligero-medio, textura sedosa, final largo floral, acidez brillante',
      },
      {
        labelKey: 'character',
        value: 'Delicado, floral y afrutado, elegante',
      },
    ],
    'tabi-90-38': [
      {
        labelKey: 'dominantNotes',
        value: 'Frutas tropicales, aromas florales, miel, plátano',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Dulzor intenso, vainilla, caramelo, chocolate ligero',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cuerpo medio-lleno, textura satinada, final largo, acidez equilibrada',
      },
      {
        labelKey: 'character',
        value: 'Complejo, dulce y floral, estable',
      },
    ],
    'otra-89-83': [
      {
        labelKey: 'dominantNotes',
        value: 'Bergamota, té negro, melocotón',
      },
      {
        labelKey: 'sweetness',
        value: 'Azúcar de caña, caramelo, dulce de leche',
      },
      {
        labelKey: 'character',
        value: 'Cítricos, flor de jazmín, almendra',
      },
      {
        labelKey: 'generalProfile',
        value: 'Complejo, elegante, dulce y con especias suaves',
      },
    ],
    'villanueva-89-05': [
      {
        labelKey: 'dominantNotes',
        value: 'Caramelo, chocolate, avellana, manzana',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Acidez afrutada, vainilla, almendra, miel',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cuerpo medio, textura suave, final dulce, acidez equilibrada',
      },
      {
        labelKey: 'character',
        value: 'Equilibrado, suave y redondo, estable',
      },
    ],
    'castillo-naranjal-88-83': [
      {
        labelKey: 'dominantNotes',
        value: 'Chocolate negro, caramelo, avellana, naranja',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Acidez afrutada, vainilla, melaza, naranja ligera',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cuerpo medio-lleno, textura cremosa, final a cacao, acidez equilibrada',
      },
      {
        labelKey: 'character',
        value: 'Equilibrado, complejo, estable',
      },
    ],
    'monteclaro-88-75': [
      {
        labelKey: 'dominantNotes',
        value: 'Caramelo (+), chocolate con leche, almendra, higo seco',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Manzana, uva, vainilla, naranja ligera',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cuerpo medio, textura cremosa, final a cacao, acidez equilibrada',
      },
      {
        labelKey: 'character',
        value: 'Clásico, equilibrado y redondo, armonía dulce-amarga',
      },
    ],
    'inia-01-88-73': [
      {
        labelKey: 'dominantNotes',
        value: 'Caramelo (+), chocolate con leche, almendra, albaricoque seco',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Manzana, vainilla, naranja ligera, azúcar muscovado',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cuerpo medio, textura cremosa, final a cacao, acidez equilibrada',
      },
      {
        labelKey: 'character',
        value: 'Equilibrado, redondo y dulce, estable',
      },
    ],
    'bourbon-88-52': [
      {
        labelKey: 'dominantNotes',
        value: 'Frutos del bosque, cerezas fermentadas, floral',
      },
      {
        labelKey: 'sweetness',
        value: 'Azúcar de caña, caramelo, chocolate negro',
      },
      {
        labelKey: 'character',
        value: 'Nibs de cacao, estructura elegante y compleja',
      },
      {
        labelKey: 'note',
        value:
          'Café de estructura compleja: al enfriarse la taza cambia la intensidad y aparecen capas nuevas.',
      },
    ],
    'castillo-las-mesas-84-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Melocotón, caramelo, higo, uva pasa',
      },
      {
        labelKey: 'character',
        value: 'Ligero floral, macadamia, aromáticos dulces',
      },
      {
        labelKey: 'experience',
        value: 'Cuerpo definido y bien marcado',
      },
    ],
    'caturra-la-cuchilla-83-75': [
      {
        labelKey: 'process',
        value: 'Lavado (washed)',
      },
      {
        labelKey: 'dominantNotes',
        value: 'Jarabe de arce, chocolate, caramelo',
      },
      {
        labelKey: 'character',
        value: 'Tonos especiados, melocotón',
      },
      {
        labelKey: 'experience',
        value: 'Taza en capas y bien estructurada',
      },
    ],
    'catuai-los-cedros-84': [
      {
        labelKey: 'dominantNotes',
        value: 'Frutas de hueso, vainilla, ciruela',
      },
      {
        labelKey: 'acidityBody',
        value: 'Cuerpo sedoso, acidez cítrica refrescante',
      },
      {
        labelKey: 'finish',
        value: 'Final largo con hierba limón profunda en el retrogusto',
      },
    ],
    'dunamix-blend-83-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Caramelo, chocolate, miel, guinda',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Acidez afrutada, vainilla, avellana, naranja',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cuerpo medio-lleno, textura cremosa, final dulce, acidez equilibrada',
      },
      {
        labelKey: 'character',
        value: 'Equilibrado, complejo, estable',
      },
    ],
    'mixed-series-82-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Chocolate, caramelo, avellana, carácter general de café',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Ligero afrutado, vainilla, almendra, miel',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cuerpo ligero-medio, textura plana, final corto, acidez baja',
      },
      {
        labelKey: 'character',
        value: 'Simple, plano, consumo cotidiano',
      },
    ],
    'cafe-1600-catimor': [
      {
        labelKey: 'dominantNotes',
        value: 'Miel, caramelo, manzana verde, aromas florales',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Acidez afrutada, vainilla, almendra, especia ligera',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cuerpo medio, textura suave, final dulce, acidez viva',
      },
      {
        labelKey: 'character',
        value: 'Equilibrado, fresco y vivo, estable',
      },
    ],
  },
};
