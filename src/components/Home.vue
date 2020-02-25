<template>
  <div>
     <p>Home Page</p>
     {{ data }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      data: null
    }
  },
  name: 'Home',
  mounted () {
    axios
      .get('https://api.rockbot.com/v2/venue/10')
      .then(response => (this.data = response.data))
  },
  beforeUpdate(){
    debugger
  }
}
</script>