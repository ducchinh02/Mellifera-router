import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './index'
import './assets/js/main.js'

Vue.use(VueRouter)


const routers = new VueRouter({
    mode: 'history',
    routes
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: routers,
}).$mount('#app')