<template>
  <Baslik :kategoriler="kategoriler" />
  <div class="container">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import Baslik from "./components/Baslik.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Baslik,
  },
  data() {
    return {
      kategoriler: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/kategoriler")
      .then((response) => {
        this.kategoriler = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
