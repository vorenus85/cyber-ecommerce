<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 ${size} ${size}`"
    :width="computedSize"
    :height="computedSize"
    class="icon-arrow"
    :class="`orientation-${orientation}`"
  >
    <path
      d="M8 4l8 8-8 8"
      fill="none"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: Number,
    default: 32
  },
  color: {
    type: String,
    default: '#2E2E2E'
  },
  orientation: {
    type: String,
    default: 'right',
    validator: function (value) {
      return ['left', 'top', 'right', 'bottom'].includes(value)
    }
  }
})

const computedSize = computed(() => {
  return props.size * 0.75
})
</script>
<style lang="scss">
.orientation {
  &-left {
    transform: rotate(0deg);
  }

  &-top {
    transform: rotate(90deg);
  }

  &-right {
    transform: rotate(0deg);
  }

  &-bottom {
    transform: rotate(270deg);
  }
}
</style>
