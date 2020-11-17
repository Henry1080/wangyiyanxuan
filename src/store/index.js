import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isexist: true,
    isshow: true,
  },
  mutations: {
    deltopbar(state) {
      state.isexist = false;
    },
    fun1(state) {
      if (state.isexist == true) {
        window.addEventListener("scroll", function (e) {
          // console.log(e);
          if (e.target.scrollTop > 0) {
            state.isshow = false;
          }else if (e.target.scrollTop == 0) {
            state.isshow = true;
          }
        }, true);
      }else if(state.isexist == false){
        state.isshow = false;
      }
    },
  },
  actions: {

  },
});
export default store;