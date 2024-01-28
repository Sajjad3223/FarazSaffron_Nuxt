/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily:{
      'vazir':['"Vazir FD"'],
      'estedad': ['Estedad'],
      'fedra':['"Fedra Arabic Display AR+LT Black"'],
    },
    extend: {
      colors:{
        current:'currentColor',
        bgWhite:'#FEFEFE',
        brandOrange:'#B48D11',
        primary:'#3787FF',
        secondary:'#939393',
        cta:'#B48D11',
        danger:'#FF6161',
        warning:'#33E545',
      },
    },
  },
  plugins: [],
}

