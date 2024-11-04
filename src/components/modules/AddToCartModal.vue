<template>
  <transition name="fade">
    <div v-if="cartStore.modalIsOpen && cartStore.actuallyAdded">
      <div
        @click="onToggle"
        class="fixed top-0 left-0 right-0 bg-black opacity-70 inset-0 z-0 h-full"
      ></div>
      <div class="fixed w-5/6 max-w-lg p-3 rounded-xl shadow-lg bg-white cart-modal">
        <div>
          <div class="text-center p-3 flex-auto justify-center leading-6">
            <h2 class="text-2xl py-3 mb-4">Product added to cart!</h2>
            <div class="flex cart-product-snapshot">
              <ProductImage
                :image-thumb="cartStore.actuallyAdded?.imageThumb"
                :width="60"
                :height="60"
                :title="cartStore.actuallyAdded?.title"
              />
              <ProductTitle :title="cartStore.actuallyAdded?.title" />
            </div>
          </div>
          <div class="p-3 mt-2 text-center flex justify-between">
            <MainButton :class="'btn-secondary'" :title="'Continue'" @click="onToggle" />
            <MainButton :class="'btn-primary'" :title="'To cart'" :key="'#'" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { useCartStore } from '@/stores/useCartStore'
import MainButton from './MainButton.vue'
import ProductImage from './ProductCard/ProductImage.vue'
import ProductTitle from './ProductCard/ProductTitle.vue'

const cartStore = useCartStore()

const onToggle = () => {
  cartStore.toggleCartModal()
  cartStore.clearActualProduct()
}
</script>
<style lang="scss">
.cart-product-snapshot {
  .product-title {
    display: flex;
    padding-left: 1rem;
    text-align: left;
    line-height: 1.2;
  }
}

.cart-modal h2 {
  background: #f6f6f6;
  color: #000;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}

.cart-modal {
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
