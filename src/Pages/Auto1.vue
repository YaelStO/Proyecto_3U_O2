<script>
export default {
  name: 'Auto1'
}
</script>

<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4">Ford Mustang 1967 Shelby GT500</h1>
        <span class="price-tag mb-3">$54,000 USD</span>
        
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-list-alt me-2"></i>Especificaciones</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-tachometer-alt"></i></span>
                <span>Motor: 7.0L V8</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-horse"></i></span>
                <span>Potencia: 400 HP</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-bolt"></i></span>
                <span>0-100 km/h: 5.8 segundos</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-paint-brush"></i></span>
                <span>Color: Wimbledon White</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-cogs"></i></span>
                <span>Transmisión: Manual 4 velocidades</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-road"></i></span>
                <span>Kilometraje: 28,500 millas</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-file-alt me-2"></i>Descripción</h3>
            <p>El Ford Mustang Shelby GT500 1967 es uno de los muscle cars más emblemáticos de la historia, con su potente motor V8 y diseño agresivo.</p>
            <p>Características destacadas:</p>
            <ul>
              <li>Motor 428 Cobra Jet</li>
              <li>Franjas de carreras originales</li>
              <li>Asientos deportivos Shelby</li>
              <li>Sistema de escape dual</li>
              <li>Documentación de autenticidad</li>
            </ul>
            <button class="btn btn-inquiry mt-3">
              <i class="fas fa-envelope me-2"></i>Solicitar información
            </button>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6">
        <img src="https://cdn.motor1.com/images/mgl/3kOxp/s1/1967-ford-mustang-shelby-gt500-super-snake.jpg" class="img-fluid rounded vehicle-img" alt="Ford Mustang Shelby GT500 1967">
        
        <div class="row mt-4">
          <div class="col-md-6 mb-3">
            <img src="https://www.mustangspecs.com/wp-content/uploads/2020/05/1967-shelby-gt500-interior.jpg" class="img-fluid rounded" alt="Interior Mustang">
          </div>
          <div class="col-md-6 mb-3">
            <img src="https://www.mustangspecs.com/wp-content/uploads/2020/05/1967-shelby-gt500-engine.jpg" class="img-fluid rounded" alt="Motor Mustang">
          </div>
        </div>
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
  background-color: #dc3545;
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
  color: #dc3545;
  width: 25px;
  text-align: center;
  margin-right: 10px;
}
.btn-inquiry {
  background-color: #dc3545;
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 25px;
}
.btn-inquiry:hover {
  background-color: #c82333;
  color: white;
}
</style>