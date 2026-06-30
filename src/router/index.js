import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgendarConsultaView from '@/views/AgendarConsultaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/AgendarConsultaView.vue',
      name: 'AgendarConsulta',
      component: AgendarConsultaView,
    },
  ],
})

export default router
