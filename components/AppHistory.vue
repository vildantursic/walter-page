<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <div class="swiper">
    <div v-swiper:historySwiper="swiperOption" class="my-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in items" :key="index">
          <div class="swiper-text" v-html="item.content.rendered"></div>

          <svg v-if="index === 0" :class="['image' ,currentHistory === index ? currentHistory < oldCurrentHistory ? 'line-draw-right' : 'line-draw-left' : '', `line-${index}`]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="1920px" height="930px" viewBox="0 0 1920 930" enable-background="new 0 0 1920 930" xml:space="preserve">
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-2.5" y1="445.7261" x2="1922.5" y2="445.7261">
              <stop offset="0" style="stop-color:#FAAE40"/>
              <stop offset="0.3601" style="stop-color:#EEAD46"/>
              <stop offset="1" style="stop-color:#D0A957"/>
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_1_)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M1920,555.5H801.229c-3.742,0-7.164,0.315-9.16-2.851c-8.713-13.805-22.209-20.939-30.301-22c-7.064-0.928-13.9-4.851-19.889-8.71  c-9.758-6.289-13.699-13.428-15.213-18.139c-1.447-4.497-11.929-8.013-16.654-8.013l0,0c-1.175,0-8.512,0.545-8.512,1.719v16.186  c0,8.897,3.276,17.514-2.405,24.362l-1.666,5.854c-1.017,1.228-0.933,1.937-2.526,1.937l0,0c-4.689,0-6.319-5.596-3.118-9.02l0,0  c5.648-6.043,8.951-7.416,8.422-15.671l0,0c-0.014-0.221,0.202,6.347-0.019,6.347h-64.352c-1.986,0-3.537-8.458-3.331-10.431  l10.452-104.024c0.072-0.703-0.246-3.074-0.83-3.47l-5.001-4.252c-1.201-0.819-2.843-0.479-2.995,0.967l-11.185,105.667  c-0.105,0.998-1.153,1.496-2.069,1.09l-7.727-3.486c-0.584-0.259-0.936-0.892-0.87-1.527l11.476-111.071  c0.301-2.9,2.881-5.029,5.787-4.754l131.378,12.304c2.938,0.276,5.067,2.934,4.692,5.865l-12.984,101.345  c-0.235,1.837-1.805,3.21-3.658,3.196l-26.875-0.174l0,0c0,8.971-3.161,17.652-8.928,24.526l-2.707,3.222  c-0.754,1.656,0.95,2.682,2.113,2.699l9.664-0.178c1.636,0.027-3.738,1.363-3.738,2.998v0.309c0,1.658,12.032,16.18,10.375,16.18  h-90.104c-1.656,0-2.998-1.344-2.998-3l0,0c0-1.658,1.342-3,2.998-3h31.949c0.72,0,1.302-7.171,1.302-7.892l0,0  c0-1.627,0.913-6.391,2.333-7.186c3.549-1.986,1.84-8.189,1.84-8.189c-10.172-14.281-29.445-8.252-38.439-3.938  c-3.439,1.65-7.26,1.924-11.053,1.518l-12.896-1.588c-0.863-0.094-1.094-1.346-0.332-1.764l0,0c2.086-1.141,1.762-4.285-0.516-4.97  l-48.435-14.623c-10.29-3.104-20.033-7.812-28.874-13.925l0,0c-10.495-7.254-20.068-15.765-28.512-25.332l-35.796-40.558  c-7.237-8.606-28.066-6.318-28.066-6.318c-0.585-5.792,5.903-9.673,10.783-6.5c14.294,9.294,17.824,3.089,18.647-1.571  c0.291-1.645,1.76-2.778,3.424-2.641c2.514,0.212,2.357-2.336,0.562-3.455c-0.603-0.375-0.349-1.298,0.362-1.328  c2.819-0.12,3.297-1.469,3.229-2.527c-0.124-1.902,0.768-3.764,2.486-4.592c1.912-0.922,4.09-1.322,4.09-1.322  c5.477-0.52-1.824-12.518-1.824-12.518c-3.211-7.621,2.219-13.084,4.897-15.199c0.931-0.736,1.55-1.791,1.759-2.957  c3.393-18.852-5.91-29.654-16.247-35.766c-13.471-7.965-30.113-8.445-44.267-1.768c-27.764,13.1-19.912,41.281-15.758,51.844  c1.512,3.842,1.776,8.096,0.611,12.059c-4.006,13.617-17.139,18.728-26.832,20.641c-7.734,1.527-14.531,6.104-19.023,12.584  l-2.748,3.965c-0.634,0.916-2.036,0.076-1.529-0.913l1.879,2.906c2.28-4.469-0.965-3.176-5.982-3.176h-19.936  c-47.417,0-39.693,53.083-27.719,92.391c6.141,20.152-8.998,31.609-30.065,31.609H0"/>
          </svg>
          <svg v-if="index === 0" @click="moveToNext" class="desktop arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="58.001px" height="58px" viewBox="0 0 58.001 58" enable-background="new 0 0 58.001 58" xml:space="preserve">
            <path fill="#FFFFFF" d="M29,6.098C16.373,6.098,6.098,16.371,6.098,29c0,12.628,10.274,22.901,22.902,22.901  S51.903,41.628,51.903,29C51.903,16.371,41.628,6.098,29,6.098z"/>
            <g>
              <g>
                <path fill="#D0A957" d="M29,56.902C13.615,56.902,1.098,44.384,1.098,29C1.098,13.614,13.615,1.098,29,1.098    S56.903,13.614,56.903,29C56.903,44.384,44.386,56.902,29,56.902z M29,6.098C16.373,6.098,6.098,16.371,6.098,29    c0,12.628,10.274,22.901,22.902,22.901S51.903,41.628,51.903,29C51.903,16.371,41.628,6.098,29,6.098z"/>
              </g>
              <path fill="#D0A957" d="M23.777,40.089c-0.688,0-1.356-0.354-1.729-0.991c-0.558-0.954-0.236-2.179,0.717-2.737l12.151-7.105   l-12.151-7.107c-0.953-0.557-1.274-1.783-0.717-2.736c0.557-0.953,1.782-1.275,2.736-0.717l15.104,8.834   c0.613,0.359,0.99,1.016,0.99,1.727s-0.377,1.367-0.99,1.728l-15.104,8.832C24.467,40,24.12,40.089,23.777,40.089z"/>
            </g>
          </svg>

          <svg v-if="index === 1" :class="['image' ,currentHistory === index ? currentHistory < oldCurrentHistory ? 'line-draw-right' : 'line-draw-left' : '', `line-${index}`]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="1920px" height="930px" viewBox="0 0 1920 930" enable-background="new 0 0 1920 930" xml:space="preserve">
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-3" y1="430.8213" x2="1923" y2="430.8213">
              <stop offset="0" style="stop-color:#D0A957"/>
              <stop offset="1" style="stop-color:#95A278"/>
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_2_)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M1920,556H805v-69.61l-6.531-61.656L792,486.39V527h-14v-34h-32v18h-6V385h-17.839l-0.122-6h9.855c3.617,0,6.575-2.206,6.575-5  c0-2.795-2.958-5-6.575-5h-10.063l-1.293-63.357L719.246,369h-10.064c-3.615,0-6.574,2.205-6.574,5c0,2.794,2.959,5,6.574,5h9.857  l-0.123,6H698v144h-11v-57h-26v49h-14V416.665l-21.603-12.054L604,416.665V536h-6v-17h-5v-11h-11v-6h-5v-5h-13v-25h-26v12h-20v41  h-10v-32h-22v-36h-11v-31h-3v-8h-9v-39.468c0-2.378-0.541-4.676-5.833-4.676S451,376.154,451,378.532V418h-10v8h-3v31h-10v41.907  l-21.344-31.138L379,508.633V536h-15v-45h-3v-22h-3v-23h-3v-23h-3.28l-1.384-16.138L348.953,423H344v23h-3v23h-4v22h-3v21h-14v-21  h-26v9h-20v56H0"/>
          </svg>
          <svg v-if="index === 1" @click="moveToNext" class="desktop arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="58.001px" height="58px" viewBox="0 0 58.001 58" enable-background="new 0 0 58.001 58" xml:space="preserve">
            <path fill="#FFFFFF" d="M29,6.098C16.373,6.098,6.098,16.371,6.098,29c0,12.628,10.274,22.901,22.902,22.901  S51.903,41.628,51.903,29C51.903,16.371,41.628,6.098,29,6.098z"/>
            <g>
              <g>
                <path fill="#95A278" d="M29,56.902C13.615,56.902,1.098,44.384,1.098,29C1.098,13.614,13.615,1.098,29,1.098    S56.903,13.614,56.903,29C56.903,44.384,44.386,56.902,29,56.902z M29,6.098C16.373,6.098,6.098,16.371,6.098,29    c0,12.628,10.274,22.901,22.902,22.901S51.903,41.628,51.903,29C51.903,16.371,41.628,6.098,29,6.098z"/>
              </g>
              <path fill="#95A278" d="M23.777,40.089c-0.688,0-1.356-0.354-1.729-0.991c-0.558-0.954-0.236-2.179,0.717-2.737l12.151-7.105   l-12.151-7.107c-0.953-0.557-1.274-1.783-0.717-2.736c0.557-0.953,1.782-1.275,2.736-0.717l15.104,8.834   c0.613,0.359,0.99,1.016,0.99,1.727s-0.377,1.367-0.99,1.728l-15.104,8.832C24.467,40,24.12,40.089,23.777,40.089z"/>
            </g>
          </svg>

          <svg v-if="index === 2" :class="['image' ,currentHistory === index ? currentHistory < oldCurrentHistory ? 'line-draw-right' : 'line-draw-left' : '', `line-${index}`]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="1920px" height="930px" viewBox="0 0 1920 930" enable-background="new 0 0 1920 930" xml:space="preserve">
            <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-142.166" y1="451.2441" x2="1782.834" y2="451.2441" gradientTransform="matrix(-1 0 0 1 1780.334 0)">
              <stop offset="0" style="stop-color:#509B9E"/>
              <stop offset="1" style="stop-color:#95A278"/>
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_3_)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M1920,559.5c0,0-1322.119,0-1359.5,0s-51.5-77,3.5-99c54.159-21.664,61.066,9.372,122.5-4.5c31-7,49.5-30,49.5-30  s113.852-83.013,113.852-83.013l-105.3,45.415l60.727,29.383l44.573-74.798L739.981,387.75l-4.571,37.219l-7.836-39.178  l122.278-42.804L660.971,383.18l62.686,3.918c0,0,18.49,36.601,8.489,41.789C663.5,464.5,628,404.5,541,442  c-75.564,32.571-43.452,117.5-117.452,117.5c-46,0-423.548,0-423.548,0"/>
          </svg>

          <svg v-if="index === 2" @click="moveToNext" class="desktop arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="58.001px" height="58px" viewBox="0 0 58.001 58" enable-background="new 0 0 58.001 58" xml:space="preserve">
            <path fill="#FFFFFF" d="M29,6.099c-12.628,0-22.902,10.272-22.902,22.902c0,12.628,10.274,22.901,22.902,22.901  s22.902-10.273,22.902-22.901C51.903,16.371,41.628,6.099,29,6.099z"/>
            <g>
              <g>
                <path fill="#509B9E" d="M29,56.902c-15.386,0-27.902-12.518-27.902-27.901C1.098,13.614,13.615,1.099,29,1.099    s27.902,12.516,27.902,27.902C56.903,44.385,44.386,56.902,29,56.902z M29,6.099c-12.628,0-22.902,10.272-22.902,22.902    c0,12.628,10.274,22.901,22.902,22.901s22.902-10.273,22.902-22.901C51.903,16.371,41.628,6.099,29,6.099z"/>
              </g>
              <path fill="#509B9E" d="M23.777,40.09c-0.688,0-1.356-0.354-1.729-0.991c-0.558-0.954-0.236-2.179,0.717-2.737l12.151-7.105   l-12.151-7.107c-0.953-0.557-1.274-1.783-0.717-2.736c0.557-0.953,1.782-1.275,2.736-0.717l15.104,8.834   c0.613,0.359,0.99,1.016,0.99,1.727s-0.377,1.367-0.99,1.728l-15.104,8.832C24.467,40.001,24.12,40.09,23.777,40.09z"/>
            </g>
          </svg>

          <svg v-if="index === 3" :class="['image' ,currentHistory === index ? currentHistory < oldCurrentHistory ? 'line-draw-right' : 'line-draw-left' : '', `line-${index}`]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="1920px" height="930px" viewBox="0 0 1920 930" enable-background="new 0 0 1920 930" xml:space="preserve">
            <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="-3" y1="433.1699" x2="1923" y2="433.1699">
              <stop offset="0" style="stop-color:#509B9E"/>
              <stop offset="1" style="stop-color:#0592C7"/>
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_4_)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M1920,556H554.429h-3.166c-48.25,0-51.584-27.238-53-33.654c-1.416-6.418-9.167-49.078-9.167-49.078  c0-8.358-13.893-55.454-24.943-69.622c-5.941-7.613-14.504-14.781-17.559-9.327c-3.056,5.455,26.183,26.113,33.164,6.038  c6.982-20.074,6.109-41.929-4.363-39.31c-10.473,2.617,4.363,46.231,17.455,46.231s25.308-42.773,13.091-42.773  c-12.219,0-2.62,38.397,10.472,40.142c13.092,1.746,29.671-38.404,19.198-39.276c-10.474-0.875-4.368,31.412,5.231,36.648  c9.6,5.238,27.912-4.665,23.335-9.828c-3.269-3.688-9.937,1.865-14.604,6.318c-9.221,8.791-17.761,26.297-23.401,48.465  c-1.792,7.049-3.43,19.592-3.908,25.551c-0.479,5.957-49.917,9.916-51.417-3.584c-0.238-2.145-0.867-7.194-2.426-10.102l0,0  c-6.203-11.572-12.761-22.677-20.488-33.292c-8.639-11.866-13.662-26.45-13.754-42.229c-0.234-39.465,32.622-72.724,72.088-73.001  c40.314-0.283,73.096,32.312,73.096,72.563c0,15.854-5.102,30.522-13.731,42.462c-7.705,10.662-14.917,21.711-21.157,33.293  l-5.592,7.082c-1.572,2.916-9.881-0.713-9.881,2.601v10.874v1.334c0,15-59.83,10.332-60.496,6.332s63.691-8.665,63.691,1.335  s-61.279,24.001-60.613,16.667c0.666-7.332,62.693-16.663,62.693-3.329c0,13.333-61.971,19.987-62.318,16.672  c-0.875-8.335,61.798-11.99,62.172,2.01c0.191,7.177-50.62,11.354-50.62,7.354s50.377-5.835,42.751,6.497  C511.678,557.648,464.303,556,464.303,556h-22.707H0"/>
          </svg>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['items', 'currentHistory'],
    watch: {
      currentHistory: function (newVal, oldVal) {
        this.oldCurrentHistory = oldVal
        this.slideTo(newVal)
      }
    },
    data () {
      return {
        oldCurrentHistory: this.currentHistory,
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
        this.$emit('currentHistory', this.historySwiper.realIndex)
      })
    },
    methods: {
      slideTo(index) {
        this.historySwiper.slideTo(index, 1000, false)
      },
      moveToNext() {
        if (this.historySwiper.realIndex++ < 4)
        this.$emit('currentHistory', this.historySwiper.realIndex++)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/mixins";
  @import "../assets/styles/variables";
  .swiper {
    width: 100%;
    height: 100%;

    @include screen-size(xs) {
      width: 100vw;
    }
  }
  .my-swiper {
    height: 100%;
    width: 100%;
    overflow: hidden;

    .swiper-wrapper {

      .swiper-slide {
        position: relative;
        height: 350px;
        display: flex;
        align-items: center;

        @include screen-size('m') {
          flex-direction: column;
          height: 500px;
        }
        @include screen-size('s') {
          flex-direction: column;
          height: 500px;
        }
        @include screen-size('xs') {
          flex-direction: column;
          height: 500px;
        }

        .swiper-text {
          position: absolute;
          top: 0;
          right: 30%;
          color: $dark-grey;

          @include screen-size('m') {
            margin-left: 15px;
          }
          @include screen-size('s') {
            margin-left: 15px;
          }
          @include screen-size('xs') {
            margin-left: 15px;
          }
        }
        .image {
          width: 100%;

          path {
            fill: none;
            stroke-width: 2px;
            stroke-miterlimit: 10;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
        }

        .arrow {
          position: absolute;
          right: -8px;
          top: calc(50% + 70px);
          cursor: pointer;
          height: 45px;
          @include screen-size('xl') {
            top: calc(50% + 55px);
          }
          @include screen-size('l') {
            top: calc(50% + 45px);
          }
          @include screen-size('m') {
            top: calc(50% + 25px);
          }
          @include screen-size('s') {
            top: calc(50% + 20px);
          }
        }
      }
    }
    .swiper-pagination {

      > .swiper-pagination-bullet {
        background-color: black;
      }
    }
  }

  .line-draw-left {
    stroke-dasharray: 5045;
    animation: 5s write-left;
  }
  .line-draw-right {
    stroke-dasharray: 5045;
    animation: 5s write-right;
  }

  @keyframes write-left {
    0% {
      stroke-dashoffset: 5045;
    }
    100% {
      stroke-dashoffset: 10090;
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
