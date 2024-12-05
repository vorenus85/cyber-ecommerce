<template>
  <ul class="category-submenu">
    <li class="mb-2" v-if="header">
      <strong>{{ header }}</strong>
    </li>
    <li v-for="subCategory in subCategories" :key="subCategory.id">
      <RouterLink to="/catalog" class="category-menu-link category-submenu-link">{{
        subCategory.name
      }}</RouterLink>
    </li>
  </ul>
</template>
<script setup>
defineProps({
  subCategories: Object,
  header: {
    type: String
  }
})
</script>
<style lang="scss">
.category-submenu-link {
  color: #2e2e2e;
  opacity: 1;
  margin-bottom: 0.25rem;
  &:hover {
    text-decoration: underline;
  }
}
</style>
