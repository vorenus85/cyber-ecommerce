<template>
  <Vue3Lottie :animationData="underConstruction" :height="500" :width="500" />
</template>
<script>
import { Vue3Lottie } from 'vue3-lottie'

import underConstruction from '@/assets/underConstruction.json'

export default {
  components: {
    Vue3Lottie
  },
  data() {
    return {
      underConstruction
    }
  }
}
</script>
