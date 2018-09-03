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
  import moment from 'moment'
  import { find, isEqual } from 'lodash'

  export default {
    head () {
      return {
        title: 'News - Walter',
        meta: [
          { hid: 'description', name: 'description', content: this.page.acf.title },
          { hid: 'image', name: 'image', content: '/walter.png' },

          { hid: 'og:title', property: 'og:title', content: this.page.acf.title  },
          { hid: 'og:description', property: 'og:description', content: this.page.acf.description },
          { hid: 'og:url', property: 'og:url', content: 'https://walter.surge.sh/news' },
          { hid: 'og:image', property: 'og:image', content: '/walter.png' },
          { hid: 'og:site_name', property: 'og:site_name', content: 'Walter' },
        ]
      }
    },
    components: {
      AppFilter,
      AppNews,
      AppPageTitle,
      AppContactBox,
      AppMoreCard
    },
    data() {
      return {
        loading: true,
        itemsToShow: 3,
        id: null,
        page: {
          acf: {}
        },
        items: this.$store.state.posts,
        tempItems: [],
        filters: [],
        categories: [],
        users: [],
        search: '',
        selectedFilter: -1
      }
    },
    async asyncData({ app }) {
      const page = await app.$axios.$get('pages/66');
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
    methods: {
      goToPost (id) {
        this.$router.push({ path: `news/${id}`})
      },
      async getItems() {
        if (this.items.length !== 0)
          this.loading = false;

        this.items = await this.$axios.$get('posts?per_page=100&_embed')
        this.tempItems = this.items

        if (isEqual(this.items, this.tempItems)) {
          this.$store.commit('SET_POSTS', this.tempItems);
        }

        this.loading = false
        await this.fillUser()
        await this.fillCategories()
      },
      async fillUser() {
        const response = await this.$axios.$get('https://walter.ba/cms/wp-json/wp/v2/users')
        this.items.map((item) => {
          if (find(response, { id: item.author })) {
            item.author = find(response, { id: item.author })
          }
          return item
        })
      },
      async fillCategories() {
        this.filters = await this.$axios.$get('https://walter.ba/cms/wp-json/wp/v2/categories')
        this.items.map((item) => {
          const cats = []
          this.filters.forEach(cat => {
            if (find(item.categories, (o) => o === cat.id)) {
              cats.push(cat)
            }
          })
          item.categories = cats
          return item
        })
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
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(5%, 2em, 3, 2, 1);
  }
</style>
