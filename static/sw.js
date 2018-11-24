importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02c162d07bc5fcb16e6f.js",
    "revision": "02e23d147858c98440b385a6c29081cf"
  },
  {
    "url": "/_nuxt/05a685cc1dca83082022.js",
    "revision": "d669f849bf6c058a1ae3f4a34ca55b3a"
  },
  {
    "url": "/_nuxt/0b7e08f1b0a3cd00f120.js",
    "revision": "1d893a3c3018333e94aa11319accd338"
  },
  {
    "url": "/_nuxt/26e2e6efdf458b5645ce.js",
    "revision": "4103012f0a1bcc9ff976683bf61ab762"
  },
  {
    "url": "/_nuxt/6b006ae8e7c25f3df1e0.js",
    "revision": "bd1fbfd408c93f6977b3f47848b47a43"
  },
  {
    "url": "/_nuxt/b6b5dce0dc28b57929fd.js",
    "revision": "ec835ae7b4a3d4eeca2b474ce58c3f57"
  },
  {
    "url": "/_nuxt/be2140ae437fb0266550.js",
    "revision": "2fafdd94864ce9f02cdd85a52d396332"
  },
  {
    "url": "/_nuxt/c603e974a2a988acb1c3.js",
    "revision": "82aea6928f09dfd0242269c83b0b38a4"
  },
  {
    "url": "/_nuxt/d78a5f200d12fb29f441.js",
    "revision": "5b5e2c41b2988c67b78c0d78490e2880"
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
