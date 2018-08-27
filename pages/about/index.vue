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
        <a href="#statistics" class="scrollactive-item" :ref="1" @click="notLast()">Who are we</a>
        <a href="#history" class="scrollactive-item" :ref="2" @click="notLast()">Our history</a>
        <a href="#board-members" class="scrollactive-item" :ref="3" @click="notLast()">Board Members</a>
        <a href="#partners" class="scrollactive-item" :ref="4" @click="notLast()">Our partners</a>
        <a href="#clients" class="scrollactive-item" :ref="5" @click="notLast()">Clients</a>
        <a href="#contact" class="scrollactive-item" :ref="6" @click="last()">Contact us</a>
      </scrollactive>
    </div>
    <div class="section">
      <section id="statistics" class="statistics-section padded-content">
        <h2 v-if="page.content" v-html="page.content.rendered"></h2>
        <div class="statistics">
          <AppNumber :number="page.acf.engineers" :text="'Engineers'"/>
          <AppNumber :number="page.acf.experience_bim" :text="'Years of gathered BIM experience'"/>
          <AppNumber :number="page.acf.clients" :text="'Clients'"/>
          <AppNumber :number="page.acf.projects" :text="'Projects'"/>
          <AppNumber :number="page.acf.revit_families" :text="'Revit families'"/>
          <AppNumber :number="page.acf.digitalized_sqm" :text="'sqm digitized'"/>
        </div>
      </section>
    </div>
    <div class="section">
      <section id="history" class="history-section">
        <div class="tabs">
          <div class="tabbed-section__selector" v-if="page.title">
            <a :class="[index === currentHistory ? 'active': '', `tabbed-section__selector-tab-${currentHistory + 1}`]"
               v-for="(obj, index) in histories"
               :key="index" @click="currentHistory = index" v-html="obj.title.rendered">
            </a>
            <span class="tabbed-section__highlighter"></span>
          </div>
        </div>
        <AppHistory :items="histories" :currentHistory="currentHistory"
                    @currentHistory="currentHistory = $event"></AppHistory>
        <div class="achievements" v-if="histories.length !== 0">
          <div v-for="(item, index) in achievements" :key="index">
            <AppAchievement v-if="item.id !== -1" :item="item"></AppAchievement>
            <div class="plus" v-if="item.id === -1">+</div>
          </div>
          <AppAchievement :item="employeeItem()"></AppAchievement>
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
        <h1 v-html="page.acf.clients_text"></h1>
        <div class="clients">
          <AppClient v-for="(item, index) of customers" :key="index" :item="item"/>
        </div>
      </section>
    </div>
    <div class="section" id="contact-section">
      <section id="contact" class="contact-section">
        <div class="contact">
          <div class="countries">
            <h3 class="text">Hägerstensvägen 97A,<br> 126 49 Stockholm, Sweden</h3>
            <h3 class="text">Muhameda Kantardžića 3,<br>Sarajevo, Bosnia and Herzegovina</h3>
          </div>
          <div class="map">
            <AppMap/>
          </div>
          <div class="users">
            <AppContactPerson v-for="(item, index) of contactPersons" :key="index" :user="item"></AppContactPerson>
          </div>
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
  import AppMoreCard from "~/components/AppMoreCard"
  import { find } from "lodash"

  export default {
    head () {
      return {
        title: 'About Us - Walter',
        meta: [
          { hid: 'description', name: 'description', content: this.page.acf.title },
          { hid: 'image', name: 'image', content: './walter.png'},

          { hid: 'og:title', property: 'og:title', content: this.page.acf.title  },
          { hid: 'og:description', property: 'og:description', content: this.page.acf.description },
          { hid: 'og:url', property: 'og:url', content: 'http://walter.ba/about' },
          { hid: 'og:image', property: 'og:image', content: './video-image-jpg' },
          { hid: 'og:site_name', property: 'og:site_name', content: 'Walter' },
        ]
      }
    },
    components: {
      AppBoardMember,
      AppPartner,
      AppClient,
      AppMap,
      AppNumber,
      AppHistory,
      AppContactPerson,
      AppAchievement,
      AppMoreCard
    },
    data() {
      return {
        items: [],
        page: {
          acf: {}
        },
        histories: [],
        achievements: [],
        currentHistory: 0,
        partners: [],
        boardMembers: [],
        customers: [],
        contactPersons: {},
        activeItem: null,
        lastActiveItem: null,
        oldScroll: 0,
        once: false,
        activeRef: 1,
        menuItems:
          [
            {ref: 1, href: '#statistics'},
            {ref: 2, href: '#history'},
            {ref: 3, href: '#board-members'},
            {ref: 4, href: '#partners'},
            {ref: 5, href: '#clients'},
            {ref: 6, href: '#contact'}
          ],
        nextId: 0
      }
    },
    async asyncData({ app }) {
      const page = await app.$axios.$get('pages/73?_embed');
      return { page }
    },
    created() {
      this.reverseItems()
      this.getHistories()
      this.getPartners()
      this.getBoardMembers()
      this.getCustomers()
    },
    watch: {
      currentHistory: function (newVal, oldVal) {
        if (newVal > oldVal) {
          for (let i = oldVal; i < newVal; i++) {
            this.achievements = this.achievements.concat({id: -1}).concat(this.histories[i + 1].acf.achievements)
          }
        } else {
          for (let i = oldVal; i > newVal; i--) {
            this.histories[i].acf.achievements.forEach(() => this.achievements.pop())
            this.achievements.pop()
          }
        }
      }
    },
    methods: {
      employeeItem() {
        return {
          _embedded: {
            'wp:featuredmedia': [
              { source_url: 'https://walter.ba/cms/wp-content/uploads/History-employees.png' }
            ]
          },
          title: {
            rendered: `${this.histories[this.currentHistory].acf.employees} ${this.histories[this.currentHistory].acf.employees > 40 ? '+' : ''} Employees`
          }
        }
      },
      onItemChanged(event, currentItem, lastActiveItem) {
        this.activeItem = currentItem
        this.once = false
        this.$refs.scrollactive.$el.className = 'scrollactive-nav nav'
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
      notLast() {
        this.$refs.scrollactive.$el.className = 'scrollactive-nav nav'
      },
      last() {
        this.$refs.scrollactive.$el.className = 'scrollactive-nav nav last-section'
      },
      async getHistories() {
        this.histories = await this.$axios.$get('histories?_embed')
        this.histories.reverse()
        this.getAchievements()
      },
      async getAchievements() {
        const response = await this.$axios.$get('achievements?_embed')
        this.histories.map(history => {
          history.acf.achievements = response.filter((achievement) => {
            return find(history.acf.achievements, {ID: achievement.id}) ? achievement : undefined
          });
          return history
        })
        this.achievements = this.achievements.concat(this.histories[this.currentHistory].acf.achievements)
      },
      async getPartners() {
        this.partners = await this.$axios.$get('partners?_embed')
      },
      async getBoardMembers() {
        this.boardMembers = await this.$axios.$get('board_members?_embed')
      },
      async getCustomers() {
        this.customers = await this.$axios.$get('customers?per_page=100&_embed')
      },
      reverseItems() {
        this.contactPersons = this.page.acf.contact_persons.reverse()
      },
      handleScroll(e) {
        const top = window.pageYOffset || document.documentElement.scrollTop
        if (this.oldScroll < top) {
          const hrefSplit = this.activeItem['href'].split('#')
          const activeHref = '#' + hrefSplit[1]
          this.menuItems.forEach((item) => {
            if (item.href === activeHref) {
              this.activeRef = item.ref
            }
          })
          const number = parseInt(this.activeRef)
          if (number === 6) {
            this.nextId = number
          } else {
            this.nextId = number + 1;
          }

          if (!this.once) {
            this.$refs[this.nextId].click()
            this.once = true
          }
        } else if (this.oldScroll > top) {
          const activeHref = this.activeItem['href']
          this.menuItems.forEach((item) => {
            if (item.href === activeHref) {
              this.activeRef = item.ref
            }
          })
          const number = parseInt(this.activeRef)
          if (number === 0) {
            this.nextId = number
          } else {
            this.nextId = number - 1;
          }

          if (!this.once) {
            this.$refs[this.nextId].click()
            this.once = true
          }
        }
        this.oldScroll = top
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";
  @import "../../assets/styles/variables";

  .statistics-section {
    min-height: 100vh;
    background: $secondary-dark-color;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      width: 75%;
      font-weight: 300;
      font-size: 1.4em;
      opacity: 1;
      margin-top: 5%;
      margin-bottom: 5%;
      color: $dark-grey;
      @include screen-size('xl') {
        font-size: 1.2em;
        margin-top: 8%;
      }
      @include screen-size('l') {
        font-size: 1.2em;
        margin-top: 8%;
      }
      @include screen-size('m') {
        width: 90%;
        font-size: 1em;
      }
      * {
        line-height: 35px;
      }

      @include screen-size('xs') {
        width: 100%
      }
    }
    .statistics {
      width: 100%;
      @include grid-items(10%, 20px, 3, 2, 1);
    }
  }

  .history-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .history {
    }

    .achievements {
      display: flex;
      align-items: center;
      justify-content: center;

      @include screen-size(s) {
        flex-direction: column;
      }
      @include screen-size(xs) {
        flex-direction: column;
        width: 100%;
        margin-bottom: 10%;
      }

      .plus {
        font-size: 1.5em;
        font-weight: bolder;
        color: $dark-grey;
        @include screen-size(xs) {
          display: none;
        }
      }
    }
  }

  .board-members-section {
    min-height: 100vh;
    background: $secondary-color;
    display: flex;
    align-items: center;
    background: $secondary-dark-color;
    @include screen-size('xs') {
      margin-bottom: 50px;
    }
    .board-members {
      width: 100%;
      @include grid-items(5%, 20px, 3, 2, 1);
    }
  }

  .partners-section {
    min-height: 100vh;
    display: flex;
    align-items: center;

    .partners {
      width: 100%;
      @include grid-items(10%, 30px, 2, 1, 1);
    }
  }

  .clients-section {
    min-height: 100vh;
    padding-top: 50px;
    background: $secondary-dark-color;
    h1 {
      color: $dark-grey;
      @include screen-size('xl') {
        font-size: 1.2em;
      }
      @include screen-size('l') {
        font-size: 1.2em;
      }
      @include screen-size('m') {
        font-size: 1em;
      }
    }
    .clients {
      width: 100%;
      margin-top: 30px;
      @include grid-items(20px, 0, 6, 4, 2);
    }
  }

  .contact-section {
    height: 100vh;

    .contact {
      position: relative;
      display: flex;
      height: 100%;

      @include screen-size(s) {
        flex-direction: column;
      }
      @include screen-size(xs) {
        flex-direction: column;
      }

      .map {
        overflow: hidden;

        @include screen-size(s) {
          display: none;
        }
        @include screen-size(xs) {
          display: none;
        }
      }

      .users {
        width: 60%;
        background: #262d30;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        @include screen-size(s) {
          width: 100%;
          height: 100vh;
        }
        @include screen-size(xs) {
          width: 100%;
          height: 100vh;
          justify-content: unset;
        }

        .card {
        }
      }

      .countries {
        position: absolute;
        left: 0;
        height: 100%;
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        @include screen-size(s) {
          width: 100%;
          display: none;
        }
        @include screen-size(xs) {
          width: 100%;
          display: none;
        }

        .text {
          color: $main-color;
          opacity: 1;
          font-weight: bolder;
        }
      }
    }
  }

  .navigation {
    position: fixed;
    z-index: 200;
    top: 150px;
    left: 50px;
    width: 200px;
    @include screen-size('l') {
      width: 180px;
    }
    @include screen-size('m') {
      top: 120px;
      left: 30px;
      width: 150px;
    }
    @include screen-size('xs') {
      display: none;
    }

    .is-active {
      font-size: 1.6em !important;
      font-weight: bolder !important;
      line-height: 1em;
      /*opacity: 1;*/
      @include screen-size('m') {
        font-size: 1.3em !important;
      }
    }

    .nav {
      display: flex;
      flex-direction: column;
      width: 100%;

      a {
        width: 100%;
        color: $dark-grey;
        margin: 5px 0;
        font-size: 1em;
        @include screen-size('m') {
          margin: 0 0 10px 0;
          font-size: 0.8em;
          @include screen-size('xs') {
            margin: 0 0 10px 0;
            font-size: 0.8em;
            display: flex;
            justify-content: center;
          }
        }
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
    margin: 0 15%;

    @include screen-size('m') {
      margin: 0 20%;
    }
    @include screen-size('l') {
      margin: 0 20%;
    }
    @include screen-size('xl') {
      margin: 0 18%;
    }
    @include screen-size('xs') {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tabbed-section__selector {
      position: relative;
      height: $main-size*2;
      padding: 0;
      margin: 20px 0 60px 0;
      width: 100%;
      float: left;

      @include screen-size('xs') {
        top: 0;
        left: 0;
        margin: 40px 0 20px 0;
        display: flex;
        justify-content: center;

      }

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
        color: $dark-grey;
        font-size: 1.2em;

        @include screen-size('m') {
          font-size: 1em;
        }
        @include screen-size('xs') {
          display: flex;
          width: 80px;
          justify-content: center;
        }
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
      transition: transform .23s ease;

      @include screen-size('m') {
        display: none;
      }
      @include screen-size('s') {
        display: none;
      }
      @include screen-size('xs') {
        /*display: none;*/
      }
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
