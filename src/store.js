import { createStore } from "vuex";
import router from "./router.js";
import ls from "./ls";
import toastr from "toastr";

toastr.options = {
  positionClass: "toast-top-center",
};

const store = createStore({
  state() {
    return {
      girisYapmisKullanici: ls("girisYapmisKullanici"),
      sepettekiUrunler: ls("sepettekiUrunler"),
    };
  },
  mutations: {
    SetGirisYapmisKullanici(state, payload) {
      state.girisYapmisKullanici = payload;
      ls("girisYapmisKullanici", state.girisYapmisKullanici);
    },
    SepeteEkle(state, payload) {
      const urun = payload;
      if (!Array.isArray(state.girisYapmisKullanici)) {
        let index = state.sepettekiUrunler.findIndex((i) => {
          return i.id == urun.id;
        });
        if (index > -1) {
          state.sepettekiUrunler[index].adet += 1;
        } else {
          urun.adet = 1;
          state.sepettekiUrunler.push(urun);
        }
        ls("sepettekiUrunler", state.sepettekiUrunler);
        toastr.success("Ürün sepete eklendi!");
      } else {
        toastr.warning(
          "Sepete ürün ekleyebilmek için önce giriş yapmanız gerekmektedir!"
        );
        router.push("/giris-yap");
      }
    },
    SepettenCikar(state, urun) {
      if (confirm("Ürünü sepetten çıkarmak istediğinizden emin misiniz?")) {
        let index = state.sepettekiUrunler.findIndex((i) => {
          return i.id == urun.id;
        });
        state.sepettekiUrunler.splice(index, 1);
        ls("sepettekiUrunler", state.sepettekiUrunler);
      }
    },
    SepettekiUrunSayisiniGuncelle(state) {
      state.sepettekiUrunler = ls("sepettekiUrunler");
    },
  },
  actions: {
    SetGirisYapmisKullanici({ commit }, payload) {
      commit("SetGirisYapmisKullanici", payload);
    },
    SepeteEkle({ commit }, payload) {
      commit("SepeteEkle", payload);
    },
    SepettenCikar({ commit }, payload) {
      commit("SepettenCikar", payload);
    },
  },
  getters: {
    GetGirisYapmisKullanici(state) {
      return Array.isArray(state.girisYapmisKullanici)
        ? 0
        : state.girisYapmisKullanici;
    },
    GetSepettekiUrunler(state) {
      return Array.isArray(state.girisYapmisKullanici)
        ? []
        : state.sepettekiUrunler;
    },
    GetSepettekiToplamUrunSayisi(state) {
      var toplam = 0;
      state.sepettekiUrunler.map((x) => (toplam += ("0" + x.adet) * 1));
      return Array.isArray(state.girisYapmisKullanici) ? 0 : toplam;
    },
  },
});

export default store;
