<template>
  <div class="category-menu">
    <div class="container category-menu-container mx-auto pt-2 pb-2">
      <ul class="category-menu-list flex justify-between align-center">
        <template v-for="category in categoryItems" :key="category.id">
          <li class="category-menu-item">
            <RouterLink to="#" class="category-menu-link flex gap-2">
              <component class="category-menu-img" :is="category.icon"></component
              >{{ category.name }}
            </RouterLink>
          </li>
          <li class="category-separator"></li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { shallowRef } from 'vue'
import { defineAsyncComponent } from 'vue'

const categoryItems = shallowRef([
  {
    name: 'Phones',
    id: '1',
    icon: defineAsyncComponent(() => import('@/components/icons/categoryMenu/iconPhones.vue'))
  },
  {
    name: 'Computers',
    id: '2',
    icon: defineAsyncComponent(() => import('@/components/icons/categoryMenu/iconComputers.vue'))
  },
  {
    name: 'Smart Watches',
    id: '3',
    icon: defineAsyncComponent(() => import('@/components/icons/categoryMenu/iconWatches.vue'))
  },
  {
    name: 'Cameras',
    id: '4',
    icon: defineAsyncComponent(() => import('@/components/icons/categoryMenu/iconCameras.vue'))
  },
  {
    name: 'Headphones',
    id: '5',
    icon: defineAsyncComponent(() => import('@/components/icons/categoryMenu/iconHeadphones.vue'))
  },
  {
    name: 'Gaming',
    id: '6',
    icon: defineAsyncComponent(() => import('@/components/icons/categoryMenu/iconGaming.vue'))
  }
])
</script>
<style scoped>
.category-menu {
  display: none;
  background: var(--vt-c-black-soft);
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
}

.category-menu-link:hover {
  opacity: 1;
}

@media (min-width: 992px) {
  .category-menu {
    display: block;
  }
}
</style>
