import VueRouter from 'vue-router'
import RootComponent from './root.vue'

const routes = [
  { path: '/planets', component: RootComponent}
]

const router = new VueRouter({routes})

export default router
