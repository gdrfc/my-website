import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Index from './pages/Index.vue'
import About from './pages/About.vue'
import Products from './pages/Products.vue'
import Contact from './pages/Contact.vue'
import Inquiry from './pages/Inquiry.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/products', component: Products },
    { path: '/contact', component: Contact },
    { path: '/inquiry', component: Inquiry },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')