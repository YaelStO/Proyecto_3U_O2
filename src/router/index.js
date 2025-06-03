import { createRouter, createWebHashHistory } from "vue-router";

// Agregando Paginas de la app

import Home from "../Pages/Home.vue";
import PartesAutos from "../Pages/PartesAutos.vue";


const routes =[
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/PartesAutos",
        name: "PartesAutos",
        component: PartesAutos,
        
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.BASE_URL),
    routes,
});

export default router;