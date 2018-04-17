<template>
  <section>
    <div>
      <video id="bgvid" playsinline autoplay muted loop>
        <source src="http://careers.walter-dev.com/assets/walter.mp4" type="video/mp4">
      </video>

      <div>
        <h1>SOME CONTENT</h1>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
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
</style>
