import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// 给 vite-ssg 使用（不会重名，完美兼容）
export async function createAppFunc() {
  const app = createApp(App)
  app.use(router)
  return { app, router }
}

// 浏览器端挂载
if (typeof document !== 'undefined') {
  createAppFunc().then(({ app }) => {
    app.mount('#app')
  })
}