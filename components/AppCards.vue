<template>
  <div class="card animated fadeIn" data-aos="slide-up">
    <div v-if="item._embedded !== undefined" class="image" @click="showCase(item)">
      <img v-if="item._embedded['wp:featuredmedia'] !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">
      <img class="no-image" v-if="item._embedded['wp:featuredmedia'] === undefined" src="~/static/images/walter-logo.png" alt="">
    </div>
    <div class="info">
      <h1 class="title" @click="showCase(item)">{{item.title.rendered | truncate(30)}}</h1>
      <i class="clients" v-for="(customer, index) of item.acf.customers" :key="index">{{customer.post_title}}<span v-if="index < item.acf.customers.length - 1"></span></i>
      <div class="content">{{item.acf.description | truncate(30 * 4)}}</div>
      <i class="partner" v-if="item.acf.partners">In Collaboration with <span v-for="(partner, index) of item.acf.partners" :key="index">{{partner.post_title}}</span></i>
    </div>
    <div class="border"></div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    components: {
    },
    methods: {
      showCase(item) {
        this.$emit('onShowCase', item)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .card{
    position: relative;
    display: flex;
    flex-direction: column;
    height: 420px;
    overflow: hidden;

    @include screen-size(xs) {
      height: auto;
    }

    .image {
      height: 200px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 1em 0em 1em;
      cursor: pointer;
      background: $secondary-color;

      img {
        width: 100%;
      }
      .no-image {
        width: auto;
      }
    }

    .info {
      padding: 0 1em 1em 1em;
      height: 200px;

      .title {
        cursor: pointer;
        font-weight: bold;
        margin-bottom: 0;
        margin-top: 15px;
        line-height: 1;
        color: $dark-grey;

        &:hover {
          color: $main-color;
        }
      }

      .clients {
        display: inline-block;
        margin: 10px 0 0 0;
        opacity: 0.8;
        font-size: 0.8em;
        font-style: normal;
      }

      .content {
        height: 90px;
        overflow: hidden;
        opacity: 0.8;
        padding-top: 15px;
        font-size: 0.9em;
      }

      .partner {
        position: absolute;
        bottom: 30px;
        font-size: 0.8em;
      }
    }

    .border {
      width: 100%;
      height: 3px;
      background-size: cover;
      background: linear-gradient(90deg, #0093c8 0%, #faaf40 100%) fixed center;
    }
  }
</style>
