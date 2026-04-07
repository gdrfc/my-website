<template>
  <main class="inquiry">
    <div class="inquiry-container">
      <h1>Send Us Your Inquiry</h1>
      <p>Fill out the form below, we will get back to you within 24 hours!</p>
      
      <form @submit.prevent="sendInquiry" class="inquiry-form">
        <div class="form-group">
          <label for="name">Your Name *</label>
          <input type="text" id="name" v-model="formData.name" required placeholder="John Doe">
        </div>
        
        <div class="form-group">
          <label for="email">Your Email *</label>
          <input type="email" id="email" v-model="formData.email" required placeholder="john@example.com">
        </div>
        
        <div class="form-group">
          <label for="company">Company Name</label>
          <input type="text" id="company" v-model="formData.company" placeholder="Your Farm/Company">
        </div>
        
        <div class="form-group">
          <label for="country">Country *</label>
          <select id="country" v-model="formData.country" required>
            <option value="">Select Country</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Thailand">Thailand</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Philippines">Philippines</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="message">Your Message *</label>
          <textarea id="message" v-model="formData.message" required placeholder="Tell us your needs: quantity, product type, etc." rows="5"></textarea>
        </div>
        
        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'Sending...' : 'Send Inquiry' }}
        </button>
        
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const formData = ref({
  name: '',
  email: '',
  company: '',
  country: '',
  message: ''
})
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// 替换成你自己的EmailJS信息（免费注册：https://www.emailjs.com/）
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const sendInquiry = async () => {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''
  
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.value.name,
        from_email: formData.value.email,
        company: formData.value.company,
        country: formData.value.country,
        message: formData.value.message
      },
      EMAILJS_PUBLIC_KEY
    )
    successMessage.value = 'Inquiry sent successfully! We will contact you soon.'
    formData.value = {
      name: '',
      email: '',
      company: '',
      country: '',
      message: ''
    }
  } catch (error) {
    errorMessage.value = 'Failed to send inquiry. Please try again later.'
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.inquiry {
  max-width: 800px;
  margin: 4rem auto;
  padding: 0 2rem;
}
.inquiry-container {
  background-color: #FFEBCD;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.1);
}
.inquiry h1 {
  color: #8B4513;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
}
.inquiry p {
  color: #5D4037;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}
.inquiry-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-group label {
  color: #8B4513;
  font-weight: bold;
}
.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.8rem;
  border: 1px solid #D2B48C;
  border-radius: 5px;
  font-size: 1rem;
  background-color: white;
}
.form-group textarea {
  resize: vertical;
}
.submit-btn {
  background-color: #DAA520;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}
.submit-btn:hover:not(:disabled) {
  background-color: #B8860B;
}
.submit-btn:disabled {
  background-color: #D2B48C;
  cursor: not-allowed;
}
.success-message {
  color: #2E7D32;
  text-align: center;
  font-weight: bold;
}
.error-message {
  color: #C62828;
  text-align: center;
  font-weight: bold;
}
</style>