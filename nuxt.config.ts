// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },

  app:{
    head:{
      htmlAttrs:{dir:'rtl',lang:'fa'},
      link: [
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/images/logo/192.png" },
      ],
      script:[
        {innerHTML:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KNQMX3TD');`,async:true},
        {src:'https://www.googletagmanager.com/gtag/js?id=G-Y4ZZT8RBNR',async:true},
        {
          innerHTML:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-Y4ZZT8RBNR');`,
          async:true
        }
      ],
      noscript:[
        {
          innerHTML:`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNQMX3TD"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: "bodyOpen"
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: false
  },
  gtm: {
    id: "GTM-KNQMX3TD",
    loadScript: true,
    debug: false,
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    compressPublicAssets: true
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },


  modules: [
    "@pinia/nuxt",
    "vue3-carousel-nuxt",
    "nuxt-swiper",
    "nuxt3-leaflet",
    "@nuxtjs/google-fonts",
    "@vite-pwa/nuxt",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
    "nuxt-vue3-google-signin",
    "@zadigetvoltaire/nuxt-gtm",
  ],
  pwa:{
    manifest: {
      id:'/',
      short_name: "زعفران جی‌پی",
      name: "زعفران جی‌پی",
      description:'زعفران نگین 100% طبیعی از دل طبیعت تا سفره شما',
      orientation:'portrait',
      lang:'fa',
      dir:'rtl',
      icons: [
        {
          src: "/images/logo/64.png",
          type: "image/png",
          sizes: "64x64",
        },
        {
          src: "/images/logo/144.png",
          type: "image/png",
          sizes: "144x144",
        },
        {
          src: "/images/logo/192.png",
          type: "image/png",
          sizes: "192x192",
        },
        {
          src: "/images/logo/256.png",
          type: "image/png",
          sizes: "256x256",
        },
        {
          src: "/images/logo/512.png",
          type: "image/png",
          sizes: "512x512",
        },
        {
          src: "/images/logo/768.png",
          type: "image/png",
          sizes: "768x768",
        },
      ],
      screenshots:[
        {
          src:"/images/screenshots/screenshot_1.jpeg",
          sizes:"1354x1813",
          type:"image/jpeg",
          form_factor:"wide",
          label:"Application",
          platform:"Desktop"
        },
        {
          src:"/images/screenshots/screenshot_2.jpeg",
          sizes:"320x639",
          type:"image/jpeg",
          form_factor:"narrow",
          label:"Application",
          platform:"Mobile"
        },
      ],
      start_url: "/",
      background_color: "#FAFAFA",
      display: "fullscreen",
      scope: "/",
      theme_color: "#FAFAFA",
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    registerType: "autoUpdate",
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  },

  googleFonts: {
    families:{
      Montserrat:true,
    },
  },

  googleSignIn: {
    clientId: '610599456874-msf6qcgh6i300eo4k5i5atg379mnoob8.apps.googleusercontent.com',
  },

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

  site: {
    defaultLocale: "fa",
    currentLocale: "fa",
    indexable: true,
    url: "https://gpsaffron.com",
  },

  sitemap: {
    autoLastmod: true,
    cacheTtl: 1000 * 60 * 60 * 24, // 1 day
    sitemaps:{
      products:{
        sources:[
            "/__sitemap-products"
        ],
        defaults:{
          priority:0.9
        }
      },
      categories:{
        sources:[
            "/__sitemap-categories"
        ],
        defaults:{
          priority:0.5
        }
      },
      pages:{
        urls:[
          {loc:'/',priority:1},
          {loc:'/market',priority:0.8},
          {loc:'/inquiry',priority:0.5},
          {loc:'/aboutus',priority:0.3},
          {loc:'/contactus',priority:0.3},
          {loc:'/faq',priority:0.3},
        ],
        exclude:[
            "/auth/**",
            "/profile/**",
            "/admin/**",
            "/checkout/**",
            "/payment/**",
            "/comingSoon",
            "/newIndex",
            "/components",
            "/beSeller",
            "/404",
        ]
      }
    }
  },

  compatibilityDate: "2024-08-10"
});