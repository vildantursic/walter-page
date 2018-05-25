<template>
  <section>
    <style>
      .avatar.photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    </style>
    <div class="mobile-button" @click="showContactBox = !showContactBox">
      <div class="image" v-html="user.user_avatar"></div>
    </div>
    <div :class="{show: showContactBox}" class="mobile-card">
      <div class="content">
        <div class="image" v-html="user.user_avatar"></div>
        <div class="info">
          <div class="name">
            {{user.user_firstname}} {{user.user_lastname}}
          </div>
          <div class="role">
            {{user.user_description.split(',')[0]}}
          </div>
        </div>
      </div>
      <div class="icons">
        <a class="mail" :href="`mailto:${user.user_email}`"><i class="fas fa-envelope"></i></a>
        <a class="phone" :href="`tel:${user.user_description.split(',')[1]}`"><i class="fas fa-phone"></i></a>
        <a class="phone" @click="showContactBox = !showContactBox"><i class="fas fa-times"></i></a>
      </div>
    </div>
    <div class="card">
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
  </section>
</template>

<script>
  export default {
    props: ['user'],
    data() {
      return {
        showContactBox: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/mixins";
  @import "../assets/styles/variables";

  .mobile-button {
    border-radius: 50%;
    position: fixed;
    bottom: 1%;
    right: 5%;
    display: none;

    @include screen-size('xs') {
      display: flex;
    }
  }
  .mobile-card {
    position: fixed;
    bottom: -150px;
    height: 150px;
    width: 100vw;
    background-color: #393c3d;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    transition: ease .3s;

    .content {
      display: flex;
      width: 80%;
      justify-content: space-around;
    }
    .icons {
      display: flex;
      width: 60%;
      align-items: center;
      justify-content: space-around;

      a {
        color: white;
        border: solid 1px white;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    @include screen-size('xs') {
      display: flex;
    }
  }
  .show {
    bottom: 0;
  }

  .card {
    position: fixed;
    bottom: 2%;
    right: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    background-color: #393c3d;
    border-radius: 5px;
    padding: 1.5em 1em;
    width: 363px;
    box-shadow: 8px 8px 8px 0 rgba(57, 60, 61, 0.8);
    z-index: 9;
    @include screen-size('xl') {
      padding: 1em 1em;
      width: 300px;
      bottom: 4%;
    }
    @include screen-size('l') {
      padding: 0.9em 0.9em;
      width: 300px;
      bottom: 4%;
    }
    @include screen-size('m') {
      padding: 0.5em 0.5em;
      width: 260px;
      bottom: 4%;
    }

    @include screen-size('xs') {
      position: fixed;
      margin-top: 4%;
      bottom: 4%;
      display: none;
    }

    .image {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 1em;
    }
    .info {
      padding: 0 1em;

      .name {
        font-size: 1.25em;
        font-weight: 900;
        color: white;
        @include screen-size('xl') {
          font-size: 1.1em;
        }
        @include screen-size('l') {
          font-size: 1em;
        }
        @include screen-size('m') {
          font-size: 1em;
        }
      }
      .role {
        font-size: 0.8em;
        font-weight: 500;
        color: white;
        @include screen-size('xl') {
          font-size: 0.7em;
        }
        @include screen-size('l') {
          font-size: 0.6em;
        }
        @include screen-size('m') {
          font-size: 0.6em;
        }
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
        @include screen-size('xl') {
          font-size: 1.3em;
          padding-left: 1.2em;
        }
        @include screen-size('l') {
          font-size: 1.2em;
          padding-left: 1em;
        }
        @include screen-size('m') {
          font-size: 1em;
          padding-left: 0.5em;
        }
      }
      .phone {
        font-size: 1.5em;
        color: white;
        padding-left: 1.5em;
        @include screen-size('xl') {
          font-size: 1.3em;
          padding-left: 1.2em;
        }
        @include screen-size('l') {
          font-size: 1em;
          padding-left: 0.5em;
        }
        @include screen-size('m') {
          font-size: 1em;
          padding-left: 0.5em;
        }
      }
    }
  }
</style>
