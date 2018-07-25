<template>
  <div class="card animated fadeIn" data-aos="fade">
    <div v-if="item._embedded !== undefined" class="card-img-container">
      <nuxt-link class="nav-link" :to="`/news/${item.id}`">
        <img class="card-img" v-if="item._embedded['wp:featuredmedia'] !== undefined"
             :src="item._embedded['wp:featuredmedia'][0].source_url"
             :alt="item._embedded['wp:featuredmedia'][0].alt_text">
        <img class="no-image" v-if="item._embedded['wp:featuredmedia'] === undefined"
             src="~/static/images/walter-logo.png" alt="">
      </nuxt-link>
    </div>
    <div class="info-card">
      <p class="category">
        <span v-for="(category, index) of item.categories" :key="index"> {{category.name}}<span
          v-if="index < item.categories.length - 1">,</span></span>
      </p>
      <p class="author">{{date}}</p>
      <h1 class="title">
        <nuxt-link class="nav-link" :to="`/news/${item.id}`" v-html="item.title.rendered.split('').slice(0, 50).join('').concat(item.title.rendered.length > 50 ? '...' : '')"></nuxt-link>
      </h1>
      <div class="scroll">
        <nuxt-link class="nav-link" :to="`/news/${item.id}`">
          <p class="news">{{item.acf.description | truncate(200)}} </p>
        </nuxt-link>
      </div>
      <AppSocial :item="item" :link="$route.path"></AppSocial>
    </div>
  </div>
</template>

<script>
  import AppSocial from '~/components/AppSocial'
  import moment from 'moment'

  export default {
    props: ['item'],
    components: {
      AppSocial
    },
    data() {
      return {
        date: moment(this.item.date).format('DD-MM-YYYY')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';
  @import '../assets/styles/mixins';

  .card {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    height: 420px;
    padding-bottom: 2em;
    border-width: 0 0 2px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #0093c8 0%, #faaf40 100%) 1;
    -webkit-border-image: -webkit-linear-gradient(45deg, #0093c8 0%, #faaf40 100%) 1;
    border-image: linear-gradient(45deg, #0093c8 0%, #faaf40 100%) 1;

    @include screen-size(xs) {
      flex-direction: column;
      padding: 0;
      height: auto;
    }
    @include screen-size(s) {
      flex-direction: column;
      padding: 0;
      height: auto;
    }

    .card-img-container {
      /*overflow: hidden;*/
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;

      @include screen-size('xs') {
        width: 100%;
        height: auto;
        padding-bottom: 15px;
      }
      @include screen-size('s') {
        width: 100%;
        height: auto;
      }

      .card-img {
        height: auto;
        width: 100%;
      }
    }

    .info-card {
      position: relative;
      width: 30%;
      padding: 1em 1em 0 2em;

      @include screen-size(xs) {
        width: 100%;
        padding: 1em 0;
      }
      @include screen-size(s) {
        width: 100%;
        padding: 1em 0;
      }

      .category {
        margin: 0;
        font-size: 1.2em;
        font-weight: 700;
        color: $main-color;
        letter-spacing: 2px;
        @include screen-size('s') {
          font-size: 0.9em;
        }
      }
      .author {
        margin: 0;
        font-weight: 500;
        color: $dark-color;
        font-size: 0.9em;
        @include screen-size('s') {
          font-size: 1em;
        }
      }
    }
  }

  .fab, .fas {
    padding: 5px 10px;
    font-size: 25px;
    width: 30px;
    text-align: center;
    text-decoration: none;
    color: $dark-color;
  }

  .fab:hover, .fas:hover {
    opacity: 0.7;
  }

  .social {
    position: absolute;
    bottom: 0;
  }

  .scroll {
    height: 200px;
    @include screen-size(xs) {
      height: 130px;
    }
  }

  .no-image {
    width: auto;
  }

  .title {
    cursor: pointer;
    font-size: 2.5em;
    font-weight: bold;
    margin: 15px 0;

    @include screen-size('xl') {
      font-size: 2em;
    }
    @include screen-size('l') {
      font-size: 1.7em;
    }
    @include screen-size('m') {
      font-size: 1.5em;
    }
    @include screen-size('s') {
      font-size: 1.4em;
    }
    &:hover {
      color: $main-color;
    }
  }

  img {
    cursor: pointer;
  }

  .news {
    font-size: 1.2em;
    @include screen-size('xl') {
      font-size: 0.9em;
    }
    @include screen-size('l') {
      font-size: 0.9em;
    }
    @include screen-size('m') {
      font-size: 0.8em;
    }
    @include screen-size('s') {
      font-size: 0.8em;
    }
  }

</style>
