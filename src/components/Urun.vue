<template>
  <div class="col-md-3 mb-3">
    <div class="card">
      <img
        :src="urun.resim"
        class="card-img-top"
        @click="$router.push('/urun/' + urun.id)"
      />
      <div class="card-body">
        <h5 class="card-title" @click="$router.push('/urun/' + urun.id)">
          {{ urun.ad }}
        </h5>
        <div class="card-text" @click="$router.push('/urun/' + urun.id)">
          {{ urun.aciklama }}
        </div>
      </div>
      <div class="card-footer">
        <span class="align-bottom" @click="$router.push('/urun/' + urun.id)"
          >{{ urun.fiyat }}₺</span
        >
        <a
          href="javascript:void(0);"
          class="btn btn-primary btn-sm float-end"
          @click="SepeteEkle(urun)"
          >Sepete Ekle
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["urun"],
  computed: {
    ...mapGetters(["GetGirisYapmisKullanici", "GetSepettekiUrunler"]),
  },
  methods: {
    ...mapActions(["SepeteEkle"]),
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
