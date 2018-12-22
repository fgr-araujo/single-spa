import VueRouter from 'vue-router'
import PlanetPage from './planet-page.vue'

const routes = [
  { path: '/planets', component: PlanetPage}
]

const router = new VueRouter({mode: 'history', routes})

export default router
