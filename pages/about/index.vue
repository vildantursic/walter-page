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
          <AppBoardMember v-for="(item, index) of boardMembers" :key="index" :item="item"/>
        </div>
      </section>
    </div>
    <div class="section">
      <section id="partners" class="partners-section padded-content">
        <div class="partners">
          <AppPartner v-for="(item, index) of partners" :key="index" :item="item"/>
        </div>
      </section>
    </div>
    <div class="section">
      <section id="clients" class="clients-section padded-content">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid consequatur dolore
          doloribus eaque</h1>
        <div class="clients">
          <AppClient v-for="(item, index) of customers" :key="index" :item="item"/>
        </div>
      </section>
    </div>
    <div class="section">
      <section id="contact" class="contact-section">
        <div class="contact">
          <!--<AppContactPerson></AppContactPerson>-->
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
  import AppContactPerson from "~/components/AppContactPerson"
  import axios from "axios"

  export default {
    components: {
      AppBoardMember,
      AppPartner,
      AppClient,
      AppMap,
      AppNumber,
      AppHistory,
      AppContactPerson
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
        histories: [],
        partners: [],
        boardMembers: [],
        customers: []
      }
    },
    created() {
      this.getHistories()
      this.getPartners()
      this.getBoardMembers()
      this.getCustomers()
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
      },
      getPartners() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/partners?_embed').then((response) => {
          this.partners = response.data
        }).catch((error) => {
          console.log(error)
        });
      },
      getBoardMembers() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/board_members?_embed').then((response) => {
          this.boardMembers = response.data
        }).catch((error) => {
          console.log(error)
        });
      },
      getCustomers() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/customers?_embed').then((response) => {
          this.customers = response.data
        }).catch((error) => {
          console.log(error)
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";
  @import "../../assets/styles/variables";

  .statistics-section {
    min-height: 100vh;
    background: $secondary-color;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      width: 65%;
      font-weight: 300;
    }
    .statistics {
      width: 100%;
      @include grid-items(10%, 20px, 3, 2);
    }
  }

  .history-section {
    min-height: 100vh;
    overflow: hidden;

    .history {
      width: 100%;
    }
  }

  .board-members-section {
    min-height: 100vh;
    background: $secondary-color;
    display: flex;
    align-items: center;

    .board-members {
      width: 100%;
      @include grid-items(10%, 30px, 3, 3);
    }
  }

  .partners-section {
    min-height: 100vh;
    display: flex;
    align-items: center;

    .partners {
      width: 100%;
      @include grid-items(10%, 30px, 2, 2);
    }
  }

  .clients-section {
    min-height: 100vh;
    background: $secondary-color;

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
