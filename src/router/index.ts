import { createRouter, createWebHistory, RouterRecordRaw } from 'vue-router'

const routes: Array<RouterRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/Index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
