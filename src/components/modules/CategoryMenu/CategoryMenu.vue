<template>
  <div class="category-menu">
    <div class="container category-menu-container mx-auto pt-2 pb-2">
      <ul class="category-menu-list relative flex justify-between align-center">
        <template v-for="category in categoryItems" :key="category.id">
          <li
            class="category-menu-item"
            :class="{ 'has-unique-dropdown': category.uniqueDropdown }"
          >
            <RouterLink to="#" class="category-menu-link flex gap-2">
              <component class="category-menu-img" :is="category.smallIcon"></component
              >{{ category.name }}
            </RouterLink>
            <CategoryDropdown :category="category" />
          </li>
          <li class="category-separator"></li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { shallowRef } from 'vue'
import CategoryDropdown from './CategoryDropdown.vue'
import { useCategoryData } from '@/composables/useCategoryData.js'
const { categoryData } = useCategoryData()

const categoryItems = shallowRef(categoryData())
</script>
<style scoped lang="scss">
.category-menu {
  display: none;
  background: var(--vt-c-black-soft);
  position: relative;
}

.category-menu-item {
  position: relative;
}

.category-separator {
  content: '';
  display: block;
  opacity: 0.2;
  background: #fff;
  width: 1px;
  height: 24px;
  margin-top: 5px;
}

.category-separator:last-child {
  display: none;
}

.category-menu-link {
  color: #fff;
  opacity: 0.5;
  padding: 4px 0;
  transition: var(--transition);

  &:hover {
    opacity: 1;
  }
}

@media (min-width: 992px) {
  .category-menu {
    display: block;
  }
}
</style>
