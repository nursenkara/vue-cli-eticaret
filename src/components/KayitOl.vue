<template>
  <div class="row">
    <div class="offset-md-3 col-md-6 mb-4">
      <div class="card">
        <div class="card-header">
          Kayıt Ol
        </div>
        <div class="card-body">
          <div class="input-group mb-3">
            <span class="input-group-text">
              Ad
            </span>
            <input type="text" class="form-control" v-model="kullanici.ad" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              Soyad
            </span>
            <input type="text" class="form-control" v-model="kullanici.soyad" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              E-Posta
            </span>
            <input
              type="text"
              class="form-control"
              v-model="kullanici.eposta"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              Şifre
            </span>
            <input
              type="password"
              class="form-control"
              v-model="kullanici.sifre"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              Şifre Tekrar
            </span>
            <input
              type="password"
              class="form-control"
              v-model="kullanici.sifreTekrar"
            />
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary float-end" @click="kayitOl()">
            Kayıt Ol
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      kullanici: {
        ad: "",
        soyad: "",
        eposta: "",
        sifre: "",
        sifreTekrar: ""
      },
    };
  },
  methods: {
    kayitOl() {
      if (this.sifre != this.sifreTekrar) {
        alert("Şifreler eşleşmiyor!");
      }
      axios.post("/kullanicilar/", this.kullanici).then(() => {
        console.log("OK");
      });
    },
  },
};
</script>
