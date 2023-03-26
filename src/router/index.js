import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/LayoutView.vue'),
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'xiazai',
          name: 'xiazai',
          component: () => import('@/views/XiaZaiView.vue')
        },
        {
          path: 'huiyuan',
          name: 'huiyuan',
          component: () => import('@/views/HuiYuanView.vue')
        },
        {
          path: 'itjishu',
          name: 'itjishu',
          component: () => import('@/views/ITJiShuView.vue')
        }
      ]
    },

    {
      path: '/Aa',
      name: 'Aa',
      component: () => import('@/views/AaView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/write',
      name: 'write',
      component: () => import('@/views/WriteView.vue')
    }
  ]
})

export default router
