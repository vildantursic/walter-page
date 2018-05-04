<template>
  <div>
    <div class="section">
      <section id="statistics" class="statistics-section padded-content">
        <h2 v-html="page.content.rendered"></h2>
        <div class="statistics">
          <AppNumber :number="page.acf.engineers" :text="'Engineers'"/>
          <AppNumber :number="page.acf.experience_bim" :text="'Years of gathered BIM experience'"/>
          <AppNumber :number="page.acf.projects" :text="'Projects'"/>
          <AppNumber :number="page.acf.clients" :text="'Clients'"/>
          <AppNumber :number="page.acf.revit_families" :text="'Revit families'"/>
          <AppNumber :number="page.acf.digitalized_sqm" :text="'sqm digitized'"/>
        </div>
      </section>
    </div>
    <div class="section">
      <section id="history" class="history-section">
        <AppHistory :items="histories"></AppHistory>
      </section>
    </div>
    <div class="section">
      <section id="board-members" class="board-members-section padded-content">
        <div class="board-members">
          <AppBoardMember v-for="(item, index) of [1,2,3]" :key="index"/>
        </div>
      </section>
    </div>
    <div class="section">
      <section id="partners" class="partners-section padded-content">
        <div class="partners">
          <AppPartner v-for="(item, index) of [1,2]" :key="index"/>
        </div>
      </section>
    </div>
    <div class="section">
      <section id="clients" class="clients-section padded-content">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid consequatur dolore
          doloribus eaque</h1>
        <div class="clients">
          <AppClient v-for="(item, index) of Array(50)" :key="index"/>
        </div>
      </section>
    </div>
    <div class="section">
      <section id="contact" class="contact-section">
        <div class="contact">
          <AppMap/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import AppBoardMember from "~/components/AppBoardMember"
  import AppPartner from "~/components/AppPartner"
  import AppClient from "~/components/AppClient"
  import AppMap from "~/components/AppMap"
  import AppNumber from "~/components/AppNumber"
  import AppHistory from "~/components/AppHistory"
  import axios from "axios"

  export default {
    components: {
      AppBoardMember,
      AppPartner,
      AppClient,
      AppMap,
      AppNumber,
      AppHistory
    },
    data() {
      return {
        options: {
          navigation: true,
          anchors: ['page1', 'page2', 'page3', 'page4'],
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        },
        items: [],
        page: {
          acf: {}
        },
        histories: []
      }
    },
    created() {
      this.getHistories()
    },
    asyncData({}) {
      return axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/pages/73?_embed').then((response) => {
        return {page: response.data}
      }).catch((error) => {
        console.log(error)
      });
    },
    methods: {
      getHistories() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/histories?_embed').then((response) => {
          this.histories = response.data
        }).catch((error) => {
          console.log(error)
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";

  .statistics-section {

    h2 {
      width: 65%;
      margin: 100px 0;
      font-weight: 300;
    }
    .statistics {
      width: 100%;
      @include grid-items(10%, 20px, 3, 2);
    }
  }

  .history-section {
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-auto-columns: 100%;

    .history {
      width: 100%;
    }
  }

  .board-members-section {
    display: grid;
    grid-auto-columns: 100%;

    .board-members {
      width: 100%;
      @include grid-items(10%, 30px, 3, 3);
    }
  }

  .partners-section {
    display: grid;
    grid-auto-columns: 100%;

    .partners {
      width: 100%;
      @include grid-items(10%, 30px, 2, 2);
    }
  }

  .clients-section {
    display: grid;
    grid-auto-columns: 100%;

    .clients {
      width: 100%;
      @include grid-items(20px, 50px, 10, 5);
      justify-content: center;
      align-items: center
    }
  }

  .contact {
    display: grid;
    grid-auto-columns: 100%;
  }

</style>
