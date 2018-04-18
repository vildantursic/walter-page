<template>
  <section>
    <header>
      <img class="logo" src="~/assets/images/walter-logo.png" alt="">
      <div class="navigation-bar">
        <ul>
          <li><a href="">Services</a></li>
          <li><a href="">Cases</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">News</a></li>
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
