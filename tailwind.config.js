/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFD700',
          cyan: '#00FFFF',
          pink: '#FF00FF',
          dark: '#0a0a0a',
        }
      }
    },
  },
  plugins: [],
}