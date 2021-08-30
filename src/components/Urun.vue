<template>
  <div class="col-md-3 mb-3">
    <div class="card" @click="$router.push('/urun/' + urun.id)">
      <img :src="urun.resim" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">
          {{ urun.ad }}
        </h5>
        <p class="card-text">
          {{ urun.aciklama }}
        </p>
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
