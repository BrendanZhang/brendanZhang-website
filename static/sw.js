importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/28233e89097058e87d31.js",
    "revision": "403143d504dc1588b726541ec8f7e1a5"
  },
  {
    "url": "/_nuxt/4d9d9b45a9aa357dc6a5.js",
    "revision": "5924850085cbb69b0c10854caa3facb6"
  },
  {
    "url": "/_nuxt/615aa022b5bfef212d33.js",
    "revision": "843450cd1df449e4a2deaa3038acbdd2"
  },
  {
    "url": "/_nuxt/9138a92cffb3b3b756c9.js",
    "revision": "332957909075d219633a7c46ed5270fe"
  },
  {
    "url": "/_nuxt/b25c8b5ab9e5ba351dcf.js",
    "revision": "da1446befc6c52f0369b7b1c714653e8"
  },
  {
    "url": "/_nuxt/d992bc4711f473bac26c.js",
    "revision": "626c817329930ce7c6c5f72064667850"
  },
  {
    "url": "/_nuxt/f95f2c78d9a444e0e0a1.js",
    "revision": "ce0d7fe9fa18fb8574114fc8c1a27f62"
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
