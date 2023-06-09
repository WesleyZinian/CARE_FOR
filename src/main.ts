import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import './style.css'
const app = createApp(App)

app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
