import { locales } from './types';

export function getLangStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

export function buildLangSlugStaticPaths<TItem, TProps extends Record<string, unknown>>(
  items: readonly TItem[],
  getSlug: (item: TItem) => string,
  buildProps: (item: TItem) => TProps,
): { params: { lang: string; slug: string }; props: TProps }[] {
  const paths: { params: { lang: string; slug: string }; props: TProps }[] = [];
  for (const lang of locales) {
    for (const item of items) {
      paths.push({ params: { lang, slug: getSlug(item) }, props: buildProps(item) });
    }
  }
  return paths;
}
