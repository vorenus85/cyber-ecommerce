<script setup>
import Logo from '@/components/modules/Logo.vue'
import HeaderLinks from '@/components/modules/HeaderLinks.vue'
import SearchInput from '@/components/modules/SearchInput.vue'
import HeaderIcons from '@/components/modules/HeaderIcons.vue'
import CategoryMenu from '@/components/modules/CategoryMenu.vue'
</script>
<template>
  <div class="header sticky top-0 bg-white z-10">
    <div class="header-top container header-module">
      <Logo />
      <SearchInput />
      <HeaderLinks />
      <HeaderIcons />
    </div>
    <div class="header-bottom">
      <CategoryMenu />
    </div>
  </div>
</template>
<style>
.header-module {
  height: 88px;
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header.sticky {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.header-module .logo {
  color: #000;
}
</style>
