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
      { name: 'keywords', content: 'Walter, BIM, Sarajevo' },
      { itemprop: 'name', content: 'Walter, Your strategic BIM partner' },
      { itemprop: 'description', content: 'Your strategic BIM partner' },
      { itemprop: 'image', content: '/walter.png' },

      { name: 'twitter:card', content: '/walter.png' },
      { name: 'twitter:site', content: '@walter' },
      { name: 'twitter:title', content: 'Walter, Your strategic BIM partner' },
      { name: 'twitter:description', content: 'Your strategic BIM partner' },
      { name: 'twitter:creator', content: '@walter' },
      { name: 'twitter:image:src', content: '/walter.png' },

      { hid: 'og:title', property: 'og:title', content: 'Walter, Your strategic BIM partner' },
      { hid: 'og:url', property: 'og:url', content: 'http://walter.ba/' },
      { hid: 'og:image', property: 'og:image', content: 'http://walter.ba' },
      { hid: 'og:description', property: 'og:description', content: 'Your strategic BIM partner' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Walter' }
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
    loaders:[
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      }
    ],
    vendor: [
      'axios',
      'aos',
      'moment',
      'lodash'
    ]
  },
  css: [
    'animate.css/animate.min.css',
    'swiper/dist/css/swiper.css',
    'aos/dist/aos.css',
    '~/assets/styles/variables.scss',
    '~/assets/styles/mixins.scss',
    '~/assets/styles/main.scss',
    'vue-image-lightbox/dist/vue-image-lightbox.min.css'
  ],
  plugins: [
    {src: '~/plugins/swiper.js', ssr: false},
    {src: '~plugins/scroll.js', ssr: true},
    {src: '~/plugins/aos.js', ssr: false},
    {src: '~plugins/lightbox.js', ssr: false},
    '~/plugins/vue2-filters.js',
    '~plugins/filters.js'
  ]
}
