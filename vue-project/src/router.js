import { createRouter, createWebHistory } from "vue-router";
import Inputs from "./components/inputs/index.vue";
import Counter from "./components/inputs/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/inputs", component: Inputs, },
    { path: "/counter", component: Counter }
  ]
});

export default router