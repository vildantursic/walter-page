<template>
  <div class="card">
    <div class="image">
      <img src="~/static/images/profile.png" alt="">
    </div>
    <div class="info">
      <div class="name">
        John Doe
      </div>
      <div class="role">
        Department manager
      </div>
    </div>
    <div class="icons">
      <div class="mail"><i class="fas fa-envelope"></i></div>
      <div class="phone"><i class="fas fa-phone"></i></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    background-color: #393c3d;
    border-radius: 5px;
    padding: 1.5em 1em;
    width: 350px;
    -webkit-box-shadow: 8px 8px 8px 0px rgba(57, 60, 61, 0.8);
    -moz-box-shadow: 8px 8px 8px 0px rgba(57, 60, 61, 0.8);
    box-shadow: 8px 8px 8px 0px rgba(57, 60, 61, 0.8);
    .image {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 50px;
        height: 50px;
        position: relative;
        float: left;
      }
    }
    .info {
      padding: 0em 0.5em;
      .name {
        font-size: 1.3em;
        font-weight: 900;
        color: white;
      }
      .role {
        font-size: 1em;
        font-weight: 500;
        color: white;
      }
    }
    .icons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .mail {
        font-size:2em;
        color: white;
        padding-left: 1em;
      }
      .phone {
        font-size: 2em;
        color: white;
        padding-left: 1em;
      }
    }
  }
</style>
