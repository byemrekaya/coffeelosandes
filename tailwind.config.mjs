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
        paper: '#EEF5F3',
        'paper-deep': '#E0EEEA',
        ink: '#0D2C3F',
        'ink-muted': '#4A6574',
        surface: '#F7FAF9',
        'surface-muted': '#E5F0ED',
        footer: '#0D2C3F',
        'footer-muted': '#8FA8B5',
        espresso: '#E8F2EF',
        charcoal: '#EEF5F3',
        bronze: '#9D6B22',
        gold: '#C89A3C',
        terracotta: '#0D2C3F',
        olive: '#2F5E73',
        cream: '#0D2C3F',
        sand: '#B8D4CC',
        line: '#C5D9D4',
        teal: '#2A7A7A',
        navy: '#0D2C3F',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'soft-gold': '0 18px 45px rgba(13, 44, 63, 0.07)',
        card: '0 4px 24px rgba(13, 44, 63, 0.06), 0 0 1px rgba(13, 44, 63, 0.05)',
        'card-hover': '0 12px 40px rgba(13, 44, 63, 0.09), 0 0 1px rgba(13, 44, 63, 0.06)',
        nav: '0 4px 24px rgba(0, 0, 0, 0.12)',
      },
      letterSpacing: {
        brand: '0.2em',
        'tight-display': '-0.02em',
      },
    },
  },
  plugins: [],
};
