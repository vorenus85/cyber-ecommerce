<template>
  <div class="discounted-products module container">
    <div class="module-head">
      <h3 class="module-head-title">Discounts up to -50%</h3>
    </div>
    <div class="module-body">
      <ProductModule :error="error" :loading="loading" :products="products" />
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import ProductModule from '@/components/modules/ProductModule.vue'

export default {
  components: { ProductModule },
  setup() {
    const limit = 4
    // for skeleton product cards
    const products = ref(
      Array(limit)
        .fill()
        .map(() => {
          ;[]
        })
    )
    const loading = ref(true)
    const error = ref(null)

    const fetchProducts = async () => {
      loading.value = true

      try {
        const response = await fetch(import.meta.env.VITE_PRODUCTS_ENDPOINT)

        if (!response.ok) {
          throw new Error('Failed to load products')
        }

        const data = await response.json()
        // mocking discounted products query
        products.value = data.slice(2, limit + 2)
      } catch (error) {
        error.value = error.message
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      fetchProducts()
    })

    return {
      error,
      loading,
      fetchProducts,
      products
    }
  }
}
</script>
