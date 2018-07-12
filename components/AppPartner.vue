<template>
  <div class="card animated fadeIn" data-aos="fade">
    <div class="card-img" v-if="item._embedded !== undefined">
      <a target="_blank" :href="item.acf.description">
        <img v-if="item._embedded['wp:featuredmedia'] !== undefined"
             :src="item._embedded['wp:featuredmedia'][0].source_url"
             :alt="item._embedded['wp:featuredmedia'][0].alt_text">
        <img v-if="item._embedded['wp:featuredmedia'] === undefined" class="no-image"
             src="~/static/images/walter-logo.png" alt="">
      </a>
    </div>
    <div class="info-card">
      <div class="about" v-html="item.content.rendered"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    components: {}
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  a {
    color: $main-color !important;
  }

  .card {
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: hidden;
    margin: 25px 0;


    .card-img {
      width: 100%;
      height: 100px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $secondary-color;

      img {
        width: 100%;
      }

      .no-image {
        width: auto;
      }
    }

    p {
      font-size: 0.875rem;
    }
  }

  .about {
    letter-spacing: 0.5px;
    @include screen-size('l') {
      font-size: 1.2em;
    }
    @include screen-size('m') {
      font-size: 1em;
    }
  }
</style>
