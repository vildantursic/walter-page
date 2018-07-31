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
  import axios from 'axios'
  import { find, sortBy } from 'lodash'

  export default {
    head () {
      return {
        title: 'Cases - Walter',
        meta: [
          { hid: 'description', name: 'description', content: 'Our cases' }
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
        items: [],
        tempItems: [],
        item: null,
        filters: [],
        sortedFilters: [],
        search: '',
        selectedFilter: -1
      }
    },
    watch: {
      itemsToShow: function (val) {
        const newQuery = {itemsToShow: val, filterID: this.$route.query.filterID | -1}
        this.$router.replace({ name: "cases", query: newQuery});
      }
    },
    created () {
      this.getItems()
    },
    asyncData({}) {
      return axios.get('http://new.walter.ba/cms/wp-json/wp/v2/pages/60').then((response) => {
        return { page: response.data }
      }).catch((error) => {
        console.log(error)
      });
    },
    computed: {
      searchedList() {
        return this.items.filter(item => {
          return item.title.rendered.toLowerCase().includes(this.search.toLowerCase()) ||
                 item.acf.description.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    methods: {
      show() {
        this.$modal.show('case-modal');
      },
      hide() {
        this.$modal.hide('case-modal');
      },
      getItems() {
        axios.get('http://new.walter.ba/cms/wp-json/wp/v2/cases?per_page=100&_embed').then((response) => {
          this.items = response.data
          this.tempItems = this.items
          this.getCategories()
          this.loading = false
        }).catch((error) => {
          console.log(error);
        });
      },
      getCategories() {
        axios.get('http://new.walter.ba/cms/wp-json/wp/v2/case_categories').then((response) => {
          this.filters = response.data;
          this.sortedFilters = sortBy(this.filters, 'id')
          this.items.map((item) => {
            const cats = []
            response.data.forEach(cat => {
              if (find(item.case_categories, (o) => o === cat.id)) {
                cats.push(cat)
              }
            })
            item.case_categories = cats
            return item
          })
        }).then(() => {
          this.selectFilter(this.$route.query.filterID)
        }).catch((error) => {
          console.log(error);
        });
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
    @include grid-items(10%, 30px, 3, 2);
    @include screen-size('xs') {
      @include grid-items(10%, 30px, 3, 2, 1);
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
