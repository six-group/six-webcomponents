import AlertView from '@/views/AlertView.vue';
import DetailsView from '@/views/DetailsView.vue';
import DialogView from '@/views/DialogView.vue';
import FormView from '@/views/FormView.vue';
import HomeView from '@/views/HomeView.vue';
import TabGroupView from '@/views/TabGroupView.vue';
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
    {
      path: '/dialog',
      name: 'dialog',
      component: DialogView,
    },
    {
      path: '/details',
      name: 'details',
      component: DetailsView,
    },
    {
      path: '/tab-group',
      name: 'tab-group',
      component: TabGroupView,
    },
  ],
});

export default router;
