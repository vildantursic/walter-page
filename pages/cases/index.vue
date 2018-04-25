<template>
  <section class="padded-content footing-space">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" ></AppPageTitle>
    <AppFilter :filters="filters" :showDateFilter="false" :filterActive="filterActive"></AppFilter>
    <div class="items">
      <AppCards v-for="(item, index) of limitBy(items, itemsToShow)" :key="index" :item="item" @onShowCase="showCase($event)"/>
      <AppMoreCard v-if="items.length > itemsToShow" :numberOfItems="items.length - itemsToShow" @onShowMore="() => itemsToShow += itemsToShow"/>
    </div>
    <AppSingle v-if="item" @onCloseCase="item = null"/>
  </section>
</template>

<script>
  import AppCards from '~/components/AppCards'
  import AppFilter from '~/components/AppFilter'
  import AppPageTitle from '~/components/AppPageTitle'
  import AppMoreCard from '~/components/AppMoreCard'
  import AppSingle from "~/components/AppSingle";
  import axios from 'axios'

  export default {
    components: {
      AppFilter,
      AppCards,
      AppPageTitle,
      AppMoreCard,
      AppSingle
    },
    data() {
      return {
        itemsToShow: 8,
        page: {
          acf: {}
        },
        items: [],
        item: null,
        filters: [],
        filterActive: -1
      }
    },
    created () {
      this.getItems()
      this.getCategories()
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
      },
      getCategories() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/case_categories').then((response) => {
          this.filters = response.data
        }).catch((error) => {
          console.log(error);
        });
      },
      showCase(event) {
        this.item = event
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
