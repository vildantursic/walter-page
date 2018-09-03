const axios = require('axios')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Walter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Walter, Your strategic BIM partner' },
      { name: 'keywords', content: 'Walter, BIM, Sarajevo, Europe' },
      { hid: 'image', name: 'image', content: '/images/video-image.jpg' },

      { hid: 'og:title', property: 'og:title', content: 'Walter, Your strategic BIM partner' },
      { hid: 'og:url', property: 'og:url', content: 'https://walter.surge.sh' },
      { hid: 'og:image', property: 'og:image', content: '/images/video-image.jpg' },
      { hid: 'og:description', property: 'og:description', content: 'Your strategic BIM partner' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Walter' },

      { hid: 'twitter:card', content: '/images/video-image.jpg' },
      { hid: 'twitter:site', content: '@walter' },
      { hid: 'twitter:title', content: 'Walter, Your strategic BIM partner' },
      { hid: 'twitter:description', content: 'Your strategic BIM partner' },
      { hid: 'twitter:creator', content: '@walter' },
      { hid: 'twitter:image:src', content: '/images/video-image.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'axios',
      'aos',
      'moment',
      'lodash'
    ]
  },
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'https://walter.ba/cms/wp-json/wp/v2/'
  },
  sitemap: {
    hostname: 'https://walter.surge.sh',
    cacheTime: 1000,
    generate: true,
    routes () {
      return axios.get('https://walter.ba/cms/wp-json/wp/v2/cases?per_page=100')
        .then(res => res.data.map(item =>  `/cases/${item.id}`))
    }
  },
  css: [
    'animate.css/animate.min.css',
    'swiper/dist/css/swiper.css',
    'aos/dist/aos.css',
    '~/assets/styles/variables.scss',
    '~/assets/styles/mixins.scss',
    '~/assets/styles/main.scss',
    'viewerjs/dist/viewer.css'
  ],
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/scroll.js', ssr: true },
    { src: '~/plugins/aos.js', ssr: false },
    { src: '~/plugins/viewer.js', ssr: false },
    { src: '~/plugins/analytics.js', ssr: false },
    { src: '~/plugins/social.js', ssr: false },
    '~/plugins/vue2-filters.js',
    '~/plugins/filters.js'
  ]
}
