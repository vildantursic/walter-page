<template>
  <div class="filter">
    <div class="main-filters">
      <ul class="main-list">
        <li :class="{ active: -1 === selectedFilter }" @click="selectFilter(-1)">All</li>
        <li v-for="(filter, index) of filters" :key="index" :class="{ active: filter.id === selectedFilter }" @click="selectFilter(filter.id)">{{filter.name}}</li>
      </ul>
      <div class="search">
        <input type="text" placeholder="Search..">
      </div>
    </div>
    <div class="date-filters" v-if="showDateFilter">
      <div class="year">
        <span><i class="fas fa-chevron-left" @click="setYear(0)"></i></span> <span class="current-year">{{date.year}}</span> <span><i class="fas fa-chevron-right" @click="setYear(1)"></i></span>
      </div>
      <ul class="month-list">
        <li v-for="(dt, index) of dates" :key="index" :class="{ active: dt.id === date.month }" @click="setMonth(dt.id)">{{dt.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['filters', 'selectedFilter', 'showDateFilter', 'monthActive'],
    data() {
      return {
        date: {
          year: 2018,
          month: 1
        },
        dates: [
          { id: 1, name: 'Jan' },
          { id: 2, name: 'Feb' },
          { id: 3, name: 'Mar' },
          { id: 4, name: 'Apr' },
          { id: 5, name: 'May' },
          { id: 6, name: 'Jun' },
          { id: 7, name: 'Jul' },
          { id: 8, name: 'Aug' },
          { id: 9, name: 'Sep' },
          { id: 10, name: 'Oct' },
          { id: 11, name: 'Nov' },
          { id: 12, name: 'Dec' }
        ]
      }
    },
    methods: {
      selectFilter(id) {
        this.$emit('onFilterSelected', id)
      },
      setMonth(id) {
        this.date.month = id
      },
      setYear(direction) {
        direction === 1 ? this.date.year++ : this.date.year--
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";

  .filter {
    width: 100%;
    margin: 10vh 0;

    ul {
      list-style: none;
      width: 100%;
      display: flex;
      margin: 0;
      padding: 0;

      li {
        cursor: pointer;
      }
    }

    .main-filters {
      display: flex;
      font-size: 1em;
      margin-bottom: 1em;

      .main-list {
        width: 85%;
        overflow: hidden;

        li {
          border-bottom: solid 3px lightgrey;
          padding: 15px 30px;
          opacity: 0.7;

          &:hover  {
            border-bottom: solid 3px $main-color;
          }
        }
        .active {
          border-bottom: solid 3px $main-color;
          opacity: 1;
        }
      }

      .search {
        width: 15%;
        display: flex;
        align-items: flex-end;

        input {
          font-size: 0.8em;
          padding: 15px 30px;
          width: 100%;
          border-bottom: solid 3px lightgrey;

          &:focus {
            outline: none;
            border-bottom: solid 3px $main-color;
            font-weight: bolder;
          }
        }
      }
    }


    .date-filters {
      display: flex;
      align-items: flex-end;

      .year {
        width: 12%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        span {
          cursor: pointer;
        }

        .current-year {
          font-size: 1.6em;
        }
      }

      .month-list {
        width: 90%;

        li {
          width: calc(100% / 12);
          opacity: 0.5;
          font-size: 0.9em;
          text-align: center;

          &:hover {
            opacity: 1;
          }
        }
        .active {
          opacity: 1;
        }
      }
    }

  }
  input{
    border: none;
  }
</style>
