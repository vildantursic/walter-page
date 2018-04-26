<template>
  <div class="card">
    <div class="close">
      <i class="fas fa-times" @click="closeCase"></i>
    </div>
    <div class="content">
      <div class="card-img-container">
        <AppSlider v-if="item.acf.gallery_images" :images="item.acf.gallery_images.split(',')"></AppSlider>
        <h1 v-if="!item.acf.gallery_images">No Images</h1>
      </div>
      <div class="info-card">
        <p class="category">{{item.case_categories}}</p>
        <h1 class="title">{{item.title.rendered}}</h1>
        <a class="link" href="https://www.symetri.com/plm" target="_blank">www.symetri.com/plm</a>
        <p class="category">Agrob Buchtal GmbH</p>
        <div class="text-box">
          <div class="description" v-html="item.content.rendered"></div>
        </div>
        <div class="divider">
          <p v-if="item.acf.partners" class="author">In Collaboration with <span v-for="(partner, index) of item.acf.partners" :key="index">{{partner.post_title}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AppSlider from '~/components/AppSlider'

  export default {
    props: ['item'],
    components: {
      AppSlider
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

  .card {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
    border-image: linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
    border-image-slice: 1;

    .close {
      width: 100%;
      height: 5vh;

      i {
        display: flex;
        float: right;
        font-size: 2em;
        padding: 1em;
      }
    }

    .content {
      display: flex;

      .card-img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
      }
      .info-card {
        position: relative;
        width: 40%;
        padding: 5em 7em 5em 3em;

        .category {
          margin-top: 1em;
          font-weight: 300;
        }
        .title {

        }
        .author {
          font-weight: 500;
          color: gray;
          font-style: italic;
        }
        .description {
          color: gray;
        }
        .divider {
          margin-top: 10vh;
          border-top: 1px solid gray;
          width: 70%;
        }
        .text-box {
          height: 200px;
          width: 70%;
          overflow: auto;
        }
      }
      .link {
        text-decoration: none;
        color: $main-color;
      }
    }
  }

</style>
