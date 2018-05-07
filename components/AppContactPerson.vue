<template>
    <div class="card">
      <style>
        .avatar.photo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      </style>
      <div class="image" v-html="user.user_avatar"></div>
      <div class="info">
        <div class="name">
          {{user.user_firstname}} {{user.user_lastname}}
        </div>
        <div class="role">
          {{user.user_description.split(',')[0]}}
        </div>
      </div>
      <div class="icons">
        <a class="mail" :href="`mailto:${user.user_email}`"><i class="fas fa-envelope"></i></a>
        <a class="phone" :href="`tel:${user.user_description.split(',')[1]}`"><i class="fas fa-phone"></i></a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AppContactPerson"
    }
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
