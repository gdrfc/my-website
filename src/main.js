import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'

// 普通 Vue 模式，彻底告别白屏
createApp(App).use(router).mount('#app')