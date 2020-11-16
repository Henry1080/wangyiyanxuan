import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isexist: true,
  },
  mutations: {
    deltopbar(state) {
      state.isexist = false;
    },
  },
  actions: {

  },
});
export default store;