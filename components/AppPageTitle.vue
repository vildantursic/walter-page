<template>
  <div class="title-page">
    <p class="supertitle">{{supertitle}}</p>
    <h1 class="title">{{title}}</h1>
    <p class="subtitle">{{subtitle}}</p>
    <div class="search" v-on:click="hideSearch">
      <slot></slot>
      <img id="search-image" src="../static/images/search.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    props: ['supertitle', 'title', 'subtitle'],
    methods: {
      hideSearch(){
        document.getElementById('search-image').style.display = 'none';
        document.getElementById('search').focus()
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/mixins";
  .title-page {
    margin: 15vh 0 10vh 0;
    @include screen-size('m') {
      margin: 10vh 0 0 0;
      display: flex;
      flex-direction: column;
    }
    @include screen-size('s') {
      margin: 10vh 0 1vh 0;
    }
    @include screen-size('xs') {
      margin: 10vh 0 1vh 0;
    }
    .supertitle {
      font-size: 1.5em;
      font-weight: lighter;
      opacity: 0.70;
    }
    .title {
      font-size: 4.5em;
      margin: 10px 0;
      opacity: 0.80;
      font-weight: bold;
      color: $dark-grey;
      @include screen-size('m') {
        font-size: 2.5em;
      }
      @include screen-size('s') {
        font-size: 2em;
      }
      @include screen-size('xs') {
        font-size: 2em;
      }
    }
    .subtitle {
      font-size: 1.5em;
      font-style: italic;
      font-weight: lighter;
      opacity: 0.70;
      @include screen-size('s')
      {
        display: none;
      }
      @include screen-size('xs')
      {
        display: none;
      }
    }
    .search {
      display: none;
      @include screen-size('l') {
        display: none;
      }
      @include screen-size('xl') {
        display: none;
      }
      @include screen-size('s') {
        display: flex;
        margin: 10px 0 10px 15%;
        height: 3em;
        width: 85%;
        input {
          font-size: 0.8em;
          padding: 10px 10px;
          width: 100%;
          border-bottom: solid 1.5px $dark-grey;
          outline: none;
          border: none;

          &:focus {
            outline: none;
            border-bottom: solid 2px $main-color;
            font-weight: bolder;
          }
        }
        .search-image {
          width: 100%;
          height: 100%;
        }
      }
      @include screen-size('m') {
        display: flex;
        margin: 10px 0 10px 15%;
        height: 3em;
        width: 85%;
        input {
          font-size: 0.8em;
          padding: 10px 10px;
          width: 100%;
          border-bottom: solid 1.5px $dark-grey;
          outline: none;
          border: none;

          &:focus {
            outline: none;
            border-bottom: solid 2px $main-color;
            font-weight: bolder;
          }
        }
        .search-image {
          width: 100%;
          height: 100%;
        }
      }
      @include screen-size('xs') {
        display: flex;
        margin: 10px 0 10px 15%;
        height: 3em;
        width: 85%;
        input {
          font-size: 0.8em;
          padding: 10px 10px;
          width: 100%;
          border-bottom: solid 1.5px $dark-grey;
          outline: none;
          border: none;

          &:focus {
            outline: none;
            border-bottom: solid 2px $main-color;
            font-weight: bolder;
          }
        }
        .search-image {
          width: 100%;
          height: 100%;
        }
      }
    }
    }
</style>
