import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AgendarExameView from '@/views/AgendarExameView.vue';
import MedicoFamiliarView from '@/views/MedicoFamiliarView.vue';
import EspecialidadesMedicos from '@/views/EspecialidadesMedicos.vue';
import MinhaArea from '@/views/MinhaArea.vue';
import ContatoSite from '@/views/ContatoSite.vue';
import AgendarAgora from '@/views/AgendarAgora.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/AgendarConsulta',
      name: 'agendar-consulta',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AgendarConsultaView.vue'),
    },
    {    

      path: '/AgendarExame',
      name: 'agendar-exame',
      component: AgendarExameView,
    },
    {
      path: '/MedicoFamilia',
      name: 'medico-familia',
      component: MedicoFamiliarView,
    },
    {
      path: '/Especialidades',
      name: 'especialidades',
      component: EspecialidadesMedicos,
    },
    {
      path: '/Contato',
      name: 'contato',
      component: ContatoSite,
    },
    {
      path: '/MinhaArea',
      name: 'minha-area',
      component: MinhaArea,
    },
    {
      path: '/AgendarAgora',
      name: 'agendar-agora',
      component: AgendarAgora,
    }
  ],
})

export default router
