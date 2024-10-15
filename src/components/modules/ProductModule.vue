<template>
  <div class="product-module">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="loading" class="loading">Loading products...</div>
    <div v-else class="products module">
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/modules/ProductCard/ProductCard.vue'
defineProps({
  products: Array,
  loading: Boolean,
  error: Boolean
})
</script>
<style scoped>
.product-module .products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 992px) {
  .product-module .products {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
