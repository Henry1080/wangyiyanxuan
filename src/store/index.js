import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isexist: true,
    isshow: true,
    cartlist: [],
    bottomButton: true,
    isdenglu: false, // 是否登陆
    componentName: 'first',
    isactive3: true,
    cartnumber: 0,    //购物车数量
    total: 0,         //总价 
  },
  mutations: {
    deltopbar(state) {
      state.isexist = false;
    },
    btnClick(state, item) {
      state.componentName = item;
    },
    fun1(state) {
      if (state.isexist == true) {
        window.addEventListener("scroll", function (e) {
          if (e.target.scrollTop > 0) {
            state.isshow = false;
          } else if (e.target.scrollTop == 0) {
            state.isshow = true;
          }
        }, true);
      } else if (state.isexist == false) {
        state.isshow = false;
      }
    },
    addthing(state) {
      let index = -1;
      for (let a = 0; a < state.cartlist.length; a++) {
        if (state.cartlist[a].name === "2020新果上市，南非碧根果仁 150克") {
          index = a
        }
      }
      if (index > -1) {
        state.cartlist[0].number++
      } else {
        state.cartlist.push({
          name: "2020新果上市，南非碧根果仁 150克",
          price: 46,
          img: "https://yanxuan-item.nosdn.127.net/5aad81bd22e540dae6b6f34770692c04.png?type=webp&imageView&thumbnail=160x0&quality=75",
          weight: "150克",
          number: 1,
        })
      };
      state.total = (state.cartlist[0].number) * (state.cartlist[0].price);
    },
    // 加
    increase(state) {
      state.cartlist[0].number++;
      state.cartnumber++;
      state.total = (state.cartlist[0].number) * (state.cartlist[0].price);
    },
    // 减
    reduce(state) {
      if (state.cartlist[0].number > 1) {
        state.cartlist[0].number--;
        state.cartnumber--;
        state.total = (state.cartlist[0].number) * (state.cartlist[0].price);
      }
    },
  },
});
export default store;