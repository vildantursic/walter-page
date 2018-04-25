<template>
  <div class="card animated fadeIn" data-aos="slide-up" v-on:click="clickService()">
    <div class="image">
      <img v-if="item._embedded !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" alt="">

      <img class="no-image" v-if="!item._embedded === undefined" src="~/static/images/walter-logo.png" alt="">
    </div>
    <div class="info">
      <h4 class="title">{{item.post_title}}</h4>
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
  .card{
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .image {
      height: 100px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }
</style>
