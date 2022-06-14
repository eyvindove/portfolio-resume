import {
  createRouter,
  createWebHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => {
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
  routes,
})

export default router
