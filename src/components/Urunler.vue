<template>
  <div class="row" v-if="urunler.length > 0">
    <Urun :urun="urun" v-for="urun in urunler" :key="urun.id" />
  </div>
  <div class="text-center fs-1 m-5 p-5" v-else>
    . . .
  </div>
</template>

<script>
import Urun from "./Urun";
import axios from "axios";

export default {
  props: ["pUrunler"],
  components: {
    Urun,
  },
  data() {
    return {
      urunler: [],
    };
  },
  mounted() {
    if (this.pUrunler == undefined) {
      axios
        .get("/urunler")
        .then((response) => {
          this.urunler = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  watch: {
    pUrunler() {
      this.urunler = this.pUrunler;
    },
  },
};
</script>
