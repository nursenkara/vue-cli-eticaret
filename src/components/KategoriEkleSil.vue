<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card mb-3">
        <div class="card-header">Kategoriler</div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>Ad</th>
                <th>Slug</th>
                <th class="float-end">İşlem</th>
              </tr>
            </thead>
            <tbody v-if="kategoriler.length > 0">
              <tr v-for="kategori in kategoriler" :key="kategori.id">
                <td>{{ kategori.ad }}</td>
                <td>{{ kategori.slug }}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm float-end"
                    @click="sil(kategori.id)"
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
        <div class="card-header">Kategori Ekle</div>
        <div class="card-body">
          <div class="input-group mb-3">
            <span class="input-group-text"> Ad </span>
            <input type="text" v-model="kategori.ad" class="form-control" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"> URL Yolu (Slug) </span>
            <span class="input-group-text"> / </span>
            <input type="text" v-model="kategori.slug" class="form-control" />
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

export default {
  data() {
    return {
      kategori: {
        ad: "",
        slug: "",
      },
      kategoriler: [],
    };
  },
  methods: {
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
    kaydet() {
      axios
        .post("/kategoriler", {
          ad: this.kategori.ad,
          slug: ("/" + this.kategori.slug).replace("//", "/"),
        })
        .then(() => {
          // console.log(response);
          this.kategori = {
            ad: "",
            slug: "",
          };
          this.kategorileriGetir();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    sil(id) {
      if (confirm("Silmek istediğinizden emin misiniz?"))
        axios
          .delete("/kategoriler/" + id)
          .then(() => {
            // console.log(response);
            this.kategorileriGetir();
          })
          .catch(function (error) {
            console.log(error);
          });
    },
  },
  created() {
    this.kategorileriGetir();
  },
};
</script>
