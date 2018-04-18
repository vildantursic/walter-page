<template>
  <div class="filter">
    <div class="main-filters">
      <ul class="main-list">
        <li v-for="(filter, index) of filters" :key="index" @click="selectFilter(filter.id)">{{filter.name}}</li>
      </ul>
      <div class="search">
        <input type="text" placeholder="Search..">
      </div>
    </div>
    <div class="date-filters">
      <div class="year">
        <span> prev </span> 2018 <span> next </span>
      </div>
      <ul class="month-list" v-if="showDateFilter">
        <li v-for="(date, index) of dates" :key="index" @click="selectFilter(date.id)">{{date.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['filters', 'showDateFilter'],
    data() {
      return {
        dates: [
          { id: 1, name: 'January' },
          { id: 2, name: 'February' },
          { id: 3, name: 'March' },
          { id: 4, name: 'April' },
          { id: 5, name: 'May' },
          { id: 6, name: 'June' },
          { id: 7, name: 'July' },
          { id: 8, name: 'August' },
          { id: 9, name: 'September' },
          { id: 10, name: 'October' },
          { id: 11, name: 'November' },
          { id: 12, name: 'December' }
        ]
      }
    },
    methods: {
      selectFilter(id) {
        this.$emit('onFilterSelected', id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .filter {
    width: 100%;
    margin-bottom: 10vh;

    ul {
      list-style: none;
      width: 100%;
      display: flex;
      margin: 0;
      padding: 0;

      li {
        cursor: pointer;
        float: left;
      }
    }

    .main-filters {
      display: flex;

      .main-list {
        width: 90%;
        overflow: hidden;

        li {
          border-bottom: solid 1px lightgrey;
          min-width: 150px;

          &:hover  {
            border-bottom: solid 1px blue;
          }
        }
      }

      .search {
        width: 10%;
        border-bottom: solid 1px lightgrey;

        input {
          width: 100%;
        }
      }
    }


    .date-filters {
      display: flex;

      .year {
        width: 10%;
      }

      .month-list {
        width: 90%;

        li {
          width: calc(100% / 12);
          opacity: 0.5;

          &:hover {
            opacity: 1;
          }
        }
      }
    }

  }
  input{
    border: none;
  }
</style>
