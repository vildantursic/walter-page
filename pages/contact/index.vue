<template>
  <section id="contact" class="contact-section">
    <div class="contact">
      <div class="countries">
        <h3 class="text">Hägerstensvägen 97A,<br> 126 49 Stockholm, Sweden</h3>
        <h3 class="text">Muhameda Kantardžića 3,<br>Sarajevo, Bosnia and Herzegovina</h3>
      </div>
      <div class="map">
        <AppMap/>
      </div>
      <div class="users">
        <AppContactPerson v-for="(item, index) of contactPersons" :key="index" :user="item"></AppContactPerson>
      </div>
    </div>
  </section>
</template>

<script>
  import AppMap from "~/components/AppMap"
  import AppContactPerson from "~/components/AppContactPerson"

  export default {
    head () {
      return {
        title: 'Contact - Walter',
        meta: [
          { hid: 'description', name: 'description', content: 'Walter Contact Info' },
          { hid: 'image', name: 'image', content: './walter.png'},

          { hid: 'og:title', property: 'og:title', content: 'Contact'  },
          { hid: 'og:url', property: 'og:url', content: 'http://walter.ba/contact' },
          { hid: 'og:image', property: 'og:image', content: './walter.png' },
          { hid: 'og:site_name', property: 'og:site_name', content: 'Walter' },
        ]
      }
    },
    components: {
      AppMap,
      AppContactPerson
    },
    data() {
      return {
        page: {
          acf: {}
        },
        contactPersons: {}
      }
    },
    mounted() {
      this.getPage()
    },
    methods: {
      async getPage() {
        this.page = await this.$axios.$get('pages/73?_embed')
        this.reverseItems()
      },
      reverseItems() {
        this.contactPersons = this.page.acf.contact_persons.reverse()
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";
  @import "../../assets/styles/variables";

  .contact-section {
    height: 100vh;

    .contact {
      position: relative;
      display: flex;
      height: 100%;

      @include screen-size(s) {
        flex-direction: column;
      }
      @include screen-size(xs) {
        flex-direction: column;
      }

      .map {
        overflow: hidden;

        @include screen-size(s) {
          display: none;
        }
        @include screen-size(xs) {
          display: none;
        }
      }

      .users {
        width: 60%;
        background: #262d30;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        @include screen-size(s) {
          width: 100%;
          height: 100vh;
        }
        @include screen-size(xs) {
          width: 100%;
          height: 100vh;
        }
      }

      .countries {
        position: absolute;
        left: 0;
        height: 100%;
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        @include screen-size(s) {
          width: 100%;
          display: none;
        }
        @include screen-size(xs) {
          width: 100%;
          display: none;
        }

        .text {
          color: $main-color;
          opacity: 1;
          font-weight: bolder;
        }
      }
    }
  }
</style>
