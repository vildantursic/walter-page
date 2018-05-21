<template>
  <div>
    <video id="bgvid" playsinline autoplay muted loop>
      <source src="http://walter.hotelsnjesko.ba/wp-content/uploads/Video-WEB.mp4" type="video/mp4">
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
          <a v-for="(item, index) in services" :key="index" :href="`#${item.id}`" :ref="`${item.id}`" class="scrollactive-item">{{item.title.rendered}}</a>
        </scrollactive>
      </div>
      <div class="tablet-navigation">
        <p v-if="this.activeService!= ''">{{this.activeService}}</p>
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
        loadedServices: false,
        scrolled: false,
        activeItem: null,
        activeService: 'BIM Consulting and Engineering',
        lastActiveItem: null,
        oldScroll: 0,
        once: false,
        currentPage: 'BIM Consulting and Engineering'
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
    mounted () {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      onItemChanged(event, currentItem, lastActiveItem) {
        this.activeItem = currentItem
        this.activeService = currentItem.textContent
        this.once = false
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
      },
      handleScroll (e) {
        var top  = window.pageYOffset || document.documentElement.scrollTop
        console.log(top)
        var nextId = 0
        if(this.oldScroll < top)
        {
          console.log('down')
          console.log(this.activeItem['href'])
          var href = this.activeItem['href']
          var res = href.split("#");
          var link = res[0]
          var number = parseInt(res[1])
          if(number === 78)
          {
            nextId = number
          }
          else
          {
            nextId = number + 1;
          }
          if(!this.once) {
            this.$refs[nextId][0].click();
            this.once = true;
          }
        }
        else if (this.oldScroll > top)
        {
          console.log('top')
          console.log(this.activeItem['href'])
          var href = this.activeItem['href']
          var res = href.split("#");
          var link = res[0]
          var number = parseInt(res[1])
          if(number === 75)
          {
            nextId = number
          }
          else
          {
            nextId = number - 1;
          }
          if(!this.once) {
            this.$refs[nextId][0].click();
            this.once = true;
          }
        }
        this.oldScroll = top
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
  .tablet-navigation
  {
    position: fixed;
    display: none;
    @include screen-size('m')
    {
      display: block;
    }

    @include screen-size('xs') {
      display: none;
    }
    @include screen-size('m') {
      top: 120px;
      left: 30px;
      width: 210px;
    }
    p
    {
      width: 80%;
      color: white;
      margin: 5px 0 20px 0;
      font-size: 1.6em;
      font-weight: bolder;
      line-height: 1em;
      opacity: 0.7;
      }
  }

  .navigation {
    position: fixed;
    z-index: 200;
    top: 150px;
    left: 50px;
    width: 280px;
    @include screen-size('m')
    {
      display: none;
    }

    @include screen-size('xs') {
      display: none;
    }
    @include screen-size('m') {
      top: 120px;
      left: 30px;
      width: 210px;
    }


    .is-active {
      font-size: 1.6em !important;
      font-weight: bolder !important;
      line-height: 1em;
      /*opacity: 1;*/
      @include screen-size('m') {
        font-size: 1.3em !important;
      }
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
        @include screen-size('m') {
          margin: 0 0 10px 0;
          font-size: 0.8em;
        }
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
      margin-bottom: 20px;


      h1 {
        margin: 0;
        font-size: 1.8em;
        @include screen-size('m') {
          font-size: 1.3em;
        }
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
        font-size: 7.8em;
        margin-top: 50px;
        @include screen-size('m') {
          font-size: 5em;
          margin-top: 30px;
        }
      }
    }

    .info {
      width: 100%;

      @media (max-width: 768px) {
        width: 100%;
      }

      h1, div {
        opacity: 1;
        margin: 0 0 40px 0;
        @include screen-size('xl') {
          margin: 0 0 20px 0;
        }
        @include screen-size('l') {
          margin: 0 0 20px 0;
        }
        @include screen-size('m') {
          margin: 0 0 20px 0;
        }

      }
      h1 {
        font-size: 2.7em;
        @include screen-size('xl') {
        font-size: 2.4em;
      }
        @include screen-size('l') {
          font-size: 2.3em;
        }
        @include screen-size('m') {
          font-size: 2em;
        }
      }
      div {
        font-size: 1.2em;
        @include screen-size('xl') {
          font-size: 1.1em;
        }
        @include screen-size('l') {
          font-size: 1em;
        }
        @include screen-size('m') {
          font-size: 0.8em;
        }
      }
    }

    .services {
      h2{
        margin: 0;
        @include screen-size('m') {
          font-size: 1.2em;
        }
      }
      section {
        padding-top: 20px;
        display: flex;
        @include screen-size('m') {
          padding-top: 10px;
        }
        /*justify-content: space-between;*/
      }
    }
  }
  /*.services-info{*/
    /*.padded-content{*/
      /*padding-left: 310px;*/
      /*padding-right: 15%;*/
    /*}*/
  /*}*/
</style>
