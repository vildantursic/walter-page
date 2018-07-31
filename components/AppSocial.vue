<template>
  <div class="social" v-if="item && link">
    <a target="_blank"
       :href="`https://www.linkedin.com/shareArticle?mini=true&url=http://new.walter.ba${link}&title=${item.title.rendered}&summary=${item.acf.description}`"><i
      class="fab fa-linkedin"></i></a>
    <a target="_blank" :href="`http://www.facebook.com/sharer.php?u=http://new.walter.ba${link}`"><i
      class="fab fa-facebook"></i></a>
    <a target="_blank"
       :href="`https://twitter.com/intent/tweet?text=${item.acf.description} http://new.walter.ba${link}`"><i
      class="fab fa-twitter"></i></a>
    <a :href="`mailto:youremail@gmail.com?subject=shared link&body=${item.acf.description} ${link}`"><i
      class="fas fa-envelope"></i></a>
  </div>
</template>

<script>
  export default {
    props: ['item', 'link']
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .social {
    display: flex;
    align-items: center;
    padding: 0 !important;
  }

  .fab, .fas {
    padding: 5px 10px 5px 0;
    font-size: 30px;
    width: 40px;
    text-decoration: none;
    color: $social-icon;

    @include screen-size('l') {
      font-size: 30px;
      width: 30px;
      padding: 5px 10px 5px 0;
    }
    @include screen-size('m') {
      font-size: 30px;
      width: 30px;
      padding: 5px 10px 5px 0;
    }
    @include screen-size('s') {
      font-size: 30px;
      width: 30px;
      padding: 5px 10px 5px 0;
    }
    @include screen-size('xs') {
      font-size: 30px;
      width: 30px;
      padding: 5px 10px 5px 0;
    }
  }

  .fab:hover, .fas:hover {
    color: $main-color;
  }

  .fa-chevron-right {
    padding: 0;
    font-size: 1.2em;
    width: 30px;
  }
</style>
