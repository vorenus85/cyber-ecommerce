<script script>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="header-links">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact-us">Contact us</RouterLink>
    <RouterLink to="/blog">Blog</RouterLink>
  </nav>
</template>
<style scoped>
.header-links {
  display: flex;
  gap: 20px;
}

@media (min-width: 992px) {
  .header-links {
    gap: 35px;
  }
}

@media (min-width: 1200px) {
  .header-links {
    gap: 52px;
  }
}
</style>
