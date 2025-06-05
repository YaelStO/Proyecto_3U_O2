<script setup>
</script>

<template>
  <!-- Hero Section -->
  <section class="hero-section text-center" id="inicio">
    <div class="container">
      <h1 class="display-4 fw-bold">Autos Clásicos en Exhibición</h1>
      <p class="lead">Descubre modelos icónicos y legendarios</p>
    </div>
  </section>

  <!-- Autos Destacados -->
  <section class="container mb-5" id="destacado">
    <h2 class="text-center mb-4">¡Lo más destacado!</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <!-- Auto 1 -->
      <div class="col">
        <div class="card h-100">
          <img src="https://cdn.pixabay.com/photo/2015/01/19/13/51/mustang-604548_1280.jpg" class="card-img-top img-fluid" alt="Mustang" style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Ford Mustang 1967</h5>
            <p class="card-text">Precio: $35,000 USD</p>
            <a href="/Auto1" class="btn btn-warning mt-auto">Ver auto</a>
          </div>
        </div>
      </div>

      <!-- Auto 2 -->
      <div class="col">
        <div class="card h-100">
          <img src="https://cdn.pixabay.com/photo/2016/03/27/21/16/classic-car-1281643_1280.jpg" class="card-img-top img-fluid" alt="Shelby GT500" style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Shelby GT500 1968</h5>
            <p class="card-text">Precio: $52,000 USD</p>
            <a href="#" class="btn btn-warning mt-auto">Ver auto</a>
          </div>
        </div>
      </div>

      <!-- Auto 3 -->
      <div class="col">
        <div class="card h-100">
          <img src="https://cdn.pixabay.com/photo/2016/11/19/13/10/auto-1838767_1280.jpg" class="card-img-top img-fluid" alt="Pickup" style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Chevrolet Pickup 1972</h5>
            <p class="card-text">Precio: $28,000 USD</p>
            <a href="#" class="btn btn-warning mt-auto">Ver auto</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Más Autos -->
  <section class="container mb-5" id="destacado2">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <!-- Auto 4 -->
      <div class="col">
        <div class="card h-100">
          <img src="https://cdn.pixabay.com/photo/2017/08/01/09/04/auto-2560936_1280.jpg" class="card-img-top img-fluid" alt="Dodge Charger" style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Dodge Charger 1970</h5>
            <p class="card-text">Precio: $47,000 USD</p>
            <a href="#" class="btn btn-warning mt-auto">Ver auto</a>
          </div>
        </div>
      </div>

      <!-- Auto 5 -->
      <div class="col">
        <div class="card h-100">
          <img src="https://cdn.pixabay.com/photo/2019/12/28/02/53/car-4726572_1280.jpg" class="card-img-top img-fluid" alt="Camaro" style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Chevrolet Camaro 1969</h5>
            <p class="card-text">Precio: $40,000 USD</p>
            <a href="#" class="btn btn-warning mt-auto">Ver auto</a>
          </div>
        </div>
      </div>

      <!-- Auto 6 -->
      <div class="col">
        <div class="card h-100">
          <img src="https://cdn.pixabay.com/photo/2018/04/04/10/35/chevrolet-3289815_1280.jpg" class="card-img-top img-fluid" alt="Corvette" style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Chevrolet Corvette 1963</h5>
            <p class="card-text">Precio: $60,000 USD</p>
            <a href="#" class="btn btn-warning mt-auto">Ver auto</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.hero-section {
  background-color: #f8f9fa;
  padding: 60px 0;
}
</style>