<template>
    <div class="card animated fadeIn" data-aos="slide-up">
      <div v-if="item._embedded !== undefined" class="card-img-container">
        <img v-if="item._embedded['wp:featuredmedia'] !== undefined" :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item._embedded['wp:featuredmedia'][0].alt_text">
        <img class="no-image" v-if="item._embedded['wp:featuredmedia'] === undefined" src="~/static/images/walter-logo.png" alt="">
      </div>
      <div class="info-card">
        <div class="social">
          <!-- Add font awesome icons -->
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fas fa-envelope"></i></a>
          <a href="#"><i class="fas fa-paperclip"></i></a>
        </div>
        <div>
        <h1 class="title">{{item.title.rendered}}</h1>
        <p>{{item.acf.description | truncate(35 * 3)}}</p>
        </div>
        <div class="bottom-group">
        <p class="published">Deadline: {{date}}</p>
        <div class="more-container">
          <div class="plus">+</div>
          <div class="read"> Read <span class="more">more</span></div>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    props: ['item'],
    data() {
      return {
        date: moment(this.item.date).format('DD-MM-YYYY')
      }
    },
    components: {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .card{
    overflow: hidden;
    display: flex;
    flex-direction: row;
    height: 400px;
    padding-bottom: 2em;
    border-width: 0 0 2px 0;
    border-style: solid;
    -moz-border-image: -moz-linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
    -webkit-border-image: -webkit-linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
    border-image: linear-gradient(45deg, #405dce 0%, #8b20c0 100%);
    border-image-slice: 1;
    .card-img-container
    {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45%;
      .card-img {
        height: 100%;
      }
    }
    .info-card
    {
      position: relative;
      width: 55%;
      padding: 1em 1em;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .social
      {
        align-self: flex-end;
      }
      .category
      {
        margin: 0;
        font-size: 1em;
        font-weight: 700;
        color: blue;
        letter-spacing: 2px;
      }
      .title
      {
        font-weight: 800;
        font-size: 1.5em;
      }
      .bottom-group
      {
        position: absolute;
        bottom: 0;
        width: 95%;
        .published
        {
          font-size: 0.8em;
          font-weight: 500;
          color: gray;
          float: left;
        }
        .more-container {
          float: right;
          display: flex;
          align-items: center;
          align-self: flex-end;
          margin-top: 2em;
          .read {
            font-size: 1.5em;
            font-weight: bold;
            letter-spacing: 1px;
            .more {
              color: blue;
            }
          }
          .plus
          {
            font-size: 2.5em;
            font-weight: bold;
            padding: 0 15px;
          }
        }
      }
    }
  }
  .fab ,.fas{
    padding: 5px 10px;
    font-size: 25px;
    width: 30px;
    text-align: center;
    text-decoration: none;
  }
  .fab:hover, .fas:hover {
    opacity: 0.7;
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
    color: grey;
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
</style>
