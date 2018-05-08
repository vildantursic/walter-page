<template>
  <div>
    <div class="navigation">
      <scrollactive ref="scrollactive"
                    class="nav"
                    active-class="is-active"
                    :offset="80"
                    :duration="800"
                    bezier-easing-value=".5,0,.35,1"
                    v-on:itemchanged="onItemChanged">
        <a href="#statistics" class="scrollactive-item">Statistics</a>
        <a href="#history" class="scrollactive-item">History</a>
        <a href="#board-members" class="scrollactive-item">Board Members</a>
        <a href="#partners" class="scrollactive-item">Partners</a>
        <a href="#clients" class="scrollactive-item">Clients</a>
        <a href="#contact" class="scrollactive-item">Contact</a>
      </scrollactive>
    </div>
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
        <div class="tabs">
          <div class="tabbed-section__selector">
            <a :class="[index === currentHistory ? 'active': '', `tabbed-section__selector-tab-${currentHistory + 1}`]"
               v-for="(obj, index) in histories"
               :key="index" @click="currentHistory = index">
              {{obj.title.rendered}}
            </a>
            <span class="tabbed-section__highlighter"></span>
          </div>
        </div>
        <AppHistory :items="histories" :currentHistory="currentHistory" @currentHistory="currentHistory = $event"></AppHistory>
        <div class="achievements" v-if="histories.length !== 0">
          <div v-for="(item, index) in achievements" :key="index">
            <AppAchievement v-if="item.id !== -1" :item="item"></AppAchievement>
            <div class="plus" v-if="item.id === -1">+</div>
          </div>
        </div>

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
          <div class="users">
            <AppContactPerson v-for="(item, index) of page.acf.contact_persons" :key="index" :user="item"></AppContactPerson>
          </div>
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
  import AppAchievement from "~/components/AppAchievement"
  import axios from "axios"
  import { find } from "lodash"

  export default {
    components: {
      AppBoardMember,
      AppPartner,
      AppClient,
      AppMap,
      AppNumber,
      AppHistory,
      AppContactPerson,
      AppAchievement
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
        achievements: [],
        currentHistory: 0,
        partners: [],
        boardMembers: [],
        customers: []
      }
    },
    watch: {
      currentHistory: function (newVal, oldVal) {
        if (newVal > oldVal) {
          this.achievements = this.achievements.concat({ id: -1 }).concat(this.histories[newVal].acf.achievements)
        } else {
          this.histories[oldVal].acf.achievements.forEach(el => this.achievements.pop())
          this.achievements.pop()
        }
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
      onItemChanged(event, currentItem, lastActiveItem) {
        if (currentItem) {
          const parser = new DOMParser();
          let htmlDoc = parser.parseFromString('<a data-v-5357e832="" href="#contact" class="scrollactive-item is-active">Contact</a>', "text/html");
          if (currentItem.toString() === htmlDoc.body.firstChild.toString()) {
            this.$refs.scrollactive.$el.className = 'scrollactive-nav nav last-section'
          } else {
            this.$refs.scrollactive.$el.className = 'scrollactive-nav nav'
          }
        }
      },
      getHistories() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/histories?_embed').then((response) => {
          this.histories = response.data.reverse()
          this.getAchievements()
        }).catch((error) => {
          console.log(error)
        });
      },
      getAchievements() {
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/achievements?_embed').then((response) => {
          this.histories.map(history => {
            history.acf.achievements = response.data.filter((achievement) => {
              return find(history.acf.achievements, { ID: achievement.id }) ? achievement : undefined
            });
            console.log(history)
            return history
          })
          this.achievements = this.achievements.concat(this.histories[this.currentHistory].acf.achievements)
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
        axios.get('http://walter.hotelsnjesko.ba/wp-json/wp/v2/customers?per_page=100&_embed').then((response) => {
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
    display: flex;
    justify-content: center;
    flex-direction: column;

    .history {
      width: 100%;
    }

    .achievements {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 50px 15%;

      .plus {
        font-size: 2em;
        font-weight: bolder;
      }
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
      @include grid-items(10%, 30px, 2, 1);
    }
  }

  .clients-section {
    min-height: 100vh;
    background: $secondary-color;
    padding-top: 50px;

    .clients {
      width: 100%;
      margin-top: 50px;
      @include grid-items(20px, 50px, 10, 5);
    }
  }

  .contact {
    position: relative;
    display: grid;
    grid-auto-columns: 100%;

    .users {
      position: absolute;
      left: 0;
      height: 100vh;
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .card {
        margin: 50px 0;
      }
    }
  }

  .navigation {
    position: fixed;
    z-index: 200;
    top: 150px;
    left: 50px;

    .is-active {
      font-size: 3em !important;
      font-weight: bolder !important;
    }

    .nav {
      display: flex;
      flex-direction: column;

      a {
        width: 5px;
        color: black;
        margin: 5px 0;
        font-size: 1em;
      }
    }
    .last-section {

      a {
        color: white;
      }
    }
  }

  // history tabs
  .tabs {
    margin: 0 0 100px 15%;

    .tabbed-section__selector {
      position: relative;
      height: $main-size*2;
      top: -$main-size*1.95;
      left: -$main-size;
      padding: 0;
      margin: 0;
      width: 100%;
      float: left;

      [class*="-tab-"] {
        float: left;
        display: block;
        height: $main-size*2;
        line-height: $main-size*2;
        width: 100px;
        text-align: center;
        background: #fff;
        font-weight: bold;
        text-decoration: none;
        color: black;
        font-size: 14px;


        &.active {
          color: $main-color;
        }
      }

      a {
        cursor: pointer;
      }
      a:first-child {
        border-top-left-radius: 2px;
      }
      a:last-of-type {
        border-top-right-radius: 2px;
      }
    }

    .tabbed-section__highlighter {
      position: absolute;
      z-index: 10;
      bottom: 0;
      height: 2px;
      background: $main-color;
      max-width: 100px;
      width: 100%;
      transform: translateX(0);
      display: block;
      left: 0;
      transition: transform .23s ease ;
    }


    .tabbed-section__selector-tab-4.active ~ .tabbed-section__highlighter {
      transform: translateX(300px);
    }
    .tabbed-section__selector-tab-3.active ~ .tabbed-section__highlighter {
      transform: translateX(200px);
    }
    .tabbed-section__selector-tab-2.active ~ .tabbed-section__highlighter {
      transform: translateX(100px);
    }
    .tabbed-section__selector-tab-1.active ~ .tabbed-section__highlighter {
      transform: translateX(0);
    }
  }
</style>
