<template>
  <Baslik :kategoriler="kategoriler" />

  <hr />
  <Modal id="mdl">
    <button>xxx</button>
  </Modal>
  <button @click="a" class="m-3 btn btn-secondary">modal aç</button>
  <hr />

  <div class="container min-vh-100">
    <router-view :key="$route.path"></router-view>
  </div>
  <Altlik :kategoriler="kategoriler" />
</template>

<script>
import Baslik from "./components/Baslik.vue";
import Altlik from "./components/Altlik.vue";
import Modal from "./components/Modal.vue";
import axios from "axios";
import $ from "jquery/src/jquery";

export default {
  name: "App",
  components: {
    Baslik,
    Altlik,
    Modal,
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
  methods: {
    a() {
      $("#mdl").modal("show");
    },
  },
};
</script>
