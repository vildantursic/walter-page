<template>
  <section>
    <AppPageTitle></AppPageTitle>
    <AppFilter :filters="filters" :showDateFilter="false"></AppFilter>
    <div class="items">
      <AppCards v-for="(test, index) of [1,2,3,4,5,6,7,8,9]" :key="index"/>
    </div>
  </section>
</template>

<script>
  import AppCards from '~/components/AppCards'
  import AppFilter from '~/components/AppFilter'
  import AppPageTitle from '~/components/AppPageTitle'

  export default {
    data() {
      return {
        filters: [
          {
            id: 1,
            name: 'All'
          },
          {
            id: 2,
            name: 'BIM Consulting and Engineering'
          },
          {
            id: 3,
            name: 'BIM Modelling'
          },
          {
            id: 4,
            name: 'BIM Asset Creation'
          },
          {
            id: 5,
            name: 'Software Development'
          }
        ]
      }
    },
    components: {
      AppFilter,
      AppCards,
      AppPageTitle
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(50px, 30px, 3, 2);
  }
</style>
