import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import "./styles/app.css";

//adding font awesome loading icon
library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)

// redirects to home if path not recognized
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

