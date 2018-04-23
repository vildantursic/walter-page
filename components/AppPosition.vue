<template>
    <div class="card animated fadeIn" v-scroll-reveal.reset>
      <div class="info-card">
        <p class="position">BIM Consultant</p>
        <p class="published">Published: 26-03-2018</p>
        <h1 class="description">Job description</h1>
        <p class="data">We have an immediate opportunity
          for a BIM Consultants to join our
          talented team. The successful candidates
          will work on digitization - </p>
        <p class="number">Number of positions: <span>5</span></p>
        <p class="published">Deadline: 15-04-2018</p>
        <div class="social">
          <!-- Add font awesome icons -->
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fas fa-envelope"></i></a>
          <a href="#"><i class="fas fa-paperclip"></i></a>
        </div>
        <div class="more-container">
          <div class="plus">+</div>
          <div class="read"> Read <span class="more">more</span></div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  .card{
    overflow: hidden;
    display: flex;
    flex-direction: row;
    max-height: 450px;
    padding-bottom: 2em;
    .info-card
    {
      position: relative;
      width: 100%;
      padding: 1em 1em;
      .position
      {
        margin: 0;
        font-size: 2em;
        font-weight: bold;
      }
      .published
      {
        font-size: 0.8em;
        font-weight: 500;
        color: gray;
      }
      .description
      {
        margin: 1.5em 0;
        font-size: 1em;
        font-weight: 600;
        color: blue;
        letter-spacing: 2px;
      }
      .data
      {
        margin: 0;
      }
      .number
      {
        margin: 1.5em 0;
        font-size: 1.2em;
        font-weight: 700;
      }
      .more-container
      {
        float: right;
        display: flex;
        align-items: center;
        padding-top: 10px;
        .read
        {
          font-size: 1.5em;
          font-weight: bold;
          letter-spacing: 1px;
          .more
          {
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
  .fab ,.fas{
    padding: 5px 20px 5px 0px;
    font-size: 25px;
    width: 20px;
    text-align: center;
    text-decoration: none;
  }
  .fab:hover, .fas:hover {
    opacity: 0.7;
  }
  .fa-facebook {
    background: #ffffff;
    color: black;
  }
  .fa-twitter {
    background: #ffffff;
    color: black;
  }
  .fa-google {
    background: #ffffff;
    color: black;
  }
  .fa-linkedin {
    background: #ffffff;
    color: black;
  }
  .fa-envelope
  {
    background: #ffffff;
    color: black;
  }
  .fa-paperclip
  {
    background: #ffffff;
    color: black;
  }
</style>
