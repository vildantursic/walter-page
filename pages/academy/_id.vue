<template>
  <section>
    <!--<div v-if="item._embedded !== undefined" class="card-img-container">-->
      <!--<img v-if="item._embedded['wp:featuredmedia'] !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">-->
      <!--<img class="no-image" v-if="item._embedded['wp:featuredmedia'] === undefined" src="~/static/images/walter-logo.png" alt="">-->
    <!--</div>-->
    <div class="header-news padded-content">
      <h1 class="title">{{page.title.rendered}}</h1>
      <AppSocial :item="page" :link="$route.path"></AppSocial>
    </div>
    <div class="item animated fadeIn padded-content">
      <div class="post-content">
        <div class="post-left" v-html="page.content.rendered"></div>
      </div>
    </div>
  </section>
</template>

<script>
  import AppFilter from '~/components/AppFilter'
  import AppNews from '~/components/AppNews'
  import AppPageTitle from '~/components/AppPageTitle'
  import OtherPosts from '~/components/OtherPosts'
  import AppSlider from '~/components/AppSlider'
  import AppSocial from '~/components/AppSocial'
  import axios from 'axios'
  import { find } from 'lodash'
  import moment from 'moment'
  import { parseData } from '~/plugins/parse'

  export default {
    data() {
      return {
        authors: [],
        categories: [],
        items: [],
        page: {
          acf: {}
        },
      }
    },
    components: {
      AppFilter,
      AppNews,
      AppPageTitle,
      OtherPosts,
      AppSlider,
      AppSocial
    },
    asyncData({ route }) {
      return axios.get(`http://walter.hotelsnjesko.ba/wp-json/wp/v2/bim_academy_posts/${route.params.id}?_embed`).then((response) => {
        return {
          page: parseData(response.data),
          date: moment(response.data.date).format('MMM YYYY [at] LT')
        }
      }).catch((error) => {
        console.log(error)
      });
    },
    methods: {
      goToPost (id) {
        this.$router.push({ path: `/news/${id}`})
      },
      getItems() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/bim_academy_posts?_embed').then((response) => {
          this.items = parseData(response.data)
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    mounted() {
      this.getItems()
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";
  @import "../../assets/styles/variables";

  .item {
  }
  .header-news {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @include screen-size('s') {
      flex-direction: column;
    }
    @include screen-size('xs') {
      flex-direction: column;
    }

    .title {
      font-size: 3em;
      font-weight: bold;
    }

    .social {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .img-header {

    .category {
      margin: 0;
      font-size: 1.3em;
      font-weight: 700;
      color: $main-color;
      letter-spacing: 2px;
    }
    .author {
      margin: 0;
      font-weight: 500;
      opacity: 0.8;
    }
  }

  .img-container {
    width: 100%;
    height: 500px;
    margin: 1em 0;
  }
  .img-container-bottom {
    max-height: 500px;

    img {
      width: 100%;
    }
  }
  .post-content {
    display: flex;
    flex-direction: row;

    .post-left {
      width: 70%;
      padding: 0 2% 2% 2%;
      @include screen-size('s')
      {
        width: 100%;
      }
      @include screen-size('m')
      {
        width: 100%;
      }
      @include screen-size('xs')
      {
        width: 100%;
      }
      .header-left {
        font-weight: 800;
      }

      .header-left {
        font-weight: 800;
      }
    }
    .post-right {
      margin: 0 3%;
      width: 30%;

      .next {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 0 0 1em 0;
        padding-bottom: 1em;
        border-width: 0 0 4px 0;
        border-style: solid;
        border-image: linear-gradient(90deg, #0093c8 0%, #faaf40 100%) 1;
        font-size: 1.5em;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          color: $main-color !important;
        }
      }
    }
  }
</style>
