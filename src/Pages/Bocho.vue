<script>
export default {
  name: 'Bocho'
}
</script>

<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4">Volkswagen Beetle 2003</h1>
        <span class="price-tag mb-3">$110,000 MXN</span>
        
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-list-alt me-2"></i>Especificaciones</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-tachometer-alt"></i></span>
                <span>Motor: 2.0L 4 cilindros</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-horse"></i></span>
                <span>Potencia: 115 HP</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-bolt"></i></span>
                <span>Consumo: 12 km/L</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-paint-brush"></i></span>
                <span>Color: Amarillo</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-cogs"></i></span>
                <span>Transmisión: Automática 4 velocidades</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-road"></i></span>
                <span>Kilometraje: 95,000 km</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-file-alt me-2"></i>Descripción</h3>
            <p>El clásico Volkswagen Beetle modernizado, uno de los autos más icónicos de México con un diseño único.</p>
            <p>Características destacadas:</p>
            <ul>
              <li>Versión GLS con todos los extras</li>
              <li>Techo corredizo eléctrico</li>
              <li>Sistema de audio premium</li>
              <li>Asientos de piel</li>
              <li>Restauración reciente</li>
            </ul>
            <router-link to="/contacto" class="btn btn-inquiry mt-3">
              <i class="fas fa-envelope me-2"></i>Solicitar información
            </router-link>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6">
        <img src="https://img.remediosdigitales.com/276ee8/db2019al01148_large/1024_2000.jpg" class="img-fluid rounded vehicle-img" alt="VW Beetle 2003">
      </div>
    </div>
  </main>

  <footer class="bg-dark text-white py-4 mt-auto">
    <div class="container text-center">
      <p class="mb-0">© 2023 Autos Mexicanos - Todos los derechos reservados</p>
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
  background-color: #ffc107;
  color: black;
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
  color: #ffc107;
  width: 25px;
  text-align: center;
  margin-right: 10px;
}
.btn-inquiry {
  background-color: #ffc107;
  color: black;
  font-weight: bold;
  border: none;
  padding: 10px 25px;
}
.btn-inquiry:hover {
  background-color: #e0a800;
  color: black;
}
</style>