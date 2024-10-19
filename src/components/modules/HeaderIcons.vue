<script setup>
import iconFavorites from '@/components/icons/commons/iconFavorites.vue'
import iconCart from '@/components/icons/commons/iconCart.vue'
import iconUser from '@/components/icons/commons/iconUser.vue'
import iconMobileMenu from '@/components/icons/commons/iconMobileMenu.vue'
</script>
<template>
  <div class="header-icons">
    <button class="btn-favorite">
      <iconFavorites />
    </button>
    <button class="btn-cart">
      <iconCart />
    </button>
    <button class="btn-user">
      <iconUser />
    </button>
    <button class="btn-mobile-menu">
      <iconMobileMenu />
    </button>
  </div>
</template>
<style scoped>
.header-icons {
  display: flex;
  gap: 24px;
}

.btn-favorite,
.btn-cart,
.btn-user {
  display: none;
}

@media (min-width: 992px) {
  .btn-mobile-menu {
    display: none;
  }

  .btn-favorite,
  .btn-cart,
  .btn-user {
    display: block;
  }
}
</style>
