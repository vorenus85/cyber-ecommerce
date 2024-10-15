<template>
  <div class="product-card-footer">
    <button @click="$emit('addToCart', id)" class="btn add-to-cart btn-primary btn-block">
      Buy Now
    </button>
  </div>
</template>
<script setup>
defineProps({
  id: {
    type: Number,
    default: 0
  }
})
</script>
<style scoped>
.product-card-footer {
  width: 100%;
}
@media (min-width: 768px) {
  .product-card-footer {
    padding: 0 26px;
  }
}
</style>
