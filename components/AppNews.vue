<template>
    <div class="card animated fadeIn" data-aos="slide-up">
      <div v-if="item._embedded !== undefined" class="card-img-container">
        <img class="card-img" v-if="item._embedded['wp:featuredmedia'] !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" alt="">
        <img class="no-image" v-if="item._embedded['wp:featuredmedia'] === undefined" src="~/static/images/walter-logo.png" alt="">
      </div>
      <div class="info-card">
        <p class="category">
          <span v-for="(category, index) of item.categories" :key="index"> {{category.name}}<span v-if="index < item.categories.length - 1">,</span></span>
        </p>
        <p class="author">{{item.author.name}}, {{date}}</p>
        <h1 class="title" v-on:click="clickPost()">{{ item.title.rendered | truncate(300)}}</h1>
        <div class="scroll">{{ item.acf.description | truncate(25)}}</div>
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

  export default {
    props: ['item'],
    data() {
      return {
        date: moment(this.item.date).format('MMM YYYY [at] LT')
      }
    },
    components: {},
    methods: {
      clickPost () {
        this.$emit('onPostClicked')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';

  .card {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    height: 400px;
    padding: 2em;
    border-width: 0 0 3px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #0093c8 0%, #faaf40 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #0093c8 0%, #faaf40 100%);
    border-image: linear-gradient(45deg, #0093c8 0%, #faaf40 100%);
    border-image-slice: 1;

    .card-img-container {
      background-color: lightgray;
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
    background: #ffffff;
    color: grey;
  }

  .fab:hover, .fas:hover {
    opacity: 0.7;
  }

  .social {
    position: absolute;
    bottom: 0;
  }

  .scroll {
    height: 200px;
  }

  .no-image {
    width: auto;
  }

  .title {
    cursor: pointer;

    &:hover {
      color: $main-color;
    }
  }
</style>
