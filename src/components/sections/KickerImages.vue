<script setup>
import KickerImage from '@/components/modules/KickerImage.vue'
import { ref } from 'vue'

const kickerImages = ref([
  {
    title: 'Popular Products',
    alt: 'Popular Products',
    description:
      'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: 'popular_products.png',
    btn: 'Shop Now',
    btnUrl: '#'
  },
  {
    title: 'Ipad Pro',
    alt: 'Ipad Pro',
    description:
      'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: 'ipad_pro.png',
    btn: 'Shop Now',
    btnUrl: '#'
  },
  {
    title: 'Samsung Galaxy',
    alt: 'Samsung Galaxy',
    description:
      'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: 'samsung_galaxy.png',
    btn: 'Shop Now',
    btnUrl: '#'
  },
  {
    title: 'Macbook Pro',
    alt: 'Macbook Pro',
    description:
      'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: 'macbook_pro.png',
    btn: 'Shop Now',
    btnUrl: '#'
  }
])

function getImageUrl(image) {
  const localhost = new URL(import.meta.url)
  const appUrl = localhost.origin
  const imageUrl = new URL(`${import.meta.env.VITE_BASE_URL}/images/kicker-images/${image}`, appUrl)

  return imageUrl.href
}
</script>
<template>
  <div class="kicker-images-section module">
    <template v-for="(banner, index) in kickerImages" :key="banner.image">
      <KickerImage :class="`kicker-image-item-${index + 1}`">
        <template #image>
          <img
            :src="getImageUrl(banner.image)"
            :alt="banner.alt"
            loading="lazy"
            class="w-full"
            width="360"
            height="360"
          />
        </template>
        <template #title>
          {{ banner.title }}
        </template>
        <template #description>
          <p>{{ banner.description }}</p>
        </template>
        <template #btn v-if="banner?.btn">
          <a class="btn btn-secondary kicker-images-btn" :href="banner?.btnUrl">{{
            banner?.btn
          }}</a>
        </template>
      </KickerImage>
    </template>
  </div>
</template>
<style>
.kicker-images-section {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.kicker-images-btn {
  padding-left: 56px;
  padding-right: 56px;
}

.kicker-image-item-1 {
  background: #fff;
}

.kicker-image-item-2 {
  background: #f9f9f9;
}

.kicker-image-item-3 {
  background: #eaeaea;
}

.kicker-image-item-4 {
  background: #2c2c2c;
}

.kicker-image-item-4 .kicker-image-title h3 {
  color: #fff;
}

.kicker-image-item-4 .kicker-images-btn {
  border-color: #fff;
  color: #fff;
}

.kicker-image-btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (min-width: 576px) {
  .kicker-images-section {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .kicker-images-section {
    grid-template-columns: repeat(4, 1fr);
  }

  .kicker-image-btn-container {
    justify-content: start;
  }
}
</style>
