import { defaultLocale, resolveLocale } from './config';
import type { Locale } from './types';
import { dictionary } from './dictionary';

function getDeep(obj: unknown, path: string): string | undefined {
  const parts = path.split('.');
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in (cur as object)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return undefined;
    }
  }
  return typeof cur === 'string' ? cur : undefined;
}

export function t(locale: Locale | string | undefined, key: string): string {
  const loc = resolveLocale(locale);
  const bundle = dictionary[loc] ?? dictionary[defaultLocale];
  const fromLocale = getDeep(bundle, key);
  if (fromLocale) return fromLocale;
  return getDeep(dictionary[defaultLocale], key) ?? key;
}
