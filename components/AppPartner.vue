<template>
  <div class="card animated fadeIn" v-scroll-reveal.reset>
    <div class="card-img">
      <img src="~/static/images/Bimobject-log.png" alt="">
    </div>
    <div class="info-card">
      <div class="about">
        <p>With over 300 skilled employees and 100,000 daily users across Northern Europe,
          we provide our clients with expert guidance covering everything from 3D modelling and simulation to Product Lifecycle Management,
          Building Information Modelling and Facility Management.
          Many of our solutions follow the principles of Lean,
          and the bene?ts include lower development and production costs,
          a reduction in materials used and shorter time to market,
          not to mention leaving more room for creativity and better end results.</p>
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
    max-height: 400px;
    overflow: hidden;
    p{
      font-size: 0.875rem;
    }
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
