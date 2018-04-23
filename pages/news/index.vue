<template>
  <section>
    <AppPageTitle :supertitle="'All about BIM'" :title="'Walter Monthly'" :subtitle="'\'I\'m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click meand you can start adding your own content and make changes to the font. '" ></AppPageTitle>
    <AppFilter :filters="filters" :filterActive="2" :showDateFilter="true" :monthActive="2"></AppFilter>
    <div class="items">
      <AppNews v-for="(test, index) of items" :key="index"/>
      <AppContactBox></AppContactBox>
      <AppContactBox></AppContactBox>
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
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/posts').then(function (response) {
        return { items: response.data }
      }).catch(function (error) {
        console.log(error);
      });
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .items {
    @include grid-items(0px, 20px, 1, 1);
  }
</style>
