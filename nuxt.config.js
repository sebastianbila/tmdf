import { resolve } from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The Million Dollar Fund',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/node_modules/swiper/swiper-bundle.css',
    '@/node_modules/normalize.css/normalize.css',
    '~assets/css/bootstrap-grid.min.css',
    '~assets/fonts/font-awesome/css/all.css',
    '~assets/css/app.css',
    '~assets/scss/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'nuxt-vuex-localstorage'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  alias: {
    '@': resolve(__dirname, './'),
    '@components': resolve(__dirname, './components'),
    '@assets': resolve(__dirname, './assets'),
    '@middleware': resolve(__dirname, './middleware'),
    '@static': resolve(__dirname, './static'),
  },

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  proxy: ['https://dev.themilliondollarfund.com/api'],
}
