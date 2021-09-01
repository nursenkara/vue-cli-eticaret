import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import axios from 'axios'
import mitt from 'mitt'

axios.defaults.baseURL = 'https://json-server-db1.herokuapp.com'
const emitter = mitt()

const app = createApp(App)
app.use(router)
app.config.globalProperties.emitter = emitter
app.mount('#app')
