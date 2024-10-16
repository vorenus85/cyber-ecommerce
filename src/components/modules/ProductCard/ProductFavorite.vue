<script setup>
import iconFavorite from '@/components/icons/commons/iconFavorite.vue'
import { ref } from 'vue'

const selected = ref(false)

function toggleFavorite() {
  selected.value = !selected.value
  this.$emit('toggleFavorite')
}
</script>
<template>
  <div class="product-header flex justify-end">
    <button class="btn-favorite" @click="toggleFavorite" :class="{ selected: selected }">
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
