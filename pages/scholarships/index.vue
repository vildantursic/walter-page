<template>
  <section class="padded-content footing-space">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" ></AppPageTitle>
    <AppFilter :filters="filters" :selectedFilter="selectedFilter" :showDateFilter="true" :monthActive="2" @onFilterSelected="selectFilter" @onSearch="search = $event"></AppFilter>
    <div class="items">
      <AppScholarship v-for="(item, index) of limitBy(items, itemsToShow)" :key="index" :item="item" @onPostClicked="goToPost(item.id)"/>
    </div>
    <AppMoreCard v-if="items.length > itemsToShow" :numberOfItems="items.length - itemsToShow" @onShowMore="() => itemsToShow += itemsToShow"/>
  </section>
</template>

<script>
  import AppFilter from '~/components/AppFilter'
  import AppAcademy from '~/components/AppAcademy'
  import AppPageTitle from '~/components/AppPageTitle'
  import AppMoreCard from '~/components/AppMoreCard'
  import axios from 'axios'
  import AppScholarship from '~/components/AppScholarship'

  export default {
    data() {
      return {
        itemsToShow: 3,
        id: null,
        items: [],
        page: {
          acf: {}
        },
        newItems: [],
        filters: [],
        categories: [],
        users: [],
        search: '',
        selectedFilter: -1
      }
    },
    components: {
      AppFilter,
      AppPageTitle,
      AppScholarship,
      AppMoreCard
    },
    created () {
      this.getItems()
    },
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/pages/68').then((response) => {
        return { page: response.data }
      }).catch((error) => {
        console.log(error)
      });
    },
  methods: {
    goToPost (id) {
      this.$router.push({ path: `news/${id}`})
    },
    getImageSource(item) {
      console.log(item.content )
    },
    getItems() {
      axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/scholarships?_embed').then((response) => {
        this.items = response.data
        this.fillUser()
        this.fillCategories()
      }).catch((error) => {
        console.log(error);
      });
    },
    fillUser() {
      axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/users').then((response) => {
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
      axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/categories').then((response) => {
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
      console.log(id)
      this.filterAcademyNews(this.selectedFilter)
    },
    filterAcademyNews (id) {
      this.items.map((item) => {
        const cats = []
        response.data.forEach(cat => {
          if (find(item.case_categories, (o) => o == cat.id)) {
            cats.push(cat)
          }
        })
        item.case_categories = cats
        return item
      })
      this.newItems = this.items.filter( (item) => {
        item.categories.forEach( (category) => {
          console.log('kategorija :' + category.id)
          console.log('izabranakategorija :' + id)
          if (category.id === id) {
            return item
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(0px, 20px, 1, 1);
  }
</style>
