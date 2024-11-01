<script setup>
import iconFavorite from '@/components/icons/commons/iconFavorite.vue'
import { ref, defineEmits } from 'vue'

// Define the emit function for event emitting
const emit = defineEmits(['toggleWishlist'])

const selected = ref(false)

function toggleWishlist() {
  selected.value = !selected.value
  emit('toggleWishlist') // Use the `emit` function directly
}
</script>

<template>
  <div class="product-header flex justify-end">
    <button class="btn-favorite" @click="toggleWishlist" :class="{ selected: selected }">
      <iconFavorite />
    </button>
  </div>
</template>
<style scoped>
.product-header {
  width: 100%;
}
</style>
<style>
.btn-favorite:hover svg path {
  stroke: #ff0000;
}

.btn-favorite.selected svg path {
  stroke: #ff0000;
  fill: #ff0000;
}
</style>
