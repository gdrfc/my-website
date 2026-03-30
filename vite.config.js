import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  ssg: {
    createApp: () => import('./src/main.js').then(m => m.createAppInstance())
  }
})