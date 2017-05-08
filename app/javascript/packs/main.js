/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %>
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import './styles/main.scss'

sync(store, router)

router.beforeEach((route, redirect, next) => {
  if (store.state.showDropdown) {
    store.commit('TOGGLE_DROPDOWN', false)
  }
  next()
})

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('wifriend'))
  const app = new Vue({
    el: 'wifriend',
    router,
    render: h => h(App)
  })
})
