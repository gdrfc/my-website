<template>
  <div class="home-page">
    <!-- 英雄区（已使用你真正的背景图） -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Solar Powered Pest Killer Lamp for Farm &<br>
          Harvest Protection
        </h1>
        <p class="hero-subtitle">
          Protect your crops, boost your harvest with our high-efficiency solar pest<br>
          control solutions, perfect for Southeast Asia agriculture.
        </p>
        <router-link to="/inquiry" class="btn-primary">Get Free Quote</router-link>
      </div>
    </section>

    <!-- 核心卖点区 -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">Why Choose Our Solar Pest Lamps?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>100% Solar Powered</h3>
            <p>No electricity needed, perfect for remote farms in Southeast Asia. Save cost, eco-friendly.</p>
          </div>
          <div class="feature-card">
            <h3>High Efficiency Pest Control</h3>
            <p>Wide coverage, kill 99% of common crop pests, protect your rice, fruits, vegetables.</p>
          </div>
          <div class="feature-card">
            <h3>Durable for Tropical Climate</h3>
            <p>Waterproof, anti-corrosion, withstand heavy rain and high temperature in Southeast Asia.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品展示区 -->
    <section class="products-preview">
      <div class="container">
        <h2 class="section-title">Our Solar Pest Lamp Series</h2>
        <div class="products-grid">
          <div class="product-card">
            <img src="/solar_lamp_farm.jpg" alt="农场款" class="product-img">
            <h3>Outdoor Farm Model</h3>
            <p>Large coverage, ideal for rice fields, orchards, large farms.</p>
            <router-link to="/products" class="btn-secondary">Learn More</router-link>
          </div>

          <div class="product-card">
            <img src="/solar_lamp_garden.jpg" alt="花园款" class="product-img">
            <h3>Small Garden Model</h3>
            <p>Compact design, perfect for small farms, home gardens, greenhouses.</p>
            <router-link to="/products" class="btn-secondary">Learn More</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* ✅ 英雄区：使用你真实的背景图 */
.hero {
  width: 100%;
  min-height: 600px;
  background-image: url("/solar_lamp_banner.jpg"); /* 你的背景图 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
}

/* 加一层半透明遮罩，让文字更清晰 */
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  text-align: center;
  color: white;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}

/* 产品图样式 */
.product-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* 其他样式 */
.features {
  padding: 5rem 0;
  background-color: #FFF8E1;
}
.section-title {
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: #2d5d1f;
  margin-bottom: 3rem;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.feature-card {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}
.feature-card h3 {
  color: #ff8c00;
}
.products-preview {
  padding: 5rem 0;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.product-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
}
.btn-primary {
  background: #ff8c00;
  color: #fff;
  padding: 12px 32px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
}
.btn-secondary {
  background: #ffd700;
  color: #333;
  padding: 10px 28px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
}
</style>