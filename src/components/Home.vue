<template>
  <div id="home-content">
      <div id="now-playing-section-container">
        <NowPlaying v-if="data !== null" v-bind:nowPlaying="data.aNowPlaying"/>
        <p id="spinner" v-if="!data"><font-awesome-icon icon="spinner" /></p>
     </div>
     <h5 id="coming-up">Coming Up</h5>
     <div id="coming-up-index">
       <ComingUp v-if="data !== null" v-bind:artistQueue="data.aQueue"/>
       <p id="spinner" v-if="!data"><font-awesome-icon icon="spinner" /></p>
     </div>
  </div>
</template>

<script>
import NowPlaying from './Now_Playing'
import ComingUp from './Coming_Up'
import axios from 'axios'

export default {
    name: 'Home',
    components : {
    'NowPlaying': NowPlaying,
    'ComingUp' : ComingUp
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
  updated(){
    debugger
  },
  beforeDestroy() {
    clearInterval((this.timer))
  }
}

</script>

<style src="../styles/home.css"></style>