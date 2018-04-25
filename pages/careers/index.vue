<template>
  <section class="padded-content footing-space">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" ></AppPageTitle>
    <AppFilter :filters="filters" :selectedFilter="selectedFilter" :showDateFilter="true" :monthActive="2" @onFilterSelected="selectFilter" @onSearch="search = $event"></AppFilter>
    <div class="items">
      <AppPosition v-for="(test, index) of items" :key="index"/>
    </div>
    <div class="items-bellow">
      <AppPosition/>
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
        page: {
          acf: {}
        },
        items: [],
        filters: [],
        search: '',
        selectedFilter: -1
      }
    },
    components: {
      AppFilter,
      AppPageTitle,
      AppPosition
    },
    created () {
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
        }).catch((error) => {
          console.log(error);
        });
      },
      selectFilter (id) {
        this.selectedFilter = id
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(0px, 20px, 3, 1);
    border-width: 0 0 4px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #cfbb22 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #cfbb22 100%);
    border-image: linear-gradient(45deg, #405dce 0%, #cfbb22 100%);
    border-image-slice: 1;
  }
  .items-bellow
  {
    @include grid-items(0px, 20px, 1, 1);
    border-width: 0 0 4px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #cfbb22 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #cfbb22 100%);
    border-image: linear-gradient(45deg, #405dce 0%, #cfbb22 100%);
    border-image-slice: 1;
  }
</style>

