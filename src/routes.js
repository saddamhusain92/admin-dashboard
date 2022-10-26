import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home/index.vue';
import About from './views/About/index.vue';
import Service from './views/Service/index.vue';
import Login from './views/Login/index.vue';
import Dashboard from './Dashboard/index.vue'
import Profile from './Dashboard/Profile/Profile.vue'
import DashHome from './Dashboard/Home/DashHome.vue'
import Main from './Dashboard/Main/Main.vue'
import ChartSection from './Dashboard/ChartPage/index.vue'
import FormsSection from './Dashboard/Forms/index.vue'
import EmailSection from './Dashboard/Email/index.vue'
import SettingSection from './Dashboard/Setting/index.vue'
import authUser  from '@/services/auth'

const routes = [
    {
        name: "Home",
        path: '/',
        component: Home
    },
    {
        name: "About",
        path: '/about',
        component: About
    },
    {
        name: "login",
        path: '/login',
        component: Login
    },
    {
        name: "Service",
        path: '/service',
        component: Service
    },
    {
        name: "Dashboard",
        path: '/v-admin',
        component:Dashboard,
        children:[
            {
                name: "Main",
                path: '/v-admin',
                component: Main
            },
            {
              name: "profile",
              path: "Profile",
              component: Profile
            },
            {
                name: "DashHome",
                path: "home",
                component:DashHome
              },
            {
                name: "Chart",
                path: "chart",
                component:ChartSection
              },
            {
                name: "Forms",
                path: "forms",
                component:FormsSection
              },
            {
                name: "Email",
                path: "email",
                component:EmailSection
              },
            {
                name: "Setting",
                path: "setting",
                component:SettingSection
              },
           
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router