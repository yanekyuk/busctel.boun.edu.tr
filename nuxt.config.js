const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/busctel/'
  }
} : {}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  ...routerBase,
  head: {
    title: 'BUSCTEL',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Official website of BUSCTEL'
      }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js' }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },{
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Dosis|Inconsolata|Teko&display=swap&subset=latin-ext'
    }
  ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-particles', ssr: false },
    '~/plugins/vuebar',
    '~/plugins/fontawesome'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
