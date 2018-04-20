<template>
  <section>
    <section id="statistics" class="statistics">
      <AppNumber v-for="(item, index) of [1,2,3,4,5,6]" :key="index"/>
    </section>
    <section id="history" class="history">
      <h1>HISTORY</h1>
    </section>
    <section id="board-members" class="board-members">
      <AppBoardMember v-for="(item, index) of [1,2,3]" :key="index"/>
    </section>
    <section id="partners" class="partners">
      <AppPartner v-for="(item, index) of [1,2]" :key="index"/>
    </section>
    <section id="clients" class="clients">
      <div class="clients-content">
        <AppClient v-for="(item, index) of Array(50)" :key="index"/>
      </div>
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
  import AppNumber from "~/components/AppNumber"

  export default {
    components: {
      AppBoardMember,
      AppPartner,
      AppClient,
      AppMap,
      AppNumber
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .statistics {
    height: 100vh;
    display: flex;
    align-items: center;
    @include grid-items(10%, 30px, 3, 2);
  }

  .history {
    height: 100vh;
    display: flex;
    align-items: center;
    @include grid-items(10%, 30px, 3, 2);
  }

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

    .clients-content {
      display: flex;
      align-items: center;
      @include grid-items(20px, 50px, 10, 5);
    }
  }

  .contact {
    height: 100vh;
    display: flex;
    align-items: center;
  }
</style>
