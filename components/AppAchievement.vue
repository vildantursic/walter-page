<template>
  <div class="card animated fadeIn" data-aos="slide-up">
    <div v-if="item._embedded !== undefined" class="image">
      <img v-if="item._embedded['wp:featuredmedia'] !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">

      <img class="no-image" v-if="item._embedded['wp:featuredmedia'] === undefined" src="~/static/images/walter-logo.png" alt="">
    </div>
    <div class="info">
      <h4 class="title">{{item.title.rendered}}</h4>
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
  .card {
    margin-right: 1em;
    display: flex;
    flex-direction: column;
    width: 130px;
    /*overflow: hidden;*/

    .image {
      min-height: 100px;
      max-height: 100px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50%;
        filter: invert(90);
      }
      .no-image {
        width: auto;
      }
    }

    .info {
      height: 40px;
      display: flex;
      /*align-items: center;*/
      justify-content: center;
      h4{
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
