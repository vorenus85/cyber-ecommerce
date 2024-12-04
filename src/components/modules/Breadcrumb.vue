<template>
  <nav class="breadcrumb flex py-6">
    <ol class="inline-flex items-center space-x-4 rtl:space-x-reverse">
      <li v-for="(item, index) in navItems" :key="item.id">
        <div class="flex items-center">
          <IconArrow
            class="mr-4"
            :size="24"
            color="#A4A4A4"
            orientation="right"
            v-if="index > 0 && index < navItems.length"
          />
          <RouterLink
            :to="item.path"
            class="inline-flex items-center text-md font-normal breadcrumb-item"
            >{{ item.title }}</RouterLink
          >
        </div>
      </li>
    </ol>
  </nav>
</template>
<script setup>
import IconArrow from '../icons/commons/iconArrow.vue'
defineProps({ navItems: Array })
</script>
<style lang="scss">
.breadcrumb-item {
  color: var(--vt-c-black-mute);
  &.router-link-active {
    color: #000;
  }
}
@media (min-width: 768px) {
  .breadcrumb {
    min-height: 104px;
  }
}
</style>
