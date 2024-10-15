<script setup>
import Logo from '@/components/modules/Logo.vue'
import HeaderLinks from '@/components/modules/HeaderLinks.vue'
import SearchInput from '@/components/modules/SearchInput.vue'
import HeaderIcons from '@/components/modules/HeaderIcons.vue'
</script>
<template>
  <header class="container mx-auto header-module">
    <Logo />
    <SearchInput />
    <HeaderLinks />
    <HeaderIcons />
  </header>
</template>
<style>
.header-module {
  height: 88px;
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-module .logo {
  color: #000;
}
</style>
