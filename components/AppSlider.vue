<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <div class="swiper">
    <div v-swiper:mySwiper="swiperOption" class="my-swiper" :class="{ cases: cases }">
      <div class="swiper-wrapper" v-viewer="{movable: false}">
        <div class="swiper-slide" v-for="(image, index) in images" :key="index">
          <img v-if="image" :src="image" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
          <div class="swiper-button-prev" slot="button-prev">
            <i class="fas fa-arrow-left"></i>
          </div>
          <div class="swiper-button-next" slot="button-next">
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['images', 'cases'],
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          effect: 'fade',
          lazy: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    mounted() {
    },
    methods: {
      slideTo(index) {
        this.mySwiper.slideTo(index, 1000, false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/mixins";
  @import "../assets/styles/variables";

  .swiper {
    position: relative;
  }

  .my-swiper {
    overflow: hidden;

    .swiper-wrapper {

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

  .cases {
    /*height: calc(100vh - 80px);*/
  }
</style>
