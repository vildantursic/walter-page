<template>
  <section>
    <header>
      <nuxt-link style="margin-left: 10%;" :to="{name: 'index'}">
        <img class="logo" src="~/static/images/walter-logo.png" alt="">
      </nuxt-link>
      <div class="navigation-bar">
        <ul>
          <li><nuxt-link :to="{name: 'index'}">Services</nuxt-link></li>
          <li><nuxt-link :to="{name: 'cases'}">Cases</nuxt-link></li>
          <li><nuxt-link :to="{name: 'about'}">About us</nuxt-link></li>
          <li><nuxt-link :to="{name: 'careers'}">Careers</nuxt-link></li>
          <li><nuxt-link :to="{name: 'news'}">News</nuxt-link></li>
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
    height: 80px;
    background-color: rgba(#47494e, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    .logo {
      height: 3em;
    }

    .navigation-bar {
      display: flex;
      align-items: center;
      height: 4em;
      margin-right: 10%;

      ul {
        -webkit-padding-start: 10px;
        list-style: none;
        display: flex;
        justify-content: space-around;

        li {

          a {
            text-decoration: none;
            color: #FFFFFF;
            padding: 1em 0.5em;
          }

          .nuxt-link-exact-active {
            color: $main-color;
          }
        }
      }
    }
  }

</style>
