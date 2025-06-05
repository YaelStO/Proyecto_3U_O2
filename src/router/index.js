import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Auto1 from '../Pages/Auto1.vue'
import Auto2 from '../Pages/Auto2.vue'
import Auto3 from '../Pages/Auto3.vue'
import Vehiculos from '../Pages/Vehiculos.vue'
import PartesAutos from '../Pages/PartesAutos.vue'
import DogeChaller from '../Pages/DogeChaller.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auto1',
    name: 'Auto1',
    component: Auto1
  },
  {
    path: '/auto2',
    name: 'Auto2',
    component: Auto2
  },
  {
    path: '/vehiculos',
    name: 'Vehiculos',
    component: Vehiculos
  },
  {
    path: '/partes-autos',
    name: 'PartesAutos',
    component: PartesAutos
  },
  {
    path: '/doge-challer',
    name: 'DogeChaller',
    component: DogeChaller
  },
  {
    path: '/auto3',
    name: 'Auto3',
    component: Auto3
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router