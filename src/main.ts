import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'
import ElementPlus from '@/libs/element-plus'

const app = createApp(App)
ElementPlus(app)
app.use(router)
app.mount('#app')
