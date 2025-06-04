'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6f9ad22904617e9254081420b9836e02",
"assets/AssetManifest.bin.json": "e05c0da8ef0d2e3a31e4e76e3e5f52c0",
"assets/AssetManifest.json": "db1174fea2568c2c224329085031f95f",
"assets/assets/ADNULeague.jpg": "1a21b22485d6aacf68c0e6ab9528b206",
"assets/assets/ADNULogo.png": "6a962c3ad1324da12b58f8feb69b168e",
"assets/assets/ADNUTACTICS.jpg": "e549f3ff0a2f4238fa056b1445dd79fd",
"assets/assets/certificates/Cert1.png": "65e2e3890c4b7b27a7c6e1c242922403",
"assets/assets/certificates/Cert2.png": "cecd7aa72199aa9f2fc960a4942f70f4",
"assets/assets/certificates/Cert3.png": "894c5d251e375a7df9e7ce288b4ed709",
"assets/assets/certificates/Cert4.png": "8b822d28f35d33e5c67c0c04b3953b61",
"assets/assets/certificates/Cert5.png": "75d2a7cbf20ebe44ed21a50d38a5c364",
"assets/assets/certificates/Cert6.png": "fa302c275da852d44191951f71c3d501",
"assets/assets/certificates/Cert7.png": "2921def407e03ffcf8c00fac38422b84",
"assets/assets/certificates/Cert8.png": "886993d7f22325af20de84e969788097",
"assets/assets/certificates/Cert9.png": "4b0ffb6abe317eaecb00b664cc157298",
"assets/assets/EPLogo.jpg": "23bbce7406eccd6e2fdd987d0fd61b72",
"assets/assets/GGLogo.jpg": "006ce1d7f153f86626ffc9f721f5eb36",
"assets/assets/GoldenGaliants.jpeg": "c5ed01cb2a4b2aeea79cccd8be2ac0e0",
"assets/assets/John%2520Rafael%2520D.%2520Yapchiongco%2520-%2520Resume.pdf": "33c6e9628d961f335543ccd0d2b05cc7",
"assets/assets/landingbg.gif": "dbced8d46b1cec4262386d9fdaab4bae",
"assets/assets/Neuromanuals.png": "1b81356ab26ecb4417fe280b86a7245b",
"assets/assets/PawsterProject.png": "fef8ac17761a53f658d0dee5a64e8d88",
"assets/assets/SamsungADNU.jpg": "07ca4fd1c4a79b9b42617a6ee00bb7c1",
"assets/assets/servermaintenance.gif": "c1827836869078e439914667b0b8fca5",
"assets/assets/SLEC.jpg": "d9d959bf6dba5b5737092ec3f7bbccc8",
"assets/assets/TeknikalPH.png": "c54686673643d4194336a69c0687a975",
"assets/assets/UCLogo.jpg": "f82f6513132a8f73029fb1c93dc65033",
"assets/assets/UCPost.jpg": "9a476d797c45daa61875cdb563d40847",
"assets/assets/UMLogo.jpg": "9db3737ef025c93311b9662d0e3a58ac",
"assets/assets/yaps.jpg": "165cef4962fd592204d863bc36fc69ba",
"assets/FontManifest.json": "0816cea33bc0dc54f4a13a2c09475c7e",
"assets/fonts/MaterialIcons-Regular.otf": "b6ed69fc734c2bd8bb54340811ebbb02",
"assets/NOTICES": "7caf760211b7d4e77cc29f1dbfd886b8",
"assets/packages/antdesign_icons/font/ant_icons.ttf": "8eee6b6f3958c70a1da7d517e1c0107c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e8f89da262afa88b795aa33b88d7721",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2d5ed6cd7d67d20dd6f2f46dc5d04b2e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "507d76e5ea1c78b8224742615bdf76d9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "96d764dc05401cfbd2c83cb1e5564a99",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a8a03f77fefed153167da0d9c4455db0",
"icons/android-chrome-192x192.png": "4ba2b4098a271337412b047f697b37aa",
"icons/android-chrome-512x512.png": "df9f8aed56861129894a8a560337c69e",
"icons/apple-touch-icon.png": "d4d085dd5460e6791626dc536ed6eda5",
"icons/favicon-16x16.png": "889fe44555023a1932af9a7de57fb2b7",
"icons/favicon-32x32.png": "3f9435e5150fb6ad00ac07945ddd3754",
"icons/favicon.ico": "490700847b85c8a88626b812fb9862ce",
"index.html": "3719efb2db8bd5145ca4cfccff8a15fd",
"/": "3719efb2db8bd5145ca4cfccff8a15fd",
"main.dart.js": "814ec54e90f752761185b2342f4a1a55",
"manifest.json": "93b4dc6bea09d28647690bc9cafad4ae",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
