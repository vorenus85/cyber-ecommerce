<script setup>
import IconTwitter from '@/components/icons/social/IconTwitter.vue'
import IconFaceBook from '@/components/icons/social/IconFacebook.vue'
import IconInstagram from '@/components/icons/social/IconInstagram.vue'
import IconTikTok from '@/components/icons/social/IconTikTok.vue'
</script>
<template>
  <div class="social-module module">
    <a href="#" class="social-link"><IconTwitter /></a>
    <a href="#" class="social-link"><IconFaceBook /></a>
    <a href="#" class="social-link"><IconTikTok /></a>
    <a href="#" class="social-link"><IconInstagram /></a>
  </div>
</template>
<style scoped>
.social-module {
  display: flex;
  gap: 25px;
  align-items: flex-start;
}
</style>
