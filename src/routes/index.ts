import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  strict: true,
  scrollBehavior: async (to, from, savedPosition) => {
    // await scrollWaiter.wait();
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.matched.every((record, i) => from.matched[i] !== record)) {
        return { left: 0, top: 0 }
      }
      return false
    }
  },
})

export default router
