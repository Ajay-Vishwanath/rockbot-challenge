import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Navbar from './components/Navbar'
import Leaderboard from './components/leaderboard'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Navbar },
  { path: '/leaderboard', component: Leaderboard}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
