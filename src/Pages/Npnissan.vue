<script>
export default {
  name: "AutoNP300",
};
</script>

<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4">Nissan NP300</h1>
        <span class="price-tag mb-3">$18,000 USD</span>

        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title">
              <i class="fas fa-list-alt me-2"></i>Especificaciones
            </h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-tachometer-alt"></i></span>
                <span>Motor: 2.5L 4 cilindros</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-horse"></i></span>
                <span>Potencia: 166 HP</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-bolt"></i></span>
                <span>0-100 km/h: 11.5 segundos</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-paint-brush"></i></span>
                <span>Color: Blanco Perlado</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-cogs"></i></span>
                <span>Transmisión: Manual 6 velocidades</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-road"></i></span>
                <span>Kilometraje: 15,000 km</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h3 class="card-title">
              <i class="fas fa-file-alt me-2"></i>Descripción
            </h3>
            <p>
              La Nissan NP300 es una pickup confiable y resistente, ideal para el trabajo rudo y el uso diario en ciudad o campo.
            </p>
            <p>Características destacadas:</p>
            <ul>
              <li>Gran capacidad de carga</li>
              <li>Diseño robusto</li>
              <li>Motor eficiente</li>
              <li>Sistema de frenos ABS</li>
              <li>Aire acondicionado y conectividad Bluetooth</li>
            </ul>
            <router-link to="/contacto" class="btn btn-inquiry mt-3">
              <i class="fas fa-envelope me-2"></i>Solicitar información
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <img
          src="https://www.nissanoaxaca.com.mx/static/agency-go-virtual/Nissan/NP300/2023/Exterior/1.jpg"
          class="img-fluid rounded vehicle-img"
          alt="Nissan NP300"
        />
      </div>
    </div>
  </main>

  <footer class="bg-dark text-white py-4 mt-auto">
    <div class="container text-center">
      <p class="mb-0">
        © 2023 Vehículos Mexicanos - Todos los derechos reservados
      </p>
    </div>
  </footer>
</template>