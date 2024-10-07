/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'phoneScreen': '450px'
      }
    },
  },
  plugins: [],
}

