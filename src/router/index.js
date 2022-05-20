import Vue from 'vue'
import VueRouter from 'vue-router'
import CreatePosts from "../views/CreatePosts";
import Posts from "../views/Posts";
import Test from "../views/Test";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/posts/index'
  },
  {
    path: '/posts/index',
    name: 'index',
    component: Posts
  },
  {
    path: '/posts/create',
    name: 'postsCreate',
    component: CreatePosts
  },
  {
    path: '/data',
    name: 'data',
    component: Test
  }
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
  routes
})

export default router
