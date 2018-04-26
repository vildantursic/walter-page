<template>
  <div class="card animated fadeIn" data-aos="slide-up">
    <div class="image">
      <img v-if="item._embedded !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" alt="">

      <img class="no-image" v-if="item._embedded === undefined" src="~/static/images/walter-logo.png" alt="">
    </div>
    <div class="info">
      <h1 class="title" @click="showCase(item)">{{item.title.rendered | truncate(25)}}</h1>
      <h3 class="clients" v-for="(customer, index) of item.acf.customers" :key="index"> {{customer.post_title}}<span v-if="index < item.acf.customers.length - 1">,</span></h3>
      <div class="content">{{item.acf.description | truncate(35 * 3)}}</div>
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

  .card{
    position: relative;
    display: flex;
    flex-direction: column;
    height: 400px;
    overflow: hidden;

    .image {
      height: 200px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      /*padding: 0 1em;*/
      background: #e2e2e2;

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

        &:hover {
          color: $main-color;
        }
      }

      .clients {
        margin: 10px 0;
      }

      .content {
        height: 63px;
        overflow: hidden;
      }

      .partner {
        position: absolute;
        bottom: 10px;
      }
    }

    .border {
      width: 100%;
      height: 3px;
      background-image: linear-gradient(90deg, #0093c8 0%, #faaf40 100%);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    }
  }
</style>
