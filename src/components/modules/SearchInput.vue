<template>
  <div class="search-input-module relative">
    <div
      class="search-overlay fixed z-40"
      @click="closeFilter"
      :class="{ active: filteredProducts.length || error }"
    ></div>
    <div class="relative rounded-md shadow-sm z-50">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <iconSearch />
      </div>
      <input
        type="text"
        autocomplete="off"
        v-model="filteredPhrase"
        name="search"
        id="search"
        class="search-input block w-full rounded-md border-0 py-1.5 pl-10 pr-20 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
        placeholder="Search"
        @keyup="filter"
        ref="searchInput"
      />
    </div>
    <div
      class="search-results not-found absolute z-50 p-3"
      :class="{ active: !filteredProducts.length && filteredPhrase.length > 3 }"
    >
      <small>Not found any product.</small>
    </div>
    <div class="search-results absolute z-50" :class="{ active: filteredProducts.length || error }">
      <div class="search-results-products">
        <h3 class="mb-3">Search results:</h3>
        <template v-for="product in filteredProducts" :key="product.id">
          <div class="search-result-snapshot flex mb-3">
            <div class="search-result-snapshot-left">
              <ProductImage
                :imageThumb="product.imageThumb"
                :width="parseInt(40)"
                :height="parseInt(40)"
                :title="product.title"
                :href="'#'"
                class="p-0 w-10"
              />
            </div>
            <div class="search-result-snapshot-right pl-2">
              <div class="search-result-snapshot-title">
                <ProductTitle :title="product.title" :href="'#'" />
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="search-results-actions">
        <MainButton
          variant="secondary"
          block
          size="small"
          title="Clear filter"
          @click="clearFilter"
        ></MainButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import iconSearch from '@/components/icons/commons/iconSearch.vue'
import { ref } from 'vue'
import ProductImage from './ProductCard/ProductImage.vue'
import ProductTitle from './ProductCard/ProductTitle.vue'
import MainButton from './MainButton.vue'

const products = ref([]) // Stores the memoized full product list
const memoizedProducts = ref(null) // Caches the first server response
const filteredProducts = ref([]) // Stores the filtered product list
const filteredPhrase = ref('')
const searchInput = ref(null)

const clearFilter = () => {
  filteredProducts.value = []
  filteredPhrase.value = ''
  searchInput.value.focus()
}

const closeFilter = () => {
  filteredProducts.value = []
  filteredPhrase.value = ''
}

const filter = event => {
  const phrase = event.target.value
  if (phrase.length > 3) {
    if (memoizedProducts.value) {
      // Filter the cached data locally
      filteredProducts.value = memoizedProducts.value
        .filter(product => product.title.toLowerCase().includes(phrase.toLowerCase()))
        .slice(0, 5)
    } else {
      fetchProducts(phrase)
    }
  }
}

const loading = ref(true)
const error = ref(null)

const fetchProducts = async phrase => {
  loading.value = true

  try {
    const response = await fetch(import.meta.env.VITE_PRODUCTS_ENDPOINT)

    if (!response.ok) {
      throw new Error('Failed to load products')
    }
    const data = await response.json()

    // Cache the initial server response
    memoizedProducts.value = data
    products.value = data

    // Filter the cached data for the initial query
    filteredProducts.value = data
      .filter(product => product.title.toLowerCase().includes(phrase.toLowerCase()))
      .slice(0, 5) // Limit the results to a maximum of 5 items to encourage the user to refine their query.
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>
<style scoped>
.search-input-module {
  display: none;
}

.search-overlay.active {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
}

.search-input {
  height: 56px;
  background: #f5f5f5;
  border-color: #f5f5f5;
}

.search-results {
  top: 100%;
  right: 0;
  display: block;
  visibility: hidden;
  opacity: 0.3;
  transform: scale(1, 0);
  width: 100%;
  transition: var(--transition);
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  transform-origin: top;
  animation-fill-mode: forwards;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.search-results.not-found {
  padding: 0.5rem;
}

.search-results.active {
  transform: scale(1, 1);
  visibility: visible;
  opacity: 1;
}

.search-result-snapshot .product-title {
  text-align: left;
  line-height: 1;
  font-size: 13px;
  font-weight: 300;
}

@media (min-width: 992px) {
  .search-input-module {
    display: block;
    width: 250px;
  }
}

@media (min-width: 1200px) {
  .search-input-module {
    width: 350px;
  }
}

@media (min-width: 1400px) {
  .search-input-module {
    width: 435px;
  }
}
</style>
