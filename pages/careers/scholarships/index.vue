<template>
  <section class="padded-content footing-space">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" >
      <input id="search" type="text" placeholder="" v-model="search" @blur="showSearch">
    </AppPageTitle>
    <AppFilter :filters="filters"
               :selectedFilter="selectedFilter"
               :showDateFilter="false"
               :monthActive="2"
               @onFilterSelected="selectFilter"
               @onYearSelected="selectYear"
               @onMonthSelected="selectMonth">
      <input type="text" placeholder="Search.." v-model="search">
    </AppFilter>
    <div class="no-items">
      <h1 v-if="searchedList.length === 0 && search.length === 0 && !loading">
        There are no open applications fo the moment but we will reach out for new talents soon. Keep in touch on
        <a target="_blank" href="https://www.facebook.com/walterBIM/">Facebook</a> and <a target="_blank" href="https://www.linkedin.com/company/walter-bim-solutions/">Linkedin</a> and be the first one to get informed.
      </h1>
      <h1 v-if="searchedList.length === 0 && search.length !== 0 && !loading">
        Thing you searched does not exist!
      </h1>
      <h1 v-if="loading">Loading ...</h1>
    </div>
    <div class="items">
      <AppScholarship v-for="(item, index) of limitBy(searchedList, itemsToShow)" :key="index" :item="item" @onPostClicked="goToPost(item.id)"/>
    </div>
    <AppMoreCard v-if="items.length > itemsToShow" :numberOfItems="items.length - itemsToShow" @onShowMore="() => itemsToShow += 9"/>
  </section>
</template>

<script>
  import AppFilter from '~/components/AppFilter'
  import AppPageTitle from '~/components/AppPageTitle'
  import AppMoreCard from '~/components/AppMoreCard'
  import AppScholarship from '~/components/AppScholarship'
  import moment from 'moment'
  import { orderBy, find, isEqual } from 'lodash'

  export default {
    head () {
      return {
        title: 'Scholarships - Walter',
        meta: [
          { hid: 'description', name: 'description', content: this.page.acf.title },
          { hid: 'image', name: 'image', content: './walter.png'},

          { hid: 'og:title', property: 'og:title', content: this.page.acf.title  },
          { hid: 'og:description', property: 'og:description', content: this.page.acf.description },
          { hid: 'og:url', property: 'og:url', content: 'http://walter.ba/scholarships' },
          { hid: 'og:image', property: 'og:image', content: './walter.png' },
          { hid: 'og:site_name', property: 'og:site_name', content: 'Walter' },
        ]
      }
    },
    components: {
      AppFilter,
      AppPageTitle,
      AppScholarship,
      AppMoreCard
    },
    data() {
      return {
        loading: true,
        itemsToShow: 3,
        id: null,
        items: this.$store.state.scholarships,
        page: {
          acf: {}
        },
        newItems: [],
        filters: [
          { id: 1, name: 'Newest' },
          { id: 2, name: 'Oldest' },
        ],
        categories: [],
        users: [],
        search: '',
        selectedFilter: -1,
        tempItems: [],
      }
    },
    async asyncData({ app }) {
      const page = await app.$axios.$get('pages/68');
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

        this.items = await this.$axios.$get('scholarships?per_page=100&_embed')
        this.tempItems = this.items

        if (isEqual(this.items, this.tempItems)) {
          this.$store.commit('SET_SCHOLARSHIPS', this.tempItems);
        }

        this.loading = false

        await this.fillUser()
        await this.fillCategories()
      },
      async fillUser() {
        const response = await this.$axios.$get('users')
        this.items.map((item) => {
          if (find(response[0].id, { id: item["_embedded"]["wp:featuredmedia"][0]["author"]})) {
            item["_embedded"]["wp:featuredmedia"][0]["author"] = response[0].name
          }
          return item
        })
      },
      async fillCategories() {
        const response = await this.$axios.$get('categories')
        this.items.map((item) => {
          const cats = []
          response.forEach(cat => {
            if (find(item.categories, (o) => o == cat.id)) {
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
          return orderBy(this.tempItems, ['date'], [this.selectedFilter === 1 ? 'desc' : 'asc']);
        }
      },
      showSearch(){
        document.getElementById('search-image').style.display = 'block';
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/mixins";

  .items {
    @include grid-items(5%, 2em, 3, 2, 1);
  }
</style>
