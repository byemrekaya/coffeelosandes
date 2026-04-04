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
        value: 'Syrupy (+), jasmine, white flowers, kiwi',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Berries (Rubus), strawberry, red fruits, guava, peach',
      },
      {
        labelKey: 'bodyFinish',
        value:
          'Buttery body, roasted hazelnut, white sugar, caramel, chocolate, dark chocolate, cocoa',
      },
      {
        labelKey: 'character',
        value: 'Elegant, floral, citrus-forward and structured',
      },
    ],
    'tabi-90-38': [
      {
        labelKey: 'dominantNotes',
        value: 'Dulce de leche, cachapa (corn pancake), caramelized coconut',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Sweet cocoa, white chocolate, cane sugar, coffee caramel',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Soft body, sweet and long finish, Cosette',
      },
      {
        labelKey: 'character',
        value: 'Fruity, cocoa-driven, balanced and complex',
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
        value: 'Apricot, syrup, orange blossom, shortbread',
      },
      {
        labelKey: 'sweetness',
        value: 'Brown sugar, caramel, dulce de leche (arequipe)',
      },
      {
        labelKey: 'character',
        value: 'Roasted almond, cedar, stone fruits',
      },
      {
        labelKey: 'finish',
        value: 'Brown spices and cocoa nibs',
      },
    ],
    'castillo-naranjal-88-83': [
      {
        labelKey: 'dominantNotes',
        value: "Baker's chocolate, caramelized coconut, cherry",
      },
      {
        labelKey: 'sweetness',
        value: 'Dulce de leche, cane sugar, caramel',
      },
      {
        labelKey: 'character',
        value: 'Almond, hazelnut, brown spices',
      },
      {
        labelKey: 'body',
        value: 'Creamy body, cocoa and cocoa nibs',
      },
    ],
    'monteclaro-88-75': [
      {
        labelKey: 'dominantNotes',
        value: 'Bergamot, red fruits, peach',
      },
      {
        labelKey: 'sweetness',
        value: 'Brown sugar, cane sugar, caramel, milk chocolate',
      },
      {
        labelKey: 'character',
        value: 'Roasted almond, brown spices, delicate herbal notes',
      },
      {
        labelKey: 'acidity',
        value: 'Citric acidity with a sweet finish',
      },
    ],
    'inia-01-88-73': [
      {
        labelKey: 'dominantNotes',
        value: 'Blueberry, strawberry, fresh cherry, peach',
      },
      {
        labelKey: 'sweetness',
        value: 'Dulce de leche, brown sugar, caramel',
      },
      {
        labelKey: 'character',
        value: 'Cardamom, caraway, tarragon, exotic floral tones',
      },
      {
        labelKey: 'structure',
        value: 'Soft body, delicate herbal and spicy notes',
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
        value: 'Chocolate, roasted hazelnut and caramel',
      },
      {
        labelKey: 'fruityTouch',
        value: 'Plum (ciruela), loquat (níspero) and peach',
      },
      {
        labelKey: 'aromaticCharacter',
        value: 'Intense floral tones and a lightly spicy structure',
      },
      {
        labelKey: 'acidityBody',
        value: 'Medium acidity, balanced body for espresso, smooth mouthfeel',
      },
    ],
    'mixed-series-82-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Cocoa and nutty',
      },
      {
        labelKey: 'character',
        value: 'Mild and neutral',
      },
      {
        labelKey: 'experience',
        value: 'Smooth, clean cup; consistent profile cup after cup',
      },
      {
        labelKey: 'usageArea',
        value: 'Ideal for value-focused operations and blend bases',
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
        value: 'Sirupartig (+), Jasmin, weiße Blüten, Kiwi',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Waldbeeren (Rubus), Erdbeere, rote Früchte, Guave, Pfirsich',
      },
      {
        labelKey: 'bodyFinish',
        value:
          'Buttriger Körper, geröstete Haselnuss, weißer Zucker, Karamel, Schokolade, bittere Schokolade, Kakao',
      },
      {
        labelKey: 'character',
        value: 'Elegant, blumig, zitrusbetont und strukturiert',
      },
    ],
    'tabi-90-38': [
      {
        labelKey: 'dominantNotes',
        value: 'Dulce de Leche, Cachapa (Mais-Pfannkuchen), karamellisierte Kokosnuss',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Süßer Kakao, weiße Schokolade, Rohrzucker, Kaffeekaramel',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Weicher Körper, süßer und langer Abgang, Cosette',
      },
      {
        labelKey: 'character',
        value: 'Fruchtig, kakaobetont, ausgewogen und komplex',
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
        value: 'Aprikose, Sirup, Orangenblüte, Buttergebäck',
      },
      {
        labelKey: 'sweetness',
        value: 'Brauner Zucker, Karamel, Dulce de Leche (Arequipe)',
      },
      {
        labelKey: 'character',
        value: 'Geröstete Mandel, Zeder, Steinobst',
      },
      {
        labelKey: 'finish',
        value: 'Braune Gewürze und Kakaonibs',
      },
    ],
    'castillo-naranjal-88-83': [
      {
        labelKey: 'dominantNotes',
        value: 'Backkakao-Schokolade, karamellisierte Kokosnuss, Kirsche',
      },
      {
        labelKey: 'sweetness',
        value: 'Dulce de Leche, Rohrzucker, Karamel',
      },
      {
        labelKey: 'character',
        value: 'Mandel, Haselnuss, braune Gewürze',
      },
      {
        labelKey: 'body',
        value: 'Cremiger Körper, Kakao und Kakaonibs',
      },
    ],
    'monteclaro-88-75': [
      {
        labelKey: 'dominantNotes',
        value: 'Bergamotte, rote Früchte, Pfirsich',
      },
      {
        labelKey: 'sweetness',
        value: 'Brauner Zucker, Rohrzucker, Karamel, Milchschokolade',
      },
      {
        labelKey: 'character',
        value: 'Geröstete Mandel, braune Gewürze, feine herbale Noten',
      },
      {
        labelKey: 'acidity',
        value: 'Zitronige Säure mit süßem Abgang',
      },
    ],
    'inia-01-88-73': [
      {
        labelKey: 'dominantNotes',
        value: 'Heidelbeere, Erdbeere, frische Kirsche, Pfirsich',
      },
      {
        labelKey: 'sweetness',
        value: 'Dulce de Leche, brauner Zucker, Karamel',
      },
      {
        labelKey: 'character',
        value: 'Kardamom, Kümmel, Estragon, exotische florale Töne',
      },
      {
        labelKey: 'structure',
        value: 'Weicher Körper, feine herbale und würzige Noten',
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
        value: 'Schokolade, geröstete Haselnuss und Karamel',
      },
      {
        labelKey: 'fruityTouch',
        value: 'Pflaume (Ciruela), Mispel (Níspero) und Pfirsich',
      },
      {
        labelKey: 'aromaticCharacter',
        value: 'Intensive florale Töne und leicht würzige Struktur',
      },
      {
        labelKey: 'acidityBody',
        value: 'Mittlere Säure, ausgewogener Körper für Espresso, samige Textur',
      },
    ],
    'mixed-series-82-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Kakao und nussig',
      },
      {
        labelKey: 'character',
        value: 'Mild und neutral',
      },
      {
        labelKey: 'experience',
        value: 'Sanfte, klare Tasse; konsistent von Tasse zu Tasse',
      },
      {
        labelKey: 'usageArea',
        value: 'Ideal für preisbewusste Betriebe und Blend-Basen',
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
        value: 'Sirupeux (+), jasmin, fleurs blanches, kiwi',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Baies (Rubus), fraise, fruits rouges, goyave, pêche',
      },
      {
        labelKey: 'bodyFinish',
        value:
          'Corps beurré, noisette grillée, sucre blanc, caramel, chocolat, chocolat noir, cacao',
      },
      {
        labelKey: 'character',
        value: 'Élégant, floral, axé agrumes et structuré',
      },
    ],
    'tabi-90-38': [
      {
        labelKey: 'dominantNotes',
        value: 'Dulce de leche, cachapa (galette de maïs), noix de coco caramélisée',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Cacao doux, chocolat blanc, sucre de canne, caramel café',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Corps souple, finale douce et longue, Cosette',
      },
      {
        labelKey: 'character',
        value: 'Fruité, centré cacao, équilibré et complexe',
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
        value: 'Abricot, sirop, fleur d’oranger, sablé',
      },
      {
        labelKey: 'sweetness',
        value: 'Sucre roux, caramel, dulce de leche (arequipe)',
      },
      {
        labelKey: 'character',
        value: 'Amande grillée, cèdre, fruits à noyau',
      },
      {
        labelKey: 'finish',
        value: 'Épices brunes et éclats de cacao',
      },
    ],
    'castillo-naranjal-88-83': [
      {
        labelKey: 'dominantNotes',
        value: 'Chocolat de boulanger, noix de coco caramélisée, cerise',
      },
      {
        labelKey: 'sweetness',
        value: 'Dulce de leche, sucre de canne, caramel',
      },
      {
        labelKey: 'character',
        value: 'Amande, noisette, épices brunes',
      },
      {
        labelKey: 'body',
        value: 'Corps crémeux, cacao et éclats de cacao',
      },
    ],
    'monteclaro-88-75': [
      {
        labelKey: 'dominantNotes',
        value: 'Bergamote, fruits rouges, pêche',
      },
      {
        labelKey: 'sweetness',
        value: 'Sucre roux, sucre de canne, caramel, chocolat au lait',
      },
      {
        labelKey: 'character',
        value: 'Amande grillée, épices brunes, notes herbacées fines',
      },
      {
        labelKey: 'acidity',
        value: 'Acidité citrique avec une finale douce',
      },
    ],
    'inia-01-88-73': [
      {
        labelKey: 'dominantNotes',
        value: 'Myrtille, fraise, cerise fraîche, pêche',
      },
      {
        labelKey: 'sweetness',
        value: 'Dulce de leche, sucre roux, caramel',
      },
      {
        labelKey: 'character',
        value: 'Cardamome, carvi, estragon, tons floraux exotiques',
      },
      {
        labelKey: 'structure',
        value: 'Corps souple, notes herbacées et épicées fines',
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
        value: 'Chocolat, noisette grillée et caramel',
      },
      {
        labelKey: 'fruityTouch',
        value: 'Prune (ciruela), nèfle du Japon (níspero) et pêche',
      },
      {
        labelKey: 'aromaticCharacter',
        value: 'Floral intense et structure légèrement épicée',
      },
      {
        labelKey: 'acidityBody',
        value: 'Acidité moyenne, corps équilibré pour espresso, texture souple',
      },
    ],
    'mixed-series-82-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Cacao et noisette',
      },
      {
        labelKey: 'character',
        value: 'Doux et neutre',
      },
      {
        labelKey: 'experience',
        value: 'Tasse propre et fluide, profil stable à chaque dégustation',
      },
      {
        labelKey: 'usageArea',
        value: 'Idéal pour les volumes et les bases de blend',
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
        value: 'Siroposo (+), jazmín, flores blancas, kiwi',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Frutos del bosque (Rubus), fresa, frutos rojos, guayaba, melocotón',
      },
      {
        labelKey: 'bodyFinish',
        value:
          'Cuerpo mantecoso, avellana tostada, azúcar blanco, caramelo, chocolate, chocolate negro, cacao',
      },
      {
        labelKey: 'character',
        value: 'Elegante, floral, cítrico y con estructura',
      },
    ],
    'tabi-90-38': [
      {
        labelKey: 'dominantNotes',
        value: 'Dulce de leche, cachapa (tortilla de maíz), coco caramelizado',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Cacao dulce, chocolate blanco, azúcar de caña, caramelo a café',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cuerpo suave, final dulce y persistente, Cosette',
      },
      {
        labelKey: 'character',
        value: 'Afrutado, centrado en cacao, equilibrado y complejo',
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
        value: 'Albaricoque, jarabe, azahar, galleta de mantequilla',
      },
      {
        labelKey: 'sweetness',
        value: 'Azúcar moreno, caramelo, dulce de leche (arequipe)',
      },
      {
        labelKey: 'character',
        value: 'Almendra tostada, cedro, frutas de hueso',
      },
      {
        labelKey: 'finish',
        value: 'Especias marrones y nibs de cacao',
      },
    ],
    'castillo-naranjal-88-83': [
      {
        labelKey: 'dominantNotes',
        value: 'Chocolate de panadería, coco caramelizado, cereza',
      },
      {
        labelKey: 'sweetness',
        value: 'Dulce de leche, azúcar de caña, caramelo',
      },
      {
        labelKey: 'character',
        value: 'Almendra, avellana, especias marrones',
      },
      {
        labelKey: 'body',
        value: 'Cuerpo cremoso, cacao y nibs de cacao',
      },
    ],
    'monteclaro-88-75': [
      {
        labelKey: 'dominantNotes',
        value: 'Bergamota, frutos rojos, melocotón',
      },
      {
        labelKey: 'sweetness',
        value: 'Azúcar moreno, azúcar de caña, caramelo, chocolate con leche',
      },
      {
        labelKey: 'character',
        value: 'Almendra tostada, especias marrones, notas herbales finas',
      },
      {
        labelKey: 'acidity',
        value: 'Acidez cítrica con final dulce',
      },
    ],
    'inia-01-88-73': [
      {
        labelKey: 'dominantNotes',
        value: 'Arándano, fresa, cereza fresca, melocotón',
      },
      {
        labelKey: 'sweetness',
        value: 'Dulce de leche, azúcar moreno, caramelo',
      },
      {
        labelKey: 'character',
        value: 'Cardamomo, alcaravea, estragón, tonos florales exóticos',
      },
      {
        labelKey: 'structure',
        value: 'Cuerpo suave, notas herbales y especiadas finas',
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
        value: 'Chocolate, avellana tostada y caramelo',
      },
      {
        labelKey: 'fruityTouch',
        value: 'Ciruela (ciruela), níspero y melocotón',
      },
      {
        labelKey: 'aromaticCharacter',
        value: 'Floral intenso y estructura ligeramente especiada',
      },
      {
        labelKey: 'acidityBody',
        value: 'Acidez media, cuerpo equilibrado para espresso, sensación sedosa',
      },
    ],
    'mixed-series-82-50': [
      {
        labelKey: 'dominantNotes',
        value: 'Cacao y nuez',
      },
      {
        labelKey: 'character',
        value: 'Suave y neutro',
      },
      {
        labelKey: 'experience',
        value: 'Taza limpia y fluida; perfil estable en cada taza',
      },
      {
        labelKey: 'usageArea',
        value: 'Ideal para operaciones por volumen y bases de blend',
      },
    ],
  },
};
