<template>
  <div id="app">
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item is-brand" href="/">WiFriend</a>
        </div>
        <span id="nav-toggle" class="nav-toggle" v-bind:class="{ 'is-active': showDropdown }" v-on:click="toggleDropdown(!showDropdown)">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div id="nav-menu" class="nav-right nav-menu" v-bind:class="{ 'is-active': showDropdown }">
          <router-link :to="{name: 'home' }" class="nav-item is-tab" active-class="is-active">Home</router-link>
          <router-link :to="{name: 'blog' }" class="nav-item is-tab" active-class="is-active">Blog</router-link>
          <router-link :to="{name: 'resume'}" class="nav-item is-tab" active-class="is-active">Resume</router-link>
          <router-link :to="{name: 'about'}" class="nav-item is-tab" active-class="is-active">About</router-link>
          <router-link :to="{name: 'login'}" class="nav-item" active-class="is-active">
            <a class="button is-active">{{ !isLogin ? '登陆' : '登出' }}</a>
          </router-link>
        </div>
      </div>
    </nav>
  
    <div class="app-main">
        <div class="container is-fluid">
          <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
            <router-view class="animated"></router-view>
          </transition>
        </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            © Copyright 2007 - 2017 by mcknight0219.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Home from './components/home'
import Blog from './components/blog'
import Resume from './components/resume'
import About from './components/about'
import Login from './components/login'
import store from './store'

export default {
  name: "wifriend",
  store,
  components: {
    Home,
    Blog,
    Resume,
    About,
    Login
  },

  computed: {
    showDropdown() {
      return this.$store.getters.dropdown
    },

    isLogin() {
      return this.$store.getters.login
    }
  },

  data: function () {
    return {

    }
  },

  methods: {
    toggleDropdown(opened) {
      this.$store.dispatch('toggleDropdown', opened)
    }
  },
  
  created () {
    this.$store.dispatch('getAllPosts')
    this.$store.dispatch('checkAuth')
  }
}
</script>

<style lang="scss">
body {
  font-family: -apple-system, BlinkMacSystemFont,"Helvetica Neue","PingFang-SC-Regular","STHeiti", "Helvetica","Arial","Verdana","sans-serif","Microsoft YaHei";
  
  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  
    .app-main {
      flex: 1;
    }

    footer {
      font-family: "Optima","Helvetica Neue",sans-serif;
    }
  }
}
</style>
