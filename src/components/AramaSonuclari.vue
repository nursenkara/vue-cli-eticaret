<template>
  <div>
    <Urunler :pUrunler="filtreliUrunler" />
  </div>
</template>

<script>
import Urunler from "./Urunler";
import axios from "axios";

export default {
  components: {
    Urunler,
  },
  data() {
    return {
      urunler: [],
      q: this.$route.params.q,
    };
  },
  created() {
    axios
      .get("/urunler")
      .then((response) => {
        this.urunler = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  computed: {
    filtreliUrunler() {
      var that = this;
      return that.urunler
        .filter(function(i) {
          var t = i.ad.trim().normalize("NFC").turkishToLower();
          var f = that.q.trim().normalize("NFC").turkishToLower();
          if (f == "") {
            return true;
          }
          return t.indexOf(f) !== -1;
        })
        .sort(function(a, b) {
          if (a.ad > b.ad) {
            return 1;
          }
          if (b.ad > a.ad) {
            return -1;
          }
          return 0;
        });
    },
  },
};

String.prototype.turkishToUpper = function() {
  var string = this;
  var letters = {
    i: "İ",
    ş: "Ş",
    ğ: "Ğ",
    ü: "Ü",
    ö: "Ö",
    ç: "Ç",
    ı: "I",
  };
  string = string.replace(/(([iışğüçö]))+/g, function(letter) {
    return letters[letter];
  });
  return string.toUpperCase();
};

String.prototype.turkishToLower = function() {
  var string = this;
  var letters = {
    İ: "i",
    I: "ı",
    Ş: "ş",
    Ğ: "ğ",
    Ü: "ü",
    Ö: "ö",
    Ç: "ç",
  };
  string = string.replace(/(([İIŞĞÜÇÖ]))+/g, function(letter) {
    return letters[letter];
  });
  return string.toLowerCase();
};
</script>
