<template>
  <section>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/services').then(function (response) {
        return { items: response.data }
      }).catch(function (error) {
        console.log(error);
      });
    },
  }
</script>

<style lang="scss" scoped>
</style>
