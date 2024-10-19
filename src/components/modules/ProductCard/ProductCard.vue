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
  discountedPrice: {
    type: Number
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
    <div class="product-card-body w-full">
      <ProductName :title="title" />
      <ProductPrice :price="price" :discounted-price="discountedPrice" />
      <ProductAddToCart @add-to-cart="onAddToCart(id)" />
    </div>
  </div>
</template>
<style>
@import '@/assets/css/productCard/productCard.css';
</style>
