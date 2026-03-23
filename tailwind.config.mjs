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
        espresso: '#1A120E',
        charcoal: '#0A0908',
        bronze: '#B8864B',
        gold: '#D4AF6A',
        terracotta: '#9B4D3A',
        olive: '#3D4A35',
        cream: '#F7F0E6',
        sand: '#E8DFD0',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'soft-gold': '0 18px 45px rgba(0,0,0,0.5)',
        'card': '0 4px 24px rgba(0,0,0,0.12), 0 0 1px rgba(247,240,230,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.2), 0 0 1px rgba(247,240,230,0.12)',
        'nav': '0 1px 0 rgba(247,240,230,0.06), 0 4px 24px rgba(0,0,0,0.15)',
      },
      letterSpacing: {
        'brand': '0.2em',
        'tight-display': '-0.02em',
      },
    },
  },
  plugins: [],
};

