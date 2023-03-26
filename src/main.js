import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/styles.css'
import '@/assets/css/iconfont.css'
import '@/assets/css/layui.css'
import '@/assets/js/jquery.slim.min.js'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
