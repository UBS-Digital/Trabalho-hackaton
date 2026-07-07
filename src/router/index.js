import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      name: 'agendar-consulta',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AgendarConsultaView.vue'),
    },
    {path: '/AgendarExameView.vue',
      name: 'agendar-exame',
      component: () => import('../views/AgendarExameView.vue'),
    },
    {
      path: '/MedicoFamiliarView.vue',
      name: 'medico-familiar',
      component: () => import('../views/MedicoFamiliarView.vue'),
    },
    {
    }
  ],
})

export default router
