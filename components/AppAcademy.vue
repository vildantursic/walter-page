<template>
  <div class="card animated fadeIn" data-aos="slide-up">
    <div v-if="item._links !== undefined" class="card-img-container">
      <img class="card-img" v-if="item['featured_media'] !== 0" :src="getImage(item['featured_media'])">
      <img class="no-image" v-if="item['featured_media'] === 0" src="~/static/images/walter-logo.png" alt="">
    </div>
    <div class="info">
      <h1 class="title">{{item.title.rendered}}</h1>
      <div class="about">
        <p>{{item["featured_media"]}}</p>
      </div>
      <div class="published">{{item.date}}</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['item'],
    data() {
      return {
        media: {}
      }
    },
    components: {
    },
    methods: {
      getImage(featuredMedia)
      {
        setTimeout(this.getMedia(featuredMedia), 4000)
        console.log(this.media.guid)
        var source_url  = this.media
        console.log(source_url)
        return source_url
      },
      getMedia(featuredMedia)
      {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/media/' + featuredMedia).then((response) => {
          console.log(this.media)
         this.media = response.data
        }).catch((error) => {
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';
  @import '../assets/styles/mixins';

  .card {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    height: 400px;
    padding: 2em;
    border-width: 0 0 3px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #0093c8 0%, #faaf40 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #0093c8 0%, #faaf40 100%);
    border-image: linear-gradient(45deg, #0093c8 0%, #faaf40 100%);
    border-image-slice: 1;

    @include screen-size(xs) {
      flex-direction: row;
    }

    .card-img-container {
      background-color: $secondary-color;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40%;
      height: 100%;

      @include screen-size(xs) {
        width: 100%;
        height: 300px;
      }

      .card-img {
        height: 100%;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      padding: 0 3em 3em 3em;
      .published
      {
        font-size: 0.8em;
        font-weight: 500;
        color: gray;
      }
    }
  }
</style>
