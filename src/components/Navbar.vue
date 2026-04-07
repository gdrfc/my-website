<template>
  <nav class="navbar">
    <div class="container nav-container">
      <a href="/" class="logo">Solar Pest Lamp</a>
      
      <!-- 桌面端导航 -->
      <div class="nav-links desktop-nav">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/about" class="nav-link">关于我们</router-link>
        <router-link to="/products" class="nav-link">产品能力</router-link>
        <router-link to="/contact" class="nav-link">联系我们</router-link>
        <router-link to="/inquiry" class="nav-link inquiry-btn">询盘入口</router-link>
      </div>

      <!-- 移动端汉堡按钮 -->
      <button class="menu-btn" @click="toggleMenu" aria-label="菜单">☰</button>
    </div>

    <!-- 移动端下拉菜单 -->
    <div class="mobile-menu" :class="{ active: isMenuOpen }">
      <router-link to="/" class="mobile-link" @click="toggleMenu">首页</router-link>
      <router-link to="/about" class="mobile-link" @click="toggleMenu">关于我们</router-link>
      <router-link to="/products" class="mobile-link" @click="toggleMenu">产品能力</router-link>
      <router-link to="/contact" class="mobile-link" @click="toggleMenu">联系我们</router-link>
      <router-link to="/inquiry" class="mobile-link inquiry-btn" @click="toggleMenu">询盘入口</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.navbar {
  background-color: var(--cream);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  width: 100%;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.logo {
  font-size: 2rem;
  font-weight: 700;
  color: var(--deep-green);
  text-decoration: none;
  line-height: 1.2;
}
.desktop-nav {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}
.nav-link {
  text-decoration: none;
  color: var(--text-dark);
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;
  line-height: 1.5;
}
.nav-link:hover {
  color: var(--orange);
}
.inquiry-btn {
  background-color: var(--orange);
  color: var(--text-light) !important;
  padding: 8px 20px;
  border-radius: 6px;
}
.inquiry-btn:hover {
  background-color: #E65100;
}
.menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--text-dark);
}
.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 20px;
  background-color: var(--cream);
  border-top: 1px solid #eee;
}
.mobile-menu.active {
  display: flex;
}
.mobile-link {
  text-decoration: none;
  color: var(--text-dark);
  font-size: 1.1rem;
  padding: 0.5rem 0;
  line-height: 1.5;
}

/* 响应式适配：桌面端隐藏移动端菜单 */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  .menu-btn {
    display: block;
  }
  .logo {
    font-size: 1.5rem;
  }
}
</style>