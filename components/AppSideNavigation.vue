<template>
  <div>
    <ul v-if="links.length !== 0" class="desktop">
      <li v-for="(link, index) of links" :key="index">
        <nuxt-link :to="{ path: '/services/' + link.id }" v-html="link.title.rendered"></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['links']
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  ul {
    list-style: none;
    width: 300px;

    li {
      margin: 15px 0;

      a {
        text-decoration: none;
        color: #FFFFFF;
        padding: 1em 0.5em;
      }

      .nuxt-link-exact-active {
        font-size: 2.5em;
        padding: 0;
        font-weight: bolder;
      }
    }
  }
</style>
