<template>
  <div>
    <div class="header">
      <AppHeader/>
    </div>

    <div class="space"></div>
    <div class="main">
      <nuxt/>
    </div>
    <div class="space"></div>

    <div class="footer">

    </div>
  </div>
</template>

<script>
//import AppCard from '~/components/AppCard.vue'
import AppHeader from '~/components/AppHeader.vue'
export default {
  components: {
    AppHeader,
//    AppCard
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/mixins";

  .layout {
    @include create-main-grid(3)
  }

  .header {
    grid-area: header;
  }
  .main {
    margin: 0 15%;
    grid-area: main;
    margin: 0 15%;
  }
  .space {
    grid-area: space;
  }
  .footer {
    grid-area: footer;
  }
</style>
