<template>
  <div class="product-accordions container">
    <ProductModule :error="error" :loading="loading" :products="products" />
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import ProductModule from '@/components/modules/ProductModule.vue'
export default {
  components: { ProductModule },
  setup() {
    const products = ref([])
    const loading = ref(true)
    const error = ref(null)

    const fetchProducts = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_PRODUCTS_ENDPOINT)
        if (!response.ok) {
          throw new Error('Failed to load products')
        }
        const data = await response.json()
        products.value = data.slice(0, 8)
      } catch (err) {
        error.value = err.message
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      fetchProducts()
    })

    return {
      products,
      loading,
      error
    }
  }
}
</script>
