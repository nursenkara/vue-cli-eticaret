<template>
  <div class="row">
    <div class="offset-md-3 col-md-6 mb-4">
      <div class="card">
        <div class="card-header">
          Kayıt Ol
        </div>
        <div class="card-body" v-if="kayitBasarili">
          <div>Başarıyla kaydoldunuz!</div>
          <div>
            Giriş yapmak için
            <a href="javascript:void(0)" @click="$router.push('/giris-yap')"
              >tıklayınız</a
            >.
          </div>
        </div>
        <div class="card-body" v-if="!kayitBasarili">
          <div class="input-group mb-3">
            <span class="input-group-text">
              Ad
            </span>
            <input type="text" class="form-control" v-model="Ad" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              Soyad
            </span>
            <input type="text" class="form-control" v-model="Soyad" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              E-Posta
            </span>
            <input type="text" class="form-control" v-model="Eposta" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              Şifre
            </span>
            <input type="password" class="form-control" v-model="Sifre" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              Şifre Tekrar
            </span>
            <input type="password" class="form-control" v-model="SifreTekrar" />
          </div>
        </div>
        <div class="card-footer" v-if="!kayitBasarili">
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
import md5 from "md5";

export default {
  data() {
    return {
      kayitBasarili: false,
      Ad: "",
      soyAd: "",
      Eposta: "",
      Sifre: "",
      SifreTekrar: "",
    };
  },
  methods: {
    kayitOl() {
      if (this.Sifre != this.SifreTekrar) {
        alert("Şifreler eşleşmiyor!");
        return;
      }
      axios
        .post("/Kullanici", {
          Ad: this.Ad,
          soyAd: this.Soyad,
          Eposta: this.Eposta,
          Sifre: md5(this.Sifre),
        })
        .then(() => {
          this.kayitBasarili = true;
        });
    },
  },
};
</script>
