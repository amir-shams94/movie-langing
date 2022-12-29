import { createApp } from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.min.css'
import router from '@/router/index.js'
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
