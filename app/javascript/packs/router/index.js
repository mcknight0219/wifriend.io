import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home'
import Blog from '../components/blog'
import Resume from '../components/resume'
import About from '../components/about'
import Login from '../components/login'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component:       Home },
    { path: '/blog', component:   Blog },
    { path: '/resume', component: Resume },
    { path: '/about', component:  About },
    { path: '/login',  component: Login }
]

export default new VueRouter({ routes })