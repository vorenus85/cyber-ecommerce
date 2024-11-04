<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/sections/Header.vue'
import CategoryMenu from '@/components/modules/CategoryMenu.vue'
import Footer from '@/components/sections/Footer.vue'
import AddToCartModal from '@/components/modules/AddToCartModal.vue'
import { useCartStore } from './stores/useCartStore'
</script>

<template>
  <Header />
  <CategoryMenu />
  <div class="content">
    <RouterView />
  </div>
  <AddToCartModal />
  <Footer />
</template>
