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
    <div class="item">
      <div class="img-header">
        <p class="category">BIM Architecture</p>
        <p class="author">John Doe, June 20 at 10:05 PM</p>
      </div>
      <div class="img-container">
        <img class="img" src="~/static/images/arch.jpg" alt="">
      </div>
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

  .item {
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
  .img-header
  {
    .category
    {
      margin: 0;
      font-size: 1em;
      font-weight: 700;
      color: blue;
      letter-spacing: 2px;
    }
    .author
    {
      margin: 0;
      font-size: 0.8em;
      font-weight: 500;
      color: gray;
    }
  }
  .img-container
  {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 500px;
    .img {
      height: 100%;
      width: 100%;
    }
  }
  .fab ,.fas{
    padding: 5px 10px;
    font-size: 30px;
    width: 40px;
    text-align: center;
    text-decoration: none;
  }
  .fab:hover, .fas:hover {
    opacity: 0.75;
  }
  .fa-facebook {
    background: #ffffff;
    color: grey;
  }
  .fa-twitter {
    background: #ffffff;
    color: grey;
  }
  .fa-google {
    background: #ffffff;
    color: grey;;
  }
  .fa-linkedin {
    background: #ffffff;
    color: grey;
  }
  .fa-envelope
  {
    background: #ffffff;
    color: grey;
  }
  .fa-paperclip
  {
    background: #ffffff;
    color: grey;
  }
</style>
