<template>
  <section>
    <header>
      <nuxt-link style="margin-left: 10%;" :to="{name: 'index'}">
        <img class="logo" src="~/static/images/walter-logo.png" alt="">
      </nuxt-link>
      <div class="navigation-bar">
        <ul>
          <li><nuxt-link :to="{ name: 'index' }">Services</nuxt-link></li>
          <li><nuxt-link :to="{ name: 'cases' }">Cases</nuxt-link></li>
          <li><nuxt-link :to="{ name: 'about' }">About us</nuxt-link></li>
          <li @mouseover="upHere = true" @mouseleave="upHere = false">
            <nuxt-link :to="{ name: 'careers' }">Careers</nuxt-link>
            <ul class="dropdown-menu" id="menu-drop" v-show="upHere">
              <li><nuxt-link :to="{ name: 'careers' }">Open positions</nuxt-link></li>
              <li><nuxt-link :to="{ name: 'academy' }">BIM Academy</nuxt-link></li>
              <li><nuxt-link :to="{ name: 'scholarships' }">Scholarships</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link :to="{ name: 'news' }">News</nuxt-link></li>
        </ul>
      </div>
    </header>
  </section>
</template>
<script>

  export default {
    data() {
      return {
          upHere:false
      }
    },
    components: {
    },
    methods: {
      openDropdown()
      {
          console.log('ok')
        document.getElementById('menu-drop').setAttribute('visibility','visible')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  header {
    width: 100%;
    height: 80px;
    background-color: rgba($dark-color, 0.7);
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

      @include hide-mobile();

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
      .dropdown-menu {
        list-style: none;
        justify-content: space-around;
        position: absolute;
        top: 60px;
        display: flex;
        flex-direction: column;

        li {
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: #FFFFFF;
          padding: 1em 1em;
          background-color:#47494e;
        }
      }
    }
  }

</style>
