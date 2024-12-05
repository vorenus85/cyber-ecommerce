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
import { mockApi } from '@/api/mockApi'

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
    const page = ref(1)
    const loading = ref(true)
    const error = ref(null)
    const totalItemCount = ref(0)
    const defaultSortOption = ref('By rating')
    const sort = ref('rating_asc')

    const sortOptions = ref([
      { id: 1, title: 'By rating', sortBy: 'rating_asc' },
      { id: 2, title: 'By name, A-Z', sortBy: 'title_asc' },
      { id: 3, title: 'By name, Z-A', sortBy: 'title_desc' },
      { id: 4, title: 'By price, low to high', sortBy: 'price_asc' },
      { id: 5, title: 'By price, high to low', sortBy: 'price_desc' }
    ])

    const navigationItems = ref([
      { id: 1, path: '/', title: 'Home' },
      { id: 2, path: '/catalog', title: 'Catalog' },
      { id: 3, path: '/catalog', title: 'Smartphones', active: true }
    ])

    const onPageChange = newPage => {
      page.value = parseInt(newPage, 10)
      fetchProducts()
    }

    const onChangeDropdown = newSort => {
      sort.value = newSort.sortBy
      fetchProducts()
    }

    const fetchProducts = async () => {
      loading.value = true

      try {
        const response = await mockApi.getProducts({}, sort.value, page.value, limit)

        if (!response.ok) {
          throw new Error('Failed to load products')
        }

        products.value = response.data
        totalItemCount.value = response.total
      } catch (error) {
        console.log(error)
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
