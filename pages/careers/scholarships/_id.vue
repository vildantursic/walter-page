<template>
  <section>
    <div class="header-news padded-content">
      <h1 class="title" v-html="page.title.rendered"></h1>
      <AppSocial :item="page" :link="$route.path"></AppSocial>
    </div>
    <div class="item animated fadeIn padded-content">
      <div class="post-content">
        <div class="post-left" v-html="page.content.rendered"></div>
      </div>
      <AppContactForm :contactPerson="contactPerson" :subject="subject"></AppContactForm>
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
  import AppContactForm from '~/components/AppContactForm'
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
        contactPerson: 'aida.omanovic@walter.ba',
        subject: 'Scholarships'
      }
    },
    components: {
      AppFilter,
      AppNews,
      AppPageTitle,
      OtherPosts,
      AppSlider,
      AppSocial,
      AppContactForm
    },
    asyncData({ route }) {
      return axios.get(`http://walter.hotelsnjesko.ba/wp-json/wp/v2/scholarships/${route.params.id}?_embed`).then((response) => {
        return {
          page: response.data,
          date: moment(response.data.date).format('MMM YYYY [at] LT'),
          subject: `Scholarships - ${response.data.title.rendered}`
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
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/scholarships?_embed').then((response) => {
          this.items = response.data
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