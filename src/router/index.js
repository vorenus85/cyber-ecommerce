import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useMobileMenuStore } from '@/stores/useMobileMenuStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/product-page',
      name: 'productPage',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/catalog',
      name: 'catalogPage',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// Register global navigation guard
router.beforeEach((to, from, next) => {
  const menuStore = useMobileMenuStore()
  menuStore.closeMenu() // Close mobile menu on every route change
  next()
})

export default router
