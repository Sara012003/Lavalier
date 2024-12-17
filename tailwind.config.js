module.exports = {
  darkMode: 'selector',  // Usar el modo oscuro según la preferencia del sistema
  content: [
    './index.html',
    './Pages/*.html',
    './*.js',
  ],
  theme: {
    extend: {
      maxWidth: {
        '100px': '100px', // Agrega un max-width de 100px
      },
      margin: {
        '50px': '100px', // Agrega un margen de 3000px
      },
    },
  },
  plugins: [],
};