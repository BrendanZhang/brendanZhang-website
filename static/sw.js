importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/283380180fd0dfcb2cf5.js",
    "revision": "5c86cba5399c19fffe5d17df6563105b"
  },
  {
    "url": "/_nuxt/2a8d26f85cc75ba34d21.js",
    "revision": "c2c3427b335bf208b851c72d6e777b60"
  },
  {
    "url": "/_nuxt/35892a113f4fb4d5efd2.js",
    "revision": "a26533b4093c14f12cb671f99a7799cd"
  },
  {
    "url": "/_nuxt/59329e12c20778109781.js",
    "revision": "da6f3a251a5a5c1c358199e4a83722f2"
  },
  {
    "url": "/_nuxt/9ac92dc9625767b38c7a.js",
    "revision": "c915d0eb22c15b24af651406cb28b680"
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
