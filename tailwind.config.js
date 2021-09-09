module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        polisBlue: '#0090ff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
