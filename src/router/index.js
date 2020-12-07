import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ViewDetails from '../components/ViewDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/view/:id',
        name: 'View',
        component: ViewDetails
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
 
  }
]

const router = new VueRouter({
  routes
})

export default router
