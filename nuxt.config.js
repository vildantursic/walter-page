module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Walter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Walter page' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
      'axios'
    ]
  },
  css: [
    '@/assets/styles/main.scss',
    '@/assets/styles/variables.scss',
    '@/assets/styles/mixins.scss',
    'animate.css/animate.min.css',
    'swiper/dist/css/swiper.css'
  ],
  plugins: [
    {src: '@/plugins/scroll-reveal.js', ssr: false},
    {src: '@/plugins/swiper.js', ssr: false}
  ]
}
