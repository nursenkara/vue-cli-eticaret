<template>
  <Baslik :kategoriler="kategoriler" />
  <div class="container">
    <div class="row">
      <Urun :urun="urun" v-for="urun in urunler" :key="urun.id" />
    </div>
  </div>
</template>

<script>
import Baslik from "./components/Baslik.vue";
import Urun from "./components/Urun.vue";

export default {
  name: "App",
  components: {
    Baslik,
    Urun,
  },
  data() {
    return {
      urunler: [
        {
          id: 1,
          ad: "Elma",
          resim: "https://picsum.photos/300/200",
          aciklama: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nemo est repellendus? Odit architecto dolorum incidunt minima asperiores optio id.",
          kategori: 1,
        },
        {
          id: 2,
          ad: "Portakal",
          resim: "https://picsum.photos/300/200",
          aciklama: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nemo est repellendus? Odit architecto dolorum incidunt minima asperiores optio id.",
          kategori: 1,
        },
        {
          id: 3,
          ad: "Çilek",
          resim: "https://picsum.photos/300/200",
          aciklama: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nemo est repellendus? Odit architecto dolorum incidunt minima asperiores optio id.",
          kategori: 1,
        },
        {
          id: 4,
          ad: "Erik",
          resim: "https://picsum.photos/300/200",
          aciklama: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nemo est repellendus? Odit architecto dolorum incidunt minima asperiores optio id.",
          kategori: 1,
        },
      ],
      kategoriler: [
        { id: 1, ad: "Araba", link: "/kategori/araba" },
        { id: 2, ad: "Elektronik", link: "/kategori/elektronik" },
        { id: 3, ad: "Ayakkabı", link: "/kategori/ayakkabi" },
        { id: 4, ad: "Kozmetik", link: "/kategori/kozmetik" },
        { id: 5, ad: "Erkek", link: "/kategori/erkek" },
        { id: 6, ad: "Kadın", link: "/kategori/kadin" },
      ],
    };
  },
};
</script>
