<template>
  <div id="app">
    <section class="hero">
      <div class="hero-head">
        <div class="container">
          <nav class="nav">
            <div class="nav-left">
              <a class="nav-item is-brand" href="/">WiFriend</a>
            </div>
            <span id="nav-toggle" class="nav-toggle" v-on:click="toggleDropdown(!showDropdown)">
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
          </nav>
        </div>
      </div>
      <div class="container is-fluid">
        <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
          <router-view class="animated"></router-view>
        </transition>
      </div>
    </section>
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
    font-family: "Lato", "Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif
  }
</style>
