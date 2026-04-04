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

export function localizeCoffeeLot(lot: CoffeeLot, locale: Locale): CoffeeLot {
  const patch = lotLocalePatches[lot.slug]?.[locale] as Patch | undefined;
  const merged = patch ? { ...lot, ...patch } : lot;
  return {
    ...merged,
    flavorTags: translateFlavorTags(merged.flavorTags, locale),
  };
}

export function localizeCoffeeLots(lots: CoffeeLot[], locale: Locale): CoffeeLot[] {
  return lots.map((l) => localizeCoffeeLot(l, locale));
}
