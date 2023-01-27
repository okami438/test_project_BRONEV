import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/views/login/login.vue";
import TheMainComponent from "@/views/app/TheMainComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: LoginPage,
    name: "login",
  },
  {
    path: "/",
    name: "home",
    component: TheMainComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !localStorage.token) next({ name: "login" });
  else next();
});

export default router;
