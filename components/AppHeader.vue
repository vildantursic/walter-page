<template>
  <section>
    <header>
      <img class="logo" src="~/static/images/walter-logo.png" alt="">
      <div class="navigation-bar">
        <ul>
          <li><nuxt-link to="/">Services</nuxt-link></li>
          <li><nuxt-link to="/cases">Cases</nuxt-link></li>
          <li><nuxt-link to="/about">About us</nuxt-link></li>
          <li><nuxt-link to="/">Contact US</nuxt-link></li>
          <li><nuxt-link to="/careers">Careers</nuxt-link></li>
          <li><nuxt-link to="/news">News</nuxt-link></li>
        </ul>
      </div>
    </header>
  </section>
</template>
<script>

  export default {
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  /*@import "~/assets/styles/mixins";*/
  header {
    width: 100%;
    background-color: rgba(#47494e, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo{
    height: 3em;
    margin-left: 10%;
  }
  .navigation-bar{
    display: flex;
    align-items: center;
    height: 4em;
    margin-right: 10%;
  }
  ul {
    -webkit-padding-start: 10px;
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  li{
  }
  a{
    text-decoration: none;
    color: #FFFFFF;
    padding: 1em 0.5em;
  }

</style>
