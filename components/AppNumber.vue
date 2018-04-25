<template>
  <div class="card animated fadeIn" data-aos="slide-up">
    <h1 class="number">1200 +</h1>
    <div class="border"></div>
    <h1 class="info">Revit families</h1>
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
    overflow: hidden;

    .number {
      font-size: 5em;
      margin: 10px 0;
    }

    .info {
      font-size: 2em;
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
