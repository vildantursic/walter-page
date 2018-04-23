<template>
  <div class="more-card">
      <div class="number">{{number}}</div>
      <div class="plus-more"  @click="showMore()">
        <div class="plus">+</div>
        <div class="more-text">more</div>
      </div>
  </div>
</template>

<script>
  export default {
    props: ['number'],
    components: {
    },
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
