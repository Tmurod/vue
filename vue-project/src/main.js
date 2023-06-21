import "./index.scss"
import { createApp } from 'vue'
import router from "./router"

import App from './root/App.vue'

const app = createApp(App)
app.use(router)
app.mount("#app")