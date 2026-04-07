<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-logo">
        <h3>Solar Pest Lamp</h3>
        <p>Professional Solar Pest Control Solutions for Southeast Asia</p>
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/inquiry">Inquiry</router-link>
      </div>
      <div class="footer-contact">
        <h4>Contact Us</h4>
        <p>Email: sales@solarpestlamp.com</p>
        <p>WhatsApp: +86 138XXXXXXX</p>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; 2025 Solar Pest Lamp. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--deep-green);
  color: var(--text-light);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}
.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.footer-logo h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.footer-links h4, .footer-contact h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--gold);
}
.footer-links a {
  display: block;
  color: var(--text-light);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}
.footer-links a:hover {
  color: var(--orange);
}
.copyright {
  text-align: center;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-top: 2rem;
}
</style>