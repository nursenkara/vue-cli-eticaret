<template>
  <div class="row">
    urunler: {{urunler}}
    <hr>
    pUrunler: {{pUrunler}}
    <Urun :urun="urun" v-for="urun in urunler" :key="urun.id" />
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
      urunler: this.pUrunler || [],
    };
  },
  created() {
    if (this.pUrunler.length < 1) {
      axios
        .get("http://localhost:3000/urunler")
        .then((response) => {
          this.urunler = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
};
</script>
