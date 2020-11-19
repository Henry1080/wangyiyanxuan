import Vue from 'vue';
import VueRouter from 'vue-router';
import home from "../components/Home.vue";
import Personage from "../components/Home/Personage.vue";
import Login from "../components/Home/Login.vue";
import Logind from "../components/Home/Logind.vue";
import Carts from "../components/Home/Carts";
import GoodsD from "../components/Home/GoodsD.vue"
import Personal from "../components/Home/Personal";
import Search from "../components/Home/Search"

Vue.use(VueRouter)

const routes = [
  // {
  //   children:[
  //     { path: '/Personage/:id', component: Personage},
  //     { path: '/First/:id', component: First},
  //     { path: '/Carts/:id', component: Carts},
  //     { path: '/Sorts/:id', component: Sorts},
  //     { path: '/GoodsD/:id', component: GoodsD},
  //     { path: '/Personal/:id', component: Personal},
  //   ]
  // },
  {
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
  },
  {
    path: "/Personal",
    component: Personal
  },
  {
    path: "/Search",
    component: Search
  },
]

const router = new VueRouter({
  routes
})

export default router