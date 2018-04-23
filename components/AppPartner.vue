<template>
  <div class="card animated fadeIn" v-scroll-reveal.reset>
    <div class="card-img">
      <img src="~/static/images/arch.jpg" alt="">
    </div>
    <div class="info-card">
      <div class="about">
        <p>The 5-star Hyatt Regency Zadar Maraska is the first hotel in Croatia under the Hyatt brand and is set to open in the spring of 2019...</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    components: {
    }
  }
</script>

<style lang="scss" scoped="">
  .card{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 400px;
    overflow: hidden;
  }
  .card-img{
    width: 100%;
    height: 40%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }

</style>
