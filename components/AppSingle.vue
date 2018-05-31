<template>
  <div class="card">
    <div class="content">
      <div class="card-img-container">
        <AppSlider v-if="item.acf.gallery_images"
                   :images="item.acf.gallery_images.split(',')"
                   :miniSlider="true"
                   @showLightBox="showLightBox = !showLightBox"></AppSlider>
        <h1 v-if="!item.acf.gallery_images">No Images</h1>
      </div>
      <div class="info-card">
        <div class="close">
          <AppSocial :item="item" :link="$route.path"></AppSocial>
          <i class="fas fa-times" @click="closeCase"></i>
        </div>
        <p class="category">
          <span v-for="(category, index) of item.case_categories" :key="index"> {{category.name}}<span
            v-if="index < item.case_categories.length - 1">,</span></span>
        </p>
        <AppImageBox :showLightBox="showLightBox"
                     :images="item.acf.gallery_images.split(',').map(image => { return { thumb: image, src: image } })"></AppImageBox>
        <h4 class="title">{{item.title.rendered}}</h4>
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
    /*overflow: hidden;*/
    width: 100%;
    height: 95%;
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
      display: flex;
      flex-direction: row;

      @include screen-size(xs) {
        flex-direction: column;
        height: 100%;
        padding: 0 5px;
      }
      @include screen-size(s) {
        flex-direction: column;
        height: 100%;
        padding: 0 5px;
      }

      .card-img-container {
        width: 60%;

        @include screen-size(xs) {
          width: 100%;
        }
        @include screen-size(s) {
          width: 100%;
        }
      }
      .info-card {
        position: relative;
        width: 40%;
        padding: 1.5em 1.5em 1.5em 2.5em;

        @include screen-size(xs) {
          margin-top: 50px;
          width: 100%;
          padding: 0;
        }
        @include screen-size(s) {
          margin-top: 50px;
          width: 100%;
          padding: 0;
        }

        .category {
          font-size: 1em;
          margin-top: 1em;
          font-weight: 300;
        }
        .title {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0;
          color: $dark-grey;
        }
        .author {
          font-weight: 500;
          font-style: italic;
        }
        .description {
        }
        .divider {
          margin-top: 10vh;
          border-top: 1px solid gray;
        }
        .text-box {
          height: 500px;
          overflow: auto;
          width: 90%;

          @include screen-size(xs) {
            height: auto;
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
    .fab, .fas {
      padding: 5px 10px;
      font-size: 25px;
      width: 35px;
      text-align: center;
      text-decoration: none;
      color: $social-icon;
    }
  }


</style>
