'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a69dfa0e64c22941342c69c2ceca2b0f",
".git/config": "39a65014565cdd5595005dc84423f919",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "88cfc67d0aa5bc12903136cc4a8aebe1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "49c4371577f891fc741b95e46da4a6af",
".git/logs/refs/heads/main": "ee880119f97b6195793aa5593fdd1427",
".git/logs/refs/remotes/origin/main": "3b1ce8947dfeb02fced824087c612d20",
".git/objects/00/69c6352965e17705c5808699171c07e4a8456e": "6bb92bdf39547d9bd7540d92464bcf3c",
".git/objects/05/cef2311175ad0fbae08c18ad0e3cccc9aa5a49": "01e17f14c3bab5297fc3d7a0f731443e",
".git/objects/05/fa62d0065368e74eb141a3731b3cea7565f5fb": "eaf924bef8baedb5b15c24e8d82fe67e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/81e9246d537e10e9bd8762ed9504badf2c214a": "fad44b298c066fac20c884312714aae9",
".git/objects/0f/93a38894b77e3f9ddeccdf5473c18d0cfa28c0": "709d65c49ed44b40a222c64b38543735",
".git/objects/12/067b7555f6f7f94f816637e9e9b2086d0d4dc6": "62321c1e2a80fe26d97f896b51199712",
".git/objects/14/491a6f76fb8f4e74adfc8c4e3f4cd1ca5ae098": "d1a895695a146eac3566c567131c17d9",
".git/objects/17/504005ce2b0ad9ea2a5ac36a7fffbd17c8298f": "337dab34ac34629fe397f9957837182f",
".git/objects/19/fd620d80eb29c61015fbdbaecee32d7a22f841": "7308a5e565b7aae5e6f3878dc6daeb0e",
".git/objects/1a/32d0882da581b8fc6c4378db4784ebd1dd6ad2": "1392d4ffce088c52cb96ceefc871341e",
".git/objects/1a/a27e86776c533e87c3046d8d302bcb36d83ea6": "10544c4baf4e8a7d86cdf671dbe7997e",
".git/objects/1e/e22eef6c2e6d4ccc950e398ae4983fdc7db290": "9703e2054e880e855db9c03dd8696821",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/88abb5f4bb78dbf9a567bdb06d6dfc66d7a1bd": "a2d6c2ffe72d1b26cb6c01668cca97c6",
".git/objects/27/a9ea1fa56be6a69e775382f114e78d746c20dc": "c8e102286fd51af909ed5f3a7838241f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/88f0c7d02486e4771519267ac8bf2862de2d1f": "e587c02045231fe99781b5c44c64a97a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/49/6e8242a86a3730d17d0db40d3c4185f2b19b98": "450d60309a8e160874d084b1158d6bd3",
".git/objects/52/a660dc2e51a6c302031faccc09b66a47e38fee": "a5bebea3f077af7ad2e0f759b6233a08",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/e685c8c6b23ed733baeaedee388a0446d3b74d": "7da24c7629ec75ce32ca674bd1ddb7c0",
".git/objects/72/145ffbdbf6cf9d707a3d3f6b43d11ab8575317": "fb856dfe7f0d6110293c4ddb9f1bb928",
".git/objects/74/621eda8ec4d3f9da59d7b006492744178c8671": "aa1867f43c23db31418c70455d7df053",
".git/objects/76/2117aa7d6ee7db9866a36b217a4b9ec1c99517": "ceabd741b7275cf2f7b0979a88713523",
".git/objects/76/2853af0726ff007557791c5ac759ea521f5d69": "a13d12549104b03f7649ce0be2493c33",
".git/objects/7b/9eb4b8822a26954f7763ca0a5202f5b422258e": "cc80c2e195db217eef1363196ddd801e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/9034896c0adf3aa7b03d959f2bcd3245616950": "2fd1e8f381f34b3d0f413ae4ecdce485",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/100b4e99862ac334064d8ca9f1094d63846c81": "24bb9267052fcb2d73c9e90e0f559413",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/540aa7e9739215a7a1e6065a40dc56f745eb0c": "87661bef8f14561b4a16685a951f408d",
".git/objects/97/53dc3390dc2c3ddddf077076b8501bf4e4a6c0": "7131c96b3c97806fc9cfb997d7a19f62",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9f/2de3fbd0e66075b9b97c3f771441bd429dd5e0": "64b3ec12e0bf7e88d020a6c6e08dba87",
".git/objects/a5/655900a0915fc630a8b5683efaf13bb33daa2d": "241419f253c1b5528a5734c27da527de",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/80d3c4980702a635859ab37b6ffe827ab01d3a": "0970ffafd73da7fd089a0d3c391c4a07",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/b619eaf81f8ebe8678b0c8a9b27ff1c9d43bbd": "f5ab91666c22fcff5b9613d89e44bd18",
".git/objects/be/2d7018de3272f9700ccf92dd6fc7361cc895cf": "4e7fefe5b4db600f3d6654a92279a43d",
".git/objects/c6/559bcc64a0ce375f6d4c1f7e5886680c2c7b55": "ebde88431da971d3a0c19801e7d4f91b",
".git/objects/cc/71be1ce2f891bae93144642e1e017d63524b6f": "852dd54c821ca7b261220219c271e278",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/ce/ed8c6b901afce9b7a46bb547dc1f0660dc8482": "80ad667354b634b1d312360b202a4a00",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/7754d7aa531a7e406a44149c4b1759562c2ed7": "e62895def0e88f62758bf86e36a4912e",
".git/objects/d2/190b5139486ecf8c655e1cc1d06e8df3ffe249": "38d744ba160ce93006e81e51ecaed9b8",
".git/objects/d4/2002abc9b04e330fcc1201ecc59e816d8f31ed": "f362c12e41ad53319c766e934e4492a2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/61f49720047a5ecb690f36419d98a06765a9ca": "ed2b4b351c37e682a95929706799396b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/a82506ffa75d5225cd008cf9a611682ac71978": "ae967b37ff8a1f446f6fe3e6c7b2bc40",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/f53646b5cf0fc4137db13996075bdaf7c745a2": "93ce4bcbf210847b674a15dd0f4da2b8",
".git/objects/df/0f4e0daf8d736dd3f358386ec638b33bfff68a": "c3da706775cbb8c8e29bb820c3825bf3",
".git/objects/e2/0b8be92c385d717effcb0019300d5ceb43cc84": "4e7044782185fd86b7e15637eb86e6f1",
".git/objects/e2/e912a3c188af2912ae06de58335ba6d265bacd": "687e94178d206ba65df12530ca22f9e4",
".git/objects/e5/32f22cdc50306c15be4f4fa0748d225083754a": "43bd0a534c82a6cd8042783bbfbce67d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/21e9293bd4c9b38a8c8487aad413af67af0d97": "22a6db5285eb9cadea79ab7566ce9bab",
".git/objects/f6/26e8a99e3b0c5f217f89405decde787b235274": "d76c75a39109911d5652a76604dd0ed0",
".git/objects/fa/f56ed5978a92b4b2757532beaab548ba7e5cce": "8923ea712abf8897756cede6a2998747",
".git/refs/heads/main": "fb562cb3cd1a6ef2484d813e0bb5ab2a",
".git/refs/remotes/origin/main": "fb562cb3cd1a6ef2484d813e0bb5ab2a",
"assets/AssetManifest.bin": "cb431696d2c8ea90363d9ace532bb414",
"assets/AssetManifest.bin.json": "eaf0e36e2355ab61012eaa9f982cc98e",
"assets/AssetManifest.json": "ec4a939ba8acff12f4c7f523f961b31e",
"assets/assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/assets/fonts/ProtestStrike-Regular.ttf": "13efba3e0bc1aca51205e8d292a72735",
"assets/assets/images/1.jpeg": "692c553f608cc88cb9ebb7e266e741fc",
"assets/assets/images/2.jpeg": "5ff813ac0675a6daad21d64dca3e422f",
"assets/assets/images/22.jpeg": "60964d643fb5920700c82c3e0851ac91",
"assets/assets/images/3.jpeg": "dbcbafda1fd3fc0928374ca002f4f421",
"assets/assets/images/4.png": "f51a1bdfe7a3f70f25710e4fcf56455e",
"assets/assets/images/5.png": "9122854b86aecfde64348edccf8247d6",
"assets/assets/images/6.png": "df3b986d20654942ff5b2c473821ab3d",
"assets/assets/images/podcast.png": "632dce323adc22ddb174fa9f3232affb",
"assets/assets/images/reels.png": "967b656f05ea69d72b2c5e3217be17eb",
"assets/assets/images/travel.png": "d46643fb211d829b79b39cd1ce479573",
"assets/FontManifest.json": "274fdf3d521ad87ff3b770193d318419",
"assets/fonts/MaterialIcons-Regular.otf": "a2578c56b5b018692b48d52d36340d94",
"assets/NOTICES": "774cf439b17539da94cb18a104d97c9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "40a3057d84730893d8c29eef7a10ae98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"cors.json": "6b990e0f8ebd7f32b86dcb21ca38a114",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3ad958bac27b271f42a480aba0ddb06a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "07ac512551e2ad6c4efdde90f794d75f",
"/": "07ac512551e2ad6c4efdde90f794d75f",
"main.dart.js": "389619e176afc1e1e6cad0907df6666f",
"manifest.json": "8e27a4256d9cfb7f8c90f356c35f8b34",
"version.json": "199edb8f087b829cc83d9dd1a382bd76"};
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
