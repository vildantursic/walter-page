<template>
  <div class="card">
    <style>
      .avatar.photo {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-bottom: 15px;
      }
    </style>
    <div class="image" v-html="user.user_avatar"></div>
    <div class="info">
      <div class="name">
        {{user.user_firstname}} {{user.user_lastname}}
      </div>
      <div class="role">
        {{user.user_description.split(',')[0]}}
      </div>
    </div>
    <div class="icons">
      <a class="mail" :href="`mailto:${user.user_email}`"><i class="fas fa-envelope"></i></a>
      <a class="phone" :href="`tel:${user.user_description.split(',')[1]}`"><i class="fas fa-phone"></i></a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['user']
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';
  @import '../assets/styles/mixins';

  .card {
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    @include screen-size('xs') {
      width: 200px;
      padding-top: 3em;
    }

    /*div {*/
      /*margin-bottom: 10px;*/
      /*text-align: center;*/
    /*}*/

    .name {
      text-align: center;
      font-weight: bolder;
      font-size: 1.5em;
      margin-bottom: 10px;
      @include screen-size('xs') {
        font-size: 1.4em;
      }
    }
      .role{
        text-align: center;
        margin-bottom: 10px;
        @include screen-size('xs') {
          margin-bottom: 15px;
        }
      }
    .icons {
      width: 100%;
      display: flex;
      justify-content: space-around;
      border-top: solid 1px white;
      padding: 6% 0;
      font-size: 1.4em;
      @include screen-size('xs') {
        font-size: 1.5em;
        margin: 0;
      }
    }
  }

  .mail {
    color: #ffffff;

    &:hover {
      color: $main-color !important;
    }
  }

  .phone {
    color: #ffffff;
    &:hover {
      color: $main-color !important;
    }
  }
</style>
