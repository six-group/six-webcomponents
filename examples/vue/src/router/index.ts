import AlertView from '@/views/AlertView.vue';
import FormView from '@/views/FormView.vue';
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/form',
      name: 'form',
      component: FormView,
    },
    {
      path: '/alert',
      name: 'alert',
      component: AlertView,
    },
  ],
});

export default router;
