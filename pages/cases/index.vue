<template>
  <section>
    <AppFilter :filters="filters" :showDateFilter="true"></AppFilter>
    <div class="items">
      <AppCards v-for="(test, index) of items" :key="index"/>
    </div>
  </section>
</template>

<script>
  import AppCards from '~/components/AppCards'
  import AppFilter from '~/components/AppFilter'
  import axios from 'axios'

  export default {
    data() {
      return {
        items: [],
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
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/cases').then(function (response) {
        return { items: response.data }
      }).catch(function (error) {
        console.log(error);
      });
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
