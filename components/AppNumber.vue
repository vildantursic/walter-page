<template>
  <div class="card animated fadeIn" data-aos="fade">
    <h1 class="number" data-aos="fade-down">{{number > 1000000 ? Math.abs(Number(number)) / 1.0e+6 + "M" : number}} +</h1>
    <div class="border"></div>
    <h1 class="info" data-aos="fade-up">{{text}}</h1>
  </div>
</template>

<script>
  export default {
    props: ['number', 'text'],
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  .card{
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .number {
      font-size: 5em;
      margin: 10px 0;
    }

    .info {
      font-size: 1.5em;
      opacity: 0.5;
      margin: 10px 0;
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
