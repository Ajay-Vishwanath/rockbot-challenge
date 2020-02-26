import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import "./styles/app.css";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/leaderboard', component: Leaderboard},
  { path :'*', redirect: '/'}
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

