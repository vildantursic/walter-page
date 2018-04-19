<template>
  <section>
    <div class="header-news">
      <h1 class="title">I'm a title. Click
        here to edit me.</h1>
      <div class="social">
        <!-- Add font awesome icons -->
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fas fa-envelope"></i></a>
        <a href="#"><i class="fas fa-paperclip"></i></a>
      </div>
    </div>
    <div class="item">
      <div class="img-header">
        <p class="category">BIM Architecture</p>
        <p class="author">John Doe, June 20 at 10:05 PM</p>
      </div>
      <div class="img-container">
        <img class="img" src="~/static/images/arch.jpg" alt="">
      </div>
      <div class="post-content">
        <div class="post-left">
          <p class="header-left">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
            double click me and you can start adding your own content and make changes to the font. Feel
            free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story
            and let your users know a little more about you.</p>
          <p>
            This is a great space to write long text about your company and your services. You can use this space
            to go into a little more detail about your company. Talk about your team and what services you provide.
            Tell your visitors the story of how you came up with the idea for your business and what makes you different
            from your competitors. Make your company stand out and show your visitors who you are. Tip:
            Add your own image by double clicking the image and clicking Change Image.
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
            click me and you can start adding your own content and make changes to the font. Feel free to drag
            and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users
            know a little more about you.
            This is a great space to write long text about your company and your services. You can use this space
            to go into a little more detail about your company. Talk about your team and what services you provide.
            Tell your visitors the story of how you came up with the idea for your business and what makes you different
            from your competitors. Make your company stand out and show your visitors who you are. Tip:
            Add your own image by double clicking the image and clicking Change Image
          </p>
        </div>
        <div class="post-right">
          <div class="year">
            <span class="current-year">NEXT ARTICLE</span> <span><i class="fas fa-chevron-right"></i></span>
          </div>
          <OtherPosts :category="'PRESS RELEASE'" :author="'John Doe, June 20 at 10:05 PM'" :title="'I\'m a title. Click here to edit me.'" ></OtherPosts>
          <OtherPosts  :category="'PRESS RELEASE'" :author="'John Doe, June 20 at 10:05 PM'" :title="'I\'m a title. Click here to edit me.'"></OtherPosts>
          <OtherPosts  :category="'PRESS RELEASE'" :author="'John Doe, June 20 at 10:05 PM'" :title="'I\'m a title. Click here to edit me.'"></OtherPosts>
        </div>
      </div>
    </div>
    <div class="img-container-bottom">
      <img class="img-bottom" src="~/static/images/hyatt.jpg" alt="">
    </div>
  </section>
</template>

<script>
  import AppFilter from '~/components/AppFilter'
  import AppNews from '~/components/AppNews'
  import AppPageTitle from '~/components/AppPageTitle'
  import OtherPosts from '~/components/OtherPosts'
  import axios from 'axios'
  export default {
    data() {
      return {
        items: [],
        filters: [
          {
            id: 1,
            name: 'test 1'
          },
          {
            id: 2,
            name: 'test 2'
          },
          {
            id: 3,
            name: 'test 3'
          },
          {
            id: 4,
            name: 'test 4'
          }
        ],
        subfilters: [
          {
            id: 1,
            name: 'subtest 1'
          },
          {
            id: 2,
            name: 'subtest 2'
          }
        ]
      }
    },
    components: {
      AppFilter,
      AppNews,
      AppPageTitle,
      OtherPosts
    },
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/posts').then(function (response) {
        return { items: response.data }
      }).catch(function (error) {
        console.log(error);
      });
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .item {
    @include grid-items(0px, 20px, 1, 1);
  }
  .header-news
  {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .title
    {
      font-size: 2.5em;
      color: grey;
    }
    .social
    {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .img-header
  {
    .category
    {
      margin: 0;
      font-size: 1em;
      font-weight: 700;
      color: blue;
      letter-spacing: 2px;
    }
    .author
    {
      margin: 0;
      font-size: 0.8em;
      font-weight: 500;
      color: gray;
    }
  }
  .img-container
  {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 500px;
    .img {
      height: 100%;
      width: 100%;
    }
  }
  .img-container-bottom
  {
    max-height: 500px;
    .img-bottom {
      width: 100%;
    }
  }
  .post-content
  {
    display: flex;
    flex-direction: row;
    .post-left
    {
      width: 70%;
      padding: 0 2% 0 2%;
      .header-left
      {
        font-weight: 800;
      }
    }
    .post-right
    {
      margin: 0 3% 0 3%;
      width: 30%;
      .year {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .current-year {
          font-size: 1.2em;
          font-weight: bold;
        }
        margin: 0 0 1.5em 0;
        padding-bottom: 1em;
        border-width: 0 0 4px 0;
        border-style: solid;
        -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #c1c8d1 100%);
        -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #c1c8d1 100%);
        border-image: linear-gradient(45deg, #405dce 0%, #c1c8d1 100%);
        border-image-slice: 1;
      }
    }
  }
  .fab ,.fas{
    padding: 5px 10px;
    font-size: 30px;
    width: 40px;
    text-align: center;
    text-decoration: none;
  }
  .fab:hover, .fas:hover {
    opacity: 0.75;
  }
  .fa-facebook {
    background: #ffffff;
    color: grey;
  }
  .fa-twitter {
    background: #ffffff;
    color: grey;
  }
  .fa-google {
    background: #ffffff;
    color: grey;;
  }
  .fa-linkedin {
    background: #ffffff;
    color: grey;
  }
  .fa-envelope
  {
    background: #ffffff;
    color: grey;
  }
  .fa-paperclip
  {
    background: #ffffff;
    color: grey;
  }
  .fa-chevron-right
  {
    background: #ffffff;
    padding: 0;
    font-size: 1.2em;
    width: 30px;
  }
</style>
