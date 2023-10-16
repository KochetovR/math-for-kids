import { createRouter, createWebHistory } from "vue-router";
import MathCheck from "@/components/MathCheck.vue";

const routes = [
  {
    path: "/",
    name: "multiplication table checker",
    component: MathCheck,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
