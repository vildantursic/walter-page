<template>
  <section class="padded-content footing-space">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" ></AppPageTitle>
    <AppFilter :filters="filters" :showDateFilter="false"></AppFilter>
    <div class="items">
      <AppCards v-for="(item, index) of limitBy(items, itemsToShow)" :key="index" :item="item"/>
      <AppMoreCard v-if="items.length > itemsToShow" :numberOfItems="items.length - itemsToShow" @onShowMore="() => itemsToShow += itemsToShow"/>
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
        page: {
          acf: {}
        },
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
    created () {
      this.getItems()
    },
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/pages/60').then((response) => {
        return { page: response.data }
      }).catch((error) => {
        console.log(error)
      });

    },
    methods: {
      getItems() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/cases?_embed').then((response) => {
          this.items = response.data
        }).catch((error) => {
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(10%, 30px, 3, 2);
  }
</style>
