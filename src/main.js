import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import axios from "axios";
import mitt from "mitt";
import "toastr/build/toastr.min.css";
import store from "./store";

axios.defaults.baseURL = "https://json-server-db1.herokuapp.com";
const emitter = mitt();

const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.emitter = emitter;
app.mount("#app");
