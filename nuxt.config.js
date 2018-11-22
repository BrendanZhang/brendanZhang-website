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
    script: [{ src: '//at.alicdn.com/t/font_801219_w0oqhsxymj.js' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'normalize.css',
    '~/assets/index/clickBox.scss',
    '~/assets/main.css'
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
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

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
/* import about from '~page/index/about'
import project from './views/project'
import blog from './views/blog'
import sketch from './views/sketch'
import projectDetail from './components/TabContent/portfolio/projectDetail'

export default {
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '/',
          name: 'normal',
          component: undefined
        },
        {
          path: '/ability',
          name: 'ability',
          component: sketch
        },
        {
          path: '/about',
          name: 'about',
          component: about
        },
        {
          path: '/project',
          name: 'project',
          component: project,
          children: [
            {
              path: '/project/detail/:id',
              name: 'project',
              component: projectDetail
            }
          ]
        },
        {
          path: '/blog',
          name: 'blog',
          component: blog
        }
      )
    }
  }
}
 */
