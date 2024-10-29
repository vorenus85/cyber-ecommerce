<script setup>
import Button from '@/components/modules/Button.vue'
</script>

<template>
  <div class="product-add-to-card w-full">
    <Button
      @click="$emit('addToCart')"
      :classes="['add-to-cart', 'btn-primary', 'btn-block']"
      :title="'Buy Now'"
    />
  </div>
</template>
<style scoped>
@media (min-width: 768px) {
  .product-card-footer {
    padding: 0 26px;
  }
}
</style>
