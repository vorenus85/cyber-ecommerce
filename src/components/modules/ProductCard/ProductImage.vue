<template>
  <div class="product-image">
    <img :src="getImageUrl(image_thumb)" :alt="title" width="160" height="160" loading="lazy" />
  </div>
</template>
<script setup>
defineProps({
  image_thumb: String,
  title: String
})

function getImageUrl(name) {
  const localhost = new URL(import.meta.url)
  const appUrl = localhost.origin
  const imageUrl = new URL(`${import.meta.env.VITE_BASE_URL}/images/${name}`, appUrl)

  return imageUrl.href
}
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
