<template>
  <div class="card animated fadeIn" data-aos="slide-up">
    <div class="card-img" v-if="item._embedded !== undefined">
      <img v-if="item._embedded['wp:featuredmedia'] !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">
      <img v-if="item._embedded['wp:featuredmedia'] === undefined" class="no-image" src="~/static/images/walter-logo.png" alt="">
    </div>
    <div class="info-card">
      <div class="about">
        <div class="member">
          <h3>{{item.title.rendered}}</h3>
          <p>{{item.acf.position}}</p>
        </div>
        <div class="divider"></div>
        <div class="social">
          <div class="linkedin">
            <a class="link" :href="item.acf.linkedin"><i class="fab fa-linkedin"></i></a>
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

  .card {
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: hidden;

    .card-img {
      width: 100%;
      height: 70%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
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
      }
      p{
        margin-top: 0;
        font-size: 1em;
      }
    }
    .member {
      margin: 0 0 0 1em;
    }

    .divider {
      margin-bottom: 15px;
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

      div {
        display: flex;
        align-items: center;
      }

      .linkedin {
        grid-area: linkedin;
        justify-content: center;

        .fa-linkedin {
          color: $dark-grey;
          width: 100%;
          font-size: 3em;
        }
      }
      .phone {
        padding-top: 0.5em !important;
        grid-area: phone;
      }
      .email {
        padding-bottom: 0.5em !important;
        grid-area: email;
      }

      .link {
        text-decoration: none;
        color: $dark-grey;;
      }
      .fab, .fas{
        color: $dark-grey;
        width: 30px;
        text-align: center;
        text-decoration: none;
      }
    }
  }
</style>
