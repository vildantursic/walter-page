<template>
  <div class="card animated fadeIn" data-aos="fade" v-on:click="clickService()">
    <div v-if="item._embedded !== undefined" class="image">
      <img v-if="item._embedded['wp:featuredmedia'] !== undefined"
           :src="item._embedded['wp:featuredmedia'][0].source_url"
           :alt="item._embedded['wp:featuredmedia'][0].alt_text">

      <img class="no-image" v-if="item._embedded['wp:featuredmedia'] === undefined"
           src="~/static/images/walter-logo.png" alt="">
    </div>
    <div class="info">
      <h4 class="title">{{item.title.rendered}}</h4>
    </div>
    <div class="border"></div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    components: {},
    methods: {
      clickService() {
        this.$emit('onServiceClicked')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/mixins";

  .card {
    display: flex;
    flex-direction: column;
    width: 180px;
    padding-right: 4em;
    @include screen-size('xl') {
      padding-right: 0;
    }
    @include screen-size('l') {
      padding-right: 1em;
    }
    @include screen-size('m') {
      padding-right: 1em;
    }
    @include screen-size('s') {
      padding-right: 0;
      width: 145px;
    }
    @include screen-size('xs') {
      padding-right: 0;
      width: 125px;
    }

    .image {
      max-height: 100px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50px;
        @include screen-size('m') {
          width: 35px;
        }
      }
      .no-image {
        width: auto;
      }
    }

    .info {
      height: 50px;
      display: flex;
      justify-content: center;
      color: white;

      .title {
        text-align: center;
        font-size: 0.9em;
        @include screen-size('m') {
          font-size: 0.8em;
        }
      }
    }
  }
</style>
