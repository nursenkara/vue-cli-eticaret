<template>
  <div class="row">
    <div class="col-md-6">
      <img style="width: 100%" :src="urun.Resim" />
    </div>
    <div class="col-md-6">
      <div class="card mb-3">
        <div class="card-header">Ürün Detayları</div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ urun.Ad }}</li>
            <li class="list-group-item">{{ urun.Aciklama }}</li>
            <li class="list-group-item">{{ urun.Fiyat }}₺</li>
          </ul>
        </div>
        <div class="card-footer">
          <a
            href="javascript:void(0);"
            class="btn btn-primary float-end"
            @click="SepeteEkle(urun)"
            >Sepete Ekle
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      urunId: this.$route.params.urunId,
      urun: {},
    };
  },
  computed: {
    ...mapGetters(["GetGirisYapmisKullanici"]),
  },
  methods: {
    ...mapActions(["SepeteEkle"]),
  },
  created() {
    axios
      .get("/Urun/" + this.urunId)
      .then((response) => {
        this.urun = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
