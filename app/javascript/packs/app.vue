<template>
  <div id="app">
    <nav class="nav">
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
          <router-link to="home" class="nav-item is-tab" active-class="is-active">主页</router-link>
          <router-link to="blog" class="nav-item is-tab" active-class="is-active">博客</router-link>
          <router-link to="resume" class="nav-item is-tab" active-class="is-active">简历</router-link>
          <router-link to="about" class="nav-item is-tab" active-class="is-active">关于</router-link>
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
import store from './store'

export default {
  name: "wifriend",
  store,
  components: {
    Home,
    Blog,
    Resume,
    About
  },

  computed: {
    showDropdown() {
      return this.$store.getters.dropdown
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
  }
}
</script>

<style lang="scss">
body {
  font-family: "Lato", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  
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
