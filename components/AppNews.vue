<template>
    <div class="card">
      <div class="card-img-container">
        <img class="card-img" src="~/static/images/arch-2.jpg" alt="">
      </div>
      <div class="info-card">
        <h1 class="title">Hyatt Regency Maraska Zadar Hotel</h1>
        <p>The 5-star Hyatt Regency Zadar Maraska is the first hotel in Croatia under the Hyatt brand and is set to open in the spring of 2019...</p>
        <p class="italic">In Collaboration with D&Z d.o.o. Zadar</p>
      </div>
    </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang="scss">
  .card{
    overflow: hidden;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 400px;
    padding-bottom: 2em;
    border-width: 0 0 2px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
    border-image: linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
    border-image-slice: 1;
    .card-img-container
    {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
      .card-img {
        height: 100%;
      }
    }
    .info-card
    {
      width: 40%;
    }
  }
</style>
