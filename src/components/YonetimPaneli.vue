<template>
  <div>
    <h4 class="text-center">Kategori Ekle / Sil</h4>
    <KategoriEkleSil />
    <h4 class="text-center">Ürün Ekle / Sil</h4>
    <UrunEkleSil />
  </div>
</template>

<script>
import KategoriEkleSil from "./KategoriEkleSil";
import UrunEkleSil from "./UrunEkleSil";

export default {
  components: {
    KategoriEkleSil,
    UrunEkleSil,
  },
};
</script>
