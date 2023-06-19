import "./index.scss"
import { createApp } from 'vue'
import router from "./router"
import { createRouter, createWebHistory } from "vue-router"

import App from './root/App.vue'
import Counter from "./components/counter/Counter.vue"
import Inputs from "./components/inputs/index.vue"

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     // { path: "/app", component: App },
//     { path: "/counter", component: Counter },
//     { path: "/inputs", component: Inputs }
//   ]
// });

const app = createApp(App)
app.use(router)
app.mount("#app")