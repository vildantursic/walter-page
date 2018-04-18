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
      <AppFooter/>
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
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
  }
  .space {
    grid-area: space;
  }
  .footer {
    grid-area: footer;
  }
</style>
