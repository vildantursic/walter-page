<template>
  <div class="more">
    <h1>{{numberOfItems}} <span>+</span></h1>
    <h4 @click="showMore()">more</h4>
  </div>
</template>

<script>
  export default {
    props: ['numberOfItems'],
    methods: {
      showMore() {
        this.$emit('onShowMore')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";

  .more-card {
    text-align: right;
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
    flex-direction: row;
    .number {
      font-size: 4em;
      font-weight: bold;
      margin: 0;
    }
    .plus-more {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-left: 10px;
      .plus {
        font-size: 4em;
        font-weight: bold;
      }
      .more-text {
        color: $main-color;
        font-size: 1.5em;
        font-weight: bold;
      }
    }
  }
</style>
