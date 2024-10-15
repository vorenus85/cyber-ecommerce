<template>
  <div class="product-accordions container mx-auto">
    <ProductModule :error="error" :loading="loading" :products="products" />
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import staticProducts from '/static/products.json'
import ProductModule from '@/components/modules/ProductModule.vue'
export default {
  components: { ProductModule },
  setup() {
    const products = ref([])
    const loading = ref(true)
    const error = ref(null)

    const fetchProducts = async () => {
      try {
        setTimeout(() => {
          products.value = staticProducts.slice(0, 8)
        }, 500)
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
