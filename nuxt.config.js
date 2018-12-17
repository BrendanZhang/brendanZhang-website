const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    style: [
      {
        type: 'text/css',
        id: 'styleTag',
        rel: 'stylesheet',
        href: 'style.css'
      },
      {
        cssText:
          '.icon {width: 1em; height: 1em;vertical-align: -0.15em;fill: currentColor;overflow: hidden;}',
        type: 'text/css'
      }
    ],
    script: [{ src: '//at.alicdn.com/t/font_801219_vpk5a1ckell.js' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ffb633' },
  serverMiddleware: ['~/server/routes/api'],
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'normalize.css',
    '~/assets/index/clickBox.scss',
    '~/assets/main.css',
    '~/node_modules/highlight.js/styles/monokai-sublime.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/plugins.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    /* '@nuxtjs/pwa', */
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    use: [
      'markdown-it-abbr',
      'markdown-it-highlightjs',
      'markdown-it-container'
    ]
  },
  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api/': 'http://127.0.0.1:3000/admin'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios'],
    /*
     ** You can extend webpack config here
     */
    uglify: {
      uglifyOptions: {
        compress: false
      },
      cache: '/path/to/cache/dir'
    },
    extend(config, ctx) {}
  }
}
