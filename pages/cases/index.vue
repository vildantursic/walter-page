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
        tempItems: [],
        item: null,
        filters: [],
        sortedFilters: [],
        search: '',
        selectedFilter: -1
      }
    },
    created () {
      this.getItems()
    },
    asyncData({}) {
      return axios.get('http://cms.walter.ba/wp-json/wp/v2/pages/60').then((response) => {
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
        axios.get('http://cms.walter.ba/wp-json/wp/v2/cases?per_page=100&_embed').then((response) => {
          this.items = response.data
          this.tempItems = this.items
          this.getCategories()
          setTimeout(() => {
            this.selectFilter(this.$route.query.filter)
          }, 1000)
        }).catch((error) => {
          console.log(error);
        });
      },
      getCategories() {
        axios.get('http://cms.walter.ba/wp-json/wp/v2/case_categories').then((response) => {
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
          this.selectedFilter = +id
          this.items = this.filterItems(+id)
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
    @include grid-items(10%, 30px, 3, 2, 1);
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
