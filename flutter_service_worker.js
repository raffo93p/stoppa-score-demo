'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cd9e18b321fcd4af772e192ec4c857c1",
"version.json": "2d149b994de74b1efafabdfe023cc869",
"index.html": "cb565a9a0d0fce5cb14c9819ddced2a0",
"/": "cb565a9a0d0fce5cb14c9819ddced2a0",
"main.dart.js": "82719b74e2e9f25bf7ebdb39f3e56ee0",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "05aca640b5e0e330e155774240f46e19",
"icons/Icon-192.png": "c0af1febdccd5f3fdfbfe9bf6888f42d",
"icons/Icon-maskable-192.png": "c0af1febdccd5f3fdfbfe9bf6888f42d",
"icons/Icon-maskable-512.png": "07288196ba5d2cd1708bba41023e5a85",
"icons/Icon-512.png": "07288196ba5d2cd1708bba41023e5a85",
"manifest.json": "938e827a76d2391e255692a5e16c026d",
".git/ORIG_HEAD": "fc87df7db78f69e99f42544fb6db35e0",
".git/config": "b86ce4e23e2222ce45eb0995452476f6",
".git/objects/61/d20c731175ea621bac248b75d2bdfe3540ffd1": "023e484236f06a9db1755d9dc070f09f",
".git/objects/0c/551214cc9af754805727dbb97177460043c86e": "2803b8ebcb3156779e774452ac733a21",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/03/6744a084ced4baa856c574729c2bab52b09732": "5762c370cd21ba7135633c6e7eb0e50e",
".git/objects/32/d6c3f3454d3e88b62f15610c282672ecb18877": "45f65f971565196b079e9dd647fd6ff5",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/0e/d55075d3fa92d6d78800b22ebe2c0102f10e3f": "42bf47a848d321c579e4663313d03fed",
".git/objects/60/9dba1a62006976a77c086c006dd64a426f2f3a": "7139c9d89245662ac45149024be0ad2f",
".git/objects/05/7aeedf2d8e90840e6e338708799e8e8136be76": "5bc81d8f9b2daf18f3e25c4e27bdf004",
".git/objects/9c/b299fa302d675626fe78e09b17d036ac35c5c3": "5b4bb5d503fd84927b8704d5f5fcb731",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/fa695cd034e7fe5d328fb7ed145ac9728c2fab": "54c0054a32ec67f0208a1f6ccf39ad95",
".git/objects/bb/0aa6a1b82be964cfde243d03f73ff9ec843585": "d9bfbe0b886bd5510d050f4cf55762a5",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/877c747c1b9d915213365ce072ed03ee64d0c6": "87619b80ab9b400ddaa2e918bfc662f4",
".git/objects/da/208c9a0208d3a6e2411b56d8499fc01c92cf91": "aeb5818a3d62983e16bd6267d3bd6209",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/62ced1f9618f025e308195663fd715ab976682": "3e4d062951b79e39d204ebb4a56c4e7f",
".git/objects/ab/91cbf52fecac2d1f5c49637cc621a63ef6871a": "ae468c8b5904629f733b978d156bc1eb",
".git/objects/e2/b5089a2c683899d0233928277d988601af9abb": "0b6efb8137b56e349f77ea260f5fbacf",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/99a798521e8d31e5fb08a06a76027b424e8e12": "dde1e189c80b9fe5df88de5e24c5e065",
".git/objects/c0/ca019dee6e3015adbd937904e475089dc90dc0": "002a8cb1f03a3ad286a7dfb95b159898",
".git/objects/c9/808adb70405e3c238a9347f7e9c1ecd7c1c73e": "6e41cb15397f7253f036bed5b2b124ce",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f2/98c91a093e5eb9a9ba627067e0ea3e059b1f22": "bab95980b702553088ce22810a3bef5f",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/fe50e2ff3212357db4178ba631e8d1d2aa8233": "8574cdf9d04f983d8126a21db15d3c2e",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/5dd8d89662bd633d3fd7fec8d1597fb88b26ba": "c9b432cdf736003e58b03ea983ae6283",
".git/objects/c1/2a0bc7f5e47bcf4e6e442dd5a1f9d545985399": "c06a667e62e406347bebc90dd85825d7",
".git/objects/ec/c8115b2840ffb173a6e6524d6bb4fe6c819810": "aa4eb73e55c9077bababcbaf47492d75",
".git/objects/11/01dd4cd5cc9220df8869390734a0b25dc9adec": "b438d8ed42ad5197a32dfa77291dc65b",
".git/objects/11/20360f16545ffca1a7b5bbb10f1a90e722e79a": "fb7aee0f90e96c83054e1ac1987b599c",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/1f/57c85e2c4ecc07d26daf2a39c7662ff811488d": "2b378be063a1f3062df9997a6b464a70",
".git/objects/73/8e78cbaa7b2b933487960de0041ee24f65d2db": "1fed58be44c66c78151010b63429f7d4",
".git/objects/73/250f3e98f4b32191548672b8b243a79025a3e1": "c0fb136d16b31f585cadc7b1aba80bcb",
".git/objects/87/67f8ad970d6c47984e111232bc86559a164f85": "6d93a8c81c5de9e3e734652c6646208c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/40ec71c8540f95b276cae9cded3f6d3f7bcd22": "36ad2562cde182e42685ccad7a743e1b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/2807068c6e47d2367e54ad5cac24db96272956": "6558d0251789d922879bf7cfea0e2663",
".git/objects/26/dc515ceb771af39d9d09cc0cde5f2a774214fa": "cb67759d482630ba4d5bfaad96494451",
".git/objects/4d/617f42d26d24751f6dc5981edcb6c82377cc68": "288d668e60592b7456626376c09ec951",
".git/objects/75/9c87eac2062cee9a549f01ab483fe48b5ab438": "168796f29e18a9457bc9622b8d93aef8",
".git/objects/72/7ac4130bc528d9475dd19c05b006a893c9038a": "6144933334e589a814ab523053f8c68a",
".git/objects/44/a1804ff2ce8cacea9a66500a538108e26c1a14": "648439c4d9d1f22c30e35ea0f3e86796",
".git/objects/44/d7b4f39ee846fdcf5e8116a4e7453857fc1782": "6626940f49a9581859a2c24bad70d32f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/04b56ad2ea03960ac269cd3a15ab70c3cc5560": "7c369d93fd2f9ba9be8130f31b732cb4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/9a/ca94b98d31f0a04815bfdbee732ac557e8534e": "7d674301f595876b208f6162514c0aea",
".git/objects/91/5842fd10dc5797cefafe38ec0a2036a21988d5": "c708b922495ff56909e75b79db2e6645",
".git/objects/91/cd9ef99aaa9c13b56735732a1d189dd0442bff": "15d187022b311810f830c36a1fff3ce1",
".git/objects/65/55e5a6c91c80db0810781b492509201ee5a195": "88f3473545982fc42f061094de98f205",
".git/objects/62/31d67fe7f752701a99a5a4a9c3952c559857db": "ca86696b46b6250984b839fbde80adbf",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/98/54268361472a962b01f36429a9ee11e6482097": "71823daae92a7ddcf631176b449ea8df",
".git/objects/98/e1dd1005dc19ce482f34dbb5aa94c66a1efb9c": "713db2a89699c28a72d7b157aaf3f43e",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6d/9618c8492a8444b5970069c8fd181f462bca1b": "6c5668f0443ffdba762ad5a618ab1a4e",
".git/objects/01/e33e4a1a7903712075cdda101b0db326364846": "55935c297809876a94c19af9801c0edf",
".git/objects/bf/7b36baf63d6e253df17ac91a8632ef260b6c5e": "6fd057045349640b375e30c141242b56",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6441c96a22c020b1593e2fffc708ec21dbfa39": "a83d972f05a67090f00dd4dc48188cdc",
".git/objects/a0/2a0b0db87b025b79d3e6ebd1f27fef59ee9126": "682c2e01cc8d60b27fd6befa66702f6b",
".git/objects/a7/fd555cf7147202e88b28ef0faca2a2fa9bdbd8": "5c33e747b9e8779e582e47449b418ad3",
".git/objects/b8/2f9649df6a7610fc17d8008061881d307ed2f2": "191bf48369f6c5909c4d552814acb4fc",
".git/objects/a9/1094fa093ba5c222f28f73dde44cc85ede467f": "7c4f525b7255a3d86293bbbcc9e90574",
".git/objects/aa/a7902b6855ec08218885e036e617932406274a": "92cad01477e762ff16c9dcaa7c4d391d",
".git/objects/aa/7db25cd106791ef1cbe88d92efc3c1d26e60f5": "b8a2e579175b624f6110fa54f08e37a6",
".git/objects/af/c31c110369cb2f20869ebea2a78448f9ff2dd5": "0448236d10d833a2d93ec598249fc0f4",
".git/objects/af/1049b43efec9e8437a1bb49ebfa42699daf38b": "edc088ec534b24a08911e9120f7a5878",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/b1c7e235f30aa00acc1be398e5290cd23013c3": "f265cd1d51c5115e0237035abbfdfb4f",
".git/objects/de/5d8c0822c5055862938811f31425edac65a4cf": "aa768d293bd0791621b5dd6a87e5ff55",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/a1/22072cc09db392ca1d7f283ffe83b7d27e0eb6": "0676cb7a1cd4931ff871d9b9d6a97ad7",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f0/89f2ee7ce1cb23d38a7d0a3919e8653ccd42b6": "5805e2965af2254ecfbdcb3d28d345ec",
".git/objects/f7/0317d283a98731592ea0046723eca1431c1151": "97d91fe0b6dd725da03c1f63efdbbf81",
".git/objects/e8/586dd21d857c8b8d30f5e1dadc52cb45f6a173": "d2edde4091c76b557052f74b34ccf8b2",
".git/objects/c5/b09abf261ae9794674958504900bff6b1ade2a": "afb3849ca50b7b1157ffd274e18b6256",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/06b97ce75f162966bb5d1373430ed4cf802d89": "3e5d0da6b6e986dd4c9bc6e727acb5e0",
".git/objects/f8/4b1d26cf2c08d078c923bee6643e12a4a65fae": "08bc4b3787c45b66530047fe7570edfe",
".git/objects/e0/931744f8f2ed66c1b54647fbe8d6fe0cc232f4": "29c519b266ae72a929e862cd981a0f82",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/413ef96cfa78236fc7840e519ee24f830013fc": "10744e0369e7e16a9bbb09b38ca6a572",
".git/objects/79/eea88339f340f771643ee12911bae7bb2208dc": "bbb0a2af9bbd61b82ab9e41350dab7e1",
".git/objects/2d/94c46000e29814a0d8eb1c419d1313b0cfbe4a": "a4aa89b86b6dd53fdfafdabff66339cc",
".git/objects/41/db290723c19d9117d45f1a735d174d7e89a345": "8fe826d144b5452560f7fe54f594f38b",
".git/objects/83/f2a0701f196f35cc6113d524ff05554e472ca0": "d3b3c3d0b273e0eea0dc3ebb9245f84a",
".git/objects/1e/d2c5f002ccec52d136806e009dba7e625cec6d": "ed8437401127ded54f419f28ac951390",
".git/objects/23/277f695c85d3f28052e74f926c76209c98eeb7": "4d5973fafa4d1a5a2019143a250225be",
".git/objects/8c/d8791c0da49a0d2b6b39bb875d63baf1b52825": "f7c12613f527a73a76423a432b34b9a9",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/82/0cbad7b5ba5f0a7c9e0dc2ae4449f218e690f7": "6439a971ec3e708e5543aaf2abbc0434",
".git/objects/47/2a4f64bb4105aa7b7ab60052a238d52b9265cd": "222eac80a1a5d2e9c37f6002da7de955",
".git/objects/7f/607a2b017151d7d9d74393404ed6cd8276d771": "fab117c15cd16abc3fc6eff500b665cc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/fork-settings": "ad64d6e585456f26993c93a28d8a793f",
".git/logs/HEAD": "2d1f8834cd525749fdf09e81166225bb",
".git/logs/refs/heads/main": "7bb24450c07876f6bf84789515c1c0d3",
".git/logs/refs/remotes/origin/HEAD": "e07a5174b7f855897b49ff3edc087222",
".git/logs/refs/remotes/origin/main": "a9d589219c3ca45f3a866102f7cc9961",
".git/logs/refs/stash": "c2f808aa4b43f5d02729932c2d2f6fe9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bc08547ea8dfadd06f2aa8a1892d20e8",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "bc08547ea8dfadd06f2aa8a1892d20e8",
".git/refs/stash": "81e5bd9e862f87c76fe1b012ba4450a8",
".git/index": "9a3a4b3f561ccceb88e2d2a4442b0e90",
".git/COMMIT_EDITMSG": "75fe9d1cc4daf1aac7bf6e7381b07d61",
".git/FETCH_HEAD": "e7248280576ee791a7035660bca04aa1",
"assets/NOTICES": "d821fe5f610da7e1f26c42d0df3ff452",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "86de94a353080b8827c0d12725801261",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
