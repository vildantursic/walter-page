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
  import axios from 'axios'

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
      getCase() {
        axios.get(`https://walter.ba/cms/wp-json/wp/v2/cases/${this.$route.params.id}?_embed`).then((response) => {
          this.page = response.data;
          this.loading = false;
        }).catch((error) => {
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
