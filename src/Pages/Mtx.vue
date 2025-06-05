<script>
export default {
  name: "AutoMastrettaMXT",
};
</script>

<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4">Mastretta MXT</h1>
        <span class="price-tag mb-3">$58,000 USD</span>

        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-list-alt me-2"></i>Especificaciones</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><i class="fas fa-tachometer-alt me-2"></i>Motor: 2.0L turbo Ford Duratec</li>
              <li class="list-group-item"><i class="fas fa-horse me-2"></i>Potencia: 250 HP</li>
              <li class="list-group-item"><i class="fas fa-bolt me-2"></i>0-100 km/h: 4.9 segundos</li>
              <li class="list-group-item"><i class="fas fa-cogs me-2"></i>Transmisión: Manual 5 velocidades</li>
              <li class="list-group-item"><i class="fas fa-road me-2"></i>Peso: 930 kg</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-file-alt me-2"></i>Descripción</h3>
            <p>
              El Mastretta MXT es el primer auto deportivo mexicano de producción. Su chasis liviano y enfoque en la experiencia de manejo lo hacen único.
            </p>
            <ul>
              <li>Diseñado y ensamblado en México</li>
              <li>Diseño tipo coupé ligero</li>
              <li>Enfoque 100% deportivo</li>
              <li>Excelente agarre y balance</li>
            </ul>
            <router-link to="/contacto" class="btn btn-inquiry mt-3">
              <i class="fas fa-envelope me-2"></i>Solicitar información
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <img
          src="https://runrunes.org/wp-content/uploads/2011/02/1_1-647x432.jpg"
          class="img-fluid rounded vehicle-img"
          alt="Mastretta MXT"
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