<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  title: {
    type: String,
    default: 'Product name'
  }
})
</script>
<template>
  <div class="product-title">
    <RouterLink to="/product-page/" class="product-title-link">{{ title }}</RouterLink>
  </div>
</template>
<style scoped>
.product-title {
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  color: #000;
}
</style>
