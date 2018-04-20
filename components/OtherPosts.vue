<template>
  <div class="other-news">
    <p class="category">{{category}}</p>
    <p class="author">{{author}}</p>
    <h1 class="title">{{title}}</h1>
  </div>
</template>
<script>

  export default {
    components: {
    },
    props: ['category', 'author', 'title']
  }
</script>

<style lang="scss" scoped>
  .other-news
  {
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
  }
</style>
