import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// 给 vite-ssg 用的导出函数
export function createApp() {
  const app = createApp(App)
  app.use(router)
  return { app, router }
}

// 浏览器端才执行挂载
if (typeof document !== 'undefined') {
  const { app } = createApp()
  app.mount('#app')
}