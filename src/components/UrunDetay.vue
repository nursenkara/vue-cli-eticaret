<template>
  <div class="row">
    <div class="col-md-6">
      <img style="width: 100%" :src="urun.resim" />
    </div>
    <div class="col-md-6">
      <div class="card mb-3">
        <div class="card-header">Ürün Detayları</div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ urun.ad }}</li>
            <li class="list-group-item">{{ urun.aciklama }}</li>
            <li class="list-group-item">{{ urun.fiyat }}₺</li>
          </ul>
        </div>
        <div class="card-footer">
          <a
            href="javascript:void(0);"
            class="btn btn-primary float-end"
            @click="sepeteEkle()"
            >Sepete Ekle
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ls from "../ls";

export default {
  data() {
    return {
      urunId: this.$route.params.urunId,
      urun: {},
    };
  },
  methods: {
    sepeteEkle() {
      this.emitter.emit("sepeteEkle", this.urun);
      this.sepettekiUrunler = ls("sepettekiUrunler");
    },
  },
  created() {
    axios
      .get("/urunler/" + this.urunId)
      .then((response) => {
        this.urun = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
