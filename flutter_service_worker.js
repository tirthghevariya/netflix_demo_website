'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1619342ec8bbf6ba2a65685e546664d0",
"assets/FontManifest.json": "e3637cec141ff037b4151edf1c0411cb",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/atla.jpg": "5b65b1115886e026df8745ce0fa17a2b",
"assets/images/atla_title.png": "6155f51047594677982d4b6aa0c614d2",
"assets/images/black_mirror.jpg": "bbf94b8f7e8cbdbf2c4e9a5b92ea0790",
"assets/images/black_mirror_title.png": "f6ec0b792069f472d2e36634e35baa69",
"assets/images/breaking_bad.jpg": "7821e297df27197cdda67e13e82188b8",
"assets/images/carole_and_tuesday.jpg": "e787073ccc9428249afe92313d00c6bc",
"assets/images/carole_and_tuesday_title.png": "1f8f81cf47fccb05606f3df26b7695eb",
"assets/images/content.png": "938f6f7566542591cfc90e3a9269346e",
"assets/images/crown.jpg": "47eaa139afb5abaf6dca5407f64080f7",
"assets/images/crown_title.png": "02fa5258c38d51bbf902520255352dc2",
"assets/images/dogs.jpg": "2b8484bf41be42ce95d42c193cec6a8a",
"assets/images/explained.jpg": "431292d11962afefbfe2991fd3d01a67",
"assets/images/htsdof.jpg": "c0f043e4ae001920e0f1bd10042d8549",
"assets/images/kakegurui.jpg": "e53e90e841c33926c45deb4dae78442d",
"assets/images/manbee.png": "93d6b6c0716f3bc6466b8cb1c4a26c51",
"assets/images/netflix-1.webp": "e86ba52228e417279b0c082269fac91d",
"assets/images/netflix_logo0.png": "90753a23d851213f214e1faccc4947cb",
"assets/images/netflix_logo1.png": "451f1d563a05a249b69772cfbcc456e7",
"assets/images/page2.png": "b81d8a22432b227828bdca4b9c732bf7",
"assets/images/page3.jpg": "e909e1639629bd39e0168848d86e9912",
"assets/images/page4.jpg": "a26564b60487084add7e09584c1231fd",
"assets/images/peakyblinders.png": "95e88084100ded7c5d12d86457f305f0",
"assets/images/sintel.jpg": "5b4a20ec9a07e03add61dbfff0def608",
"assets/images/sintel_title.png": "213547e6e216ec48180c091ff8c8f13d",
"assets/images/spiderhead.png": "0740985019d490ee6fe334c7718e561c",
"assets/images/stranger_things.png": "ca1a95f46d58e081196d1ef487b9c39a",
"assets/images/teotfw.jpg": "b1ad8119028caab99a82ae253eb2a8e5",
"assets/images/the-witcher-movie-poster.jpg": "e8a16677241dce3e357c2412f8917875",
"assets/images/Thewitcher_title.png": "9c86e0d953b985bad2cf5847a08e28db",
"assets/images/thirteen_reasons_why.jpg": "f3c6ba25dc548121333e15a5401b5bd2",
"assets/images/tiger_king.jpg": "09f31639810f01424f9e13d47cfd7075",
"assets/images/umbrella_academy.jpg": "694538108dad1b7bbf145065d438f0d3",
"assets/images/umbrella_academy_title.png": "0fc8a66b919dbffb8cb464dc30939b22",
"assets/images/userimage.jpg": "991556c2526eb97f8e745b79363c8661",
"assets/images/Violetevergarden.webp": "440f7d08bd131fa663a7d92272875321",
"assets/images/violet_evergarden.jpg": "2d3095573a37672e6155447e371d6ea6",
"assets/images/witcher.jpg": "36d8eee67f80feedbf05534e642247ae",
"assets/NOTICES": "39be95138271994ed0a5373e9ef7ec46",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "11eb67dc0620e3801826766cbe356b6b",
"/": "11eb67dc0620e3801826766cbe356b6b",
"main.dart.js": "03bdceb13a7d53fc442539ae747b5d7d",
"manifest.json": "4d0fa50bceb9164c13190d8b26a700f6",
"splash/img/dark-1x.png": "95717815e9a109a1d461a89f5c5eb6c6",
"splash/img/dark-2x.png": "dda4868f08318b530e418acc5aa0d3c8",
"splash/img/dark-3x.png": "8f637b88b67b7ac08cd0b29387fe9959",
"splash/img/dark-4x.png": "3c99a5c183b673f5c7c993defd1971b0",
"splash/img/light-1x.png": "95717815e9a109a1d461a89f5c5eb6c6",
"splash/img/light-2x.png": "dda4868f08318b530e418acc5aa0d3c8",
"splash/img/light-3x.png": "8f637b88b67b7ac08cd0b29387fe9959",
"splash/img/light-4x.png": "3c99a5c183b673f5c7c993defd1971b0",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "051d090817004f223014d935c4396f01",
"version.json": "0617f3fbba59b11307688f269d4f3f2a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
