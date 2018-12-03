importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/144552a9d5beef9e25dd.js",
    "revision": "09051dc5b9e5af1ddad74821003803b9"
  },
  {
    "url": "/_nuxt/159601dc1476c3f58821.js",
    "revision": "fec313e9e21698267d1ebc09eb576acc"
  },
  {
    "url": "/_nuxt/1f47e4579a34bbf64836.js",
    "revision": "1a957369dd8d3fc956730da5e4d37a90"
  },
  {
    "url": "/_nuxt/3d7eaa023845b1d19212.js",
    "revision": "bb17e615b5a3f27aa48b1f9aa91a6d15"
  },
  {
    "url": "/_nuxt/485b2dae96aa8f621335.js",
    "revision": "1f7be8f88659ce78f0ce27cd1fcee16d"
  },
  {
    "url": "/_nuxt/577e3bb0d9dc82f5806b.js",
    "revision": "4329d8f057cb7bdee1fbfb5de952a6e5"
  },
  {
    "url": "/_nuxt/890e3fcc565b77849ae6.js",
    "revision": "f063e7b90982aa18d7d2379ac80709f7"
  },
  {
    "url": "/_nuxt/8c4a1b064cd1ff41726a.js",
    "revision": "3e5e74c5cd993b000bb864bab66581e0"
  },
  {
    "url": "/_nuxt/f27edbf3ae5927d6ed14.js",
    "revision": "355b2047cffc3b4ba1ed31ba8ff71f5f"
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
