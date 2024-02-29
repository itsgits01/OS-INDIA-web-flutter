'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c25a7d3f04eaf15f225bed653fe726d1",
"assets/AssetManifest.bin.json": "72160910f467823475f22377ad7bdc5b",
"assets/AssetManifest.json": "a373459ab10885122ad85290cb667294",
"assets/assets/images/air_cargo.jpg": "f028c929c8282321871b5a7f22358bff",
"assets/assets/images/ballot_3.jpg": "6d32b70f10fe2e308b23bc10d843a84f",
"assets/assets/images/ballot_pro_1.jpg": "35242b07885ff0759b6a3e0bd1634577",
"assets/assets/images/ballo_product.jpg": "6ca1404540249701187f9dbbe40890a4",
"assets/assets/images/boxcarsoul.jpg": "c80c2a2dad787e450b053d469e9c044c",
"assets/assets/images/cat_banner.png": "6e92339c9be5415be738a17a03779262",
"assets/assets/images/cat_download.png": "8eb867f061927716af8a303de5ae4494",
"assets/assets/images/factory_1.jpg": "6198af18d9f10d1330062f127772e63e",
"assets/assets/images/factory_2.jpg": "18b0d30e62aa81926bf06d882d582ff6",
"assets/assets/images/go_down.jpg": "bcf56915c0cd7ff7221f881560bb2268",
"assets/assets/images/instagramicon.png": "e869727b8637b7fd2081545bcbcd7b40",
"assets/assets/images/lashing.jpg": "a591267e5fbdfb3c6569568cff894387",
"assets/assets/images/mission.png": "0618d04f1cb8a97ce2ce23741d0b333f",
"assets/assets/images/office_1.jpg": "0a21768f919062a8b535c31939be2d01",
"assets/assets/images/OSINDIAlogo.jpg": "90f2dbda73f1f4f79ea9fa727719029e",
"assets/assets/images/osinfumigationfinal.jpg": "dcf35a405c8ee25868e6e9b94cfb70f0",
"assets/assets/images/packagematerial.jpg": "472f7f8e7bae9545f1b2939c03201061",
"assets/assets/images/plywoodbox.png": "4a4ade9cf11c0ef21e204923f8f73cce",
"assets/assets/images/ppet.png": "2317827b2af46bff4a05ded83d5daebb",
"assets/assets/images/ready_shipproduct.jpg": "73eddc18ae61a3c4b656724276e61776",
"assets/assets/images/request_quote.png": "b944caab6c24c846664c8babe67271d9",
"assets/assets/images/rubberwood.png": "647a44fdb9861cdcb8b3df90c93c6046",
"assets/assets/images/saiicon.jpg": "e9be8f029d3c8edae4d60f8663b82b18",
"assets/assets/images/seawcarousal.jpg": "4bf458db9acd957120eb430c29f093b8",
"assets/assets/images/seaworthy.jpg": "abe093b15dc93d662e8e9fb11531438e",
"assets/assets/images/ship.jpg": "77c6c9dde24b151af29dfdb0e2e02879",
"assets/assets/images/shippingmain.jpg": "df9d4e425e8c3e35b9b3b9414426ca46",
"assets/assets/images/stock_pallets.jpg": "2253e45810c41f437f697416c462be53",
"assets/assets/images/target.png": "bf7c217b1b4e5b56bb5f6511558aad9f",
"assets/assets/images/truckload.jpg": "8be4f8129f26424264ab0193719fc8a5",
"assets/assets/images/twitter.png": "a8f692e1d74ae65793b6d212794bc0c2",
"assets/assets/images/typewooden.png": "ccda9aec64475b5407daa9ab7d6df58d",
"assets/assets/images/vaccum.jpg": "72a0f04f92a2fddbe268d3b02f10a47a",
"assets/assets/images/vci.jpg": "e9eac65d6dbbab93353b406e9e476b96",
"assets/assets/images/vcicar.jpg": "5d38a6b650520f7f46827bdbc846563b",
"assets/assets/images/vision.png": "a8e2ce60157ca4ee477daad6c7b35c69",
"assets/assets/images/woodencrates.jpg": "76d624adba709861b255bc3015ca1eed",
"assets/assets/images/woodenPallet.jpg": "b018ae8bea0dd8ac713422d68701934c",
"assets/assets/images/workers.jpg": "b4483eb44feb702bca17bf58474de5b3",
"assets/assets/images/youtube.png": "c0069d2eae4aca08b2c4f4dc5210016b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8b1548dc25524b9b31e028a16dc81210",
"assets/NOTICES": "e68ae280880d7d14e3cf0a608b383ad1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.jpg": "90f2dbda73f1f4f79ea9fa727719029e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "08fce0a028f476c8d6077ef98d70f167",
"/": "08fce0a028f476c8d6077ef98d70f167",
"main.dart.js": "825db5bb2eccb26c650a69b01cf07536",
"manifest.json": "aad59a17bb2bc1faec66181b22e4e37e",
"version.json": "98c375d58cc47729c141d17fcc456802"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
