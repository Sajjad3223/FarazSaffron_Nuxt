// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      htmlAttrs:{dir:'rtl',lang:'fa'}
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  devServer:{
    port:3000
  },
  plugins: [
    '~/plugins/clickOutsideDirective.ts',
  ],
  modules: ["@pinia/nuxt", "vue3-carousel-nuxt","nuxt-swiper","nuxt3-leaflet",'@vueuse/motion/nuxt'],
  alias: {
    // This is for fixing " Cannot read properties of undefined (reading 'defineComponent') " error
    'vue3-carousel/dist/carousel': 'vue3-carousel/dist/carousel.es.js',
  },
  //@ts-ignore
  carousel:{
    prefix:'GP'
  },
  swiper:{
    modules:'*',
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
})