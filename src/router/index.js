import Vue from 'vue';
import VueRouter from 'vue-router';
import home from "../components/Home.vue";
import Personage from "../components/Home/Personage.vue";
Vue.use(VueRouter)

const routes = [{
    path: "/",
    component: home
  },
  {
    path: "/e",
    component: Personage
  },
]

const router = new VueRouter({
  routes
})

export default router