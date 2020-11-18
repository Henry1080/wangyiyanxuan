import Vue from 'vue';
import VueRouter from 'vue-router';
import home from "../components/Home.vue";
import Personage from "../components/Home/Personage.vue";
import Login from "../components/Home/Login.vue";
import Logind from "../components/Home/Logind.vue";
import Carts from "../components/Home/Carts";
import GoodsD from "../components/Home/GoodsD.vue"
Vue.use(VueRouter)

const routes = [{
    path: "/",
    component: home
  },
  {
    path: "/e",
    component: Personage 
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
  }
]

const router = new VueRouter({
  routes
})

export default router