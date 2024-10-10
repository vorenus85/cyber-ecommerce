<script setup>
import Logo from '@/components/modules/Logo.vue'
import HeaderLinks from '@/components/modules/HeaderLinks.vue'
</script>
<template>
  <header class="container mx-auto header-module">
    <Logo />
    <HeaderLinks />
  </header>
</template>
<style>
.header-module .logo {
  color: #000;
}
</style>
