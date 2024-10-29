<template>
  <div class="hero-banner-item">
    <div class="hero-banner-text-contents">
      <p><slot name="beforeTitle" /></p>
      <h1><slot name="title" /></h1>
      <p><slot name="subTitle" /></p>
      <slot name="btn" />
    </div>
    <div class="hero-banner-image">
      <slot name="image" />
    </div>
  </div>
</template>
<script setup>
defineProps({})
</script>
