'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "19caadb854173d49b9b5ce0b3b0c0b83",
"assets/AssetManifest.bin.json": "234b994fa66091c2cc722d5cff6b2068",
"assets/AssetManifest.json": "24ffaf19ab98112b07b81a3438013fc3",
"assets/assets/icons/api.png": "3d057850e31c09ab6b51dff3ddd7c667",
"assets/assets/icons/coding.svg": "4c4956d85cb93df21b06b2db2c4b4a8b",
"assets/assets/icons/css.png": "9919f777d2a351faf4404fcff8fa4dd8",
"assets/assets/icons/dark.png": "7a9a99a00e299a294697bf3711643afc",
"assets/assets/icons/dart.png": "4aacfec51c9a096a1b757ba1dc1c933d",
"assets/assets/icons/database.png": "4300ae129e77dec1dcab109564f43ffa",
"assets/assets/icons/django.webp": "72abf2b3ded72f5056d1bde45c3a086f",
"assets/assets/icons/figma.png": "c4e5dc676628e6f2c4fa8037e3ee2c15",
"assets/assets/icons/firebase.png": "3602dbeac7b595e78e75ceda8f0e9002",
"assets/assets/icons/flutter.png": "09c44f12e948ba9193426dcc4aed3e5b",
"assets/assets/icons/github.png": "fb4f48eb7b08b8dee3e7c37610684a9b",
"assets/assets/icons/html.png": "10aeaa8c8d84886c84095fcfa68d2326",
"assets/assets/icons/java.png": "8fec706f0779e8aa1ec514b684af36ae",
"assets/assets/icons/light.png": "f1c850e21ddb0677235efc3a75ef081b",
"assets/assets/icons/logo.png": "81baede04c19876489a98715dd4895d1",
"assets/assets/icons/programming.svg": "f9b9c8c01fac775ebbf4f04b92fbaa51",
"assets/assets/icons/python.png": "5dbbde506ef128f6584ed0a7304464ae",
"assets/assets/icons/swift.png": "f80169225dfb4313a0a39ef107f55d50",
"assets/assets/icons/xd.png": "63c16b3e95841b22f574288c210ba55c",
"assets/assets/images/getApps_badge.png": "9acea595ddcdd2b3e122dd8075e3465c",
"assets/assets/images/github.png": "2051f52ff70514982a50b76877bdd74f",
"assets/assets/images/google-play-badge.png": "93e5efd4c554f48ca0156ece74aa6ac5",
"assets/assets/images/profile.jpg": "43b06585b2b5321fe1d7a11f3a99e0a1",
"assets/assets/images/programming.png": "65beefa152a6bcf67ce1a251a6592473",
"assets/assets/images/website.png": "d651ebfd7c7527d9181cb9723b692353",
"assets/assets/project_images/acma1.png": "0ce5aadb944e6af2cd7b0fba5a0efd07",
"assets/assets/project_images/acma2.png": "a45647d51e6c20da25456603f7cef9bf",
"assets/assets/project_images/acma3.png": "a1bdc8e4c5e368344db74214d16ec771",
"assets/assets/project_images/acma4.jpg": "1f6d8378be5da27866368db61e557a00",
"assets/assets/project_images/acma5.jpg": "f1d3d3e86ab5d9b84862d584588c00f7",
"assets/assets/project_images/acma6.png": "344c91476f6c992ff6f7aa8d98aa279c",
"assets/assets/project_images/c1.webp": "61350ecb57a9083ecd373d855ae254a6",
"assets/assets/project_images/c2.webp": "393656dce4e28ca9b8ad4e1414da132b",
"assets/assets/project_images/c3.webp": "f1737d71d1e74ee2a908769e6669d7cc",
"assets/assets/project_images/c4.webp": "9828758b4f598d64833425b690d5b1d8",
"assets/assets/project_images/c5.webp": "24e257188e771d9dbac7aad574fc20b3",
"assets/assets/project_images/c6.webp": "393656dce4e28ca9b8ad4e1414da132b",
"assets/assets/project_images/c7.webp": "f1737d71d1e74ee2a908769e6669d7cc",
"assets/assets/project_images/c8.webp": "9828758b4f598d64833425b690d5b1d8",
"assets/assets/project_images/c9.webp": "25c00d0365fcde1625662d2f09942863",
"assets/assets/project_images/glp1.jpg": "c067d55a626c26dbded63ac7f1abad33",
"assets/assets/project_images/glp2.jpg": "46c2cc3ff9650e94a585f9ddcdc59b8a",
"assets/assets/project_images/glp3.jpg": "b5ac6d4061a98036cf16778d5a26af4a",
"assets/assets/project_images/glp4.jpg": "1d92268864531aa49f97442f585f1415",
"assets/assets/project_images/li.png": "c7d09eb91f1b1b68dc436a4242a97d11",
"assets/assets/project_images/lib1.png": "53d266d571eb0e24af039fa8ea14b6a6",
"assets/assets/project_images/lib2.png": "2e3d25d6707bebd0a33768aeecb3644d",
"assets/assets/project_images/lib3.png": "a81462919ce1b921a8767b9b5acc2fa5",
"assets/assets/project_images/lib4.png": "053bb7b15407d95aa3eed722f5e7b615",
"assets/assets/project_images/lib5.png": "6344c28350dbfb37933dfc32e08aa4bb",
"assets/assets/project_images/project4.jpeg": "4d8a971e16df4967009203b0c6322e09",
"assets/assets/project_images/project5.jpeg": "23594affc186a74dfce66b598871be0f",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "329f2feac2097c94bde0d7ca25c2823c",
"assets/NOTICES": "057026afedb93e84a71be6437735ebad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "39f948f9c642e71563673bcf92fc7580",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4f7b8336f5bbf9d7731fd1f6f203b863",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/profile.jpg": "b33f856cae8fe0f7892d093874b0c227",
"index.html": "1f9f2a5c639b6d9a958219c4489490e2",
"/": "1f9f2a5c639b6d9a958219c4489490e2",
"main.dart.js": "ffd6dab2253b93358d81499940f50bfc",
"manifest.json": "9fc6eb5192732fa126cab213a8456389",
"version.json": "a1752005c9675220f69feb8f34c32637"};
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
