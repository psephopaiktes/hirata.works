import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/works',
      component: () => import('./views/Works.vue'),
    },
    {
      path: '*',
      component: () => import('./views/404.vue'),
    },
  ],
});
