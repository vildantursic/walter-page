<template>
  <AppSingle :item="page" @onCloseCase="goBack()"/>
</template>

<script>
  import AppSingle from "~/components/AppSingle";
  import axios from 'axios'
  import { parseData } from '~/plugins/parse'

  export default {
    data() {
      return {
        page: {
          acf: {}
        }
      }
    },
    components: {
      AppSingle
    },
    async asyncData({ route }) {
      return axios.get(`http://walter.hotelsnjesko.ba/wp-json/wp/v2/cases/${route.params.id}?_embed`).then((response) => {
        return { page: response.data }
      }).catch((error) => {
        console.log(error);
      });
    },
    methods: {
      goBack() {
        this.$router.push('/cases')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
