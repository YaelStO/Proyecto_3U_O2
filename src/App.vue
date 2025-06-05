<template>
  <div id="app">
    <!-- Barra de navegación fija -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Mi Sitio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegación">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <!-- En App.vue -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">INICIO</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/vehiculos">CARROS RECONSTRUIDOS</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/partes-autos">PARTES DE AUTOS</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Contenedor principal con espacio superior -->
    <div class="container mt-5 pt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
/* Eliminado el estilo body que debe estar en el archivo principal */
</style>