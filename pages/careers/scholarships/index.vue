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
  import axios from 'axios'
  import moment from 'moment'
  import { orderBy, find, isEqual } from 'lodash'

  export default {
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
    components: {
      AppFilter,
      AppPageTitle,
      AppScholarship,
      AppMoreCard
    },
    created () {
      this.getPage()
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
      getPage() {
        axios.get('https://walter.ba/cms/wp-json/wp/v2/pages/68').then((response) => {
          this.page = response.data
        }).catch((error) => {
          console.log(error)
        });
      },
      getItems() {
        if (this.items.length !== 0)
          this.loading = false;

        axios.get('https://walter.ba/cms/wp-json/wp/v2/scholarships?per_page=100&_embed').then((response) => {
          this.items = response.data
          this.tempItems = response.data

          if (isEqual(this.items, response.data)) {
            this.$store.commit('SET_SCHOLARSHIPS', response.data);
          }

          this.loading = false
        }).then(() => {
          this.fillUser()
        }).then(() => {
          this.fillCategories()
        }).catch((error) => {
          console.log(error);
        });
      },
      fillUser() {
        axios.get('https://walter.ba/cms/wp-json/wp/v2/users').then((response) => {
          this.items.map((item) => {
            if (find(response.data[0].id, { id: item["_embedded"]["wp:featuredmedia"][0]["author"]})) {
              item["_embedded"]["wp:featuredmedia"][0]["author"] = response.data[0].name
            }
            return item
          })
        }).catch((error) => {
          console.log(error);
        });
      },
      fillCategories() {
        axios.get('https://walter.ba/cms/wp-json/wp/v2/categories').then((response) => {
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
    @include grid-items(0px, 20px, 1, 1, 1);
  }
</style>
