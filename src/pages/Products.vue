<template>
  <div class="products">
    <h1>产品能力</h1>
    <div class="list">
      <div class="item">
        <h3>标准版太阳能杀虫灯</h3>
        <p>适合水稻、玉米、甘蔗</p>
      </div>
      <div class="item">
        <h3>果园专用款</h3>
        <p>适合芒果、榴莲、橡胶</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products {
  max-width: 1000px;
  margin: 50px auto;
  padding: 20px;
}
.list {
  display: flex;
  gap: 20px;
}
.item {
  flex: 1;
  background: #fffbeb;
  padding: 20px;
  border-radius: 10px;
}
</style>