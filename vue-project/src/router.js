import { createRouter, createWebHistory } from "vue-router";

import App from "./root/App.vue"
import Counter from "./components/counter/counter.vue";
import Inputs from "./components/inputs/index.vue";
// import First from "./components//first.vue"
// import Second from "./components//second.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: "/app", component: App, alias: "/" },
    { path: "/counter", component: Counter, },
    { path: "/inputs", component: Inputs }
  ]
});

export default router