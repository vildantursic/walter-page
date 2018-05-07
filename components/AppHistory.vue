<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <div class="swiper">
    <div v-swiper:historySwiper="swiperOption" class="my-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in items" :key="index">
          {{item.title.rendered}}
          <svg :class="[index === 0 ? 'line-draw-right' : '', `line-${index}`]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="1930px" height="300px" viewBox="0 0 1930 300" enable-background="new 0 0 1930 300" xml:space="preserve">
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="1927.5" y1="148.7754" x2="2.5005" y2="148.7756">
              <stop offset="0" style="stop-color:#FAAE40;stop-opacity:0.7"/>
              <stop offset="0.0898" style="stop-color:#EEAD46;stop-opacity:0.718"/>
              <stop offset="0.2504" style="stop-color:#D0A957;stop-opacity:0.7501"/>
              <stop offset="0.4632" style="stop-color:#9EA373;stop-opacity:0.7926"/>
              <stop offset="0.7202" style="stop-color:#589C99;stop-opacity:0.844"/>
              <stop offset="1" style="stop-color:#0592C7;stop-opacity:0.9"/>
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_1_)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M1925,278.454H735.5v-77.265l-6.531-61.656l-6.469,61.656v39.265h-14v-34h-32v18h-6v-126h-12.887l-0.122-6h9.855  c3.617,0,6.575-2.206,6.575-5c0-2.795-2.958-5-6.575-5h-10.063l-1.293-63.357l-1.293,63.357h-10.064c-3.615,0-6.574,2.205-6.574,5  c0,2.794,2.959,5,6.574,5h9.857l-0.123,6H628.5v144h-11v-57h-26v49h-14V131.465l-21.603-12.054L534.5,131.465v117.989h-6v-17h-5v-11  h-11v-6h-5v-5h-13v-25h-26v12h-20v41h-10v-32h-22v-36h5.188H405.5v-31h-3v-8h-9V93.332c0-2.378-0.541-4.676-5.833-4.676  s-6.167,2.298-6.167,4.676v38.122h-10v8h-3v31h5.968H358.5v43.253l-21.344-31.138L309.5,223.433v26.021h-15v-45h-3v-22h-3v-23h-3  v-23h6.672l-1.384-16.138l-1.383,16.138H274.5v23h-3v23h-4v22h-3v21h-14v-21h-26v9h-20v65H5"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['items'],
    data () {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
      }
    },
    mounted() {
      this.historySwiper.on('slideChange', () => {
        let lastDraw = document.querySelector('.line-' + this.historySwiper.previousIndex)
        let draw = document.querySelector('.line-' + this.historySwiper.realIndex)

        lastDraw.className.baseVal = 'line-' + this.historySwiper.previousIndex
        draw.className.baseVal = 'line-draw-left line-' + this.historySwiper.realIndex
      })
    },
    methods: {
      slideTo(index) {
        this.historySwiper.slideTo(index, 1000, false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/mixins";

  * {
    /*all: unset;*/
  }

  .swiper {
    width: 100%;
    height: 100%;

    @include screen-size(xs) {
      width: 100vh;
    }
  }
  .my-swiper {
    height: 100%;
    width: 100%;
    overflow: hidden;

    .swiper-wrapper {

      .swiper-slide {

        svg {
          width: 100%;

          path {
            fill: none;
            stroke-width: 2px;
            stroke-miterlimit: 10;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
        }
      }
    }
    .swiper-pagination {

      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }

  .line-draw-left {
    stroke-width: 3px;
    stroke-dasharray: 5045;
    animation: 7s write-left;
  }
  .line-draw-right {
    stroke-width: 3px;
    stroke-dasharray: 5045;
    stroke-dashoffset: 5045;
    animation: 7s write-right;
  }

  @keyframes write-left {
    0% {
      stroke-dashoffset: 5045;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes write-right {
    0% {
      stroke-dashoffset: 5045;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
</style>
