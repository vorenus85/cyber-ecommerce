<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header class="container mx-auto">
    <RouterLink to="/"
      ><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"
    /></RouterLink>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/">Contact us</RouterLink>
      <RouterLink to="/">Blog</RouterLink>
    </nav>
  </header>
</template>
<style scoped></style>
