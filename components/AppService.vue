<template>
  <div class="card animated fadeIn" data-aos="slide-up" v-on:click="clickService()">
    <div class="image">
      <img src="~/static/images/walter-logo.png" alt="">
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
</style>
