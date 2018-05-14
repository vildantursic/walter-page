<template>
  <div class="card">
    <style>
      .avatar.photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
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
  @import "../assets/styles/mixins";

  .card {
    position: absolute;
    bottom: 2%;
    right: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /*justify-content: space-around;*/
    overflow: hidden;
    background-color: #393c3d;
    border-radius: 5px;
    padding: 1.5em 1em;
    width: 363px;
    box-shadow: 8px 8px 8px 0 rgba(57, 60, 61, 0.8);

    @include screen-size('xs') {
      position: relative;
    }

    .image {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 1em;
    }
    .info {
      padding: 0em 1em;

      .name {
        font-size: 1.1em;
        font-weight: 900;
        color: white;
      }
      .role {
        font-size: 0.8em;
        font-weight: 500;
        color: white;
      }
    }
    .icons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .mail {
        font-size: 1.5em;
        color: white;
        padding-left: 1.5em;
      }
      .phone {
        font-size: 1.5em;
        color: white;
        padding-left: 1.5em;
      }
    }
  }
</style>
