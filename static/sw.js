importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/26659c6bbfe182c944af.js",
    "revision": "795217c2731cbf263de50a60a82a5806"
  },
  {
    "url": "/_nuxt/485a9e05032ccb8328c3.js",
    "revision": "e9b3c8129e837ab43f9716c0e030a2ff"
  },
  {
    "url": "/_nuxt/68075671a017c534c555.js",
    "revision": "d9bae914714f5924044405d1d788b6c5"
  },
  {
    "url": "/_nuxt/6b1c1c380beca2ad70a3.js",
    "revision": "7fd1e1be4ada33cb5bb0e4ba15774a76"
  },
  {
    "url": "/_nuxt/860439189ded00cabe04.js",
    "revision": "59fc5fc3605a9160a41a7cd7cd7a3c8e"
  },
  {
    "url": "/_nuxt/8cc80a50b7ef66380784.js",
    "revision": "f8cea4ab6780ca316f7ce4bea700b005"
  },
  {
    "url": "/_nuxt/9c4b256f4c04f1534a26.js",
    "revision": "bde69ee23aa7ebc57e0dc7a8dca290b2"
  },
  {
    "url": "/_nuxt/be2140ae437fb0266550.js",
    "revision": "2fafdd94864ce9f02cdd85a52d396332"
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
