import {createRouter,createWebHashHistory} from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import App from '../views/App.vue';
import AppConfig from '../views/AppConfig.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path:'/app',
    name:'App',
    component:App,
  },
  {
    path:'/app/config',
    name:'AppConfig',
    component:AppConfig
  }
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
