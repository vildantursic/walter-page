<template>
  <div class="title-page">
    <p class="supertitle">{{supertitle}}</p>
    <h1 class="title">{{title}}</h1>
    <p class="subtitle">{{subtitle}}</p>
  </div>
</template>
<script>

  export default {
    components: {
    },
    props: ['supertitle', 'title', 'subtitle']
  }
</script>

<style lang="scss" scoped>
  .title-page{
    margin: 20vh 0 10vh 0;

    .supertitle {
      font-size: 1.5em;
      font-weight: lighter;
      opacity: 0.70;
    }
    .title {
      font-size: 4.5em;
      margin: 10px 0;
      opacity: 0.80;
    }
    .subtitle{
      font-size: 1.5em;
      font-style: italic;
      font-weight: lighter;
      opacity: 0.70;
    }
  }
</style>
