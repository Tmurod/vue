import { createRouter, createWebHistory } from "vue-router";

import Counter from "./components/counter/counter.vue";
import Inputs from "./components/inputs/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/counter", component: Counter, },
    { path: "/inputs", component: Inputs }
  ]
});

export default router