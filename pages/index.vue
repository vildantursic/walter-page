<template>
  <section>
    <video id="bgvid" playsinline autoplay muted loop>
      <source src="http://careers.walter-dev.com/assets/walter.mp4" type="video/mp4">
    </video>
    <div class="video-cover"></div>

    <div class="services-info">
      <h1>Your strategic BIM partner</h1>
      <h2>
        Use our knowledge as your tool and add a layer of precision and efficiency to your process.
        Tell us what's your role and we will instantly BIM you in.
      </h2>
      <section class="services">
        <AppService v-for="(item, index) of [1,2,3,4]" :key="index" @onServiceClicked="goToService()"/>
      </section>
    </div>
  </section>
</template>

<script>
  import AppService from '~/components/AppService'

  export default {
    components: {
      AppService
    },
    methods: {
      goToService () {
        this.$router.push({ path: 'services' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/mixins";

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
    margin: 0 10%;

    h1, h2 {
      opacity: 1;
      margin: 0 0 50px 0;
    }
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 1.5em;
    }

    .services {
      @include grid-items(5%, 5%, 4, 2);
    }
  }
</style>
