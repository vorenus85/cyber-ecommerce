<template>
  <div class="product-image">
    <RouterLink to="#">
      <img
        :src="imageUrl(imageThumb, folder)"
        :alt="title"
        :width="width"
        :height="height"
        loading="lazy"
      />
    </RouterLink>
  </div>
</template>
<script setup>
defineProps({
  imageThumb: String,
  width: {
    type: Number,
    default: 160
  },
  height: {
    type: Number,
    default: 160
  },
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
