<template>
  <button
    :id="`${id}-dropdown`"
    :data-dropdown-toggle="`dropdown-${id}`"
    class="dropdown text-black font-normal rounded-md text-sm px-5 py-2.5 text-center justify-between inline-flex items-center border-gray-200 border-solid border-1"
    type="button"
  >
    By rating

    <IconArrow :color="'#9F9F9F'" :orientation="'bottom'" />
  </button>

  <!-- Dropdown menu -->
  <div
    :id="`dropdown-${id}`"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dropdown-list"
  >
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" :aria-labelledby="`${id}-dropdown`">
      <li v-for="item in options" :key="item.id">
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >{{ item.title }}</a
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import IconArrow from '../icons/commons/iconArrow.vue'
defineProps({ id: String, options: Array })

onMounted(() => {
  initFlowbite()
})
</script>
<style lang="scss">
@media (min-width: 768px) {
  .dropdown,
  .dropdown-list {
    min-width: 256px;
  }
}
</style>
