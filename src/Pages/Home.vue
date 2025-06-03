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
                <img src="https://cdn.pixabay.com/photo/2020/05/30/15/01/car-5238784_1280.jpg" class="d-block w-100" alt="Carro 1">
              </div>
              <div class="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2015/01/19/13/51/mustang-604548_1280.jpg" class="d-block w-100" alt="Carro 2">
              </div>
              <div class="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2016/03/27/21/16/classic-car-1281643_1280.jpg" class="d-block w-100" alt="Carro 3">
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
          <a href="#" class="btn btn-warning">Más información</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Cards -->
  <div class="container mt-4">
    <div class="row">

      <!-- Card 1 -->
      <div class="col-md-4">
        <div class="card mb-4 text-center">
          <img src="https://www.gallery-aaldering.com/wp-content/uploads/2025/02/ford-mustang-shelby-gt-500-fastback-1967.jpg?v=13">
          <div class="card-body">
            <h5 class="card-title">Ford Mustang 1967</h5>
            <p class="card-text"><strong>Precio:</strong> $35,000 USD</p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-md-4">
        <div class="card mb-4 text-center">
          <img src="https://cdn.pixabay.com/photo/2015/05/15/14/42/mustang-768441_1280.jpg" class="card-img-top" alt="Shelby GT500">
          <div class="card-body">
            <h5 class="card-title">Shelby GT500 1968</h5>
            <p class="card-text"><strong>Precio:</strong> $52,000 USD</p>
          </div>
        </div>
      </div>

      <!-- Card 3 (camioneta) -->
      <div class="col-md-4">
        <div class="card mb-4 text-center">
          <img src="https://cdn.pixabay.com/photo/2016/11/19/13/10/auto-1838767_1280.jpg" class="card-img-top" alt="Camioneta">
          <div class="card-body">
            <h5 class="card-title">Chevrolet Pickup 1972</h5>
            <p class="card-text"><strong>Precio:</strong> $28,000 USD</p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Formulario de búsqueda en parte inferior -->
  <div class="container mt-5 mb-5">
    <h4 class="mb-4 text-center">Buscar vehículo</h4>
    <form action="/buscar" method="get">
      <div class="row g-3 align-items-center">
        <div class="col-md-4">
          <label for="year" class="form-label">Año de modelo</label>
          <input type="number" id="year" name="year" class="form-control" placeholder="Ej. 1967" min="1900" max="2025">
        </div>
        <div class="col-md-4">
          <label for="brand" class="form-label">Marca</label>
          <input type="text" id="brand" name="brand" class="form-control" placeholder="Ej. Ford">
        </div>
        <div class="col-md-4">
          <label for="origin" class="form-label">Origen</label>
          <select class="form-select" id="origin" name="origin">
            <option value="">Seleccione origen</option>
            <option value="usa">EE.UU.</option>
            <option value="japan">Japón</option>
            <option value="germany">Alemania</option>
            <option value="mexico">México</option>
          </select>
        </div>
      </div>
      <div class="text-center mt-4">
        <button class="btn btn-success px-5" type="submit">Buscar</button>
      </div>
    </form>
  </div>
</template>

<style>
body {
  padding-top: 70px;
}
</style>
