<template>
  <div class="card animated fadeIn" v-scroll-reveal.reset>
    <div class="card-img">
      <img src="~/static/images/arch.jpg" alt="">
    </div>
    <div class="info-card">
      <div class="about">
        <div class="member">
          <h3>Samir Balicevac</h3>
          <p>Business and Product Development</p>
        </div>
        <div class="divider"></div>
        <div class="social">
          <div class="linkedin">
            <a class="link" href="#"><i class="fab fa-linkedin"></i></a>
          </div>
          <div class="phone">
            <i class="fas fa-phone"></i>
            <a class="link" href="">+387 66 233 000</a>
          </div>
          <div class="email">
            <i class="fas fa-envelope"></i>
            <a class="link" href="mailto:samir.balicevac@mail.com">samir.balicevac@mail.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    components: {
    }
  }
</script>

<style lang="scss" scoped="">
  .card{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 400px;
    overflow: hidden;

    .card-img{
      width: 100%;
      height: 40%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
      }
    }

    .about {
      h3{
        margin-bottom: 0;
      }
      p{
        margin-top: 0;
        font-size: 0.75rem;

      }
    }
    .member{
      margin: 0 0 0 1em;
    }

    .divider {
      background: linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
      height: 3px;
      width: 100%;
    }

    .social {
      display: grid;
      grid-template-columns: 25% 75%;
      grid-template-rows: 2em 2em;
      grid-template-areas: "linkedin phone"
                           "linkedin email";

      div {
        display: flex;
        align-items: center;
      }

      .linkedin {
        grid-area: linkedin;
        justify-content: center;

        .fa-linkedin {
          width: 100%;
          font-size: 3.5em;
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
        color: #2e2f30;
        font-size: 0.75rem;
      }

      .fab ,.fas{
        font-size: 0.75rem;
        width: 30px;
        text-align: center;
        text-decoration: none;
      }
      .fab:hover, .fas:hover {
      }
      .fa-linkedin {
        background: #ffffff;
        color: #2e2f30;
      }
      .fa-phone {
        background: #ffffff;
        color: #2e2f30;
      }
      .fa-envelope {
        background: #ffffff;
        color: #2e2f30;
      }
    }
  }
</style>
