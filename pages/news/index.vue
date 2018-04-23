<template>
  <section class="padded-content footing-space">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" ></AppPageTitle>
    <AppFilter :filters="filters" :filterActive="2" :showDateFilter="true" :monthActive="2"></AppFilter>
    <div class="items">
      <AppNews v-for="(item, index) of limitBy(items, itemsToShow)" :key="index" :item="item"/>
      <AppMoreCard v-if="items.length > itemsToShow" :numberOfItems="items.length - itemsToShow" @onShowMore="() => itemsToShow += itemsToShow"/>
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

  export default {
    data() {
      return {
        itemsToShow: 3,
        page: {
          acf: {}
        },
        items: [],
        filters: [
          { id: 1, name: 'All' },
          { id: 2, name: 'BIM Consulting and Engineering' },
          { id: 3, name: 'BIM Modelling' },
          { id: 4, name: 'BIM Asset Creation' },
          { id: 5, name: 'Software Development' }
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
    methods: {
      getImageSource(item) {
        console.log(item.content )
      }
    },
    created () {
      this.getItems()
    },
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/pages/66').then((response) => {
        return { page: response.data }
      }).catch((error) => {
        console.log(error)
      });
    },
    methods: {
      getItems() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/posts?_embed').then((response) => {
          this.items = response.data
        }).catch((error) => {
          console.log(error);
        });
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
