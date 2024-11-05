<script setup>
import MainButton from '@/components/modules/MainButton.vue'
</script>

<template>
  <div class="product-add-to-card w-full">
    <MainButton
      @click="$emit('addToCart')"
      :block="true"
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
