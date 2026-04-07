<template>
  <div class="page">
    <div class="container">
      <h1>Contact Us</h1>
      <div class="content">
        <p>We welcome distributors, farmers, and importers from around the world. If you need our solar insect killer lamps or customized pest control solutions, please send us a message.</p>
        <p>We offer competitive factory prices, reliable quality, fast delivery, and professional after-sales support. Our team will reply within 24 hours to provide the best solution for your business.</p>
      </div>

      <!-- 修复后的表单 -->
      <form class="contact-form" @submit.prevent="sendForm">
        <div class="form-group">
          <label>Your Name *</label>
          <input type="text" v-model="formData.name" required placeholder="Enter your full name" />
        </div>

        <div class="form-group">
          <label>Your Email *</label>
          <input type="email" v-model="formData.email" required placeholder="Enter your email address" />
        </div>

        <div class="form-group">
          <label>Company Name</label>
          <input type="text" v-model="formData.company" placeholder="Enter your company name (optional)" />
        </div>

        <div class="form-group">
          <label>Country *</label>
          <select v-model="formData.country" required>
            <option value="">Select your country</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Thailand">Thailand</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Philippines">Philippines</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label>Your Message *</label>
          <textarea v-model="formData.message" required placeholder="Tell us your needs: product quantity, model, or special requirements..."></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Inquiry</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

// 表单数据
const formData = ref({
  name: '',
  email: '',
  company: '',
  country: '',
  message: ''
});

// 发送函数（已匹配字段）
const sendForm = async () => {
  try {
    const response = await emailjs.send(
      'service_mrh7oc5', // 替换为你的Service ID（就是之前的service_xxxx）
      'template_d613m6j', // 替换为你的模板ID（Email后台复制）
      {
        name: formData.value.name,
        email: formData.value.email,
        company: formData.value.company,
        country: formData.value.country,
        message: formData.value.message
      },
      '-JtWwfZK-PeYPOupl' // 替换为你的公钥（就是你截图里的-xxxx）
    );

    alert('Your inquiry has been sent successfully! We will reply to you within 24 hours.');
    // 清空表单
    formData.value = {
      name: '',
      email: '',
      company: '',
      country: '',
      message: ''
    };
  } catch (error) {
    console.error('Send failed:', error);
    alert('Failed to send, please try again or contact us directly via email.');
  }
};
</script>

<style scoped>
.page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
h1 {
  color: #8B4513;
  text-align: center;
  margin-bottom: 1.5rem;
}
.content {
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #333;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
label {
  font-weight: 500;
  color: #333;
}
input, select, textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}
textarea {
  resize: vertical;
  min-height: 120px;
}
.submit-btn {
  background-color: #DAA520;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.submit-btn:hover {
  background-color: #B8860B;
}
</style>