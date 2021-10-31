<template>
  <header class="py-3 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <a
        href="#"
        @click="$router.push('/')"
        class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
      >
        <span class="fs-4"> E-Ticaret Sitesi </span>
      </a>
      <form
        class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
        @submit="$router.push('/ara/' + q)"
        onsubmit="return false"
      >
        <input
          type="search"
          class="form-control"
          placeholder="Ara..."
          aria-label="Ara"
          v-model="q"
        />
      </form>
      <div class="text-end">
        <button
          type="button"
          class="btn btn-primary position-relative"
          @click="$router.push('/sepet')"
        >
          Sepetim
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            v-text="GetSepettekiToplamUrunSayisi"
          >
          </span>
        </button>
      </div>
    </div>
  </header>
  <nav class="py-2 mb-4 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            @click="$router.push('/')"
            exact
            class="nav-link link-dark px-2"
          >
            Ana Sayfa
          </a>
        </li>

        <li v-for="kategori in kategoriler" class="nav-item" :key="kategori.KategoriID">
          <a
            href="javascript:void(0)"
            @click="$router.push('/kategori' + kategori.Slug)"
            class="nav-link link-dark px-2"
            >{{ kategori.Ad }}</a
          >
        </li>
      </ul>
      <ul class="nav">
        <li class="nav-item" v-if="!GetGirisYapmisKullanici">
          <a
            @click="$router.push('/giris-yap')"
            href="javascript:void(0);"
            class="nav-link link-dark px-2"
            >Giriş Yap</a
          >
        </li>
        <li class="nav-item" v-if="!GetGirisYapmisKullanici">
          <a
            @click="$router.push('/kayit-ol')"
            href="javascript:void(0);"
            class="nav-link link-dark px-2"
            >Kayıt Ol</a
          >
        </li>
        <li class="nav-item">
          <div class="btn-group" role="group" v-if="GetGirisYapmisKullanici">
            <button
              id="kullaniciDropdown"
              type="button"
              class="btn btn-primary dropdown-toggle position-relative"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ GetGirisYapmisKullanici.Ad }}
              {{ GetGirisYapmisKullanici.Soyad }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="kullaniciDropdown">
              <li v-if="GetGirisYapmisKullanici.Rol == 'admin'">
                <a
                  class="dropdown-item"
                  href="javascript:void(0);"
                  @click="$router.push('/yonetim-paneli')"
                  >Yönetim Paneli</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="javascript:void(0);"
                  @click="
                    SetGirisYapmisKullanici([]);
                    $router.push('/giris-yap');
                  "
                  >Çıkış Yap</a
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["kategoriler"],
  data() {
    return {
      q: "",
    };
  },
  methods: {
    ...mapActions(["SetGirisYapmisKullanici", "SepeteEkle"]),
  },
  computed: {
    ...mapGetters([
      "GetGirisYapmisKullanici",
      "GetSepettekiUrunler",
      "GetSepettekiToplamUrunSayisi",
    ]),
  },
};
</script>
