<template>
  <component :is="href ? 'a' : 'button'" :href="href || null" class="btn" :class="classes">
    {{ title }}
  </component>
</template>
<script setup>
defineProps({
  href: {
    type: String
  },
  title: {
    type: String,
    default: 'Button'
  },
  classes: Array
})
</script>
<style scoped>
.btn {
  border-radius: 8px;
  display: flex;
  padding: 13px 16px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  transition: var(--transition);
}

.btn:focus,
.btn:hover {
  opacity: 0.75;
}

.btn-primary {
  background: #000;
  color: #fff;
}

.btn-secondary {
  border-radius: 6px;
  border: 1px solid #000;
  background: transparent;
  color: #000;
}

.btn-secondary:focus,
.btn-secondary:hover {
  opacity: 0.75;
}

.btn-block {
  width: 100%;
}
</style>
