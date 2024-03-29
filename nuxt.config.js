//import { defineNuxtConfig } from 'nuxt'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  title: 'Sebastian Hilton',
  extends: ['@sidebase/core'],

  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/dropdown/css/style.css',
    'assets/socicon/css/styles.css',
    'assets/theme/css/style.css',
    'assets/mobirise/css/mbr-additional.css',
    'assets/styles/styles.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  script: [
    'assets/scripts/main.js',
    'assets/mdb/plugins/js/all.min.js',
    'assets/mdb/js/mdb.min.js',
    'assets/bootstrap/js/bootstrap.bundle.min.js',
    'assets/parallax/jarallax.js',
    'assets/smoothscroll/smooth-scroll.js',
    'assets/ytplayer/index.js',
    'assets/theme/js/script.js'
  ],

  app: {
    head: {
      script: [
        {
          src: 'https://kit.fontawesome.com/5f36ca3a3b.js',
          crossorigin: 'anonymous',
          mode: 'client'
        }
      ],
    }
  },


  modules: [
    '@nuxtjs/apollo',
    '@nuxt/content',
    'nuxt-directus',
    ["@storyblok/nuxt", { accessToken: process.env.accessToken }]
  ],

  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      default: {
        tokenName: "apollo-token",
        httpEndpoint: process.env.STORYBLOK_URL,
        httpLinkOptions: {
          headers: {
            //'Authorization': process.env.STORYBLOK_TOKEN,
            token: process.env.STORYBLOK_TOKEN,
            version: 'publish'
          }
        }/* */
      },
    },
  },

  directus: {
    url: process.env.DIRECTUS_URL,
    auth: {
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
      token: process.env.DIRECTUS_TOKEN,
    }
  },

  build: {
    transpile: [
      'vuetify',
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})