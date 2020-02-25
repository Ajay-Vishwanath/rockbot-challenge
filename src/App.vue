<template>
  <div id="app">
    <TopNavbar></TopNavbar>
    <router-view></router-view>
    <BottomNavbar></BottomNavbar>
  </div>
</template>

<script>
import TopNavbar from './components/Top_Navbar'
import BottomNavbar from './components/Bottom_Navbar'

export default {
  name: 'app',
  components: {
    'TopNavbar': TopNavbar,
    'BottomNavbar' : BottomNavbar
  }
}
</script>



