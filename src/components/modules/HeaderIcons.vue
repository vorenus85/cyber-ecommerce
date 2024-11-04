<script setup>
import iconFavorites from '@/components/icons/commons/iconFavorites.vue'
import iconUser from '@/components/icons/commons/iconUser.vue'
import iconMobileMenu from '@/components/icons/commons/iconMobileMenu.vue'
import { useWishlistStore } from '@/stores/useWishlistStore.js'
import HeaderCart from './HeaderCart.vue'
const wishlistStore = useWishlistStore()
</script>
<template>
  <div class="header-icons">
    <button class="header-btn-favorite h-8 relative">
      <iconFavorites />
      <span class="wishlist-count red-pulse absolute" v-if="wishlistStore.wishlistCount">{{
        wishlistStore.wishlistCount
      }}</span>
    </button>
    <HeaderCart />
    <button class="btn-user h-8">
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

.red-pulse {
  box-shadow: 0 0 0 0 rgba(255, 0, 0, 1);
  transform: scale(1);
  animation: redPulse 2s infinite;
}

@keyframes redPulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 5px rgba(255, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
  }
}

.wishlist-count {
  font-size: 10px;
  color: #fff;
  font-weight: 600;
  width: 18px;
  height: 18px;
  background: #ff0000;
  border-radius: 100%;
  top: -3px;
  right: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
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
