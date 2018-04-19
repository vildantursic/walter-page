<template>
  <div class="card">
    <div class="card-img-container">
      <img class="card-img" src="~/static/images/hyatt.jpg" alt="">
    </div>
    <div class="info-card">
      <p class="category">BIM Consulting and Engineering</p>
      <h1 class="title">Hyatt Regency Maraska
        Zadar Hotel</h1>
      <a class="link" href="https://www.symetri.com/plm">www.symetri.com/plm</a>
      <p class="category">Agrob Buchtal GmbH</p>
      <div class="text-box">
        <p class="description">I'm a paragraph. Click here to add your
          own text and edit me. It’s easy. Just
          click “Edit Text” or double click me and
          you can start adding your own content
          and make changes to the font... I'm a paragraph. Click here to add your
          own text and edit me. It’s easy. Just
          click “Edit Text” or double click me and
          you can start adding your own content
          and make changes to the font...I'm a paragraph. Click here to add your
          own text and edit me. It’s easy. Just
          click “Edit Text” or double click me and
          you can start adding your own content
          and make changes to the font...</p>
      </div>
       <div class="divider">
         <p class="author">In Collaboration with Symetri</p>
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
    width: 100%;
    height: 500px;
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
      width: 60%;
      .card-img {
        height: 100%;
      }
    }
    .info-card
    {
      position: relative;
      width: 40%;
      padding: 5em 1em 1em 1.5em;
      .category
      {
        margin-top: 1em;
        font-size: 0.75rem;
        font-weight: 300;
      }
      .author
      {
        /*margin: 0;*/
        font-size: 0.8em;
        font-weight: 500;
        color: gray;
        font-style: italic;
      }
      .description{
        font-size: 0.8em;
        color: gray;
      }
      .divider{
        border-top: 1px solid gray;
        width: 70%;
        position: absolute;
        bottom: 0;
      }
      .text-box{
        height: 100px;
        width: 100%;
        overflow: auto;
      }
    }
    .link{
      font-size: 0.75rem;
      text-decoration: none;
      margin-bottom: 1em;
    }
  }

</style>
