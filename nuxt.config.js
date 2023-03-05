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
    //'@sidebase/nuxt-auth',
    '@nuxt/content',
    'nuxt-meilisearch',
  ],

/*
  auth: {
    // The module is enabled. Change this to disable the module
    isEnabled: true,
    // The origin is set to the development origin. Change this when deploying to production
    origin: 'http://localhost:3001',
    // The base path to the authentication endpoints. Change this if you want to add your auth-endpoints at a non-default location
    basePath: '/api/auth',
    // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5000 milliseconds (aka: 5 seconds)
    enableSessionRefreshPeriodically: true,
    // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
    enableSessionRefreshOnWindowFocus: true,
    // Whether to add a global authentication middleware that will protect all pages without exclusion
    enableGlobalAppMiddleware: false
  }, 
*/

  meilisearch: {
    hostUrl:  process.env.HOST_URL,
    searchApiKey: process.env.SEARCH_API,
    adminApiKey: process.env.ADMIN_API,
    serverSideUsage: true,
    instantSearch: {
      theme: 'algolia'
    }
  },

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