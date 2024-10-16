<script setup>
import iconFavorites from '@/components/icons/commons/iconFavorites.vue'
import iconCart from '@/components/icons/commons/iconCart.vue'
import iconUser from '@/components/icons/commons/iconUser.vue'
</script>
<template>
  <div class="header-icons">
    <button>
      <iconFavorites />
    </button>
    <button>
      <iconCart />
    </button>
    <button>
      <iconUser />
    </button>
  </div>
</template>
<style scoped>
.header-icons {
  display: flex;
  gap: 24px;
}
</style>
