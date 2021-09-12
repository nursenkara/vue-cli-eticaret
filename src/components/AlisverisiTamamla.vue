<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    alisverisiTamamla() {
      alert("Alışveriş tamamlandı!");
    },
  },
  computed: {
    ...mapGetters(["GetSepettekiUrunler", "GetSepettekiToplamUrunSayisi"]),
    toplamFiyat() {
      let ret = 0;
      for (let i in this.GetSepettekiUrunler) {
        ret +=
          this.GetSepettekiUrunler[i].adet * this.GetSepettekiUrunler[i].fiyat;
      }
      return ret;
    },
  },
};
</script>

<template>
  <div class="mb-5">
    <div class="text-center">
      <h2>Alışverişi Tamamla</h2>
      <p class="lead">
        Alışverişinizi tamamlamak için aşağıdaki formu doldurun.
      </p>
    </div>
    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Sepetim</span>
          <span class="badge bg-primary rounded-pill">{{
            GetSepettekiToplamUrunSayisi
          }}</span>
        </h4>
        <ul class="list-group mb-3" v-if="GetSepettekiUrunler.length > 0">
          <li
            class="list-group-item d-flex justify-content-between lh-sm"
            v-for="urun in GetSepettekiUrunler"
            :key="urun.id"
          >
            <div>
              <div class="my-0">{{ urun.ad }}</div>
              <small class="text-muted">{{ urun.adet }} adet</small>
            </div>
            <span class="text-muted">{{ urun.fiyat }}₺</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <h6 class="my-0">Toplam</h6>
            <strong>{{ toplamFiyat }}₺</strong>
          </li>
        </ul>
        <div v-if="GetSepettekiUrunler.length < 1" class="text-center">
          Sepetinizde hiç ürün yok!
        </div>
      </div>
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Bilgilerim</h4>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Ad</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                value=""
                required
              />
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Soyad</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                value=""
                required
              />
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Adres</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Kütahya"
                required
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label"
                >Adres 2 <span class="text-muted">(Optional)</span></label
              >
              <input
                type="text"
                class="form-control"
                id="address2"
                placeholder="İzmir"
              />
            </div>

            <div class="col-md-5">
              <label for="il" class="form-label">İl</label>
              <select class="form-select" id="il" required>
                <option value="">Seçin...</option>
                <option>Kütahya</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid il.
              </div>
            </div>

            <div class="col-md-4">
              <label for="ilce" class="form-label">İlçe</label>
              <select class="form-select" id="ilce" required>
                <option value="">Seçin...</option>
                <option>Merkez</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid ilçe.
              </div>
            </div>

            <div class="col-md-3">
              <label for="postaKodu" class="form-label">Posta Kodu</label>
              <input
                type="text"
                class="form-control"
                id="postaKodu"
                placeholder=""
                required
              />
              <div class="invalid-feedback">
                postaKodu code required.
              </div>
            </div>
          </div>

          <hr class="my-4" />

          <h4 class="mb-3">Kart Bilgilerim</h4>

          <div class="my-3">
            <div class="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                class="form-check-input"
                checked
                required
              />
              <label class="form-check-label" for="credit">Kredi Kartı</label>
            </div>
            <div class="form-check">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                class="form-check-input"
                required
              />
              <label class="form-check-label" for="debit">Banka Kartı</label>
            </div>
            <div class="form-check">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                class="form-check-input"
                required
              />
              <label class="form-check-label" for="paypal">Kapıda Ödeme</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label"
                >Kart Üzerindeki İsim</label
              >
              <input
                type="text"
                class="form-control"
                id="cc-name"
                placeholder=""
                required
              />
              <small class="text-muted"
                >Kartınızın üzerindeki tam görünen isimdir</small
              >
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Kart Numarası</label>
              <input
                type="text"
                class="form-control"
                id="cc-number"
                placeholder=""
                required
              />
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label"
                >Son Kullanma Tarihi</label
              >
              <input
                type="text"
                class="form-control"
                id="cc-expiration"
                placeholder=""
                required
              />
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input
                type="text"
                class="form-control"
                id="cc-cvv"
                placeholder=""
                required
              />
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4" />

          <button
            class="w-100 btn btn-primary btn-lg"
            type="button"
            @click="alisverisiTamamla()"
          >
            Alışverişi Tamamla
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
