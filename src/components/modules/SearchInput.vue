<template>
  <div class="relative rounded-md shadow-sm search-input-module">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <iconSearch />
    </div>
    <input
      type="text"
      name="search"
      id="search"
      class="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Search"
    />
  </div>
</template>
<script setup>
import iconSearch from '@/components/icons/commons/iconSearch.vue'
</script>
<style scoped>
.search-input-module {
  display: none;
}

@media (min-width: 992px) {
  .search-input-module {
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
