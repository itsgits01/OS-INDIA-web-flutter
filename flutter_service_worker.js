'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "80a1b9f53b8afa94487283718ee3efa1",
".git/config": "4f415048143ca74f26fc96719da4ced3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "95f16da3010673cfcdf67168ea39e20b",
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
".git/index": "148cc4d1d0d0ddbe2eccf85cf5bccd0a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c0112718c3ded324a3d9659ff78f407a",
".git/logs/refs/heads/main": "e87fda499a0386709f4e47314872a841",
".git/logs/refs/remotes/origin/main": "b24c3a3951f9d7b0943f14f09037a5b3",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/02/142b28d97d181199a8beed210286a65b59f298": "722045d499761bbe4d82fb1d8ae16041",
".git/objects/02/7904c918351cc964615a53748f9e2946d4b23b": "6a41873a0be580b6f4bbfe42c8515cd7",
".git/objects/04/f40d52bab10710a18980989bc29c4a75469f7d": "8e3937ac5194f4056b26bee59f5dd25e",
".git/objects/06/1843cde287db19dbc05e8a1816aa986664d2e2": "5c1c52573a35910b9c2ae4eb72661647",
".git/objects/06/fa6388724436d7fa1b78c2e1affb46376d315d": "a3fc2ef032248de1507837ed0f1d2d47",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/0eae8f64fb80d7f420557b3bca7085b7491978": "e3809b3d5cd7c30e3665e07c5535d4ed",
".git/objects/0b/a9e2f6c8d94d4cd60e9ecff0e183087e3ff67c": "c4e959ccbf78a27475e34ea64b3b1670",
".git/objects/0c/feed1a4d7af017a3befc9c9220432c4bd46960": "4857bb171b0752216081da19d336ee30",
".git/objects/12/b24f430b29d7ce9c250ffb97d31b253ce68bc9": "88b22625d557d0f126dec5e314eacc61",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/61e62b041c8c20b185f9301974fa3b33b4bdd5": "752a3aca0b04c7ec22854a57f759c95c",
".git/objects/18/40a94d488a6df5629df244e1a5bfda74d091df": "06f732ef79a1fea549010036500d31e9",
".git/objects/18/e015119083f828e65bbd71c8afea87f1fabc4b": "e57cafa6892c58884092b461ee1b3ee6",
".git/objects/19/d33a981dcf68a318392e9ce56545332bf45cbb": "61fb4400cfc12986ecd80c75ec08dc19",
".git/objects/1c/930351df3cd34e5827e26950461a24fae9a400": "8f62bd5903d21fa134094a09f318d7bf",
".git/objects/1f/d647b9a71d5dd58c4208b4c58e057dc900405b": "9b4128fc4e25fc519d552534cd714938",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/5a1b333f133ff16c1e3483eeb00a1f3b86176b": "1988673caeac56c32b56b3e2be61aaf6",
".git/objects/25/c466dd5888cde89660e57d783d2879fcc19267": "222c6f12c0649aa1bdd03278860473e0",
".git/objects/27/45a0816765349c3ffe0e64f513c4f859a6d202": "b2159c20bbe8fe68f9f456fb8dbc9551",
".git/objects/28/c973a327cc4b4e87e7c8a607265f6fc1670ca7": "f57ed31e2142c726668d861c4101e7c4",
".git/objects/29/24ee378214dfe05010529f991133e16b4518e8": "e9b492cde428029407fe9ed22271a0a6",
".git/objects/2f/81735ddb8604eb201ef4c9e2746a372b921e80": "10da73be7ea24f22e979e9b7f9bad239",
".git/objects/30/55b22e9c22d5cfbf4814d6e3b9172d2351b543": "592add39a073b4da4ea0dee68563ca5b",
".git/objects/32/1a63d9908e09d27b50caaf5210ad0f3eb6c5c7": "4948a9cbdcb917291e24a26ca0a34965",
".git/objects/36/c34c1f7e4462ae77ed8bffc75359c732e21ecf": "113f5e0530f500ee0e3ff8b90101760a",
".git/objects/39/6dde07dfde0cb2c9e8a9620604cc893c3f9a06": "2db718c22a1225a05c519caa767b1af2",
".git/objects/3f/bd3e5e354441856f84dd0f87808cd6352af092": "0927319c59ee712d2e2b6e840bb7d140",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/52/8f3a7a04b0a66dcf011f084303e1bba8f86ae7": "58f8804384fe76813d7ffaa4b524b42a",
".git/objects/52/9925eb1d95cdb66ecc22fc2bcdbc27ac864e4b": "86ef82a501b807ef986be15f5cc6327c",
".git/objects/53/0b67a1c5c906dac195a2e3bced0be68c33246a": "f93139109c7b45a4e235c4b74aa3e991",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/f6947dbcd1693b857f1af4450958274a504fef": "8dba19ad2666f9b3d6df1138719f994c",
".git/objects/58/35c3ba8fb7017a26b43862a74a4debc72dabec": "dc750f25e149354901851a95cf272feb",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/1b322985620c4164f775c32fefcfb02efbc139": "98db5eaadd474127c02b0a2ef8edc8b2",
".git/objects/5c/a9246821daa1b65c5a678888c4b40deb1baca4": "f655baf64c0036d3e0b4c000e67d3498",
".git/objects/5d/55dc6a3a2807008606eb48e66de299e80aba22": "461fcfea083add79585d486727244cf0",
".git/objects/5e/538583fb32c129fd51c6e511d1c48ac6b52f64": "25c7c5885f2fce0ed72575ba9060ae10",
".git/objects/60/159dd38baccad0826224e85efb90fa21e87f20": "96b358c06e360fbaf659a97914e7cfa7",
".git/objects/60/c146048751a73f823f7164e2450ee2a94668dc": "79f1eed87ea9983e3c564418b71ea5d9",
".git/objects/64/1a30c9b52b0eb26a7099b48edb0eb575d8235e": "62733f7a0d6f0a1160f39e368e5d85e2",
".git/objects/64/b74a6be29b9aa15b4ffccc302b1e029fefe061": "cfca3df600049154c56c5f754dd42da6",
".git/objects/66/c2e16aa59624a1c1dc3a90386291784ee20119": "153e3ca05917e7e423c2405036cd2a2a",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/8cd07410d25ad0293e4b304661abb52f6c74c5": "b55ff99af34e09be58716bcb2fa3f4bf",
".git/objects/76/c3b17e8293a94a91d8af53ca2e4bf689214aed": "c26be9b7d223729ad4c44350ba2fb021",
".git/objects/79/d4c19d6e3f0c2be0def8efb5f4e6ea85ee7b44": "7a4b49855f55fa04f4430051f278df7f",
".git/objects/7a/0430137435934468238615240f270d9c42286a": "2f89c6081e665ec2b85fcc96bb652feb",
".git/objects/7b/7367be4691d27695d1f58c1c73856fabc2c74d": "66429a63babb7c44c9a2cb7cf20ff734",
".git/objects/7c/fdecb06ca3141f783fe1ead626a4cc2910a1cd": "49191ff8c4cc79d5ca1ad322d54add6e",
".git/objects/7f/bf643baa8e1fa85e321b62d91800d1e4523b20": "8c7ecedab165f4ce63050929937f5ee9",
".git/objects/83/4dec5882ae52a2dc7296c798cbd7582bdbe20b": "438b7efe2d48444f3f068881260f39db",
".git/objects/83/6f5ab99ca32e63b470dbda7e512f71536e0616": "ca182447dca1de901f33b62b5e8d4018",
".git/objects/88/b6ad177b8f5cf5c6fe60708b4bdaa4b2102d70": "9794adc48416d3be07c9457738772096",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/b28bca0e8a16771c28441ff79bd869a8d3a390": "eed3f1d379602d27ae036f5d898d61cc",
".git/objects/8f/d93fde3c1589605bb13bf822b4d347190a713b": "1b682567f9bd9e526b2eb9f8ce91b55c",
".git/objects/92/eab3aee9bfb514f6b07745fea803794dfd719a": "ced7ca2d2cc491e584e889162581ff59",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/ca842038388d486f2809a4e023bda16757a805": "d16547ae05f4141ea9a043c7afbfae47",
".git/objects/9b/b79ef31d057ec4dc35dc5528c205cf9affdc23": "c4ecb9ba93a8f491b41b2885295ece27",
".git/objects/9d/dc88d7e2a9433c3376b9c04e78f457f1b79329": "fcc25c763ec6e3bda3e9409f6897d514",
".git/objects/9f/860ae34ec72e64b944f8eac4cd98e83073e22c": "b2f008e12ae68c1cfbcf8696b7ddb382",
".git/objects/a0/3ae188345c189b40bfead2cdf2ebff59f374ce": "2f282ddf735857c5acc37a7a2e621039",
".git/objects/a1/9fa7566c5926d63d3a806ed9ff4108f444f5f2": "8f56369cb492ae19f907f9516f20657b",
".git/objects/a2/03edb0e70b33ce76ce33a6deea35030428bb01": "481ad199973683d67e7870c1eb46a4b7",
".git/objects/a3/1ebbff347d8778102228f7aeddc4dbf9aac836": "3d7b0d16a4dd83b3d606265e1f0c0dde",
".git/objects/ac/659db5890365e1ad6016161a67622221aaf136": "d1f517ffe5e82c9518fed271c166fc71",
".git/objects/af/3c5d4576c7e1d0d35f9ae60d667cced135b050": "905a0116db9a9203c19190fe84670074",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/a06dcca03b69898ebd8ddff979f2bb038d1556": "eb6a19aa23e9f2d24adbbb7ca3ccc98d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/45b71c77fe9e35fed667942115f8c24b700c26": "a8470d898039ac7d3f282b80073ef01b",
".git/objects/b9/9570c22657be20e80155f50f7a8ece7fc3eebd": "8e3e8155a73eba09736abca7fd55ef90",
".git/objects/bd/cad50ebf6fde2eb9ac4fb1ef36fcf0ef4676d5": "6144f01a7858e5da3cfdbe62dfdad02e",
".git/objects/c0/817c5df82185e224dc031c33896f8e751bcdeb": "89cf394d33e4d648a944d6dfbf329f86",
".git/objects/c5/8056a0a08f245f17c2bcaefc040c630dc6af09": "eb370d0579efec8899c9be78b2e9cc76",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/8f28ab7119b8cde5e9a741e13e6876d8c7ae17": "45b3809029986364150997da31e8e6ae",
".git/objects/c9/27489d59041771d95a2d7589192aef930563ab": "53d2a86c2e7b73163b8e37a78db473c8",
".git/objects/d0/330a3e80e24d1b1e1b4a91840b214ce23f4267": "0e66bb2dce641663f3c25cc263a6c238",
".git/objects/d0/54cfbefb08c68f96ebcc02955b7778bf0ff354": "ddce37c3cfc6d023da36858e009c3da8",
".git/objects/d1/1c4cb98f469fdfdc02b540307f5a045f335cda": "bac19c754c7bbc6e0527fea4d02557bd",
".git/objects/d2/4632075f2e40b32626c43b63c2ea9a30004d27": "8da3c44698e458686199fda4c027f4cf",
".git/objects/d2/5d51fff2a889cd261dc2c6e0159b0ea5970b70": "8cc8e7383cf1192937546c54300b186a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9204b0074b38537093387fed9b16cd97a92a1a": "6ff1d2a5439807d7c94e98cf4cb4c8c5",
".git/objects/d6/23458290980003638289e02d0c2947353082e6": "dc4837a7204043bb4b4408c4909a4194",
".git/objects/d6/493980f5259baf0b3bd8d54d24863e3ea3f91a": "d960f3dda53ff3fe9de98145a34b4b7e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/eeabeaa19e54b2946b40c0d9894cb95d40dc43": "d97e1eebc6ce9aab2d3a420d5275be79",
".git/objects/da/d1fca9b102bd546698ba86c4006493a769f5d0": "25a04cdd8275937f72809cfe71fbd021",
".git/objects/db/ccce7131d2be54e979f18ae688de86b64f83e0": "48af29bb566d644fc913d7abb2bad794",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/5ee52cf7edb0fca2bc8c401b969c7b3e6fc400": "9a83afe59b6087498282bc26683ca036",
".git/objects/e1/17b77a5e38808954643b81e253defba3c61ca3": "4af62adb08664a928b5fd887bfac17c4",
".git/objects/e1/6b7ba8b041335dfc38b8bd686fe6c398eee95d": "32bd3a78cd68d8b58f1ed70f5b98eb6b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/a8d9955573ef7243fbb7c1eea35d0e310d8421": "9e5b86601899210a744243a47dee5e02",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/1114bb93191bb3bfc45b5904e794d9ce7785d4": "058b2bc2e4776cd8e36e2d131bec7db0",
".git/objects/ef/11f6a6ebbe06c05ba4f96696d853dd86ccb568": "4ed503de75963a0d74302e7d47a1f658",
".git/objects/ef/8bf119725ced9951c3cb0070bb946505fba57b": "6b291267f12de8fc37b58511be6d7857",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c56ed874a4ef7aade1e178d8f0419f8227b702": "264dd390f789284b1d0a12a143152faf",
".git/objects/f8/becbf24a15090abd149359041ba35fc4e44780": "080b3fb21bbb112d7b5edde9d29d9445",
".git/objects/fb/61931c6cf97b89d74c87d88c2d8e214befe0fb": "609cfe20528f54b1f6519827967aface",
".git/objects/fc/0c211b36dda11afd0d24d4eceb301d76b4ac0b": "cff69193481ee38bb609d114f678a30c",
".git/objects/pack/pack-f64f6e2810fb52f55c2d4a6e407c5bdf68682257.idx": "e1158a83e9f4f3f389c3ad9b4d0bfc6c",
".git/objects/pack/pack-f64f6e2810fb52f55c2d4a6e407c5bdf68682257.pack": "7324a5025383e2bb85db5db20fa7ff7f",
".git/objects/pack/pack-f64f6e2810fb52f55c2d4a6e407c5bdf68682257.rev": "5264b3e46d4063d1a892b0ac8e504a99",
".git/ORIG_HEAD": "93bcb31e06f019cfa14fc1c3374967d6",
".git/refs/heads/main": "2d1733f7ecae5a1459ecc424ec69632d",
".git/refs/remotes/origin/main": "2d1733f7ecae5a1459ecc424ec69632d",
"assets/AssetManifest.bin": "c25a7d3f04eaf15f225bed653fe726d1",
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
"assets/NOTICES": "f32ba4f3eece2ecbcf9c44944eb5dc77",
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
"index.html": "46fc89ca5ca8aaa2b12e57267fcd9455",
"/": "46fc89ca5ca8aaa2b12e57267fcd9455",
"main.dart.js": "cd431893e5398e10541adf211b7c28c0",
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
