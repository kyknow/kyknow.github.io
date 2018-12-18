/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "88db178d3360cac28d9e7d982c3db9e2"
  },
  {
    "url": "assets/css/0.styles.939f2eac.css",
    "revision": "93ae233ad2b862873ab9094ae06c7468"
  },
  {
    "url": "assets/img/scheme_bug.99856aa3.png",
    "revision": "99856aa311ff365374f158917bb198d9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat_bug.e251831b.png",
    "revision": "e251831b4357c5cae295cbee5ae6fd3e"
  },
  {
    "url": "assets/js/2.ea1b9c3e.js",
    "revision": "3346f5c7e3cb06474ba71989ad97b201"
  },
  {
    "url": "assets/js/3.2b00d2bf.js",
    "revision": "7f3d6963ae16f5f4b66ad165b79151cd"
  },
  {
    "url": "assets/js/4.151e3665.js",
    "revision": "11a5c39ee4a3ca84dd1675f02ff67cc7"
  },
  {
    "url": "assets/js/5.457e7486.js",
    "revision": "75b64beb9a094656ed5ea83c2ed05505"
  },
  {
    "url": "assets/js/6.3e9592ba.js",
    "revision": "9b2ed0b94e3e8eba318917a0f6ddb879"
  },
  {
    "url": "assets/js/7.d6a916cf.js",
    "revision": "0dd2e4c4fa0c304c2822e328cc4b377f"
  },
  {
    "url": "assets/js/8.9123b2cb.js",
    "revision": "12a6d214da3421937778a63f46fd8b6c"
  },
  {
    "url": "assets/js/9.73d0e2bb.js",
    "revision": "fa51cbc2fa6f0500d223d24f3d226231"
  },
  {
    "url": "assets/js/app.ad657204.js",
    "revision": "e62caf217c8ab8b4906fa78fcae59721"
  },
  {
    "url": "exp/error_handle.html",
    "revision": "16cffa0d16988b7692f98b91e21198fc"
  },
  {
    "url": "exp/js2app.html",
    "revision": "41a94f763a9171c4af7206c12972c163"
  },
  {
    "url": "exp/wx2share.html",
    "revision": "9af2ad016a16f528246d87634bc7ff3a"
  },
  {
    "url": "img/logo.jpg",
    "revision": "c004231f3a6c1491de349414cc58f792"
  },
  {
    "url": "index.html",
    "revision": "d88e937b1d44432f7ced29cb3f1b5862"
  },
  {
    "url": "rule/h5interface.html",
    "revision": "22dc18d557540750cfcdcc32290cbfc0"
  },
  {
    "url": "rule/js_rule.html",
    "revision": "5b1c29f5373f15141c44e237762e603e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
