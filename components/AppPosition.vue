<template>
  <div class="info-card animated fadeIn" data-aos="fade">
    <nuxt-link class="nav-link" :to="`/careers/jobs/${item.id}`">
      <h1 class="position" v-html="item.title.rendered.split('').slice(0, 25).join('').concat(item.title.rendered.length > 50 ? '...' : '')"></h1>
    </nuxt-link>
    <p class="published">Published: {{date}}</p>
    <h1 class="description">Job description</h1>
    <p class="data">{{ item.acf.description | truncate(250)}}</p>
    <p class="number">Number of positions: {{item.acf.number_of_positions}}</p>
    <p class="published">Deadline: {{deadline}}</p>
    <div class="bottom">
      <AppSocial></AppSocial>
      <nuxt-link :to="`/careers/jobs/${item.id}`" class="more-container nav-link">
        <div class="plus">+</div>
        <div class="read"> Read <span class="more">more</span></div>
      </nuxt-link>
    </div>

    <div class="border"></div>
  </div>
</template>

<script>
  import AppSocial from '~/components/AppSocial'
  import moment from 'moment'

  export default {
    props: ['item'],
    components: {
      AppSocial
    },
    data() {
      return {
        date:  moment(this.item.date).format('DD-MM-YYYY'),
        deadline: moment(this.item.acf.deadline ? this.item.acf.deadline : this.item.date).format('DD-MM-YYYY')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .info-card {
    position: relative;
    width: 100%;
    height: 450px;
    overflow: hidden;

    @include screen-size('m') {
      height: 400px;
    }
    @include screen-size('xs') {
      height: 420px;
    }
    @include screen-size('s') {
      height: 400px;
    }

    .position {
      margin: 0;
      font-size: 2em;
      font-weight: bold;
    }

    .published {
      font-size: 0.8em;
      font-weight: 500;
      color: gray;
    }

    .description {
      margin: 1em 0;
      font-size: 1em;
      font-weight: 600;
      color: $main-color;
      letter-spacing: 2px;
    }

    .data {
      width: 90%;
      margin: 0;
      height: auto;
      overflow: hidden;
      @include screen-size('xs') {
        width: 100%;

      }
    }

    .number {
      color: $dark-grey;
      margin: 1em 0;
      font-size: 1.2em;
      font-weight: 700;
    }

    .bottom {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      margin-bottom: 0;

      .more-container {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .read {
          font-size: 1em;
          font-weight: bold;
          letter-spacing: 1px;

          .more {
            color: $main-color;
          }
        }

        .plus {
          font-size: 2em;
          font-weight: bold;
          padding: 0 5px;
          @include screen-size('s') {
            display: none;
          }
        }
      }
    }
  }

  .border {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-size: cover;
    background: linear-gradient(90deg, #0093c8 0%, #faaf40 100%) fixed center;
  }
</style>
