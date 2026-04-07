import emailjs from '@emailjs/browser';

// 1. 替换成你 EmailJS 后台的 Service ID
const SERVICE_ID = "service_mrh7oc5"; 
// 2. 替换成你刚保存的邮件模板 Template ID
const TEMPLATE_ID = "template_d613m6j"; 
// 3. 替换成你 EmailJS 账户的 Public Key
const PUBLIC_KEY = "-JtWwfZK-PeYPOupl"; 

export const sendInquiryEmail = (formData) => {
  // 这里直接映射表单字段发给 EmailJS
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
};