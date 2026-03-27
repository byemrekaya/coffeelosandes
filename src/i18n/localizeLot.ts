import type { CoffeeLot } from '../data/coffeeLots';
import type { Locale } from './types';
import { translateFlavorTags } from './flavorTagLabels';
import { lotLocalePatches } from './lotPatches';

type Patch = Partial<
  Pick<
    CoffeeLot,
    | 'story'
    | 'commercialSummary'
    | 'cupProfileSummary'
    | 'buyerUseCases'
    | 'collectionLabel'
    | 'longTastingNotes'
  >
>;

const COLLECTION_LABEL_TR: Record<string, string> = {
  'Competition Lot': 'Özel seçki',
  'Premium Micro Lot': 'Premium mikro lot',
  'Specialty Coffee': 'Specialty kahve',
  'Blend Series': 'Harmon serisi',
  'Commercial Series': 'Ticari seri',
};

export function localizeCoffeeLot(lot: CoffeeLot, locale: Locale): CoffeeLot {
  const patch = lotLocalePatches[lot.slug]?.[locale] as Patch | undefined;
  const merged = patch ? { ...lot, ...patch } : lot;
  let collectionLabel = merged.collectionLabel;
  if (locale === 'tr' && collectionLabel && COLLECTION_LABEL_TR[collectionLabel]) {
    collectionLabel = COLLECTION_LABEL_TR[collectionLabel];
  }
  return {
    ...merged,
    collectionLabel,
    flavorTags: translateFlavorTags(merged.flavorTags, locale),
  };
}

export function localizeCoffeeLots(lots: CoffeeLot[], locale: Locale): CoffeeLot[] {
  return lots.map((l) => localizeCoffeeLot(l, locale));
}
