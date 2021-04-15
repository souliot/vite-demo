import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/index.vue'
import Page404 from '@/views/error_page/404.vue'
import { configure, start, done } from 'nprogress'
import 'nprogress/nprogress.css'
configure({ showSpinner: false })

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/404',
    name: '404',
    component: Page404,
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

router.beforeEach(async (to, from, next) => {
  start()
  // to and from are both route objects. must call `next`.
  next()

  return
})

router.afterEach((to, from) => {
  done()
  // to and from are both route objects.
})

export default router
