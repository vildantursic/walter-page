<template>
  <div>
    <video id="bgvid" playsinline autoplay muted loop>
      <source src="https://walter.ba/cms/wp-content/uploads/Video-WEB.mp4" type="video/mp4">
    </video>

    <div class="tablet-navigation">
      <p v-if="activeService !== ''">{{activeService}}</p>
    </div>
    <div class="main-section" @click="showContactBox = !showContactBox">
      <div class="navigation">
        <scrollactive ref="scrollactive"
                      class="nav"
                      active-class="is-active"
                      :offset="80"
                      :duration="800"
                      bezier-easing-value=".5,0,.35,1"
                      @itemchanged="onItemChanged">
          <a v-for="(item, index) in services"
             :key="index"
             :href="`#${item.id}`"
             :ref="`${item.id}`"
             class="scrollactive-item" @click="showContact(item.id)" v-html="item.title.rendered"></a>
        </scrollactive>
      </div>
      <div class="section" v-for="(item, index) in services" :key="index">
        <div style="height: 100px" v-if="index !== 0"></div>
        <section :id="`${item.id}`">
          <div class="services-info services-spacing">
            <div class="padded-content-services center-more">
              <div class="cases-link">
                <h1 class="hidden-amount">+ {{item.acf.cases.length}}</h1>
                <nuxt-link :to="`cases?filterID=${item.case_categories[0]}`">
                  <h1 class="cases">cases<i class="fas fa-caret-right"></i></h1>
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

          </div>
        </section>
      </div>
    </div>
    <AppContactBox v-if="contact_person" :user="contact_person" :showContactBox="showContactBox" @showContact="showContactBox = !showContactBox"></AppContactBox>
  </div>
</template>

<script>
  import AppSingleService from '~/components/AppSingleService'
  import AppSideNavigation from "~/components/AppSideNavigation"
  import AppContactBox from "~/components/AppContactBox"
  import { find } from 'lodash'

  export default {
    head () {
      return {
        title: 'Services - Walter',
        meta: [
          { hid: 'description', name: 'description', content: 'Walter Services' }
        ]
      }
    },
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
        contact_person: null,
        users: {},
        showContactBox: false,
      }
    },
    async asyncData({ app }) {
      const services = await app.$axios.$get('services?_embed');
      return { services }
    },
    created () {
      this.contact_person = this.services[0].acf.contact_person
      this.fillSubServices()
    },
    watch: {
      '$route': function (refreshPage) {
        this.$refs[this.$route.hash.substring(1)][0].click();
      }
    },
    methods: {
      showContact(id) {
        this.services.forEach((service) => {
          if (service.id === id) {
            this.contact_person = service.acf.contact_person
          }
        })
      },
      onItemChanged(event, currentItem, lastActiveItem) {
        this.activeItem = currentItem;
        const href = this.activeItem['href'];
        const res = href.split("#");
        const link = res[0];
        const number = parseInt(res[1]);
        this.services.forEach((service) => {
          if (service.id === number) {
            this.contact_person = service.acf.contact_person
          }
        })
        this.activeService = currentItem.textContent;
        this.once = false
      },
      async fillSubServices () {
        const response = await this.$axios.$get('sub_services?per_page=100&_embed')
        if (this.services.length !== 0) {
          this.services = this.services.map(service => {
            service.acf.sub_services = service.acf.sub_services.map(subService => {
              return find(response, { id: subService.ID })
            });
            return service
          })
        }
        this.loadedServices = true
      },
      goToService () {
        this.$router.push({ path: 'services' })
      },
      handleScroll (e) {
        const top  = window.pageYOffset || document.documentElement.scrollTop
        let nextId = 0;
        if (this.oldScroll < top) {
          const href = this.activeItem['href'];
          const res = href.split("#");
          const link = res[0];
          const number = parseInt(res[1]);
          if (number === 78) {
            nextId = number
          } else {
            nextId = number + 1;
          }
          if (!this.once) {
            this.$refs[nextId][0].click();
            this.once = true;
          }
        } else if (this.oldScroll > top) {
          const href = this.activeItem['href'];
          const res = href.split("#");
          const link = res[0];
          const number = parseInt(res[1]);

          if (number === 75) {
            nextId = number
          } else {
            nextId = number - 1;
          }
          if (!this.once) {
            this.$refs[nextId][0].click();
            this.once = true;
          }
        }
        this.oldScroll = top
      },
      showSearch(){
        document.getElementById('search-image').style.display = 'block';
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";
  @import "../../assets/styles/variables";

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
    overflow: hidden;
    min-height: 200vh;
    background-image: linear-gradient(90deg, rgba(#0093c8, 0.5) 0%, rgba(#faaf40, 0.5) 100%);
  }
  .tablet-navigation {
    position: fixed;
    top: 0;
    left: calc(50% - 57px);
    width: 150px;
    height: 80px;
    z-index: 10;
    display: none;
    align-items: center;
    justify-content: center;

    @include screen-size('m') {
      display: flex;
    }
    @include screen-size('xs') {
      display: flex;
    }

    p {
      color: white;
      font-size: 1em;
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

  .services-info {
    position: relative;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;

    .cases-link {
      position: sticky;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      margin-bottom: 20px;

      h1 {
        color: #ffffff;
        margin: 0;
        font-size: 1.8em;

        @include screen-size('m') {
          font-size: 1.3em;
        }

      }
      .cases {
        i {
          padding-top: 0.5em;
          padding-left: 0.3em;
        }

        &:hover {
          color: $main-color;
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
      width: 90%;
      @include screen-size('xl') {
        width: 93%;
      }
      @include screen-size('l') {
        width: 95%;
      }
      @include screen-size('m') {
        width: 100%;
      }

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
        font-size: 3em;
        width: 90%;

        @include screen-size('xl') {
          font-size: 2.4em;
        }
        @include screen-size('l') {
          font-size: 2.3em;
        }
        @include screen-size('m') {
          font-size: 2em;
          width: 100%;
        }
        @include screen-size('s') {
          width: 100%;
        }
        @include screen-size('xs') {
          width: 100%;
        }
      }
      div {
        font-size: 1.2em;
        width: 90%;

        @include screen-size('xl') {
          font-size: 1.1em;
        }
        @include screen-size('l') {
          font-size: 1em;
        }
        @include screen-size('m') {
          font-size: 1em;
          width: 100%;
        }
        @include screen-size('s') {
          font-size: 1em;
          width: 100%;
        }
        @include screen-size('xs') {
          font-size: 1em;
          width: 100%;
        }
      }
    }

    .services {
      width: 90%;

      @include screen-size('s') {
        width: 100%;
      }
      @include screen-size('xs') {
        width: 100%;
      }

      h2{
        margin: 0;
        @include screen-size('l') {
          font-size: 1.2em;
        }
        @include screen-size('m') {
          font-size: 1em;
        }
      }
      section {
        padding-top: 20px;
        display: flex;
        @include screen-size('m') {
          padding-top: 10px;
        }
        @include screen-size('s') {
          padding-top: 10px;
          @include grid-items(10%, 40px, 3, 2);
        }
      }
    }
  }
</style>
