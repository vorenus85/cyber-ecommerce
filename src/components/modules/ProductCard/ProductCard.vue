<script setup>
import ProductName from '@/components/modules/ProductCard/ProductTitle.vue'
import ProductPrice from '@/components/modules/ProductCard/ProductPrice.vue'
import ProductAddToCart from '@/components/modules/ProductCard/ProductAddToCart.vue'
defineProps({
  id: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: 'Product item'
  },
  price: {
    type: Number,
    default: 0
  }
})

function onAddToCart(event) {
  console.log('onAddToCart', event)
}
</script>
<template>
  <div class="product-card">
    <ProductName :title="title" />
    <ProductPrice :price="price" />
    <ProductAddToCart :id="id" @add-to-cart="onAddToCart" />
  </div>
</template>
<style scoped>
.product-card {
  border-radius: 9px;
  background: #f6f6f6;
  display: flex;
  min-width: 200px;
  padding: 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
}
</style>
