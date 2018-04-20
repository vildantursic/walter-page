<template>
  <section>
    <section id="board-members" class="board-members">
      <AppBoardMember v-for="(item, index) of [1,2,3]" :key="index"/>
    </section>
    <section id="partners" class="partners">
      <AppPartner v-for="(item, index) of [1,2]" :key="index"/>
    </section>
    <section id="clients" class="clients">
      <AppClient v-for="(item, index) of Array(60)" :key="index"/>
    </section>
    <section id="contact" class="contact">
      <AppMap/>
    </section>
  </section>
</template>

<script>
  import AppBoardMember from "~/components/AppBoardMember"
  import AppPartner from "~/components/AppPartner"
  import AppClient from "~/components/AppClient"
  import AppMap from "~/components/AppMap"

  export default {
    components: {
      AppBoardMember,
      AppPartner,
      AppClient,
      AppMap
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .board-members {
    height: 100vh;
    display: flex;
    align-items: center;
    @include grid-items(10%, 30px, 3, 2);
  }

  .partners {
    height: 100vh;
    display: flex;
    align-items: center;
    @include grid-items(10%, 30px, 2, 2);
  }

  .clients {
    height: 100vh;
    display: flex;
    align-items: center;
    @include grid-items(10px, 10px, 10, 5);
  }

  .contact {
    height: 100vh;
    display: flex;
    align-items: center;
  }
</style>
