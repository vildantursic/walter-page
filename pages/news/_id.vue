<template>
  <section>
    <AppLoading v-if="loading"/>
    <div v-if="!loading">
      <div class="header-news padded-content">
        <h1 class="title" v-html="page.title.rendered"></h1>
        <AppSocial :item="page" :link="$route.path"></AppSocial>
      </div>
      <div class="item animated fadeIn padded-content">
        <div class="img-header">
          <p class="category">
            <span>{{page.categories.map(category => category.name).join(', ')}}</span>
          </p>
          <p class="author">Published: {{date}}</p>
        </div>
        <div v-if="page.acf.gallery_images !== ''" class="img-container">
          <AppSlider v-if="page.acf.gallery_images" :images="page.acf.gallery_images.split(',')" :miniSlider="false"></AppSlider>
        </div>
        <div class="post-content">
          <div class="post-left" v-html="page.content.rendered">
          </div>
          <div class="post-right">
            <div v-if="items[items.findIndex(el => el.id === page.id) + 1]" class="next">
              <span @click="generateNextLink">NEXT ARTICLE <i class="fas fa-chevron-right"></i></span>
            </div>
            <div v-for="item in limitBy(items, 3)" v-bind:key="item.id">
              <OtherPosts :item="item"></OtherPosts>
            </div>
          </div>
        </div>
      </div>
      <div v-if="page.acf.bottom_image !== undefined" class="img-container-bottom">
        <img :src="page.acf.bottom_image">
      </div>
    </div>
  </section>
</template>

<script>
  import AppLoading from '~/components/AppLoading'
  import AppFilter from '~/components/AppFilter'
  import AppNews from '~/components/AppNews'
  import AppPageTitle from '~/components/AppPageTitle'
  import OtherPosts from '~/components/OtherPosts'
  import AppSlider from '~/components/AppSlider'
  import AppSocial from '~/components/AppSocial'
  import { find } from 'lodash'
  import moment from 'moment'

  export default {
    head () {
      return {
        title: `${this.page.title ? this.page.title.rendered : 'Article'} - Walter`,
        meta: [
          { hid: 'description', name: 'description', content: this.page.acf.title },
          { hid: 'image', name: 'image', content: this.page._embedded ? this.page._embedded['wp:featuredmedia'][0].source_url : './walter.png'},

          { hid: 'og:title', property: 'og:title', content: this.page.acf.title  },
          { hid: 'og:description', property: 'og:description', content: this.page.acf.description },
          { hid: 'og:url', property: 'og:url', content: 'http://walter.ba' },
          { hid: 'og:image', property: 'og:image', content: this.page._embedded ? this.page._embedded['wp:featuredmedia'][0].source_url : './walter.png' },
          { hid: 'og:site_name', property: 'og:site_name', content: 'Walter' },
        ]
      }
    },
    components: {
      AppLoading,
      AppFilter,
      AppNews,
      AppPageTitle,
      OtherPosts,
      AppSlider,
      AppSocial
    },
    data() {
      return {
        loading: true,
        authors: [],
        categories: [],
        items: [],
        page: {
          acf: {}
        },
      }
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    created() {
      this.getArticle();
      this.getItems();
    },
    methods: {
      generateNextLink () {
        if (this.items[this.items.findIndex(el => el.id === this.page.id) + 1]) {
          const link = `/news/${this.items[this.items.findIndex(el => el.id === this.page.id) + 1].id}`
          this.$router.push({ path: link })
        }
      },
      goToPost (id) {
        this.$router.push({ path: `/news/${id}`})
      },
      async getArticle() {
        this.page = await this.$axios.$get(`posts/${this.$route.params.id}?_embed`)
        this.date = moment(this.page.date).format('DD-MM-YYYY');
        this.loading = false;
      },
      async getItems() {
        this.items = await this.$axios.$get('https://walter.ba/cms/wp-json/wp/v2/posts?_embed')
        await this.fillUser()
        await this.fillCategories()
      },
      async fillUser() {
        this.authors = await this.$axios.$get('https://walter.ba/cms/wp-json/wp/v2/users')
        this.items.map((item) => {
          if (find(this.authors, { id: item.author })) {
            item.author = find(this.authors, { id: item.author })
          }
          return item
        })
      },
      async fillCategories() {
        this.categories = await this.$axios.$get('categories')
        this.page.categories = this.page.categories.map(cat => {
          return find(this.categories, (o) => o.id === cat)
        })
        this.items.map((item) => {
          const cats = []
          this.categories.forEach(cat => {
            if (find(item.categories, (o) => o === cat.id)) {
              cats.push(cat)
            }
          })
          item.categories = cats
          return item
        })
      }
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
      flex-direction: column-reverse;
    }

    .title {
      font-size: 3em;
      font-weight: bold;
      @include screen-size('xl') {
        font-size: 2.5em;
      }
      @include screen-size('l') {
        font-size: 2.5em;
      }
      @include screen-size('m') {
        font-size: 2em;
      }
      @include screen-size('s') {
        font-size: 1.5em;
      }
      h1{
        color: $dark-grey!important;
      }
    }

    .social {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @include screen-size('xs') {
        padding-top: 10px
      }
    }
  }
  .img-header {

    .category {
      margin-bottom: 20px;
      font-size: 1.3em;
      font-weight: 700;
      color: $main-color;
      letter-spacing: 2px;
    }
    .author {
      margin: 0;
      font-weight: 500;
      opacity: 0.8;
      font-size: 1.2em;
      @include screen-size('xl') {
        font-size: 1em;
      }
      @include screen-size('l') {
        font-size: 1em;
      }
      @include screen-size('m') {
        font-size: 0.9em;
      }
      @include screen-size('s') {
        font-size: 0.9em;
      }
    }
  }

  .img-container {
    width: 100%;
    height: auto;
    margin: 1em 0;
  }
  .img-container-bottom {
    max-height: 600px;

    img {
      width: 100%;
    }
  }
  .img-container-bottom
  {
    display: flex;
    max-height: 500px;

    .img-bottom {
      width: 100%;
    }
  }
  .post-content {
    display: flex;
    flex-direction: row;

    @include screen-size('xs') {
      flex-direction: column;
    }

    .post-left {
      line-height: 1.8;
      width: 70%;
      padding: 0 0% 2% 0%;

      @include screen-size('xs') {
        width: 100%;
        line-height: 1.5;
      }

      .header-left {
        font-weight: 800;
      }
    }
    .post-right {
      margin: 0 3%;
      width: 30%;

      @include screen-size('xs') {
        width: 100%;
      }

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
