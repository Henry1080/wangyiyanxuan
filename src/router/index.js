import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../components/Home.vue"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:home
  }
]

const router = new VueRouter({
  routes
})

export default router