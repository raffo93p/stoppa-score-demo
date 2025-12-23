'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7807af43d9c8b374e84c234f259cf41b",
"version.json": "2d149b994de74b1efafabdfe023cc869",
"index.html": "cb565a9a0d0fce5cb14c9819ddced2a0",
"/": "cb565a9a0d0fce5cb14c9819ddced2a0",
"main.dart.js": "31449ce33155fc88ed56785799e5f386",
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
".git/objects/61/159c234d85838f88c092a2c6c72e7d6e68b8fe": "5e818b64a0c0a0600057b9432968bc48",
".git/objects/59/5b5cef10b9de3d44fdc9a18eccc1958f91d037": "e93179d155883385d32b9929aba47fd0",
".git/objects/0c/551214cc9af754805727dbb97177460043c86e": "2803b8ebcb3156779e774452ac733a21",
".git/objects/50/6e533006ab2316410920e3b8f69514b840a221": "644dcc05613f375c7eeb211c4dba3676",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/03/cca3fd5df8eca957982c09325f414aea3b7005": "37d7e8dc2fee35ac55000de396fab024",
".git/objects/03/6744a084ced4baa856c574729c2bab52b09732": "5762c370cd21ba7135633c6e7eb0e50e",
".git/objects/9e/685c65684536b2eb7e83687c1966a917dce98d": "359c023245f969390e49e4ac6f976f13",
".git/objects/9e/75b84f0878400a62ad1c616e5227e2e75b723a": "c3a18913a6c0d1c02f49a8d92d82ca5c",
".git/objects/04/c11265305343baea2c93a1062350e0778c09b9": "11b266ddd85befb21fcd561fc3f1825e",
".git/objects/32/d6c3f3454d3e88b62f15610c282672ecb18877": "45f65f971565196b079e9dd647fd6ff5",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/67/9988246c95ef0e868a5ac79a1ac80c17ecda5f": "88382b04d6fcdab504c51821e165602a",
".git/objects/0b/19b8c7562eccaf625f5869ac3c8cd4bb0eec7c": "7e6f034dfc2f2e87e531f1d1a4b11cf0",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/0e/d55075d3fa92d6d78800b22ebe2c0102f10e3f": "42bf47a848d321c579e4663313d03fed",
".git/objects/60/9dba1a62006976a77c086c006dd64a426f2f3a": "7139c9d89245662ac45149024be0ad2f",
".git/objects/05/7aeedf2d8e90840e6e338708799e8e8136be76": "5bc81d8f9b2daf18f3e25c4e27bdf004",
".git/objects/9c/b299fa302d675626fe78e09b17d036ac35c5c3": "5b4bb5d503fd84927b8704d5f5fcb731",
".git/objects/a4/89c3e837195b2623c0fef83b48b78c586cd54d": "1b057748a42fc8f32c51fcb4df1e0920",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/fa695cd034e7fe5d328fb7ed145ac9728c2fab": "54c0054a32ec67f0208a1f6ccf39ad95",
".git/objects/ad/554fc46e60ef2efaaaf9d2ddb03270eeac34c5": "95b0396390919837ae0ddfe6ed400387",
".git/objects/bb/0aa6a1b82be964cfde243d03f73ff9ec843585": "d9bfbe0b886bd5510d050f4cf55762a5",
".git/objects/d7/c79e51ca0a240eb61783f69edffe97df123658": "8e6e81a813780e852d224ec755b4f750",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/877c747c1b9d915213365ce072ed03ee64d0c6": "87619b80ab9b400ddaa2e918bfc662f4",
".git/objects/df/1494b93536d9022c177cbcf70693f044be3ecc": "e4325e2fda6a5104303878294f4efea9",
".git/objects/da/208c9a0208d3a6e2411b56d8499fc01c92cf91": "aeb5818a3d62983e16bd6267d3bd6209",
".git/objects/a5/e24d8e8031911c6d73f79ed295784020fcaff4": "cb71a1736cae9b976e81515059bc5362",
".git/objects/d6/d89f7763e30e552971ae201b42003a51d37191": "227a88a5e56f9599e3ecc5526e0d9a84",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/62ced1f9618f025e308195663fd715ab976682": "3e4d062951b79e39d204ebb4a56c4e7f",
".git/objects/ab/91cbf52fecac2d1f5c49637cc621a63ef6871a": "ae468c8b5904629f733b978d156bc1eb",
".git/objects/e5/e7926eadbdc30402f79131432384ffa913e04a": "d6e4e195f806e0eff6f4265d5d5105b4",
".git/objects/e2/b5089a2c683899d0233928277d988601af9abb": "0b6efb8137b56e349f77ea260f5fbacf",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/812d22ddf4a2bc00c4de01a0e1d6cc87d3450b": "fd9b65413d5153c54838414e641651b7",
".git/objects/c7/99a798521e8d31e5fb08a06a76027b424e8e12": "dde1e189c80b9fe5df88de5e24c5e065",
".git/objects/c0/ca019dee6e3015adbd937904e475089dc90dc0": "002a8cb1f03a3ad286a7dfb95b159898",
".git/objects/c0/699fcac9c4f7cf8daf00f6c715a1f37aeb4e12": "74741e2f30c81415eefb4ed0e893251c",
".git/objects/ee/95e54d9f78ad4be133778e4107cc5348d0deb5": "a5cdf4e0c6414756e39065ac72e14729",
".git/objects/c9/808adb70405e3c238a9347f7e9c1ecd7c1c73e": "6e41cb15397f7253f036bed5b2b124ce",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f2/98c91a093e5eb9a9ba627067e0ea3e059b1f22": "bab95980b702553088ce22810a3bef5f",
".git/objects/f2/f69138c1fed346f7b0a9ddb154533bc7e8ae78": "dabe0d2e13018c1b60c3cd2bed08d4f2",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/fe50e2ff3212357db4178ba631e8d1d2aa8233": "8574cdf9d04f983d8126a21db15d3c2e",
".git/objects/cf/919da9c92c2976aff7dce21753930adeed298f": "0e4281c157173d4da70fb44d89ba28f1",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/5dd8d89662bd633d3fd7fec8d1597fb88b26ba": "c9b432cdf736003e58b03ea983ae6283",
".git/objects/c1/2a0bc7f5e47bcf4e6e442dd5a1f9d545985399": "c06a667e62e406347bebc90dd85825d7",
".git/objects/c6/94abb8a1bdf22e6aa41d6eaa941a9b39dba882": "7b3927bfcb0200d3a1e602716dbf9f92",
".git/objects/ec/c8115b2840ffb173a6e6524d6bb4fe6c819810": "aa4eb73e55c9077bababcbaf47492d75",
".git/objects/20/135175ccace5abb546ed1b0e6c28ef5e1121e7": "96ae0b9faeb57b74dffa75da3e6fcb84",
".git/objects/11/01dd4cd5cc9220df8869390734a0b25dc9adec": "b438d8ed42ad5197a32dfa77291dc65b",
".git/objects/11/20360f16545ffca1a7b5bbb10f1a90e722e79a": "fb7aee0f90e96c83054e1ac1987b599c",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/4a577b235a13413a8e6ccda9284d0d6563cb32": "65a527c6c85b25538827189e78cfb37e",
".git/objects/1f/57c85e2c4ecc07d26daf2a39c7662ff811488d": "2b378be063a1f3062df9997a6b464a70",
".git/objects/73/8e78cbaa7b2b933487960de0041ee24f65d2db": "1fed58be44c66c78151010b63429f7d4",
".git/objects/73/3b0d9f55d4b004c790e6c9300b9fc392bb8415": "ceba14ddb59182b2898ec2dd997ee0cd",
".git/objects/73/250f3e98f4b32191548672b8b243a79025a3e1": "c0fb136d16b31f585cadc7b1aba80bcb",
".git/objects/87/67f8ad970d6c47984e111232bc86559a164f85": "6d93a8c81c5de9e3e734652c6646208c",
".git/objects/1a/187dac633bf70df20e37a91cad89c2c550b9ba": "e4a33f3b0591e66b441a53983dfa6d37",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/40ec71c8540f95b276cae9cded3f6d3f7bcd22": "36ad2562cde182e42685ccad7a743e1b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/2807068c6e47d2367e54ad5cac24db96272956": "6558d0251789d922879bf7cfea0e2663",
".git/objects/26/dc515ceb771af39d9d09cc0cde5f2a774214fa": "cb67759d482630ba4d5bfaad96494451",
".git/objects/26/6369302591434bb214e1948f85698ba12b1275": "19522e0789e231045b50df3c1160b56b",
".git/objects/4d/dacdd93d6b4b8965770ba9b24b19d099ca53e7": "da5598712f63643c18e180395acd21e7",
".git/objects/4d/4553f17a3a59fb46bebc63ad9e1ea2d93bee43": "9174b83df178d474a7f627cc37d70002",
".git/objects/4d/617f42d26d24751f6dc5981edcb6c82377cc68": "288d668e60592b7456626376c09ec951",
".git/objects/75/b419b29281d287d358fd4ad74b47ff17ff0211": "e8866754f9000e709bb165e71f4b3e72",
".git/objects/75/9c87eac2062cee9a549f01ab483fe48b5ab438": "168796f29e18a9457bc9622b8d93aef8",
".git/objects/72/7ac4130bc528d9475dd19c05b006a893c9038a": "6144933334e589a814ab523053f8c68a",
".git/objects/44/b5e083d167ae9ef449df617a701a476a521bcf": "4d6428f54d14e10675bba577aa94929f",
".git/objects/44/a1804ff2ce8cacea9a66500a538108e26c1a14": "648439c4d9d1f22c30e35ea0f3e86796",
".git/objects/44/d7b4f39ee846fdcf5e8116a4e7453857fc1782": "6626940f49a9581859a2c24bad70d32f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/04b56ad2ea03960ac269cd3a15ab70c3cc5560": "7c369d93fd2f9ba9be8130f31b732cb4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/0e0207a6441a4cfd880cb78e29f1f8d6197880": "71c81c397802cb45c5f75519bb90417c",
".git/objects/9a/ca94b98d31f0a04815bfdbee732ac557e8534e": "7d674301f595876b208f6162514c0aea",
".git/objects/36/b97b83cffce12c614fb90f53c264af84c9c34b": "a533002393c7948a2779eb2f8e807a8a",
".git/objects/09/4dbe3c6c51c59d9907887089b0bbcb16431c5b": "dbdb17492598115928a4c79e61e2ab45",
".git/objects/31/67fbd06cd727083ef3f769861052396c34fb79": "1a905449a9e44697ef22856f7261ca84",
".git/objects/91/5842fd10dc5797cefafe38ec0a2036a21988d5": "c708b922495ff56909e75b79db2e6645",
".git/objects/91/cd9ef99aaa9c13b56735732a1d189dd0442bff": "15d187022b311810f830c36a1fff3ce1",
".git/objects/65/55e5a6c91c80db0810781b492509201ee5a195": "88f3473545982fc42f061094de98f205",
".git/objects/62/31d67fe7f752701a99a5a4a9c3952c559857db": "ca86696b46b6250984b839fbde80adbf",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/20ef47f4f34c786f51f9098a58577651e44d5e": "aa73fdbec93f259bd583ccdbab110b2b",
".git/objects/98/54268361472a962b01f36429a9ee11e6482097": "71823daae92a7ddcf631176b449ea8df",
".git/objects/98/e1dd1005dc19ce482f34dbb5aa94c66a1efb9c": "713db2a89699c28a72d7b157aaf3f43e",
".git/objects/5e/91a6ce0d543af85d1dd333c4b2628e7b60d031": "abee6e5535ce20894833c7bba921c54c",
".git/objects/37/c326cf76871e5c8273fad4ca55dad89387b63c": "399184e2e93e3bbbddf92c3756f05d40",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6d/9618c8492a8444b5970069c8fd181f462bca1b": "6c5668f0443ffdba762ad5a618ab1a4e",
".git/objects/01/e33e4a1a7903712075cdda101b0db326364846": "55935c297809876a94c19af9801c0edf",
".git/objects/52/988de2343b90c0e62227db652533c1e87f4251": "2e589debc56971199689ba3e395e853a",
".git/objects/0a/54a98253f67c048fbc383038c89f11ef9b65d9": "c48cdd7b17495ca1b2c8dcf3426bfb84",
".git/objects/bf/7b36baf63d6e253df17ac91a8632ef260b6c5e": "6fd057045349640b375e30c141242b56",
".git/objects/d3/2a181ebe518ca46bef6ae5cfbef9e6cc648c01": "fb151fb63007baa76422032c4f0db6b2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6441c96a22c020b1593e2fffc708ec21dbfa39": "a83d972f05a67090f00dd4dc48188cdc",
".git/objects/ba/d8361f7b9f83124fcfe9c3a80a047b4a5da774": "56eae27af28f3e1aa0570225d041ebac",
".git/objects/a0/2a0b0db87b025b79d3e6ebd1f27fef59ee9126": "682c2e01cc8d60b27fd6befa66702f6b",
".git/objects/a7/fd555cf7147202e88b28ef0faca2a2fa9bdbd8": "5c33e747b9e8779e582e47449b418ad3",
".git/objects/b8/5728952b08b914bc32a3577fa693428d1fd44d": "70c94f8e3ad31ca361134a37f6016613",
".git/objects/b8/2f9649df6a7610fc17d8008061881d307ed2f2": "191bf48369f6c5909c4d552814acb4fc",
".git/objects/b8/a9ed5951495950e4b633308bbacad460181a55": "fda328e645bee104ede083c9838fe476",
".git/objects/b1/8b1618ad82b32a05267cc73d984ffb03bb84cf": "0666caa75e6c1adbf234b91062c5c467",
".git/objects/a9/1094fa093ba5c222f28f73dde44cc85ede467f": "7c4f525b7255a3d86293bbbcc9e90574",
".git/objects/aa/6c39ee6bac044fe48182ef6f84abb6d87a6cd9": "16b23cf47491b4ddb32c52a50e4214b5",
".git/objects/aa/a7902b6855ec08218885e036e617932406274a": "92cad01477e762ff16c9dcaa7c4d391d",
".git/objects/aa/7db25cd106791ef1cbe88d92efc3c1d26e60f5": "b8a2e579175b624f6110fa54f08e37a6",
".git/objects/af/c31c110369cb2f20869ebea2a78448f9ff2dd5": "0448236d10d833a2d93ec598249fc0f4",
".git/objects/af/1049b43efec9e8437a1bb49ebfa42699daf38b": "edc088ec534b24a08911e9120f7a5878",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/65a4fe2cd126f9c695581ee8a531bae5abd339": "f947a74aa62ef0396d315b72c8156c1b",
".git/objects/de/b1c7e235f30aa00acc1be398e5290cd23013c3": "f265cd1d51c5115e0237035abbfdfb4f",
".git/objects/de/43db54a05d209ce81bf3d4a9f1860cf89d36a7": "18436be7bfbcc52dfce848f36ae51537",
".git/objects/de/5d8c0822c5055862938811f31425edac65a4cf": "aa768d293bd0791621b5dd6a87e5ff55",
".git/objects/b0/f6878254776c55748f4abafe301af37ce39d4e": "2f2f800c97a1a43f04173aa06834b4ae",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/a1/22072cc09db392ca1d7f283ffe83b7d27e0eb6": "0676cb7a1cd4931ff871d9b9d6a97ad7",
".git/objects/c4/2920b4b59b4ddad8f88d38033e01df8b4e396b": "fbd87a22d0ea3234fbe5aba5ac419e70",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f0/89f2ee7ce1cb23d38a7d0a3919e8653ccd42b6": "5805e2965af2254ecfbdcb3d28d345ec",
".git/objects/f7/0317d283a98731592ea0046723eca1431c1151": "97d91fe0b6dd725da03c1f63efdbbf81",
".git/objects/e8/586dd21d857c8b8d30f5e1dadc52cb45f6a173": "d2edde4091c76b557052f74b34ccf8b2",
".git/objects/fa/99284959e2a782186d333c800cb02168fd0201": "ea02d1e556bc276a4f91ff7e5048e178",
".git/objects/fa/ed91e4cd5a8d78aaddc88ee111f92da91c0974": "2203bf4a9f52698474c383f1f1faf477",
".git/objects/c5/b09abf261ae9794674958504900bff6b1ade2a": "afb3849ca50b7b1157ffd274e18b6256",
".git/objects/c2/775c8a7aa2e8ce807ee4008cc7c11f97448554": "977b3f15b7a70aa249a088bb814af67e",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/514a9b2199483605cbf4bc44350ebcb9a5b3e4": "e52e7f3332d1b09c1b772d60e9bded4f",
".git/objects/e7/06b97ce75f162966bb5d1373430ed4cf802d89": "3e5d0da6b6e986dd4c9bc6e727acb5e0",
".git/objects/f8/4b1d26cf2c08d078c923bee6643e12a4a65fae": "08bc4b3787c45b66530047fe7570edfe",
".git/objects/e0/931744f8f2ed66c1b54647fbe8d6fe0cc232f4": "29c519b266ae72a929e862cd981a0f82",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/413ef96cfa78236fc7840e519ee24f830013fc": "10744e0369e7e16a9bbb09b38ca6a572",
".git/objects/79/eea88339f340f771643ee12911bae7bb2208dc": "bbb0a2af9bbd61b82ab9e41350dab7e1",
".git/objects/2d/94c46000e29814a0d8eb1c419d1313b0cfbe4a": "a4aa89b86b6dd53fdfafdabff66339cc",
".git/objects/41/db290723c19d9117d45f1a735d174d7e89a345": "8fe826d144b5452560f7fe54f594f38b",
".git/objects/83/f2a0701f196f35cc6113d524ff05554e472ca0": "d3b3c3d0b273e0eea0dc3ebb9245f84a",
".git/objects/77/19eb9094f5f10aca383862aeedb74aad20154e": "6687a5b8e2144cf33b752800ac6d64ea",
".git/objects/1e/d2c5f002ccec52d136806e009dba7e625cec6d": "ed8437401127ded54f419f28ac951390",
".git/objects/1e/22659c2c3e0975e0a83a827481820141c43d07": "c45e069cad60a4414c6271debfc9c65d",
".git/objects/23/277f695c85d3f28052e74f926c76209c98eeb7": "4d5973fafa4d1a5a2019143a250225be",
".git/objects/23/f0e18fac19573153c0173285d87133889af575": "e5918549aeebf5b2697e5d2952a8fae2",
".git/objects/8c/d8791c0da49a0d2b6b39bb875d63baf1b52825": "f7c12613f527a73a76423a432b34b9a9",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/71/977eaa64f5b6e63c81c8975a79dcb140bfc19e": "8f7c634d89f3b705ca48f834940ed35c",
".git/objects/82/0cbad7b5ba5f0a7c9e0dc2ae4449f218e690f7": "6439a971ec3e708e5543aaf2abbc0434",
".git/objects/40/a298cf21119c3b9e9fb1e18e3f7bfc22b8a446": "1d7a2bf1e1034a88290c155964f2e8bf",
".git/objects/47/f461b6f9dca4e060932423649ead768622a1c9": "4094f52d96055a3c310eadd65b1403d2",
".git/objects/47/2a4f64bb4105aa7b7ab60052a238d52b9265cd": "222eac80a1a5d2e9c37f6002da7de955",
".git/objects/78/ea43c8353dbee037c287feec18ac87b049faa0": "6e96a8fec1c0d19ed6d10e2536ab7daf",
".git/objects/13/cec9b8c2daaffc0a1fc11528f8aed4fb581498": "c0d8fd01729e9412d71689a85220d3bd",
".git/objects/7f/97d8f8d3a6a1b795732337cf38b362201ae710": "b11e0fe5a3894576260cb2c78f6f9a22",
".git/objects/7f/607a2b017151d7d9d74393404ed6cd8276d771": "fab117c15cd16abc3fc6eff500b665cc",
".git/objects/7a/aea47e0972d00ccf1f7591c87313bd30fcca49": "e22140de2641c2583ecebffc944fd614",
".git/objects/8e/46a495c5842cfcc16b34664c31ee97a6631c27": "9fb100d2731998dc59e124096d44bd3f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/fork-settings": "7b81ac0ad2d1196a9c2624a3dbe26430",
".git/logs/HEAD": "9a880a3f69012fbb785e9f161d7d471e",
".git/logs/refs/heads/main": "4d412c5c337948bc8e9789c96d2ef051",
".git/logs/refs/remotes/origin/HEAD": "e07a5174b7f855897b49ff3edc087222",
".git/logs/refs/remotes/origin/main": "8fb0a284f9c080e1be5b3f802455b5f0",
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
".git/refs/heads/main": "0a68697650573aa6dfe58f62108a4c6d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "0a68697650573aa6dfe58f62108a4c6d",
".git/refs/stash": "81e5bd9e862f87c76fe1b012ba4450a8",
".git/index": "224f52cf7732118023f47fe5afa10b74",
".git/COMMIT_EDITMSG": "a2c4b13ef43bcfb8306bee453110548b",
".git/FETCH_HEAD": "f23c2bbad0cd57b373b29bfcd22aa5d9",
"assets/NOTICES": "d821fe5f610da7e1f26c42d0df3ff452",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "148328d79354ef5e848e0296112a32f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "e09354204476261701dda79586a78e42",
"assets/fonts/MaterialIcons-Regular.otf": "806cbe70f34b3f2e266ebcf49ccca8d4",
"assets/assets/cards/denari6.png": "55a2de6816bdbdea4f6a6993919951e0",
"assets/assets/cards/bastoni6.png": "afebabde44a33ac997404527bb61c6a6",
"assets/assets/cards/bastoni7.png": "deb2a3753391874935c749b62859e700",
"assets/assets/cards/denari7.png": "cb95c3ef041d1e3d3f191007c1beb98e",
"assets/assets/cards/denari5.png": "726e74eab0ed0a95320f24aca85b7c1f",
"assets/assets/cards/bastoni5.png": "73f2b39ee19fdb3f63f578611338494f",
"assets/assets/cards/bastoni4.png": "22147263e8fec57bfa43cf091d05d795",
"assets/assets/cards/denari4.png": "54f36f87611afbf03f0dece5d7d50e76",
"assets/assets/cards/bastoni1.png": "2785ce9099a67b12c896f04f344d3e08",
"assets/assets/cards/denari1.png": "3f1007c7db5db030cd164acc2dec4bb7",
"assets/assets/cards/denari3.png": "b77b5361e327d5c14b5a2d940a886ba7",
"assets/assets/cards/bastoni3.png": "c674dfc98f6d202a178905c59e506534",
"assets/assets/cards/bastoni2.png": "45caad4e1dfde5dac7b626273dc12562",
"assets/assets/cards/denari2.png": "5be85c320474971b176d270ffcee42c7",
"assets/assets/cards/spade7.png": "826190f3f0d5007650acda3e98d6690c",
"assets/assets/cards/spade6.png": "f47dc8b400639d6fd0c143037116d72e",
"assets/assets/cards/coppe8.png": "7fa59b0adad60841bfa691c133821a93",
"assets/assets/cards/spade4.png": "502907838d579fc900bb0d4523239346",
"assets/assets/cards/spade5.png": "9a4b6047981cb15ba51e80349b8a198f",
"assets/assets/cards/coppe9.png": "2230810679fd2b4da946a4b6fd7a62af",
"assets/assets/cards/spade1.png": "bab2f220203412a5a5e5b3ff86435c82",
"assets/assets/cards/bastoni10.png": "7857e25511ed184b0ccf27143b8601ad",
"assets/assets/cards/spade2.png": "17a113d996333950a97bc3967eeaa827",
"assets/assets/cards/spade3.png": "cf68f9f4eebb5a23f21f1ad81eac2c4e",
"assets/assets/cards/coppe2.png": "a9676ea14025a2b2674ac1db2865cf24",
"assets/assets/cards/coppe3.png": "aa55a6fc50526ba36399d160e0e861c8",
"assets/assets/cards/coppe1.png": "98eba84a0eab00331a988f55b96f9986",
"assets/assets/cards/coppe4.png": "ccbdc94106a0bc275dda81ce945794f4",
"assets/assets/cards/spade8.png": "50b9b52b320fee003f4de3c962d6a3b5",
"assets/assets/cards/denari10.png": "16499f71b65848cf0a563cc6ac625882",
"assets/assets/cards/spade9.png": "9f70221d055375119861f2d08f9fd329",
"assets/assets/cards/coppe5.png": "6c0a9f47a2e6185d40afd07b1e26a58d",
"assets/assets/cards/coppe7.png": "0d7bc525cdf505d1878c699e82c22786",
"assets/assets/cards/coppe6.png": "5a2465d47dd5b36f8ba7c12ccebae4b5",
"assets/assets/cards/spade10.png": "b9a945d4b59cab70d5bc65934a46af28",
"assets/assets/cards/coppe10.png": "465083dc2ea7b2cd5a72bc27fd12f431",
"assets/assets/cards/denari9.png": "5008d818c6dd58952b5d756cf47e95c7",
"assets/assets/cards/bastoni9.png": "a82773cecf1e86cb1fafff66261a1342",
"assets/assets/cards/bastoni8.png": "900995cfe1c663c45e643873c31943b2",
"assets/assets/cards/denari8.png": "3d63186e8c04d5bfb720ded5ef840691",
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
