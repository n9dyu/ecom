/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Coolvetica", "sans-serif"],    
        bop: ["BirdsOfParadise", "cursive"],     
        helvetica: ["HelveticaCustom", "sans-serif"],
      },
    },
  },
  plugins: [],
}
