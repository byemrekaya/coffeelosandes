import { resolveLocale } from './config';
import type { Locale } from './types';

/** Eski `/tr/...` URL’leri ve geçersiz dil kodlarını güvenli biçimde çözümler. */
export function withLang(path: string, locale: string | undefined | null): string {
  const loc = resolveLocale(locale);
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') return `/${loc}`;
  return `/${loc}${normalized}`;
}

export function homeSection(locale: string | undefined | null, hash: string): string {
  const h = hash.startsWith('#') ? hash.slice(1) : hash;
  return `${withLang('/', locale)}#${h}`;
}

export function stripLocaleFromPath(pathname: string): string {
  const m = pathname.match(/^\/(tr|de|en|fr|es)(\/.*)?$/);
  if (m) return m[2] && m[2].length > 0 ? m[2] : '/';
  return pathname || '/';
}

export function switchLocalePath(pathname: string, newLocale: Locale): string {
  const rest = stripLocaleFromPath(pathname);
  return withLang(rest === '/' ? '/' : rest, newLocale);
}
