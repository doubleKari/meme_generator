/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"]
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}