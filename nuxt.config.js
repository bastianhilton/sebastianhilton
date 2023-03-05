//import { defineNuxtConfig } from 'nuxt'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  title: 'Sebastian Hilton',
  extends: ['@sidebase/core'],

  css: [
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
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
  ],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql',
      }
    },
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