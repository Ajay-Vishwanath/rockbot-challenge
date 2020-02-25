<template>
  <div>
     <NowPlaying v-if="data !== null" v-bind:nowPlaying=data.aNowPlaying />
     <h5>Coming Up</h5>
     <ComingUp v-if="data !== null" v-bind:artistQueue=data.aQueue />
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
  beforeDestroy() {
    clearInterval((this.timer))
  }
}

</script>