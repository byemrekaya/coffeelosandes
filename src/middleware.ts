import type { MiddlewareHandler } from 'astro';

/** İsteğe bağlı: ileride ön ek / yönlendirme kuralları burada genişletilebilir. */
export const onRequest: MiddlewareHandler = async (_context, next) => next();
