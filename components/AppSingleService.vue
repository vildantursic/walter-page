<template>
  <div class="card animated fadeIn" data-aos="slide-up" v-on:click="clickService()">
    <div v-if="item._embedded !== undefined" class="image">
      <img v-if="item._embedded['wp:featuredmedia'] !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">

      <img class="no-image" v-if="item._embedded['wp:featuredmedia'] === undefined" src="~/static/images/walter-logo.png" alt="">
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
    components: {
    },
    methods: {
      clickService () {
        this.$emit('onServiceClicked')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    width: 180px;
    padding-right: 4em;
    /*overflow: hidden;*/

    .image {
      /*min-height: 100px;*/
      max-height: 100px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50px;
      }
      .no-image {
        width: auto;
      }
    }

    .info {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;

      .title {
        text-align: center;
        font-size: 0.8em;
      }
    }
  }
</style>
