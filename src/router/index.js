import { createRouter, createWebHistory } from "vue-router";
import MultiplicationTableChecker from "@/components/MultiplicationTableChecker.vue";

const routes = [
  {
    path: "/",
    name: "multiplication table checker",
    component: MultiplicationTableChecker,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
