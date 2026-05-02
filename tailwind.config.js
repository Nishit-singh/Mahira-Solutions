/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#006B5E',
          dark: '#004D44',
          light: '#E0F7F4',
        },
        mint: '#B2DFDB',
        'off-white': '#F9FBFA',
        'text-dark': '#0A1F1C',
        'text-muted': '#546E6A',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
