<template>
  <div id="bottom-navbar">
     <button v-on:click= "navigate('/')"
      :disabled="isDisabled('/')">
     Now Playing</button>
     <button v-on:click= "navigate('/leaderboard')"
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
    isDisabled(path){
      return path === this.$route.path
    }
  }
}
</script>

<style src="../styles/navbar.css"></style>