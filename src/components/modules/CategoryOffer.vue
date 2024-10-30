<template>
  <section class="category-offer module">
    <div class="category-offer-module container">
      <div class="module-head">
        <h3 class="module-head-title">Browse By Category</h3>
      </div>
      <div class="category-offer-list module-body">
        <swiper-container
          :space-between="spaceBetween"
          :navigation="{
            hideOnClick: true
          }"
          :breakpoints="{
            0: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            1200: {
              slidesPerView: 4
            },
            1400: {
              slidesPerView: 6
            }
          }"
          @swiper-progress="onProgress"
          @swiper-slide-change="onSlideChange"
          class="category-offer-swiper"
        >
          <swiper-slide v-for="category in categoryItems" :key="category.id">
            <RouterLink to="/category-page/" class="category-menu-item">
              <div href="/" class="category-offer-box flex flex-col items-center">
                <img
                  class="category-offer-img"
                  :src="getImageUrl(category.icon)"
                  :alt="title"
                  width="32"
                  height="32"
                  loading="lazy"
                />
                <span class="category-offer-name">{{ category.name }}</span>
              </div>
            </RouterLink>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </section>
</template>
<script>
import { markRaw, ref, shallowRef } from 'vue'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
import { RouterLink } from 'vue-router'
// register Swiper custom elements
register()

export default {
  setup() {
    const categoryItems = markRaw([
      { name: 'Phones', id: '1', icon: 'phones.svg' },
      { name: 'Smart Watches', id: '2', icon: 'watches.svg' },
      { name: 'Computers', id: '3', icon: 'computers.svg' },
      { name: 'Cameras', id: '4', icon: 'cameras.svg' },
      { name: 'Headphones', id: '5', icon: 'headphones.svg' },
      { name: 'Gaming', id: '6', icon: 'gaming.svg' },
      { name: 'Phones', id: '7', icon: 'phones.svg' },
      { name: 'Smart Watches', id: '8', icon: 'watches.svg' },
      { name: 'Computers', id: '9', icon: 'computers.svg' },
      { name: 'Cameras', id: '10', icon: 'cameras.svg' },
      { name: 'Headphones', id: '11', icon: 'headphones.svg' },
      { name: 'Gaming', id: '12', icon: 'gaming.svg' }
    ])

    const spaceBetween = 32

    const onProgress = e => {
      const [swiper, progress] = e.detail
      console.log(progress)
    }

    const onSlideChange = e => {
      console.log('slide changed')
    }

    function getImageUrl(name) {
      const localhost = new URL(import.meta.url)
      const appUrl = localhost.origin
      const imageUrl = new URL(
        `${import.meta.env.VITE_BASE_URL}/images/category-offers/${name}`,
        appUrl
      )

      return imageUrl.href
    }

    return {
      onProgress,
      onSlideChange,
      categoryItems,
      spaceBetween,
      getImageUrl
    }
  }
}
</script>
<style scoped lang="scss">
.category-offer {
  padding: 64px 0;
  background: #fafafa;
}

.category-menu-item {
  padding: 1.5rem 1rem;
  border-radius: 15px;
  background: var(--card-background);
  transition: var(--transition);
  color: #000;
  display: flex;
}

.category-menu-item:hover {
  background: var(--card-hover-background);
}

.category-offer-name {
  line-height: 1;
  text-align: center;
}

.category-offer-box {
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 8px;
}

.category-offer-slider-nav {
}
</style>
