import VueRouter from 'vue-router'
import PlanetPage from './planet-page.vue'

const routes = [
  {
    path: '/planets/:id',
    alias: '/planets',
    component: PlanetPage,
    children: [
      // {path: ':id', component: }
      // {path: 'nested1', component: Nest1}
    ]
  },
  // { path: '/planets/nest1', component: Nest1},
  // { path: '/planets/nest2', component: Nest2},
]

const router = new VueRouter({mode: 'history', routes})

export default router
