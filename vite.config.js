import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteSSG } from 'vite-ssg'

export default defineConfig({
  plugins: [
    vue(),
  ],
})