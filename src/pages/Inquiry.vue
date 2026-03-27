<template>
  <div class="inquiry">
    <h1>在线询盘</h1>
    <form @submit.prevent="send">
      <input v-model="form.name" placeholder="姓名" required />
      <input v-model="form.email" placeholder="邮箱" required />
      <textarea v-model="form.msg" placeholder="请输入需求" required></textarea>
      <button>发送询盘</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const form = ref({ name: '', email: '', msg: '' })
const send = () => {
  alert('询盘已发送！我们会尽快回复您。')
  form.value = { name: '', email: '', msg: '' }
}
</script>

<style scoped>
.inquiry {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
}
input, textarea {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}
button {
  background: #d97706;
  color: white;
  padding: 10px;
  width: 100%;
  border: none;
}
</style>