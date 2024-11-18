<script setup>
import { useMenuData } from '@/composables/useMenuData'
import { ref } from 'vue'
const { menuData } = useMenuData()

const menuItems = ref(menuData())
</script>
<template>
  <nav class="header-links hidden lg:flex">
    <RouterLink :to="menu.path" v-for="menu in menuItems" :key="menu.id">{{
      menu.title
    }}</RouterLink>
  </nav>
</template>
<style scoped lang="scss">
.header-links {
  a {
    opacity: 0.3;
    font-weight: 500;
  }

  a.router-link-exact-active {
    opacity: 1;
  }
}

@media (min-width: 992px) {
  .header-links {
    gap: 20px;
  }
}

@media (min-width: 1200px) {
  .header-links {
    gap: 45px;
  }
}
</style>
