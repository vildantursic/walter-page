<template>
  <section>
    <AppFilter :filters="filters" :showDateFilter="true"></AppFilter>
    <div class="items">
      <AppCards v-for="(test, index) of [1,2,3,4,5,6,7,8,9]" :key="index"/>
    </div>
  </section>
</template>

<script>
  import AppCards from '~/components/AppCards'
  import AppFilter from '~/components/AppFilter'

  export default {
    data() {
      return {
        filters: [
          {
            id: 1,
            name: 'test 1'
          },
          {
            id: 2,
            name: 'test 2'
          },
          {
            id: 3,
            name: 'test 3'
          },
          {
            id: 4,
            name: 'test 4'
          }
        ]
      }
    },
    components: {
      AppFilter,
      AppCards
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(50px, 30px, 3, 2);
  }
</style>
