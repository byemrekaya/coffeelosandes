import type { Locale } from './types';

export function withLang(path: string, locale: Locale): string {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function homeSection(locale: Locale, hash: string): string {
  const h = hash.startsWith('#') ? hash.slice(1) : hash;
  return `${withLang('/', locale)}#${h}`;
}

export function stripLocaleFromPath(pathname: string): string {
  const m = pathname.match(/^\/(tr|de)(\/.*)?$/);
  if (!m) return pathname || '/';
  return m[2] && m[2].length > 0 ? m[2] : '/';
}

export function switchLocalePath(pathname: string, newLocale: Locale): string {
  const rest = stripLocaleFromPath(pathname);
  return withLang(rest === '/' ? '/' : rest, newLocale);
}
