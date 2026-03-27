<template>
  <div>
    <header>
      <a href="/">首页</a>
      <a href="/about">关于我们</a>
      <a href="/products">产品</a>
      <a href="/contact">联系我们</a>
      <a href="/inquiry">询盘</a>
    </header>
    <router-view />
  </div>
</template>

<style>
header {
  background: #ffedd5;
  padding: 20px;
  text-align: center;
}
a {
  margin: 0 10px;
  text-decoration: none;
  color: #92400e;
}
</style>