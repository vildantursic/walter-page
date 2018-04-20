<template>
  <section>
    <header>
      <img class="logo" src="~/static/images/walter-logo.png" alt="">
      <div class="navigation-bar">
        <ul>
          <li><router-link :to="{name: 'index'}">Services</router-link></li>
          <li><router-link :to="{name: 'cases'}">Cases</router-link></li>
          <li><router-link :to="{name: 'about'}">About us</router-link></li>
          <li><router-link :to="{name: 'index'}">Contact us</router-link></li>
          <li><router-link :to="{name: 'careers'}">Careers</router-link></li>
          <li><router-link :to="{name: 'news'}">News</router-link></li>
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
  @import "../assets/styles/variables";

  header {
    width: 100%;
    background-color: rgba(#47494e, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
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

  .nuxt-link-exact-active {
    color: $main-color;
  }

</style>
