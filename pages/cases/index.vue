<template>
  <section class="container">
    <AppCards/>
    <nuxt/>
  </section>
</template>

<script>
  import AppCards from '~/components/AppCards.vue'
  export default {
    components: {
      AppCards
    }
  }
</script>

<style>
</style>
