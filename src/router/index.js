import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/home/index.vue";
import SignIn from "@/components/user/signin.vue";
import Dashboard from "@/components/user/dashboard/index.vue";
import Logout from "@/components/user/logout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/user/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/user/logout",
      name: "logout",
      component: Logout,
    },
  ],
});

export default router;
