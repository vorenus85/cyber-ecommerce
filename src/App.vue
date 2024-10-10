<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/sections/Header.vue'
import Footer from '@/components/sections/Footer.vue'
</script>

<template>
  <Header />
  <div class="content">
    <RouterView />
  </div>
  <Footer />
</template>
