import { locales } from './types';

export function getLangStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
