import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      liste: [1, 2, 3, 4],
    };
  },
  mutations: {
    sayiEkle(state, payload) {
      state.liste.push(payload);
    },
  },
  actions: {
    sayiEkle({ commit }, payload) {
      commit("sayiEkle", payload);
    },
  },
  getters: {
    getListe(state) {
      return state.liste;
    },
  },
});

export default store;
