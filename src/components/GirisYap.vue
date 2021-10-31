<template>
  <div class="row">
    <div class="offset-md-3 col-md-6 mb-4">
      <div class="card">
        <div class="card-header">
          Giriş Yap
        </div>
        <div class="card-body">
          <div class="mb-3">
            Kayıtlı değilseniz kayıt olmak için
            <a href="javascript:void(0)" @click="$router.push('/kayit-ol')"
              >tıklayınız</a
            >.
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
      Eposta: "sistem@admin.com",
      Sifre: "543210",
    };
  },
  methods: {
    ...mapActions(["SetGirisYapmisKullanici"]),
    girisYap() {
      axios
        .get(
          "/Kullanici?Eposta=" + this.Eposta + "&Sifre=" + md5(this.Sifre)
        )
        .then((r) => {
          if (r.data.length > 0) {
            this.SetGirisYapmisKullanici(r.data[0]);
            this.$router.push("/");
          }
        });
    },
  },
};
</script>
