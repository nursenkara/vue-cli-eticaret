<template>
  <Baslik :kategoriler="kategoriler" />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Baslik from "./components/Baslik.vue";

export default {
  name: "App",
  components: {
    Baslik,
  },
  data() {
    return {
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
