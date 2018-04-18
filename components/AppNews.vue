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
    margin: 1em auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: left;
    min-width: 60%;
    max-width: 80%;
    min-height: 400px;
    min-height: 450px;
    /*margin: 0;*/
    .card-img-container
    {

      .card-img {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .info-card
    {

    }
  }
</style>
