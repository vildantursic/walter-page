<template>
  <section class="padded-content footing-space">
    <AppPageTitle></AppPageTitle>
    <AppFilter :filters="filters" :showDateFilter="false"></AppFilter>
    <div class="items">
      <AppCards v-for="(item, index) of limitBy(items, itemsToShow)" :key="index" :item="item"/>
      <AppMoreCard :number="itemsToShow" v-if="items.length > itemsToShow" @onShowMore="() => itemsToShow += itemsToShow" />
    </div>
  </section>
</template>

<script>
  import AppCards from '~/components/AppCards'
  import AppFilter from '~/components/AppFilter'
  import AppPageTitle from '~/components/AppPageTitle'
  import AppMoreCard from '~/components/AppMoreCard'
  import axios from 'axios'

  export default {
    components: {
      AppFilter,
      AppCards,
      AppPageTitle,
      AppMoreCard
    },
    data() {
      return {
        itemsToShow: 8,
        items: [],
        filters: [
          { id: 1, name: 'All' },
          { id: 2, name: 'BIM Consulting and Engineering' },
          { id: 3, name: 'BIM Modelling' },
          { id: 4, name: 'BIM Asset Creation' },
          { id: 5, name: 'Software Development' }
        ]
      }
    },
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/cases?_embed').then(function (response) {
        return { items: response.data }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(10%, 30px, 3, 2);
  }
</style>
