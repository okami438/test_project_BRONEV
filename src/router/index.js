import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/views/login/login.vue";
import TheMainComponent from "@/views/app/TheMainComponent.vue";
import SalesComponent from "@/views/sales/Sales.vue";
import TheRoadsComponent from "@/views/roads/TheRoadsComponent.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "main",
    component: TheMainComponent,
    children: [
      {
        path: "/sales",
        component: SalesComponent,
        name: "sales",
      },
      {
        path: "/roads",
        component: TheRoadsComponent,
        name: "roads",
      },
    ]
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
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
