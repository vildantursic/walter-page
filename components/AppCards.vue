<template>
  <div class="card animated fadeIn" data-aos="slide-up">
    <div class="image">
      <img v-if="item._embedded !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" alt="">

      <img class="no-image" v-if="!item._embedded === undefined" src="~/static/images/walter-logo.png" alt="">
    </div>
    <div class="info">
      <h1 class="title" @click="showCase(item)">{{item.title.rendered | truncate(25)}}</h1>
      <p v-if="item.author">{{item.author}}</p>
      <div class="content">{{item.acf.description | truncate(250)}}</div>
      <!--<p v-if="item.acf.customers" class="italic">In Collaboration with <span v-for="(customer, index) of item.acf.customers" :key="index">{{customer.post_title}}</span></p>-->
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
    display: flex;
    flex-direction: column;
    max-height: 500px;
    overflow: hidden;

    .image {
      height: 200px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
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

      .title {
        cursor: pointer;

        &:hover {
          color: $main-color;
        }
      }

      .content {
        height: 125px;
        text-overflow: ellipsis;
        overflow: hidden;
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
