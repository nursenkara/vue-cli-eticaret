<template>
  <div class="row">
    <div class="offset-md-3 col-md-6 mb-4">
      <div class="card">
        <div class="card-header">
          Giriş Yap
        </div>
        <div class="card-body">
          <div class="input-group mb-3">
            <span class="input-group-text">
              E-Posta
            </span>
            <input type="text" class="form-control" v-model="eposta" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              Şifre
            </span>
            <input type="password" class="form-control" v-model="sifre" />
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary float-end" @click="girisYap()">
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import md5 from "md5";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      eposta: "",
      sifre: "",
    };
  },
  methods: {
    ...mapActions(["SetGirisYapmisKullanici"]),
    girisYap() {
      axios
        .get(
          "/kullanicilar/?eposta=" + this.eposta + "&sifre=" + md5(this.sifre)
        )
        .then((r) => {
          if (r.data.length > 0) {
            this.SetGirisYapmisKullanici(r.data[0]);
            this.$router.push("/yonetim-paneli");
          }
        });
    },
  },
};
</script>
