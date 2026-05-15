import type { TastingStructuredRow } from '../data/tastingStructured';
import type { Locale } from './types';

type NonTr = Exclude<Locale, 'tr'>;

const tastingStructuredForEnFallback: Record<string, TastingStructuredRow[]> = {
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
    'geisha-90-30': [
      {
        labelKey: 'dominantNotes',
        value: 'Apricot (+), plum, peach, wild berries',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Brown sugar, brandy, cognac, cocoa nibs, caramelized sugar',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Creamy, silky body, chocolate, cocoa, sweet lingering finish',
      },
      {
        labelKey: 'character',
        value: 'Fruity, winey, brown spices, exotic and complex',
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
    'espresso-crema': [
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
};

const tastingStructuredForRu: Record<string, TastingStructuredRow[]> = {
  'geisha-91-54': [
    { labelKey: 'dominantNotes', value: 'Тайский базилик (+), шампанское, амаретто, коньяк' },
    { labelKey: 'supportingNotes', value: 'Вино, фруктовый коктейль, слива, персик, карамель, кондитерские изделия' },
    { labelKey: 'bodyFinish', value: 'Какао, крупка какао, тёмный шоколад, миндаль, мятные зелёные пряности' },
    { labelKey: 'character', value: 'Экзотический, цветочный, высокосложный и чистый' },
  ],
  'geisha-el-recreo-91-03': [
    { labelKey: 'dominantNotes', value: 'Фруктовый чай (+), белые цветы, мёд, жёлтый персик' },
    { labelKey: 'supportingNotes', value: 'Цветок лимона, мускатный виноград, лёгкая ваниль, лилия' },
    { labelKey: 'bodyFinish', value: 'Лёгко-среднее тело, шёлковая текстура, долгое цветочное послевкусие, яркая кислотность' },
    { labelKey: 'character', value: 'Деликатный, цветочный и фруктовый, элегантный' },
  ],
  'tabi-90-38': [
    { labelKey: 'dominantNotes', value: 'Тропические фрукты, цветочные ароматы, мёд, банан' },
    { labelKey: 'supportingNotes', value: 'Насыщенная сладость, ваниль, карамель, лёгкий шоколад' },
    { labelKey: 'bodyFinish', value: 'Средне-полное тело, атласная текстура, долгое послевкусие, сбалансированная кислотность' },
    { labelKey: 'character', value: 'Сложный, сладкий и цветочный, стабильный' },
  ],
  'geisha-90-30': [
    { labelKey: 'dominantNotes', value: 'Абрикос (+), слива, персик, лесные ягоды' },
    { labelKey: 'supportingNotes', value: 'Коричневый сахар, бренди, коньяк, крупка какао, карамелизованный сахар' },
    { labelKey: 'bodyFinish', value: 'Кремовое, шёлковое тело, шоколад, какао, сладкое долгое послевкусие' },
    { labelKey: 'character', value: 'Фруктовый, винный, коричневые пряности, экзотический и сложный' },
  ],
  'otra-89-83': [
    { labelKey: 'dominantNotes', value: 'Бергамот, чёрный чай, персик' },
    { labelKey: 'sweetness', value: 'Тростниковый сахар, карамель, дульсе де лече' },
    { labelKey: 'character', value: 'Цитрус, цветок жасмина, миндаль' },
    { labelKey: 'generalProfile', value: 'Сложный, элегантный, сладкий и деликатно пряный' },
  ],
  'villanueva-89-05': [
    { labelKey: 'dominantNotes', value: 'Карамель, шоколад, фундук, яблоко' },
    { labelKey: 'supportingNotes', value: 'Фруктовая кислотность, ваниль, миндаль, мёд' },
    { labelKey: 'bodyFinish', value: 'Среднее тело, гладкая текстура, сладкое послевкусие, сбалансированная кислотность' },
    { labelKey: 'character', value: 'Сбалансированный, мягкий и округлый, стабильный' },
  ],
  'castillo-naranjal-88-83': [
    { labelKey: 'dominantNotes', value: 'Тёмный шоколад, карамель, фундук, апельсин' },
    { labelKey: 'supportingNotes', value: 'Фруктовая кислотность, ваниль, патока, лёгкий апельсин' },
    { labelKey: 'bodyFinish', value: 'Средне-полное тело, кремовая текстура, послевкусие какао, сбалансированная кислотность' },
    { labelKey: 'character', value: 'Сбалансированный, сложный, стабильный' },
  ],
  'monteclaro-88-75': [
    { labelKey: 'dominantNotes', value: 'Карамель (+), молочный шоколад, миндаль, сушёный инжир' },
    { labelKey: 'supportingNotes', value: 'Яблоко, виноград, ваниль, лёгкий апельсин' },
    { labelKey: 'bodyFinish', value: 'Среднее тело, кремовая текстура, послевкусие какао, сбалансированная кислотность' },
    { labelKey: 'character', value: 'Классический, сбалансированный и округлый, гармония сладкого и горького' },
  ],
  'inia-01-88-73': [
    { labelKey: 'dominantNotes', value: 'Карамель (+), молочный шоколад, миндаль, курага' },
    { labelKey: 'supportingNotes', value: 'Яблоко, ваниль, лёгкий апельсин, мусковадо' },
    { labelKey: 'bodyFinish', value: 'Среднее тело, кремовая текстура, послевкусие какао, сбалансированная кислотность' },
    { labelKey: 'character', value: 'Сбалансированный, округлый и сладкий, стабильный' },
  ],
  'bourbon-88-52': [
    { labelKey: 'dominantNotes', value: 'Ягоды, ферментированные вишни, цветочный' },
    { labelKey: 'sweetness', value: 'Тростниковый сахар, карамель, тёмный шоколад' },
    { labelKey: 'character', value: 'Крупка какао, элегантная и сложная структура' },
    { labelKey: 'note', value: 'Этот кофе структурно сложен; по мере остывания чашки интенсивность меняется и раскрываются слои.' },
  ],
  'castillo-las-mesas-84-50': [
    { labelKey: 'dominantNotes', value: 'Персик, карамель, инжир, изюм' },
    { labelKey: 'character', value: 'Лёгкий цветочный, макадамия, сладкие ароматы' },
    { labelKey: 'experience', value: 'Выразительное, хорошо сформированное тело' },
  ],
  'caturra-la-cuchilla-83-75': [
    { labelKey: 'process', value: 'Мойка' },
    { labelKey: 'dominantNotes', value: 'Кленовый сироп, шоколад, карамель' },
    { labelKey: 'character', value: 'Пряные тона, персик' },
    { labelKey: 'experience', value: 'Многослойная, структурированная чашка' },
  ],
  'catuai-los-cedros-84': [
    { labelKey: 'dominantNotes', value: 'Косточковые фрукты, ваниль, слива' },
    { labelKey: 'acidityBody', value: 'Шёлковое тело, освежающая цитрусовая кислотность' },
    { labelKey: 'finish', value: 'Долгое послевкусие с глубокими нотами лемонграсса' },
  ],
  'dunamix-blend-83-50': [
    { labelKey: 'dominantNotes', value: 'Карамель, шоколад, мёд, кислая вишня' },
    { labelKey: 'supportingNotes', value: 'Фруктовая кислотность, ваниль, фундук, апельсин' },
    { labelKey: 'bodyFinish', value: 'Средне-полное тело, кремовая текстура, сладкое послевкусие, сбалансированная кислотность' },
    { labelKey: 'character', value: 'Сбалансированный, сложный, стабильный' },
  ],
  'mixed-series-82-50': [
    { labelKey: 'dominantNotes', value: 'Шоколад, карамель, фундук, общий кофейный характер' },
    { labelKey: 'supportingNotes', value: 'Лёгкие фрукты, ваниль, миндаль, мёд' },
    { labelKey: 'bodyFinish', value: 'Лёгко-среднее тело, плоская текстура, короткое послевкусие, низкая кислотность' },
    { labelKey: 'character', value: 'Простой, плоский, для повседневного потребления' },
  ],
  'espresso-crema': [
    { labelKey: 'dominantNotes', value: 'Мёд, карамель, зелёное яблоко, цветочные ароматы' },
    { labelKey: 'supportingNotes', value: 'Фруктовая кислотность, ваниль, миндаль, лёгкие пряности' },
    { labelKey: 'bodyFinish', value: 'Среднее тело, гладкая текстура, сладкое послевкусие, живая кислотность' },
    { labelKey: 'character', value: 'Сбалансированный, свежий и живой, стабильный' },
  ],
};

const tastingStructuredForAr: Record<string, TastingStructuredRow[]> = {
  'geisha-91-54': [
    { labelKey: 'dominantNotes', value: 'ريحان تايلندي (+)، شمبانيا، أمارتو، كونياك' },
    { labelKey: 'supportingNotes', value: 'نبيذي، كوكتيل فاكهة، برقوق، خوخ، كراميل، حلويات' },
    { labelKey: 'bodyFinish', value: 'كاكاو، قطع الكاكاو، شوكولاتة داكنة، لوز، بهارات خضراء نعناعية' },
    { labelKey: 'character', value: 'غريب، زهري، معقد للغاية ونظيف' },
  ],
  'geisha-el-recreo-91-03': [
    { labelKey: 'dominantNotes', value: 'شاي الفاكهة (+)، زهور بيضاء، عسل، خوخ أصفر' },
    { labelKey: 'supportingNotes', value: 'زهر الليمون، عنب مسكاتي، فانيليا خفيفة، زنبق' },
    { labelKey: 'bodyFinish', value: 'جسم خفيف-متوسط، قوام حريري، نهاية زهرية طويلة، حموضة مشرقة' },
    { labelKey: 'character', value: 'رقيق، زهري وفاكهي، أنيق' },
  ],
  'tabi-90-38': [
    { labelKey: 'dominantNotes', value: 'فواكه استوائية، عطور زهرية، عسل، موز' },
    { labelKey: 'supportingNotes', value: 'حلاوة مكثفة، فانيليا، كراميل، شوكولاتة خفيفة' },
    { labelKey: 'bodyFinish', value: 'جسم متوسط-ممتلئ، قوام ساتان، نهاية طويلة، حموضة متوازنة' },
    { labelKey: 'character', value: 'معقد، حلو وزهري، ثابت' },
  ],
  'geisha-90-30': [
    { labelKey: 'dominantNotes', value: 'مشمش (+)، برقوق، خوخ، توت بري' },
    { labelKey: 'supportingNotes', value: 'سكر بني، براندي، كونياك، قطع الكاكاو، سكر مكرمل' },
    { labelKey: 'bodyFinish', value: 'جسم كريمي حريري، شوكولاتة، كاكاو، نهاية حلوة طويلة' },
    { labelKey: 'character', value: 'فاكهي، نبيذي، بهارات بنية، غريب ومعقد' },
  ],
  'otra-89-83': [
    { labelKey: 'dominantNotes', value: 'بيرغاموت، شاي أسود، خوخ' },
    { labelKey: 'sweetness', value: 'سكر قصب، كراميل، دولسي دي ليتشي' },
    { labelKey: 'character', value: 'حمضيات، زهر الياسمين، لوز' },
    { labelKey: 'generalProfile', value: 'معقد، أنيق، حلو وبهاري بلطف' },
  ],
  'villanueva-89-05': [
    { labelKey: 'dominantNotes', value: 'كراميل، شوكولاتة، بندق، تفاح' },
    { labelKey: 'supportingNotes', value: 'حموضة فاكهية، فانيليا، لوز، عسل' },
    { labelKey: 'bodyFinish', value: 'جسم متوسط، قوام ناعم، نهاية حلوة، حموضة متوازنة' },
    { labelKey: 'character', value: 'متوازن، ناعم ومدور، ثابت' },
  ],
  'castillo-naranjal-88-83': [
    { labelKey: 'dominantNotes', value: 'شوكولاتة داكنة، كراميل، بندق، برتقال' },
    { labelKey: 'supportingNotes', value: 'حموضة فاكهية، فانيليا، دبس، برتقال خفيف' },
    { labelKey: 'bodyFinish', value: 'جسم متوسط-ممتلئ، قوام كريمي، نهاية الكاكاو، حموضة متوازنة' },
    { labelKey: 'character', value: 'متوازن، معقد، ثابت' },
  ],
  'monteclaro-88-75': [
    { labelKey: 'dominantNotes', value: 'كراميل (+)، شوكولاتة الحليب، لوز، تين مجفف' },
    { labelKey: 'supportingNotes', value: 'تفاح، عنب، فانيليا، برتقال خفيف' },
    { labelKey: 'bodyFinish', value: 'جسم متوسط، قوام كريمي، نهاية الكاكاو، حموضة متوازنة' },
    { labelKey: 'character', value: 'كلاسيكي، متوازن ومدور، انسجام الحلو والمر' },
  ],
  'inia-01-88-73': [
    { labelKey: 'dominantNotes', value: 'كراميل (+)، شوكولاتة الحليب، لوز، مشمش مجفف' },
    { labelKey: 'supportingNotes', value: 'تفاح، فانيليا، برتقال خفيف، موسكوفادو' },
    { labelKey: 'bodyFinish', value: 'جسم متوسط، قوام كريمي، نهاية الكاكاو، حموضة متوازنة' },
    { labelKey: 'character', value: 'متوازن، مدور وحلو، ثابت' },
  ],
  'bourbon-88-52': [
    { labelKey: 'dominantNotes', value: 'توت، كرز مخمر، زهري' },
    { labelKey: 'sweetness', value: 'سكر قصب، كراميل، شوكولاتة داكنة' },
    { labelKey: 'character', value: 'قطع الكاكاو، بنية أنيقة ومعقدة' },
    { labelKey: 'note', value: 'هذه القهوة معقدة هيكلياً؛ مع تبرد الكوب تتحول الشدة وتتكشف الطبقات.' },
  ],
  'castillo-las-mesas-84-50': [
    { labelKey: 'dominantNotes', value: 'خوخ، كراميل، تين، زبيب' },
    { labelKey: 'character', value: 'زهري خفيف، ماكاداميا، عطور حلوة' },
    { labelKey: 'experience', value: 'جسم متميز وواضح التعريف' },
  ],
  'caturra-la-cuchilla-83-75': [
    { labelKey: 'process', value: 'مغسول' },
    { labelKey: 'dominantNotes', value: 'شراب القيقب، شوكولاتة، كراميل' },
    { labelKey: 'character', value: 'نبرات بهارية، خوخ' },
    { labelKey: 'experience', value: 'كوب متعدد الطبقات ومهيكل' },
  ],
  'catuai-los-cedros-84': [
    { labelKey: 'dominantNotes', value: 'فاكهة ذات نواة، فانيليا، برقوق' },
    { labelKey: 'acidityBody', value: 'جسم حريري، حموضة حمضية منعشة' },
    { labelKey: 'finish', value: 'نهاية طويلة مع عمق حشيشة الليمون في النكهة الخلفية' },
  ],
  'dunamix-blend-83-50': [
    { labelKey: 'dominantNotes', value: 'كراميل، شوكولاتة، عسل، كرز حامض' },
    { labelKey: 'supportingNotes', value: 'حموضة فاكهية، فانيليا، بندق، برتقال' },
    { labelKey: 'bodyFinish', value: 'جسم متوسط-ممتلئ، قوام كريمي، نهاية حلوة، حموضة متوازنة' },
    { labelKey: 'character', value: 'متوازن، معقد، ثابت' },
  ],
  'mixed-series-82-50': [
    { labelKey: 'dominantNotes', value: 'شوكولاتة، كراميل، بندق، طابع قهوة عام' },
    { labelKey: 'supportingNotes', value: 'فاكهة خفيفة، فانيليا، لوز، عسل' },
    { labelKey: 'bodyFinish', value: 'جسم خفيف-متوسط، قوام مسطح، نهاية قصيرة، حموضة منخفضة' },
    { labelKey: 'character', value: 'بسيط، مسطح، للشرب اليومي' },
  ],
  'espresso-crema': [
    { labelKey: 'dominantNotes', value: 'عسل، كراميل، تفاح أخضر، عطور زهرية' },
    { labelKey: 'supportingNotes', value: 'حموضة فاكهية، فانيليا، لوز، بهارات خفيفة' },
    { labelKey: 'bodyFinish', value: 'جسم متوسط، قوام ناعم، نهاية حلوة، حموضة حيوية' },
    { labelKey: 'character', value: 'متوازن، طازج وحيوي، ثابت' },
  ],
};

export const tastingStructuredLocales: Record<NonTr, Record<string, TastingStructuredRow[]>> = {
  en: tastingStructuredForEnFallback,
  nl: tastingStructuredForEnFallback,
  pl: tastingStructuredForEnFallback,
  cs: tastingStructuredForEnFallback,
  it: tastingStructuredForEnFallback,
  ru: tastingStructuredForRu,
  ar: tastingStructuredForAr,
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
    'geisha-90-30': [
      {
        labelKey: 'dominantNotes',
        value: 'Aprikose (+), Pflaume, Pfirsich, Waldbeeren',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Brauner Zucker, Brandy, Cognac, Kakaonibs, karamellisierter Zucker',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cremig, seidiger Körper, Schokolade, Kakao, süßer langer Abgang',
      },
      {
        labelKey: 'character',
        value: 'Fruchtig, weinige Noten, braune Gewürze, exotisch und komplex',
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
    'espresso-crema': [
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
    'geisha-90-30': [
      {
        labelKey: 'dominantNotes',
        value: 'Abricot (+), prune, pêche, baies sauvages',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Sucre brun, brandy, cognac, éclats de cacao, sucre caramélisé',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Crémeux, corps soyeux, chocolat, cacao, finale douce et persistante',
      },
      {
        labelKey: 'character',
        value: 'Fruité, vinifié, épices brunes, exotique et complexe',
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
    'espresso-crema': [
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
    'geisha-90-30': [
      {
        labelKey: 'dominantNotes',
        value: 'Albaricoque (+), ciruela, melocotón, bayas silvestres',
      },
      {
        labelKey: 'supportingNotes',
        value: 'Azúcar moreno, brandy, coñac, nibs de cacao, azúcar caramelizado',
      },
      {
        labelKey: 'bodyFinish',
        value: 'Cremoso, cuerpo sedoso, chocolate, cacao, final dulce y persistente',
      },
      {
        labelKey: 'character',
        value: 'Afrutado, vinoso, especias marrones, exótico y complejo',
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
    'espresso-crema': [
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
