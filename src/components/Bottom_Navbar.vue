<template>
  <div id="bottom-navbar">
     <button id="now-playing-button"
     v-on:click= "navigate('/')"
      :disabled="isDisabled('/')">
     Now Playing</button>

     <button id="leaderboard-button"
     v-on:click= "navigate('/leaderboard')"
     :disabled="isDisabled('/leaderboard')">
     Leaderboard</button>
  </div>
</template>

<script>

export default {
  name: 'BottomNavbar',
  data(){
    return{
      currentPage: this.$route.path
    }
  },
  methods: {
    navigate(path){
      this.$router.push(path)
    },
    //method to see if navigation button should be disabled
    //i.e if we're already on that page.
    isDisabled(path){
      return path === this.$route.path
    }
  }
}
</script>

<style src="../styles/navbar.css"></style>