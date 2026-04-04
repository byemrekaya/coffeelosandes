/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{astro,html,md,mdx}',
    './src/layouts/**/*.{astro,html,md,mdx}',
    './src/components/**/*.{astro,html,md,mdx}',
    './src/styles/**/*.css',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Tema token’ları (:root ile uyumlu) */
        heading: '#28603f',
        main: '#28603f',
        second: '#28603f',
        gray: '#efece5',
        black: '#151515',
        brandWhite: '#FFFFFF',
        red: '#D12323',
        yellow: '#e2b239',
        green: '#28603f',
        paper: '#efece5',
        'paper-deep': '#e8e4dc',
        ink: '#151515',
        'ink-muted': 'rgba(21, 21, 21, 0.72)',
        surface: '#ffffff',
        'surface-muted': '#f5f3ee',
        footer: '#e8e4dc',
        'footer-muted': 'rgba(21, 21, 21, 0.55)',
        espresso: '#292524',
        charcoal: '#151515',
        bronze: '#356b3d',
        /** @deprecated — `heading` kullanın; geriye dönük uyumluluk */
        gold: '#28603f',
        terracotta: '#2d4a32',
        olive: '#4d6b52',
        /** Beyaz — `text-cream` açık zeminde kaybolur; açık arka planlarda `text-ink` / `text-heading` kullanın */
        cream: '#FFFFFF',
        sand: '#e0ddd6',
        line: '#d9d6cf',
        teal: '#28603f',
        navy: '#151515',
        /** Navbar — paket / navbarcolor referansı (koyu orman yeşili + krem) */
        nav: {
          DEFAULT: '#0f261c',
          surface: '#152922',
          cream: '#efece5',
        },
      },
      fontFamily: {
        /** Başlıklar — Poppins */
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
        /** Gövde — Jost */
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': [
          'clamp(2.85rem, 5.6vw, 4.6rem)',
          { lineHeight: '1.05', letterSpacing: '-0.6px' },
        ],
        'display-lg': [
          'clamp(2.35rem, 4.7vw, 3.5rem)',
          { lineHeight: '1.1', letterSpacing: '-0.6px' },
        ],
        'display-md': ['clamp(1.95rem, 3.6vw, 2.55rem)', { lineHeight: '1.12', letterSpacing: '-0.55px' }],
      },
      boxShadow: {
        /**
         * Derinlik gölgeleri — `nav` (#0f261c) ile aynı renk ailesi; açık yeşil parıltı vermez,
         * navbar ile görsel bütünlük sağlar.
         */
        'soft-brand':
          '0 14px 36px rgba(15, 38, 28, 0.11), 0 2px 10px rgba(15, 38, 28, 0.06)',
        card: '0 4px 24px rgba(15, 38, 28, 0.07), 0 0 1px rgba(15, 38, 28, 0.06)',
        'card-hover': '0 12px 40px rgba(15, 38, 28, 0.12), 0 0 1px rgba(15, 38, 28, 0.08)',
        nav: '0 2px 16px rgba(15, 38, 28, 0.08)',
        'nav-dark': '0 4px 24px rgba(15, 38, 28, 0.4)',
        /** Orta logo kartı — Navbar.astro ile ortak */
        'nav-floating': '0 10px 22px rgba(15, 38, 28, 0.42)',
      },
      letterSpacing: {
        brand: '0.2em',
        'tight-display': '-0.02em',
        /** Başlık / alt başlık — referans sitedeki gibi */
        header: '-0.5px',
      },
    },
  },
  plugins: [],
};
