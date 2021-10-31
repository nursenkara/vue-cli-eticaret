<template>
  <div class="row" v-if="urunler.length > 0">
    <Urun :urun="urun" v-for="urun in urunler" :key="urun.UrunID" />
  </div>
  <div class="text-center fs-1 m-5 p-5" v-else>
    <span class="one">.</span>
    <span class="two">.</span>
    <span class="three">.</span>
  </div>
</template>

<script>
import axios from "axios";
import Urun from "./Urun";

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
        .get("/Urun")
        .then((response) => {
          this.urunler = response.data;
        })
        .catch(function(error) {
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

<style scoped>
.one {
  opacity: 0;
  -webkit-animation: dot 1.3s infinite;
  -webkit-animation-delay: 0s;
  animation: dot 1.3s infinite;
  animation-delay: 0s;
}

.two {
  opacity: 0;
  -webkit-animation: dot 1.3s infinite;
  -webkit-animation-delay: 0.2s;
  animation: dot 1.3s infinite;
  animation-delay: 0.2s;
}

.three {
  opacity: 0;
  -webkit-animation: dot 1.3s infinite;
  -webkit-animation-delay: 0.3s;
  animation: dot 1.3s infinite;
  animation-delay: 0.3s;
}

@-webkit-keyframes dot {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes dot {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
