<template>
  <div class="other-news">
    <p class="category">
      <span v-for="(category, index) of item.categories" :key="index"> {{category.name}}<span
        v-if="index < item.categories.length - 1">,</span></span>
    </p>
    <p class="author">{{date}}</p>
    <h1 class="title">
      <nuxt-link class="nav-link" :to="`/news/${item.id}`" v-html="item.title.rendered.split('').slice(0, 50).join('').concat(item.title.rendered.length > 50 ? '...' : '')"></nuxt-link>
    </h1>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['item'],
    data() {
      return {
        date: moment(this.item.date).format('DD-MM-YYYY')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .other-news {
    border-width: 0 0 4px 0;
    border-style: solid;
    border-image: linear-gradient(90deg, #0093c8 0%, #faaf40 100%) 1;
    margin: 0 0 1.5em 0;

    .category {
      margin: 0;
      font-size: 1em;
      font-weight: 700;
      color: orange;
      letter-spacing: 2px;
    }
    .author {
      margin: 0;
      font-size: 0.8em;
      font-weight: 500;
      color: gray;
    }
    .title {
      cursor: pointer;
      font-size: 2.5em;
      font-weight: bold;
      margin: 15px 0;

      @include screen-size('l') {
        font-size: 2em;
      }
      @include screen-size('m') {
        font-size: 2em;
      }
      @include screen-size('s') {
        font-size: 1.5em;
      }
      &:hover {
        color: $main-color;
      }
    }
  }
</style>
