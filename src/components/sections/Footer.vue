<script setup>
import FooterCustom from '@/components/modules/FooterCustom.vue'
import Socials from '@/components/modules/Socials.vue'
import FooterInformation from '@/components/modules/FooterInformation.vue'
</script>
<template>
  <section class="footer">
    <div class="container mx-auto">
      <div class="footer-rows grid grid-cols-3 gap-4">
        <div class="footer-column footer-column-1">
          <FooterCustom />
          <Socials />
        </div>
        <div class="footer-column footer-column-2">
          <FooterInformation />
        </div>

        <div class="footer-column footer-column-2">
          <FooterInformation />
        </div>
      </div>
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
<style>
.footer .logo {
  color: #fff;
}
</style>
