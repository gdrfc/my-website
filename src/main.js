import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// 先创建 app 实例
const app = createApp(App).use(router)

// 只在浏览器环境执行 mount
if (typeof document !== 'undefined') {
  app.mount('#app')
}