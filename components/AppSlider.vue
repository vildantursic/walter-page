<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <div class="swiper">
    <div v-swiper:mySwiper="swiperOption" class="my-swiper" :class="{ thumbs: miniSlider }">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image, index) in images" :key="index">
          <img v-if="image" :src="image" @click="showLightBox()">
          <div class="swiper-button-prev" slot="button-prev">
            <img src="../static/images/Arrow.svg" alt="">
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="../static/images/Arrow.svg" style="transform: rotate(180deg);" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['images', 'miniSlider'],
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperThumbOption: {
          slidesPerView: 6,
          spaceBetween: 30,
          loop: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    mounted() {
    },
    methods: {
      slideTo(index) {
        this.mySwiper.slideTo(index, 1000, false)
      },
      showLightBox() {
        this.$emit('showLightBox', true)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/mixins";
  @import "../assets/styles/variables";

  .swiper {
    position: relative;
    height: auto;
    width: 100%;
  }

  .my-swiper {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      width: 100%;
      height: 100%;

      .swiper-slide {
        height: 100%;
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: $secondary-color;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          height: auto;
          cursor: pointer;
        }
      }
    }
    .swiper-pagination {

      > .swiper-pagination-bullet {
        background-color: black;
      }
    }
  }

  .my-swiper-thumb {
    position: absolute;
    z-index: 50;
    bottom: 0;
    height: 100px;
    width: 100%;
    background: transparent;

    @include screen-size('xs') {
      width: 100vw;
    }
  }

  .swiper-button-next {
    margin-top: auto;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    background-image: none;
    outline: none;
    width: 44px;
    height: 44px;
  }

  .swiper-button-prev {
    margin-top: auto;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    background-image: none;
    outline: none;
    width: 44px;
    height: 44px;
  }
</style>
