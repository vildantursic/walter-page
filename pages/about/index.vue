<template>
  <section>
    <section id="statistics" class="statistics-section padded-content">
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis commodi deserunt dolores, eaque ex illum itaque libero magnam, nesciunt porro quod repellendus suscipit, totam ullam? Asperiores enim facere similique?</h2>

      <div class="statistics">
        <AppNumber v-for="(item, index) of [1,2,3,4,5,6]" :key="index"/>
      </div>
    </section>
    <section id="history" class="history-section padded-content">
      <div class="history">
        <h1>HISTORY</h1>
      </div>
    </section>
    <section id="board-members" class="board-members-section padded-content">
      <div class="board-members">
        <AppBoardMember v-for="(item, index) of [1,2,3]" :key="index"/>
      </div>
    </section>
    <section id="partners" class="partners-section padded-content">
      <div class="partners">
        <AppPartner v-for="(item, index) of [1,2]" :key="index"/>
      </div>
    </section>
    <section id="clients" class="clients-section padded-content">
      <div class="clients">
        <AppClient v-for="(item, index) of Array(50)" :key="index"/>
      </div>
    </section>
    <section id="contact" class="contact-section">
      <div class="contact">
        <AppMap/>
      </div>
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

  .statistics-section {
    min-height: 100vh;
    display: grid;
    grid-auto-columns: 100%;

    .statistics {
      width: 100%;
      @include grid-items(10%, 30px, 3, 2);
    }
  }

  .history-section {
    min-height: 100vh;
    display: grid;
    grid-auto-columns: 100%;

    .history {
      width: 100%;
    }
  }

  .board-members-section {
    min-height: 100vh;
    display: grid;
    grid-auto-columns: 100%;

    .board-members {
      width: 100%;
      @include grid-items(10%, 30px, 3, 3);
    }
  }

  .partners-section {
    min-height: 100vh;
    display: grid;
    grid-auto-columns: 100%;

    .partners {
      width: 100%;
      @include grid-items(10%, 30px, 2, 2);
    }
  }

  .clients-section {
    min-height: 100vh;
    display: grid;
    grid-auto-columns: 100%;

    .clients {
      width: 100%;
      @include grid-items(20px, 50px, 10, 5);
    }
  }

  .contact {
    min-height: 100vh;
    display: grid;
    grid-auto-columns: 100%;
  }
</style>
