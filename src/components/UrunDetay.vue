<template>
  <div class="row">
    <div class="col-md-6">
      <img style="width: 100%" :src="urun.resim" />
    </div>
    <div class="col-md-6">
      <h4>Ürün Detayları</h4>
      <ul class="list-group">
        <li class="list-group-item">Ürün ID: {{ urunId }}</li>
        <li class="list-group-item">Ürün Adı: {{ urun.ad }}</li>
        <li class="list-group-item">Ürün Fiyatı: {{ urun.fiyat }}</li>
        <li class="list-group-item">Ürün Açıklama: {{ urun.aciklama }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      urunId: this.$route.params.urunId,
      urun: {}
    };
  },
  created() {
    axios
      .get("http://localhost:3000/urunler/" + this.urunId)
      .then((response) => {
        this.urun = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
