import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteSSG } from 'vite-ssg'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [vue(), cloudflare()],
  // 核心：SSG预渲染配置，确保5个页面都生成静态HTML
  ssg: {
    routes: ['/', '/about', '/products', '/contact', '/inquiry']
  },
  // 解决Cloudflare部署后路由问题
  base: '/'
})