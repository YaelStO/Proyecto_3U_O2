import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Auto1 from '../Pages/Auto1.vue'
import Auto2 from '../Pages/Auto2.vue'
import Auto3 from '../Pages/Auto3.vue'
import Vehiculos from '../Pages/Vehiculos.vue'
import PartesAutos from '../Pages/PartesAutos.vue'
import DogeChaller from '../Pages/DogeChaller.vue'
import Shelby from '../Pages/Shelby.vue'
import Chebroletpikup from '../Pages/Chebroletpikup.vue'
import AtosHy from '../Pages/AtosHy.vue'
import Bocho from '../Pages/Bocho.vue'
import Partes from '../Pages/Partes.vue'
import Tsuru from '../Pages/Tsuru.vue'
import Chevy from '../Pages/Chevy.vue'
import Contacto from '../Pages/Contacto.vue'

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
    path: '/dogechaller',
    name: 'DogeChaller',
    component: DogeChaller
  },
  {
    path: '/auto3',
    name: 'Auto3',
    component: Auto3
  },
  {
    path: '/shelby',
    name: 'Shelby',
    component: Shelby
  },
  {
    path: '/chebroletpikup',
    name: 'Chebroletpikup',
    component: Chebroletpikup
  },
  {
    path: '/atoshy',
    name: 'AtosHy',
    component: AtosHy
  },
  {
    path: '/bocho',
    name: 'Bocho',
    component: Bocho
  },
  {
    path: '/partes',
    name: 'Partes',
    component: Partes
  },
    {
        path: '/tsuru',
        name: 'Tsuru',
        component: Tsuru
    },
    {
        path: '/chevy',
        name: 'Chevy',
        component: Chevy
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: Contacto

    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router