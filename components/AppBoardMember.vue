<template>
  <div class="card animated fadeIn" data-aos="fade">
    <div class="card-img" v-if="item._embedded !== undefined">
      <img v-if="item._embedded['wp:featuredmedia'] !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">
      <img v-if="item._embedded['wp:featuredmedia'] === undefined" class="no-image" src="~/static/images/walter-logo.png" alt="">
    </div>
    <div class="info-card">
      <div class="about">
        <div class="member">
          <div>
            <h3>{{item.title.rendered}}</h3>
            <p>{{item.acf.position}}</p>
          </div>
        </div>
        <div class="divider"></div>
        <div class="social">
          <div class="linkedin">
            <a target="_blank" :href="item.acf.linkedin"><i class="fab fa-linkedin"></i></a>
          </div>
          <div class="phone">
            <i class="fas fa-phone"></i>
            <a class="link" :href="`tel:${item.acf.phone}`">{{item.acf.phone}}</a>
          </div>
          <div class="email">
            <i class="fas fa-envelope"></i>
            <a class="link" :href="`mailto:${item.acf.email}`">{{item.acf.email}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    components: {}
  }
</script>

<style lang="scss" scoped="">
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";
  .card {
    height: auto;
    overflow: hidden;
    margin: 25px 0;

    .card-img {
      overflow: hidden;
      width: 100%;
      height: 70%;
      background: $secondary-color;

      img {
        width: 100%;
      }

      .no-image {
        width: auto;
      }
    }

    .about {

      h3{
        color: $dark-grey;
        margin-bottom: 0;
        font-size: 1.5em;
        font-weight: bolder;
        @include screen-size('l') {
          font-size: 1.3em;
        }
        @include screen-size('m') {
          font-size: 1.3em;
        }
      }
      p{
        margin-top: 0;
        font-size: 1em;
        @include screen-size('l') {
          font-size: 0.9em;
        }
        @include screen-size('m') {
          font-size: 0.8em;
        }
      }
    }
    .member {
      margin: 0 0 0 1em;
      position: relative;
      height: 65px;
      @include screen-size('xl') {
      height: 70px;
    }
      @include screen-size('l') {
        height: 65px;
      }
      @include screen-size('m') {
        height: 55px;
      }
    }

    .divider {
      margin: 15px 0;
      width: 100%;
      height: 3px;
      background-size: cover;
      background: linear-gradient(90deg, #0093c8 0%, #faaf40 100%) fixed center;
    }

    .social {
      display: grid;
      grid-template-columns: 25% 75%;
      grid-template-rows: 2em 2em;
      grid-template-areas: "linkedin phone" "linkedin email";


      .linkedin {
        grid-area: linkedin;
        justify-content: center;
        display: flex;
        align-items: center;

        .fa-linkedin {
          color: $dark-grey;
          width: 100%;
          font-size: 3.5em;
        }
        .fab:hover, .fas:hover {
          color: $main-color;
        }
      }
      .phone {
        grid-area: phone;
        display: flex;
        align-items: center;
        justify-content: center;

      }
      .email {
        grid-area: email;
        text-overflow: ellipsis;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

      }

      .link {
        text-decoration: none;
        color: $dark-grey;;
        font-size: 1em;
        text-overflow: ellipsis;
        width: 80%;
        overflow: hidden;

      }
      .fab, .fas{
        color: $dark-grey;
        width: 30px;
        text-align: center;
        text-decoration: none;
        @include screen-size('m') {
          width: 25px;
        }
      }
    }
  }
</style>
