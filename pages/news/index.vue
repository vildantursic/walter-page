<template>
  <section>
    <AppFilter :filters="filters" :showDateFilter="true"></AppFilter>
    <div class="items">
      <AppNews v-for="(test, index) of [1,2,3,4,5,6]" :key="index"/>
    </div>
  </section>
</template>

<script>
  import AppFilter from '~/components/AppFilter'
  import AppNews from '~/components/AppNews'
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
        ],
        subfilters: [
          {
            id: 1,
            name: 'subtest 1'
          },
          {
            id: 2,
            name: 'subtest 2'
          }
        ]
      }
    },
    components: {
      AppFilter,
      AppNews
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(0px, 20px, 1, 1);
  }
</style>
