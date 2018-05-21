<template>
  <div class="image-box">
    <lightbox ref="lightbox" v-if="showLightBox" :images="images"></lightbox>
  </div>
</template>

<script>
  import Lightbox from 'vue-image-lightbox'

  export default {
    props: ['images', 'showLightBox'],
    components: {
      Lightbox
    },
    methods: {
      onClose() {
        this.$refs.lightbox.lightBoxOn(() => {
          console.log('hit')
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image-box {
    position: absolute;
    z-index: 10000;
  }
</style>
