import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import GamePage from '@/pages/GamePage.vue'

// import ClientsLayout from '@/clients/layout/ClientsLayout.vue';
// import ListPage from '@/clients/pages/ListPage.vue';
// import ClientPage from '@/clients/pages/ClientPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/game',
      name: 'game-page',
      component: GamePage
    }
  ]
})

export default router
