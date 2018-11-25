importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/40f24402185006cb280c.js",
    "revision": "b248370e06e46a15e57d97ce62ba24ca"
  },
  {
    "url": "/_nuxt/6b006ae8e7c25f3df1e0.js",
    "revision": "bd1fbfd408c93f6977b3f47848b47a43"
  },
  {
    "url": "/_nuxt/7650fc018b447ed66335.js",
    "revision": "c064b91af6618536429bcb4c2339c93e"
  },
  {
    "url": "/_nuxt/7f780727524b0958b246.js",
    "revision": "436a30c5fbd15702b95bac016828c2c4"
  },
  {
    "url": "/_nuxt/86049ccabc49ab53eb8f.js",
    "revision": "61378ab525a45bac66eadc619c057564"
  },
  {
    "url": "/_nuxt/a1a34232fef5ff682b46.js",
    "revision": "ab69be8dbbab0049e4bdadbd4536e976"
  },
  {
    "url": "/_nuxt/abedb3c8cb3bd39ef4c9.js",
    "revision": "4b9e79563af97c76a72f281518e5c2b2"
  },
  {
    "url": "/_nuxt/be2140ae437fb0266550.js",
    "revision": "2fafdd94864ce9f02cdd85a52d396332"
  },
  {
    "url": "/_nuxt/ca636591efb08598a4d1.js",
    "revision": "32f5f49e3d58c70907875da1bb7cb998"
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
