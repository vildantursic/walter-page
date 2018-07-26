<template>
  <div class="social" v-if="item && link">
    <a target="_blank"
       :href="`https://www.linkedin.com/shareArticle?mini=true&url=http://new.walter.ba${link}&title=${item.title.rendered}&summary=${item.acf.description}`"><i
      class="fab fa-linkedin"></i></a>
    <a target="_blank" v-on:click="submitAndShare"><i
      class="fab fa-facebook"></i></a>
    <a target="_blank"
       :href="`https://twitter.com/intent/tweet?text=${item.acf.description} http://new.walter.ba${link}`"><i
      class="fab fa-twitter"></i></a>
    <a :href="`mailto:youremail@gmail.com?subject=shared link&body=${item.acf.description} ${link}`"><i
      class="fas fa-envelope"></i></a>
  </div>
  <!-- link with app_id https://www.facebook.com/dialog/feed?app_id=1389892087910588%20&redirect_uri=https%3A%2F%2Fscotch.io%20&link=https%3A%2F%2Fscotch.io%20&picture=http%3A%2F%2Fplacekitten.com%2F500%2F500%20&caption=This%20is%20the%20caption%20&description=This%20is%20the%20description -->
</template>

<script>
  export default {
    props: ['item', 'link'],
    methods: {
      shareOverrideOGMeta (overrideLink, overrideTitle, overrideDescription, overrideImage)
      {
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.shares',
            action_properties: JSON.stringify({
              object: {
                'og:url': overrideLink,
                'og:title': overrideTitle,
                'og:description': overrideDescription,
                'og:image': overrideImage
              }
            })
          },
          function (response) {
            // Action after response
          });
      },
      submitAndShare()
      {
        var title = this.item.title.rendered;
        var description = this.item.acf.description
        var image = this.item._embedded['wp:featuredmedia'][0].source_url;
        this.shareOverrideOGMeta(window.location.href,
          title,
          description,
          image);
        return false;
      }
    },
    mounted() {
      window.fbAsyncInit = function() {
        FB.init({
          appId            : '2177681459134790',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v3.0'
        });
      };
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .social {
    display: flex;
    align-items: center;
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
