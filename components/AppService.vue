<template>
  <div class="card animated fadeIn" v-on:click="clickService()">
    <div class="image">
      <img v-if="item._embedded !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">

      <img class="no-image" v-if="item._embedded === undefined" src="~/static/images/walter-logo.png" alt="">
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
    overflow: hidden;
    background: rgba(#393c3d, 0.3);
    border-radius: 0.2em;
    cursor: pointer;

    .image {
      height: 150px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50%;
      }
    }

    .info {
      padding: 0 10%;
      height: 50px;
      background: #393c3d;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
    }
  }
  .title{
    color: #ffffff;
  }
  h1, h2, h3, h4, h5, h6, p {
    color: white !important;
  }
</style>
