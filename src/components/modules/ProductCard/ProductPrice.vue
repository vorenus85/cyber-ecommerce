<template>
  <div class="product-price">${{ price }}</div>
</template>
<script setup>
defineProps({
  price: {
    type: Number,
    default: 0
  }
})
</script>
<style>
.product-price {
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 100% */
  letter-spacing: 0.72px;
  color: #000;
}
</style>
