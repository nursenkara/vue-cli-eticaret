<template>
  <div class="col-md-3 mb-3">
    <div class="card" @click="$router.push('/urun/' + urun.id)">
      <img :src="urun.resim" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">
          {{ urun.ad }}
        </h5>
        <div class="card-text">
          <div>{{ urun.fiyat }}₺</div>
          <div>{{ urun.aciklama }}</div>
        </div>
        <a href="#" class="btn btn-primary">Sepete Ekle</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["urun"],
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
