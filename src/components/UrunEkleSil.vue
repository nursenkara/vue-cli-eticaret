<template>
  <div class="card mb-3">
    <div class="card-header">
      Ürünler
      <Modal id="modalUrunEkle" title="Ürün Ekle" ref="modalUrunEkle">
        <template v-slot:body>
          <!-- -->
          <div class="input-group mb-3">
            <span class="input-group-text"> Ad </span>
            <input type="text" v-model="urun.Ad" class="form-control" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"> Açıklama </span>
            <input type="text" v-model="urun.Aciklama" class="form-control" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"> Fiyat </span>
            <input
              type="number"
              step="0.01"
              v-model="urun.Fiyat"
              class="form-control"
            />
            <span class="input-group-text"> ₺ </span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"> Kategori </span>
            <select v-model="urun.KategoriID" class="form-select">
              <option
                v-for="kategori in kategoriler"
                :key="kategori.KategoriID"
                :value="kategori.KategoriID"
              >
                {{ kategori.Ad }}
              </option>
            </select>
          </div>
          <!-- -->
        </template>
        <template v-slot:footer>
          <button
            type="button"
            class="btn btn-success float-end"
            @click="
              kaydet();
              $refs.modalUrunEkle.Kapat();
            "
          >
            Kaydet
          </button>
        </template>
      </Modal>
      <button
        @click="$refs.modalUrunEkle.Ac"
        class="btn btn-primary btn-sm float-end"
      >
        Ürün Ekle
      </button>
    </div>
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
          <tr v-for="urun in urunler" :key="urun.UrunID">
            <td>{{ urun.Ad }}</td>
            <td>{{ urun.Fiyat }}₺</td>
            <td>{{ urunKategorisi(urun.KategoriID).Ad }}</td>
            <td>
              <button
                type="button"
                class="btn btn-danger btn-sm float-end"
                @click="sil(urun.UrunID)"
              >
                Sil
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";
import Modal from "./Modal";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      urun: {
        Ad: "",
        Fiyat: 0,
        Resim: "https://picsum.photos/300/200?random=" + new Date() * 1,
        Aciklama: "",
        KategoriID: null,
      },
      urunler: [],
      kategoriler: [],
    };
  },
  methods: {
    urunleriGetir() {
      axios
        .get("/Urun")
        .then((response) => {
          this.urunler = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    kategorileriGetir() {
      axios
        .get("/Kategori")
        .then((response) => {
          this.kategoriler = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    urunKategorisi(KategoriID) {
      var ret = _.find(this.kategoriler, ["KategoriID", KategoriID]);
      if (!ret) ret = { Ad: "" };
      return ret;
    },
    kaydet() {
      axios
        .post("/Urun", {
          Ad: this.urun.Ad,
          Fiyat: this.urun.Fiyat,
          Resim: this.urun.Resim,
          Aciklama: this.urun.Aciklama,
          KategoriID: this.urun.KategoriID,
        })
        .then(() => {
          // console.log(response);
          this.urun = {
            Ad: "",
            Fiyat: 0,
            Resim: "https://picsum.photos/300/200?random=" + new Date() * 1,
            Aciklama: "",
            KategoriID: null,
          };
          this.urunleriGetir();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    sil(id) {
      if (confirm("Silmek istediğinizden emin misiniz?"))
        axios
          .delete("/Urun/" + id)
          .then(() => {
            // console.log(response);
            this.urunleriGetir();
          })
          .catch(function(error) {
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
