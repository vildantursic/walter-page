<template>
  <section>
    <AppLoading v-if="loading"/>
    <div v-if="!loading">
      <AppSingle :item="page" @onCloseCase="goBack()"/>
    </div>
  </section>
</template>

<script>
  import AppLoading from '~/components/AppLoading'
  import AppSingle from "~/components/AppSingle";

  export default {
    head () {
      return {
        title: `${this.page.title ? this.page.title.rendered : 'Case'} - Walter`,
        meta: [
          { hid: 'description', name: 'description', content: this.page.acf.title },
          { hid: 'image', name: 'image', content: this.page._embedded ? this.page._embedded['wp:featuredmedia'][0].source_url : './walter.png'},

          { hid: 'og:title', property: 'og:title', content: this.page.acf.title  },
          { hid: 'og:description', property: 'og:description', content: this.page.acf.description },
          { hid: 'og:url', property: 'og:url', content: `https://walter.surge.sh/cases/${this.page.id}` },
          { hid: 'og:image', property: 'og:image', content: this.page._embedded ? this.page._embedded['wp:featuredmedia'][0].source_url : './walter.png' },
          { hid: 'og:site_name', property: 'og:site_name', content: 'Walter' },
        ]
      }
    },
    components: {
      AppLoading,
      AppSingle
    },
    data() {
      return {
        loading: true,
        page: {
          acf: {}
        }
      }
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    created() {
      this.getCase();
    },
    methods: {
      goBack() {
        this.$router.push('/cases')
      },
      async getCase() {
        this.page = await this.$axios.$get(`cases/${this.$route.params.id}?_embed`)
        this.loading = false;
      }
    }
  }
</script>
