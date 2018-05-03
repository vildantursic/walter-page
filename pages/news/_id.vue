<template>
  <section>
    <div class="header-news padded-content">
      <h1 class="title">{{page.title.rendered}}</h1>
      <AppSocial></AppSocial>
    </div>
    <div class="item animated fadeIn padded-content">
      <div class="img-header">
        <p class="category">
          <span v-for="(category, index) of page.categories" :key="index"> {{category.name}}<span v-if="index < page.categories.length - 1">,</span></span>
        </p>
        <p class="author" v-if="authors.length !== 0">{{authors[0].name}}, {{date}}</p>
      </div>
      <div v-if="page.acf.gallery_images !== ''" class="img-container">
        <AppSlider v-if="page.acf.gallery_images" :images="page.acf.gallery_images.split(',')" :miniSlider="false"></AppSlider>
      </div>
      <div class="post-content">
        <div class="post-left" v-html="page.content.rendered">
        </div>
        <div class="post-right">
          <div class="next">
            <span >NEXT ARTICLE</span> <span><i class="fas fa-chevron-right"></i></span>
          </div>
          <div v-for="item in items" v-bind:key="item.id">
            <OtherPosts :item="item"></OtherPosts>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page._embedded !== undefined" class="img-container-bottom">
      <img v-if="page._embedded['wp:featuredmedia'] !== undefined" :src="page._embedded['wp:featuredmedia'][0].source_url" :alt="page._embedded['wp:featuredmedia'][0].alt_text">
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
      return axios.get(`http://walter.hotelsnjesko.ba/wp-json/wp/v2/posts/${route.params.id}?_embed`).then((response) => {
        return {
          page: response.data,
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
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/posts?per_page=3&_embed').then((response) => {
          this.items = response.data
          this.fillUser()
          this.fillCategories()
        }).catch((error) => {
          console.log(error);
        });
      },
      fillUser() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/users').then((response) => {
          this.authors = response.data
          this.items.map((item) => {
            if (find(response.data, { id: item.author })) {
              item.author = find(response.data, { id: item.author })
            }
            return item
          })
        }).catch((error) => {
          console.log(error);
        });
      },
      fillCategories() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/categories').then((response) => {
          this.categories = response.data
          this.page.categories = this.page.categories.map(cat => {
            return find(this.categories, (o) => o.id === cat)
          })
          this.items.map((item) => {
            const cats = []
            response.data.forEach(cat => {
              if (find(item.categories, (o) => o === cat.id)) {
                cats.push(cat)
              }
            })
            item.categories = cats
            return item
          })
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
        margin: 0 0 1.5em 0;
        padding-bottom: 1em;
        border-width: 0 0 4px 0;
        border-style: solid;
        border-image: linear-gradient(90deg, #0093c8 0%, #faaf40 100%) 1;
        cursor: pointer;

        span {
          font-size: 1.2em;
          font-weight: bold;
          margin-left: 15px;
        }
      }
    }
  }
</style>
