<template>

  <div class="main-section">
    <section class="padded-content-services full-height">
      <video id="bgvid" playsinline autoplay muted loop>
        <source src="https://walter.ba/cms/wp-content/uploads/Video-WEB.mp4" type="video/mp4">
      </video>

      <div class="services-info">
        <h1>{{page.acf.title}}</h1>
        <div class="description" v-html="page.acf.description"></div>
        <section class="services">
          <AppService v-for="(item, index) of items" :key="index" :item="item" @onServiceClicked="goToService(item.id)"/>
        </section>
      </div>
    </section>
  </div>

</template>

<script>
  import AppService from '~/components/AppService'

  export default {
    head () {
      return {
        title: 'Walter',
        meta: [
          { hid: 'description', name: 'description', content: this.page.acf.title },
          { hid: 'image', name: 'image', content: '/images/video-image.jpg' },

          { hid: 'og:title', property: 'og:title', content: this.page.acf.title  },
          { hid: 'og:description', property: 'og:description', content: this.page.acf.description },
          { hid: 'og:url', property: 'og:url', content: 'https://walter.surge.sh' },
          { hid: 'og:image', property: 'og:image', content: '/walter.png' },
          { hid: 'og:site_name', property: 'og:site_name', content: 'Walter' },
        ]
      }
    },
    components: {
      AppService
    },
    data() {
      return {
        items: [],
        page: {
          title: {
            rendered: ''
          },
          content: {
            rendered: ''
          },
          acf: {
          }
        }
      }
    },
    async asyncData({ app }) {
      const page = await app.$axios.$get('pages/79');
      return { page }
    },
    created () {
      this.getItems()
    },
    methods: {
      async getItems() {
        this.items = await this.$axios.$get('services?_embed')
      },
      goToService (id) {
        this.$router.push({ path: `services#${id}`})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/mixins";
  @import "../assets/styles/variables";

  video {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
    background: url('/static/images/video-image.jpg') no-repeat;
    background-size: cover;
    transition: 1s opacity;
  }
  .video-cover {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -99;
    background-image: linear-gradient(90deg, rgba(#0093c8, 0.5) 0%, rgba(#faaf40, 0.5) 100%);
  }

  .main-section {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    background-image: linear-gradient(90deg, rgba(#0093c8, 0.5) 0%, rgba(#faaf40, 0.5) 100%);
  }

  .services-info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    margin: 0 10%;
    @include screen-size('xl') {
      margin: 0;
    }
    @include screen-size('l') {
      margin: 0;
    }
    @include screen-size('m') {
      margin: 0;
    }

    h1, .description {
      opacity: 1;
      margin: 0 0 50px 0;
      @include screen-size('m') {
        margin: 0 0 30px 0;
      }
    }
    h1 {
      font-weight: bold;
      font-size: 4em;
      @include screen-size('m') {
        font-size: 3em;
      }
    }
    .description {
      font-size: 1.3em;
      @include screen-size('m') {
        font-size: 1.2em;
      }
    }

    .services {
      @include grid-items(5%, 20px, 4, 4);
      @include screen-size('m') {
        @include grid-items(10%, 40px, 2, 2);
      }
    }
  }
</style>
