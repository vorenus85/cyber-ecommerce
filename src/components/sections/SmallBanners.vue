<script setup>
import SmallBanner from '@/components/modules/SmallBanner.vue'
import { ref } from 'vue'

const smallBanners = ref([
  {
    title: 'Apple AirPods <span>Max</span>',
    description: "Computational audio. Listen, it's powerful",
    image: 'apple_airpods_max.png'
  },
  {
    title: 'Apple Vision <span>Pro</span>',
    description: 'An immersive way to experience entertainment',
    image: 'apple_vision_pro.png'
  },
  {
    title: 'Playstation <span>5</span>',
    description:
      'Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.',
    image: 'playstation.png'
  },
  {
    title: 'Macbook <span>Air</span>',
    description:
      'The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.',
    image: 'macbook_air.png',
    btn: 'Shop Now',
    btnUrl: '#'
  }
])

function getImageUrl(image) {
  const localhost = new URL(import.meta.url)
  const appUrl = localhost.origin
  const imageUrl = new URL(`${import.meta.env.VITE_BASE_URL}/images/small-banners/${image}`, appUrl)

  return imageUrl.href
}
</script>
<template>
  <div class="small-banners-section">
    <template v-for="(banner, index) in smallBanners" :key="banner.image">
      <SmallBanner :class="`small-banner-item-${index + 1}`">
        <template #image>
          <img :src="getImageUrl(banner.image)" :alt="banner.title" loading="lazy" />
        </template>
        <template #title>
          <h2 v-html="banner.title"></h2>
        </template>
        <template #description>
          <p>{{ banner.description }}</p>
        </template>
        <template #btn v-if="banner?.btn">
          <a class="btn btn-secondary small-banner-btn" :href="banner?.btnUrl">{{ banner?.btn }}</a>
        </template>
      </SmallBanner>
    </template>
  </div>
</template>
<style>
.small-banner-btn {
  width: 100%;
}

@media (min-width: 576px) {
  .small-banner-btn {
    width: initial;
  }
}

@media (min-width: 768px) {
  .small-banners-section {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
  }
}

@media (min-width: 1200px) {
  .small-banners-section {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .small-banner-item-3 {
    grid-area: 1 / 1 / 2 / 3;
  }
  .small-banner-item-1 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .small-banner-item-2 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .small-banner-item-4 {
    grid-area: 1 / 3 / 3 / 5;
  }
}
</style>
