
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'CSSTools - Everything you need for getting your CSS right.' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Don't waste your time figuring out CSS. We have got all the snippets which will help you get your web styled faster." },
      { hid:"og:type", property: 'og:type', content: "website" },
      { hid:"og:url", property:"og:url", content: "https://fervent-swanson-9ea337.netlify.app/" },
      { hid:"og:title", property:"og:title", content: "CSSTools - Everything you need for getting your CSS right." },
      { hid:"og:image", property:"og:image", content: "https://i.imgur.com/vd5Vz1a.png" },
      { property:"twitter:card", content: "summary_large_image" },
      { hid:"twitter:url", property:"twitter:url", content: "https://fervent-swanson-9ea337.netlify.app/" },
      { hid:"twitter:title", property:"twitter:title", content: "CSSTools - Everything you need for getting your CSS right." },
      { hid:"twitter:description", property:"twitter:description", content: "CSSTools - Everything you need for getting your CSS right." },
      { hid:"twitter:image", property:"twitter:image", content: "https://i.imgur.com/vd5Vz1a.png" },
      { charset: "utf-8" },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: './static/favicon.ico', crossorigin: "true"},
      { rel: "apple-touch-icon-precomposed", sizes: "57x57", href: "https://i.imgur.com/2nndquQ.png", crossorigin: "true"},
      { rel: "apple-touch-icon-precomposed", sizes: "114x114", href:"https://i.imgur.com/LzqE6oA.png", crossorigin: 'true'},
      { rel: "apple-touch-icon-precomposed", sizes: "72x72", href: "https://i.imgur.com/aljxOPc.png", crossorigin: "true" },
      { rel: "apple-touch-icon-precomposed", sizes: "144x144", href: "https://i.imgur.com/rsyR4kO.png", crossorigin: "true" },
      { rel: "apple-touch-icon-precomposed", sizes: "60x60", href: "https://i.imgur.com/NrdaEaf.png", crossorigin: "true" },
      { rel: "apple-touch-icon-precomposed", sizes: "120x120", href: "https://i.imgur.com/lg0RkmF.png", crossorigin: "true" },
      { rel: "apple-touch-icon-precomposed", sizes: "76x76", href: "https://i.imgur.com/E4rUdmx.png", crossorigin: "true" },
      { rel: "apple-touch-icon-precomposed", sizes: "152x152", href: "https://i.imgur.com/YBrhtrK.png", crossorigin: "true" },
      { rel: "icon", type: "image/png", href: "https://i.imgur.com/UAh8JFC.png", sizes: "192x192", crossorigin: "true" },
      { rel: "icon", type: "image/png", href: "https://i.imgur.com/2D4xPGr.png", sizes: "96x96", crossorigin: "true" },
      { rel: "icon", type: "image/png", href: "https://i.imgur.com/pIFeVgd.png", sizes: "32x32", crossorigin: "true" },
      { rel: "icon", type: "image/png", href: "https://i.imgur.com/hcnQ4Am.png", sizes: "16x16", crossorigin: "true" },
      { rel: "icon", type: "image/png", href: "https://i.imgur.com/lg0RkmF.png", sizes: "120x120", crossorigin: "true" },
      { rel: 'stylesheet', type: 'text/css', href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"}
    ],
  },
  server: {
    port: 8085, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  pwa: {
    meta: {
      'title': 'CSSTools.',
      'author': 'Ajo John',
      'apple-mobile-web-app-capable': true,
      'theme-color': '#1C2B46',
      'description': "Don't waste your time figuring out CSS. We have got all the snippets which will help you get your web styled faster.",
      'lang': 'en',
      'og:type': 'website',
      'og:site_name': 'CSSTools',
      'og:title': 'CSSTools',
      'og:description': "Don't waste your time figuring out CSS. We have got all the snippets which will help you get your web styled faster.",
      'og:image': true,
      'og:url': "https://i.imgur.com/vd5Vz1a.png",
      'twitter:card': true,
      'twitter:site': "https://i.imgur.com/vd5Vz1a.png",
      'twitter:creator': "CSSTools."
    },
    manifest: {
      display: 'fullscreen',
      name: 'CSSTools',
      short_name: 'CSSTools',
      lang: 'en',
      theme_color: '#1C2B46',
      mobileAppIOS: true,
      description: "Don't waste your time figuring out CSS. We have got all the snippets which will help you get your web styled faster.",
      ogType: 'website',
      ogSiteName: 'CSSTools.',
      ogTitle: 'CSSTools.',
      ogDescription: "Don't waste your time figuring out CSS. We have got all the snippets which will help you get your web styled faster.",
      ogImage: true,
      ogUrl: "https://i.imgur.com/vd5Vz1a.png",
      twitterCard: true,
      twitterSite: "https://i.imgur.com/vd5Vz1a.png",
      twitterCreator: "CSSTools",
      background_color: '#1C2B46',
      splash_pages: true,
      icons: [
        {
          "src": "./static/icon.png",
          "sizes": "512x512",
          "type": "image/png"
        },
      ],
    },
  },
  /*
  * PWA Workbox COnfig
  */
  workbox: {
    dev: false,
    cleanupOutdatedCaches: true,
    runtimeCaching: [
      {
        urlPattern: 'https://i.imgur.com/.*',
        handler: 'networkFirst',
        strategyOptions: {
          cacheName: 'general',
          cacheExpiration: {
            maxEntries: 10,
            maxAgeSeconds: 0
          },
          cacheableResponse: { statuses: [0, 200] }
        }
      },
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'networkFirst',
        method: 'GET',
        strategyOptions: {
          cacheName: 'fonts',
          cacheExpiration: {
            maxEntries: 10,
            maxAgeSeconds: 300
          },
          cacheableResponse: { statuses: [0, 200] }
        }
      }
    ]
  }, 
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {
      src: '~/plugins/tiny-color.js',
      ssr: false
    },
    {
      src: '~/plugins/sw.js',
      ssr: false
    }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/pwa',
  ],
  // Apollo configs
  apollo: {
    errorHandler: '~/plugins/apollo-error-handler.js',
    clientConfigs: {
      default: '~/apollo/graphql.js'
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
