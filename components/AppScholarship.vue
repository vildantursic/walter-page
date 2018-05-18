<template>
    <div class="card animated fadeIn" data-aos="slide-up">
      <div v-if="item._embedded !== undefined" class="card-img-container">
        <img  v-if="item._embedded['wp:featuredmedia'] !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">
        <img class="no-image" v-if="item._embedded['wp:featuredmedia'] === undefined" src="~/static/images/walter-logo.png" alt="">
      </div>
      <div class="info-card">
        <AppSocial :item="item" :link="$route.path"></AppSocial>
        <div>
        <h1 class="title">{{item.title.rendered}}</h1>
        <p>{{item.acf.description | truncate(35 * 3)}}</p>
        </div>
        <div class="bottom-group">
        <p class="published">Deadline: {{deadline}}</p>
        <nuxt-link :to="`/scholarships/${item.id}`" class="more-container nav-link">
          <div class="plus">+</div>
          <div class="read"> Read <span class="more">more</span></div>
        </nuxt-link>
        </div>
      </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import AppSocial from '~/components/AppSocial'

  export default {
    props: ['item'],
    data() {
      return {
        deadline: moment(this.item.acf.deadline ? this.item.acf.deadline : this.item.date).format('DD-MM-YYYY')
      }
    },
    components: {
      AppSocial
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .card {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    height: 400px;
    padding-bottom: 2em;
    border-width: 0 0 2px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #0093c8 0%, #faaf40 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #0093c8 0%, #faaf40 100%);
    border-image: linear-gradient(45deg, #0093c8 0%, #faaf40 100%);
    border-image-slice: 1;

    @include screen-size(xs) {
      flex-direction: column;
      padding: 0;
      height: auto;
    }

    .card-img-container {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45%;

      @include screen-size('xs') {
        width: 100%;
        height: 300px;
      }

      .card-img {
        height: 100%;
      }
    }
    .info-card {
      position: relative;
      width: 55%;
      padding: 1em 1em;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      @include screen-size(xs) {
        width: 100%;
        padding: 1em 0;
      }

      .social {
        align-self: flex-end;
      }

      .category {
        margin: 0;
        font-size: 1em;
        font-weight: 700;
        color: $main-color;
        letter-spacing: 2px;
      }

      .title {
        font-size: 3em;
        font-weight: bold;
        margin: 15px 0;
      }

      .bottom-group {
        position: absolute;
        bottom: 0;
        width: 95%;

        .published {
          font-size: 0.8em;
          font-weight: 500;
          color: gray;
          float: left;
        }

        .more-container {
          float: right;
          display: flex;
          align-items: center;
          align-self: flex-end;
          margin-top: 2em;

          .read {
            font-size: 1.5em;
            font-weight: bold;
            letter-spacing: 1px;

            .more {
              color: $main-color;
            }
          }
          .plus {
            font-size: 2.5em;
            font-weight: bold;
            padding: 0 15px;
          }
        }
      }
    }
  }
</style>
