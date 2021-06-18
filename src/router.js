import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { name: "home", path: "/", component: () => import('./components/Home.vue') },
  { name: "about", path: "/about", component: () => import('./components/About.vue')},
];

const router = new VueRouter({
  base: '/',
  mode: 'history', // real path
  routes, // short for `routes: routes`
});

/*
comment out these callback if you want to use `prompt`
*/
router.onReady(async() => {
  const { registerSW } = await import("virtual:pwa-register")
  registerSW({ immediate: true })
})

export default router;
