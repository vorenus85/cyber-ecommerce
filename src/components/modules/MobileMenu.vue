<template>
  <div
    class="mobile-menu-overlay top-0 right-0 fixed z-50"
    @click="toggle"
    :class="{ active: mobileMenuStore.isOpen }"
  ></div>
  <div
    class="mobile-menu fixed top-0 z-50 flex flex-col"
    :class="{ active: mobileMenuStore.isOpen }"
  >
    <button class="close-mobile-menu self-end flex items-center justify-center">
      <IconClose @click="toggle" />
    </button>
    <div class="mobile-menu-category flex flex-col">
      <RouterLink
        to="#"
        v-for="category in categoryItems"
        :key="category.id"
        class="mobile-menu-item mb-1"
        >{{ category.name }}</RouterLink
      >
    </div>
    <div class="mobile-menu-common flex flex-col">
      <RouterLink
        :to="menu.path"
        v-for="menu in menuItems"
        :key="menu.id"
        class="mobile-menu-item mb-1"
        >{{ menu.title }}</RouterLink
      >
    </div>
  </div>
</template>
<script setup>
import { useMenuData } from '@/composables/useMenuData'
import { useCategoryData } from '@/composables/useCategoryData.js'
import { useMobileMenuStore } from '@/stores/useMobileMenuStore'
import { ref, shallowRef } from 'vue'

import IconClose from '../icons/commons/iconClose.vue'
const { menuData } = useMenuData()
const { categoryData } = useCategoryData()
const mobileMenuStore = useMobileMenuStore()
const categoryItems = shallowRef(categoryData())
const menuItems = ref(menuData())
function toggle() {
  mobileMenuStore.toggleMenu()
}
</script>
<style lang="scss">
.mobile-menu-overlay {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  background: rgba(0, 0, 0, 0.7);
  &.active {
    opacity: 1;
    visibility: visible;
  }
}

.mobile-menu {
  background: #fff;
  width: 70vw;
  right: -70vw;
  transition: var(--transition);
  top: 0;
  min-height: 100vh;
  &.active {
    right: 0;
  }
}

.close-mobile-menu {
  width: 40px;
  height: 40px;

  svg {
    border-radius: 100%;
    border: 1px solid;
  }
}

.mobile-menu-item {
  padding: 0.25rem 0.5rem;
  text-align: right;
}
</style>
