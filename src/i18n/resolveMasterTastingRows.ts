import { masterTastingBySlug } from '../data/masterTastingStructured';
import type { TastingStructuredRow } from '../data/tastingStructured';
import type { Locale } from './types';
import { t } from './t';

export function resolveMasterTastingRows(slug: string, locale: Locale): TastingStructuredRow[] {
  const rows = masterTastingBySlug[slug];
  if (!rows?.length) return [];
  if (locale === 'tr') return rows;
  return rows.map((row) => {
    const path = `products.masterTastingBySlug.${slug}.${row.labelKey}`;
    const translated = t(locale, path);
    if (translated === path) return row;
    return { ...row, value: translated };
  });
}
