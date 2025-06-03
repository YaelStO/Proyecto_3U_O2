<template>
  <div id="app">
    <div class="container">

<!-- Barra de navegación fija en la parte superior -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-4">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Mi Sitio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegación">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">INICIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">MODELOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CARROS RECONSTRUIDOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/PartesAutos">PARTES DE AUTOS</a>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
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
/* Estilos opcionales */
</style>
