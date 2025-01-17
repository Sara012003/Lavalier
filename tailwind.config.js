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
      colors:{
        gold: '#FFD700', // Color dorado personalizado
      },
      margin: {
        '50px': '100px', // Agrega un margen de 3000px
        fontFamily:{
          playfair: ['"Playfair Display"', 'serif'],

        },
      },
    },
  }
  
  ,backgroundImage: {
    Background_Dekstop :"url('/public/Bg.jpg')"
  ,
  Background_Movil:"url('/public/Bg_Movil.jpg')",
  Background_Div:"url('/public/Background.jpeg')",

  plugins: [],
}
};