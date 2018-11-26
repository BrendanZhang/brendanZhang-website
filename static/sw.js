importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/47210829d397123508d2.js",
    "revision": "b5be36825b3e6f30510bdfd7408fef82"
  },
  {
    "url": "/_nuxt/6ad52f25cfcbb0ffbe16.js",
    "revision": "798d8aa2b194a92cde45202922ad413d"
  },
  {
    "url": "/_nuxt/71d5cbebb1e7e57f7346.js",
    "revision": "e571008ac7df14c3545d250d7337d773"
  },
  {
    "url": "/_nuxt/8cf4999bfb7be232dc8d.js",
    "revision": "4243163ce168fe67bc1048f9f87bd9d7"
  },
  {
    "url": "/_nuxt/8dc2ec686aa7196dd181.js",
    "revision": "005cd7e53fb38b74be62b1edf519d0c7"
  },
  {
    "url": "/_nuxt/8e69f43af8b298e13947.js",
    "revision": "aa21ca87bcedbf9e2819448ac7af2c93"
  },
  {
    "url": "/_nuxt/a1aa6e43c6b80cc42480.js",
    "revision": "e6829cd3bd8c8ddada1cc0db091dc719"
  },
  {
    "url": "/_nuxt/db7c91588a6144c41621.js",
    "revision": "e10f87d145caf664ccaa0437d7c74429"
  },
  {
    "url": "/_nuxt/f62043e464fe956bc6ae.js",
    "revision": "c9fe1f13523a3d807e06574dc3961231"
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
