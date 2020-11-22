import Vue from 'vue';
import VueRouter from 'vue-router';
import home from "../components/Home.vue";
import Login from "../components/Home/Login.vue";
import Logind from "../components/Home/Logind.vue";
import Carts from "../components/Home/Carts";
import GoodsD from "../components/Home/GoodsD.vue"
import Search from "../components/Home/Search"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    component: home,
    meta: {
      keepalive: true // 组件是否需要被保存
    }
  },
  {
    path: "/Login",
    component: Login
  },
  {
    path: "/Logind",
    component: Logind
  },
  {
    path: "/Carts",
    component: Carts
  },
  {
    path: "/GoodsD",
    component: GoodsD
  },
  {
    path: "/Search",
    component: Search
  },
]

const router = new VueRouter({
  routes,
})

export default router