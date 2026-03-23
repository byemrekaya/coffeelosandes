import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Canonical URL (sitemap, RSS). `src/config/site.ts` içindeki canonicalOrigin ile senkron tutun veya deploy’da PUBLIC_SITE_URL kullanın.
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  srcDir: 'src',
  server: {
    port: 4321,
  },
  build: {
    format: 'directory',
  },
  site: 'https://coffeelosandes.example.com',
});

