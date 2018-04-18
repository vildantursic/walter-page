<template>
  <div class="card animated fadeIn" v-scroll-reveal.reset>
    <div class="card-img">
      <img src="~/static/images/arch.jpg" alt="">
    </div>
    <div class="info-card">
      <h1 class="title">Hyatt Regency Maraska Zadar Hotel</h1>
      <div class="about">
        <p>Author</p>
        <p>The 5-star Hyatt Regency Zadar Maraska is the first hotel in Croatia under the Hyatt brand and is set to open in the spring of 2019...</p>
        <p class="italic">In Collaboration with D&Z d.o.o. Zadar</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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

  border-width: 0 0 8px 0;
  border-style: solid;
  -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
  -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
  border-image: linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
  border-image-slice: 1;
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

 .info-card {
   height: 60%;

   .title{
     margin-bottom: 0;
     font-size: 1.5rem;
   }
   .about{
     color: grey;
     font-size: 0.875rem;
   }
   .italic{
     font-style: italic;
   }
 }

</style>
