<script setup>
import Socials from '@/components/modules/Socials.vue'
</script>
<template>
  <section class="footer">
    <div class="container mx-auto">
      <Socials />
    </div>
  </section>
</template>
<style scoped>
.footer {
  background: #000;
  padding: 3rem;
}

@media (min-width: 992px) {
  .footer {
    padding: 6.5rem 0;
  }
}
</style>
