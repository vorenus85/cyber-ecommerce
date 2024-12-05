<template>
  <div class="container pb-6">
    <Breadcrumb :navItems="navigationItems" />
    <div class="category-content-wrapper">
      <div class="product-filter"></div>
      <div class="product-list">
        <div class="product-list-top flex justify-between py-3">
          <ProductListCount :count="totalItemCount" />
          <Dropdown
            id="sort-list"
            :options="sortOptions"
            :defaultOption="defaultSortOption"
            @changeDropdown="onChangeDropdown"
          />
        </div>
        <ProductModule :error="error" :loading="loading" :products="products" class="py-3" />
        <Pagination
          :totalItems="totalItemCount"
          :itemsPerPage="limit"
          @pageChange="onPageChange"
          class="mb-3"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import ProductModule from '@/components/modules/ProductModule.vue'
import Pagination from '@/components/modules/Pagination.vue'
import Breadcrumb from '@/components/modules/Breadcrumb.vue'
import ProductListCount from '@/components/modules/ProductListCount.vue'
import Dropdown from '@/components/modules/Dropdown.vue'

export default {
  components: { ProductModule, Pagination, Breadcrumb, ProductListCount, Dropdown },
  setup() {
    const limit = 8
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
    const totalItemCount = ref(0)

    const defaultSortOption = ref('By rating')

    const sortOptions = ref([
      { id: 1, title: 'By rating', sortBy: 'rating' },
      { id: 2, title: 'By name, A-Z', sortBy: 'nameAsc' },
      { id: 3, title: 'By name, Z-A', sortBy: 'nameDesc' },
      { id: 4, title: 'By price, low to high', sortBy: 'priceAsc' },
      { id: 5, title: 'By price, high to low', sortBy: 'priceDesc' }
    ])

    const navigationItems = ref([
      { id: 1, path: '/', title: 'Home' },
      { id: 2, path: '/catalog', title: 'Catalog' },
      { id: 3, path: '/catalog', title: 'Smartphones', active: true }
    ])

    const onPageChange = page => {
      // console.log(page)
    }

    const onChangeDropdown = dropdown => {
      // console.log(dropdown)
    }

    const fetchProducts = async () => {
      loading.value = true

      try {
        const response = await fetch(import.meta.env.VITE_PRODUCTS_ENDPOINT)

        if (!response.ok) {
          throw new Error('Failed to load products')
        }

        const data = await response.json()
        console.log(data)
        totalItemCount.value = data.length
        // mocking discounted products query
        products.value = data.slice(0, limit)
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
      limit,
      totalItemCount,
      error,
      loading,
      fetchProducts,
      onPageChange,
      products,
      navigationItems,
      sortOptions,
      defaultSortOption,
      onChangeDropdown
    }
  }
}
</script>
