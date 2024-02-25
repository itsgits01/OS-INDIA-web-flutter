'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "4f415048143ca74f26fc96719da4ced3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cee9c4bc5ebd0fb76a83b35d0f26aa02",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c3abcbb75e2fe73fc4d02b435ffed3a1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "36e3d96a4062d4738c6272e404ee6af5",
".git/logs/refs/heads/main": "5080cd72f0dfbfce86499ae26644e2ee",
".git/logs/refs/remotes/origin/main": "ec933f507bb6554d1f2534bc79a8bc67",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/02/142b28d97d181199a8beed210286a65b59f298": "722045d499761bbe4d82fb1d8ae16041",
".git/objects/02/7904c918351cc964615a53748f9e2946d4b23b": "6a41873a0be580b6f4bbfe42c8515cd7",
".git/objects/04/1de2a14a6a0b3fc1403ca4d91da4f0ada00f3d": "82143a0fd0a20a779265885b1b0b5309",
".git/objects/06/1843cde287db19dbc05e8a1816aa986664d2e2": "5c1c52573a35910b9c2ae4eb72661647",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0b/a9e2f6c8d94d4cd60e9ecff0e183087e3ff67c": "c4e959ccbf78a27475e34ea64b3b1670",
".git/objects/12/b24f430b29d7ce9c250ffb97d31b253ce68bc9": "88b22625d557d0f126dec5e314eacc61",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/61e62b041c8c20b185f9301974fa3b33b4bdd5": "752a3aca0b04c7ec22854a57f759c95c",
".git/objects/19/d33a981dcf68a318392e9ce56545332bf45cbb": "61fb4400cfc12986ecd80c75ec08dc19",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/5a1b333f133ff16c1e3483eeb00a1f3b86176b": "1988673caeac56c32b56b3e2be61aaf6",
".git/objects/25/c466dd5888cde89660e57d783d2879fcc19267": "222c6f12c0649aa1bdd03278860473e0",
".git/objects/28/c973a327cc4b4e87e7c8a607265f6fc1670ca7": "f57ed31e2142c726668d861c4101e7c4",
".git/objects/2f/81735ddb8604eb201ef4c9e2746a372b921e80": "10da73be7ea24f22e979e9b7f9bad239",
".git/objects/3c/6da3c0fab5bef59969aa4f8eb1664cb7d90452": "5d8face584df9414edca2a38c135c90a",
".git/objects/3f/bd3e5e354441856f84dd0f87808cd6352af092": "0927319c59ee712d2e2b6e840bb7d140",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/0fdb14f84a8f1e50d44cd79ef4cfbe99467faf": "e7740d9d99a5ed699facc4ceb12a3772",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/52/8f3a7a04b0a66dcf011f084303e1bba8f86ae7": "58f8804384fe76813d7ffaa4b524b42a",
".git/objects/52/9925eb1d95cdb66ecc22fc2bcdbc27ac864e4b": "86ef82a501b807ef986be15f5cc6327c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/89f18ce53f0963939a616ae864621c64666488": "8940a570e13fc152c2b52bf18d188974",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5e/538583fb32c129fd51c6e511d1c48ac6b52f64": "25c7c5885f2fce0ed72575ba9060ae10",
".git/objects/60/c146048751a73f823f7164e2450ee2a94668dc": "79f1eed87ea9983e3c564418b71ea5d9",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/24c790c1106bfa2607b56c75aa3072a143c063": "742b683f4eae10c70e4cd10ef6dddf9f",
".git/objects/74/8cd07410d25ad0293e4b304661abb52f6c74c5": "b55ff99af34e09be58716bcb2fa3f4bf",
".git/objects/76/c3b17e8293a94a91d8af53ca2e4bf689214aed": "c26be9b7d223729ad4c44350ba2fb021",
".git/objects/7a/0430137435934468238615240f270d9c42286a": "2f89c6081e665ec2b85fcc96bb652feb",
".git/objects/83/4dec5882ae52a2dc7296c798cbd7582bdbe20b": "438b7efe2d48444f3f068881260f39db",
".git/objects/83/e7e60b47d40b948586a5fcd5e22ff754dc124c": "6f2877d04bbfd07ac2d6c1a42bd26bd7",
".git/objects/88/2500f8984adc158f5eca5bea43d5be27057f95": "e1e20a8131166195764957082da68ce5",
".git/objects/88/b6ad177b8f5cf5c6fe60708b4bdaa4b2102d70": "9794adc48416d3be07c9457738772096",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/d93fde3c1589605bb13bf822b4d347190a713b": "1b682567f9bd9e526b2eb9f8ce91b55c",
".git/objects/92/eab3aee9bfb514f6b07745fea803794dfd719a": "ced7ca2d2cc491e584e889162581ff59",
".git/objects/94/370143e7f66298d9b1c6a097cc6798065e3823": "0d06e4b2c48d9ebaddb6d23d605bb545",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/f5480769b88736eb869e049984f2efe7066e41": "6333c0ae0bf2837769e089603f7ccdd6",
".git/objects/97/e64b3041e2eb1d43088c3a3f5fc267ea2e60cb": "8e4fa4cc73ae4d7ae3de61b0c56fa80c",
".git/objects/9b/b79ef31d057ec4dc35dc5528c205cf9affdc23": "c4ecb9ba93a8f491b41b2885295ece27",
".git/objects/9f/860ae34ec72e64b944f8eac4cd98e83073e22c": "b2f008e12ae68c1cfbcf8696b7ddb382",
".git/objects/a0/3ae188345c189b40bfead2cdf2ebff59f374ce": "2f282ddf735857c5acc37a7a2e621039",
".git/objects/a6/9f740ab2b4d5cd1fe685f4ec781b0643578e0a": "5b86215ca7079df273c74cea7dcbeb0f",
".git/objects/ac/659db5890365e1ad6016161a67622221aaf136": "d1f517ffe5e82c9518fed271c166fc71",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9570c22657be20e80155f50f7a8ece7fc3eebd": "8e3e8155a73eba09736abca7fd55ef90",
".git/objects/c0/817c5df82185e224dc031c33896f8e751bcdeb": "89cf394d33e4d648a944d6dfbf329f86",
".git/objects/c5/8056a0a08f245f17c2bcaefc040c630dc6af09": "eb370d0579efec8899c9be78b2e9cc76",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/8f28ab7119b8cde5e9a741e13e6876d8c7ae17": "45b3809029986364150997da31e8e6ae",
".git/objects/d0/54cfbefb08c68f96ebcc02955b7778bf0ff354": "ddce37c3cfc6d023da36858e009c3da8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/23458290980003638289e02d0c2947353082e6": "dc4837a7204043bb4b4408c4909a4194",
".git/objects/d6/493980f5259baf0b3bd8d54d24863e3ea3f91a": "d960f3dda53ff3fe9de98145a34b4b7e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/d1fca9b102bd546698ba86c4006493a769f5d0": "25a04cdd8275937f72809cfe71fbd021",
".git/objects/dd/3a21ae6cf866cafa7f604ad2c7cf1961a98b10": "db3ab284c55b4194fd6d6cc8cb257eab",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/17b77a5e38808954643b81e253defba3c61ca3": "4af62adb08664a928b5fd887bfac17c4",
".git/objects/e1/6b7ba8b041335dfc38b8bd686fe6c398eee95d": "32bd3a78cd68d8b58f1ed70f5b98eb6b",
".git/objects/e3/119fa15b2d542e852e9a2630750bd215f1d0fd": "b22e39940f0578ce628f64b19efb417a",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/a8d9955573ef7243fbb7c1eea35d0e310d8421": "9e5b86601899210a744243a47dee5e02",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/11f6a6ebbe06c05ba4f96696d853dd86ccb568": "4ed503de75963a0d74302e7d47a1f658",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c56ed874a4ef7aade1e178d8f0419f8227b702": "264dd390f789284b1d0a12a143152faf",
".git/objects/fb/61931c6cf97b89d74c87d88c2d8e214befe0fb": "609cfe20528f54b1f6519827967aface",
".git/refs/heads/main": "7ea636e635c8e561733f20a5ba8fbb18",
".git/refs/remotes/origin/main": "7ea636e635c8e561733f20a5ba8fbb18",
"assets/AssetManifest.bin": "0237ed94967273ae20722a4f59d9166f",
"assets/AssetManifest.bin.json": "8de8a8d2fef98a9ac1bfa655c7bdba88",
"assets/AssetManifest.json": "3833d2d75af6ce406cd35bb223664592",
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
"assets/assets/images/truckload.jpg": "8be4f8129f26424264ab0193719fc8a5",
"assets/assets/images/twitter.png": "a8f692e1d74ae65793b6d212794bc0c2",
"assets/assets/images/typewooden.png": "ccda9aec64475b5407daa9ab7d6df58d",
"assets/assets/images/vaccum.jpg": "72a0f04f92a2fddbe268d3b02f10a47a",
"assets/assets/images/vci.jpg": "e9eac65d6dbbab93353b406e9e476b96",
"assets/assets/images/vcicar.jpg": "5d38a6b650520f7f46827bdbc846563b",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bbc6d12ffc1d715921dfd2ba3cca9bfd",
"/": "bbc6d12ffc1d715921dfd2ba3cca9bfd",
"main.dart.js": "048af5302473150170e69fbcd54b58aa",
"manifest.json": "fe801debed6730b83a0d18441a9cac97",
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
