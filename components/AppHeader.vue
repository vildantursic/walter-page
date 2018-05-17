<template>
  <section>
    <header>
      <nuxt-link style="margin-left: 10%;" :to="{name: 'index'}">
        <img class="logo" src="~/static/images/walter-logo.png" alt="">
      </nuxt-link>
      <div class="mobile-navigation-bar mobile">
        <i class="fas fa-bars open" @click="showMenu = !showMenu"></i>

        <div class="mobile-nav" :class="{show: showMenu}">
          <i class="fas fa-times close" @click="showMenu = !showMenu"></i>
          <ul>
            <li @click="showMenu = !showMenu"><nuxt-link :to="{ name: 'index' }">Services</nuxt-link></li>
            <li @click="showMenu = !showMenu"><nuxt-link :to="{ name: 'cases' }">Cases</nuxt-link></li>
            <li @click="showMenu = !showMenu"><nuxt-link :to="{ name: 'about' }">About us</nuxt-link></li>
            <li @click="showMenu = !showMenu"><nuxt-link :to="{ name: 'careers' }">Open positions</nuxt-link></li>
            <li @click="showMenu = !showMenu"><nuxt-link :to="{ name: 'academy' }">BIM Academy</nuxt-link></li>
            <li @click="showMenu = !showMenu"><nuxt-link :to="{ name: 'scholarships' }">Scholarships</nuxt-link></li>
            <li @click="showMenu = !showMenu"><nuxt-link :to="{ name: 'news' }">News</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="navigation-bar desktop">
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
          <li><a href="about#contact">Contact us</a></li>
        </ul>
      </div>
    </header>
  </section>
</template>
<script>

  export default {
    data() {
      return {
        upHere:false,
        showMenu: false
      }
    },
    components: {
    },
    methods: {
      openDropdown()
      {
          console.log('ok')
        document.getElementById('menu-drop').setAttribute('visibility','visible')
      },
      goToPage()
      {
        window.location.href= 'http://localhost:3000/about#contact';
        console.log(this.$parent.$refs[6])
        this.$refs[6].click()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .show {
    right: 0 !important;
  }

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

    .mobile-navigation-bar {
      display: flex;
      align-items: center;
      height: 4em;
      margin-right: 10%;

      .open {
        color: white;
        font-size: 1.6em;
      }

      .mobile-nav {
        transition: ease .3s;
        position: fixed;
        top: 0;
        right: -100vw;
        width: 100vw;
        height: 100vh;
        background: $dark-color;

        .close {
          color: white;
          font-size: 1.6em;
          margin: 30px 0 0 30px;
        }

        ul {
          height: 80vh;
          -webkit-padding-start: 10px;
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;

          li {

            a {
              font-size: 2em;
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
