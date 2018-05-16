<template>
  <div class="card">
    <div class="content">
      <div class="card-img-container">
        <AppSlider v-if="item.acf.gallery_images" :images="item.acf.gallery_images.split(',')"
                   :miniSlider="true"></AppSlider>
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
        <h4 class="title">{{item.title.rendered}}</h4>
        <p class="customer">
          <span v-for="(customer, index) of item.acf.customers" :key="index"> {{customer.post_title}}<span
            v-if="index < item.acf.customers.length - 1">,</span></span>
        </p>
        <div class="text-box">
          <div class="description" v-html="item.content.rendered"></div>
        </div>
        <div class="divider">
          <p v-if="item.acf.partners" class="author">In Collaboration with <span
            v-for="(partner, index) of item.acf.partners" :key="index">{{partner.post_title}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppSlider from '~/components/AppSlider'
  import AppSocial from '~/components/AppSocial'

  export default {
    props: ['item'],
    components: {
      AppSlider,
      AppSocial
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
    -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
    border-image: linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
    border-image-slice: 1;

    .close {
      width: 100%;
      display: flex;
      justify-content: space-between;

      i {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        font-size: 2em;
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

      @include screen-size(xs) {
        flex-direction: column;
      }

      .card-img-container {
        display: flex;
        justify-content: center;
        /*align-items: center;*/
        width: 60%;
        height: 100%;

        @include screen-size(xs) {
          width: 100%;
        }
      }
      .info-card {
        position: relative;
        width: 100%;
        padding: 1.5em;

        @include screen-size(xs) {
          margin-top: 50px;
          width: 100%;
          padding: 0;
        }

        .category {
          margin-top: 1em;
          font-weight: 300;
        }
        .title {
          font-size: 2em;
          font-weight: bold;
          margin: 0;
          color: $dark-grey;
        }
        .author {
          font-weight: 500;
          /*color: gray;*/
          font-style: italic;
        }
        .description {
          /*color: gray;*/
        }
        .divider {
          margin-top: 10vh;
          border-top: 1px solid gray;
          /*width: 85%;*/
        }
        .text-box {
          height: 380px;
          overflow: auto;
          width: 85%;
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
  .social{
    .fab, .fas{
      padding: 5px 10px;
      font-size: 30px;
      width: 40px;
      text-align: center;
      text-decoration: none;
      color: $social-icon;
    }
  }


</style>
