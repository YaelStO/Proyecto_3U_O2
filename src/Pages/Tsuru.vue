<script>
export default {
  name: 'tsuru'
}
</script>

<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4">Nissan Tsuru 2015</h1>
        <span class="price-tag mb-3">$135,000 MXN</span>
        
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-list-alt me-2"></i>Especificaciones</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-tachometer-alt"></i></span>
                <span>Motor: 1.6L 4 cilindros</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-horse"></i></span>
                <span>Potencia: 105 HP</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-bolt"></i></span>
                <span>Consumo: 14 km/L</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-paint-brush"></i></span>
                <span>Color: Blanco</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-cogs"></i></span>
                <span>Transmisión: Manual 5 velocidades</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-road"></i></span>
                <span>Kilometraje: 85,000 km</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-file-alt me-2"></i>Descripción</h3>
            <p>El legendario Nissan Tsuru, el auto más popular en México por décadas, conocido por su bajo costo de mantenimiento.</p>
            <p>Características destacadas:</p>
            <ul>
              <li>Versión GS 1.6 con aire acondicionado</li>
              <li>Frenos ABS</li>
              <li>Bolsa de aire para conductor</li>
              <li>Servicio reciente completo</li>
              <li>Historial de servicio completo</li>
            </ul>
            <router-link to="/contacto" class="btn btn-inquiry mt-3">
              <i class="fas fa-envelope me-2"></i>Solicitar información
            </router-link>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6">
        <img src="https://cdn.forbes.com.mx/2016/06/tsuru-nissan.jpg" class="img-fluid rounded vehicle-img" alt="Nissan Tsuru 2015">
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