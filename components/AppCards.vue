<template>
  <nuxt-link class="full-link" :to="`/cases/${item.id}`">
  <div class="card animated fadeIn" data-aos="fade">
    <div class="image">
      <nuxt-link v-if="item._embedded !== undefined" class="nav-link" :to="`/cases/${item.id}`">
        <img v-if="item._embedded ['wp:featuredmedia']!== undefined"
             :src="item._embedded['wp:featuredmedia'][0].source_url"
             :alt="item._embedded['wp:featuredmedia'][0].alt_text">
      </nuxt-link>
      <nuxt-link v-if="item._embedded === undefined" class="nav-link" :to="`/cases/${item.id}`">
        <img class="no-image" src="~/static/images/walter-logo.png" alt="">
      </nuxt-link>
    </div>
    <div class="info">
      <h1 class="title" v-html="item.title.rendered.split('').slice(0, 50).join('').concat(item.title.rendered.length > 50 ? '...' : '')"></h1>
      <i class="clients" v-for="(customer, index) of item.acf.customers" :key="index">{{customer.post_title}}<span
        v-if="index < item.acf.customers.length - 1"></span></i>
      <div class="content">{{item.acf.description | truncate(30 * 4)}}</div>
      <i class="partner" v-if="item.acf.partners">for <span
        v-for="(partner, index) of item.acf.partners" :key="index">{{partner.post_title}}</span></i>
    </div>
    <div class="border"></div>
  </div>
  </nuxt-link>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .card {
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
      /*max-height: 200px;*/
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      background: $secondary-color;

      @include screen-size('m') {
        /*width: 240px;*/
        /*height: 154px;*/
        /*margin: auto auto*/
      }
      img {
        width: 100%;
      }
      .no-image {
        width: 30%;
      }
    }

    .info {
      height: 230px;

      @include screen-size('m') {
        /*padding: 0 2em 0.5em 2em*/
      }
      @include screen-size('s') {
        height: 200px;
        /*padding: 0 1em 1em 1em;*/
      }
      @include screen-size('xs') {
        height: 200px;
        /*padding: 0 1em 1em 1em;*/
      }
      .title {
        height: 50px;
        overflow: hidden;
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
          font-size: 0.9em;
          overflow: auto;
        }
        @include screen-size('xs') {
          font-size: 0.8em;
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
  .nav-link{
    width: 100%;
  }
  .full-link {
    color: black;

    &:hover {
      color: black !important;
    }
  }
</style>
