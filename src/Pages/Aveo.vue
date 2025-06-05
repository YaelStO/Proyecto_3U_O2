<script>
export default {
  name: "AutoAveo",
};
</script>

<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4">Chevrolet Aveo</h1>
        <span class="price-tag mb-3">$13,500 USD</span>

        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title">
              <i class="fas fa-list-alt me-2"></i>Especificaciones
            </h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-tachometer-alt"></i></span>
                <span>Motor: 1.5L 4 cilindros</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-horse"></i></span>
                <span>Potencia: 98 HP</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-bolt"></i></span>
                <span>0-100 km/h: 12.5 segundos</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-paint-brush"></i></span>
                <span>Color: Gris Metálico</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-cogs"></i></span>
                <span>Transmisión: Manual 5 velocidades</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-road"></i></span>
                <span>Kilometraje: 20,000 km</span>
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
              El Chevrolet Aveo es un sedán compacto muy popular en México por su bajo consumo de combustible, accesibilidad y mantenimiento económico.
            </p>
            <p>Características destacadas:</p>
            <ul>
              <li>Amplio espacio interior</li>
              <li>Ideal para ciudad</li>
              <li>Buen rendimiento de gasolina</li>
              <li>Frenos ABS y bolsas de aire</li>
              <li>Sistema de infoentretenimiento con Bluetooth</li>
            </ul>
            <router-link to="/contacto" class="btn btn-inquiry mt-3">
              <i class="fas fa-envelope me-2"></i>Solicitar información
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <img
          src="https://static.wixstatic.com/media/3a3da7_c4e20984981346749a4536bdc60d5fe4.jpg/v1/fill/w_858,h_428,al_c,q_85,enc_avif,quality_auto/3a3da7_c4e20984981346749a4536bdc60d5fe4.jpg"
          class="img-fluid rounded vehicle-img"
          alt="Chevrolet Aveo"
        />
      </div>
    </div>
  </main>

  <footer class="bg-dark text-white py-4 mt-auto">
    <div class="container text-center">
      <p class="mb-0">
        © 2025 Vehículos Mexicanos - Todos los derechos reservados
      </p>
    </div>
  </footer>
</template>