<template>
  <div class="wrapper">
  <div class="card">
    <div class="content">
      <div class="card-img-container">
        <AppSlider v-if="item.acf.gallery_images"
                   :images="item.acf.gallery_images.split(',')"
                   :cases="true"
                   @showLightBox="showLightBox = !showLightBox"></AppSlider>
        <h1 v-if="!item.acf.gallery_images">No Images</h1>
      </div>
      <div class="info-card">
        <p class="category">
          <span v-for="(category, index) of item.case_categories" :key="index"> {{category.name}}<span
            v-if="index < item.case_categories.length - 1">,</span></span>
        </p>
        <div class="close">
          <AppSocial :item="item" :link="$route.path"></AppSocial>
          <i class="fas fa-times" @click="closeCase"></i>
        </div>
        <AppImageBox :showLightBox="showLightBox"
                     :images="item.acf.gallery_images.split(',').map(image => { return { thumb: image, src: image } })"></AppImageBox>
        <h1 class="title" v-html="item.title.rendered"></h1>
        <p class="customer">
          <span v-for="(customer, index) of item.acf.customers" :key="index"> {{customer.post_title}}<span
            v-if="index < item.acf.customers.length - 1">,</span></span>
        </p>
        <div class="text-box">
          <div class="description" v-html="item.content.rendered"></div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import AppSlider from '~/components/AppSlider'
  import AppSocial from '~/components/AppSocial'
  import AppImageBox from '~/components/AppImageBox'

  export default {
    props: ['item'],
    data() {
      return {
        showLightBox: false
      }
    },
    components: {
      AppSlider,
      AppSocial,
      AppImageBox
    },
    methods: {
      closeCase() {
        this.$emit('onCloseCase')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';
  @import '../assets/styles/mixins';

  .card {
    width: 100%;
    height: 100%;
    background: white;

    .close {
      width: 100%;
      display: flex;
      justify-content: space-between;
      color: $dark-grey;

      i {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        font-size: 1.5em;
        margin: 20px;
        cursor: pointer;
        color: $dark-grey;

        &:hover {
          color: $main-color;
        }
      }
    }

    .content {
      display: grid;
      grid-template-columns: 60% 40%;
      grid-template-areas: "card-img-container info-card";

      @include screen-size(xs) {
        flex-direction: column;
        height: 100%;
        padding: 0 5px;
        grid-template-columns: 100%;
        grid-template-areas: "info-card"
                             "card-img-container";
      }
      @include screen-size(s) {
        flex-direction: column;
        height: 100%;
        padding: 0 5px;
      }

      .card-img-container {

        @include screen-size(xs) {
          width: 100%;
        }
        @include screen-size(s) {
          width: 100%;
        }
      }
      .info-card {
        position: relative;
        padding: 0 1.5em;

        @include screen-size(xs) {
          margin-top: 20px;
          width: 100%;
          padding: 0;
        }
        @include screen-size(s) {
          margin-top: 20px;
          width: 100%;
          padding: 0;
        }

        .category {
          font-size: 1em;
          margin-top: 0.5em;
          font-weight: 300;
        }
        .title {
          width: 90%;
          @include screen-size(xs) {
            padding: 0 10px 0 10px;
          }
          font-size: 2em;
          font-weight: bold;
          color: $dark-grey;
        }
        .author {
          font-weight: 500;
          font-style: italic;
        }
        .description {
          line-height: 1.5;
          @include screen-size(xs) {
            padding: 0 10px;
          }
        }
        .divider {
          margin-top: 10vh;
          border-top: 1px solid gray;
        }
        .text-box {
          height: 500px;
          overflow: auto;
          width: 85%;

          @include screen-size(xs) {
            height: auto;
            width: 100%;
          }
        }
      }
      .link {
        text-decoration: none;
        color: $main-color;
      }
    }
  }

  .right-content {
    width: 85%;
  }

  .social {
    padding: 0 20px;
    .fab, .fas {
      padding: 5px 10px;
      font-size: 25px;
      width: 35px;
      text-align: center;
      text-decoration: none;
      color: $social-icon;
    }
  }
.content{

}
.card-img-container{
  grid-area: card-img-container;
}
  .info-card{
    grid-area: info-card;
  }
</style>
