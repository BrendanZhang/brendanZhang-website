importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/17ecbf24a9db890aa2b9.js",
    "revision": "3a8f06475f1b5ea3a82691b351bc03ad"
  },
  {
    "url": "/_nuxt/6417f2587faa332e2dce.js",
    "revision": "435991d8cccc18e994c36041df5d4631"
  },
  {
    "url": "/_nuxt/6c4c6a3fa4eadfb50a3d.js",
    "revision": "91c3e063bc71cca8b494dded53962046"
  },
  {
    "url": "/_nuxt/73bda413d20c5f2e9981.js",
    "revision": "974128c8e1e3324c78803a0bdef67695"
  },
  {
    "url": "/_nuxt/a785dd3d35eae8f9e80d.js",
    "revision": "fb7d95d0e49fd3d293ac08964806b564"
  },
  {
    "url": "/_nuxt/d7196e58967c4c079825.js",
    "revision": "a8439a2fc69be2cb2a7c543160430829"
  },
  {
    "url": "/_nuxt/e1013efcea9aa336981f.js",
    "revision": "da06673a8aa2de8614f91006ba7183aa"
  },
  {
    "url": "/_nuxt/feb55d36249bb19100da.js",
    "revision": "4437b275482497848f8b781181abe23d"
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
