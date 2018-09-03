<template>
  <div class="social">
    <social-sharing :url="`https://walter.surge.sh${link}`"
                    :title="item.title.rendered"
                    :description="item.acf.description"
                    :quote="item.acf.description"
                    hashtags="walter,BIM"
                    twitter-user="walter"
                    inline-template>
      <div>
        <network network="linkedin">
          <i class="fab fa-linkedin"></i>
        </network>
        <network network="facebook">
          <i class="fab fa-facebook"></i>
        </network>
        <network network="twitter">
          <i class="fab fa-twitter"></i>
        </network>
        <network network="email">
          <i class="fas fa-envelope"></i>
        </network>
      </div>
    </social-sharing>
  </div>
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
        const title = this.item.title.rendered;
        const description = this.item.acf.description
        const image = this.item._embedded ? this.item._embedded['wp:featuredmedia'][0].source_url : 'https://walter.ba/cms/wp-content/uploads/2018/04/walter.png';
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
          appId            : '294084351009346',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v3.0'
        });
      };
      (function(d, s, id){
        let js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .social {
    display: flex;
    align-items: center;
    padding: 0 !important;

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
  }


</style>
