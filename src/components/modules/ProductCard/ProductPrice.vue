<template>
  <div class="product-price-container">
    <div class="product-original-price text-center line-through" v-if="discountedPrice">
      ${{ price }}
    </div>
    <div class="product-price text-center" :class="{ 'product-special-price': discountedPrice }">
      <template v-if="discountedPrice">${{ discountedPrice }} </template>
      <template v-else>${{ price }}</template>
    </div>
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
.product-price-container {
  margin-top: auto;
}

.product-price {
  font-size: 24px;
  font-weight: 600;
  line-height: 24px; /* 100% */
  letter-spacing: 0.72px;
  color: #000;
}

.product-original-price {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 100% */
  letter-spacing: 0.72px;
  color: #919191;
}
</style>
