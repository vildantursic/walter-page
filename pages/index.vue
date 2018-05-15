<template>

  <div class="main-section">
    <section class="padded-content full-height">
      <video id="bgvid" playsinline autoplay muted loop>
        <source src="http://walter.hotelsnjesko.ba/wp-content/uploads/walter.mp4" type="video/mp4">
      </video>

      <div class="services-info">
        <h1>{{page.acf.title}}</h1>
        <div class="description" v-html="page.acf.description"></div>
        <section class="services">
          <AppService v-for="(item, index) of items" :key="index" :item="item" @onServiceClicked="goToService(item.id - 1)"/>
        </section>
      </div>
    </section>
  </div>

</template>

<script>
  import AppService from '~/components/AppService'
  import axios from 'axios'

  export default {
    components: {
      AppService
    },
    data() {
      return {
        items: [],
        page: {
          acf: {}
        }
      }
    },
    created () {
      this.getItems()
    },
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/pages/79').then((response) => {
        return { page: response.data }
      }).catch((error) => {
        console.log(error)
      });
    },
    methods: {
      getItems() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/services?_embed').then((response) => {
          this.items = response.data
        }).catch((error) => {
          console.log(error);
        });
      },
      goToService (id) {
        this.$router.push({ path: `services#${id}`})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/mixins";

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

    h1, .description {
      opacity: 1;
      margin: 0 0 50px 0;
    }
    h1 {
      font-weight: bold;
      font-size: 4em;
    }
    .description {
      font-size: 1.3em;
    }

    .services {
      @include grid-items(5%, 20px, 4, 2);
    }
  }
</style>
