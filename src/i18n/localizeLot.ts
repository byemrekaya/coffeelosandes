import type { CoffeeLot } from '../data/coffeeLots';
import { tastingStructuredBySlug } from '../data/tastingStructured';
import type { Locale } from './types';
import { translateFlavorTags } from './flavorTagLabels';
import { lotLocalePatches } from './lotPatches';
import { tastingStructuredLocales } from './tastingStructuredLocales';

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

function resolveTastingStructured(slug: string, locale: Locale) {
  const trRows = tastingStructuredBySlug[slug];
  if (!trRows) return undefined;
  if (locale === 'tr') return trRows;
  const localized = tastingStructuredLocales[locale]?.[slug];
  if (localized) return localized;
  return tastingStructuredLocales.en[slug] ?? trRows;
}

export function localizeCoffeeLot(lot: CoffeeLot, locale: Locale): CoffeeLot {
  const patch = lotLocalePatches[lot.slug]?.[locale] as Patch | undefined;
  const merged = patch ? { ...lot, ...patch } : lot;
  return {
    ...merged,
    flavorTags: translateFlavorTags(merged.flavorTags, locale),
    tastingStructured: resolveTastingStructured(merged.slug, locale),
  };
}

export function localizeCoffeeLots(lots: CoffeeLot[], locale: Locale): CoffeeLot[] {
  return lots.map((l) => localizeCoffeeLot(l, locale));
}
