<template>
  <div class="product-image">
    <RouterLink to="#">
      <img
        :src="imageUrl(imageThumb, folder)"
        :alt="title"
        width="160"
        height="160"
        loading="lazy"
      />
    </RouterLink>
  </div>
</template>
<script setup>
defineProps({
  imageThumb: String,
  title: String
})

import { useImageUrl } from '@/composables/useImageUrl'
const folder = 'products'
const { imageUrl } = useImageUrl()
</script>
<style>
.product-image {
  padding: 0.25rem 0;
}

@media (min-width: 768px) {
  .product-image {
    padding: 1rem 0;
  }
}
</style>
