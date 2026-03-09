/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{astro,html,md,mdx}',
    './src/layouts/**/*.{astro,html,md,mdx}',
    './src/components/**/*.{astro,html,md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        espresso: '#1D130F',
        charcoal: '#050506',
        bronze: '#C08A4D',
        gold: '#D6B470',
        terracotta: '#A4573D',
        olive: '#4C5A3F',
        cream: '#F5E9D8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-gold': '0 18px 45px rgba(0,0,0,0.65)',
      },
    },
  },
  plugins: [],
};

