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
    extend: {},
  },
  plugins: [],
}

