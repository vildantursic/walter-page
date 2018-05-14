<template>
  <div>
    <video id="bgvid" playsinline autoplay muted loop>
      <source src="http://walter.hotelsnjesko.ba/wp-content/uploads/walter.mp4" type="video/mp4">
    </video>

    <div class="main-section">
      <div class="navigation">
        <scrollactive ref="scrollactive"
                      class="nav"
                      active-class="is-active"
                      :offset="80"
                      :duration="800"
                      bezier-easing-value=".5,0,.35,1"
                      v-on:itemchanged="onItemChanged">
          <a v-for="(item, index) in services" :key="index" :href="`#${item.id}`" class="scrollactive-item">{{item.title.rendered}}</a>
        </scrollactive>
      </div>
      <div class="section" v-for="(item, index) in services" :key="index">
        <div style="height: 300px" v-if="index !== 0"></div>
        <section :id="`${item.id}`">
          <div class="services-info services-spacing">
            <div class="padded-content center-more">
              <div class="cases-link">
                <h1 class="hidden-amount">+ {{item.acf.cases.length}}</h1>
                <nuxt-link :to="`cases?filter=${item.case_categories[0]}`">
                  <h1>cases<i class="fas fa-caret-right"></i></h1>
                </nuxt-link>
              </div>
              <div class="info">
                <h1>{{item.acf.description}}</h1>
                <div v-html="item.content.rendered"></div>
              </div>
              <div class="services">
                <h2>Services</h2>
                <section>
                  <AppSingleService v-if="loadedServices" v-for="(obj, index) of item.acf.sub_services" :key="index" :item="obj"/>
                </section>
              </div>
              <div class="services-spacing"></div>
            </div>

            <AppContactBox :user="item.acf.contact_person"></AppContactBox>
          </div>
        </section>
      </div>
    </div>
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
        subServices: [],
        loadedServices: false
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
      onItemChanged(event, currentItem, lastActiveItem) {

      },
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
          this.loadedServices = true
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

  .navigation {
    position: fixed;
    z-index: 200;
    top: 150px;
    left: 50px;
    width: 280px;

    @include screen-size('xs') {
      display: none;
    }

    .is-active {
      font-size: 1.6em !important;
      font-weight: bolder !important;
      line-height: 1em;
      /*opacity: 1;*/
    }

    .nav {
      display: flex;
      flex-direction: column;
      width: 100%;

      a {
        width: 80%;
        color: white;
        margin: 5px 0 20px 0;
        font-size: 1em;
        /*opacity: 0.2;*/
        /*.is-active{*/
          /*opacity: 1;*/
        /*}*/
      }
    }
    .last-section {

      a {
        color: white;
      }
    }
  }

  .center-more {
  }
  .services-spacing:not(last-child) {
  }
  .services-info {
    position: relative;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;

    .cases-link {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      /*margin-bottom: 30px;*/


      h1 {
        margin: 0;
        i{
          padding-top-top: 0.5em;
          padding-left: 0.3em;
        }
      }

      .hidden-amount {
        position: absolute;
        right: 0;
        z-index: -1;
        opacity: 0.2;
        font-size: 9em;
        margin-top: 50px;
      }
    }

    .info {
      width: 100%;

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
        justify-content: space-between;
      }
    }
  }
</style>
