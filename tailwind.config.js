module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        azul: '#3F4BFF',
        blanco: '#ffffff',
        rosado: '#FC83EE',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
        extra: 800,
        black: 900,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
