import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgendarConsultaView from '../views/AgendarConsultaView.vue'
import AgendarExameView from '../views/AgendarExameView.vue'
import MedicoFamiliarView from '../views/MedicoFamiliarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/agendar-consulta',
      name: 'agendar-consulta',
      component: AgendarConsultaView,
    },
    {
      path: '/agendar-exame',
      name: 'agendar-exame',
      component: AgendarExameView,
    },
    {
      path: '/medico-familiar',
      name: 'medico-familiar',
      component: MedicoFamiliarView,
    },
  ],
})

export default router
