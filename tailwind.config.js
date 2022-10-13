/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xl9: '9rem',
    },
    extend: {
      width: {
        '100': '50rem',
      },
      height: {
        '100':'50rem',
      }
    },
  },
  plugins: [],
}
