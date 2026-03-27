import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  adapter: node({ mode: 'standalone' }),
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          tr: 'tr',
          de: 'de',
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

