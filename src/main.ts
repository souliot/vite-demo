import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'
import ElementPlus from '@/plugins/element-plus'
import VXETable from '@/plugins/vxe-table'

const app = createApp(App)
ElementPlus(app)
app.use(router)
app.use(VXETable)
app.mount('#app')
