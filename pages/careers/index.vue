<template>
  <section class="padded-content footing-space">
    <AppPageTitle v-if="page.acf" :supertitle="page.acf.tease" :title="page.acf.title" :subtitle="page.acf.description" >
      <input id="search" type="text" placeholder="" v-model="search" @blur="showSearch">
    </AppPageTitle>
    <!--<AppFilter :filters="filters"-->
               <!--:selectedFilter="selectedFilter"-->
               <!--:showDateFilter="true"-->
               <!--:monthActive="2"-->
               <!--@onFilterSelected="selectFilter"-->
               <!--@onYearSelected="selectYear"-->
               <!--@onMonthSelected="selectMonth">-->
      <!--<input type="text" placeholder="Search.." v-model="search">-->
    <!--</AppFilter>-->
    <div class="no-items">
      <h1 v-if="searchedList.length === 0 && !loading">
        There are no open positions right now but keep in touch on <a href="https://www.facebook.com/walterBIM/">Facebook</a> and <a href="https://www.linkedin.com/company/walter-bim-solutions/">Linkedin</a>, we will maybe need your skills soon.
      </h1>
      <h1 v-if="loading">Loading ...</h1>
    </div>
    <div class="items">
      <AppPosition v-for="(item, index) of limitBy(searchedList, itemsToShow)" :key="index" :item="item"/>
    </div>
    <div class="items-bellow">
      <AppPosition v-if="items[items.length - 1]" :item="items[items.length - 1]"></AppPosition>
    </div>
  </section>
</template>

<script>
  export default {
    fetch ({ params, redirect }) {
      redirect(301, `/careers/jobs`)
    }
  }
</script>
