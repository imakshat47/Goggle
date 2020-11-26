export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - hello",
        totalResults: "1650000000",
        searchTerms: "hello",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "c1bb2d868582211ad",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - hello",
        totalResults: "1650000000",
        searchTerms: "hello",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "c1bb2d868582211ad",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.616068,
    formattedSearchTime: "0.62",
    totalResults: "1650000000",
    formattedTotalResults: "1,650,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Adele - Hello - YouTube",
      htmlTitle: "Adele - \u003cb\u003eHello\u003c/b\u003e - YouTube",
      link: "https://www.youtube.com/watch/YQHsXMglC9A",
      displayLink: "www.youtube.com",
      snippet:
        "Oct 22, 2015 ... 'Hello' is taken from the new album, 25, out November 20. http://adele.com \nAvailable now from iTunes http://smarturl.it/itunes25 Available now ...",
      htmlSnippet:
        "Oct 22, 2015 \u003cb\u003e...\u003c/b\u003e &#39;\u003cb\u003eHello\u003c/b\u003e&#39; is taken from the new album, 25, out November 20. http://adele.com \u003cbr\u003e\nAvailable now from iTunes http://smarturl.it/itunes25 Available now&nbsp;...",
      formattedUrl: "https://www.youtube.com/watch/YQHsXMglC9A",
      htmlFormattedUrl: "https://www.youtube.com/watch/YQHsXMglC9A",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0QFbzW1X0JqqLN9Wp0KsTscWBAjUFTffvOYWy2LjnETK3WnduD2FZAg",
            width: "300",
            height: "168",
          },
        ],
        imageobject: [
          {
            width: "1280",
            url: "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
            height: "720",
          },
        ],
        person: [
          {
            name: "AdeleVEVO",
            url: "http://www.youtube.com/user/AdeleVEVO",
          },
        ],
        metatags: [
          {
            "og:image": "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
            "twitter:app:url:iphone":
              "vnd.youtube://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
            "twitter:app:id:googleplay": "com.google.android.youtube",
            "og:image:width": "1280",
            "twitter:card": "player",
            "theme-color": "rgba(255,255,255,0.98)",
            "og:site_name": "YouTube",
            "twitter:url": "https://www.youtube.com/watch?v=YQHsXMglC9A",
            "twitter:app:url:ipad":
              "vnd.youtube://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
            "al:android:package": "com.google.android.youtube",
            "twitter:app:name:googleplay": "YouTube",
            title: "Adele - Hello",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
            "twitter:app:id:iphone": "544007664",
            "og:description":
              "‘Hello' is taken from the new album, 25, out November 20. http://adele.com Available now from iTunes http://smarturl.it/itunes25 Available now from Amazon ht...",
            "al:ios:app_store_id": "544007664",
            "twitter:image":
              "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
            "twitter:player": "https://www.youtube.com/embed/YQHsXMglC9A",
            "twitter:player:height": "720",
            "twitter:site": "@youtube",
            "og:video:type": "text/html",
            "og:video:height": "720",
            "og:video:url": "https://www.youtube.com/embed/YQHsXMglC9A",
            "og:type": "video.other",
            "twitter:title": "Adele - Hello",
            "al:ios:app_name": "YouTube",
            "og:title": "Adele - Hello",
            "og:image:height": "720",
            "twitter:app:id:ipad": "544007664",
            "al:web:url":
              "https://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
            "og:video:secure_url": "https://www.youtube.com/embed/YQHsXMglC9A",
            "og:video:tag": "Adele",
            "og:video:width": "1280",
            "al:android:url":
              "vnd.youtube://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
            "fb:app_id": "87741124305",
            "twitter:app:url:googleplay":
              "https://www.youtube.com/watch?v=YQHsXMglC9A",
            "twitter:app:name:ipad": "YouTube",
            "twitter:description":
              "‘Hello' is taken from the new album, 25, out November 20. http://adele.com Available now from iTunes http://smarturl.it/itunes25 Available now from Amazon ht...",
            "og:url": "https://www.youtube.com/watch?v=YQHsXMglC9A",
            "twitter:player:width": "1280",
            "al:android:app_name": "YouTube",
            "twitter:app:name:iphone": "YouTube",
          },
        ],
        videoobject: [
          {
            embedurl: "https://www.youtube.com/embed/YQHsXMglC9A",
            playertype: "HTML5 Flash",
            isfamilyfriendly: "True",
            uploaddate: "2015-10-22",
            description:
              "‘Hello' is taken from the new album, 25, out November 20. http://adele.com Available now from iTunes http://smarturl.it/itunes25 Available now from Amazon ht...",
            videoid: "YQHsXMglC9A",
            url: "https://www.youtube.com/watch?v=YQHsXMglC9A",
            duration: "PT6M7S",
            unlisted: "False",
            name: "Adele - Hello",
            paid: "False",
            width: "1280",
            regionsallowed:
              "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
            genre: "Music",
            interactioncount: "2738360154",
            channelid: "UComP_epzeKzvBX156r6pm1Q",
            datepublished: "2015-10-22",
            thumbnailurl:
              "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
            height: "720",
          },
        ],
        cse_image: [
          {
            src: "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "hello | Healthy Toothpaste & Mouthwash - Naturally Friendly, Vegan ...",
      htmlTitle:
        "\u003cb\u003ehello\u003c/b\u003e | Healthy Toothpaste &amp; Mouthwash - Naturally Friendly, Vegan ...",
      link: "https://www.hello-products.com/",
      displayLink: "www.hello-products.com",
      snippet:
        "Shop our naturally friendly products for your family here. Our vegan friendly \ntoothpaste is free from dyes, artificial sweeteners and other preservatives.",
      htmlSnippet:
        "Shop our naturally friendly products for your family here. Our vegan friendly \u003cbr\u003e\ntoothpaste is free from dyes, artificial sweeteners and other preservatives.",
      cacheId: "lcA_2yf_mQgJ",
      formattedUrl: "https://www.hello-products.com/",
      htmlFormattedUrl:
        "https://www.\u003cb\u003ehello\u003c/b\u003e-products.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTM7DgD8QLR9aRss-yPhSX2a5KJjezmMTu2dBe1f41KWcyqF5MLvrKtLJM",
            width: "259",
            height: "195",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#ffffff",
            "theme-color": "#ffffff",
            "og:type": "website",
            "twitter:card": "summary",
            "og:site_name": "Hello Products",
            "msvalidate.01": "782AB2D27CB855D9F86E2B56FBC572DA",
            "og:title":
              "hello | Healthy Toothpaste & Mouthwash - Naturally Friendly, Vegan & Never Tested on Animals",
            "twitter:label1": "Written by",
            "msapplication-tileimage": "/ms-icon-144x144.png",
            "og:description":
              "Shop our naturally friendly products for your family here. Our vegan friendly toothpaste is free from dyes, artificial sweeteners and other preservatives.",
            "twitter:data1": "path_admin",
            "article:modified_time": "2020-11-06T20:45:51+00:00",
            viewport: "width=device-width, initial-scale=1.0",
            "og:locale": "en_US",
            "og:url": "https://www.hello-products.com/",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src:
              "https://www.hello-products.com/wp-content/uploads/2020/01/headermobile_03.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello - YouTube",
      htmlTitle: "\u003cb\u003eHello\u003c/b\u003e - YouTube",
      link: "https://www.youtube.com/watch?v=_WS9w10ygpU",
      displayLink: "www.youtube.com",
      snippet:
        "Jun 23, 2016 ... Provided to YouTube by Sony Music Entertainment Hello · Adele 25 ℗ 2015 XL \nRecordings Ltd., under exclusive license to Columbia Records, ...",
      htmlSnippet:
        "Jun 23, 2016 \u003cb\u003e...\u003c/b\u003e Provided to YouTube by Sony Music Entertainment \u003cb\u003eHello\u003c/b\u003e · Adele 25 ℗ 2015 XL \u003cbr\u003e\nRecordings Ltd., under exclusive license to Columbia Records,&nbsp;...",
      formattedUrl: "https://www.youtube.com/watch?v=_WS9w10ygpU",
      htmlFormattedUrl: "https://www.youtube.com/watch?v=_WS9w10ygpU",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJHNxdCQYZ-ath77UErR6huMprmSH8r5WvywsW8jHETmH3w4qBVqzUCH0",
            width: "300",
            height: "168",
          },
        ],
        imageobject: [
          {
            width: "1280",
            url: "https://i.ytimg.com/vi/_WS9w10ygpU/maxresdefault.jpg",
            height: "720",
          },
        ],
        person: [
          {
            name: "Adele - Topic",
            url: "http://www.youtube.com/channel/UCRw0x9_EfawqmgDI2IgQLLg",
          },
        ],
        metatags: [
          {
            "og:image": "https://i.ytimg.com/vi/_WS9w10ygpU/maxresdefault.jpg",
            "twitter:app:url:iphone":
              "vnd.youtube://www.youtube.com/watch?v=_WS9w10ygpU&feature=applinks",
            "twitter:app:id:googleplay": "com.google.android.youtube",
            "og:image:width": "1280",
            "twitter:card": "player",
            "theme-color": "rgba(255,255,255,0.98)",
            "og:site_name": "YouTube",
            "twitter:url": "https://www.youtube.com/watch?v=_WS9w10ygpU",
            "twitter:app:url:ipad":
              "vnd.youtube://www.youtube.com/watch?v=_WS9w10ygpU&feature=applinks",
            "al:android:package": "com.google.android.youtube",
            "twitter:app:name:googleplay": "YouTube",
            title: "Hello",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/watch?v=_WS9w10ygpU&feature=applinks",
            "twitter:app:id:iphone": "544007664",
            "og:description":
              "Provided to YouTube by Sony Music Entertainment Hello · Adele 25 ℗ 2015 XL Recordings Ltd., under exclusive license to Columbia Records, a Division of Sony M...",
            "al:ios:app_store_id": "544007664",
            "twitter:image":
              "https://i.ytimg.com/vi/_WS9w10ygpU/maxresdefault.jpg",
            "twitter:player": "https://www.youtube.com/embed/_WS9w10ygpU",
            "twitter:player:height": "720",
            "twitter:site": "@youtube",
            "og:video:type": "text/html",
            "og:video:height": "720",
            "og:video:url": "https://www.youtube.com/embed/_WS9w10ygpU",
            "og:type": "video.other",
            "twitter:title": "Hello",
            "al:ios:app_name": "YouTube",
            "og:title": "Hello",
            "og:image:height": "720",
            "twitter:app:id:ipad": "544007664",
            "al:web:url":
              "https://www.youtube.com/watch?v=_WS9w10ygpU&feature=applinks",
            "og:video:secure_url": "https://www.youtube.com/embed/_WS9w10ygpU",
            "og:video:tag": "Adele",
            "og:video:width": "960",
            "al:android:url":
              "vnd.youtube://www.youtube.com/watch?v=_WS9w10ygpU&feature=applinks",
            "fb:app_id": "87741124305",
            "twitter:app:url:googleplay":
              "https://www.youtube.com/watch?v=_WS9w10ygpU",
            "twitter:app:name:ipad": "YouTube",
            "twitter:description":
              "Provided to YouTube by Sony Music Entertainment Hello · Adele 25 ℗ 2015 XL Recordings Ltd., under exclusive license to Columbia Records, a Division of Sony M...",
            "og:url": "https://www.youtube.com/watch?v=_WS9w10ygpU",
            "twitter:player:width": "960",
            "al:android:app_name": "YouTube",
            "twitter:app:name:iphone": "YouTube",
          },
        ],
        videoobject: [
          {
            embedurl: "https://www.youtube.com/embed/_WS9w10ygpU",
            playertype: "HTML5 Flash",
            isfamilyfriendly: "True",
            uploaddate: "2016-06-23",
            description:
              "Provided to YouTube by Sony Music Entertainment Hello · Adele 25 ℗ 2015 XL Recordings Ltd., under exclusive license to Columbia Records, a Division of Sony M...",
            videoid: "_WS9w10ygpU",
            url: "https://www.youtube.com/watch?v=_WS9w10ygpU",
            duration: "PT4M56S",
            unlisted: "False",
            name: "Hello",
            paid: "False",
            width: "960",
            regionsallowed:
              "AR,AS,BO,BR,CL,CO,CR,DO,EC,GT,GU,HN,MP,MX,NI,PA,PE,PR,PY,SV,US,UY,VE,VI",
            genre: "Music",
            interactioncount: "23940592",
            channelid: "UCRw0x9_EfawqmgDI2IgQLLg",
            datepublished: "2016-06-23",
            thumbnailurl:
              "https://i.ytimg.com/vi/_WS9w10ygpU/maxresdefault.jpg",
            height: "720",
          },
        ],
        cse_image: [
          {
            src: "https://i.ytimg.com/vi/_WS9w10ygpU/maxresdefault.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news",
      htmlTitle:
        "\u003cb\u003eHELLO\u003c/b\u003e! - Daily royal, celebrity, fashion, beauty &amp; lifestyle news",
      link: "https://www.hellomagazine.com/",
      displayLink: "www.hellomagazine.com",
      snippet:
        "HELLO! brings you the latest celebrity & royal news from the UK & around the \nworld, magazine exclusives, fashion, beauty, lifestyle news, celeb babies, ...",
      htmlSnippet:
        "\u003cb\u003eHELLO\u003c/b\u003e! brings you the latest celebrity &amp; royal news from the UK &amp; around the \u003cbr\u003e\nworld, magazine exclusives, fashion, beauty, lifestyle news, celeb babies,&nbsp;...",
      cacheId: "hxjkDmKHGvIJ",
      formattedUrl: "https://www.hellomagazine.com/",
      htmlFormattedUrl:
        "https://www.\u003cb\u003ehello\u003c/b\u003emagazine.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrFJKj5Z05x3Oik1ptcuuuy59bHOq359QK_F2Pug3AQIxhDa6Sb7xmPeo",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "p:domain_verify": "2e0d0d07c9164557a351ff28f09074ef",
            "og:image":
              "https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png",
            "og:type": "website",
            "og:site_name": "HELLO!",
            handheldfriendly: "True",
            "msvalidate.01": "802E2A1202224ED23A9EF77A39836CEC",
            author: "HELLO!",
            "og:title":
              "HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news",
            locality: "London, UK",
            origen: "hellomagazine.com",
            title:
              "HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news",
            distribution: "global",
            "og:description":
              "HELLO! brings you the latest celebrity & royal news from the UK & around the world, magazine exclusives, fashion, beauty, lifestyle news, celeb babies, weddings, pregnancies and more!",
            "fb:pages": "89982930077",
            viewport: "width=device-width, initial-scale=1",
            "dc.creator": "HELLO!",
            organization: "HELLO!",
            mobileoptimized: "0",
            "fb:admins": "89982930077",
            "resource-type": "document",
            "dc.language": "English",
            lang: "en-GB",
            "og:url": "https://www.hellomagazine.com/",
            "botify-site-verification": "rAorMmkbfzd6yOwJ3PITFmdyCjOzGLug",
          },
        ],
        cse_image: [
          {
            src:
              "https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png",
          },
        ],
        sitenavigationelement: [
          {
            name: "Celebrities",
            url: "Celebrities",
          },
          {
            name: "Celebrities",
            url: "Celebrities",
          },
          {
            name: "Select Edition",
            url: "HELLO! NEWSLETTER",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "The Official Home of Hello Kitty & Friends",
      htmlTitle:
        "The Official Home of \u003cb\u003eHello\u003c/b\u003e Kitty &amp; Friends",
      link: "https://www.sanrio.com/",
      displayLink: "www.sanrio.com",
      snippet:
        "Explore the supercute world of Sanrio, home to Hello Kitty, My Melody, Kuromi, \nAggretsuko, Gudetama, and more!",
      htmlSnippet:
        "Explore the supercute world of Sanrio, home to \u003cb\u003eHello\u003c/b\u003e Kitty, My Melody, Kuromi, \u003cbr\u003e\nAggretsuko, Gudetama, and more!",
      formattedUrl: "https://www.sanrio.com/",
      htmlFormattedUrl: "https://www.sanrio.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReTGtpEXbQ6ZVLJB2nVYuy5CxdrNZBSLGvYqiNmmvzrtyPkKm0qDAyrwA",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://cdn.shopify.com/s/files/1/0416/8083/0620/files/HK_AND_Friends_cream_600x600.png?v=1604721645",
            "theme-color": "#ffffff",
            "og:type": "website",
            "og:image:width": "1200",
            "twitter:card": "summary",
            "og:site_name": "Sanrio",
            author: "Sanrio",
            "og:title": "The Official Home of Hello Kitty & Friends",
            "shopify-checkout-api-token": "16940c0cea93e91348c277a0eafbe76d",
            "og:image:height": "1200",
            "og:description":
              "Explore the supercute world of Sanrio, home to Hello Kitty, My Melody, Kuromi, Aggretsuko, Gudetama, and more!",
            "og:image:secure_url":
              "https://cdn.shopify.com/s/files/1/0416/8083/0620/files/HK_AND_Friends_cream_600x600.png?v=1604721645",
            "twitter:site": "@sanrio/",
            viewport: "width=device-width,initial-scale=1",
            "shopify-digital-wallet": "/41680830620/digital_wallets/dialog",
            "og:url": "https://www.sanrio.com/",
          },
        ],
        cse_image: [
          {
            src:
              "https://cdn.shopify.com/s/files/1/0416/8083/0620/files/HK_AND_Friends_cream_600x600.png?v=1604721645",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "HELLO! US Edition - Latest news and Photos",
      htmlTitle:
        "\u003cb\u003eHELLO\u003c/b\u003e! US Edition - Latest news and Photos",
      link: "https://www.hellomagazine.com/us/",
      displayLink: "www.hellomagazine.com",
      snippet:
        "HELLO! US edition brings you the latest celebrity & royal news from the US & \naround the world, magazine exclusives, celeb babies, weddings, pregnancies \nand ...",
      htmlSnippet:
        "\u003cb\u003eHELLO\u003c/b\u003e! US edition brings you the latest celebrity &amp; royal news from the US &amp; \u003cbr\u003e\naround the world, magazine exclusives, celeb babies, weddings, pregnancies \u003cbr\u003e\nand&nbsp;...",
      cacheId: "75KX4ku9N7oJ",
      formattedUrl: "https://www.hellomagazine.com/us/",
      htmlFormattedUrl:
        "https://www.\u003cb\u003ehello\u003c/b\u003emagazine.com/us/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRh1Y5ewqckPORQbb1Rr8eckmN52nJ9jU83XZxWKYueC8tdwDhctLrfNw",
            width: "140",
            height: "84",
          },
        ],
        metatags: [
          {
            "og:image":
              "//www.hellomagazine.com/imagenes/brides/20201125101542/royal-wedding-guest-faux-pas-photos/0-487-85/royal-wedding-faux-pas-mistakes-etiquette-e.jpg",
            "og:type": "website",
            "twitter:card": "summary",
            "twitter:title":
              "HELLO! US edition brings you the latest celebrity & royal news from around the US & around the world, magazine exclusives, celeb babies, weddings, pregnancies and more",
            "og:site_name": "hellomagazine.com",
            "og:image:url":
              "//www.hellomagazine.com/imagenes/brides/20201125101542/royal-wedding-guest-faux-pas-photos/0-487-85/royal-wedding-faux-pas-mistakes-etiquette-e.jpg",
            "twitter:url": "https://www.hellomagazine.com/us/",
            "og:title":
              "HELLO! US edition brings you the latest celebrity & royal news from around the US & around the world, magazine exclusives, celeb babies, weddings, pregnancies and more",
            title:
              "HELLO! US edition brings you the latest celebrity & royal news from around the US & around the world, magazine exclusives, celeb babies, weddings, pregnancies and more",
            "og:description":
              "HELLO! US edition brings you the latest celebrity & royal news from the US & around the world, magazine exclusives, celeb babies, weddings, pregnancies and more",
            "twitter:creator": "@hellomag",
            "twitter:image":
              "//www.hellomagazine.com/imagenes/brides/20201125101542/royal-wedding-guest-faux-pas-photos/0-487-85/royal-wedding-faux-pas-mistakes-etiquette-e.jpg",
            "twitter:site": "@hellomag",
            viewport:
              "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
            "twitter:description":
              "HELLO! US edition brings you the latest celebrity & royal news from the US & around the world, magazine exclusives, celeb babies, weddings, pregnancies and more",
            "fb:admins": "52459726262",
            "og:url": "https://www.hellomagazine.com/us/",
            "botify-site-verification": "rAorMmkbfzd6yOwJ3PITFmdyCjOzGLug",
          },
        ],
        cse_image: [
          {
            src:
              "https://www.hellomagazine.com/imagenes/brides/20201125101542/royal-wedding-guest-faux-pas-photos/0-487-85/royal-wedding-faux-pas-mistakes-etiquette-d.jpg",
          },
        ],
        sitenavigationelement: [
          {
            name: "Celebrities",
            url: "Celebrities",
          },
          {
            name: "Select Edition",
            url: "HELLO! NEWSLETTER",
          },
        ],
        article: [
          {
            image:
              "https://www.hellomagazine.com/imagenes/brides/20201125101542/royal-wedding-guest-faux-pas-photos/0-487-85/royal-wedding-faux-pas-mistakes-etiquette-d.jpg",
            title: "7 royal wedding faux pas you may have missed",
          },
          {
            image:
              "https://www.hellomagazine.com/imagenes/royalty/20201125101536/danish-royal-family-confirm-christmas-2020-plans/0-487-46/danish-royals-xmas-2020-d.jpg",
            title:
              "Danish royal family confirms socially distanced Christmas plans",
          },
          {
            title: "42 celebs who shocked the world by marrying in secret",
          },
          {
            title:
              "Rebel Wilson embraces her natural beauty in incredible filter-free selfie",
          },
          {
            title:
              "Charles Spencer offers sympathy to Prince Harry and Meghan Markle",
          },
          {
            title: "Meghan Markle reveals devastating miscarriage",
          },
          {
            title:
              "The best Nordstrom Black Friday & Cyber Monday 2020 deals: Save up to 50% off UGG, Barbour & MORE",
          },
          {
            title:
              "Celebrating Thanksgiving? This pumpkin pie recipe has just 3 simple steps",
          },
          {
            title:
              "Jennifer Lopez's favourite bag brand just dropped a huge Black Friday sale",
          },
          {
            title:
              "Saks is selling beauty advent calendars with a major Black Friday markdown",
          },
          {
            title:
              "Elizabeth Hurley causes stir with electrifying lingerie photo",
          },
          {
            title:
              "Salma Hayek's throwback bikini photo sparks marriage proposal",
          },
          {
            title:
              "The Goldbergs' Hayley Orrantia makes surprising revelation about working with Simon Cowell",
          },
          {
            title:
              "Michelle Pfeiffer's sultry bathroom selfie is pretty incredible",
          },
          {
            title:
              "Barack Obama's couch is worlds away from his White House style",
          },
          {
            title:
              "Princess Beatrice and Edoardo Mapelli Mozzi shop for groceries in London",
          },
          {
            title:
              "Katy Perry's appearance gets people talking – and the reason might surprise you",
          },
          {
            title:
              "11 royal hairstyles The Crown absolutely nailed: from Emma Corrin to Olivia Colman",
          },
          {
            title:
              "6 memorable celebrity proposal rejections: from Katy Perry to Nicole Scherzinger",
          },
          {
            title:
              "Removal vans spotted in Windsor after Princess Eugenie moves into Frogmore Cottage - report",
          },
          {
            title:
              "Rebel Wilson's unique swimsuit gives her curves in all the right places",
          },
          {
            title:
              "Prince George and Princess Charlotte set to enjoy extra family time with Prince William and Kate Middleton this week",
          },
          {
            title:
              "Goldie Hawn's nickname revealed by granddaughter Rani in sweet rare video",
          },
          {
            title:
              "Nicole Kidman's husband Keith Urban shares glimpse inside living room in Nashville home",
          },
          {
            title:
              "Kourtney Kardashian dyes her hair green ahead of the festive season",
          },
          {
            title: "Gwen Stefani's appearance sparks major concern from fans",
          },
          {
            title:
              "Prince Joachim and Princess Marie of Denmark share stunning photo to mark new milestone",
          },
          {
            title:
              "Kelly Ripa stuns in stylish bikini in gorgeous beach photo with Mark Consuelos",
          },
          {
            title:
              "Jennifer Lopez reveals major family change involving twins Max and Emme",
          },
          {
            title:
              "Spokesman gives update on Princess Michael of Kent's health after coronavirus diagnosis",
          },
          {
            title: "Celebrity Houses",
            url: "Celebrity Houses",
          },
          {
            title: "Royals in Red",
            url: "Royals in Red",
          },
          {
            title: "The Kardashians",
            url: "The Kardashians",
          },
          {
            title: "Kate Middleton Style",
            url: "Kate Middleton Style",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello (Adele song) - Wikipedia",
      htmlTitle: "\u003cb\u003eHello\u003c/b\u003e (Adele song) - Wikipedia",
      link: "https://en.wikipedia.org/wiki/Hello_(Adele_song)",
      displayLink: "en.wikipedia.org",
      snippet:
        '"Hello" is a song by English singer-songwriter Adele, released on 23 October \n2015 by XL Recordings as the lead single from her third studio album, 25 (2015).',
      htmlSnippet:
        "&quot;\u003cb\u003eHello\u003c/b\u003e&quot; is a song by English singer-songwriter Adele, released on 23 October \u003cbr\u003e\n2015 by XL Recordings as the lead single from her third studio album, 25 (2015).",
      cacheId: "z7n3yz7lb8gJ",
      formattedUrl: "https://en.wikipedia.org/wiki/Hello_(Adele_song)",
      htmlFormattedUrl:
        "https://en.wikipedia.org/wiki/\u003cb\u003eHello\u003c/b\u003e_(Adele_song)",
      pagemap: {
        hcard: [
          {
            fn: "Adele",
            nickname: "Adele",
          },
        ],
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTPwGd0i5S8YOngLxcsTn99Z9YW0VOk9ICPGGFfTGRDMViG3FuJ1Lwwk",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://upload.wikimedia.org/wikipedia/en/8/85/Adele_-_Hello_%28Official_Single_Cover%29.png",
          },
        ],
        cse_image: [
          {
            src:
              "https://upload.wikimedia.org/wikipedia/en/8/85/Adele_-_Hello_%28Official_Single_Cover%29.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "HelloFresh: #1 Meal Kit Delivery Service | Fresh Meal Delivery",
      htmlTitle:
        "HelloFresh: #1 Meal Kit Delivery Service | Fresh Meal Delivery",
      link: "https://www.hellofresh.com/",
      displayLink: "www.hellofresh.com",
      snippet:
        "America's Most Popular Meal Kit ✅ Most 5-Star-Reviews ✅ Now offering the \nmost recipe variety ✅ Fresh and affordable Meal Delivery. Get Started now!",
      htmlSnippet:
        "America&#39;s Most Popular Meal Kit ✅ Most 5-Star-Reviews ✅ Now offering the \u003cbr\u003e\nmost recipe variety ✅ Fresh and affordable Meal Delivery. Get Started now!",
      cacheId: "Q2DT63kc83YJ",
      formattedUrl: "https://www.hellofresh.com/",
      htmlFormattedUrl:
        "https://www.\u003cb\u003ehello\u003c/b\u003efresh.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNWa3seKdWzcL2xrcSULLZ7zrkKB9KegM9CwZAu8QV-t2khvFWr4wI-s",
            width: "200",
            height: "200",
          },
        ],
        question: [
          {
            name: "How does HelloFresh’s meal kit delivery service work?",
          },
          {
            name: "Why choose HelloFresh for your meal kit service?",
          },
          {
            name: "Which food meal plans & recipes does HelloFresh offer?",
          },
          {
            name: "How much does HelloFresh cost?",
          },
          {
            name: "How many times a week does HelloFresh deliver?",
          },
          {
            name: "Does HelloFresh support a healthy lifestyle?",
          },
          {
            name: "Does HelloFresh give nutrition & calorie information?",
          },
          {
            name: "Can I skip a week of delivery?",
          },
          {
            name: "How does HelloFresh’s meal kit delivery service work?",
          },
          {
            name: "Why choose HelloFresh for your meal kit service?",
          },
          {
            name: "Which food meal plans & recipes does HelloFresh offer?",
          },
          {
            name: "How much does HelloFresh cost?",
          },
          {
            name: "How many times a week does HelloFresh deliver?",
          },
          {
            name: "Does HelloFresh support a healthy lifestyle?",
          },
          {
            name: "Does HelloFresh give nutrition & calorie information?",
          },
          {
            name: "Can I skip a week of delivery?",
          },
          {
            name: "How does HelloFresh’s meal kit delivery service work?",
          },
          {
            name: "Why choose HelloFresh for your meal kit service?",
          },
          {
            name: "Which food meal plans & recipes does HelloFresh offer?",
          },
          {
            name: "How much does HelloFresh cost?",
          },
          {
            name: "How many times a week does HelloFresh deliver?",
          },
          {
            name: "Does HelloFresh support a healthy lifestyle?",
          },
          {
            name: "Does HelloFresh give nutrition & calorie information?",
          },
          {
            name: "Can I skip a week of delivery?",
          },
        ],
        answer: [
          {
            text:
              "Our meal delivery service allows you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients right to your door. First, you...",
          },
          {
            text:
              "HelloFresh is America’s #1 meal kit, offering the widest variety of recipes to over a million customers around the country. We have the most five-star recipes and the most five-star reviews...",
          },
          {
            text:
              "HelloFresh has the most variety in terms of recipes - from meat & veggies, to low-carb and low-calorie options, and more. You can choose from four delicious meal plan preferences — each one...",
          },
          {
            text:
              "The cost of HelloFresh’s meal service starts at $7.49 per serving. In other words, you spend only $53.94 per week for 3 recipes a week for 2 people. Just check out our street cred on Trustpilot,...",
          },
          {
            text:
              "Three times a week. You can expect your meal kits to arrive between 8 am to 8 pm. We deliver anywhere in the United States, except Alaska and Hawaii.",
          },
          {
            text:
              "Yes. HelloFresh offers a wide array of flavorful and nutritious meal kit menu options that cater to a range of dietary needs, making use of crisp, seasonal vegetables and other fresh produce.",
          },
          {
            text:
              "Absolutely! We guarantee that every single one of our meal kits is appropriately labeled. They have all the nutritional facts you’re looking for like calorie content and the amount of carbohydrat...",
          },
          {
            text:
              "Yes. With our meal subscription service, you are always in control. If you don’t want to receive a meal kit on a particular week, you don’t have to. To avoid charges when skipping a week,...",
          },
          {
            text:
              "Our meal delivery service allows you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients right to your door. First, you...",
          },
          {
            text:
              "HelloFresh is America’s #1 meal kit, offering the widest variety of recipes to over a million customers around the country. We have the most five-star recipes and the most five-star reviews...",
          },
          {
            text:
              "HelloFresh has the most variety in terms of recipes - from meat & veggies, to low-carb and low-calorie options, and more. You can choose from four delicious meal plan preferences — each one...",
          },
          {
            text:
              "The cost of HelloFresh’s meal service starts at $7.49 per serving. In other words, you spend only $53.94 per week for 3 recipes a week for 2 people. Just check out our street cred on Trustpilot,...",
          },
          {
            text:
              "Three times a week. You can expect your meal kits to arrive between 8 am to 8 pm. We deliver anywhere in the United States, except Alaska and Hawaii.",
          },
          {
            text:
              "Yes. HelloFresh offers a wide array of flavorful and nutritious meal kit menu options that cater to a range of dietary needs, making use of crisp, seasonal vegetables and other fresh produce.",
          },
          {
            text:
              "Absolutely! We guarantee that every single one of our meal kits is appropriately labeled. They have all the nutritional facts you’re looking for like calorie content and the amount of carbohydrat...",
          },
          {
            text:
              "Yes. With our meal subscription service, you are always in control. If you don’t want to receive a meal kit on a particular week, you don’t have to. To avoid charges when skipping a week,...",
          },
          {
            text:
              "Our meal delivery service allows you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients right to your door. First, you...",
          },
          {
            text:
              "HelloFresh is America’s #1 meal kit, offering the widest variety of recipes to over a million customers around the country. We have the most five-star recipes and the most five-star reviews...",
          },
          {
            text:
              "HelloFresh has the most variety in terms of recipes - from meat & veggies, to low-carb and low-calorie options, and more. You can choose from four delicious meal plan preferences — each one...",
          },
          {
            text:
              "The cost of HelloFresh’s meal service starts at $7.49 per serving. In other words, you spend only $53.94 per week for 3 recipes a week for 2 people. Just check out our street cred on Trustpilot,...",
          },
          {
            text:
              "Three times a week. You can expect your meal kits to arrive between 8 am to 8 pm. We deliver anywhere in the United States, except Alaska and Hawaii.",
          },
          {
            text:
              "Yes. HelloFresh offers a wide array of flavorful and nutritious meal kit menu options that cater to a range of dietary needs, making use of crisp, seasonal vegetables and other fresh produce.",
          },
          {
            text:
              "Absolutely! We guarantee that every single one of our meal kits is appropriately labeled. They have all the nutritional facts you’re looking for like calorie content and the amount of carbohydrat...",
          },
          {
            text:
              "Yes. With our meal subscription service, you are always in control. If you don’t want to receive a meal kit on a particular week, you don’t have to. To avoid charges when skipping a week,...",
          },
        ],
        metatags: [
          {
            "p:domain_verify": "5aea915e1ac0b408298cfb02478eb3b2",
            country: "us",
            "og:image":
              "https://cdn.hellofresh.com/de/cms/raf/hellofresh-logo.png",
            "theme-color": "#FFF",
            "apple-mobile-web-app-title": "Home",
            "og:title":
              "#1 Meal Kit Delivery Service | Fresh Meal Delivery | HelloFresh",
            "og:description":
              "America’s Most Popular Meal Kit ✅ Most 5-Star-Reviews ✅ Now offering the most recipe variety ✅ Fresh and affordable Meal Delivery. Get Started now!",
            version: "6.1268.0",
            "twitter:site": "@hellofresh",
            "site:name": "HelloFresh",
            viewport: "width=device-width, initial-scale=1.0",
            "og:locale": "en-US",
            "og:url": "https://www.hellofresh.com/",
          },
        ],
        cse_image: [
          {
            src: "https://cdn.hellofresh.com/de/cms/raf/hellofresh-logo.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello Design",
      htmlTitle: "\u003cb\u003eHello\u003c/b\u003e Design",
      link: "https://www.hellodesign.com/",
      displayLink: "www.hellodesign.com",
      snippet:
        "Hello is a creative agency driven to craft worthy experiences. We believe \neverything will be digital—surrounding us like the air we breathe. Hello is ...",
      htmlSnippet:
        "\u003cb\u003eHello\u003c/b\u003e is a creative agency driven to craft worthy experiences. We believe \u003cbr\u003e\neverything will be digital—surrounding us like the air we breathe. \u003cb\u003eHello\u003c/b\u003e is&nbsp;...",
      cacheId: "bpnW6X-_EvAJ",
      formattedUrl: "https://www.hellodesign.com/",
      htmlFormattedUrl:
        "https://www.\u003cb\u003ehello\u003c/b\u003edesign.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR--0_qKuJoRNnvSwoiYALScg3GTJgsjRFwAbRZLQ0tpurCbrxgSMwjOngj",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            cluster: "ip-10-3-1-184.us-west-2.compute.internal",
            "og:image": "https://www.hellodesign.com/image/732/b17/0.5,0.5",
            "og:type": "website",
            "twitter:title": "Hello Design",
            "og:image:width": "1200",
            "twitter:card": "summary_large_image",
            "og:site_name": "Hello",
            author: "Hello Design",
            "og:title": "Hello Design",
            "og:image:height": "630",
            "og:image:type": "jpeg",
            "og:description":
              "Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe. Hello is communication, and simply what we do.",
            "twitter:image:src":
              "https://www.hellodesign.com/image/732/b17/0.5,0.5",
            viewport: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
            "twitter:description":
              "Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe. Hello is communication, and simply what we do.",
            "og:url": "https://www.hellodesign.com/index.html",
          },
        ],
        cse_image: [
          {
            src: "https://www.hellodesign.com/image/732/b17/0.5,0.5",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Nest Hello Video Doorbell - Know Who's Knocking - Google Store",
      htmlTitle:
        "Nest \u003cb\u003eHello\u003c/b\u003e Video Doorbell - Know Who&#39;s Knocking - Google Store",
      link: "https://store.google.com/us/product/nest_hello_doorbell",
      displayLink: "store.google.com",
      snippet:
        "With a Nest Aware subscription, Nest Hello can automatically alert you when your \npackages are delivered and picked up. There's no need to monitor your Nest ...",
      htmlSnippet:
        "With a Nest Aware subscription, Nest \u003cb\u003eHello\u003c/b\u003e can automatically alert you when your \u003cbr\u003e\npackages are delivered and picked up. There&#39;s no need to monitor your Nest&nbsp;...",
      formattedUrl: "https://store.google.com/us/product/nest_hello_doorbell",
      htmlFormattedUrl:
        "https://store.google.com/us/product/nest_\u003cb\u003ehello\u003c/b\u003e_doorbell",
      pagemap: {
        offer: [
          {
            pricecurrency: "USD",
            price: "229",
            availability: "http://schema.org/InStock",
            sku: "_nest_hello_doorbell",
          },
        ],
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1NnFJEylpnzkTZDRTfusbcHfq6UjXiZGuxzmF9cCR1LZc7fuJpiwVxt8",
            width: "225",
            height: "225",
          },
        ],
        product: [
          {
            name: "Nest Hello",
            description:
              "Answer your door from anywhere. Person alerts, built-in outdoor home security camera with 8x digital zoom, and prerecorded responses so you never miss a visitor or package.",
            brand: "Google",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://lh3.googleusercontent.com/Kd4RAtnCkHY38dAoSlGkLO2id7V8yi6tNk1YrzTzb8NCn8j11IoPxcyVSFQQNacCX1oy=rw",
            "og:type": "website",
            "twitter:card": "summary",
            "twitter:title": "Nest Hello",
            "og:site_name": "Google Store",
            "msvalidate.01": "5B96ACB2BFE6A95B22143473B8763663",
            "og:title": "Nest Hello",
            "msapplication-tileimage":
              "https://www.gstatic.com/images/branding/product/1x/googleg_96dp.png",
            "og:description": "Video Doorbell",
            "twitter:image":
              "https://lh3.googleusercontent.com/Kd4RAtnCkHY38dAoSlGkLO2id7V8yi6tNk1YrzTzb8NCn8j11IoPxcyVSFQQNacCX1oy=rw",
            "twitter:image:alt": "Nest Hello Video Doorbell",
            "twitter:site": "“@madebygoogle”",
            viewport:
              "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
            "twitter:description": "Video Doorbell",
            "og:url": "https://store.google.com/us/product/nest_hello_doorbell",
          },
        ],
        cse_image: [
          {
            src:
              "https://lh3.googleusercontent.com/Kd4RAtnCkHY38dAoSlGkLO2id7V8yi6tNk1YrzTzb8NCn8j11IoPxcyVSFQQNacCX1oy=rw",
          },
        ],
        hproduct: [
          {
            fn: "Nest Hello",
            description:
              "Answer your door from anywhere. Person alerts, built-in outdoor home security camera with 8x digital zoom, and prerecorded responses so you never miss a visitor or package.",
            currency: "USD",
            currency_iso4217: "840",
          },
        ],
      },
    },
  ],
};
