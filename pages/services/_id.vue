<template>
  <section class="padded-content full-height">
    <video id="bgvid" playsinline autoplay muted loop>
      <source src="http://walter.hotelsnjesko.ba/wp-content/uploads/walter.mp4" type="video/mp4">
    </video>
    <div class="video-cover"></div>

    <div class="sidebar">
      <AppSideNavigation :links="links"/>
    </div>

    <div class="services-info">
      <div class="navigation">
        <h1 class="hidden-amount">+ {{page.acf.cases.length}}</h1>
        <nuxt-link :to="{ name: 'cases' }">
          <h1>cases</h1>
        </nuxt-link>
      </div>
      <div class="info">
        <h1>{{page.acf.description}}</h1>
        <div v-html="page.content.rendered"></div>
      </div>
      <div class="services">
        <h2>Services</h2>
        <section>
          <AppSingleService v-for="(item, index) of subServices" :key="index" :item="item"/>
        </section>
      </div>
    </div>

    <AppContactBox :user="page.acf.contact_person"></AppContactBox>
  </section>
</template>

<script>
  import AppSingleService from '~/components/AppSingleService'
  import AppSideNavigation from "~/components/AppSideNavigation"
  import AppContactBox from "~/components/AppContactBox"
  import axios from 'axios'
  import { find } from 'lodash'

  export default {
    components: {
      AppSingleService,
      AppSideNavigation,
      AppContactBox
    },
    data() {
      return {
        page: {
          acf: {}
        },
        links: [],
        subServices: [],
        activeLink: 0
      }
    },
    asyncData({ route }) {
      return axios.get(`http://walter.hotelsnjesko.ba/wp-json/wp/v2/services/${route.params.id}`).then((response) => {
        return { page: response.data }
      }).catch((error) => {
        console.log(error)
      });
    },
    created () {
      this.getServices()
      this.getSubServices()
    },
    methods: {
      getServices () {
        axios.get(`http://walter.hotelsnjesko.ba/wp-json/wp/v2/services`).then((response) => {
          this.links = response.data;
        }).catch((error) => {
          console.log(error)
        });
      },
      getSubServices () {
        axios.get(`http://walter.hotelsnjesko.ba/wp-json/wp/v2/sub_services?per_page=100&_embed`).then((response) => {
          this.subServices = response.data.filter((subService) => {
            return find(this.page.acf.sub_services, { ID: subService.id }) ? subService : undefined
          });
        }).catch((error) => {
          console.log(error)
        });
      },
      goToService () {
        this.$router.push({ path: 'services' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

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
    filter:blur(10px);
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

  .sidebar {
    position: absolute;
    top: 80px;
    left: 0;
  }

  .services-info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    margin: 0 10%;

    .navigation {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      margin-bottom: 30px;

      h1 {
        margin: 0;
      }

      .hidden-amount {
        position: absolute;
        right: 0;
        z-index: -1;
        opacity: 0.1;
        font-size: 9em;
        margin-top: 50px;
      }
    }

    .info {
      width: 80%;

      @media (max-width: 768px) {
        width: 100%;
      }

      h1, div {
        opacity: 1;
        margin: 0 0 50px 0;
      }
      h1 {
        font-size: 3em;
      }
      div {
        font-size: 1.3em;
      }
    }

    .services {

      section {
        display: flex;
        justify-content: space-around;
        // for switching to grid system
        // @include grid-items(5%, 5%, 7, 2);
      }
    }
  }
</style>
