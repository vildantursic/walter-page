<template>
  <section class="padded-content footing-space">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" >
      <input id="search" type="text" placeholder="" v-model="search" @blur="showSearch">
    </AppPageTitle>
    <div class="no-items">
      <h1 v-if="searchedList.length === 0 && !loading">
        There are no open positions right now but keep in touch on
        <a target="_blank" href="https://www.facebook.com/walterBIM/">Facebook</a> and <a target="_blank" href="https://www.linkedin.com/company/walter-bim-solutions/">Linkedin</a>, we will maybe need your skills soon.
      </h1>
      <h1 v-if="loading">Loading ...</h1>
    </div>
    <div class="items">
      <AppPosition v-for="(item, index) of limitBy(searchedList, itemsToShow)" :key="index" :item="item"/>
    </div>
  </section>
</template>

<script>
  import AppFilter from '~/components/AppFilter'
  import AppPosition from '~/components/AppPosition'
  import AppPageTitle from '~/components/AppPageTitle'
  import moment from 'moment'
  import { orderBy, find, isEqual } from 'lodash'

  export default {
    head () {
      return {
        title: 'Jobs - Walter',
        meta: [
          { hid: 'description', name: 'description', content: this.page.acf.title },
          { hid: 'image', name: 'image', content: './walter.png'},

          { hid: 'og:title', property: 'og:title', content: this.page.acf.title  },
          { hid: 'og:description', property: 'og:description', content: this.page.acf.description },
          { hid: 'og:url', property: 'og:url', content: 'https://walter.surge.sh/jobs' },
          { hid: 'og:image', property: 'og:image', content: './video-image-jpg' },
          { hid: 'og:site_name', property: 'og:site_name', content: 'Walter' },
        ]
      }
    },
    components: {
      AppFilter,
      AppPageTitle,
      AppPosition
    },
    data() {
      return {
        loading: true,
        items: this.$store.state.jobs,
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
    async asyncData({ app }) {
      const page = await app.$axios.$get('pages/64');
      return { page }
    },
    created() {
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
      async getItems () {
        if (this.items.length !== 0)
          this.loading = false;

        this.items = await this.$axios.$get('careers?per_page=100&_embed')
        this.itemsToShow = this.items.length
        this.tempItems = this.items

        if (isEqual(this.items, this.tempItems)) {
          this.$store.commit('SET_JOBS', this.tempItems);
        }

        this.loading = false
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
    margin-bottom: 2em;
  }
  .items-bellow
  {
    @include grid-items(0px, 2em, 1, 1, 1);
    margin-bottom: 2em;
  }
</style>

