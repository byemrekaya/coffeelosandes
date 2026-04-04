import { defaultLocale } from './config';
import type { Locale } from './types';
import { dictionary } from './dictionary';

/** `tr` / `de` / `en` / `fr` / `es` sözlük girdisi; eksik anahtarda `defaultLocale` yedeklenir. */
export function getLocalizedDictionary(locale: Locale): Record<string, unknown> {
  return (dictionary[locale] ?? dictionary[defaultLocale]) as Record<string, unknown>;
}
