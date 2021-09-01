<template>
  <div>
    <div v-if="sepettekiUrunler.length < 1" class="text-center">
      Sepetinizde Hiç Ürün Yok!
    </div>
    <div v-if="sepettekiUrunler.length > 0" class="card mb-3">
      <div class="card-header">Sepet İçeriği</div>
      <div class="card-body p-0">
        <table class="table table-bordered m-0">
          <thead>
            <tr>
              <th>Ad</th>
              <th>Fiyat</th>
              <th>Adet</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="sepettekiUrunler.length > 0">
            <tr v-for="urun in sepettekiUrunler" :key="urun.id">
              <td>{{ urun.ad }}</td>
              <td>{{ urun.fiyat }}₺</td>
              <td>
                <input
                  class="form-control"
                  type="number"
                  v-model="urun.adet"
                  step="1"
                  min="1"
                />
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger btn-sm float-end"
                  @click="sepettenCikar(urun)"
                >
                  Sepetten Çıkar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
  watch: {
    sepettekiUrunler: {
      handler() {
        ls("sepettekiUrunler", this.sepettekiUrunler);
        this.emitter.emit("sepettekiUrunSayisiniGuncelle");
      },
      deep: true,
    },
  },
  created() {
    this.sepettekiUrunler = ls("sepettekiUrunler");
  },
};
</script>
