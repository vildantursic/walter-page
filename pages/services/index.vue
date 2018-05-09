<template>
  <div>
    <video id="bgvid" playsinline autoplay muted loop>
      <source src="http://walter.hotelsnjesko.ba/wp-content/uploads/walter.mp4" type="video/mp4">
    </video>

    <section class="main-section">

      <div class="navigation">
        <scrollactive ref="scrollactive"
                      class="nav"
                      active-class="is-active"
                      :offset="80"
                      :duration="800"
                      bezier-easing-value=".5,0,.35,1">
          <a href="#statistics" class="scrollactive-item">Who are we</a>
          <a href="#history" class="scrollactive-item">Our history</a>
          <a href="#board-members" class="scrollactive-item">Board Members</a>
          <a href="#partners" class="scrollactive-item">Our partners</a>
          <a href="#clients" class="scrollactive-item">Our clients</a>
          <a href="#contact" class="scrollactive-item">Contact us</a>
        </scrollactive>
      </div>

      <div v-for="(item, index) in services" :key="index" class="services-info">
        <div class="padded-content">
          <div class="navigation">
            <h1 class="hidden-amount">+ {{item.acf.cases.length}}</h1>
            <nuxt-link :to="{ name: 'cases' }">
              <h1>cases</h1>
            </nuxt-link>
          </div>
          <div class="info">
            <h1>{{item.acf.description}}</h1>
            <div v-html="item.content.rendered"></div>
          </div>
          <div class="services">
            <h2>Services</h2>
            <section>
              <!--<AppSingleService v-for="(obj, index) of item.acf.sub_services" :key="index" :item="obj"/>-->
            </section>
          </div>
        </div>

        <AppContactBox :user="item.acf.contact_person"></AppContactBox>
      </div>
    </section>
  </div>
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
        services: [],
        subServices: []
      }
    },
    asyncData({ }) {
      return axios.get(`http://walter.hotelsnjesko.ba/wp-json/wp/v2/services?_embed`).then((response) => {
        return { services: response.data }
      }).catch((error) => {
        console.log(error)
      });
    },
    created () {
      this.fillSubServices()
    },
    methods: {
      fillSubServices () {
        axios.get(`http://walter.hotelsnjesko.ba/wp-json/wp/v2/sub_services?per_page=100&_embed`).then((response) => {
          if (this.services.length !== 0) {
            this.services = this.services.map(service => {
              service.acf.sub_services = service.acf.sub_services.map(subService => {
                return find(response.data, { id: subService.ID })
              })
              return service
            })
          }
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

  .main-section {
    min-height: 200vh;
    background-image: linear-gradient(90deg, rgba(#0093c8, 0.5) 0%, rgba(#faaf40, 0.5) 100%);
  }

  .services-info {
    position: relative;
    height: 100vh;
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
      }
    }
  }
</style>

