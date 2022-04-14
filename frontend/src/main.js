
import { createApp } from 'vue'
import App from './App.vue'
import Vue3Material from 'vue3-material'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import router from './router/router'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import store from './store'
var cors = require('cors')

export const app = createApp(App).use(store)
// app.use(router)
app.use(BootstrapVue3)
app.use(BootstrapIconsPlugin)
app.use(store)
app.use(cors)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.use(Vue3Material)
app.mount('#app')

// app.config.globalProperties.$http = axios.create({
//     // baseURL: 'http://172.19.0.2:5005/webhooks/rest/webhook/',
//     baseURL: 'http://localhost:5005/webhooks/rest/webhook/',
//     headers: {
//         // "Authorization": "teste"
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//     },
//     // proxy: 'http://172.19.0.2/'

// })

