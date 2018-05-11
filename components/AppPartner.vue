<template>
  <div class="card animated fadeIn" data-aos="slide-up">
    <div class="card-img" v-if="item._embedded !== undefined">
      <img v-if="item._embedded['wp:featuredmedia'] !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">
      <img v-if="item._embedded['wp:featuredmedia'] === undefined" class="no-image" src="~/static/images/walter-logo.png" alt="">
    </div>
    <div class="info-card">
      <div class="about" v-html="item.content.rendered"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    components: {
    }
  }
</script>

<style lang="scss" scoped="">
  @import "../assets/styles/variables";

  .card {
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: hidden;

    p {
      font-size: 0.875rem;
    }
  }
  .card-img {
    width: 100%;
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $secondary-color;

    img {
      width: 120%;
    }

    .no-image {
      width: auto;
    }
  }
</style>
