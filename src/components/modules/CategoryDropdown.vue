<template>
  <template v-if="category?.subCategories?.length">
    <ul v-if="category?.uniqueDropdown" class="category-unique-submenu container">
      <li class="py-2">
        <div class="category-unique-content grid grid-cols-4 gap-4">
          <CategorySubmenu
            v-if="category?.subCategories"
            :subCategories="category.subCategories"
            :header="'By Category'"
          />
          <CategorySubmenu
            v-if="category?.byBrands"
            :subCategories="category.byBrands"
            :header="'By Brands'"
          />
          <template v-for="product in category?.featuredProducts" :key="product.id">
            <ProductCard :product="product" hideWishlist />
          </template>
        </div>
      </li>
    </ul>
    <template v-else>
      <CategorySubmenu :subCategories="category.subCategories" />
    </template>
  </template>
</template>
<script setup>
import CategorySubmenu from './CategorySubmenu.vue'
import ProductCard from './ProductCard/ProductCard.vue'
defineProps({ category: Object })
</script>
<style lang="scss">
.category-submenu {
  position: absolute;
  width: 200px;
  top: 100%;
  left: 0;
  visibility: hidden;
  opacity: 0.3;
  transform: scale(1, 0);
  transition: var(--transition);
  background: #fff;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  transform-origin: top;
  animation-fill-mode: forwards;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.category-unique-submenu .category-submenu {
  position: static;
  visibility: initial;
  opacity: initial;
  transform: initial;
  box-shadow: initial;
}

.has-unique-dropdown > .category-unique-submenu {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  visibility: hidden;
  opacity: 0.3;
  transform: scale(1, 0);
  transition: var(--transition);
  background: #fff;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  transform-origin: top;
  animation-fill-mode: forwards;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.has-unique-dropdown:hover > .category-unique-submenu,
.category-menu-item:hover > .category-submenu {
  transform: scale(1, 1);
  visibility: visible;
  opacity: 1;
}

.category-menu-item.has-unique-dropdown {
  position: static;
}
</style>
