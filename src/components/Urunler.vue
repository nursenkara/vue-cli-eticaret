<template>
  <div class="row">
    <Urun :urun="urun" v-for="urun in urunler" :key="urun.id" />
  </div>
</template>

<script>
import Urun from "./Urun";
import axios from "axios";

export default {
  components: {
    Urun,
  },
  data() {
    return {
      urunler: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/urunler")
      .then((response) => {
        this.urunler = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
