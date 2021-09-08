import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      girisYapmisKullanici: null,
    };
  },
  mutations: {
    SetGirisYapmisKullanici(state, payload) {
      state.girisYapmisKullanici = payload;
    },
  },
  actions: {
    SetGirisYapmisKullanici({ commit }, payload) {
      commit("SetGirisYapmisKullanici", payload);
    },
  },
  getters: {
    GetGirisYapmisKullanici(state) {
      return state.girisYapmisKullanici;
    },
  },
});

export default store;
