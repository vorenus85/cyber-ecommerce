<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/sections/Header.vue'
import CategoryMenu from '@/components/modules/CategoryMenu.vue'
import Footer from '@/components/sections/Footer.vue'
</script>

<template>
  <Header />
  <CategoryMenu />
  <div class="content">
    <RouterView />
  </div>
  <Footer />
</template>
