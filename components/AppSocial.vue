<template>
  <div class="social">
    <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=http://new.walter.ba&title=This is title&summary=this is summary&source=some source"><i class="fab fa-linkedin"></i></a>
    <a target="_blank" href="http://www.facebook.com/sharer.php?u=https://new.walter.ba"><i class="fab fa-facebook"></i></a>
    <a target="_blank" href="https://twitter.com/intent/tweet?text=Title and link to http://new.walter.ba"><i class="fab fa-twitter"></i></a>
    <a href="mailto:youremail@gmail.com?subject=this is title&body=short description and link"><i class="fas fa-envelope"></i></a>
    <a href="#"><i class="fas fa-paperclip"></i></a>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";

  .social {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .fab, .fas{
    padding: 5px 10px;
    font-size: 30px;
    width: 40px;
    text-align: center;
    text-decoration: none;
    color: $dark-color;
  }
  .fab:hover, .fas:hover {
    opacity: 0.75;
  }
  .fa-chevron-right {
    padding: 0;
    font-size: 1.2em;
    width: 30px;
  }
</style>
