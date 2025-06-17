// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: {
    enabled: true
  },

  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      templateParams: {
        separator: '·',
      },
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{
        name: 'description',
        content: 'Official Portfolio Website for Sebastian Hilton'
      }, ],
      link: [{
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png'
        },
      ],
      script: [
        {
        src: 'assets/bootstrap/js/bootstrap.bundle.min.js'
        },
        {
        src: 'assets/smoothscroll/smooth-scroll.js'
        },
        {
        src: 'assets/ytplayer/index.js'
        },
        {
        src: 'assets/dropdown/js/navbar-dropdown.js'
        },
        {
        src: 'assets/theme/js/script.js'
        },
    ]
    },
  },

  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/theme/css/style.css',
    'assets/mobirise/css/mbr-additional.css',
    'assets/styles/styles.css',
  ],

  modules: ['@nuxt/image'],

  runtimeConfig: {
    public: {
      // Directus
      directus: {
        url: process.env.DIRECTUS_URL,
        //nuxtBaseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3013',
        auth: {
          email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
          password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
          token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN,
          enabled: true,
          enableGlobalAuthMiddleware: false, // Enable auth middleware on every page
          userFields: ['*'], // Select user fields
          redirect: {
            login: '/auth/login', // Path to redirect when login is required
            logout: '/', // Path to redirect after logout
            home: '/', // Path to redirect after successful login
            resetPassword: '/auth/reset-password', // Path to redirect for password reset
            callback: '/auth/callback', // Path to redirect after login with provider
          },
        }
      },

      // Google Tag Manager
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID,
    }
  }
})