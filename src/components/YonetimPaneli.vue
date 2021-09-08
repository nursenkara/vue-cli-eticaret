<template>
  <div v-if="GetGirisYapmisKullanici">
    <h4 class="text-center">Kategori Ekle / Sil</h4>
    <KategoriEkleSil />
    <h4 class="text-center">Ürün Ekle / Sil</h4>
    <UrunEkleSil />
  </div>
  <div v-else class="text-center">
    <div>
      Yönetim panelini sadece yöneticiler görebilir!
    </div>
    <div>
      Giriş yapmak için
      <a href="javascript:void(0)" @click="$router.push('/giris-yap')"
        >tıklayınız</a
      >.
    </div>
  </div>
</template>

<script>
import KategoriEkleSil from "./KategoriEkleSil";
import UrunEkleSil from "./UrunEkleSil";
import { mapGetters } from "vuex";

export default {
  components: {
    KategoriEkleSil,
    UrunEkleSil,
  },
  computed: {
    ...mapGetters(["GetGirisYapmisKullanici"]),
  },
};
</script>
