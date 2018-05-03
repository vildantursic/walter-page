<template>
  <section class="padded-content footing-space">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" ></AppPageTitle>
    <AppFilter :filters="filters" :selectedFilter="selectedFilter" :showDateFilter="true" :monthActive="2" @onFilterSelected="selectFilter" @onSearch="search = $event"></AppFilter>
    <div class="items">
      <AppPosition v-for="(item, index) of limitBy(items,itemsToShow)" :key="index" :item="item"/>
    </div>
    <div class="items-bellow">
      <AppPosition v-if="items[items.length - 1]" :item="items[items.length - 1]"></AppPosition>
    </div>
  </section>
</template>

<script>
  import AppFilter from '~/components/AppFilter'
  import AppPosition from '~/components/AppPosition'
  import AppPageTitle from '~/components/AppPageTitle'
  import axios from 'axios'

  export default {
    data() {
      return {
        items: [],
        itemsLenght: null,
        itemsToShow: null,
        lastItem: {},
        id: null,
        page: {
          acf: {}
        },
        filters: [
          { id: 2, name: 'Newest' },
          { id: 3, name: 'Oldest' },
        ],
        search: '',
        selectedFilter: -1
      }
    },
    components: {
      AppFilter,
      AppPageTitle,
      AppPosition
    },
    mounted() {
      this.getItems()
    },
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/pages/64').then((response) => {
        return { page: response.data }
      }).catch((error) => {
        console.log(error)
      });
    },
    methods: {
      getItems () {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/careers?_embed').then((response) => {
          this.items = response.data
          this.itemsToShow = this.items.length - 1
        }).catch((error) => {
          console.log(error);
        });
      },
      selectFilter (id) {
        this.selectedFilter = id
        console.log(id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(0px, 2em, 3, 1);
    margin-bottom: 2em;
  }
  .items-bellow
  {
    @include grid-items(0px, 2em, 1, 1);
    margin-bottom: 2em;
  }
</style>

