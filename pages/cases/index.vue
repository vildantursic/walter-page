<template>
  <section class="padded-content footing-space content-fix">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" >
      <input id="search" type="text" placeholder="" v-model="search" @blur="showSearch">
    </AppPageTitle>
    <AppFilter :filters="sortedFilters"
               :selectedFilter="selectedFilter"
               :monthActive="2"
               @onFilterSelected="selectFilter">
      <input type="text" placeholder="Search.." v-model="search">
    </AppFilter>
    <div class="no-items">
      <h1 v-if="searchedList.length === 0 && !loading">Thing you searched does not exist!</h1>
      <h1 v-if="loading">Loading ...</h1>
    </div>
    <div class="items">
      <AppCards v-for="(item, index) of limitBy(searchedList, itemsToShow)" :key="index" :item="item"/>
      <AppMoreCard v-if="searchedList.length > itemsToShow" :numberOfItems="searchedList.length - itemsToShow" @onShowMore="() => itemsToShow += 9"/>
    </div>
  </section>
</template>

<script>
  import AppCards from '~/components/AppCards'
  import AppFilter from '~/components/AppFilter'
  import AppPageTitle from '~/components/AppPageTitle'
  import AppMoreCard from '~/components/AppMoreCard'
  import { find, sortBy, isEqual } from 'lodash'

  export default {
    head () {
      return {
        title: 'Cases - Walter',
        meta: [
          { hid: 'description', name: 'description', content: this.page.acf.title },
          { hid: 'image', name: 'image', content: './walter.png'},

          { hid: 'og:title', property: 'og:title', content: this.page.acf.title  },
          { hid: 'og:description', property: 'og:description', content: this.page.acf.description },
          { hid: 'og:url', property: 'og:url', content: 'https://walter.surge.sh/cases' },
          { hid: 'og:image', property: 'og:image', content: './video-image-jpg' },
          { hid: 'og:site_name', property: 'og:site_name', content: 'Walter' },
        ]
      }
    },
    components: {
      AppFilter,
      AppCards,
      AppPageTitle,
      AppMoreCard
    },
    data() {
      return {
        loading: true,
        itemsToShow: +this.$route.query.itemsToShow || 8,
        page: {
          acf: {}
        },
        items: this.$store.state.cases,
        tempItems: this.$store.state.cases,
        item: null,
        filters: [],
        sortedFilters: [],
        search: '',
        selectedFilter: -1
      }
    },
    async asyncData({ app }) {
      const page = await app.$axios.$get('pages/60');
      return { page }
    },
    created () {
      this.getItems()
    },
    computed: {
      searchedList() {
        return this.items.filter(item => {
          return item.title.rendered.toLowerCase().includes(this.search.toLowerCase()) ||
                 item.acf.description.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    watch: {
      itemsToShow: function (val) {
        const newQuery = {itemsToShow: val, filterID: this.$route.query.filterID | -1}
        this.$router.replace({ name: "cases", query: newQuery});
      }
    },
    methods: {
      async getItems() {
        if (this.items.length !== 0)
          this.loading = false;

        this.items = await this.$axios.$get('cases?per_page=100&_embed')
        this.tempItems = this.items

        if (isEqual(this.items, this.tempItems)) {
          this.$store.commit('SET_CASES', this.tempItems);
        }

        this.loading = false
        await this.getCategories()
      },
      async getCategories() {
        this.filters = await this.$axios.$get('case_categories')
        this.sortedFilters = sortBy(this.filters, 'id')
        this.items.map((item) => {
          const cats = []
          this.filters.forEach(cat => {
            if (find(item.case_categories, (o) => o === cat.id)) {
              cats.push(cat)
            }
          })
          item.case_categories = cats
          return item
        })
        this.selectFilter(this.$route.query.filterID)
      },
      showCase(event) {
        this.item = event
        this.show()
      },
      selectFilter (id) {
        if (id) {
          this.selectedFilter = +id;
          this.items = this.filterItems();
          const newQuery = {itemsToShow: this.$route.query.itemsToShow | 8, filterID: id }
          this.$router.replace({ name: "cases", query: newQuery});
        }
      },
      filterItems () {
        this.search = ''
        if (this.selectedFilter === -1) {
          return this.tempItems;
        } else {
          return this.tempItems.filter((item) => {
            return find(item.case_categories, (o) => o.id === this.selectedFilter) ? item : undefined
          })
        }
      },
      showSearch(){
        document.getElementById('search-image').style.display = 'block';
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(10%, 50px, 3, 2);
    @include screen-size('xs') {
      @include grid-items(10%, 50px, 3, 2, 1);
    }
  }
  .v--modal-overlay{
    background: rgba(0, 0, 0, 0.5);
  }
  .content-fix{
    padding: 0 17%;

    @include screen-size('l') {
      padding: 0 15%;
    }
    @include screen-size('m') {
      padding: 0 10%;
    }
  }
</style>
