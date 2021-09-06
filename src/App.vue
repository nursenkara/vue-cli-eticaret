<template>
  <Baslik :kategoriler="kategoriler" />
  <div class="container min-vh-100">
    <div>
      <button @click="benimSayiEklem">arttir</button>
      {{ getListe }}
    </div>
    <router-view :key="$route.path"></router-view>
  </div>
  <Altlik :kategoriler="kategoriler" />
</template>

<script>
import Baslik from "./components/Baslik.vue";
import Altlik from "./components/Altlik.vue";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["getListe"]),
  },
  methods: {
    ...mapActions(["sayiEkle"]),
    benimSayiEklem() {
      this.sayiEkle(this.getListe.length + 1);
    },
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
