<template>
  <section>
    <div class="card">
      <img class="card-img" src="~/assets/images/arch.jpg" alt="">
      <div class="info-card">
          <h1 class="title">Hyatt Regency Maraska Zadar Hotel</h1>
        </div>
        <div class="about">
          <p>The 5-star Hyatt Regency Zadar Maraska is the first hotel in Croatia under the Hyatt brand and is set to open in the spring of 2019...</p>
            <p class="italic">In Collaboration with D&Z d.o.o. Zadar</p>
        </div>
      </div>
  </section>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style scoped="">
.card{
  margin: 1em;
  position: absolute;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 20em;
  /*margin: 0;*/
}
 .card-img{
   position: relative;
   display: block;
   width: 100%;
 }
  .title{
    margin-bottom: 0;
  }
  .about{
    color: grey;
  }
  .italic{
    font-style: italic;
  }
</style>
