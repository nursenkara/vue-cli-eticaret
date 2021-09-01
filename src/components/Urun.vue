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
          @click="sepeteEkle(urun.id)"
        >
          Sepete Ekle
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["urun"],
  methods: {
    sepeteEkle(urunId) {
      this.emitter.emit("sepeteEkle", urunId);
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
