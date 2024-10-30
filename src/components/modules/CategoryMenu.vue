<template>
  <div class="category-menu">
    <div class="container category-menu-container mx-auto pt-2 pb-2">
      <ul class="category-menu-list flex justify-between align-center">
        <template v-for="category in categoryItems" :key="category.id">
          <li class="category-menu-item">
            <RouterLink to="/category-page/" class="category-menu-link flex gap-2">
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
import { ref } from 'vue'
import iconPhones from '@/components/icons/categoryMenu/iconPhones.vue'
import iconComputers from '@/components/icons/categoryMenu/iconComputers.vue'
import iconWatches from '@/components/icons/categoryMenu/iconWatches.vue'
import iconCameras from '@/components/icons/categoryMenu/iconCameras.vue'
import iconHeadphones from '@/components/icons/categoryMenu/iconHeadphones.vue'
import iconGaming from '@/components/icons/categoryMenu/iconGaming.vue'

const categoryItems = ref([
  { name: 'Phones', id: '1', icon: iconPhones },
  { name: 'Computers', id: '2', icon: iconComputers },
  { name: 'Smart Watches', id: '3', icon: iconWatches },
  { name: 'Cameras', id: '4', icon: iconCameras },
  { name: 'Headphones', id: '5', icon: iconHeadphones },
  { name: 'Gaming', id: '6', icon: iconGaming }
])
</script>
<style scoped>
/* TODO do not render category menu under 992px */
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
