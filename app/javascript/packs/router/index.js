import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home'
import Blog from '../components/blog'
import Resume from '../components/resume'
import About from '../components/about'

Vue.use(VueRouter)

const routes = [
    { path: '/', component:       Home },
    { path: '/blog', component:   Blog },
    { path: '/resume', component: Resume },
    { path: '/about', component:  About }
]

export default new VueRouter({ routes })