import { createRouter, createWebHashHistory } from 'vue-router'

// 导入5个页面组件
import Home from '../pages/Index.vue'
import About from '../pages/About.vue'
import Products from '../pages/Products.vue'
import Contact from '../pages/Contact.vue'
import Inquiry from '../pages/Inquiry.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Solar Pest Killer Lamp | Agricultural Solar Insect Light for Southeast Asia Farm',
      description: 'Professional manufacturer of solar pest killer lamp for rice field, orchard and farm. High efficiency, energy saving, suitable for Southeast Asia climate.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Us | Solar Pest Lamp Manufacturer in China',
      description: 'Professional manufacturer and exporter of solar pest killer lamp, serving agriculture and farm clients across Southeast Asia.'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      title: 'Products & Capacity | Solar Pest Killer Lamp Manufacturer',
      description: 'High quality solar pest killer lamps for agricultural use. Stable, waterproof, high efficiency for rice and farm harvest protection.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact Us | Solar Pest Killer Lamp Supplier',
      description: 'Contact us for quotation, catalog and price of solar pest killer lamp. We support Southeast Asia customers.'
    }
  },
  {
    path: '/inquiry',
    name: 'Inquiry',
    component: Inquiry,
    meta: {
      title: 'Inquiry | Solar Pest Killer Lamp Quote',
      description: 'Send us your inquiry to get best price for solar pest killer lamp. Quick reply for Southeast Asia customers.'
    }
  }
]

const router = createRouter({
  // ✅ 关键修复：静态网站必须用 hash 模式，部署后不白屏、不404
  history: createWebHashHistory(),
  routes
})

// SEO优化：自动更新页面标题和描述
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.description) {
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = to.meta.description
  }
  next()
})

export default router