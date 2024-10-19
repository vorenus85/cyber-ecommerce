<template>
  <section class="category-offer">
    <div class="category-offer-module module container">
      <div class="module-head">
        <h3 class="module-head-title">Browse By Category</h3>
      </div>
      <div class="category-offer-list justify-between align-center module-body">
        <a href="#" v-for="category in categoryItems" :key="category.id" class="category-menu-item">
          <div href="/" class="category-offer-box flex flex-col items-center">
            <component class="category-offer-img" :is="category.icon"></component
            ><span class="category-offer-name">{{ category.name }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import iconPhones from '@/components/icons/categoryOffer/iconPhones.vue'
import iconComputers from '@/components/icons/categoryOffer/iconComputers.vue'
import iconWatches from '@/components/icons/categoryOffer/iconWatches.vue'
import iconCameras from '@/components/icons/categoryOffer/iconCameras.vue'
import iconHeadphones from '@/components/icons/categoryOffer/iconHeadphones.vue'
import iconGaming from '@/components/icons/categoryOffer/iconGaming.vue'

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
.category-offer {
  padding: 64px 0;
  background: #fafafa;
}

.category-menu-item {
  padding: 1.5rem 1rem;
  border-radius: 15px;
  background: var(--card-background);
  transition: var(--transition);
  color: #000;
}

.category-menu-item:hover {
  background: var(--card-hover-background);
}

.category-offer-name {
  line-height: 1;
  text-align: center;
}

.category-offer-box {
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 8px;
}

.category-offer-list:not(.slider) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 992px) {
  .category-offer-list:not(.slider) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1400px) {
  .category-offer-list:not(.slider) {
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
  }
}
</style>
