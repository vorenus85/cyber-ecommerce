<script script></script>
<template>
  <nav class="header-links hidden lg:flex">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact-us">Contact us</RouterLink>
    <RouterLink to="/blog">Blog</RouterLink>
  </nav>
</template>
<style scoped lang="scss">
.header-links {
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
    gap: 20px;
  }
}

@media (min-width: 1200px) {
  .header-links {
    gap: 52px;
  }
}
</style>
