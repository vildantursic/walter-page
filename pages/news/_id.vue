<template>
  <section>
    <div class="header-news">
      <h1 class="title">I'm a title. Click
        here to edit me.</h1>
      <div class="social">
        <!-- Add font awesome icons -->
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fas fa-envelope"></i></a>
        <a href="#"><i class="fas fa-paperclip"></i></a>
      </div>
    </div>
    <div class="items">
      <AppNews v-for="(test, index) of items" :key="index"/>
    </div>
  </section>
</template>

<script>
  import AppFilter from '~/components/AppFilter'
  import AppNews from '~/components/AppNews'
  import AppPageTitle from '~/components/AppPageTitle'
  import axios from 'axios'
  export default {
    data() {
      return {
        items: [],
        filters: [
          {
            id: 1,
            name: 'test 1'
          },
          {
            id: 2,
            name: 'test 2'
          },
          {
            id: 3,
            name: 'test 3'
          },
          {
            id: 4,
            name: 'test 4'
          }
        ],
        subfilters: [
          {
            id: 1,
            name: 'subtest 1'
          },
          {
            id: 2,
            name: 'subtest 2'
          }
        ]
      }
    },
    components: {
      AppFilter,
      AppNews,
      AppPageTitle
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
  .header-news
  {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .title
    {
      font-size: 2.5em;
      color: grey;
    }
    .social
    {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .fab ,.fas{
    padding: 5px 10px;
    font-size: 25px;
    width: 30px;
    text-align: center;
    text-decoration: none;
  }
  .fab:hover, .fas:hover {
    opacity: 0.7;
  }
  .fa-facebook {
    background: #ffffff;
    color: #000000;
  }
  .fa-twitter {
    background: #ffffff;
    color: #000000;
  }
  .fa-google {
    background: #ffffff;
    color: #000000;;
  }
  .fa-linkedin {
    background: #ffffff;
    color: #000000;
  }
  .fa-envelope
  {
    background: #ffffff;
    color: #000000;
  }
  .fa-paperclip
  {
    background: #ffffff;
    color: #000000;
  }
</style>
