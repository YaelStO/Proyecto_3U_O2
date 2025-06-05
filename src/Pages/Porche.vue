<script>
export default {
  name: "AutoPorsche911TurboS",
};
</script>

<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4">Porsche 911 Turbo S</h1>
        <span class="price-tag mb-3">$230,000 USD</span>

        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title">
              <i class="fas fa-list-alt me-2"></i>Especificaciones
            </h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><i class="fas fa-tachometer-alt me-2"></i>Motor: 3.8L Bóxer Twin-Turbo</li>
              <li class="list-group-item"><i class="fas fa-horse me-2"></i>Potencia: 640 HP</li>
              <li class="list-group-item"><i class="fas fa-bolt me-2"></i>0-100 km/h: 2.7 segundos</li>
              <li class="list-group-item"><i class="fas fa-cogs me-2"></i>Transmisión: Automática PDK de 8 velocidades</li>
              <li class="list-group-item"><i class="fas fa-road me-2"></i>Tracción: Total (AWD)</li>
              <li class="list-group-item"><i class="fas fa-gas-pump me-2"></i>Consumo combinado: 9.5 km/L</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h3 class="card-title">
              <i class="fas fa-file-alt me-2"></i>Descripción
            </h3>
            <p>
              El Porsche 911 Turbo S es la cúspide del rendimiento y lujo dentro de la legendaria gama 911. Combina potencia extrema, aerodinámica avanzada y una ingeniería alemana refinada que lo hace ideal tanto para pista como para el uso diario.
            </p>
            <ul>
              <li>Sistema Porsche Active Suspension Management (PASM)</li>
              <li>Interior con acabados en cuero y fibra de carbono</li>
              <li>Sistema de frenos cerámicos (PCCB)</li>
              <li>Pantalla táctil de 10.9 pulgadas con navegación</li>
              <li>Control dinámico de chasis (PDCC)</li>
            </ul>
            <router-link to="/contacto" class="btn btn-inquiry mt-3">
              <i class="fas fa-envelope me-2"></i>Solicitar información
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/img-5-6655e9bb8e066.jpg?crop=1xw:1xh;center,top&resize=980:*"
          class="img-fluid rounded vehicle-img"
          alt="Porsche 911 Turbo S"
        />
      </div>
    </div>
  </main>

  <footer class="bg-dark text-white py-4 mt-auto">
    <div class="container text-center">
      <p class="mb-0">© 2023 Vehículos Mexicanos - Todos los derechos reservados</p>
    </div>
  </footer>
</template>