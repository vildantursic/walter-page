<template>
  <div class="more">
    <div class="on-hover">
      <h1 @click="showMore()">{{numberOfItems}} <span>+</span></h1>
      <h3 @click="showMore()">more</h3>
    </div>
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

  .more {
    text-align: right;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;

    &:hover {
      color: $main-color;
    }
    h1 {
      color: $dark-grey;
      font-size: 4em;
      margin: 0;
      cursor: pointer;
      font-weight: bolder;

      &:hover {
        color: $main-color;
      }
      span {
      }
    }
    h3 {
      margin: 0;
      color: $main-color;
      cursor: pointer;
      font-weight: bolder;
    }
  }
  .on-hover{
    &:hover {
      color: $main-color;
    }
  }
</style>
