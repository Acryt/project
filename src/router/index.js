import { createRouter, createWebHistory } from "vue-router";
import home from "../components/Home.vue";
import coreBody from "../components/CoreBody.vue";
// import config from '../config.json'

const routes = [
  {
    path: "/:id",
    name: "body",
    component: coreBody,
  },
  {
    path: "/",
    name: "home",
    component: home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
