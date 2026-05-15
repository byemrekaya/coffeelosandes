import type { Locale } from './types';

const LABELS: Record<string, Partial<Record<Locale, string>>> = {
  'Stabil Premium': {
    de: 'Stabiles Premium',
    en: 'Stable Premium',
    fr: 'Premium Stable',
    es: 'Premium Estable',
    nl: 'Stabiel Premium',
    pl: 'Stabilne Premium',
    cs: 'Stabilní Premium',
    it: 'Premium Stabile',
    ru: 'Стабильный Премиум',
    ar: 'بريميوم مستقر',
  },
  'Yüksek Segment': {
    de: 'Hohes Segment',
    en: 'High Segment',
    fr: 'Segment Élevé',
    es: 'Segmento Alto',
    nl: 'Hoog Segment',
    pl: 'Wysoki Segment',
    cs: 'Vysoký Segment',
    it: 'Segmento Alto',
    ru: 'Высокий Сегмент',
    ar: 'فئة عالية',
  },
  'Alt Segment': {
    de: 'Unteres Segment',
    en: 'Lower Segment',
    fr: 'Segment Inférieur',
    es: 'Segmento Bajo',
    nl: 'Lager Segment',
    pl: 'Niski Segment',
    cs: 'Nižší Segment',
    it: 'Segmento Basso',
    ru: 'Нижний Сегмент',
    ar: 'فئة منخفضة',
  },
  'Premium Segment': {
    de: 'Premium Segment',
    en: 'Premium Segment',
    fr: 'Segment Premium',
    es: 'Segmento Premium',
    nl: 'Premium Segment',
    pl: 'Segment Premium',
    cs: 'Prémiový Segment',
    it: 'Segmento Premium',
    ru: 'Премиальный Сегмент',
    ar: 'فئة فاخرة',
  },
};

export function translateTicariSegment(value: string, locale: Locale): string {
  if (locale === 'tr') return value;
  const map = LABELS[value];
  if (!map) return value;
  return map[locale] ?? map.en ?? value;
}
