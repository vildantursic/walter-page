<template>
  <section id="contact" class="contact-section">
    <div class="contact">
      <div class="countries">
        <h3 class="text">Stockholm, Sweden</h3>
        <h3 class="text">
          Muhameda Kantardžića 3
          <br>71000 Sarajevo</h3>
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
  import axios from 'axios'

  export default {
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
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/pages/73?_embed').then((response) => {
        return {page: response.data}
      }).catch((error) => {
        console.log(error)
      });
    },
    mounted() {
      this.reverseItems()
    },
    methods: {
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

        .card {
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
