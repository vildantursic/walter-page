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
import AppHeader from '~/components/AppHeader.vue'
export default {
  components: {
    AppHeader
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
    grid-area: main;
  }
  .space {
    grid-area: space;
  }
  .footer {
    grid-area: footer;
  }
</style>
