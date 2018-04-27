<template>
  <div class="other-news">
    <p class="category">
      <span v-for="(category, index) of item.categories" :key="index"> {{category.name}}<span v-if="index < item.categories.length - 1">,</span></span>
    </p>
    <p class="author">{{item.author.name}}, {{date}}</p>
    <h1 class="title"><nuxt-link class="nav-link" :to="`/news/1`">{{ item.title.rendered | truncate(50)}}</nuxt-link></h1>
  </div>
</template>
<script>
  import moment from 'moment'
  import axios from 'axios'

  export default {
    props: ['item'],
    data() {
      return {
        date: moment(this.item.date).format('MMM YYYY [at] LT')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";

  .other-news {
    border-width: 0 0 4px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #c1c8d1 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #c1c8d1 100%);
    border-image: linear-gradient(45deg, #405dce 0%, #c1c8d1 100%);
    border-image-slice: 1;
    margin: 0 0 1.5em 0;
    .category
    {
      margin: 0;
      font-size: 1em;
      font-weight: 700;
      color: orange;
      letter-spacing: 2px;
    }
    .author
    {
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

      &:hover {
        color: $main-color;
      }
    }
  }
</style>
