<template>
  <div>
     <NowPlaying :nowPlaying=data.aNowPlaying />
  </div>
</template>

<script>
import NowPlaying from './Now_Playing'
import axios from 'axios'

export default {
    components : {
    'NowPlaying': NowPlaying
  },
  data(){
    return{
      data: null,
      timer: ''
    }
  },
  name: 'Home',
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