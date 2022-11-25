/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html",
  ],
  theme: {
    extend: {
      colors: {
        lightGrey: "#697C9A",
        darkMain: "#141D2F",
      }
    },
    fontFamily: {
      "mono": ['Space Mono', 'monospace'],
    },
  },
  plugins: [],
}
