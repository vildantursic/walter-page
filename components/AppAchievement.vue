<template>
  <div class="card animated fadeIn" data-aos="fade">
    <div v-if="item._embedded !== undefined" class="image">
      <img v-if="item._embedded['wp:featuredmedia'] !== undefined"
           :src="item._embedded['wp:featuredmedia'][0].source_url"
           :alt="item._embedded['wp:featuredmedia'][0].alt_text">

      <img class="no-image" v-if="item._embedded['wp:featuredmedia'] === undefined"
           src="~/static/images/walter-logo.png" alt="">
    </div>
    <div class="info">
      <h4 class="title" v-html="item.title.rendered"></h4>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .card {
    margin-right: 1em;
    display: flex;
    flex-direction: column;
    width: 130px;

    @include screen-size(xs) {
      margin: 0;
      display: flex;
      flex-direction: row;
      align-items:center;
      width: 100%;
    }

    .image {
      min-height: 100px;
      max-height: 100px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      @include screen-size('xs') {
        min-height: 40px;
        max-height: 40px;
        width: 25%;
      }

      img {
        width: 50%;
        filter: invert(90);
        @include screen-size('xs') {
          width: 40%;
        }
      }
      .no-image {
        width: auto;
      }
    }

    .info {
      height: 40px;
      display: flex;
      justify-content: center;
      @include screen-size('xs') {
        height: 20px;      }
      h4 {
        font-size: 1em;
        margin: 0;
        font-weight: 400;
        color: #595959;
      }
      .title {
        text-align: center;
      }
    }
  }
</style>
