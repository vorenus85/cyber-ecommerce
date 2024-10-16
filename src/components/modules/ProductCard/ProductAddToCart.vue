<template>
  <div class="product-add-to-card w-full">
    <button @click="$emit('addToCart')" class="btn add-to-cart btn-primary btn-block">
      Buy Now
    </button>
  </div>
</template>
<style scoped>
@media (min-width: 768px) {
  .product-card-footer {
    padding: 0 26px;
  }
}
</style>
