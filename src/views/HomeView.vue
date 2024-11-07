<script setup>
import CategoryOffer from '@/components/modules/CategoryOffer/CategoryOffer.vue'
import HeroBanners from '@/components/modules/HeroBanner/HeroBanners.vue'
import SmallBanners from '@/components/modules/SmallBanner/SmallBanners.vue'
import DiscountedProducts from '@/components/modules/DiscountedProducts.vue'
import ProductAccordions from '@/components/modules/ProductAccordions.vue'
import KickerImages from '@/components/modules/KickerImage/KickerImages.vue'
import BottomBanner from '@/components/modules/BottomBanner.vue'
</script>
<template>
  <main>
    <HeroBanners />
    <SmallBanners />
    <CategoryOffer />
    <ProductAccordions />
    <KickerImages />
    <DiscountedProducts />
    <BottomBanner />
  </main>
</template>
