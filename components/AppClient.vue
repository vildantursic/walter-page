<template>
  <div v-if="item._embedded !== undefined">
    <img v-if="item._embedded['wp:featuredmedia'] !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">
    <img v-if="item._embedded['wp:featuredmedia'] === undefined" class="no-image" src="~/static/images/walter-logo.png" alt="">
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style scoped>
  img {
    width: 100%;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0%);
    }
  }
</style>
