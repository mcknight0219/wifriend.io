import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home'
import Blog from '../components/blog'
import Resume from '../components/resume'
import About from '../components/about'
import Login from '../components/login'
import Dashboard from '../components/dashboard'
import Post from '../components/post'

Vue.use(VueRouter)

const routes = [
    { path: '/',     redirect:    '/home' },
    { path: '/home', name: 'home', component:   Home },
    { path: '/blog', name: 'blog', component:   Blog },
    { path: '/resume', name: 'resume', component: Resume },
    { path: '/about', name: 'about', component:  About },
    { path: '/login',  component: Login },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    { path: '/:year/:month/:day/:title', name: 'post', component: Post}
]

export default new VueRouter({ routes })