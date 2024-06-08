import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'compo', name:'compo', component: () => import('pages/Compo-Form.vue') },
      { path: 'home',name:'home', component: () => import('pages/IndexPage.vue') },
      { path: 'mascotas',name:'mascotas', component: () => import('pages/Masocotas.vue') },

    
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
