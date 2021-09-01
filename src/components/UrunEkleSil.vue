<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card mb-3">
        <div class="card-header">Ürünler</div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>Ad</th>
                <th>Fiyat</th>
                <th>Kategori</th>
                <th><div class="float-end">İşlem</div></th>
              </tr>
            </thead>
            <tbody v-if="urunler.length > 0">
              <tr v-for="urun in urunler" :key="urun.id">
                <td>{{ urun.ad }}</td>
                <td>{{ urun.fiyat }}₺</td>
                <td>{{ urunKategorisi(urun.kategoriId).ad }}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm float-end"
                    @click="sil(urun.id)"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card mb-3">
        <div class="card-header">Ürün Ekle</div>
        <div class="card-body">
          <div class="input-group mb-3">
            <span class="input-group-text"> Ad </span>
            <input type="text" v-model="urun.ad" class="form-control" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"> Açıklama </span>
            <input type="text" v-model="urun.aciklama" class="form-control" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"> Fiyat </span>
            <input type="number" step="0.01" v-model="urun.fiyat" class="form-control" />
            <span class="input-group-text"> ₺ </span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"> Kategori </span>
            <select v-model="urun.kategoriId" class="form-select">
              <option
                v-for="kategori in kategoriler"
                :key="kategori.id"
                :value="kategori.id"
              >
                {{ kategori.ad }}
              </option>
            </select>
          </div>
          <button type="button" class="btn btn-success float-end" @click="kaydet()">
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  data() {
    return {
      urun: {
        ad: "",
        fiyat: 0,
        resim: "https://picsum.photos/300/200",
        aciklama: "",
        kategoriId: null,
      },
      urunler: [],
      kategoriler: [],
    };
  },
  methods: {
    urunleriGetir() {
      axios
        .get("/urunler")
        .then((response) => {
          this.urunler = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    kategorileriGetir() {
      axios
        .get("/kategoriler")
        .then((response) => {
          this.kategoriler = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    urunKategorisi(kategoriId) {
      var ret = _.find(this.kategoriler, ["id", kategoriId]);
      if (!ret) ret = { ad: "" };
      return ret;
    },
    kaydet() {
      axios
        .post("/urunler", {
          ad: this.urun.ad,
          fiyat: this.urun.fiyat,
          resim: this.urun.resim,
          aciklama: this.urun.aciklama,
          kategoriId: this.urun.kategoriId,
        })
        .then(() => {
          // console.log(response);
          this.urun = {
            ad: "",
            fiyat: 0,
            resim: "https://picsum.photos/300/200",
            aciklama: "",
            kategoriId: null,
          };
          this.urunleriGetir();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    sil(id) {
      if (confirm("Silmek istediğinizden emin misiniz?"))
        axios
          .delete("/urunler/" + id)
          .then(() => {
            // console.log(response);
            this.urunleriGetir();
          })
          .catch(function (error) {
            console.log(error);
          });
    },
  },
  created() {
    this.urunleriGetir();
    this.kategorileriGetir();
  },
};
</script>
