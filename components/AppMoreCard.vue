<template>
  <div class="more">
    <h1>6000 <span>+</span></h1>
    <h4>more</h4>
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/styles/variables";

  .more {
    text-align: right;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;

    h1 {
      font-size: 4em;
      margin: 0;

      span {
      }
    }
    h4 {
      margin: 0;
      color: $main-color;
    }
  }
</style>
