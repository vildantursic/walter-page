<template>
  <section class="padded-content footing-space">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" ></AppPageTitle>
    <!--<AppFilter :filters="filters"-->
               <!--:selectedFilter="selectedFilter"-->
               <!--:showDateFilter="true"-->
               <!--:monthActive="2"-->
               <!--@onFilterSelected="selectFilter"-->
               <!--@onYearSelected="selectYear"-->
               <!--@onMonthSelected="selectMonth">-->
      <!--<input type="text" placeholder="Search.." v-model="search">-->
    <!--</AppFilter>-->
    <div class="items">
      <AppPosition v-for="(item, index) of limitBy(searchedList, itemsToShow)" :key="index" :item="item"/>
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
  import moment from 'moment'
  import { orderBy, find } from 'lodash'

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
          { id: 1, name: 'Newest' },
          { id: 2, name: 'Oldest' },
        ],
        search: '',
        selectedFilter: -1,
        tempItems: [],
        categories: []
      }
    },
    components: {
      AppFilter,
      AppPageTitle,
      AppPosition
    },
    computed: {
      searchedList() {
        return this.items.filter(item => {
          return item.title.rendered.toLowerCase().includes(this.search.toLowerCase())
        })
      }
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
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/careers?per_page=100&_embed').then((response) => {
          this.items = response.data
          this.itemsToShow = this.items.length - 1
          this.tempItems = response.data
        }).catch((error) => {
          console.log(error);
        });
      },
      selectFilter (id) {
        this.selectedFilter = id
        this.items = this.filterItems()
      },
      selectYear (year) {
        this.items = this.filterItems().filter((item) => {
          return moment(item.date).year() === year
        })
      },
      selectMonth (month) {
        this.items = this.filterItems().filter((item) => {
          return moment(item.date).month() + 1 === month
        })
      },
      filterItems () {
        this.search = ''
        if (this.selectedFilter === -1) {
          return this.tempItems;
        } else {
          return orderBy(this.tempItems, ['date'], [this.selectedFilter === 1 ? 'desc' : 'asc']);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(0px, 2em, 3, 2, 1);
    margin-bottom: 2em;
  }
  .items-bellow
  {
    @include grid-items(0px, 2em, 1, 1, 1);
    margin-bottom: 2em;
  }
</style>

