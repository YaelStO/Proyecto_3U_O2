<script>
export default {
  name: 'Shelby'
}
</script>

<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4">Shelby GT500 1968</h1>
        <span class="price-tag mb-3">$52,000 USD</span>
        
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-list-alt me-2"></i>Especificaciones</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-tachometer-alt"></i></span>
                <span>Motor: 7.0L V8 Cobra Jet</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-horse"></i></span>
                <span>Potencia: 355 HP</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-bolt"></i></span>
                <span>0-100 km/h: 6.5 segundos</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-paint-brush"></i></span>
                <span>Color: Acapulco Blue</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-cogs"></i></span>
                <span>Transmisión: Manual 4 velocidades</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-road"></i></span>
                <span>Kilometraje: 45,200 millas</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-file-alt me-2"></i>Descripción</h3>
            <p>El Shelby GT500 1968 es una leyenda del muscle car americano, con su distintivo diseño y potencia bruta.</p>
            <p>Características destacadas:</p>
            <ul>
              <li>Motor Cobra Jet 428 cuyas partes fueron diseñadas para competición</li>
              <li>Franjas de competencia Shelby</li>
              <li>Asientos deportivos con logotipo Shelby</li>
              <li>Rines magnesio originales</li>
              <li>Documentación y números de chasis verificados</li>
            </ul>
            <router-link to="/contacto" class="btn btn-inquiry mt-3">
              <i class="fas fa-envelope me-2"></i>Solicitar información
            </router-link>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6">
        <img src="https://revologycars.com/wp-content/uploads/2024/10/1967-revology-shelby-gt500-243-02-1024x683.jpg" class="img-fluid rounded vehicle-img" alt="Shelby GT500 1968">
        
      </div>
    </div>
  </main>

  <footer class="bg-dark text-white py-4 mt-auto">
    <div class="container text-center">
      <p class="mb-0">© 2023 Clásicos Americanos - Todos los derechos reservados</p>
    </div>
  </footer>
</template>

<style scoped>
body {
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
.price-tag {
  background-color: #007bff;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  display: inline-block;
}
.vehicle-img {
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  transition: transform 0.3s ease;
}
.vehicle-img:hover {
  transform: scale(1.02);
}
.specs-icon {
  color: #007bff;
  width: 25px;
  text-align: center;
  margin-right: 10px;
}
.btn-inquiry {
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 25px;
}
.btn-inquiry:hover {
  background-color: #0069d9;
  color: white;
}
</style>