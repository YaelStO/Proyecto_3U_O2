<script setup>
</script>

<template>
  <!-- Carrusel -->
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card mt-4 mb-1">
        <div class="card-body text-center">
          <h5 class="card-title">Galería de Automóviles</h5>
          <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/img/banner-lavado-autos-moderno_1426-5432.jpg" class="d-block w-100" alt="Carro 1">
              </div>
              <div class="carousel-item">
                <img src="/img/SV-Banner-catalogo.webp" class="d-block w-100" alt="Carro 2">
              </div>
              <div class="carousel-item">
                <img src="/img/banner2.jpg" class="d-block w-100" alt="Carro 3">
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
          <p class="mt-2">Explora nuestra colección de automóviles clásicos</p>
          <router-link to="/doge-challer" class="btn btn-warning">Más información</router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- Resto del código permanece igual -->
</template>

<style>
/* Eliminado el estilo body que debe estar en el archivo principal */
</style>