<template>
  <Baslik :kategoriler="kategoriler" />
  <div class="container min-vh-100">
    <router-view :key="$route.path"></router-view>
  </div>
  <Altlik :kategoriler="kategoriler" />
</template>

<script>
import Baslik from "./components/Baslik.vue";
import Altlik from "./components/Altlik.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Baslik,
    Altlik,
  },
  data() {
    return {
      kategoriler: [],
    };
  },
  created() {
    axios
      .get("/kategoriler")
      .then((response) => {
        this.kategoriler = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};
</script>
