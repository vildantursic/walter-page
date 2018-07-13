<template>
  <div class="card animated fadeIn" data-aos="slide-up">
    <div v-if="item._embedded !== undefined" class="card-img-container">
      <nuxt-link class="nav-link" :to="`/scholarships/${item.id}`">
        <img class="card-img" v-if="item._embedded['wp:featuredmedia'] !== undefined"
             :src="item._embedded['wp:featuredmedia'][0].source_url"
             :alt="item._embedded['wp:featuredmedia'][0].alt_text">
        <img class="no-image" v-if="item._embedded['wp:featuredmedia'] === undefined"
             src="~/static/images/walter-logo.png" alt="">
      </nuxt-link>
    </div>
    <div class="info-card">
      <AppSocial :item="item" :link="$route.path"></AppSocial>
      <div class="text">
        <p class="published">Deadline: {{deadline}}</p>
        <nuxt-link class="nav-link" :to="`/scholarships/${item.id}`">
          <h1 class="title" v-html="item.title.rendered"></h1>
        </nuxt-link>
        <p>{{item.acf.description | truncate(35 * 3)}}</p>
      </div>
      <!--<div class="bottom-group">-->
        <!--<nuxt-link :to="`/scholarships/${item.id}`" class="more-container nav-link">-->
          <!--<div class="plus">+</div>-->
          <!--<div class="read"> Read <span class="more">more</span></div>-->
        <!--</nuxt-link>-->
      <!--</div>-->
    </div>
    <div class="border"></div>
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

    @include screen-size('xs') {
      flex-direction: column;
      padding: 0;
      height: 400px;
    }
    @include screen-size('s') {
      flex-direction: column;
      padding: 0;
      height: 400px;
    }

    .card-img-container {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;

      @include screen-size('xs') {
        width: 100%;
        height: 150px;

      }
      @include screen-size('s') {
        width: 100%;
        height: 150px;
      }

      .card-img {
        height: auto;
        width: 100%;
      }
    }
    .info-card {
      position: relative;
      width: 40%;
      padding: 1em 1em;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      @include screen-size('xs') {
        width: 100%;
        padding: 1em 0;
        display: flex;
        flex-direction: column;
      }
      @include screen-size('s') {
        width: 100%;
        padding: 1em 0;
        display: flex;
        flex-direction: column;
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

      .text {
        height: 150px;
        display: flex;
        flex-direction: column;

        .title {
          font-size: 3em;
          font-weight: bold;
          margin: 15px 0;

          @include screen-size('xs') {
            font-size: 1.5em;
            font-weight: bold;
            margin: 15px 0 0 0;
          }
          @include screen-size('s') {
            font-size: 1.5em;
            font-weight: bold;
            margin: 15px 0 0 0;
          }
        }
      }

      .bottom-group {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        display: flex;
        flex-direction: column;

        .published {
          font-size: 0.8em;
          font-weight: 500;
          color: gray;

          @include screen-size('xs') {
            font-size: 0.8em;
            font-weight: 500;
            color: gray;
          }
          @include screen-size('s') {
            font-size: 0.8em;
            font-weight: 500;
            color: gray;
          }
        }

        .more-container {
          margin-top: 2em;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: auto;

          @include screen-size('xs') {
            margin-top: 2em;
            font-size: 0.6em;
          }
          @include screen-size('s') {
            font-size: 0.6em;
            margin-top: 2em;
          }
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

  .border {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-size: cover;
    background: linear-gradient(90deg, #0093c8 0%, #faaf40 100%) fixed center;
  }
</style>
