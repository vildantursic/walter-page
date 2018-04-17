<template>
  <section>
    <header>
      <img class="logo" src="~/assets/images/walter-logo.png" alt="">
      <div class="navigation-bar">
        <ul>
          <li><a href="">Our Team</a></li>
          <li><a href="">Cases</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">Carrier</a></li>
          <li><a href="">Home</a></li>
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

<style>
  /*@import "~/assets/styles/mixins";*/
  header {
    width: 100%;
    background-color: #47494e;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo{
    height: 3em;
  }
  .navigation-bar{
    display: flex;
    align-items: center;
    height: 4em;
  }
  ul {
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
