module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Walter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Walter page, Your strategic BIM partner' }
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
  css: [
    'animate.css/animate.min.css',
    'swiper/dist/css/swiper.css',
    'aos/dist/aos.css',
    '~/assets/styles/variables.scss',
    '~/assets/styles/mixins.scss',
    '~/assets/styles/main.scss',
  ],
  plugins: [
    {src: '~/plugins/swiper.js', ssr: false},
    {src: '~/plugins/aos.js', ssr: false},
    '~/plugins/vue2-filters.js',
    '~plugins/filters.js'
  ]
}
