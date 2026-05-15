import type { Locale } from './types';

const LABELS: Record<string, { de: string; ru: string; ar: string }> = {
  Floral:            { de: 'Floral',            ru: 'Цветочный',         ar: 'زهري' },
  Exotic:            { de: 'Exotisch',          ru: 'Экзотический',      ar: 'غريب' },
  Champagne:         { de: 'Champagner',        ru: 'Шампанское',        ar: 'شمبانيا' },
  Cocoa:             { de: 'Kakao',             ru: 'Какао',             ar: 'كاكاو' },
  Peach:             { de: 'Pfirsich',          ru: 'Персик',            ar: 'خوخ' },
  Jasmine:           { de: 'Jasmin',            ru: 'Жасмин',            ar: 'ياسمين' },
  Berries:           { de: 'Beeren',            ru: 'Ягоды',             ar: 'توت' },
  Kiwi:              { de: 'Kiwi',              ru: 'Киви',              ar: 'كيوي' },
  Butter:            { de: 'Buttrig',           ru: 'Сливочный',         ar: 'زبداني' },
  Chocolate:         { de: 'Schokolade',        ru: 'Шоколад',           ar: 'شوكولاتة' },
  Tropical:          { de: 'Tropisch',          ru: 'Тропический',       ar: 'استوائي' },
  Banana:            { de: 'Banane',            ru: 'Банан',             ar: 'موز' },
  Apple:             { de: 'Apfel',             ru: 'Яблоко',            ar: 'تفاح' },
  Apricot:           { de: 'Aprikose',          ru: 'Абрикос',           ar: 'مشمش' },
  'Dulce de leche':  { de: 'Dulce de leche',    ru: 'Дульсе де лече',    ar: 'دولسي دي ليتشي' },
  Coconut:           { de: 'Kokosnuss',         ru: 'Кокос',             ar: 'جوز الهند' },
  Sweet:             { de: 'Süß',               ru: 'Сладкий',           ar: 'حلو' },
  Bergamot:          { de: 'Bergamotte',        ru: 'Бергамот',          ar: 'بيرغاموت' },
  'Black tea':       { de: 'Schwarzer Tee',     ru: 'Чёрный чай',        ar: 'شاي أسود' },
  Citrus:            { de: 'Zitrus',            ru: 'Цитрус',            ar: 'حمضيات' },
  'Brown sugar':     { de: 'Rohrzucker',        ru: 'Коричневый сахар',  ar: 'سكر بني' },
  'Stone fruit':     { de: 'Steinobst',         ru: 'Косточковые фрукты', ar: 'فاكهة ذات نواة' },
  Cedar:             { de: 'Zeder',             ru: 'Кедр',              ar: 'أرز' },
  Spice:             { de: 'Gewürz',            ru: 'Пряность',          ar: 'بهارات' },
  'Dark chocolate':  { de: 'Dunkle Schokolade', ru: 'Тёмный шоколад',    ar: 'شوكولاتة داكنة' },
  Cherry:            { de: 'Kirsche',           ru: 'Вишня',             ar: 'كرز' },
  Hazelnut:          { de: 'Haselnuss',         ru: 'Фундук',            ar: 'بندق' },
  Creamy:            { de: 'Cremig',            ru: 'Кремовый',          ar: 'كريمي' },
  'Red fruit':       { de: 'Rote Frucht',       ru: 'Красные фрукты',    ar: 'فاكهة حمراء' },
  Herbal:            { de: 'Kräuter',           ru: 'Травяной',          ar: 'عشبي' },
  'Wild berries':    { de: 'Waldbeeren',        ru: 'Лесные ягоды',      ar: 'توت بري' },
  'Forest fruits':   { de: 'Waldfrüchte',       ru: 'Лесные фрукты',     ar: 'ثمار الغابة' },
  Caramel:           { de: 'Karamell',          ru: 'Карамель',          ar: 'كراميل' },
  Honey:             { de: 'Honig',             ru: 'Мёд',               ar: 'عسل' },
  Fig:               { de: 'Feige',             ru: 'Инжир',             ar: 'تين' },
  Macadamia:         { de: 'Macadamia',         ru: 'Макадамия',         ar: 'ماكاداميا' },
  Vanilla:           { de: 'Vanille',           ru: 'Ваниль',            ar: 'فانيليا' },
  Silky:             { de: 'Seidig',            ru: 'Шёлковый',          ar: 'حريري' },
  Citric:            { de: 'Zitrisch',          ru: 'Цитрусовый',        ar: 'حمضي' },
  Maple:             { de: 'Ahorn',             ru: 'Клён',              ar: 'قيقب' },
  Balanced:          { de: 'Ausgewogen',        ru: 'Сбалансированный',  ar: 'متوازن' },
  'White chocolate': { de: 'Weiße Schokolade',  ru: 'Белый шоколад',     ar: 'شوكولاتة بيضاء' },
  Orange:            { de: 'Orange',            ru: 'Апельсин',          ar: 'برتقال' },
  Almond:            { de: 'Mandel',            ru: 'Миндаль',           ar: 'لوز' },
  Cinnamon:          { de: 'Zimt',              ru: 'Корица',            ar: 'قرفة' },
  Panela:            { de: 'Panela',            ru: 'Панела',            ar: 'بانيلا' },
  Fruit:             { de: 'Frucht',            ru: 'Фрукт',             ar: 'فاكهة' },
  Raisin:            { de: 'Rosine',            ru: 'Изюм',              ar: 'زبيب' },
  Grape:             { de: 'Weintraube',        ru: 'Виноград',          ar: 'عنب' },
  'Sour cherry':     { de: 'Sauerkirsche',      ru: 'Кислая вишня',     ar: 'كرز حامض' },
  'Green apple':     { de: 'Grüner Apfel',      ru: 'Зелёное яблоко',   ar: 'تفاح أخضر' },
};

export function translateFlavorTag(tag: string, locale: Locale): string {
  const row = LABELS[tag];
  if (!row) return tag;
  if (locale === 'de') return row.de;
  if (locale === 'ru') return row.ru;
  if (locale === 'ar') return row.ar;
  return tag;
}

export function translateFlavorTags(tags: string[], locale: Locale): string[] {
  return tags.map((tag) => translateFlavorTag(tag, locale));
}
