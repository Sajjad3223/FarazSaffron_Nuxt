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
      'vazir':['Vazir FD'],
      'estedad': ['Estedad'],
      'cinzel': ['"Cinzel"'],
    },
    extend: {
      colors:{
        current:'currentColor',
        bgWhite:'#FEFEFE',
        //brandOrange:'#B48D11',
        brandOrange:'#FB7511',
        dgKala:'#ef4056',
        primary:'#3787FF',
        secondary:'#939393',
        cta:'#B48D11',
        danger:'#FF0E38',
        warning:'#6bb927',
      },
      screens:{
        '3xl':'1700px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}

