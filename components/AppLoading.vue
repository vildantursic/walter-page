<template>
  <div class="loading-page">
    <img src="~/static/images/walter-logo.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
  .loading-page {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(-45deg, hsla(195, 100%, 39%, 0.3), hsla(36, 95%, 62%, 0.3));
    display: flex;
    align-items: center;
    justify-content: center;
    animation: hue 10s infinite alternate;
    img {
      height: 8em;
    }
  }

  @keyframes hue {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
</style>
