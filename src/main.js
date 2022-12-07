/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//bootstrap
import '/node_modules/bootstrap/scss/bootstrap.scss'
import * as bootstrap from 'bootstrap'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
