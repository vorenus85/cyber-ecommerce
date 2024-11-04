<script setup>
import iconFavorite from '@/components/icons/commons/iconFavorite.vue'
import { ref, defineEmits, watch } from 'vue'

const props = defineProps({
  onWishlist: Boolean
})

// Define the emit function for event emitting
const emit = defineEmits(['toggleWishlist'])

const selected = ref(props.onWishlist)

watch(
  () => props.onWishlist,
  newVal => {
    selected.value = newVal
  }
)

function toggleWishlist() {
  selected.value = !selected.value
  emit('toggleWishlist') // Use the `emit` function directly
}
</script>

<template>
  <div class="product-header flex justify-end w-full">
    <button class="btn-favorite" @click="toggleWishlist" :class="{ selected: selected }">
      <iconFavorite />
    </button>
  </div>
</template>
<style>
.btn-favorite:hover svg path {
  stroke: #ff0000;
}

.btn-favorite.selected svg path {
  stroke: #ff0000;
  fill: #ff0000;
}
</style>
