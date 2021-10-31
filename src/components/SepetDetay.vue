<template>
  <div>
    <div v-if="GetSepettekiUrunler.length < 1" class="text-center">
      Sepetinizde hiç ürün yok!
    </div>
    <div v-if="GetSepettekiUrunler.length > 0" class="card mb-3">
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
          <tbody v-if="GetSepettekiUrunler.length > 0">
            <tr v-for="urun in GetSepettekiUrunler" :key="urun.UrunID">
              <td>{{ urun.Ad }}</td>
              <td>{{ urun.Fiyat }}₺</td>
              <td>
                <input
                  class="form-control"
                  type="number"
                  v-model="urun.Adet"
                  step="1"
                  min="1"
                />
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger btn-sm float-end"
                  @click="SepettenCikar(urun)"
                >
                  Sepetten Çıkar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button
      v-if="GetSepettekiUrunler.length > 0"
      class="btn btn-success w-100"
      @click="$router.push('/alisverisi-tamamla')"
    >
      Alışverişi Tamamla
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["SepettenCikar"]),
  },
  computed: {
    ...mapGetters(["GetSepettekiUrunler"]),
  },
};
</script>
