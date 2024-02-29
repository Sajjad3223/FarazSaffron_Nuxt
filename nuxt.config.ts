// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      htmlAttrs:{dir:'rtl',lang:'fa'}
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    '~/plugins/clickOutsideDirective.ts',
  ],
  modules: [
    "@pinia/nuxt",
  ],
})
