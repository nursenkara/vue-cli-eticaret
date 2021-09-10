<template>
  <div v-if="GetGirisYapmisKullanici">
    <div class="row">
      <div class="col-md-6">
        <KategoriEkleSil />
      </div>
      <div class="col-md-6">
        <UrunEkleSil />
      </div>
    </div>
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
