importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4350eb2b50a118fe87d2.js",
    "revision": "97543228a38c0a0e905eebb4ae4f3352"
  },
  {
    "url": "/_nuxt/5e43f51de52c225062ad.js",
    "revision": "606835e1731ed7ba58ba0af3f56b5ddf"
  },
  {
    "url": "/_nuxt/627a1160ddc2d04711b7.js",
    "revision": "b601a46cb6b714ee95dbffed85d18737"
  },
  {
    "url": "/_nuxt/7f3d9f5aab48aa982c40.js",
    "revision": "247ac9fe0ea87257a8d6ed1c5f513438"
  },
  {
    "url": "/_nuxt/88c141a8ca80ed409731.js",
    "revision": "d484e8b5de2a8e3ed50b76c490e51849"
  },
  {
    "url": "/_nuxt/9e4c4777e357e53d908e.js",
    "revision": "173d4d131ee8e97d27248f1e5cdb7982"
  },
  {
    "url": "/_nuxt/c580665805650c100eba.js",
    "revision": "29703f5a7df97a8d2a88648a6c64dae4"
  },
  {
    "url": "/_nuxt/c82133249c1ba6aa2106.js",
    "revision": "dd7764618878c1bdc2f2c079db72b1f5"
  }
], {
  "cacheId": "BrendanZhang-zone",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
