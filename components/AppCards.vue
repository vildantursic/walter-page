<template>
  <div class="card animated fadeIn" data-aos="fade">
    <div class="image">
      <nuxt-link v-if="item._embedded !== undefined" class="nav-link" :to="`/cases/${item.id}`">
        <img v-if="item._embedded ['wp:featuredmedia']!== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">
      </nuxt-link>
      <nuxt-link v-if="item._embedded === undefined" class="nav-link" :to="`/cases/${item.id}`">
        <img class="no-image" src="~/static/images/walter-logo.png" alt="">
      </nuxt-link>
    </div>
    <div class="info">
      <nuxt-link class="nav-link" :to="`/cases/${item.id}`">
        <h1 class="title">{{item.title.rendered | truncate(30)}}</h1>
      </nuxt-link>
      <i class="clients" v-for="(customer, index) of item.acf.customers" :key="index">{{customer.post_title}}<span v-if="index < item.acf.customers.length - 1"></span></i>
      <div class="content">{{item.acf.description | truncate(30 * 4)}}</div>
      <i class="partner" v-if="item.acf.partners">In Collaboration with <span v-for="(partner, index) of item.acf.partners" :key="index">{{partner.post_title}}</span></i>
    </div>
    <div class="border"></div>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .card{

    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 430px;
    overflow: hidden;
    @include screen-size('m') {
      min-height: 380px;
    }
    @include screen-size('xs') {
      height: auto;
    }


    .image {
      min-height: 200px;
      max-height: 200px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0 1em 0 1em;
      cursor: pointer;
      background: $secondary-color;

      @include screen-size('m') {
        width: 240px;
        height: 154px;
        margin: auto auto
      }
      img {
        width: 100%;
      }
      .no-image {
        width: 30%;
      }
    }

    .info {
      padding: 0 1em 1em 1em;
      height: 230px;
      @include screen-size('m') {
        padding: 0 0.5em 0.5em 0.5em
      }
      @include screen-size('s') {
        height: 200px;
      }
      @include screen-size('xs') {
        height: 200px;
      }
      .title {
        max-height: 75px;
        cursor: pointer;
        font-weight: bold;
        margin-bottom: 0;
        margin-top: 10px;
        line-height: 1;
        color: $dark-grey;

        @include screen-size('m') {
          margin-top: 10px;
        }
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
        @include screen-size('m') {
          font-size: 0.7em;
        }
      }

      .content {
        height: 90px;
        overflow: hidden;
        opacity: 0.8;
        padding-top: 15px;
        font-size: 0.9em;
        @include screen-size('xl') {
          padding-top: 1.4em;
        }
        @include screen-size('m') {
          font-size: 1em;
          overflow: auto;
        }
        @include screen-size('s') {
          font-size: 1em;
          overflow: auto;
        }
        @include screen-size('xs') {
          font-size: 1em;
          overflow: auto;
        }
      }

      .partner {
        position: absolute;
        bottom: 30px;
        font-size: 0.8em;
        @include screen-size('xl') {
          font-size: 0.7em;
          bottom: 10px;
        }
        @include screen-size('l') {
          bottom: 10px;
        }
        @include screen-size('m') {
          font-size: 0.7em;
          bottom: 10px;
        }
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
