/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bingo: ['Bingo', 'sans-serif'],
        'montserrat-alternates': ['Montserrat-Alternates', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        galant: ['Galant', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
