<template>
  <div class="card animated fadeIn" data-aos="fade">
    <nuxt-link class="nav-link card-img-container" :to="`/careers/academy/${item.id}`">
      <div v-if="item._embedded !== undefined">
        <img v-if="item._embedded['wp:featuredmedia'] !== undefined"
             :src="item._embedded['wp:featuredmedia'][0].source_url"
             :alt="item._embedded['wp:featuredmedia'][0].alt_text">
        <img class="no-image" v-if="item._embedded['wp:featuredmedia'] === undefined"
             src="~/static/images/walter-logo.png" alt="">
      </div>
    </nuxt-link>
    <nuxt-link class="nav-link" :to="`/careers/academy/${item.id}`">
      <h1 class="title" v-html="item.title.rendered"></h1>
    </nuxt-link>
    <div class="content">{{item.acf.description | truncate(35 * 3)}}</div>
    <div class="published"><span>Deadline: {{deadline}}</span></div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['item'],
    data() {
      return {
        deadline: moment(this.item.acf.deadline ? this.item.acf.deadline : this.item.date).format('DD-MM-YYYY')
      }
    },
    components: {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';
  @import '../assets/styles/mixins';

  .card {
    display: flex;
    flex-direction: column;
    min-height: 450px;
    overflow: hidden;
    border-width: 0 0 3px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #0093c8 0%, #faaf40 100%) 1;
    -webkit-border-image: -webkit-linear-gradient(45deg, #0093c8 0%, #faaf40 100%) 1;
    border-image: linear-gradient(45deg, #0093c8 0%, #faaf40 100%) 1;

    .card-img-container {
      min-height: 200px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      background: $secondary-color;

      img {
        width: 100%;
      }
      .no-image {
        width: 30%;
      }
    }

    .title {
      font-weight: 600;
      font-size: 1.5em;
    }
    .author {
      font-size: 1em;
      font-weight: 600;
    }

    .published {
      font-size: 0.8em;
      font-weight: 500;
      color: gray;
      height: 50px;
      display: flex;
      align-items: center;
    }
  }
</style>
