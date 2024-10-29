<template>
  <section class="hero-banners">
    <div class="container">
      <template v-for="(banner, index) in banners" :key="banner.image">
        <HeroBanner>
          <template #image>
            <img :src="getImageUrl(banner.image)" :alt="banner.alt" />
          </template>
        </HeroBanner>
      </template>
    </div>
  </section>
</template>
<script setup>
import HeroBanner from '@/components/modules/HeroBanner.vue'
import { ref } from 'vue'

const banners = [
  {
    beforeTitle: 'Pro.Beyond.',
    title: 'IPhone 14 <span>Pro</span>',
    subTitle: 'Created to change everything for the better. For everyone',
    alt: 'IPhone 14 Pro',
    image: 'hero_banner_desktop.png',
    imageMobile: 'hero_banner_mobile.png',
    btn: 'Shop Now',
    btnUrl: '#'
  }
]

function getImageUrl(image) {
  const localhost = new URL(import.meta.url)
  const appUrl = localhost.origin
  const imageUrl = new URL(`${import.meta.env.VITE_BASE_URL}/images/hero-banners/${image}`, appUrl)

  return imageUrl.href
}
</script>
<style scoped lang="scss">
.hero-banners {
  background: linear-gradient(91deg, #211c24 0.64%, #211c24 101%);
  height: 769px;
  display: flex;
  padding: 88px 16px 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
}

@media (min-width: 992px) {
  .hero-banners {
    padding: 0px 160px;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
}
</style>
