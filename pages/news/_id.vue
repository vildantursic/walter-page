<template>
  <section>
    <div class="header-news padded-content">
      <h1 class="title">{{page.title.rendered}}</h1>
      <div class="social">
        <!-- Add font awesome icons -->
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fas fa-envelope"></i></a>
        <a href="#"><i class="fas fa-paperclip"></i></a>
      </div>
    </div>
    <div class="item animated fadeIn padded-content">
      <div class="img-header">
        <p class="category">{{computedCategories}}</p>
        <p class="author">{{computedAuthor}}</p>
      </div>
      <div class="img-container">
        <img class="img" src="~/static/images/arch.jpg" alt="">
      </div>
      <div class="post-content">
        <div class="post-left" v-html="page.content.rendered">
        </div>
        <div class="post-right">
          <div class="year">
            <span class="current-year" >NEXT ARTICLE</span> <span><i class="fas fa-chevron-right"></i></span>
          </div>
          <div v-for="item in items" v-bind:key="item.id">
            <OtherPosts :category="item.categories" :author="item.author" :title="item.title.rendered"  ></OtherPosts>
          </div>
        </div>
      </div>
    </div>
    <div class="img-container-bottom">
      <img class="img-bottom" src="~/static/images/hyatt.jpg" alt="">
    </div>
  </section>
</template>

<script>
  import AppFilter from '~/components/AppFilter'
  import AppNews from '~/components/AppNews'
  import AppPageTitle from '~/components/AppPageTitle'
  import OtherPosts from '~/components/OtherPosts'
  import axios from 'axios'
  import moment from 'moment'
  export default {
    data() {
      return {
        users: [],
        author: '',
        categories: [],
        items: [],
        page: {
          acf: {}
        },
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
  computed: {
    // a computed getter
    computedAuthor: function () {
      var computedString = ''
      var computedAuthor = ''
      var date = ''
      this.users.forEach( (user) =>
      {
          if(this.page.author === user.id)
          {
              computedAuthor = user.name
          }
      })
      computedString = computedAuthor  + ', '
      date = moment(this.page.date).format('MMM YYYY [at] LT');
      computedString += date
      return computedString
    },
    computedCategories: function () {
      var computedString = ''
      var currentCategory = {}
      this.page.categories.forEach( (categoryOfItem) =>
      {
        currentCategory = categoryOfItem
        this.categories.forEach( (category) =>
        {
          if(category.id === currentCategory)
          {
            computedString += category.name + ', '
          }
        })
      })
      computedString = computedString.slice(0, -2);
      return computedString
    }
  },
    components: {
      AppFilter,
      AppNews,
      AppPageTitle,
      OtherPosts
    },
    asyncData({ route }) {
      return axios.get(`http://walter.hotelsnjesko.ba/wp-json/wp/v2/posts/${route.params.id}`).then((response) => {
        return { page: response.data }
      }).catch((error) => {
        console.log(error)
      });
    },
    methods: {
      goToPost () {
        this.$router.push({ path: 'services' })
      },
      getUsers() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/users').then((response) => {
          this.users = response.data
        }).catch((error) => {
          console.log(error);
        });
      },
      getCategories() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/categories').then((response) => {
          this.categories = response.data
        }).catch((error) => {
          console.log(error);
        });
      },
      getItems() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/posts?_embed').then((response) => {
          this.items = response.data
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    mounted() {
      this.getUsers()
      this.getCategories()
      this.getItems()
    }
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
  .img-container-bottom
  {
    max-height: 500px;
    .img-bottom {
      width: 100%;
    }
  }
  .post-content
  {
    display: flex;
    flex-direction: row;
    .post-left
    {
      width: 70%;
      padding: 0 2% 0 2%;
      .header-left
      {
        font-weight: 800;
      }
    }
    .post-right
    {
      margin: 0 3% 0 3%;
      width: 30%;
      .year {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .current-year {
          font-size: 1.2em;
          font-weight: bold;
        }
        margin: 0 0 1.5em 0;
        padding-bottom: 1em;
        border-width: 0 0 4px 0;
        border-style: solid;
        -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #c1c8d1 100%);
        -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #c1c8d1 100%);
        border-image: linear-gradient(45deg, #405dce 0%, #c1c8d1 100%);
        border-image-slice: 1;
      }
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
  .fa-chevron-right
  {
    background: #ffffff;
    padding: 0;
    font-size: 1.2em;
    width: 30px;
  }
</style>
