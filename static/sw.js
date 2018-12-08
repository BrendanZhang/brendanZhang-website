importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/046ce722d288d64d5c50.js",
    "revision": "700f485f004a90d847b78431577f8ac4"
  },
  {
    "url": "/_nuxt/144552a9d5beef9e25dd.js",
    "revision": "09051dc5b9e5af1ddad74821003803b9"
  },
  {
    "url": "/_nuxt/234d8b0b467b84313545.js",
    "revision": "0953f1cb319944b0c02176030c250901"
  },
  {
    "url": "/_nuxt/3d7eaa023845b1d19212.js",
    "revision": "bb17e615b5a3f27aa48b1f9aa91a6d15"
  },
  {
    "url": "/_nuxt/58d01ac07b1c2eb69b5f.js",
    "revision": "921a45f4b93d1601c89c103eee3b0e4d"
  },
  {
    "url": "/_nuxt/6a1d56984952fe7f237c.js",
    "revision": "4b87364ec4c3fb9406ca1baba5fc6724"
  },
  {
    "url": "/_nuxt/c9137cc5e9411e6c86c8.js",
    "revision": "aa91dfe1e3303e9b8544ff67229dd8b8"
  },
  {
    "url": "/_nuxt/f27edbf3ae5927d6ed14.js",
    "revision": "355b2047cffc3b4ba1ed31ba8ff71f5f"
  },
  {
    "url": "/_nuxt/f932680b0c93005e6683.js",
    "revision": "90f784093a28deb8dcc9be10c54b7986"
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
