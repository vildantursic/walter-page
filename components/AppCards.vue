<template>
  <div class="card animated fadeIn" v-scroll-reveal.reset>
    <div class="image">
      <img src="~/static/images/arch.jpg" alt="">
    </div>
    <div class="info">
      <h1 class="title">{{item.title.rendered}}</h1>
      <div class="about">
        <p>Author</p>
        <p>The 5-star Hyatt Regency Zadar Maraska is the first hotel in Croatia under the Hyatt brand and is set to open in the spring of 2019...</p>
        <p class="italic">In Collaboration with D&Z d.o.o. Zadar</p>
      </div>
    </div>

    <div class="border"></div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    components: {
    }
  }
</script>

<style lang="scss" scoped>
.card{
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  .image {
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2em;

    img {
      width: 100%;
    }
  }

  .info {
    padding: 0 2em 1em 2em;
  }

  .border {
    width: 100%;
    height: 3px;
    background-image: linear-gradient(90deg, #0093c8 0%, #faaf40 100%);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;  /* <- here it is */
  }
}
</style>
