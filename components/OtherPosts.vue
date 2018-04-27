<template>
  <div class="other-news">
    <p class="category">{{computedCategories}}</p>
    <p class="author">{{computedAuthor}}</p>
    <h1 class="title" v-on:click="clickPost()">{{title}}</h1>
  </div>
</template>
<script>
  import moment from 'moment'
  import axios from 'axios'

  export default {
    components: {
    },
    data() {
      return {
        users: [],
        categories: [],
        authorOfPost: '',
      }
    },
    props: ['category', 'author', 'title'],
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
          if(this.author === user.id)
          {
            computedAuthor = user.name
          }
        })
        computedString = computedAuthor  + ', '
        date = moment(this.date).format('MMM YYYY [at] LT');
        computedString += date
        return computedString
      },
      computedCategories: function () {
        var computedString = ''
        var currentCategory = {}
        this.category.forEach( (categoryOfItem) =>
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
  @import "../assets/styles/variables";

  .other-news {
    border-width: 0 0 4px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #c1c8d1 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #c1c8d1 100%);
    border-image: linear-gradient(45deg, #405dce 0%, #c1c8d1 100%);
    border-image-slice: 1;
    margin: 0 0 1.5em 0;
    .category
    {
      margin: 0;
      font-size: 1em;
      font-weight: 700;
      color: orange;
      letter-spacing: 2px;
    }
    .author
    {
      margin: 0;
      font-size: 0.8em;
      font-weight: 500;
      color: gray;
    }
    .title {
      cursor: pointer;

      &:hover {
        color: $main-color;
      }
    }
  }
</style>
