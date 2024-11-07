<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/sections/Header.vue'
import Footer from '@/components/sections/Footer.vue'
import AddToCartModal from '@/components/modules/AddToCartModal.vue'
import MobileMenu from './components/modules/MobileMenu.vue'
</script>
<template>
  <Header />
  <div class="content">
    <RouterView />
  </div>
  <AddToCartModal />
  <Footer />
  <MobileMenu />
</template>
