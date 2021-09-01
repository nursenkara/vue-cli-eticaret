import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://json-server-db1.herokuapp.com'

const app = createApp(App)
app.use(router)
app.mount('#app')
