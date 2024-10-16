<script setup>
import ProductImage from '@/components/modules/ProductCard/ProductImage.vue'
import ProductFavorite from '@/components/modules/ProductCard/ProductFavorite.vue'
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
  },
  image_thumb: String
})

function onToggleFavorite(id) {
  console.log('onToggleFavorite', id)
}

function onAddToCart(id) {
  console.log('onAddToCart', id)
}
</script>
<template>
  <div class="product-card">
    <ProductFavorite @toggle-favorite="onToggleFavorite(id)" />
    <ProductImage :image_thumb="image_thumb" :title="title" />
    <div class="product-card-body">
      <ProductName :title="title" />
      <ProductPrice :price="price" />
      <ProductAddToCart @add-to-cart="onAddToCart(id)" />
    </div>
  </div>
</template>
<style scoped>
.product-card {
  border-radius: 9px;
  background: #f6f6f6;
  display: flex;
  padding: 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
</style>
<style>
.product-card-body {
  gap: 16px;
  display: flex;
  flex-direction: column;
}
</style>
