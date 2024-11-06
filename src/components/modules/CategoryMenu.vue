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
              <component class="category-menu-img" :is="category.icon"></component
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
import { defineAsyncComponent } from 'vue'
import CategoryDropdown from './CategoryDropdown.vue'

const categoryItems = shallowRef([
  {
    name: 'Phones',
    id: '1',
    icon: defineAsyncComponent(() => import('@/components/icons/categoryMenu/iconPhones.vue')),
    subCategories: [
      {
        id: '11',
        name: 'Smartphones'
      },
      {
        id: '12',
        name: 'Feature Phones'
      },
      {
        id: '13',
        name: 'Gaming Phones'
      },
      {
        id: '14',
        name: 'Foldable Phones'
      },
      {
        id: '15',
        name: '5G Phones'
      },
      {
        id: '16',
        name: 'Refurbished Phones'
      }
    ]
  },
  {
    name: 'Computers',
    id: '2',
    icon: defineAsyncComponent(() => import('@/components/icons/categoryMenu/iconComputers.vue'))
  },
  {
    name: 'Smart Watches',
    id: '3',
    icon: defineAsyncComponent(() => import('@/components/icons/categoryMenu/iconWatches.vue')),
    uniqueDropdown: true,
    featuredProducts: [
      {
        id: 5,
        title: 'Samsung Galaxy Watch6 Classic 47mm Black',
        price: 369,
        discountedPrice: 200,
        image: 'samsung_galaxy_watch_6_classic_640x640.webp',
        imageThumb: 'samsung_galaxy_watch_6_classic_160x160.webp'
      },
      {
        id: 3,
        title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
        price: 399,
        discountedPrice: 250,
        image: 'apple_watch_series_9_640x640.webp',
        imageThumb: 'apple_watch_series_9_160x160.webp'
      }
    ],
    byBrands: [
      {
        id: '41',
        name: 'Samsung'
      },
      {
        id: '42',
        name: 'Huawei'
      },
      {
        id: '43',
        name: 'Amazonfit'
      },
      {
        id: '44',
        name: 'Garmin'
      }
    ],
    subCategories: [
      {
        id: '31',
        name: 'Fitness Trackers'
      },
      {
        id: '32',
        name: "Kids' Smart Watches"
      },
      {
        id: '33',
        name: 'Luxury Smart Watches'
      },
      {
        id: '34',
        name: 'Sports Smart Watches'
      },
      {
        id: '35',
        name: 'Hybrid Watches'
      },
      {
        id: '36',
        name: 'Standalone Watches (with SIM support)'
      }
    ]
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
