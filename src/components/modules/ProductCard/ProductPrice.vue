<template>
  <div class="product-price-container">
    <div class="product-discounted-price" v-if="discountedPrice">${{ discountedPrice }}</div>
    <div class="product-price">${{ price }}</div>
  </div>
</template>
<script setup>
defineProps({
  price: {
    type: Number,
    default: 0
  },
  discountedPrice: {
    type: Number
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

.product-discounted-price {
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 100% */
  letter-spacing: 0.72px;
  text-decoration: line-through;
  color: #e5e7eb;
}
</style>
