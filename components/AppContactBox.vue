<template>
  <div class="card">
    <div class="image">
      <img src="~/static/images/arch.jpg" alt="">
    </div>
    <div class="info">
      <div class="about">
      </div>
      <div class="about">
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
  }
</style>
