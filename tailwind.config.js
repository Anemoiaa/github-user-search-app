/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "mono": ['Space Mono', 'monospace'],
    }
  },
  plugins: [],
}
