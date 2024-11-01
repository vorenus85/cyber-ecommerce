<script script></script>
<template>
  <nav class="header-links">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact-us">Contact us</RouterLink>
    <RouterLink to="/blog">Blog</RouterLink>
  </nav>
</template>
<style scoped lang="scss">
.header-links {
  display: none;

  a {
    opacity: 0.3;
    font-weight: 500;
  }

  a.router-link-exact-active {
    opacity: 1;
  }
}

@media (min-width: 992px) {
  .header-links {
    display: flex;
    gap: 20px;
  }
}

@media (min-width: 1200px) {
  .header-links {
    gap: 52px;
  }
}
</style>
