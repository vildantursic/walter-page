<template>
  <div v-if="item._embedded !== undefined">
    <a target="_blank" :href="item.acf.description">
    <img v-if="item._embedded['wp:featuredmedia'] !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">
    <img v-if="item._embedded['wp:featuredmedia'] === undefined" class="no-image" src="~/static/images/walter-logo.png" alt="">
    </a>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style scoped>
  img {
    cursor: pointer;
    width: 100%;
  }
</style>
