importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/6b006ae8e7c25f3df1e0.js",
    "revision": "bd1fbfd408c93f6977b3f47848b47a43"
  },
  {
    "url": "/_nuxt/6be1cef3741d454697ce.js",
    "revision": "7453c847d732bcc445c6d1cb961c4738"
  },
  {
    "url": "/_nuxt/71647568c386a47d15ae.js",
    "revision": "9e416a3a0c14bbf838d4e263932bc691"
  },
  {
    "url": "/_nuxt/808cc191f4dda8f00f33.js",
    "revision": "22009051f0209c9e8b6378b01df2c79c"
  },
  {
    "url": "/_nuxt/8bc86923800eed528c99.js",
    "revision": "133d3e810490de39353fb658ed07c6a9"
  },
  {
    "url": "/_nuxt/b27cef9f377f985e1ace.js",
    "revision": "c20408e3ed0230b1fcd9ca7a59843290"
  },
  {
    "url": "/_nuxt/be2140ae437fb0266550.js",
    "revision": "2fafdd94864ce9f02cdd85a52d396332"
  },
  {
    "url": "/_nuxt/cbdbb073f02d15cf451f.js",
    "revision": "0a0a24b74170ad51825d1cd275ed8835"
  },
  {
    "url": "/_nuxt/f0eb827d2f244b62a080.js",
    "revision": "1c19e2396674cdc614c0a44619ab046c"
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
