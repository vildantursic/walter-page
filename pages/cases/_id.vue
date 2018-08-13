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
