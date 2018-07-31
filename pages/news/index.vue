<template>
  <section class="padded-content footing-space">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" >
      <input id="search" type="text" placeholder="" v-model="search" @blur="showSearch">
    </AppPageTitle>
    <AppFilter :filters="filters"
               :selectedFilter="selectedFilter"
               :showDateFilter="true"
               :monthActive="2"
               @onFilterSelected="selectFilter"
               @onYearSelected="selectYear"
               @onMonthSelected="selectMonth">
      <input type="text" placeholder="Search.." v-model="search">
    </AppFilter>
    <div class="no-items">
      <h1 v-if="searchedList.length === 0 && !loading">No items to show!</h1>
      <h1 v-if="loading">Loading ...</h1>
    </div>
    <div class="items">
      <AppNews v-for="(item, index) of limitBy(searchedList, itemsToShow)" :key="index" :item="item" @onPostClicked="goToPost(item.id)"/>
      <AppMoreCard v-if="items.length > itemsToShow" :numberOfItems="items.length - itemsToShow" @onShowMore="() => itemsToShow += 9"/>
    </div>
  </section>
</template>

<script>
  import AppFilter from '~/components/AppFilter'
  import AppNews from '~/components/AppNews'
  import AppPageTitle from '~/components/AppPageTitle'
  import AppContactBox from '~/components/AppContactBox'
  import AppMoreCard from '~/components/AppMoreCard'
  import axios from 'axios'
  import moment from 'moment'
  import { find } from 'lodash'

  export default {
    data() {
      return {
        loading: true,
        itemsToShow: 3,
        id: null,
        page: {
          acf: {}
        },
        items: [],
        tempItems: [],
        filters: [],
        categories: [],
        users: [],
        search: '',
        selectedFilter: -1
      }
    },
    components: {
      AppFilter,
      AppNews,
      AppPageTitle,
      AppContactBox,
      AppMoreCard
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
      goToPost (id) {
        this.$router.push({ path: `news/${id}`})
      },
      getItems() {
        axios.get('http://new.walter.ba/cms/wp-json/wp/v2/posts?per_page=100&_embed').then((response) => {
          this.items = response.data
          this.tempItems = this.items
          this.fillUser()
          this.fillCategories()
          this.loading = false
        }).catch((error) => {
          console.log(error);
        });
      },
      fillUser() {
        axios.get('http://new.walter.ba/cms/wp-json/wp/v2/users').then((response) => {
          this.items.map((item) => {
            if (find(response.data, { id: item.author })) {
              item.author = find(response.data, { id: item.author })
            }
            return item
          })
        }).catch((error) => {
          console.log(error);
        });
      },
      fillCategories() {
        axios.get('http://new.walter.ba/cms/wp-json/wp/v2/categories').then((response) => {
          this.filters = response.data
          this.items.map((item) => {
            const cats = []
            response.data.forEach(cat => {
              if (find(item.categories, (o) => o == cat.id)) {
                cats.push(cat)
              }
            })
            item.categories = cats
            return item
          })
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
          return this.tempItems.filter((item) => {
            return find(item.categories, (o) => o.id === this.selectedFilter) ? item : undefined
          })
        }
      },
      showSearch(){
        document.getElementById('search-image').style.display = 'block';
      }
    },
    created () {
      this.getItems()
    },
    asyncData({}) {
      return axios.get('http://new.walter.ba/cms/wp-json/wp/v2/pages/66').then((response) => {
        return { page: response.data }
      }).catch((error) => {
        console.log(error)
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(0px, 20px, 1, 1, 1);
  }
</style>
