<template>
  <div class="row">
    <Urun :urun="urun" v-for="urun in urunler" :key="urun.id" />
  </div>
</template>

<script>
import Urun from "./Urun";

export default {
  components: {
    Urun,
  },
  data() {
    return {
      urunler: [
        {
          id: 1,
          ad: "Elma",
          resim: "https://picsum.photos/300/200",
          aciklama:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nemo est repellendus? Odit architecto dolorum incidunt minima asperiores optio id.",
          kategori: 1,
        },
        {
          id: 2,
          ad: "Portakal",
          resim: "https://picsum.photos/300/200",
          aciklama:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nemo est repellendus? Odit architecto dolorum incidunt minima asperiores optio id.",
          kategori: 1,
        },
        {
          id: 3,
          ad: "Çilek",
          resim: "https://picsum.photos/300/200",
          aciklama:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nemo est repellendus? Odit architecto dolorum incidunt minima asperiores optio id.",
          kategori: 1,
        },
        {
          id: 4,
          ad: "Erik",
          resim: "https://picsum.photos/300/200",
          aciklama:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nemo est repellendus? Odit architecto dolorum incidunt minima asperiores optio id.",
          kategori: 1,
        },
      ],
    };
  },
};
</script>
