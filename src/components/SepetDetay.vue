<template>
  <div>
    <h4 class="text-center mb-3">Sepet İçeriği</h4>
    <div v-if="sepettekiUrunler.length < 1" class="text-center">Sepetinizde Hiç Ürün Yok!</div>
    <div v-if="sepettekiUrunler.length > 0">
      <ul class="list-group">
        <li class="list-group-item" v-for="urun in sepettekiUrunler" :key="urun.id">
          {{ urun.ad }}
          {{ urun.fiyat }}₺
          <button
            type="button"
            class="btn btn-danger btn-sm float-end"
            @click="sepettenCikar(urun)"
          >
            Sepetten Çıkar
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ls from "../ls";

export default {
  data() {
    return {
      sepettekiUrunler: [],
    };
  },
  methods: {
    sepettenCikar(urun) {
      let index = this.sepettekiUrunler.findIndex((i) => {
        return i.id == urun.id;
      });
      this.sepettekiUrunler.splice(index, 1);
      ls("sepettekiUrunler", this.sepettekiUrunler);
    },
  },
  created() {
    this.sepettekiUrunler = ls("sepettekiUrunler");
  },
};
</script>
