import { defaultLocale } from './config';
import type { Locale } from './types';
import { dictionary } from './dictionary';

export function getLocalizedDictionary(locale: Locale): Record<string, unknown> {
  return (dictionary[locale] ?? dictionary[defaultLocale]) as Record<string, unknown>;
}
