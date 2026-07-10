/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand-accent':    '#6366f1',
        'brand-surface':   '#1a1f2e',
        'brand-border':    '#2a2f42',
        'brand-secondary': '#8892a4',
      },
    },
  },
  plugins: [],
};
