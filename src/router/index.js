import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/who",
    name: "Who",
    component: () => import("../page/WhoPage.vue"),
  },
  {
    paht: "/",
    name: "Intro",
    component: () => import("../page/IntroPage.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
