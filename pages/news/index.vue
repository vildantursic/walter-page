<template>
  <section class="padded-content footing-space">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" ></AppPageTitle>
    <AppFilter :filters="filters" :filterActive="2" :showDateFilter="true" :monthActive="2"></AppFilter>
    <div class="items">
      <AppNews v-for="(item, index) of items"  :item="item" :key="index"/>
    </div>
  </section>
</template>

<script>
  import AppFilter from '~/components/AppFilter'
  import AppNews from '~/components/AppNews'
  import AppPageTitle from '~/components/AppPageTitle'
  import AppContactBox from '~/components/AppContactBox'
  import axios from 'axios'

  export default {
    data() {
      return {
        page: {
          acf: {}
        },
        items: [],
        filters: [
          { id: 1, name: 'test 1' },
          { id: 2, name: 'test 2' },
          { id: 3, name: 'test 3' },
          { id: 4, name: 'test 4' }
        ]
      }
    },
    components: {
      AppFilter,
      AppNews,
      AppPageTitle,
      AppContactBox
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
