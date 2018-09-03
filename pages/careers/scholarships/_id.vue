<template>
  <section>
    <AppLoading v-if="loading"/>
    <div v-if="!loading">
      <div class="header-news padded-content">
        <h1 class="title" v-html="page.title.rendered"></h1>
        <AppSocial :item="page" :link="$route.path"></AppSocial>
      </div>
      <div class="item animated fadeIn padded-content">
        <div class="post-content">
          <div class="post-left" v-html="page.content.rendered"></div>
        </div>
        <AppContactForm :contactPerson="contactPerson" :subject="subject" :uploadFiles="uploadFiles"></AppContactForm>
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
  import AppContactForm from '~/components/AppContactForm'
  import { find } from 'lodash'
  import moment from 'moment'

  export default {
    head () {
      return {
        title: `${this.page.title ? this.page.title.rendered : 'Scholarship'} - Walter`,
        meta: [
          { hid: 'description', name: 'description', content: this.page.acf.title },
          { hid: 'image', name: 'image', content: this.page._embedded ? this.page._embedded['wp:featuredmedia'][0].source_url : './walter.png'},

          { hid: 'og:title', property: 'og:title', content: this.page.acf.title  },
          { hid: 'og:description', property: 'og:description', content: this.page.acf.description },
          { hid: 'og:url', property: 'og:url', content: `https://walter.surge.sh/scholarships/${this.page.id}` },
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
      AppSocial,
      AppContactForm
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
        contactPerson: 'aida.omanovic@walter.ba',
        subject: 'Scholarships',
        uploadFiles: 'CV, transcript of grades, copy of student ID verifying the last registered semester'
      }
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    created() {
      this.getScholarship();
      this.getItems();
    },
    methods: {
      goToPost (id) {
        this.$router.push({ path: `/news/${id}`})
      },
      async getItems() {
        this.items = await this.$axios.$get('scholarships?_embed')
      },
      async getScholarship() {
        this.page = await this.$axios.$get(`https://walter.ba/cms/wp-json/wp/v2/scholarships/${this.$route.params.id}?_embed`)
        this.date = moment(this.page.date).format('DD-MM-YYYY');
        this.subject = `Scholarships - ${this.page.title.rendered}`;
        this.loading = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/mixins";
  @import "../../../assets/styles/variables";

  .item {
  }
  .header-news {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @include screen-size('s')
    {
      flex-direction: column;
    }
    @include screen-size('xs')
    {
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
      padding: 0 0 2% 0;
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
