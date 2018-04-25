<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <div class="swiper">
    <div v-swiper:mySwiper="swiperOption" class="my-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image, index) in images" :key="index">
          <img v-if="image" src="~/static/images/arch.jpg">
        </div>
      </div>
    </div>
    <div v-swiper:mySecondSwiper="swiperThumbOption" class="my-swiper-thumb">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(test, index) in [1,2,3]" :key="index">
          <img v-if="test" src="~/static/images/arch.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['images'],
    data () {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: false,
          autoplay: {
            delay: 4500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        swiperThumbOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: false,
          autoplay: {
            delay: 4500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }
  .my-swiper {
    height: 500px;
    width: 100%;
    overflow: hidden;
    .swiper-wrapper {
      .swiper-slide {
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: #ffffff;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
  .my-swiper-thumb {
    height: 100px;
    margin-top: 5em;

    .swiper-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      .swiper-slide {
        width: auto!important;
        text-align: center;
        background-color: #ffffff;
        overflow: hidden;
        img {
          cursor: pointer;
          height: 100%;
        }
      }
    }
  }
  /*.swiper-slide {*/
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/

    /*img {*/
      /*position: absolute;*/
      /*z-index: 1;*/
    /*}*/
  /*}*/
</style>
