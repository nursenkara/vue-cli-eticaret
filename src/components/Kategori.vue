<template>
  <div>
    <Urunler :pUrunler="urunler" />
  </div>
</template>

<script>
import Urunler from "./Urunler";
import axios from "axios";
import _ from "lodash";

export default {
  components: {
    Urunler,
  },
  data() {
    return {
      urunler: [],
      kategoriSlug: this.$route.params.slug,
    };
  },
  created() {
    axios
      .get("/kategoriler")
      .then((response) => {
        var kategoriler = response.data;

        var kategori = _.find(kategoriler, ["slug", "/" + this.kategoriSlug]);
        if (typeof kategori == "object") {
          var kategoriId = kategori.id;
          /* Kategori ID'den ürünleri getir */
          axios
            .get("/urunler?kategoriId=" + kategoriId)
            .then((response2) => {
              this.urunler = response2.data;
            })
            .catch(function (error) {
              console.log(error);
            });
          /**/
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
