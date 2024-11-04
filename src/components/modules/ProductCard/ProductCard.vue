<script setup>
import ProductImage from '@/components/modules/ProductCard/ProductImage.vue'
import ProductWishlist from '@/components/modules/ProductCard/ProductWishlist.vue'
import ProductName from '@/components/modules/ProductCard/ProductTitle.vue'
import ProductPrice from '@/components/modules/ProductCard/ProductPrice.vue'
import ProductAddToCart from '@/components/modules/ProductCard/ProductAddToCart.vue'
import { useWishlistStore } from '@/stores/useWishlistStore.js'
import { useCartStore } from '@/stores/useCartStore.js'
import { computed, toRefs } from 'vue'

// Props passed into the component
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

// Destructure product prop
const { id } = toRefs(props.product)

// Computed properties for reactive data
const isProductInWishlist = computed(() => wishlistStore.isInWishlist(id.value))

const wishlistStore = useWishlistStore()
const cartStore = useCartStore()

function onToggleWishlist() {
  if (isProductInWishlist.value) {
    wishlistStore.removeFromWishlist(id.value)
  } else {
    wishlistStore.addToWishlist(props.product)
  }
}

function onAddToCart() {
  cartStore.addToCart(props.product)
}
</script>
<template>
  <div class="product-card">
    <ProductWishlist
      @toggle-wishlist="onToggleWishlist"
      :onWishlist="wishlistStore.isInWishlist(product.id)"
    />
    <ProductImage :imageThumb="product?.imageThumb" :title="product?.title" />
    <div class="product-card-body w-full">
      <ProductName :title="product?.title" />
      <ProductPrice :price="product?.price" :discounted-price="product?.discountedPrice" />
      <ProductAddToCart @add-to-cart="onAddToCart" />
    </div>
  </div>
</template>
<style>
@import '@/assets/css/productCard/productCard.css';
</style>
