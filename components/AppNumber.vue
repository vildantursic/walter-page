<template>
  <div class="card animated fadeIn" data-aos="fade">
    <h1 class="number" data-aos="fade-down">{{nFormatter(number, 0)}} +</h1>
    <div class="border"></div>
    <h1 class="info" data-aos="fade-up">{{text}}</h1>
  </div>
</template>

<script>
  export default {
    props: ['number', 'text'],
    components: {
    },
    methods: {
      nFormatter(num, digits) {
        let si = [
          { value: 1, symbol: "" },
          { value: 1E3, symbol: "k" },
          { value: 1E6, symbol: "M" },
          { value: 1E9, symbol: "G" },
          { value: 1E12, symbol: "T" }
        ];
        let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        let i;
        for (i = si.length - 1; i > 0; i--) {
          if (num >= si[i].value) {
            break;
          }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";
  .card{
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .number {
      font-size: 4.5em;
      margin: 10px 0;
      /*opacity: 0.8;*/
      font-weight: bolder;
      color: $dark-grey;
      @include screen-size('xl') {
        font-size: 4em;
      }
      @include screen-size('l') {
        font-size: 3.5em;
      }
      @include screen-size('m') {
        font-size: 3em;
      }
    }

    .info {
      font-size: 1.3em;
      opacity: 0.5;
      margin: 10px 0;
      @include screen-size('m') {
        font-size: 1em;
      }
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
