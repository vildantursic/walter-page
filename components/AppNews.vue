<template>
    <div class="card" v-on:click="clickPost()">
      <div class="card-img-container">
        <img class="card-img" v-if="item._embedded !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" alt="">
        <img class="no-image" v-if="item._embedded === undefined" src="~/static/images/walter-logo.png" alt="">
      </div>
      <div class="info-card">
        <p class="category">{{computedCategories}}</p>
        <p class="author">{{computedAuthor}}</p>
        <h1 class="title">{{ item.title.rendered | truncate(25)}}</h1>
        <div>{{item.acf.description | truncate(250)}}</div>
        <div class="social">
          <!-- Add font awesome icons -->
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fas fa-envelope"></i></a>
          <a href="#"><i class="fas fa-paperclip"></i></a>
        </div>
      </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import axios from 'axios'

  export default {
    props: ['item'],
    components: {},
    data() {
      return {
        users: [],
        categories: [],
        author: '',
      }
    },
    created () {
      this.getUsers()
      this.getCategories()
    },
    computed: {
      // a computed getter
      computedAuthor: function () {
        var computedString = ''
        var computedAuthor = ''
        var date = ''
        this.users.forEach( (user) =>
        {
          if(this.item.author === user.id)
          {
            computedAuthor = user.name
          }
        })
        computedString = computedAuthor  + ', '
        date = moment(this.item.date).format('MMM YYYY [at] LT');
        computedString += date
        return computedString
      },
      computedCategories: function () {
        var computedString = ''
        var currentCategory = {}
        this.item.categories.forEach( (categoryOfItem) =>
        {
          currentCategory = categoryOfItem
          this.categories.forEach( (category) =>
          {
            console.log(currentCategory)
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
    methods: {
      clickPost () {
        this.$emit('onPostClicked')
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';

  .card{
    overflow: hidden;
    display: flex;
    flex-direction: row;
    height: 400px;
    padding-bottom: 2em;
    border-width: 0 0 3px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #0093c8 0%, #faaf40 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #0093c8 0%, #faaf40 100%);
    border-image: linear-gradient(45deg, #0093c8 0%, #faaf40 100%);
    border-image-slice: 1;

    .card-img-container {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
      .card-img {
        height: 100%;
      }
    }
    .info-card {
      position: relative;
      width: 40%;
      padding: 1em 1em;
      .category {
        margin: 0;
        font-size: 1em;
        font-weight: 700;
        color: $main-color;
        letter-spacing: 2px;
      }
      .author {
        margin: 0;
        font-size: 0.8em;
        font-weight: 500;
        color: gray;
      }
    }
  }
  .fab, .fas{
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
    color: grey;
  }
  .fa-twitter {
    background: #ffffff;
    color: grey;
  }
  .fa-google {
    background: #ffffff;
    color: grey;
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
  .social
  {
    position: absolute;
    bottom: 0;
  }
</style>
