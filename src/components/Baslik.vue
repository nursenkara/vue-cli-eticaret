<template>
  <header class="py-3 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
      >
        <span class="fs-4"> E-Ticaret Sitesi </span>
      </a>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input type="search" class="form-control" placeholder="Ara..." aria-label="Ara" />
      </form>
      <div class="text-end">
        <button type="button" class="btn btn-primary" @click="$router.push('/sepet')">
          Sepetim
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

        <li v-for="kategori in kategoriler" class="nav-item" :key="kategori.id">
          <a
            href="javascript:void(0)"
            @click="$router.push('/kategori' + kategori.slug)"
            class="nav-link link-dark px-2"
            >{{ kategori.ad }}</a
          >
        </li>
      </ul>
      <ul class="nav">
        <li class="nav-item">
          <a href="giris-yap" class="nav-link link-dark px-2">Giriş Yap</a>
        </li>
        <li class="nav-item">
          <a href="kayit-ol" class="nav-link link-dark px-2">Kayıt Ol</a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0);"
            @click="$router.push('/yonetim-paneli')"
            class="btn btn-primary px-2"
          >
            Yönetim Paneli
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["kategoriler"],
};
</script>
