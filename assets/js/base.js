import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Intro from './views/Intro';
import Experience from './views/Experience';
import Skills from './views/Skills';
import Academics from "./views/Academics";
import Contact from "./views/Contact";
import Navigation from "./components/Navigation";
import NFooter from "./components/NFooter";
import SkillWheel from "./components/SkillWheel";
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
    {path: '/profile', component: Intro},
    {path: '/experience', component: Experience},
    {path: '/skills', component: Skills},
    {path: '/academics', component: Academics},
    {path: '/contact', component: Contact}
]

const router = new VueRouter({
    routes
})
const app = new Vue({
        el: '#app',
        components: {Intro, Experience, Skills, Contact, Academics, Navigation, NFooter, SkillWheel
        },
        router: router,
        data() {
            return {}
            },
        computed: {
        }
      }).$mount('#app');