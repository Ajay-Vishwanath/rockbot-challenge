<template>
  <div>
     <p>Leaderboard</p>
     <h5>Top DJs</h5>
     {{ data.aTopUsers }}
     <h5>Top Artists</h5>
     {{ data.aTopArtists }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
    components : {
  },
  data(){
    return{
      data: null,
      timer: ''
    }
  },
  name: 'Leaderboard',
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