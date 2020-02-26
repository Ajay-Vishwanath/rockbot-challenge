<template>
  <div id="leaderboard-content">
     <h5 class="leaderboard-section-title">Top DJs</h5>
     <div class="category-index-1" v-if="data !== null">
        <TopCategoryItem
        v-for="topCategoryItem in data.aTopUsers"
        v-bind:topCategoryItem="topCategoryItem"
        v-bind:key="topCategoryItem.id"
        ></TopCategoryItem>
     </div>
     <p id="spinner" v-if="!data"><font-awesome-icon icon="spinner" /></p>
     <h5 class="leaderboard-section-title">Top Artists</h5>
     <div class="category-index-2" v-if="data !== null">
        <TopCategoryItem
        v-for="topCategoryItem in data.aTopArtists"
        v-bind:topCategoryItem="topCategoryItem"
        v-bind:key="topCategoryItem.id"
      ></TopCategoryItem>
     </div>
     <p id="spinner" v-if="!data"><font-awesome-icon icon="spinner" /></p>
  </div>
</template>

<script>
import TopCategoryItem from './Top_Category_Item'
import axios from 'axios'

export default {
    name: 'Leaderboard',
    components : {
      TopCategoryItem
  },
  data(){
    return{
      data: null,
      timer: ''
    }
  },
  created () {
    this.fetchData();
    //timer to make another axios call to the API every 30 seconds
    this.timer = setInterval(this.fetchData, 30000)
  },
  methods: {
    fetchData () {
      axios
      .get('https://api.rockbot.com/v2/venue/10')
      .then(response => (this.data = response.data))
    }
  },
  beforeDestroy() {
    clearInterval((this.timer))
  }
}

</script>

<style src="../styles/leaderboard.css"></style>