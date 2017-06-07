import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home'
import Blog from '../components/blog'
import Resume from '../components/resume'
import About from '../components/about'
import Login from '../components/login'
import Dashboard from '../components/dashboard'
import Post from '../components/post'
import Setting from '../components/dashboard/setting'
import List from '../components/dashboard/list'
import Editor from '../components/dashboard/editor'


Vue.use(VueRouter)

const routes = [
    { path: '/',     redirect:    '/blog' },
    { path: '/home', name: 'home', component:   Blog },
    { path: '/blog', name: 'blog', component:   Blog },
    { path: '/resume', name: 'resume', component: Resume },
    { path: '/about', name: 'about', component:  About },
    { path: '/:year/:month/:day/:title', name: 'post', component: Post},
    { path: '/login',  name: 'login', component: Login },
    { path: '/dashboard', name: 'dashboard', component: Dashboard, children: 
        [
            { path: '', redirect: 'new' },
            { path: 'setting', name: 'setting', component: Setting },
            { path: 'list', name: 'list', component: List },
            { path: 'new', name: 'new', component: Editor },
            { path: 'edit/:id', name: 'edit', component: Editor }
        ] 
    }
]

export default new VueRouter({ routes })