import type { Locale } from './types';
import { locales } from './types';

export const defaultLocale: Locale = 'de';

export function isLocale(s: string): s is Locale {
  return (locales as readonly string[]).includes(s);
}

export function resolveLocale(s: string | undefined | null): Locale {
  if (s != null && isLocale(s)) return s;
  return defaultLocale;
}
