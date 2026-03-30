import { createApp as createVueApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

export function createApp() {
  const app = createVueApp(App)
  app.use(router)
  return { app, routes: router.options.routes }
}

if (typeof document !== 'undefined') {
  const { app } = createApp()
  app.mount('#app')
}
