<template>
  <section>
    <video id="bgvid" playsinline autoplay muted loop>
      <source src="http://careers.walter-dev.com/assets/walter.mp4" type="video/mp4">
    </video>
    <div class="video-cover"></div>

    <div class="services-info">
      <div class="navigation">
        <h1 class="hidden-amount">+ 10000</h1>
        <h1 style="float: right">cases</h1>
      </div>
      <div class="info">
        <h1>You provide the idea, we add a few dimensions of efficiency to it</h1>
        <h2>
          Architectural detail design, structural calculations and MEP models, In addition to this 3D parametric modeling,
          we provide our clients with 4D (time schedule), 5D (cost) BIM services, conflict and clash detection
          and development of bidding documentation
        </h2>
      </div>
      <div class="services">
        <h2>Services</h2>
        <section>
          <AppSingleService v-for="(item, index) of [1,2,3,4,5]" :key="index"/>
        </section>
        <AppContactBox :name="'Dejan Vujicic'" :role="'Department manager'"></AppContactBox>
      </div>
    </div>
  </section>
</template>

<script>
  import AppSingleService from '~/components/AppSingleService'
  import AppContactBox from '~/components/AppContactBox'

  export default {
    components: {
      AppSingleService,
      AppContactBox
    },
    methods: {
      goToService () {
        this.$router.push({ path: 'services' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  video {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
    background: url('/static/images/video-image.jpg') no-repeat;
    background-size: cover;
    transition: 1s opacity;
  }
  .video-cover {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -99;
    background-image: linear-gradient(45deg, rgba(#0093c8, 0.5) 0%, rgba(#faaf40, 0.5) 100%);
  }

  .services-info {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;

    .navigation {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      h1 {
        margin: 0;
      }

      .hidden-amount {
        position: absolute;
        top: -15px;
        right: 0;
        z-index: -1;
        opacity: 0.1;
        font-size: 5em;
      }
    }

    .info {
      width: 60%;

      h1, h2 {
        opacity: 1;
        margin: 0 0 50px 0;
      }
      h1 {
        font-size: 3em;
      }
      h2 {
        font-size: 1.3em;
      }
    }

    .services {

      section {
        @include grid-items(5%, 5%, 7, 3);
      }
    }
  }
</style>
