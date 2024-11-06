import { onMounted, onUnmounted, ref } from 'vue'

export function useIntersectionObserver(callback, options = {}) {
  const element = ref(null)
  let observer = null

  onMounted(() => {
    if (element.value) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback(entry)
          if (options.once) {
            observer.disconnect()
          }
        }
      }, options)

      observer.observe(element.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { element }
}
