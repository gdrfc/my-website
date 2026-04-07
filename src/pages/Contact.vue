<template>
  <main class="page">
    <div class="container">
      <h1>Contact Us</h1>
      <div class="content">
        <p>We welcome inquiries from distributors, importers, and farmers worldwide. If you are interested in our solar pest killer lamps or need customized agricultural pest control solutions, please feel free to contact us.</p>
        <p>We provide professional service, competitive factory prices, fast delivery, and reliable after-sales support. Our team will reply to your message within 24 hours and offer the best solution for your business.</p>
      </div>

      <!-- 询盘表单（直接可用） -->
      <form class="contact-form" @submit.prevent="sendEmail">
        <div class="form-group">
          <label>Your Name</label>
          <input v-model="form.name" type="text" required placeholder="Enter your name" />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input v-model="form.email" type="email" required placeholder="Enter your email" />
        </div>

        <div class="form-group">
          <label>Phone (optional)</label>
          <input v-model="form.phone" type="text" placeholder="Enter your phone" />
        </div>

        <div class="form-group">
          <label>Interested Product</label>
          <input v-model="form.product" type="text" required placeholder="e.g. Solar Pest Killer Lamp" />
        </div>

        <div class="form-group">
          <label>Your Message</label>
          <textarea v-model="form.message" rows="5" required placeholder="Enter your message"></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Inquiry</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// 表单数据
const form = ref({
  name: '',
  email: '',
  phone: '',
  product: '',
  message: ''
})

// 发送邮件（你只需要改这 3 个 ID）
const sendEmail = async () => {
  try {
    await emailjs.send(
      "service_mrh7oc5", // 你的 Service ID（不用改）
      "template_d613m6j", // 你的 Template ID（改成你自己的）
      form.value,
      "-JtWwfZK-PeYPOupl" // 你的 Public Key（改成你自己的）
    )

    alert('Message sent successfully! We will reply you soon.')
    form.value = { name: '', email: '', phone: '', product: '', message: '' }
  } catch (err) {
    alert('Failed to send message, please try again.')
    console.error(err)
  }
}
</script>

<style scoped>
.page {
  max-width: 1200px;
  margin: 5rem auto;
  padding: 0 1.25rem;
}
.container h1 {
  color: #8B4513;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: 600;
}
.content {
  color: #3d3330;
  line-height: 1.9;
  font-size: clamp(1rem, 2vw, 1.15rem);
  max-width: 850px;
  margin: 0 auto 3rem;
  text-align: justify;
}
.content p {
  margin-bottom: 1.25rem;
}

/* 表单样式 */
.contact-form {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.form-group label {
  font-weight: 500;
  color: #222;
}
.form-group input,
.form-group textarea {
  padding: 0.9rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}
.submit-btn {
  padding: 1rem;
  background: #2d5d1f;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
}
.submit-btn:hover {
  background: #234a17;
}
</style>