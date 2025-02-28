'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "24ac50e3e2de2859657dc9c81a234174",
".git/config": "f9038a8cd7981748a97d734cad88c1fd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e50c206ea2a02904bdf23c03e48579cc",
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
".git/index": "a8f8cff699df2429c08300faf85171c0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "24ab448263349600683255da7fa867e1",
".git/logs/refs/heads/main": "8d762c6a9b54ecc699d534f31f4ed8b6",
".git/logs/refs/remotes/origin/main": "1940c9c12603f8c241c83001735d5aad",
".git/objects/01/3ca68f685dcdf3c75bde640652fded9009bc64": "d1717582f61a98e01a2cc409815b8267",
".git/objects/01/7064a57e3f9e211304c775d772fd94768d5987": "2414711c02aaf3a0574105e5e2db25ce",
".git/objects/07/538f748e36e47e3f9f14f083a61488d104d4f9": "00b6f6f9463b73a2486ada6d5171c1f0",
".git/objects/0c/23628de0c01fc4bb5c66530f6d06baf3b90dad": "f7be248b71b4902ed7a3615ef39c1e75",
".git/objects/0d/45cf9e32ccfe45511ff1fed2026a9fa14681cc": "4612d0e1e04b97900f3be992db40cf05",
".git/objects/0d/4fbc001de026c86fb4e3b376ee74a485456440": "d04bdf0c12c864645858f9e6ef852a58",
".git/objects/12/6d81a34b97f48c7498bb2d5e3994e02fc596ca": "bfd4132c9e3d7fe31a7a2ce194e0cb86",
".git/objects/12/ce5107b91a7ea3bde50c378392bc5071c899b7": "54e956bbe429f8287aa5e5064628d956",
".git/objects/17/1a89b9f406b9adfe427abc2ce52d21e801eb64": "9e6bbbc9079a4ab5a03b59bedd2bf81b",
".git/objects/18/1f273230bc7da9124333a7e3e02a077c0083af": "045972cbae6f861f36e5682f8aded5c4",
".git/objects/19/c0cfb7a869a580e468e2b57152026ab6463a2d": "bb6241f84d78087cb3c62d3efa3f48ca",
".git/objects/1a/1951b603b93d950ea252016d540f71afb0622a": "ff9720eaabdfaf5a0dd8377b7e74e1a9",
".git/objects/1b/017563fea65c4a5dcedce2cbf78baf824c6424": "0cd0277d3cb09f987ab03b8ee06c73d1",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1e/0767f3f804cad5e8d4eb8d6f58e879e65375e9": "116d0393d06d52d80fc6661f20ea9e45",
".git/objects/22/813bf53b177c96982fc1f4737437c4626b82bd": "49803b6a89465350cd89d8fe8985315c",
".git/objects/23/118fd11d84fca31d017b2cea21ee022676cf1b": "564c8d9a635ad6dd826045b1855e5de7",
".git/objects/26/8605be8bfe48e4c2b53321a46e7759b00a0e0c": "f67e1924d847df0b425d38f6cec8ad47",
".git/objects/28/3d38b2156608ff9cce918e87ec2900354de2bf": "4e783be053051e00e0b68ee5acc4e8c8",
".git/objects/2b/b2f0657804f5e8630b436908b728022815ae56": "e2e967fae54fb21cbbe0395d6986f438",
".git/objects/2d/4fdd61386a3941418b76b34144fbfd53cbaf37": "aa92f4316d6a4d6535c58f5d79e08a74",
".git/objects/2f/8f2180da9671eead597d1b2e05d6a47dbc92b7": "f9e829d24823fbed4bbe08c2a681520a",
".git/objects/31/3987af3b9cf2c5374bd641687f6c86baca5f54": "eff387e625e561c4cd41f3f2105e99cb",
".git/objects/33/8636149272b7640dd4833950bb13cb96ab6b43": "902b37a5903a1d619aabccb912514154",
".git/objects/33/cf733605033065dbbd6dca6259779922d77327": "2763c4b160bdd066f32af5fc0b9f8388",
".git/objects/34/4f4d40776aa0039a27952df19d19b781c0f7be": "fcf2fe3ebe11d0633f084290e48bd927",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/3a/0d844dd812925c130638998bd75748130fedf5": "e234b607ecaabeaa49cc14c0eae8f499",
".git/objects/3a/1165a3199c26b6199799138fce433a6aad5f22": "2dd4bdb84a7909cead43cc92cdb43668",
".git/objects/3a/a28bb377755ae7f8c7a1738f0c0d807b855954": "119340e456b5c0fa4ef389e8fc42bccc",
".git/objects/3a/d09902c78fe63172e35da430de33b1d61b1809": "6787e2301ac4ad365ca15f33781f9eda",
".git/objects/3d/db174a70b2291bb774833c5dab1fbebd00b5fe": "c1b4197d6d64505e18d594fafcbeaf92",
".git/objects/3f/356f39e3a48e57daf71f6b081d869a49ee113d": "498fa0ff2ff509769db2f412e38043bb",
".git/objects/3f/829e9441d1e5841247c7366162726626bc565c": "9400cd2151829f21eeb1f93f4d4ce949",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/ae0185ef9a68b716bec06624d947b22aec5384": "b20efec0433506d95d02c08b4780890c",
".git/objects/43/07fe029941a4734ea351fc0595c850bb728ee6": "ef78f6dc82efadecf64d398b25b944e2",
".git/objects/43/c35d8dea916a15463762115d1ce9351723b703": "45a821d6132245b2776e9909dcc5fc2a",
".git/objects/47/6c8b6e715795b7f2a4280b591495145baa225c": "d40b98a4deeb1b0634c25373d1281aea",
".git/objects/4b/739ee2aa202ea157403ec3c3b263bc0aa37a64": "b78761fa6f3e9d09632832a9c31800c1",
".git/objects/4f/1bbe8907789b0e9b69a6cf7983004819a460e6": "ecfcdd6d150f569494a73e9af1c0b1f1",
".git/objects/50/17c12ed7070e3f19804d484317ac3b451b440d": "263aa03a36e5db6c96e09e7cf50063e6",
".git/objects/52/f9e011a2dc657d87cc4de9a1afbd09761b9e13": "e3609deb4fc5a872f7e49e95b7c34670",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/54/9680e7cd8ebeb81a24b69efb20af3043246f87": "e047cc5a3b61bee01832318af5b88c22",
".git/objects/54/cf9531a3072cbe9e60435269d008f5fe70c1e4": "e8eff0e20e6144774ce8946bb358b428",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5b/1c4286756b61b25d4300904d1763d8c4d7621b": "b8f89b8b26be564e46e7cf4793ab2c51",
".git/objects/5d/ea08480540c6e7c00a97bd2d453cfc42c474df": "2a2dff35a437b81f0c5b3a435eeea6ac",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/0a295a44b49747493c0a4ea1e020cac1ae5232": "a90086c09a98f8690b54079df471f250",
".git/objects/61/8e18ed49743cf2db8c8fea80204d02a7575d64": "194eada1b4a0824cf27027dde88bd5f8",
".git/objects/62/8e2d6f592669935e0fbfcd1a8b65bad175f8fa": "233e48389ebbe98449583e4a9b95f4fb",
".git/objects/64/0f6c5917388c6036833c7cb0f977ed0d8a9dcc": "1fa433ee284a6da6e4f835766c15ffb6",
".git/objects/66/641b9e9ce6460d8a239fbcfabb2394068fd8cf": "3a7bc500fd88a773048b1b35bb2c2bf4",
".git/objects/6a/2b32d051c0edaa9b4efda53df1e878b7e6ec85": "50c81fd97b8f9ff495abcc5dd80b41c6",
".git/objects/6c/aaa2663261448a52e0f6553d5e91efbf24ff77": "6f67c0c739150f4970b46a7ca4561f57",
".git/objects/6d/50b39d5e53aab9dc6f975d5f5ad2bc385585b1": "5287a2eb4f0740c28dda171c48b6953a",
".git/objects/6d/83f7751fc5057e62ee293902e126ee5ab877fc": "2cbd7565d4c37f423ae9a09de748b195",
".git/objects/6d/9248d735dbf4a09c75e7749e510c5c4e1824b5": "4656b2e1db50d6e5dcb6212f60bc0c8e",
".git/objects/70/0690e3153c2d6a54d8a2be4769ca7d9b09419d": "182031331123f59e40cd9f29130aa9d6",
".git/objects/71/3db7a1b9aee8d88a340ec8f9ccfe8e15f4c765": "84fdebbe9b5bb7cc194743be22e56d48",
".git/objects/71/ffa0a3aa48ed8c8b3087f7bf22c7a55f9d8755": "cb3ae072fd340da89371b863f440fb4b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/cc80710f068cd44d20c7fb618796dc82da2460": "687b2938905e7a797649b0fdb6f78ddb",
".git/objects/75/f7175b31ec572851b3f927c7487875486d0cf5": "9e5fe4f6f27513337300f3fddcb6cfbc",
".git/objects/77/52dc793df4e85fa3ee4a43d4aefb837b8ce5b4": "f856d97b7fe82c6eccbf072fa09632be",
".git/objects/79/be4dca6019165ca414690d3b0302b60041d4af": "8a096134cf7a82b7246acd93394e9c05",
".git/objects/7c/13f0147161cfb014043e4ec605f43da8ec92f6": "5e1242d21c3c25371c3fd07f295439a8",
".git/objects/7c/f79a56c9a30e931e70f11fa5b5373375ac5e76": "36942a93f59d3d7e3e312097fd89e693",
".git/objects/7d/3c6f1b983da02afd724c872112402ae83eac1d": "e14626bbcb50dc482bd73242053a4c91",
".git/objects/81/1a8eff1449eb009877faf672889ff24a95dae1": "728a3a7c94881f23e005a76f45e67c03",
".git/objects/81/346d8238d32c99e4b50fd539052f12de43a473": "674d2df804d7c61fd258e986264dbe69",
".git/objects/82/5a1790db9850b5893f0e10541c00eac639802a": "875d08cfaa8fb69f87cd604504eeda50",
".git/objects/82/fc7c3c0b3ce29a78e7e4a98c870ae99f3076c0": "53680598f480ce8b28ad0b5a315118fc",
".git/objects/86/9d8e7fed4d82d9e60d05522391ae4c03f2def7": "744a44df67d844d2ffd44aa0ac598c45",
".git/objects/86/d233b23111950ed6bde130ff160a6ddf5215c6": "41e6a1d708cd57b08c2b81a3b9055587",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/abf5da644faebce74cf5d80e3c4f603de030d0": "e170ff9da39e5ad2e044b426bd73e8e2",
".git/objects/8a/f784d7c2458d946c144ec188e98ce406c9dfc6": "8c7f14a2d2afbb5cbf830bacd42b0560",
".git/objects/8c/51eb6c63bd02b031f48b34f8a1386c89dfe0f4": "24ad10639451b467822d2f399c6840b1",
".git/objects/8d/1fd029d3a8353682ecd0e746ab3d9df42353d5": "c5fd21415209fb3460ad4142edaca7c2",
".git/objects/8f/69811c9ab6bacb37a1a0574edd039363fff1be": "6e1e1b89a761bfdf3219f38ab55bb305",
".git/objects/8f/8a90a16d00471c3f82eff972711a096e8d4089": "3ea614d5f598a56a43307f67629e6b10",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/db6688800865ce1618b3e65d3d3a1ab4aaed3d": "2212c14e5d90e07a4a3a455cabacde93",
".git/objects/94/0fee181cb22f910c2a0660f1d93eb5a025122a": "48bc1990660a8c8f0f9f65e6df900e0e",
".git/objects/94/416477a155fa5ce45d91152a1abad361dd11a2": "540425f439f79ee2c115c04bf47af43f",
".git/objects/95/ebfac36c807fe2c4066479d61233568ab534bc": "513dc837330ad8e3fd4329f53158158c",
".git/objects/98/7222fd93c6ad6cac5ab8975d1912e228380b35": "74336a480c9052a92c23d262e5f7425c",
".git/objects/9c/00bfffb827ac4a07c53c04fdbecb2624d16d9e": "c0a6afd15856ca5c9891d59eb7f23c4f",
".git/objects/9d/55793e9092809439146dcd0a8dbe3911f5edd2": "86186dae985a75d8b44656ad429d9339",
".git/objects/9f/fa428789afa1f34e1f33e86ea21af21cfc176b": "248eb968f77d27a621052dd03bd38c74",
".git/objects/a1/0810bf74535a8e8c623b1f92ad2102e6263961": "ec041ffe888d3bfb825fc42a54565b8d",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/d712f44369e2cb0721cb9eb0b099ec2e26b2bd": "ade1d9fa87a7b61067b386156d6a0d9c",
".git/objects/ab/8c726c4d6ab0154cc20ea873a67c19355abd35": "0cbcfb5350228387b43321599bc97fb3",
".git/objects/b2/456652f6e6804607812bfc6b14dc7d22d12c82": "395c92a00ef71b59a91a490c8c52644a",
".git/objects/b4/7a8a14523c0a1b7344f4f3e5bc716dcfe11f7a": "2f35ef13743c95e741ac0fcebe8ad673",
".git/objects/b4/85a6eddb9dadf8a98d81e7755c92133facc66f": "36a0a4232782923300e2061ce66a941f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9c1b67251220e129e15ebdc71190ce3ab3d356": "f76f79a61a82bc93cb1dcba9578354fa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/58549c29a2c3f7b419cfcea2a6dc9696eb8bb3": "750cb4fe291cb811141379d0c8aa98fc",
".git/objects/ba/6a3608579d43957ebe6291a439abb3f93dba96": "f7d8dee45682fc9e7dde106d8c65052a",
".git/objects/bb/31be8031f22e2c9ca7ba419612516e8664852b": "bcb24db64d3e076fc8324c382ffd5f52",
".git/objects/bc/7c021ce97172ff9ab1a43eceb1126a3a06af5c": "5939ed00a64f5d791fed6056f73f9460",
".git/objects/be/4f4bd5093c3451124b7b0a782f3e68199ea2b3": "149641a8d2541cccd07cd97b80eb40c7",
".git/objects/be/50d9d11690ada87b60be5b55ea035f7868257b": "a065acf83cbe7dec0d6b382f7a74c8d3",
".git/objects/be/cd663d63208ecb3dda321822e3b8f8b85a2c32": "efc529c715793eba8da52e796248e230",
".git/objects/c0/0fdefe171b4979ed8dd9c063ea0c68edcb6346": "44d2128bb90e55f0e9e663104d1665c9",
".git/objects/c1/2d1c3b9605885e3d76b66d90aae26bdda7e5b8": "e2c3903e532af750c6f99b5f4d691919",
".git/objects/c5/35b3f8a1ee759365ad969a6ffc247a1f6ec5f4": "7631928eef3bfff9bafc40a6677a7cd4",
".git/objects/c5/fd0bf73f1505b9d7f23085f468d882e8e14090": "3c75301ed3eed688893138c3b8d79b80",
".git/objects/c8/f3bd62b6719530bc6a8ae7a16e5d592cca0baf": "630fd3369c2c26c41de468f242ca351a",
".git/objects/cb/09d5e5646b7297b7e815fb246c4b142e9dd4c9": "b94bf847a3105548ddf0215b9ee9a8e8",
".git/objects/d2/2c48ed23b459872a4e75e8cca1dde84f0899a5": "f12292c517f16b066bb917d6c25ee0ae",
".git/objects/d3/d66ed1daf9a0499a9ac53789677f9b0d1494e1": "299844b9c3553c89ca2e3d3585e8a78e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a477e622fe32c6a8f0bbc6e9184d6647257bae": "4992542cc6c5b5278df386568f7f1a18",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/83f354017541f8c7a52bb4cb553d327ea8f00f": "d761e255d9b5c485eda3a5d62f8c0fce",
".git/objects/da/b7a4023853aefec81b661db02dcbf5ea302e34": "90c34f72e1982dd45d9eacb03e46971c",
".git/objects/dd/0c36b6b55ece958a82b1868e7e57000f6857fa": "62cedf238265b99f274666493b7534ae",
".git/objects/dd/57257f09d4d17b7500adf71407d62e1de72812": "1ebff7c4c2d86b9cf4f06c94c306aef5",
".git/objects/e7/e49354043548c1f2a011ca87db1164ab908ace": "6bc7bccf3382ddac7b526147c230113b",
".git/objects/e9/33ae3fb2daff199be6f4c6351f1a95e361de95": "626cfbb87d4dc7e183d18ed43f7c9084",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/513a04aedaa0fb64c940bd678ab14be5c40a84": "af7ded6c256b2cfd6fe482f2c5d01003",
".git/objects/ed/ddeb24b823c14ad456878182e157bd76218b3a": "44186e875a75fc530774e2c16aedd70e",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/d1e59629fb9c9c03b583b62e7c8d9d37290b47": "5e20a413f0480952cbc66b33fc0ec4cc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/a8ac07259b131f75e90ad7846ea7a0fa517670": "7b11993e0bc5160633a4ce0a9119dd4a",
".git/objects/f4/e3be979c99d9a97929d153fafb20bbd916dee8": "16a5c28e4987db07137eaac48e4dab77",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/c2c5db874d64de6847e2ca76b8c4bd6265a538": "8e818fad976a1fc1e36e84c24960e7f6",
".git/objects/ff/76d1532990dc8f2a40a2cae83d09f7923eda4a": "94649ee88e85a0ca60493f35f13ae3e1",
".git/objects/pack/pack-64326e6cd8c97837eaf5f9c9c6f3bdd3816a496c.idx": "b72c8233766a633579d4dd618aef7da1",
".git/objects/pack/pack-64326e6cd8c97837eaf5f9c9c6f3bdd3816a496c.pack": "e5fabac02f7746482dd9a14d08e88908",
".git/objects/pack/pack-64326e6cd8c97837eaf5f9c9c6f3bdd3816a496c.rev": "5cb65aefcb7fc3708e2b0ed212f4725a",
".git/ORIG_HEAD": "9044791db67bfcca7074152e62ad5644",
".git/refs/heads/main": "4571c3c72e76681e339de104e755f27c",
".git/refs/remotes/origin/main": "4571c3c72e76681e339de104e755f27c",
"assets/AssetManifest.bin": "07e1e3c3a69b7640d2fafb2428ee47f2",
"assets/AssetManifest.bin.json": "242029b3b8f7001d7c04846b2b8bdedb",
"assets/AssetManifest.json": "6b4d59455c1486e75f70cf383bb23e6b",
"assets/assets/landingbg.gif": "dbced8d46b1cec4262386d9fdaab4bae",
"assets/assets/servermaintenance.gif": "c1827836869078e439914667b0b8fca5",
"assets/FontManifest.json": "2cf8804b12f367ca8d2d525524abad2a",
"assets/fonts/MaterialIcons-Regular.otf": "8f59f621352d35f44844463fb9c57263",
"assets/NOTICES": "bf422c304a1bf5557556a8661e3cf8b1",
"assets/packages/antdesign_icons/font/ant_icons.ttf": "faadd570b8e9f51a7ca1366089f6dc7d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "9f24563ce726ffc13b0febc95797a038",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "773e0c912933bd8721bbaa94a24eea71",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9fbb5a50b74de96b5ae1c01dd61c2b1b",
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
"flutter_bootstrap.js": "80c0569460dbac1f4e72772e2080a6c7",
"icons/android-chrome-192x192.png": "4ba2b4098a271337412b047f697b37aa",
"icons/android-chrome-512x512.png": "df9f8aed56861129894a8a560337c69e",
"icons/apple-touch-icon.png": "d4d085dd5460e6791626dc536ed6eda5",
"icons/favicon-16x16.png": "889fe44555023a1932af9a7de57fb2b7",
"icons/favicon-32x32.png": "3f9435e5150fb6ad00ac07945ddd3754",
"icons/favicon.ico": "490700847b85c8a88626b812fb9862ce",
"index.html": "3719efb2db8bd5145ca4cfccff8a15fd",
"/": "3719efb2db8bd5145ca4cfccff8a15fd",
"main.dart.js": "fc12cd07f1f55de53550ccf2e287dea9",
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
