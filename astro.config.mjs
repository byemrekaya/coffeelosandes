import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // Miniflare/workerd spawn hatası (macOS) → yerel dev’de platform proxy kapalı; üretim aynı kalır.
  adapter: cloudflare({
    platformProxy: { enabled: false },
  }),
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          tr: 'tr',
          de: 'de',
          en: 'en',
          fr: 'fr',
          es: 'es',
        },
      },
    }),
  ],
  srcDir: 'src',
  server: {
    port: 4321,
  },
  build: {
    format: 'directory',
  },
  site: 'https://coffeelosandes.com',
});