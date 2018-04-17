<template>
  <section>
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
  </section>
</template>
<script>
  export default {
    components: {
    }
  }
</script>

<style>
  section{
    display: flex;
    align-items: center;
  }
  .logo{
    position: absolute;
    height: 3em;
    padding-left: 10%;
  }
  .navigation-bar{
    display: flex;
    align-items: center;
    height: 4em;
    width: 100%;
    background-color: #47494e;
  }
  ul {
    display: flex;
    /*float: right;*/
  }
  li{
    display: flex;
    justify-content: space-around;
    float: right;
  }
  a{
    text-decoration: none;
    color: #FFFFFF;
    padding: 1em 0.5em;
  }

</style>
