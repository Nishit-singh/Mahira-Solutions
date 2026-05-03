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
          DEFAULT: '#1e40af', // Deep Industrial Blue (Blue-800)
          dark: '#172554',    // Midnight Navy (Blue-950)
          light: '#eff6ff',   // Very Light Blue
        },
        mint: '#dbeafe',      // Light Blue accent
        'brand-orange': '#f97316', // Industrial Orange
        'off-white': '#ffffff',
        'text-dark': '#09090b', // Deep Black
        'text-muted': '#71717a', // Zinc Muted
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
