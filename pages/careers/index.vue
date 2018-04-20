<template>
  <section>
    <AppPageTitle :supertitle="'Work in Walter'" :title="'Open Positions'" :subtitle="'I\'m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click meand you can start adding your own content and make changes to the font'" ></AppPageTitle>
    <AppFilter :filters="filters" :filterActive="2" :showDateFilter="true" :monthActive="2"></AppFilter>
    <div class="items">
      <AppPosition v-for="(test, index) of items" :key="index"/>
    </div>
    <div class="items-bellow">
      <AppPosition/>
    </div>
  </section>
</template>

<script>
  import AppFilter from '~/components/AppFilter'
  import AppPosition from '~/components/AppPosition'
  import AppPageTitle from '~/components/AppPageTitle'
  import axios from 'axios'

  export default {
    data() {
      return {
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
      AppPageTitle,
      AppPosition
    },
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/careers').then(function (response) {
        return { items: response.data }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(0px, 20px, 3, 1);
    border-width: 0 0 4px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #cfbb22 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #cfbb22 100%);
    border-image: linear-gradient(45deg, #405dce 0%, #cfbb22 100%);
    border-image-slice: 1;
  }
  .items-bellow
  {
    @include grid-items(0px, 20px, 1, 1);
    border-width: 0 0 4px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #cfbb22 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #cfbb22 100%);
    border-image: linear-gradient(45deg, #405dce 0%, #cfbb22 100%);
    border-image-slice: 1;
  }
</style>

